const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const env = require("./config/env");

const app = express();

// Middlewares
app.use(helmet());
app.use(
  cors({
    origin: env.CORS_ORIGINS.length > 0 ? env.CORS_ORIGINS : "*",
  })
);
app.use(express.json());

const limiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX,
  message: { success: false, message: "Too many requests, please try again later." }
});

app.use("/api/contact", limiter, require("./routes/contact.routes"));

app.get("/health", (req, res) => {
  res.json({ success: true, status: "UP", uptime: process.uptime() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("[ERROR]", err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

module.exports = app;
