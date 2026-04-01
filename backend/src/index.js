import "dotenv/config";
import http from "http";
import { Server } from "socket.io";
import { createApp } from "./app.js";
import { getPort, resolveAllowedOrigins } from "./config/env.js";
import { registerLiveSocket } from "./socket/registerLiveSocket.js";
import { connectDatabase } from "./config/db.js";
import mongoose from "mongoose";

/**
 * Main Backend Entry Point (Startup Sequence)
 * 
 * Responsibilities:
 * 1. Initialize MongoDB connection (via Mongoose).
 * 2. Create Express application pipeline.
 * 3. Create the HTTP Server wrap (required for WebSocket attach).
 * 4. Create and attach Socket.io Server for real-time live events.
 * 5. Handle graceful shutdown signals (Docker / Node process termination).
 */
async function startServer() {
  // 1. Initialize Persistence Layer
  // Connects to MongoDB Atlas URI defined in .env
  await connectDatabase();

  const isDbConnected = mongoose.connection.readyState === 1;
  if (!isDbConnected) {
    console.warn("-------------------------------------------------------------------");
    console.warn(" [CRUCIAL WARNING] DATABASE CONNECTION FAILED                      ");
    console.warn(" Form submissions will fail with Service Unavailable (503).        ");
    console.warn("-------------------------------------------------------------------");
  }

  // 2. Build REST API layer utilizing Express
  const app = createApp();
  
  // 3. Mount HTTP server over Express
  // This is required because Socket.IO needs a raw HTTP server to attach WS (WebSockets)
  const server = http.createServer(app);

  // 4. Initialize WebSocket Layer
  const io = new Server(server, {
    cors: {
      origin: resolveAllowedOrigins(),
      methods: ["GET", "POST"]
    }
  });

  // Attach all WebSocket events (emitters/listeners) and grab the shutdown cleanly callback
  const { shutdown } = registerLiveSocket(io);

  // 5. Start listening for incoming connections
  const port = getPort();
  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });

  // --- Graceful Shutdown Management ---
  // In production environments like PM2, Kubernetes, or Docker, SIGTERM is sent before the server is killed.
  // We elegantly close all websocket timeouts and HTTP listener pools here.
  const gracefulShutdown = () => {
    shutdown(); // Stops active intervals inside Socket manager
    server.close(() => process.on("exit", () => console.log("Server stopped cleanly")));
    process.exit(0);
  };

  process.on("SIGTERM", gracefulShutdown);
  process.on("SIGINT", gracefulShutdown); // Triggered by Ctrl+C in terminal
}

// Execute startup sequence
startServer().catch((error) => {
  console.error("[Fatal Error] Failed to start server entirely:", error.message);
  process.exit(1);
});
