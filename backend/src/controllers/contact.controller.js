const { z } = require("zod");
const ContactStage = require("../models/ContactStage");
const { generateCSV } = require("../services/csv.service");
const { sendCSVReport } = require("../services/email.service");
const env = require("../config/env");
const { getIST } = require("../utils/ist");

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

exports.submitContact = async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);

    const mode = env.SEND_EMAIL; // "sendmail" | "savemongodb" | "both"
    let savedRecord = null;

    // ── Save to Stage table ──────────────────────────────────
    // The merge job will automatically push this to the target table
    if (mode === "savemongodb" || mode === "both") {
      savedRecord = await ContactStage.create(validatedData);
      console.log(`[CONTACT] Staged: ${savedRecord.email} (${savedRecord._id})`);
    }

    // ── Send CSV via Email ───────────────────────────────────
    if (mode === "sendmail" || mode === "both") {
      try {
        const contactForCSV = savedRecord || {
          _id: "N/A",
          ...validatedData,
          createdAt: getIST(),
        };

        const csvBuffer = generateCSV([contactForCSV]);
        const dateStr = new Date().toISOString().split("T")[0];
        const timeStr = new Date()
          .toTimeString()
          .slice(0, 5)
          .replace(":", "h");
        const filename = `contact_${dateStr}_${timeStr}.csv`;

        await sendCSVReport(csvBuffer, filename, 1);
        console.log(`[CONTACT] CSV emailed to ${env.EMAIL_TO}`);
      } catch (emailErr) {
        console.error(`[CONTACT] ⚠️  Email send failed: ${emailErr.message}`);
        if (mode === "sendmail") {
          return res.status(500).json({
            success: false,
            message: "Failed to send your submission. Please try again later.",
          });
        }
      }
    }

    res.status(201).json({
      success: true,
      message: "Thank you! We'll be in touch soon.",
      id: savedRecord ? savedRecord._id : undefined,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      }));
      return res.status(422).json({ success: false, errors });
    }
    console.error("[CONTACT ERROR]", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
