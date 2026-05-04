// src/app.js
// ─────────────────────────────────────────────────────────────
//  Express app configuration.
//  Separated from server.js so the app can be imported in tests.
// ─────────────────────────────────────────────────────────────

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const env = require("./config/env");
const contactRoutes = require("./routes/contact.routes");
const { notFound, errorHandler } = require("./middlewares/error.middleware");

const app = express();

// ── Security headers ──────────────────────────────────────────
app.use(helmet());

// ── CORS ──────────────────────────────────────────────────────
// Reads from env.CORS_ORIGINS — update CORS_ORIGIN in .env, restart, done.
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., server-to-server, curl)
    if (!origin) return callback(null, true);
    if (env.CORS_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`[CORS] ❌ Blocked origin: ${origin}`);
      callback(new Error(`CORS: Origin "${origin}" is not allowed`));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: false,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight

// ── Body parsing ──────────────────────────────────────────────
app.use(express.json({ limit: "16kb" }));          // Reject absurdly large payloads
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// ── Health check ──────────────────────────────────────────────
// Used by Render / uptime monitors to keep the service alive.
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
  });
});

// ── API routes ────────────────────────────────────────────────
app.use("/api/contact", contactRoutes);

// ── 404 + Error handlers (must be last) ──────────────────────
app.use(notFound);
app.use(errorHandler);

module.exports = app;
