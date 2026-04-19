import { Flame } from "lucide-react";
import { cn } from "../../lib/cn";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

function AdvantageCard({ title, description, className }) {
  return (
    <div className={cn(
      "relative rounded-2xl p-8 border border-white/10 bg-[#1A1A1A]/50 backdrop-blur-sm",
      "transition-all duration-300 overflow-hidden group",
      "hover:border-brand/30 hover:shadow-[0_10px_40px_-10px_rgba(218,41,28,0.2)]",
      className
    )}>
      {/* Bottom border glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-6">
        <div className="flex size-8 items-center justify-center rounded-lg bg-brand text-white shadow-brand transition-transform duration-300 group-hover:scale-110">
          <Flame className="size-5 fill-white" />
        </div>
      </div>

      <h4 className="text-xl md:text-2xl font-bold font-display text-white mb-4 leading-tight">
        {title}
      </h4>
      <p className="text-gray-400 font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
}

const CARDS = [
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions." },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision." },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions." },
  { title: "Trusted by industry leaders", description: "At Latrics, we build precision-driven LiDAR and aerospace solutions." },
];

export default function ProductAdvantages() {
  return (
    <Container className="mb-8">
      <div className="group relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#121212]/90 px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-white/[0.12] hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
        {/* Subtle Atmospheric Background Glow */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[300px] w-[300px] rounded-full bg-[#DA291C] opacity-5 mix-blend-screen blur-[80px] transition-opacity duration-700 group-hover:opacity-10" />

        <div className="relative z-10">
          <SectionHeading
            badgeIcon={Flame}
            badgeText="ADVANTAGES"
            title="Technical Advantages of LiCopter-P720"
            description="We fuse advanced drone hardware with proprietary AI analytics to give manufacturer and facility operators real-time visibility."
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-7"><AdvantageCard {...CARDS[0]} className="h-full" /></div>
            <div className="md:col-span-5"><AdvantageCard {...CARDS[1]} className="h-full" /></div>
            <div className="md:col-span-4"><AdvantageCard {...CARDS[2]} className="h-full" /></div>
            <div className="md:col-span-8"><AdvantageCard {...CARDS[3]} className="h-full" /></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
