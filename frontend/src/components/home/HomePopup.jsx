import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

/**
 * HomePopup Component
 * A premium first-time visitor modal that showcases Terrain Desk by Latrics.
 * Uses localStorage/session-level tracking to ensure it appears once per session.
 */
let hasBeenShownSession = false;

export default function HomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (hasBeenShownSession) return; // Prevent attaching the observer if already shown in this session

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOpen(true);
          hasBeenShownSession = true; // Mark as shown for the session
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
            className="absolute inset-0 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="relative w-full max-w-3xl rounded-2xl md:rounded-[24px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] overflow-visible px-5 py-4 md:px-8 md:py-6"
            style={{
              background: "radial-gradient(circle at bottom left, rgba(218, 41, 28, 0.25) 0%, rgba(255, 255, 255, 0) 45%), #ffffff"
            }}
          >
            {/* Close Button - Distinct Floating Red Square */}
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 md:-top-5.5 md:-right-2.5 z-[60] w-9 h-9 md:w-11 md:h-11 bg-brand text-white hover:bg-brand-hover hover:scale-105 transition-all rounded-xl shadow-lg flex items-center justify-center border border-white/10"
              aria-label="Close"
            >
              <X size={18} className="md:size-5" strokeWidth={2.5} />
            </button>

            {/* Content: Two-column layout */}
            <div className="relative w-full flex flex-col md:flex-row items-stretch gap-5 md:gap-7">

              {/* Left Column: Info & Actions */}
              <div className="w-full md:w-[48%] flex flex-col items-start text-left relative z-10 py-1">
                {/* Badge: INTRODUCING */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] md:text-xs font-bold tracking-wider uppercase text-brand bg-brand/10 mb-5 md:mb-6">
                  <span className="size-2.5 rounded-full bg-brand inline-block animate-pulse" />
                  INTRODUCING
                </div>

                {/* Title: Terrain Desk */}
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-brand leading-none mb-1.5 md:mb-2 tracking-tight">
                  Terrain Desk
                </h2>

                {/* Subtitle: Your Workspace for Terrain Intelligence */}
                <h3 className="font-display text-lg md:text-2xl font-semibold text-slate-900 leading-tight mb-2 md:mb-3 tracking-tight">
                  Your Workspace for Terrain Intelligence
                </h3>

                {/* Description */}
                <p className="font-sans text-xs md:text-sm text-slate-500 leading-relaxed mb-3 md:mb-5 max-w-[95%]">
                  The next generation platform for discovering and leveraging geospatial data-designed for professionals who build the world.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-row items-center gap-2.5 w-full mt-auto pt-4">
                  <a
                    href="https://terraindesk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans h-9 md:h-10 px-3.5 md:px-4 rounded-lg bg-brand text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-brand-hover shadow-lg shadow-brand-glow transition-all group no-underline whitespace-nowrap"
                  >
                    Explore Terrain Desk
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button
                    onClick={handleClose}
                    className="font-sans h-9 md:h-10 px-3.5 md:px-4 rounded-lg bg-[#f3f4f6] border border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-100 font-bold text-xs transition-all whitespace-nowrap"
                  >
                    Back to Latrics
                  </button>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="w-full md:w-[52%] relative z-10 flex items-center justify-center">
                <img
                  src="/popup_tdesk.png"
                  alt="Terrain Desk by Latrics"
                  className="w-full h-auto rounded-lg md:rounded-[14px] shadow-[0_12px_36px_rgba(0,0,0,0.15)] object-cover"
                />
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

