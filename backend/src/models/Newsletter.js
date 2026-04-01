import mongoose from "mongoose";

/**
 * Mongoose Schema definition for Newsletter Subscriptions.
 * 
 * Unique Constraints:
 * - `unique: true` creates a MongoDB unique index on the 'email' path. 
 *   If a user tries to subscribe a 2nd time with the same email, MongoDB will throw a duplicate key error (E11000),
 *   which we explicitly handle in `newsletterRoutes.js`.
 */
const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  }
});

export const Newsletter = mongoose.model("Newsletter", newsletterSchema);
