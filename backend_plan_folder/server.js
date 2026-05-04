// src/server.js
// ─────────────────────────────────────────────────────────────
//  Entry point. Boots in order:
//    1. Validate env vars (env.js — already imported via app)
//    2. Connect to MongoDB
//    3. Start Express
//    4. Start cron job
//
//  Graceful shutdown handles SIGTERM (Render restarts, deploys)
//  so in-flight requests complete before the process exits.
// ─────────────────────────────────────────────────────────────

const app = require("./app");
const connectDB = require("./config/db");
const { startExportJob } = require("./jobs/export.job");
const { PORT } = require("./config/env");

let server;

async function boot() {
  // 1. Connect to MongoDB
  await connectDB();

  // 2. Start HTTP server
  server = app.listen(PORT, () => {
    console.log(`\n[SERVER] 🚀 Running on http://localhost:${PORT}`);
    console.log(`[SERVER] 📍 Health check: http://localhost:${PORT}/health`);
    console.log(`[SERVER] 📬 Contact API:  POST http://localhost:${PORT}/api/contact\n`);
  });

  // 3. Start cron job (runs inside the same process — no separate worker needed)
  startExportJob();
}

boot().catch((err) => {
  console.error("[SERVER] ❌ Failed to start:", err.message);
  process.exit(1);
});

// ── Graceful shutdown ─────────────────────────────────────────
async function gracefulShutdown(signal) {
  console.log(`\n[SERVER] ${signal} received — shutting down gracefully…`);
  if (server) {
    server.close(() => {
      console.log("[SERVER] 🔌 HTTP server closed");
      process.exit(0);
    });
    // Force exit after 10 seconds if something hangs
    setTimeout(() => {
      console.error("[SERVER] ⚠️  Force exiting after timeout");
      process.exit(1);
    }, 10_000);
  } else {
    process.exit(0);
  }
}

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT",  () => gracefulShutdown("SIGINT"));

// Catch any uncaught exceptions/rejections — log but don't hide them
process.on("uncaughtException", (err) => {
  console.error("[SERVER] 💥 Uncaught Exception:", err);
  gracefulShutdown("uncaughtException");
});
process.on("unhandledRejection", (reason) => {
  console.error("[SERVER] 💥 Unhandled Rejection:", reason);
});
