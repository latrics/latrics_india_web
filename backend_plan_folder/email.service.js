// src/services/email.service.js
// ─────────────────────────────────────────────────────────────
//  Nodemailer wrapper.
//
//  KEY DESIGN: The transporter is created fresh each time
//  sendCSVReport() is called. This means if you update SMTP
//  credentials in .env and restart the server, the new values
//  are always picked up — no stale transporter issues.
//
//  Retry logic: attempts the send up to MAX_RETRIES times with
//  exponential back-off before giving up.
// ─────────────────────────────────────────────────────────────

const nodemailer = require("nodemailer");
const env = require("../config/env");

const MAX_RETRIES = 3;
const BASE_DELAY_MS = 3000; // 3s, 6s, 12s

/** Build a fresh transporter from current env values */
function createTransporter() {
  return nodemailer.createTransport({
    host: env.SMTP.host,
    port: env.SMTP.port,
    secure: env.SMTP.secure, // true = SSL (port 465), false = STARTTLS (port 587)
    auth: {
      user: env.SMTP.user,
      pass: env.SMTP.pass,
    },
    // Reasonable timeouts to avoid hanging the cron job forever
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

/** Simple promise-based delay */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Send the CSV report email with retry logic.
 *
 * @param {Buffer}  csvBuffer    - CSV file content
 * @param {string}  filename     - e.g. "contacts_2025-01-15.csv"
 * @param {number}  count        - number of contacts in the CSV
 */
async function sendCSVReport(csvBuffer, filename, count) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const transporter = createTransporter();

      // Optional: verify SMTP connection before trying to send
      await transporter.verify();

      await transporter.sendMail({
        from: env.EMAIL_FROM,
        to: env.EMAIL_TO,
        subject: `📋 Contact Form Report — ${count} new submission${count !== 1 ? "s" : ""} (${filename})`,
        text: [
          `Hello,`,
          ``,
          `Please find attached the latest contact form submissions.`,
          `Total new records in this report: ${count}`,
          ``,
          `This report was generated automatically.`,
        ].join("\n"),
        attachments: [
          {
            filename,
            content: csvBuffer,
            contentType: "text/csv",
          },
        ],
      });

      console.log(
        `[EMAIL] ✅ Sent "${filename}" (${count} records) to ${env.EMAIL_TO}` +
          (attempt > 1 ? ` after ${attempt} attempts` : "")
      );
      return; // success — exit the retry loop
    } catch (err) {
      lastError = err;
      console.warn(
        `[EMAIL] ⚠️  Attempt ${attempt}/${MAX_RETRIES} failed: ${err.message}`
      );
      if (attempt < MAX_RETRIES) {
        const delay = BASE_DELAY_MS * Math.pow(2, attempt - 1);
        console.log(`[EMAIL] ⏳ Retrying in ${delay / 1000}s…`);
        await sleep(delay);
      }
    }
  }

  // All retries exhausted
  throw new Error(
    `Failed to send email after ${MAX_RETRIES} attempts. Last error: ${lastError.message}`
  );
}

module.exports = { sendCSVReport };
