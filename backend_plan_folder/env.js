// src/config/env.js
// ─────────────────────────────────────────────────────────────
//  Central environment config.
//  All process.env access goes through here — never scattered
//  throughout the codebase. This means changing a variable name
//  or adding a new one only touches THIS file.
// ─────────────────────────────────────────────────────────────

require("dotenv").config();

const REQUIRED = [
  "MONGO_URI",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "EMAIL_FROM",
  "EMAIL_TO",
];

// Validate at startup — crash immediately with a clear message
// rather than failing silently at runtime.
const missing = REQUIRED.filter((key) => !process.env[key]);
if (missing.length) {
  console.error(
    `\n[ENV] ❌ Missing required environment variables:\n  ${missing.join("\n  ")}\n` +
      `  → Copy .env.example to .env and fill in the values.\n`
  );
  process.exit(1);
}

const env = {
  // Server
  PORT: parseInt(process.env.PORT || "5000", 10),
  NODE_ENV: process.env.NODE_ENV || "development",
  IS_PROD: process.env.NODE_ENV === "production",

  // Database
  MONGO_URI: process.env.MONGO_URI,

  // Email / SMTP
  SMTP: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_SECURE === "true", // true for port 465
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_TO: process.env.EMAIL_TO,

  // Cron schedule (default: 9 AM and 9 PM daily)
  CRON_SCHEDULE: process.env.CRON_SCHEDULE || "0 9,21 * * *",

  // CORS — supports comma-separated list of origins
  CORS_ORIGINS: (process.env.CORS_ORIGIN || "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean),

  // Rate limiting
  RATE_LIMIT_WINDOW_MS: parseInt(
    process.env.RATE_LIMIT_WINDOW_MS || "900000",
    10
  ),
  RATE_LIMIT_MAX: parseInt(process.env.RATE_LIMIT_MAX || "20", 10),
};

module.exports = env;
