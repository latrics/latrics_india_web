/**
 * Generate CSV without saving to disk.
 */
function generateCSV(contacts) {
  const headers = ["ID", "Name", "Email", "Phone", "Message", "Date"];
  const rows = contacts.map(c => [
    c._id.toString(),
    `"${c.name.replace(/"/g, '""')}"`,
    `"${c.email.replace(/"/g, '""')}"`,
    `"${c.phone.replace(/"/g, '""')}"`,
    `"${c.message.replace(/"/g, '""')}"`,
    c.createdAt
  ]);

  const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  return Buffer.from(csvContent, "utf-8");
}

module.exports = { generateCSV };
