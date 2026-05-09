// src/utils/ist.js
// ─────────────────────────────────────────────────────────────
//  Shared IST timestamp utility used across all models.
// ─────────────────────────────────────────────────────────────

/** Get current time as IST string (e.g. "09/05/2026, 02:47:55 IST") */
function getIST() {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }) + " IST";
}

module.exports = { getIST };
