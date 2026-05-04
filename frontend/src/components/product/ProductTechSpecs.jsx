import { Flame } from "lucide-react";
import { cn } from "../../utils/cn";
import Section from "../common/Section";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const SPECS = [
  { label: "SPEC 1", value: "700+" },
  { label: "SPEC 2", value: "700+" },
  { label: "SPEC 3", value: "700+" },
  { label: "SPEC 4", value: "700+" },
];

const TRUSTED_CARDS = [
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions." },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions." },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions." },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions." },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions." },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions." },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions." },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions." },
];

export default function ProductTechSpecs() {
  return (
    <Section id="tech-specs">
      <Container>
        <div className="group/section relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#121212]/90 px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-white/[0.12] hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
          {/* Subtle Atmospheric Background Glow */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-[300px] w-[300px] rounded-full bg-[#DA291C] opacity-5 mix-blend-screen blur-[80px] transition-opacity duration-700 group-hover/section:opacity-10" />

          <div className="relative z-10">
            <SectionHeading
              badgeIcon={Flame}
              badgeText="TECHNICAL SPECS"
              title="Technical Advantages of LiCopter-P720"
              description="We fuse advanced drone hardware with proprietary AI analytics to give manufacturer and facility operators real-time visibility."
            />

            {/* Drone Image */}
            <div className="w-full aspect-[2/1] bg-gray-800 rounded-xl overflow-hidden mb-8 shadow-xl mt-8">
              <img src="/licopterp720.jpg" alt="LiCOPTER-P720" className="w-full h-full object-cover" />
            </div>

            {/* Specs Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
              {SPECS.map((spec) => (
                <div 
                  key={spec.label} 
                  className="group/spec bg-[#1B1A1A]/50 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center pt-8 pb-10 backdrop-blur-sm transition-all duration-300 hover:bg-brand hover:border-brand hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/20"
                >
                  <span className="text-[0.65rem] font-black text-gray-500 tracking-[0.2em] mb-2 uppercase group-hover/spec:text-white/70 transition-colors duration-300">
                    {spec.label}
                  </span>
                  <span className="text-4xl font-bold text-white font-display group-hover:text-white transition-colors duration-300">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Trusted Section */}
            <h3 className="text-2xl font-bold font-display text-white mb-8">Designed for Precision.</h3>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 md:gap-4">
              {TRUSTED_CARDS.map((card, i) => (
                <div
                  key={i}
                  className={cn(
                    "group rounded-xl p-4 sm:p-6 md:p-8 border border-white/5 bg-[#1A1A1A]/50 text-gray-300 backdrop-blur-sm transition-all duration-300 relative overflow-hidden hover:bg-brand hover:border-brand hover:shadow-brand",
                    i >= 6 ? "hidden md:block" : "block"
                  )}
                >
                  <div className="mb-4 md:mb-6">
                    <div className="flex size-5 md:size-7 items-center justify-center rounded-md md:rounded-lg shadow-sm bg-brand group-hover:bg-white transition-colors duration-300">
                      <Flame className="size-3 md:size-4 fill-white text-white group-hover:fill-brand group-hover:text-brand transition-colors duration-300" />
                    </div>
                  </div>

                  <h4 className="text-sm sm:text-base md:text-xl font-bold font-display text-white mb-2 md:mb-3 tracking-tight group-hover:text-white transition-colors duration-300 leading-tight">
                    {card.title}
                  </h4>
                  <p className="text-[0.65rem] sm:text-xs md:text-sm font-medium leading-relaxed text-gray-400 group-hover:text-white/90 transition-colors duration-300 line-clamp-3 sm:line-clamp-none">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
