// src/services/csv.service.js
// ─────────────────────────────────────────────────────────────
//  Converts an array of contact documents into a CSV Buffer.
//  Returns a Buffer so we never write to disk — works in any
//  environment including read-only filesystems (Render, Heroku).
// ─────────────────────────────────────────────────────────────

const { Parser } = require("json2csv");

const CSV_FIELDS = [
  { label: "Name",       value: "name" },
  { label: "Email",      value: "email" },
  { label: "Phone",      value: "phone" },
  { label: "Message",    value: "message" },
  { label: "Submitted",  value: (row) => new Date(row.createdAt).toLocaleString("en-IN") },
];

/**
 * @param {Array} contacts — Mongoose documents or plain objects
 * @returns {Buffer} UTF-8 CSV content
 */
function generateCSV(contacts) {
  if (!contacts || contacts.length === 0) {
    throw new Error("No contacts provided to generateCSV");
  }

  const parser = new Parser({ fields: CSV_FIELDS, withBOM: true }); // BOM = Excel-friendly
  const csv = parser.parse(contacts.map((c) => c.toObject ? c.toObject() : c));
  return Buffer.from(csv, "utf-8");
}

module.exports = { generateCSV };
