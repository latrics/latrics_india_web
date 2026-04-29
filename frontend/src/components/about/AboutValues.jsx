import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Flame } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";
import { cn } from "../../utils/cn";

const VALUES = [
  {
    title: "Customer First",
    desc: "We prioritize long-term value over short-term gains, ensuring every solution solves a real-world operator challenge."
  },
  {
    title: "Stay Sustainable",
    desc: "Our technology is built to last, reducing environmental impact through efficient autonomous operations and durable hardware."
  },
  {
    title: "Deliver Excellence",
    desc: "Precision is our baseline. We never compromise on the quality of data or the reliability of our aerospace systems."
  },
  {
    title: "Innovate Boldly",
    desc: "We explore the frontiers of LiDAR and AI to create tools that were previously impossible for industrial inspection."
  },
  {
    title: "Learn Continuously",
    desc: "We treat every mission as a data point for improvement, constantly evolving our algorithms and hardware."
  },
  {
    title: "Own Outcomes",
    desc: "We take full responsibility for the success of our clients' deployments, from the first flight to global scale."
  },
];

/**
 * AboutValues Section
 * Showcases the core principles of Latrics in a premium card layout.
 */
export default function AboutValues() {
  return (
    <Section className="relative">
      <Container>
        <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0E0E0E]/95 px-8 py-10 sm:px-12 md:px-16 md:py-16 shadow-[0_48px_96px_rgba(0,0,0,0.7)]">


          <div className="relative z-10">
            <header className="mb-10">
              <div className="mb-6 flex justify-start">
                <SectionBadge icon={Flame} text="OUR VALUES" iconClassName="bg-brand text-white" />
              </div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-[1.1] tracking-tight w-full">
                Bridging the gap between traditional surveying practices since 2022
              </h2>
              <p className="font-sans mt-4 text-lg md:text-xl text-white/50 leading-relaxed max-w-4xl font-medium">
                At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {VALUES.map((val, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover="hovered"
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.05
                    }}
                    variants={{
                      hovered: {
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
                      }
                    }}
                    className="flex flex-col p-6 md:p-8 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl overflow-hidden relative min-h-[240px] transition-colors duration-500"
                  >
                    {/* Glass Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />

                    <div className="flex flex-row items-center gap-6 w-full relative z-10 mb-6">
                      {/* Red Icon Box with Precise Gradient */}
                      <motion.div
                        variants={{
                          hovered: { scale: 1.1, rotate: 2 }
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="relative shrink-0 size-14 rounded-xl flex items-center justify-center shadow-[0_8px_24px_rgba(218,41,28,0.3)] border border-white/60"
                        style={{ background: 'linear-gradient(to bottom right, #E32B1E 30%, #550d08ff 50%)' }}
                      >
                        <Heart className="size-6 text-white fill-none stroke-[2.5]" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        variants={{
                          hovered: { x: 2 }
                        }}
                        className="font-display font-bold text-white transition-colors duration-500 text-xl text-left"
                      >
                        {val.title}
                      </motion.h3>
                    </div>

                    {/* Description - Permanent */}
                    <div className="relative z-10 text-left">
                      <div className="h-1 w-12 bg-brand mb-6 rounded-full" />
                      <p className="font-sans text-base md:text-lg text-white/50 leading-relaxed font-medium">
                        {val.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
