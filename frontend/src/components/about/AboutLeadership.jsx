import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";
import { cn } from "../../utils/cn";

const SLIDES = [
  {
    id: 1,
    name: "Balaji Nagarajan",
    role: "MANAGING DIRECTOR",
    image: "/directors_BN.jpg", // Placeholder for Balaji
    text1: "At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently.",
    text2: "At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently."
  },
  {
    id: 2,
    name: "Team Lead",
    role: "HEAD OF ENGINEERING",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    text1: "Innovation is at the core of everything we do. We push the boundaries of what's possible in autonomous flight.",
    text2: "Innovation is at the core of everything we do. We push the boundaries of what's possible in autonomous flight."
  },
  {
    id: 3,
    name: "Operations Manager",
    role: "CHIEF OPERATIONS OFFICER",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    text1: "Efficiency and safety are our top priorities. We ensure every mission is a success through rigorous planning.",
    text2: "Efficiency and safety are our top priorities. We ensure every mission is a success through rigorous planning."
  }
];

/**
 * AboutLeadership Section
 * Interactive leadership slider explaining the precision and innovation of Latrics.
 */
export default function AboutLeadership() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Section spacing="xs" className="relative py-0">
      <Container>
        <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0E0E0E]/95 px-8 py-10 sm:px-12 md:px-16 md:py-12 shadow-[0_48px_96px_rgba(0,0,0,0.7)] flex flex-col">


          <div className="relative z-10 flex-1">
            <header className="mb-8">
              <div className="mb-6 flex justify-start">
                <SectionBadge icon={Flame} text="BUILD THE FUTURE" iconClassName="bg-brand text-white" />
              </div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-[1.1] tracking-tight">
                Our Approach to Work
              </h2>
              <p className="font-sans mt-4 text-lg text-white/50 leading-relaxed max-w-4xl font-medium">
                At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently.
              </p>
            </header>

            <div className="relative overflow-hidden">
              <div 
                className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
                onScroll={(e) => {
                  const scrollLeft = e.currentTarget.scrollLeft;
                  const width = e.currentTarget.offsetWidth;
                  const newIndex = Math.round(scrollLeft / width);
                  if (newIndex !== activeSlide) {
                    setActiveSlide(newIndex);
                  }
                }}
              >
                {SLIDES.map((slide, idx) => (
                  <div key={slide.id} className="w-full flex-shrink-0 snap-center">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-stretch px-2">
                      {/* Left: Image Card */}
                      <div className="flex flex-col h-full gap-6">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                          <img
                            src={slide.image}
                            alt={slide.name}
                            className="w-full h-full object-cover transition-all duration-700"
                          />
                        </div>
                        
                        <div className="mt-auto bg-[#121212] border border-white/5 px-8 py-6 rounded-xl text-center shadow-lg">
                          <h3 className="text-2xl font-bold text-white mb-1 font-display">
                            {slide.name}
                          </h3>
                          <p className="text-brand font-bold tracking-[0.2em] text-sm uppercase">
                            {slide.role}
                          </p>
                        </div>
                      </div>

                      {/* Right: Text Content */}
                      <div className="flex flex-col h-full gap-8">
                        <div className="space-y-6">
                          <p className="font-sans text-xl text-white/80 leading-relaxed font-medium">
                            {slide.text1}
                          </p>
                          <p className="font-sans text-xl text-white/80 leading-relaxed font-medium">
                            {slide.text2}
                          </p>
                        </div>

                        {/* Dark Glass Box - Aligned with Left Bottom */}
                        <div className="mt-auto h-40 w-full rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-3xl shadow-inner relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-4 mt-12">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={cn(
                  "h-2 transition-all duration-500 rounded-md",
                  activeSlide === idx ? "w-12 bg-brand" : "w-10 bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
