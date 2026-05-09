// src/models/NewsletterStage.js
// ─────────────────────────────────────────────────────────────
//  Stage table for newsletter subscriptions — every subscription
//  lands here. The merge job deduplicates and pushes to the
//  target 'newsletters' collection.
// ─────────────────────────────────────────────────────────────

const mongoose = require("mongoose");
const { getIST } = require("../utils/ist");

const NewsletterStageSchema = new mongoose.Schema({
  email: { type: String, required: true },
  merged: { type: Boolean, default: false },
  createdAt: { type: String, default: getIST },
});

module.exports = mongoose.model("NewsletterStage", NewsletterStageSchema, "newsletters_stage");
