// src/middlewares/validate.middleware.js
// ─────────────────────────────────────────────────────────────
//  Zod-based request body validation.
//  Usage: router.post("/", validate(schema), handler)
// ─────────────────────────────────────────────────────────────

const { z } = require("zod");

// The canonical contact form schema.
// Adjust field rules here only — the controller stays untouched.
const contactSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Please provide a valid email address"),

  phone: z
    .string()
    .trim()
    .max(20, "Phone must be under 20 characters")
    .optional()
    .default(""),

  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

/**
 * Express middleware factory.
 * @param {z.ZodSchema} schema
 */
function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      }));
      return res.status(422).json({ success: false, errors });
    }
    // Attach the cleaned/coerced data so controllers use validated values
    req.validatedBody = result.data;
    next();
  };
}

module.exports = { validate, contactSchema };
