import { Flame } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const SOFTWARE_ITEMS = [
  "Trusted by industry leaders",
  "Trusted by industry leaders",
  "Trusted by industry leaders",
  "Trusted by industry leaders",
];

export default function ProductSoftware() {
  return (
    <Container className="mb-20">
      <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#121212]/90 px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-white/[0.12] hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
        {/* Subtle Atmospheric Background Glow */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[300px] w-[300px] rounded-full bg-[#DA291C] opacity-5 mix-blend-screen blur-[80px] transition-opacity duration-700 group-hover:opacity-10" />

        <div className="relative z-10">
          <SectionHeading
            badgeIcon={Flame}
            badgeText="SOFTWARE SPECS"
            title={<>Transforming Industries Through Intelligent<br />Innovation</>}
            description="We fuse advanced drone hardware with proprietary AI analytics to give manufacturer and facility operators real-time visibility."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 max-w-2xl mt-10">
            {SOFTWARE_ITEMS.map((label, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Flame className="w-5 h-5 text-brand fill-brand" />
                </div>
                <span className="text-white font-bold font-display text-base md:text-lg tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
