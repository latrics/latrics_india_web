// src/models/ContactStage.js
// ─────────────────────────────────────────────────────────────
//  Stage table for contacts — every form submission lands here
//  as a raw record. The merge job picks up unmerged records and
//  upserts them into the target 'contacts' collection.
// ─────────────────────────────────────────────────────────────

const mongoose = require("mongoose");
const { getIST } = require("../utils/ist");

const ContactStageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  merged: { type: Boolean, default: false },
  createdAt: { type: String, default: getIST },
});

module.exports = mongoose.model("ContactStage", ContactStageSchema, "contacts_stage");
