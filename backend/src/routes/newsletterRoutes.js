const express = require("express");
const NewsletterStage = require("../models/NewsletterStage");

const router = express.Router();

/**
 * POST /api/newsletter-subscribe
 * Saves subscription to newsletters_stage.
 * The merge job will deduplicate and push to the target newsletters collection.
 */
router.post("/", async (request, response) => {
  const { email } = request.body;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return response.status(400).json({ success: false, message: "A valid email address is required." });
  }

  try {
    const staged = await NewsletterStage.create({ email: email.toLowerCase().trim() });

    console.log(`[Newsletter] Staged subscription: ${staged.email}`);
    response.status(201).json({ success: true, message: "Successfully subscribed to newsletter." });
  } catch (error) {
    console.error("[Newsletter Error]", error.message);
    response.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
});

module.exports = router;
