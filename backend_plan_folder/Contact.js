// src/models/Contact.js

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name must be under 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [2000, "Message must be under 2000 characters"],
    },
    // Tracks whether this record has been included in a CSV export.
    // The cron job only fetches exported: false, then flips to true
    // after a successful email send — so records are never double-counted.
    exported: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true, // adds createdAt + updatedAt automatically
  }
);

// Compound index speeds up the cron query: "unexported records, newest first"
contactSchema.index({ exported: 1, createdAt: -1 });

module.exports = mongoose.model("Contact", contactSchema);
