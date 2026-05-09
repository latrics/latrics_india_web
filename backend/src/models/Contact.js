// src/models/Contact.js
// ─────────────────────────────────────────────────────────────
//  Target table for contacts — deduplicated by email.
//  Records are merged here from contacts_stage by the merge job.
// ─────────────────────────────────────────────────────────────

const mongoose = require("mongoose");
const { getIST } = require("../utils/ist");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  exported: { type: Boolean, default: false },

  // Lead management
  stage: {
    type: String,
    enum: ["new", "contacted", "follow-up", "qualified", "converted", "lost"],
    default: "new",
  },
  target: { type: String, default: null },

  // History of previous submissions (logged on each re-submission)
  history: [
    {
      name: String,
      phone: String,
      message: String,
      stage: String,
      target: String,
      submittedAt: String,
    },
  ],

  createdAt: { type: String, default: getIST },
  updatedAt: { type: String, default: null },
});

module.exports = mongoose.model("Contact", ContactSchema);
