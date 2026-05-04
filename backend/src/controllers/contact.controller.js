const { z } = require("zod");
const Contact = require("../models/Contact");

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

exports.submitContact = async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);
    const newContact = await Contact.create(validatedData);
    
    console.log(`[CONTACT] New submission saved: ${newContact._id}`);
    
    res.status(201).json({
      success: true,
      message: "Thank you! We'll be in touch soon.",
      id: newContact._id,
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
