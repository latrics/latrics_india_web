import React, { memo } from "react";
import { Flame } from "lucide-react";
import { motion } from "framer-motion";
import { milestoneItems } from "../../data/siteContent";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";

const MilestoneCard = memo(({ item, index, variants }) => (
  <motion.div
    variants={variants}
    className="group relative flex h-full min-h-[190px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.03] bg-[#1B1A1A] p-8 text-center transition-all duration-500 hover:border-white/10 sm:p-10"
  >
    {/* Atmospheric Red Glow - Exact Replica scale/intensity */}
    <div
      className={`pointer-events-none absolute h-48 w-48 rounded-full bg-[#E33B26] opacity-[0.12] mix-blend-screen blur-[60px] transition-all duration-700 group-hover:scale-150 group-hover:opacity-[0.2] ${index % 2 === 0 ? "-left-16 -bottom-16" : "-right-16 -top-16"
        }`}
    />

    <div className="relative z-10 flex flex-col items-center gap-1">
      <div className="font-display text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl">
        {item.value}
      </div>
      <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40">
        {item.label}
      </div>
    </div>
  </motion.div>
));

export default function Milestones({ staggerContainer, staggerItem }) {
  return (
    <Section className="relative overflow-hidden bg-[#1B1A1A] py-28">
      <Container className="relative z-10">
        <SectionHeading
          align="start"
          eyebrow={
            <div className="inline-flex items-center gap-3 rounded-lg bg-white p-1 pr-4 shadow-xl">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E33B26] shadow-sm">
                <Flame className="size-4 fill-white text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-black pr-1">
                Milestones
              </span>
            </div>
          }
          title="Transforming Industries Through Intelligent Innovation"
          description="At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter."
          className="max-w-4xl"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {milestoneItems.map((item, index) => (
            <MilestoneCard
              key={index}
              item={item}
              index={index}
              variants={staggerItem}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
