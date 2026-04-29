import { motion } from "framer-motion";
import { Flame, Download } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";

/**
 * AboutProfile Section
 * A bold, brand-focused banner showcasing company identity.
 */
export default function AboutProfile() {
  return (
    <Section className="relative p-0 overflow-hidden">
      <div
        className="relative overflow-hidden bg-brand px-8 py-8 md:px-20 md:py-12 shadow-2xl w-full"
        style={{ backgroundColor: "#DA291C" }}
      >
        {/* Official Brand Logo - Top Right */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-[420px] md:h-[420px] pointer-events-none select-none overflow-hidden">
          <img
            src="/latricsLogo_1.svg"
            alt="Latrics Logo"
            className="absolute top-[0%] right-[0%] w-full h-full md:h-80 object-contain object-right opacity-60 backdrop-blur-sm"
            style={{ filter: "url(#logo-glass-filter)" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl px-4 md:px-0 mx-auto md:mx-0">
          <header className="mb-8">
            <div className="mb-4 flex justify-start">
              <SectionBadge icon={Flame} text="Profile" iconClassName="bg-brand text-white" />
            </div>

            <h2 className="text-title-1 font-bold text-white leading-[1.1] tracking-tight">
              Who we are as a Company?
            </h2>

            <p className="mt-6 text-body-lg text-white/70 leading-relaxed font-medium max-w-3xl">
              At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently.
            </p>
          </header>

          {/* Download CTA Button - Reversed Layout */}
          <div className="inline-flex cursor-pointer items-center gap-6 rounded-lg bg-black/40 backdrop-blur-2xl border border-white/10 p-2 pl-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 group">
            <span className="text-[1rem] font-semibold tracking-[0.02em] text-white pt-1">
              Download Company Profile
            </span>
            <div className="flex size-11 items-center justify-center rounded-lg bg-brand border border-white/10 shadow-sm transition-all group-hover:bg-brand-hover">
              <Download className="size-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
