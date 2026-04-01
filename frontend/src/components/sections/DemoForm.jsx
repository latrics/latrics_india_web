import { useReducedMotion } from "framer-motion";
import { Cloud } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import Card from "../common/Card";
import Container from "../common/Container";
import Section from "../common/Section";
import Tag from "../common/Tag";
import TextField from "../common/TextField";

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

  const handleFieldChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <Section id="contact" variant="default" spacing="sm" className="pb-10 md:pb-14">
      <Container>
        <Card variant="elevated" className="grid gap-10 p-6 md:gap-12 md:p-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,1.1fr)] lg:p-8">
          <div className="flex flex-col gap-5 md:gap-6">
            <div className="mb-4 flex justify-start">
              <div className="inline-flex items-center gap-3 rounded-lg bg-white p-1 pr-5 shadow-xl transition-transform hover:scale-105">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#DA291C] shadow-sm">
                  <Cloud className="size-5 fill-white text-white" strokeWidth={2.5} />
                </div>
                <span className="text-[0.7rem] font-black uppercase tracking-[0.15em] text-black pt-0.5">
                  Request a Demo
                </span>
              </div>
            </div>
            <h2 className="font-display text-title-1 text-fg">We&apos;d love to show you around.</h2>
            <p className="max-w-lg text-body-lg text-fg-secondary">
              Book a walkthrough to see how Latrics can fit into your inspection, mapping, or monitoring workflow with a tailored operational demo.
            </p>
            <div className="relative mt-auto">
              <motion.img
                animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                src="/drone_on_pedestals.png"
                className="relative z-[1] w-full rounded-2xl border border-border"
                alt="Drone inspection"
              />
              <div
                className="pointer-events-none absolute -bottom-[8%] left-[8%] right-[8%] -z-0 hidden h-24 rounded-full bg-brand-softer blur-2xl md:block"
                aria-hidden
              />
            </div>
          </div>

          <Card variant="inset" className="p-6 sm:p-7 md:p-8 flex flex-col h-full">
            <h3 className="font-display mt-8 mb-8 text-title-2 text-fg text-center">Get started</h3>
            <p className="font-display text-title-2 text-lg mb-8 max-w-md mx-auto text-center">Fill in the details below and we&apos;ll get back to you shortly</p>
            <form onSubmit={handleFormSubmit} className="flex flex-col flex-1 gap-6">
              <TextField
                id={nameFieldId}
                label="Name"
                placeholder="E.g. John Doe"
                value={formData.name}
                onChange={handleFieldChange("name")}
                autoComplete="name"
                inputClassName="py-4"
                required
              />
              <TextField
                id={emailFieldId}
                label="Email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleFieldChange("email")}
                autoComplete="email"
                inputClassName="py-4"
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
                inputClassName="py-4"
                required
              />
              <div className="mt-16">
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
