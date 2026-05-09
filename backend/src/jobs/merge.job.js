// src/jobs/merge.job.js
// ─────────────────────────────────────────────────────────────
//  Auto-merge job: Stage → Target
//
//  Runs every 30 seconds (configurable). Picks up all unmerged
//  records from stage collections and upserts them into the
//  target collections, then marks them as merged.
//
//  Flow (Contacts):
//    1. Fetch all contacts_stage where merged = false
//    2. For each, upsert into contacts (by email)
//       - New email → create with history = []
//       - Existing email → push old data into history, update fields
//    3. Mark stage records as merged = true
//
//  Flow (Newsletters):
//    1. Fetch all newsletters_stage where merged = false
//    2. For each, upsert into newsletters (by email)
//       - If exists → skip (already subscribed)
//       - If new → create
//    3. Mark stage records as merged = true
// ─────────────────────────────────────────────────────────────

const ContactStage = require("../models/ContactStage");
const Contact = require("../models/Contact");
const NewsletterStage = require("../models/NewsletterStage");
const Newsletter = require("../models/Newsletter");
const { getIST } = require("../utils/ist");
const { sendNewsletterWelcomeEmail } = require("../services/email.service");

const MERGE_INTERVAL_MS = 30_000; // 30 seconds

let mergeTimer = null;

// ── Contact merge ────────────────────────────────────────────
async function mergeContacts() {
  const staged = await ContactStage.find({ merged: false }).sort({ createdAt: 1 });
  if (!staged.length) return 0;

  let mergedCount = 0;

  for (const record of staged) {
    try {
      const existing = await Contact.findOne({ email: record.email });

      if (existing) {
        // Push current data into history before overwriting
        existing.history.push({
          name: existing.name,
          phone: existing.phone,
          message: existing.message,
          stage: existing.stage,
          target: existing.target,
          submittedAt: existing.updatedAt || existing.createdAt,
        });

        // Update with new data
        existing.name = record.name;
        existing.phone = record.phone;
        existing.message = record.message;
        existing.updatedAt = getIST();
        await existing.save();
      } else {
        // Create new target record
        await Contact.create({
          name: record.name,
          email: record.email,
          phone: record.phone,
          message: record.message,
        });
      }

      // Mark stage record as merged
      record.merged = true;
      await record.save();
      mergedCount++;
    } catch (err) {
      console.error(`[MERGE] ❌ Contact merge failed for ${record.email}: ${err.message}`);
    }
  }

  return mergedCount;
}

// ── Newsletter merge ─────────────────────────────────────────
async function mergeNewsletters() {
  const staged = await NewsletterStage.find({ merged: false }).sort({ createdAt: 1 });
  if (!staged.length) return 0;

  let mergedCount = 0;

  for (const record of staged) {
    try {
      const existing = await Newsletter.findOne({ email: record.email.toLowerCase() });

      if (!existing) {
        await Newsletter.create({ email: record.email.toLowerCase() });
        // Send welcome email for truly new subscribers
        sendNewsletterWelcomeEmail(record.email.toLowerCase()).catch(err => {
          console.error(`[MERGE] ⚠️  Welcome email trigger failed for ${record.email}: ${err.message}`);
        });
      }

      // Mark stage record as merged (even if already subscribed)
      record.merged = true;
      await record.save();
      mergedCount++;
    } catch (err) {
      console.error(`[MERGE] ❌ Newsletter merge failed for ${record.email}: ${err.message}`);
    }
  }

  return mergedCount;
}

// ── Combined merge runner ────────────────────────────────────
async function runMerge() {
  try {
    const contacts = await mergeContacts();
    const newsletters = await mergeNewsletters();

    if (contacts > 0 || newsletters > 0) {
      console.log(
        `[MERGE] ✅ Merged ${contacts} contact(s), ${newsletters} newsletter(s) → target at ${getIST()}`
      );
    }
  } catch (err) {
    console.error(`[MERGE] 🔥 Unexpected merge error: ${err.message}`);
  }
}

// ── Start / Stop ─────────────────────────────────────────────
function startMergeJob() {
  console.log(`[MERGE] ⏰ Auto-merge running every ${MERGE_INTERVAL_MS / 1000}s`);

  // Run once immediately on startup
  runMerge();

  // Then repeat on interval
  mergeTimer = setInterval(runMerge, MERGE_INTERVAL_MS);
}

function stopMergeJob() {
  if (mergeTimer) {
    clearInterval(mergeTimer);
    mergeTimer = null;
  }
}

module.exports = { startMergeJob, stopMergeJob, runMerge };
