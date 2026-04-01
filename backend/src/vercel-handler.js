import { createApp } from "./app.js";
import { connectDatabase } from "./config/db.js";
import mongoose from "mongoose";

// Initialize the Express app
const app = createApp();

// Lazy database connection for serverless functions
let isConnected = false;

/**
 * Vercel Serverless Function entry point.
 */
export default async (req, res) => {
  // Ensure DB connection is established before handling request
  if (!isConnected || mongoose.connection.readyState !== 1) {
    await connectDatabase();
    isConnected = mongoose.connection.readyState === 1;
  }

  // Handle high-level logic (e.g. Socket.io warning)
  // Note: Socket.io functionality initialized in index.js will NOT be active here.

  return app(req, res);
};
