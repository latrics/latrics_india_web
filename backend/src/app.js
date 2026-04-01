import cors from "cors";
import express from "express";
import { resolveAllowedOrigins } from "./config/env.js";
import liveRoutes from "./routes/liveRoutes.js";
import demoRoutes from "./routes/demoRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";

/**
 * Creates the Express application, wires up top-level middleware,
 * and attaches all REST API route handlers.
 * 
 * Flow:
 * 1. Express creates a singleton app instance.
 * 2. CORS (Cross-Origin Resource Sharing) is configured to let the frontend (Vite) communicate securely.
 * 3. express.json() parses incoming HTTP POST requests (converting JSON payloads into req.body).
 * 4. Modular route handlers are registered under the '/api' prefix.
 * 
 * @returns {express.Application} The initialized Express app, ready to be bound to an HTTP server.
 */
export function createApp() {
  const app = express();

  // Step 1: Security & Cross-Origin rules
  // Only allows requests from origins specified in the .env file (e.g. localhost:5173).
  app.use(
    cors({
      origin: resolveAllowedOrigins()
    })
  );
  
  // Step 2: Body Parsing
  // This middleware is absolutely necessary to read `req.body` in POST/PUT routes.
  app.use(express.json());

  // Step 3: Route Registration (Controllers)
  // All these routes will be accessible at http://localhost:<port>/api/<path>
  app.use("/api", liveRoutes);
  app.use("/api", demoRoutes);
  app.use("/api", newsletterRoutes);

  return app;
}
