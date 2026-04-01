import { Flame, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { aboutFeatures } from "../../data/siteContent";
import Container from "../common/Container";
import Section from "../common/Section";

export default function About({ fadeInUp }) {
  return (
    <Section id="about" className="py-16 md:py-24 bg-[#1B1A1A]" variant="default">
      <Container className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.div
          {...fadeInUp}
          className="group relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#121212] px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-white/[0.12] hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
        >
          {/* Subtle Atmospheric Background Glow */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-[300px] w-[300px] rounded-full bg-[#DA291C] opacity-5 mix-blend-screen blur-[80px] transition-opacity duration-700 group-hover:opacity-10" />

          <div className="relative z-10">
            {/* Tag */}
            <div className="mb-8 flex justify-start">
              <div className="inline-flex items-center gap-3 rounded-lg bg-white p-1 pr-5 shadow-xl transition-transform hover:scale-105">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#DA291C] shadow-sm">
                  <Flame className="size-5 fill-white text-white" strokeWidth={2.5} />
                </div>
                <span className="text-[0.7rem] font-black uppercase tracking-[0.15em] text-black pt-0.5">
                  About Latrics
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-title-1 font-bold text-[rgba(255,255,255,0.96)]">
              The Intelligence Layer for<br className="hidden sm:block" /> Industrial Operations
            </h2>

            {/* Paragraph */}
            <p className="mb-10 max-w-[90%] text-body-lg text-white/60">
              We fuse advanced drone hardware with proprietary AI analytics to give
              manufacturer and facility operators real-time visibility, safer inspections, and
              data-driven decision-making at scale.
            </p>

            {/* List Items */}
            <ul className="mb-10 grid gap-4">
              {aboutFeatures.map((text) => (
                <li key={text} className="flex gap-4 items-start group/item">
                  <span className="mt-1.5 grid h-[1.125rem] w-[1.125rem] shrink-0 place-items-center rounded-sm bg-white/10 border border-white/20 shadow-sm transition-colors duration-300 group-hover/item:border-[#DA291C]/50 group-hover/item:bg-[#DA291C]/20" />
                  <p className="text-[0.95rem] leading-relaxed text-white/70">{text}</p>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <button className="group/btn flex w-fit items-center gap-4 rounded-lg border border-white/10 bg-white/5 py-1.5 pl-6 pr-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <span className="text-sm font-semibold tracking-wide text-white/90">Read more</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#DA291C] to-[#8f1208] shadow-[0_2px_10px_rgba(218,41,28,0.4)] transition-transform duration-300 group-hover/btn:scale-110">
                  <ArrowUpRight className="size-4 text-white" strokeWidth={2.5} />
                </div>
              </button>
              <button className="group/btn flex w-fit items-center gap-4 rounded-lg border border-white/10 bg-white/5 py-1.5 pl-6 pr-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <span className="text-sm font-semibold tracking-wide text-white/90">Read more</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#DA291C] to-[#8f1208] shadow-[0_2px_10px_rgba(218,41,28,0.4)] transition-transform duration-300 group-hover/btn:scale-110">
                  <ArrowUpRight className="size-4 text-white" strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </div>

        </motion.div>
      </Container>
    </Section>
  );
}
