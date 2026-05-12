import { Flame, ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import TextField from "../common/TextField";
import TextArea from "../common/TextArea";
import Button from "../common/Button";
import SectionBadge from "../common/SectionBadge";
import ActionLink from "../common/ActionLink";

export default function ProductDemo({
  formData,
  setFormData,
  handleFormSubmit,
  isSubmitting,
  submitState
}) {
  const handleFieldChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <Section id="demo">
      <Container>
        {/* Outer red card */}
        <div
          className="relative overflow-hidden rounded-xl"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 0%, rgba(255,255,255,0.12) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 100%, rgba(0,0,0,0.15) 0%, transparent 50%),
              linear-gradient(to bottom, #E32B1E 0%, #9E1B12 100%)
            `
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">

            {/* ── Left Column ── */}
            <div className="flex flex-col items-start gap-8 px-10 py-12 md:px-14 md:py-16">

              {/* Badge */}
              <SectionBadge icon={Flame} text="DEMO FORM" />

              {/* Headline */}
              <div className="space-y-5">
                <h2 className="font-display text-5xl md:text-5xl font-extrabold leading-[1.0] tracking-tight text-white uppercase">
                  SEE HOW<br />
                  LICOPTER CAN<br />
                  WORK FOR YOU
                </h2>
                <p className="text-base md:text-lg font-regular leading-relaxed text-white/85 max-w-sm">
                  We fuse advanced drone hardware with proprietary AI analytics to give
                  manufacturer and facility operators real-time visibility.
                </p>
              </div>

              {/* Get Quotation button with ActionLink styling */}
              <ActionLink
                href="/#request-demo-form"
                className="mt-4"
              >
                Get Quotation
              </ActionLink>
            </div>

            {/* ── Right Column: Dark Form Card ── */}
            <div className="px-6 py-8 md:px-10 md:py-10 lg:py-8">
              <div className="rounded-xl bg-[#1A1714] px-8 py-8 md:px-10 md:py-10 shadow-[0_32px_64px_rgba(0,0,0,0.5)]">

                {/* Card header */}
                <div className="mb-6">
                  <h3 className="font-display mt-0 mb-2 text-title-2 text-white text-center">Get started</h3>
                  <p className="font-display text-regular text-base mb-4 max-w-md mx-auto text-center opacity-80 text-white/80">Fill in the details below and we&apos;ll get back to you shortly</p>
                </div>

                <form onSubmit={handleFormSubmit} className="flex flex-col flex-1 gap-3">

                  {/* Name + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <TextField
                      id="demo-name"
                      label="Name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleFieldChange("name")}
                      autoComplete="name"
                      inputClassName="bg-[#2A2622] border-white/[0.06] text-white placeholder:text-white/20 py-3"
                      required
                    />
                    <TextField
                      id="demo-phone"
                      label="Phone no."
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleFieldChange("phone")}
                      autoComplete="tel"
                      inputClassName="bg-[#2A2622] border-white/[0.06] text-white placeholder:text-white/20 py-3"
                      required
                    />
                  </div>

                  {/* Email */}
                  <TextField
                    id="demo-email"
                    label="Email"
                    type="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleFieldChange("email")}
                    autoComplete="email"
                    inputClassName="bg-[#2A2622] border-white/[0.06] text-white placeholder:text-white/20 py-3"
                    required
                  />

                  {/* Message */}
                  <TextArea
                    id="demo-message"
                    label="Message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleFieldChange("message")}
                    textareaClassName="bg-[#2A2622] border-white/[0.06] text-white placeholder:text-white/20 py-3 min-h-[110px]"
                  />

                  {/* Submit */}
                  <div className="mt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="w-full min-h-[58px] text-base bg-none bg-[#DA291C] hover:bg-[#C1251A] transition-colors"
                    >
                      {isSubmitting ? "Processing…" : "Book Demo"}
                    </Button>
                  </div>

                  {submitState.message && (
                    <p className={`text-sm text-center font-medium ${submitState.type === "error" ? "text-red-400" : "text-green-400"
                      }`}>
                      {submitState.message}
                    </p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}
