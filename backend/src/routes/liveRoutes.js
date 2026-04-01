import express from "express";
import { buildLivePayload } from "../services/liveDataService.js";

const router = express.Router();

/**
 * GET /api/live
 * Provides the current state of industrial telemetry logic.
 * 
 * While we utilize WebSockets (Socket.IO) for streaming continuous updates, 
 * this HTTP endpoint provides a fallback "snapshot" of the simulated metrics 
 * that the frontend can call on initial page load or if web sockets disconnect.
 */
router.get("/live", (_request, response) => {
  response.json(buildLivePayload());
});

export default router;
