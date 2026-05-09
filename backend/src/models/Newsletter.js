// src/models/Newsletter.js
// ─────────────────────────────────────────────────────────────
//  Target table for newsletter subscriptions — deduplicated by email.
//  Records are merged here from newsletters_stage by the merge job.
// ─────────────────────────────────────────────────────────────

const mongoose = require("mongoose");
const { getIST } = require("../utils/ist");

const NewsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  subscribedAt: { type: String, default: getIST },
});

module.exports = mongoose.model("Newsletter", NewsletterSchema);
