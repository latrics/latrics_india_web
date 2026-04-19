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
    <Section id="demo" className="py-16">
      <Container>
        {/* Outer red card */}
        <div
          className="relative overflow-hidden rounded-3xl bg-[#C0251B]"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 0% 0%, rgba(255,255,255,0.08) 0%, transparent 55%),
              radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.2) 0%, transparent 55%)
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
                <h2 className="font-display text-5xl md:text-6xl font-extrabold leading-[1.0] tracking-tight text-white uppercase">
                  SEE HOW<br />
                  LICOPTER CAN<br />
                  WORK FOR YOU
                </h2>
                <p className="text-base md:text-lg font-medium leading-relaxed text-white/85 max-w-sm">
                  We fuse advanced drone hardware with proprietary AI analytics to give
                  manufacturer and facility operators real-time visibility.
                </p>
              </div>

              {/* Get Quotation button with ActionLink styling */}
              <ActionLink 
                href="#contact"
                className="mt-4"
              >
                Get Quotation
              </ActionLink>
            </div>

            {/* ── Right Column: Dark Form Card ── */}
            <div className="px-6 py-8 md:px-10 md:py-10 lg:py-8">
              <div className="rounded-[28px] bg-[#1A1714] px-8 py-8 md:px-10 md:py-10 shadow-[0_32px_64px_rgba(0,0,0,0.5)]">

                {/* Card header */}
                <div className="mb-7">
                  <h3 className="font-display text-3xl font-bold text-white text-center">Get Started</h3>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">

                  {/* Name + Phone row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="demo-name" className="text-[10px] font-black tracking-[0.18em] text-white/50 uppercase">
                        NAME
                      </label>
                      <input
                        id="demo-name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleFieldChange("name")}
                        autoComplete="name"
                        required
                        className="w-full rounded-2xl bg-[#2A2622] border border-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:border-[#DA291C]/60 focus:outline-none focus:ring-2 focus:ring-[#DA291C]/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="demo-phone" className="text-[10px] font-black tracking-[0.18em] text-white/50 uppercase">
                        PHONE NO.
                      </label>
                      <input
                        id="demo-phone"
                        type="tel"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleFieldChange("phone")}
                        autoComplete="tel"
                        required
                        className="w-full rounded-2xl bg-[#2A2622] border border-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:border-[#DA291C]/60 focus:outline-none focus:ring-2 focus:ring-[#DA291C]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="demo-email" className="text-[10px] font-black tracking-[0.18em] text-white/50 uppercase">
                      EMAIL
                    </label>
                    <input
                      id="demo-email"
                      type="email"
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleFieldChange("email")}
                      autoComplete="email"
                      required
                      className="w-full rounded-2xl bg-[#2A2622] border border-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:border-[#DA291C]/60 focus:outline-none focus:ring-2 focus:ring-[#DA291C]/20 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="demo-message" className="text-[10px] font-black tracking-[0.18em] text-white/50 uppercase">
                      MESSAGE
                    </label>
                    <textarea
                      id="demo-message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleFieldChange("message")}
                      rows={4}
                      className="w-full resize-y rounded-2xl bg-[#2A2622] border border-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:border-[#DA291C]/60 focus:outline-none focus:ring-2 focus:ring-[#DA291C]/20 transition-all min-h-[110px]"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl bg-[#DA291C] py-4 text-base font-bold text-white hover:bg-[#C1251A] active:bg-[#A8200F] disabled:opacity-60 transition-colors duration-200 shadow-lg shadow-[#DA291C]/25"
                  >
                    {isSubmitting ? "Processing…" : "Book Demo"}
                  </button>

                  {submitState.message && (
                    <p className={`text-sm text-center font-medium ${
                      submitState.type === "error" ? "text-red-400" : "text-green-400"
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
