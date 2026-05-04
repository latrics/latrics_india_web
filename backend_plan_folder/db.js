// src/config/db.js
// ─────────────────────────────────────────────────────────────
//  MongoDB connection with automatic reconnection.
//  Mongoose handles reconnection internally, but we add extra
//  event logging so you always know the DB state in your logs.
// ─────────────────────────────────────────────────────────────

const mongoose = require("mongoose");
const { MONGO_URI, IS_PROD } = require("./env");

const OPTIONS = {
  // Keep the connection alive
  serverSelectionTimeoutMS: 10000, // 10s to find a server
  socketTimeoutMS: 45000,          // 45s idle socket timeout
  // Connection pool — keeps throughput up under load
  maxPoolSize: 10,
  minPoolSize: 2,
};

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, OPTIONS);
    console.log(`[DB] ✅ Connected to MongoDB`);
  } catch (err) {
    console.error(`[DB] ❌ Initial connection failed: ${err.message}`);
    // Retry after 5 seconds instead of crashing — useful on Render cold starts
    console.log("[DB] ⏳ Retrying in 5 seconds…");
    setTimeout(connectDB, 5000);
  }
}

// Log reconnection events so you can spot flapping in production logs
mongoose.connection.on("disconnected", () =>
  console.warn("[DB] ⚠️  Disconnected — Mongoose will auto-reconnect")
);
mongoose.connection.on("reconnected", () =>
  console.log("[DB] 🔄 Reconnected to MongoDB")
);
mongoose.connection.on("error", (err) =>
  console.error(`[DB] ❌ Connection error: ${err.message}`)
);

// Graceful shutdown — close connection when the process exits
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("[DB] 🔌 Connection closed on process exit");
  process.exit(0);
});

module.exports = connectDB;
