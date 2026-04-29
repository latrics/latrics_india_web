import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";
import { cn } from "../../utils/cn";

export default function ExpertiseSolutions({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data.length]);

  const handleManualSelect = (index) => {
    setActiveIndex(index);
  };

  const currentSolution = data[activeIndex];

  return (
    <Section className="relative" id="expertise-solutions">
      <Container>
        <div className="bg-[#151515]/90 rounded-xl border border-white/[0.06] overflow-hidden shadow-[0_48px_96px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[650px]">
            {/* Left Content */}
            <div className="p-10 sm:p-16 flex flex-col justify-center relative h-full">
              <div className="mb-6 flex justify-start">
                <SectionBadge icon={Flame} text="SOLUTIONS" iconClassName="bg-brand text-white" />
              </div>

              {/* Fixed height container for text - decoupled from content to prevent any expansion/shrinking */}
              <div className="h-[320px] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 flex flex-col"
                  >
                    <h2 className="text-title-1 text-white mb-8">
                      {currentSolution.title}
                    </h2>
                    <p className="font-sans text-body-lg text-white/70 font-medium max-w-lg">
                      {currentSolution.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Indicator */}
              <div className="flex items-center gap-2 mt-auto">
                {data.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleManualSelect(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === activeIndex ? "w-18 bg-brand" : "w-12 bg-white/20 hover:bg-white/40"
                    )}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Arch Image - Decoupled from grid content to maintain static size */}
            <div className="relative h-[450px] lg:h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-8 lg:inset-16 bg-[#1A1A1A] overflow-hidden lg:rounded-t-full rounded-t-xl shadow-2xl"
                >
                  <img
                    src={currentSolution.image}
                    alt={currentSolution.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay for blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/50 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
