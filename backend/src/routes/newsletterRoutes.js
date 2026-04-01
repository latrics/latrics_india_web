import express from "express";
import { Newsletter } from "../models/Newsletter.js";

const router = express.Router();

/**
 * POST /api/newsletter-subscribe
 * Handles email newsletter subscriptions from the frontend footer.
 * 
 * Business Logic:
 * 1. Validates string format (checks for '@' presence).
 * 2. Checks MongoDB if the email is already in the system (prevents primary key collisions).
 * 3. Saves new emails in lowercase for clean querying.
 * 
 * @param {import("express").Request} request - Expects JSON body { email }
 * @param {import("express").Response} response - Returns 201 (Created), 400 (Invalid), 409 (Conflict/Exists)
 */
router.post("/newsletter-subscribe", async (request, response) => {
  const { email } = request.body;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return response.status(400).json({ message: "A valid email address is required." });
  }

  try {
    const existing = await Newsletter.findOne({ email: email.toLowerCase() });
    if (existing) {
      return response.status(409).json({ message: "This email is already subscribed." });
    }

    const newSub = new Newsletter({ email: email.toLowerCase() });
    await newSub.save();

    console.log(`[Newsletter] New subscription: ${email}`);
    response.status(201).json({ message: "Successfully subscribed to newsletter." });
  } catch (error) {
    console.error("[Newsletter Error]", error.message);
    response.status(500).json({ message: "Server error. Please try again later." });
  }
});

export default router;
