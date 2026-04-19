import { Flame } from "lucide-react";
import { cn } from "../../lib/cn";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const SPECS = [
  { label: "SPEC 1", value: "700+" },
  { label: "SPEC 2", value: "700+" },
  { label: "SPEC 3", value: "700+" },
  { label: "SPEC 4", value: "700+" },
];

const TRUSTED_CARDS = [
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions.", active: false },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions.", active: false },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions.", active: false },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions.", active: true },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions.", active: false },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions.", active: false },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions.", active: false },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions.", active: false },
];

export default function ProductTechSpecs() {
  return (
    <Container className="mb-8">
      <div className="group relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#121212]/90 px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-white/[0.12] hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
        {/* Subtle Atmospheric Background Glow */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[300px] w-[300px] rounded-full bg-[#DA291C] opacity-5 mix-blend-screen blur-[80px] transition-opacity duration-700 group-hover:opacity-10" />

        <div className="relative z-10">
          <SectionHeading
            badgeIcon={Flame}
            badgeText="TECHNICAL SPECS"
            title="Technical Advantages of LiCopter-P720"
            description="We fuse advanced drone hardware with proprietary AI analytics to give manufacturer and facility operators real-time visibility."
          />

          {/* Drone Image */}
          <div className="w-full aspect-[2/1] bg-gray-800 rounded-3xl overflow-hidden mb-8 shadow-xl mt-8">
            <img src="/licopterp720.jpg" alt="LiCOPTER-P720" className="w-full h-full object-cover" />
          </div>

          {/* Specs Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {SPECS.map((spec) => (
              <div key={spec.label} className="bg-[#1B1A1A]/50 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center pt-8 pb-10 backdrop-blur-sm">
                <span className="text-[0.65rem] font-black text-gray-500 tracking-[0.2em] mb-2 uppercase">{spec.label}</span>
                <span className="text-4xl font-bold text-white font-display">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Trusted Section */}
          <h3 className="text-2xl font-bold font-display text-white mb-8">Designed for Precision.</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRUSTED_CARDS.map((card, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-xl p-8 border transition-all duration-300 relative overflow-hidden",
                  card.active
                    ? "bg-brand border-brand text-white shadow-brand"
                    : "bg-[#1A1A1A]/50 border-white/5 text-gray-300 backdrop-blur-sm"
                )}
              >
                <div className="mb-6">
                  <div className={cn("flex size-7 items-center justify-center rounded-lg shadow-sm", card.active ? "bg-white" : "bg-brand")}>
                    <Flame className={cn("size-4", card.active ? "fill-brand text-brand" : "fill-white text-white")} />
                  </div>
                </div>

                <h4 className="text-lg md:text-xl font-bold font-display text-white mb-3">
                  {card.title}
                </h4>
                <p className={cn("text-sm font-medium leading-relaxed", card.active ? "text-white/90" : "text-gray-400")}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
