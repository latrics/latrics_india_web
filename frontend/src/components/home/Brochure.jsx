import { Sparkles, Download, Atom, Rocket, BarChart3, Map, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import Container from "../common/Container";
import Section from "../common/Section";
import ActionLink from "../common/ActionLink";
import SectionHeading from "../common/SectionHeading";

/**
 * Brochure Section
 * A high-fidelity section dedicated to the company brochure, 
 * featuring a large drone visual and key highlights.
 */
export default function Brochure({ staggerContainer, staggerItem }) {
  const features = [
    {
      icon: Atom,
      title: "Our Technologies",
      subtitle: "& Platforms"
    },
    {
      icon: Rocket,
      title: "Key Solutions",
      subtitle: "& Use Cases"
    },
    {
      icon: BarChart3,
      title: "Impact Across",
      subtitle: "Industries"
    },
    {
      icon: Map,
      title: "Built in India.",
      subtitle: "For the World."
    }
  ];

  return (
    <Section id="brochure" className="relative overflow-hidden">
      <Container>
        <div className="island-card relative overflow-hidden group">
          {/* Background Atmospheric Glow */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 blur-[120px] rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <SectionHeading
                badgeIcon={Sparkles}
                badgeText="BROCHURE"
                title={
                  <>
                    Explore the future we&apos;re building. <span className="text-[#DA291C]">Made in India.</span>
                  </>
                }
                description={
                  <>
                    Discover how Latrics is engineering indigenous solutions in LiDAR intelligence,
                    AI-powered analytics, autonomous monitoring, clean energy and smart industrial
                    systems for a <span className="text-[#DA291C] font-semibold">self-reliant India.</span>
                  </>
                }
                className="mb-8"
              />

              {/* Simple "Inside the Brochure" Divider */}
              <div className="flex items-center gap-4 mb-10 w-full">
                <span className="text-[0.7rem] font-bold tracking-[0.2em] text-white/40 uppercase whitespace-nowrap">
                  Inside the Brochure
                </span>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-white/50 to-transparent" />
              </div>

              {/* Innovative Features Grid (Glass Cards) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 w-full text-left">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    className="group/item flex flex-col gap-4 p-4 rounded-lg border border-white/[0.03] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-black/50"
                  >
                    <div className="size-10 rounded-lg bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center transition-transform group-hover/item:scale-110 group-hover/item:rotate-3">
                      <feature.icon className="size-5 text-[#DA291C]" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[0.8rem] font-bold text-white tracking-tight leading-tight">
                        {feature.title}
                      </span>
                      <span className="text-[0.7rem] font-medium text-white/40 leading-snug">
                        {feature.subtitle}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center w-full">
                <ActionLink
                  href="/LiCopter_Brochure_V3.0.pdf"
                  download="LiCopter_Brochure.pdf"
                  icon={Download}
                >
                  Download Brochure
                </ActionLink>
              </div>
            </div>

            {/* Right Visual (Drone SVG) */}
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Red Glow behind the drone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#DA291C]/20 blur-[80px] rounded-lg animate-pulse" />

                <img
                  src="/latrics_drone_02.svg"
                  alt="Latrics Drone"
                  className="w-full max-w-[500px] h-auto relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
