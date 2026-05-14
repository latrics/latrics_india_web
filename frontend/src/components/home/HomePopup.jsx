import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Flame, ArrowRight, Check } from "lucide-react";
import { cn } from "../../utils/cn";

/**
 * HomePopup Component
 * A premium first-time visitor modal that showcases the Latrics Survey Drone.
 * Uses localStorage to ensure it only appears once.
 */
export default function HomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const images = [
    "/licopter_popup01.png",
    "/licopter_popup01.png",
    "/licopter_popup01.png"
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % images.length);
    }, 10000); // Change image every 3.5 seconds

    return () => clearInterval(interval);
  }, [isOpen, images.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOpen(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    const target = document.getElementById("highlights");
    if (target) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Overlay / Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="relative h-[90vh] md:h-[640px] w-full max-w-4xl bg-white rounded-lg shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] overflow-visible"
          >
            {/* Close Button - Distinct Floating Red Square */}
            <button
              onClick={handleClose}
              className="absolute -top-3 -right-3 z-[60] p-2 bg-[#DA291C] text-white hover:bg-[#DA291C]/90 hover:scale-105 transition-all rounded-lg shadow-lg"
              aria-label="Close"
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            {/* Scrollable Content Wrapper */}
            <div className="w-full h-full flex flex-col md:flex-row p-2 md:p-3 gap-2 md:gap-3 overflow-y-auto md:overflow-hidden no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style dangerouslySetInnerHTML={{
                __html: `
                .no-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}} />

              {/* Left Section: Image Visual Carousel */}
              <div className="w-full md:w-[45%] relative h-[300px] md:h-auto rounded-lg overflow-hidden shrink-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeStep}
                    src={images[activeStep]}
                    alt={`Latrics Survey Drone - View ${activeStep + 1}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Visual Accent Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Pagination Dots (Functional) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        activeStep === idx ? "w-6 bg-[#DA291C]" : "w-3 bg-white/40 hover:bg-white/60"
                      )}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              {/* Right Section: Gradient Box Content */}
              <div
                className="w-full md:w-[55%] flex flex-col relative md:overflow-hidden rounded-lg p-5 md:p-7"
                style={{
                  background: "linear-gradient(135deg, rgba(218,41,28,0.25) 0%, #f3f4f6 35%, #f3f4f6 65%, rgba(218,41,28,0.25) 100%)"
                }}
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Title & Description */}
                  <div className="mb-6">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-3xl md:text-4xl font-extrabold text-[#DA291C] leading-tight mb-3 tracking-tight"
                    >
                      Latrics Survey Drone
                    </motion.h2>

                    <h3 className="text-base md:text-lg font-semi-bold text-slate-900 mb-2">
                      At Latrics, we build precision-driven LiDAR
                    </h3>
                    <p className="text-[0.75rem] md:text-[0.85rem] text-slate-500 leading-relaxed max-w-[90%]">
                      We fuse advanced drone hardware with proprietary AI analytics to give manufacturer and facility operators.
                    </p>
                  </div>

                  {/* Features Grid (2x2) */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { title: "LiDAR Mapping", subtitle: "3D TERRAIN" },
                      { title: "High-Resolution", subtitle: "CLEAR PHOTOS/VIDEOS" },
                      { title: "Long Flight Time", subtitle: "45 MINS" },
                      { title: "Real-Time Analytics", subtitle: "INSTANT PROCESSING" },
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (idx * 0.1) }}
                        className="bg-black/6 backdrop-blur border border-slate/40 p-4 rounded-lg flex flex-col items-start gap-3 group/card hover:bg-white/60 transition-all duration-300 shadow-sm"
                      >
                        <div className="size-8 rounded-lg bg-black/8 backdrop-blur border border-white/20 flex items-center justify-center shrink-0 group-hover/card:scale-110 transition-transform">
                          <Flame className="size-5 text-[#DA291C] fill-[#DA291C]" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[0.85rem] font-bold text-[#DA291C] leading-tight">
                            {feature.title}
                          </span>
                          <span className="text-[0.65rem] font-semi-bold text-slate-500 tracking-wider uppercase">
                            {feature.subtitle}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-auto mb-6">
                    <button
                      onClick={handleClose}
                      className="h-12 rounded-lg bg-slate/10 border-[2px] border-slate-300 text-slate-600 font-bold text-sm hover:bg-white transition-colors"
                    >
                      Maybe Later
                    </button>
                    <button
                      onClick={handleClose}
                      className="h-12 rounded-lg bg-[#DA291C] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#DA291C]/90 shadow-lg shadow-[#DA291C]/20 transition-all group"
                    >
                      Continue
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Bottom Footer Note */}
                  <div className="flex items-start gap-3 mt-auto">
                    <div className="size-5 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check className="size-3.5 text-white" strokeWidth={4} />
                    </div>
                    <p className="text-xs leading-relaxed text-slate-500 font-medium">
                      We fuse advanced drone hardware with proprietary AI analytics to give manufacturer and facility operators.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
