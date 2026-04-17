import React, { memo } from "react";
import { Flame } from "lucide-react";
import { motion } from "framer-motion";
import { milestoneItems } from "../../data/siteContent";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";

const MilestoneCard = memo(({ item, index, variants }) => {
  const glowPositions = [
    "-left-16 -top-16",    // Card 1: Top Left
    "-right-16 -top-16",   // Card 2: Top Right
    "-left-16 -bottom-16", // Card 3: Bottom Left
    "-right-16 -bottom-16" // Card 4: Bottom Right
  ];
  
  const secondaryGlowPositions = [
    "-right-12 -bottom-12", // Card 1 Opp: Bottom Right
    "-left-12 -bottom-12",  // Card 2 Opp: Bottom Left
    "-right-12 -top-12",    // Card 3 Opp: Top Right
    "-left-12 -top-12"      // Card 4 Opp: Top Left
  ];

  return (
    <motion.div
      variants={variants}
      className="group relative flex h-full min-h-[190px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.05] bg-gradient-to-br from-[#222] to-[#111] p-8 text-center transition-all duration-500 hover:border-brand/30 hover:shadow-[0_20px_50px_rgba(218,41,28,0.1)] sm:p-10"
    >
      {/* Primary Red Glow - Dynamic Corner Position */}
      <div
        className={`pointer-events-none absolute h-56 w-56 rounded-full bg-brand opacity-[0.15] mix-blend-screen blur-[70px] transition-all duration-700 group-hover:scale-150 group-hover:opacity-[0.25] ${glowPositions[index % 4]}`}
      />
      
      {/* Secondary Accent Glow - Opposite Corner Corner Position */}
      <div
        className={`pointer-events-none absolute h-48 w-48 rounded-full bg-accent-glow opacity-[0.08] mix-blend-screen blur-[60px] transition-all duration-700 group-hover:scale-125 group-hover:opacity-[0.15] ${secondaryGlowPositions[index % 4]}`}
      />

      <div className="relative z-10 flex flex-col items-center gap-1">
        <div className="font-display text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl transition-transform group-hover:scale-110 duration-500">
          {item.value}
        </div>
        <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40">
          {item.label}
        </div>
      </div>
    </motion.div>
  );
});

export default function Milestones({ staggerContainer, staggerItem }) {
  return (
    <Section className="relative overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          badgeIcon={Flame}
          badgeText="Milestones"
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
