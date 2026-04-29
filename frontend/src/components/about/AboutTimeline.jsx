import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "../common/Section";
import Container from "../common/Container";
import SectionBadge from "../common/SectionBadge";
import { timelineEvents } from "../../constants/siteContent";
import { cn } from "../../utils/cn";

/**
 * AboutTimeline Component - Interactive High-Fidelity Redesign
 * A perfect replica of the requested timeline UI featuring a year selector, 
 * interactive content cards, and premium radial glow effects.
 */
export default function AboutTimeline() {
  const [activeIndex, setActiveIndex] = useState(timelineEvents.length - 1); // Default to the latest year (current)
  const scrollContainerRef = useRef(null);

  const nextYear = () => setActiveIndex((p) => (p + 1) % timelineEvents.length);
  const prevYear = () => setActiveIndex((p) => (p - 1 + timelineEvents.length) % timelineEvents.length);

  const activeEvent = timelineEvents[activeIndex];

  // Auto-scroll the timeline on mobile to keep the active year in view
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const buttons = container.querySelectorAll("button[data-year]");
      const activeButton = buttons[activeIndex];

      if (activeButton) {
        const scrollLeft = activeButton.offsetLeft - container.offsetWidth / 2 + activeButton.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [activeIndex]);

  return (
    <Section className="relative lg:px-0">
      <Container>
        <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0E0E0E]/95 px-6 py-10 sm:px-12 md:px-12 md:py-12 shadow-[0_48px_96px_rgba(0,0,0,0.7)]">
          {/* Background Aesthetic Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Red Theme Spotlight */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#DA291C]/15 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4 group-hover:bg-[#DA291C]/20 transition-all duration-700" />
          </div>

          <div className="relative z-10">
            {/* Header Section */}
            <div className="mb-10">
              <SectionBadge icon={Flame} text="TIMELINE" />
              <h2 className="text-title-1 font-bold text-white font-display mt-8 mb-6 tracking-tight leading-[1.1]">
                Bridging the gap between traditional surveying practices since 2022
              </h2>
              <p className="text-white/40 font-sans text-body-lg leading-relaxed">
                At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently.
              </p>
            </div>

            {/* Interactive Year Selector */}
            <div
              ref={scrollContainerRef}
              className="flex items-center justify-between gap-4 mb-12 overflow-x-auto no-scrollbar pb-3 px-2 lg:px-2 relative scroll-smooth"
            >
              <div className="flex flex-1 justify-between items-end min-w-[600px] md:min-w-0">
                {timelineEvents.map((event, idx) => (
                  <button
                    key={event.year}
                    data-year={event.year}
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative text-3xl md:text-5xl lg:text-7xl transition-all duration-500 tracking-tighter font-display cursor-pointer outline-none ${activeIndex === idx
                      ? "text-[#DA291C] scale-105 z-10 font-bold"
                      : "text-white/10 hover:text-white/20 font-medium"
                      }`}
                  >
                    {event.year}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Card & Interactive controls */}
            <div className="flex flex-col md:flex-row items-end gap-10 lg:gap-16">
              {/* Active Year Detail Card */}
              <div className="flex-1 w-full bg-white/[0.07] rounded-lg border border-white/[0.05] shadow-2xl p-8 md:p-10 min-h-[260px] relative overflow-hidden group/card">
                {/* Internal Detail Glow */}
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#DA291C]/5 blur-[80px] rounded-lg translate-x-1/2 translate-y-1/2" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="relative z-10 h-full flex flex-col"
                  >
                    <span className="text-white font-bold text-2xl font-display mb-8">
                      {activeEvent.year}
                    </span>

                    <div className="mt-auto">
                      <h3 className="text-white text-xl font-bold mb-4 font-display">
                        {activeEvent.title}
                      </h3>
                      <p className="text-white/50 text-lg font-sans leading-relaxed max-w-2xl">
                        {activeEvent.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrow Controls */}
              <div className="flex gap-4 md:mb-4 self-center md:self-start">
                <button
                  onClick={prevYear}
                  className={cn(
                    "flex items-center justify-center w-16 h-16 rounded-xl border transition-all duration-500 backdrop-blur-xl group/btn relative",
                    "border-white/30 text-white/70 hover:text-white hover:border-white/50 bg-gradient-to-br from-white/[0.12] to-white/[0.01] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)]",
                    "hover:scale-105 active:scale-95"
                  )}
                  aria-label="Previous Year"
                >
                  <ChevronLeft className="w-8 h-8 group-hover/btn:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={nextYear}
                  className={cn(
                    "flex items-center justify-center w-16 h-16 rounded-xl border transition-all duration-500 backdrop-blur-xl group/btn relative",
                    "border-white/30 text-white/70 hover:text-white hover:border-white/50 bg-gradient-to-br from-white/[0.12] to-white/[0.01] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)]",
                    "hover:scale-105 active:scale-95"
                  )}
                  aria-label="Next Year"
                >
                  <ChevronRight className="w-8 h-8 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
