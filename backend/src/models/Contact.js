import mongoose from "mongoose";

/**
 * Mongoose Schema definition for Demo Requests / Contacts.
 * 
 * Data Integrity Features:
 * - `trim: true` automatically removes whitespace from beginning/end of strings.
 * - `lowercase: true` normalizes emails (e.g., 'User@Email.com' -> 'user@email.com') to prevent duplicate mismatches.
 * - `required: true` ensures MongoDB rejects any insert lacking these fields.
 */
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Contact = mongoose.model("Contact", contactSchema);
