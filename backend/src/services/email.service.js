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

/**
 * Send a welcome email to new newsletter subscribers.
 *
 * @param {string} email - The subscriber's email address
 */
async function sendNewsletterWelcomeEmail(email) {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const transporter = createTransporter();
      await transporter.verify();

      await transporter.sendMail({
        from: env.EMAIL_FROM,
        to: email,
        subject: "Welcome to Latrics Newsletter! 🚀",
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
            <div style="text-align: center; padding: 20px 0;">
              <h1 style="color: #DA291C; margin: 0;">LATRICS</h1>
              <p style="color: #666; font-size: 14px;">Autonomous Technology & Infrastructure</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
              <h2 style="color: #333; margin-top: 0;">Thanks for subscribing!</h2>
              <p style="color: #555; line-height: 1.6;">
                We're thrilled to have you on board. You've successfully joined the Latrics newsletter. 
                We'll keep you updated with the latest news on aerial infrastructure, intelligent analytics, 
                and sustainable development across India.
              </p>
              
              <div style="margin: 30px 0; padding: 20px; background-color: #fff5f5; border-left: 4px solid #DA291C;">
                <p style="margin: 0; color: #DA291C; font-weight: bold;">What's next?</p>
                <p style="margin: 5px 0 0; color: #666; font-size: 14px;">
                  Stay tuned for our upcoming updates. In the meantime, feel free to explore our latest articles and projects on our website.
                </p>
              </div>
              
              <p style="color: #555; line-height: 1.6;">
                If you have any questions or just want to say hi, feel free to reply to this email or contact our support team.
              </p>
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="https://latrics.com" style="background-color: #DA291C; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Visit Our Website</a>
              </div>
            </div>
            
            <div style="text-align: center; padding-top: 20px; color: #999; font-size: 12px;">
              <p>© 2026 Latrics India. All rights reserved.</p>
              <p>You received this email because you subscribed to our newsletter.</p>
            </div>
          </div>
        `,
      });

      console.log(`[EMAIL] ✅ Welcome email sent to ${email}`);
      return;
    } catch (err) {
      console.warn(`[EMAIL] ⚠️  Welcome email attempt ${attempt}/${MAX_RETRIES} failed for ${email}: ${err.message}`);
      if (attempt < MAX_RETRIES) {
        const delay = BASE_DELAY_MS * Math.pow(2, attempt - 1);
        await sleep(delay);
      }
    }
  }
}

module.exports = { sendCSVReport, sendNewsletterWelcomeEmail };
