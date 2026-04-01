import mongoose from "mongoose";
import dns from "node:dns";

// DNS SRV fix for Node.js resolution issues (especially on Windows/certain networks)
// Forces Node to use Google's Public DNS to find the MongoDB Atlas cluster
dns.setServers(["8.8.8.8", "8.8.4.4"]);
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder("ipv4first");
}

/**
 * Establishes the asynchronous connection to MongoDB using Mongoose.
 * 
 * Why Mongoose?
 * Mongoose provides schema validation, middleware hooks, and a robust query building
 * API over the native MongoDB driver, ensuring strict data integrity.
 * 
 * Note on Resiliency:
 * By design, if the DB fails to connect, we log a warning but DO NOT crash the process.
 * This allows the live Socket.IO layer and static frontend deployments to remain operational 
 * even if the database cluster goes down.
 */
export async function connectDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn("[DB Warning] MONGODB_URI not found. Data will not be persisted.");
    return;
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000 // Fails fast if DB is down
    });
    console.log("[DB] Connected to MongoDB");
  } catch (error) {
    console.error("[DB Error] Connection failed:", error.message);
    console.warn("[DB Warning] SRV lookup issue or network/firewall blockage suspected.");
    console.warn("[DB Warning] Server running WITHOUT database persistence.");
  }
}
