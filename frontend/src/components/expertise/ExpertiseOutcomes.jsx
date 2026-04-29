import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, Flame } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";
import ActionLink from "../common/ActionLink";

export default function ExpertiseOutcomes({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.items.length) % data.items.length);
  };

  return (
    <Section className="relative" id="expertise-outcomes">
      <Container>
        <div className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121212]/90 px-6 py-10 sm:px-10 md:px-12 md:py-12 shadow-[0_48px_96px_rgba(0,0,0,0.7)] flex flex-col min-h-[450px] lg:min-h-[500px]">
          {/* Square Grid Pattern */}
          <div
            className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Background Aesthetic Glows */}
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-glow blur-[100px] opacity-10 pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-accent-glow blur-[100px] opacity-5 pointer-events-none" />

          {/* Header */}
          <div className="mb-4 md:mb-6 flex justify-start">
            <SectionBadge icon={Flame} text={data.badge} />
          </div>

          <div className="relative flex-1 flex flex-col items-center justify-center">
            {/* Navigation Arrows - Overlapping card edges with refined shape */}
            <button
              onClick={prevSlide}
              className="absolute left-0 md:left-2 z-20 size-10 md:size-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:bg-brand hover:border-brand group/btn shadow-2xl"
              aria-label="Previous outcome"
            >
              <ChevronLeft className="size-5 text-white transition-transform group-hover/btn:-translate-x-1" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 md:right-2 z-20 size-10 md:size-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:bg-brand hover:border-brand group/btn shadow-2xl"
              aria-label="Next outcome"
            >
              <ChevronRight className="size-5 text-white transition-transform group-hover/btn:translate-x-1" />
            </button>

            {/* Main Content Card - Maximized horizontal utility */}
            <div className="w-full max-w-full mx-auto px-4 md:px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 md:p-6 lg:p-8 flex flex-col md:flex-row gap-6 md:gap-12 items-center"
                >
                  {/* Image Container - Wide aspect for slimness */}
                  <div className="w-full md:w-[35%] aspect-video md:aspect-[1.8/1] relative rounded-xl overflow-hidden shadow-2xl group/img flex-shrink-0">
                    <img
                      src={data.items[currentIndex].image}
                      alt={data.items[currentIndex].title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  </div>

                  {/* Text Content - Spread across remaining width */}
                  <div className="w-full md:w-[65%] flex flex-col gap-2 md:gap-3">
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white font-display font-bold text-xl md:text-2xl lg:text-3xl leading-tight"
                    >
                      {data.items[currentIndex].title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-white/60 font-sans text-sm md:text-base lg:text-lg leading-relaxed line-clamp-3 lg:line-clamp-none"
                    >
                      {data.items[currentIndex].description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom CTA - Tightened margin */}
          <div className="mt-4 md:mt-6 flex justify-center">
            <ActionLink href="#case-studies">
              View All Case Studies
            </ActionLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
