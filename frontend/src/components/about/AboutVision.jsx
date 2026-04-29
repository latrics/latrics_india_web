import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, ArrowRight, ArrowLeft } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";

/**
 * AboutVision Section - "Build the Future"
 * Interactive and high-fidelity redesign featuring a split-card layout.
 * Now includes a functional Swipe toggle to switch between Vision and Mission.
 */
export default function AboutVision() {
  const [showMission, setShowMission] = useState(false);

  const visionContent = {
    title: "Our Vision",
    description: "At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently.",
    badge: "BUILD THE FUTURE",
    image: "/vision_hero.png"
  };

  const missionContent = {
    title: "Our Mission",
    description: "To bridge the gap between traditional surveying and high-precision autonomous technology, setting the global standard for industrial intelligence.",
    badge: "OUR PURPOSE",
    image: "/drone_simulation.png"
  };

  const activeContent = showMission ? missionContent : visionContent;

  return (
    <Section className="relative overflow-hidden">
      <Container>
        <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0E0E0E]/90 shadow-[0_48px_96px_rgba(0,0,0,0.7)]">
          {/* Card Decorations - Concentric Radar Circles */}
          <div className="absolute top-0 right-0 pointer-events-none opacity-70 z-0">
            <svg width="300" height="300" viewBox="-20 80 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "200px 200px" }}
              >
                <circle cx="140" cy="140" r="40" stroke="white" strokeWidth="1" />
                <circle cx="140" cy="140" r="60" stroke="white" strokeWidth="1" />
                <circle cx="140" cy="140" r="80" stroke="white" strokeWidth="1" />
                <circle cx="130" cy="60" r="5" fill="#DA291C" />
                <circle cx="200" cy="140" r="5" fill="#DA291C" />
              </motion.g>
            </svg>
          </div>

          <div className="absolute -bottom-25 right-22 pointer-events-none opacity-60 z-0">
            <svg width="340" height="340" viewBox="20 -50 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "120px 120px" }}
              >
                <circle cx="120" cy="120" r="40" stroke="white" strokeWidth="1" />
                <circle cx="120" cy="120" r="60" stroke="white" strokeWidth="1" />
                <circle cx="120" cy="120" r="80" stroke="white" strokeWidth="1" />
                <circle cx="120" cy="40" r="5" fill="#DA291C" />
                <circle cx="175" cy="100" r="5" fill="#DA291C" />
              </motion.g>
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">
            {/* Left Column: Image Section (Desktop Only) */}
            <div className="hidden lg:flex lg:w-[45%] p-6 md:p-10">
              <div className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl bg-black/20">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeContent.image}
                    src={activeContent.image}
                    alt={activeContent.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Content Section */}
            <div className="w-full lg:w-[55%] p-6 md:p-10 flex flex-col justify-start">
              <div className="relative z-10 pt-4 md:pt-0 h-full flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeContent.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex-1"
                  >
                    {/* Standardized Badge */}
                    <div className="mb-8 lg:mb-12">
                      <SectionBadge icon={Flame} text={activeContent.badge} />
                    </div>

                    {/* Image for Mobile (Placed between Badge and Text) */}
                    <div className="lg:hidden relative w-full h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-2xl bg-black/20 mb-8">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeContent.image + "-mobile"}
                          src={activeContent.image}
                          alt={activeContent.title}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
                        />
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <h2 className="text-title-1 font-bold text-white mb-6 lg:mb-10 tracking-tight leading-[1.1] uppercase">
                      {activeContent.title}
                    </h2>

                    <p className="font-sans text-body-lg text-white/60 leading-relaxed max-w-xl mb-16">
                      {activeContent.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Segmented Switch Toggle with Swipe/Drag Effect */}
                <div className="mt-auto pt-8">
                  <div
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      setShowMission(x > rect.width / 2);
                    }}
                    className="relative inline-flex items-center bg-white/[0.03] border border-white/10 rounded-lg p-1 backdrop-blur-xl transition-all w-[240px] h-[52px] select-none overflow-hidden cursor-pointer"
                  >
                    {/* Draggable Red Box - Layered Underneath text */}
                    <motion.div
                      drag="x"
                      dragConstraints={{ left: 0, right: 116 }}
                      dragElastic={0.1}
                      onDragEnd={(_, info) => {
                        if (info.offset.x > 40) setShowMission(true);
                        if (info.offset.x < -40) setShowMission(false);
                      }}
                      animate={{ x: showMission ? 116 : 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute h-[42px] w-[116px] rounded-lg bg-[#DA291C] shadow-[0_4px_12px_rgba(218,41,28,0.3)] cursor-grab active:cursor-grabbing z-10"
                    />

                    {/* Labels - Layered on Top for visibility */}
                    <div className="relative z-20 flex w-full h-full pointer-events-none">
                      <div
                        className={`flex-1 flex items-center justify-center text-[11px] font-black tracking-[0.15em] uppercase transition-colors duration-300 ${!showMission ? "text-white" : "text-white/60"}`}
                      >
                        Vision
                      </div>
                      <div
                        className={`flex-1 flex items-center justify-center text-[11px] font-black tracking-[0.15em] uppercase transition-colors duration-300 ${showMission ? "text-white" : "text-white/60"}`}
                      >
                        Mission
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
