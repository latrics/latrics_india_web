import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, ArrowUpRight } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";
import { aboutPageCopy } from "../../constants/siteContent";

/**
 * AboutApproach Section
 * Showcases the 'Why? What? How?' of Latrics using interactive cards.
 */
export default function AboutApproach() {
  const { approach } = aboutPageCopy;

  return (
    <Section className="relative pb-12 overflow-hidden">


      <Container>
        <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0E0E0E]/95 px-8 py-8 md:px-14 md:py-12 shadow-[0_48px_96px_rgba(0,0,0,0.7)] flex flex-col lg:min-h-[80vh] justify-center">
          {/* Header Content - Tightened alignment */}
          <div className="flex flex-col items-start text-left mb-8 lg:mb-10 relative z-10">
            <SectionBadge icon={Flame} text={approach.badge} />
            <h2 className="mt-4 text-[clamp(1.8rem,4vw,3rem)] font-bold text-white leading-[1.1] tracking-tight max-w-4xl font-display">
              {approach.title}
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 leading-relaxed max-w-3xl font-medium font-sans">
              {approach.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {approach.cards.map((card, index) => {
              const [isFlipped, setIsFlipped] = useState(false);

              return (
                <div
                  key={card.id}
                  className="relative h-[340px] lg:h-[380px] w-full [perspective:1500px] cursor-pointer"
                  onMouseEnter={() => setIsFlipped(true)}
                  onMouseLeave={() => setIsFlipped(false)}
                >
                  <motion.div
                    className="relative h-full w-full [transform-style:preserve-3d]"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* FRONT SIDE */}
                    <div className="absolute inset-0 h-full w-full rounded-xl border border-white/[0.1] bg-gradient-to-br from-[#2A2A2A] via-[#1A1A1A] to-[#080808] p-8 flex flex-col [backface-visibility:hidden] shadow-2xl overflow-hidden group/card">
                      {/* Vibrant Atmospheric Radial Glow */}
                      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#DA291C]/20 blur-[100px] opacity-80 group-hover/card:opacity-100 transition-all duration-700 pointer-events-none" />
                      <div className="absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-brand/5 blur-[60px] opacity-40 pointer-events-none" />



                      <div className="flex justify-between items-start w-full">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white/90 font-display tracking-tight">
                          {card.title}
                        </h3>
                        <div className="p-2 rounded-full bg-white/5 border border-white/10">
                          <ArrowUpRight className="size-4 text-white/40" />
                        </div>
                      </div>

                      <div className="mt-auto flex justify-center w-full">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="size-36 lg:size-44 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* BACK SIDE */}
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-[#DA291C] p-8 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl overflow-hidden">
                      {/* Subtle Texture for Back Side */}
                      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
                      />

                      <p className="text-white text-base lg:text-lg font-medium leading-relaxed font-sans">
                        {card.description}
                      </p>

                      <h3 className="text-4xl lg:text-5xl font-bold text-black/20 font-display tracking-tighter self-end select-none">
                        {card.title}
                      </h3>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
