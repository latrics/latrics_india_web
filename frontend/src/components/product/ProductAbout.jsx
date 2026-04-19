import { Flame } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ActionLink from "../common/ActionLink";

export default function ProductAbout() {
  return (
    <Container className="mb-8">
      <div className="group relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#121212]/90 px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-white/[0.12] hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
        {/* Subtle Atmospheric Background Glow */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[300px] w-[300px] rounded-full bg-[#DA291C] opacity-5 mix-blend-screen blur-[80px] transition-opacity duration-700 group-hover:opacity-10" />

        <div className="relative z-10">
          <SectionHeading
            badgeIcon={Flame}
            badgeText="ABOUT LICOPTER"
            badgeAlign="start"
            title={
              <>The Intelligence Layer for<br className="hidden sm:block" /> Industrial Operations</>
            }
            description="We fuse advanced drone hardware with proprietary AI analytics to give manufacturer and facility operators real-time visibility, safer inspections, and data-driven decision-making at scale."
            align="center"
          />

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
            <ActionLink href="#download">Download Brochure</ActionLink>
            <ActionLink href="#discover">Discover more</ActionLink>
          </div>
        </div>
      </div>
    </Container>
  );
}
