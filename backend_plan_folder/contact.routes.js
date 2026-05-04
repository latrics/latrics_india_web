// src/routes/contact.routes.js

const express = require("express");
const router = express.Router();

const { submitContact } = require("../controllers/contact.controller");
const { validate, contactSchema } = require("../middlewares/validate.middleware");
const { contactRateLimiter } = require("../middlewares/rateLimit.middleware");

// POST /api/contact
// Rate limit → Validate → Save
router.post("/", contactRateLimiter, validate(contactSchema), submitContact);

module.exports = router;
