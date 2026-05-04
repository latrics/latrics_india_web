import { ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { whyCards } from "../../constants/siteContent";
import Card from "../common/Card";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";

/**
 * WhyLatrics - High-precision styling for the core value proposition.
 */
export default function WhyLatrics({ staggerContainer, staggerItem }) {
  return (
    <Section variant="elevate" className="relative overflow-hidden">
      <BackgroundDecor />

      <Container className="relative z-10">
        <div className="island-card">
          <header className="mb-12 flex flex-col items-start gap-8 lg:mb-16">
            <SectionBadge icon={Zap} text="Why Latrics" iconClassName="bg-brand" />
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-title-1 leading-tight text-white">
                Engineering India's Autonomous Future
              </h2>
              <p className="font-sans text-body-lg text-white/50 leading-relaxed">
                Building indigenous aerospace systems, intelligent analytics, and sustainable infrastructure to transform India's critical sectors from mining and corridors to urban development, utilities, water conservation, and emergency response. By combining autonomous aerial systems with AI-powered insights and clean technology, we enable industries to operate safer, smarter, and more sustainably, strengthening India's path toward self-reliance and technological sovereignty.
              </p>
            </div>
          </header>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whyCards.map((card, idx) => (
              <WhyCard
                key={idx}
                title={card.title}
                desc={card.desc}
                variants={staggerItem}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

/**
 * Individual Benefit Card with premium glassmorphism and glow effects.
 */
function WhyCard({ title, desc, variants }) {
  return (
    <motion.div variants={variants} whileHover={{ y: -8 }} className="h-full">
      <Card
        variant="elevated"
        className="group relative flex h-full flex-col overflow-hidden p-8 transition-all duration-500 hover:border-brand/30 hover:shadow-brand"
      >
        {/* Subtle Inner Glow */}
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/10 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-8 inline-grid size-14 place-items-center rounded-xl bg-gradient-to-br from-brand via-brand-mid to-brand-deep shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <ShieldCheck className="size-7 text-white" strokeWidth={2.5} />
          </div>

          <h3 className="font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand">
            {title}
          </h3>

          <p className="font-sans mt-4 flex-grow text-[0.9375rem] leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/80">
            {desc}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

/**
 * Decorative atmospheric background elements.
 */
function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-brand-glow blur-[120px] opacity-20" />
      <div className="absolute -right-20 bottom-0 h-[600px] w-[600px] rounded-full bg-accent-glow blur-[130px] opacity-10" />
    </div>
  );
}
