import express from "express";
import mongoose from "mongoose";
import { Contact } from "../models/Contact.js";

const router = express.Router();

/**
 * POST /api/demo-request
 * Handles demo request form submissions from the frontend.
 * 
 * Business Logic:
 * 1. Validates that Name, Email, and Phone are present and non-empty.
 * 2. Trims whitespace to prevent blank string bypasses.
 * 3. Saves the document directly into MongoDB via Mongoose Contact model.
 * 
 * @param {import("express").Request} request - Expects JSON body { name, email, phone }
 * @param {import("express").Response} response - Returns 201 (Created), 400 (Bad Request), or 500 (Server Error)
 */
router.post("/demo-request", async (request, response) => {
  const { name, email, phone } = request.body;

  if (
    !name || typeof name !== "string" || name.trim() === "" ||
    !email || typeof email !== "string" || email.trim() === "" ||
    !phone || typeof phone !== "string" || phone.trim() === ""
  ) {
    return response.status(400).json({ message: "Name, email, and phone are required." });
  }

  try {
    if (mongoose.connection.readyState === 1) {
      const newContact = new Contact({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim()
      });
      await newContact.save();
      console.log(`[Demo Request] Saved to DB: ${name.trim()} (${email.trim()})`);
      return response.status(201).json({ message: "Request received and saved." });
    } else {
      console.error("[Demo Request Error] Failed to save because database is not connected.");
      return response.status(503).json({ 
        message: "Database connection is currently unavailable. Please try again in a few moments." 
      });
    }
  } catch (error) {
    console.error("[Demo Request Error]", error.message);
    response.status(500).json({ message: "Server error while saving your request." });
  }
});

export default router;
