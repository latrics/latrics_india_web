import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import Container from "../common/Container";
import SectionBadge from "../common/SectionBadge";
import { cn } from "../../utils/cn";

const WORKS_STEPS = [
  {
    id: "deployment",
    title: "Transforming Industries Through Intelligent Innovation",
    description: "At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently.",
    image: "/drone_on_pedestals.png"
  },
  {
    id: "capture",
    title: "Multispectral Capture & Analysis",
    description: "High-resolution RGB and thermal sensors capture environmental data with sub-millimeter detail for real-time processing.",
    image: "/drone_inspection.png"
  },
  {
    id: "processing",
    title: "Real-Time Edge AI Intelligence",
    description: "On-board AI compute clusters process mission-critical data instantly to detect defects and anomalies during flight.",
    image: "/drone_sensor.png"
  },
  {
    id: "sync",
    title: "Secure Industrial Data Synchronization",
    description: "AES-256 encrypted data syncs to the Latrics dashboard via restricted industrial networks for secure operations.",
    image: "/industry_digital.png"
  },
  {
    id: "insight",
    title: "Autonomous Actionable Insights",
    description: "Predictive models generate detailed reports and maintenance priorities within minutes of mission completion.",
    image: "/industry_energy.png"
  }
];

export default function ProductLicopterWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStep = () => {
    if (currentIndex < WORKS_STEPS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevStep = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Container id="licopter-works" className="mb-20">
      <div className="group/container relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#121212]/90 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-white/[0.12] hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)] p-6 sm:p-10 lg:p-12">
        {/* Subtle Atmospheric Background Glow */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[300px] w-[300px] rounded-full bg-brand opacity-5 mix-blend-screen blur-[80px] transition-opacity duration-700 group-hover/container:opacity-10" />

        <div className="relative z-[2] w-full isolate">
          {/* Top Bar: Badge (Left) + Indicators (Right - top of text area) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-12">
            <SectionBadge
              icon={Flame}
              text="LICOPTER WORK"
              className="scale-90 sm:scale-100 origin-left"
            />

            {/* Carousel Indicator: top of text only */}
            <div className="flex gap-4 w-full max-w-[320px] sm:max-w-xl">
              {WORKS_STEPS.map((step, index) => (
                <button
                  key={`indicator-${step.id}`}
                  className="font-sans relative h-1.5 flex-1 rounded-full bg-white/[0.1] overflow-hidden cursor-pointer group/bar transition-colors"
                  onClick={() => setCurrentIndex(index)}
                  title={`Go to step ${index + 1}: ${step.title}`}
                >
                  <motion.div
                    className="absolute inset-0 bg-brand"
                    initial={false}
                    animate={{
                      width: index <= currentIndex ? "100%" : "0%",
                      opacity: index <= currentIndex ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Main Layout Area */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-20 md:items-stretch">
            {/* Left Column (Image) */}
            <div className="flex-1 w-full relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-black/20 group/img shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={WORKS_STEPS[currentIndex].id}
                    src={WORKS_STEPS[currentIndex].image}
                    alt={WORKS_STEPS[currentIndex].title}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                {/* Branding Overlay on Image */}
                <div className="absolute top-6 left-6 z-10 opacity-60">
                  <img src="/latrics_logo.svg" alt="Latrics" className="h-4 sm:h-5 w-auto" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Column (Content: Pinned Top & Bottom) */}
            <div className="flex-1 flex flex-col justify-between py-1">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={WORKS_STEPS[currentIndex].id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Header text at same height as image top */}
                    <h3 className="text-[clamp(1.75rem,4vw,3.25rem)] font-bold text-white mb-6 leading-[1.05] tracking-tight">
                      {WORKS_STEPS[currentIndex].title}
                    </h3>
                    <p className="text-fg-secondary text-base lg:text-xl leading-relaxed max-w-xl font-medium opacity-90">
                      {WORKS_STEPS[currentIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons: Bottom aligned with Image end */}
              <div className="flex gap-4 mt-8 md:mt-0">
                <button
                  onClick={prevStep}
                  disabled={currentIndex === 0}
                  className={cn(
                    "flex items-center justify-center size-12 lg:size-14 rounded-xl border transition-all duration-500 backdrop-blur-xl group relative",
                    currentIndex === 0
                      ? "border-white/5 opacity-20 cursor-not-allowed bg-white/[0.02]"
                      : "border-white/30 text-white/70 hover:text-white hover:border-white/50 bg-gradient-to-br from-white/[0.12] to-white/[0.01] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)]"
                  )}
                  aria-label="Previous step"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextStep}
                  disabled={currentIndex === WORKS_STEPS.length - 1}
                  className={cn(
                    "flex items-center justify-center size-12 lg:size-14 rounded-xl border transition-all duration-500 backdrop-blur-xl group relative",
                    currentIndex === WORKS_STEPS.length - 1
                      ? "border-white/5 opacity-20 cursor-not-allowed bg-white/[0.02]"
                      : "border-white/30 text-white/70 hover:text-white hover:border-white/50 bg-gradient-to-br from-white/[0.12] to-white/[0.01] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)]"
                  )}
                  aria-label="Next step"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
