// src/middlewares/rateLimit.middleware.js

const rateLimit = require("express-rate-limit");
const { RATE_LIMIT_WINDOW_MS, RATE_LIMIT_MAX } = require("../config/env");

const contactRateLimiter = rateLimit({
  windowMs: RATE_LIMIT_WINDOW_MS, // default 15 minutes
  max: RATE_LIMIT_MAX,            // default 20 requests per window per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: "Too many requests from this IP. Please try again later.",
  },
  // Log rate-limit hits so you can spot abuse
  handler: (req, res, next, options) => {
    console.warn(
      `[RATE-LIMIT] IP ${req.ip} exceeded limit on ${req.path}`
    );
    res.status(options.statusCode).json(options.message);
  },
});

module.exports = { contactRateLimiter };
