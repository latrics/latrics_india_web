// src/jobs/export.job.js
// ─────────────────────────────────────────────────────────────
//  Twice-daily cron job.
//
//  Flow:
//    1. Fetch all contacts where exported = false
//    2. If none → log and exit gracefully (no email sent)
//    3. Generate CSV buffer (no disk writes)
//    4. Send email with CSV attached (with retry)
//    5. ONLY if email succeeded → mark records exported = true
//       (if email fails, records stay unexported and are picked
//        up in the next run — no data loss)
//    6. Log the outcome
//
//  Cron schedule is read from env each time the server starts,
//  so changing CRON_SCHEDULE in .env + restarting is all you need.
// ─────────────────────────────────────────────────────────────

const cron = require("node-cron");
const mongoose = require("mongoose");
const Contact = require("../models/Contact");
const { generateCSV } = require("../services/csv.service");
const { sendCSVReport } = require("../services/email.service");
const { CRON_SCHEDULE } = require("../config/env");

/** The actual job logic, separated so it can be tested/called manually */
async function runExportJob() {
  const runId = new Date().toISOString();
  console.log(`\n[CRON] ▶ Export job started at ${runId}`);

  // Abort if DB is not connected
  if (mongoose.connection.readyState !== 1) {
    console.warn("[CRON] ⚠️  MongoDB not connected — skipping this run");
    return;
  }

  let contacts;
  try {
    contacts = await Contact.find({ exported: false }).sort({ createdAt: 1 });
  } catch (err) {
    console.error(`[CRON] ❌ DB fetch failed: ${err.message}`);
    return; // don't crash — next cron run will retry
  }

  if (!contacts.length) {
    console.log("[CRON] ℹ️  No new contacts — nothing to export");
    return;
  }

  console.log(`[CRON] 📦 Found ${contacts.length} unexported contact(s)`);

  // Build a timestamped filename
  const dateStr = new Date().toISOString().split("T")[0]; // e.g. "2025-01-15"
  const timeStr = new Date().toTimeString().slice(0, 5).replace(":", "h");   // e.g. "09h00"
  const filename = `contacts_${dateStr}_${timeStr}.csv`;

  let csvBuffer;
  try {
    csvBuffer = generateCSV(contacts);
  } catch (err) {
    console.error(`[CRON] ❌ CSV generation failed: ${err.message}`);
    return;
  }

  // Send email — this will retry internally up to 3 times
  try {
    await sendCSVReport(csvBuffer, filename, contacts.length);
  } catch (err) {
    // Email completely failed after all retries.
    // We do NOT mark records exported so they're included next run.
    console.error(
      `[CRON] ❌ Email failed — records NOT marked exported. Will retry next run.\n  ${err.message}`
    );
    return;
  }

  // ✅ Email sent — now mark records as exported
  // Use the IDs we already fetched to avoid a race condition with new submissions
  const ids = contacts.map((c) => c._id);
  try {
    const result = await Contact.updateMany(
      { _id: { $in: ids } },
      { $set: { exported: true } }
    );
    console.log(
      `[CRON] ✅ Marked ${result.modifiedCount} record(s) as exported`
    );
  } catch (err) {
    // Email was already sent, so we log a warning.
    // Records will appear in the NEXT export too — a minor duplicate
    // is far better than losing data.
    console.error(
      `[CRON] ⚠️  Email sent but failed to mark records exported: ${err.message}`
    );
  }

  console.log(`[CRON] ✅ Export job finished at ${new Date().toISOString()}\n`);
}

/** Register the cron schedule */
function startExportJob() {
  if (!cron.validate(CRON_SCHEDULE)) {
    console.error(
      `[CRON] ❌ Invalid CRON_SCHEDULE: "${CRON_SCHEDULE}" — job not started`
    );
    return;
  }

  console.log(`[CRON] ⏰ Export job scheduled: "${CRON_SCHEDULE}"`);

  cron.schedule(CRON_SCHEDULE, async () => {
    try {
      await runExportJob();
    } catch (err) {
      // Safety net — cron must never crash the whole process
      console.error(`[CRON] 🔥 Unexpected error in export job: ${err.message}`);
    }
  });
}

module.exports = { startExportJob, runExportJob };
