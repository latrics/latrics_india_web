import { useReducedMotion } from "framer-motion";
import { Cloud } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import Card from "../common/Card";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Tag from "../common/Tag";
import TextField from "../common/TextField";
import TextArea from "../common/TextArea";

/**
 * Component: DemoForm
 * 
 * A dual-purpose layout combining:
 * 1. Left Column: Modern value proposition (SectionHeading) + Interactive visual (Google Map).
 * 2. Right Column: Controlled form for capturing visitor details.
 * 
 * Uses 'elevated' and 'inset' card variants to create visual depth.
 */
export default function DemoForm({
  formData,
  setFormData,
  handleFormSubmit,
  isSubmitting,
  submitState
}) {
  const reduceMotion = useReducedMotion();
  const nameFieldId = "demo-name";
  const emailFieldId = "demo-email";
  const phoneFieldId = "demo-phone";
  const messageFieldId = "demo-message";

  /**
   * Higher-order function factory to update specific fields in the controlled form state.
   */
  const handleFieldChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <Section id="contact" variant="default">
      <Container>
        {/* Outer Grid: 0.9fr left for text/map, 1.1fr right for the form card */}
        <Card variant="elevated" className="grid gap-6 p-5 sm:p-8 md:gap-8 md:p-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,1.1fr)] lg:p-10 bg-[#121212]/90 border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-5 md:gap-6">
            <SectionHeading
              badgeIcon={Cloud}
              badgeText="Request a Demo"
              title="We'd love to show you around."
              description="Book a walkthrough to see how Latrics can fit into your inspection, mapping, or monitoring workflow with a tailored operational demo."
            />
            <div className="relative mt-auto h-full min-h-[180px] overflow-hidden rounded-xl border border-border">
              <iframe
                title="Latrics Headquarters Location"
                src="https://maps.google.com/maps?q=Latrics,%20Plot%20No.%2087,%20TNGO's%20Colony%20Phase%202,%20Financial%20District,%20Gachibowli,%20Nanakramguda,%20Hyderabad,%20Telangana%20500032&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "180px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          <Card variant="inset" className="p-5 sm:p-7 flex flex-col h-full">
            <h3 className="font-display mt-0 mb-2 text-title-2 text-fg text-center">Get started</h3>
            <p className="font-display text-regular text-base mb-4 max-w-md mx-auto text-center opacity-80">Fill in the details below and we&apos;ll get back to you shortly</p>
            <form onSubmit={handleFormSubmit} className="flex flex-col flex-1 gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Go to TextField to check for label styling and text spacings pl-3 shifts it to the right */}
                <TextField
                  id={nameFieldId}
                  label="Name"
                  placeholder="E.g. John Doe"
                  value={formData.name}
                  onChange={handleFieldChange("name")}
                  autoComplete="name"
                  inputClassName="py-3"
                  required
                />
                <TextField
                  id={phoneFieldId}
                  label="Phone no."
                  type="tel"
                  placeholder="+91 00000 00000"
                  value={formData.phone}
                  onChange={handleFieldChange("phone")}
                  autoComplete="tel"
                  inputClassName="py-3"
                  required
                />
              </div>
              <TextField
                id={emailFieldId}
                label="Email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleFieldChange("email")}
                autoComplete="email"
                inputClassName="py-3"
                required
              />
              <TextArea
                id={messageFieldId}
                label="Message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleFieldChange("message")}
                textareaClassName="py-3 min-h-[80px]"
              />
              <div className="mt-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full min-h-[58px] text-base bg-none bg-[#DA291C] hover:bg-[#C1251A] transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing…" : "Book demo"}
                </Button>

                {submitState.message ? (
                  <p
                    className={`text-sm mt-3 ${submitState.type === "error"
                      ? "text-danger-fg"
                      : "text-success-fg"
                      }`}
                  >
                    {submitState.message}
                  </p>
                ) : null}
              </div>

            </form>
          </Card>
        </Card>
      </Container>
    </Section>
  );
}
