import { buildLivePayload } from "../services/liveDataService.js";

const BROADCAST_INTERVAL_MS = 2500;

/**
 * Registers live-update socket events and the periodic broadcast timer.
 * Returns a cleanup function to stop the interval on graceful shutdown.
 *
 * @param {import("socket.io").Server} io
 * @returns {{ shutdown: () => void }}
 */
export function registerLiveSocket(io) {
  io.on("connection", (socket) => {
    socket.emit("live:update", buildLivePayload());
  });

  const intervalId = setInterval(() => {
    io.emit("live:update", buildLivePayload());
  }, BROADCAST_INTERVAL_MS);

  return {
    shutdown() {
      clearInterval(intervalId);
    }
  };
}
