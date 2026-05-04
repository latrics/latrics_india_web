// src/controllers/contact.controller.js

const Contact = require("../models/Contact");

/**
 * POST /api/contact
 * Saves a validated contact submission to MongoDB.
 */
async function submitContact(req, res, next) {
  try {
    const { name, email, phone, message } = req.validatedBody;

    const contact = await Contact.create({ name, email, phone, message });

    console.log(`[CONTACT] ✅ Saved — ${name} <${email}> (id: ${contact._id})`);

    return res.status(201).json({
      success: true,
      message: "Thank you! We'll be in touch soon.",
      id: contact._id,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { submitContact };
