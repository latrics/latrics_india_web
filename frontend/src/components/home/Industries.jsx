import { useState, useRef, useEffect } from "react";
import { Factory, ArrowRight, ArrowUpRight, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { industryCopy, industryTabs } from "../../constants/siteContent";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Tag from "../common/Tag";
import SectionBadge from "../common/SectionBadge";
import Button from "../common/Button";
import { cn } from "../../utils/cn";

const DIMENSIONS = {
  // Gaps between elements (heading to tabs, tabs to image)
  headingMargin: "mb-3 md:mb-5",
  tabsMargin: "mb-5 md:mb-8",
  // Image box dimensions (height and aspect ratio)
  imageBoxHeight: "h-[480px] sm:h-[420px] md:h-[450px] lg:h-[480px]",
  imageBoxAspect: "",
  // Content padding inside the image box (overlay text)
  contentPadding: "p-6 sm:p-8 md:p-10",
  // Toggle for the arrow button
  showArrowButton: false
};

export default function Industries({ activeTab, setActiveTab, industryImages }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dropdownRef = useRef(null);

  // Reset index when tab changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTab]);

  // Slideshow logic for tabs with multiple images
  useEffect(() => {
    const images = industryImages[activeTab];
    if (Array.isArray(images) && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000); // 5 seconds per slide
      return () => clearInterval(interval);
    }
  }, [activeTab, industryImages]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <Section id="industries">
      <Container>
        <div className="island-card">
          <SectionHeading
            badgeIcon={Factory}
            badgeText="Industries"
            badgeAlign="start"
            title="Solutions tailored for every frontier"
            description="At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter."
            descriptionClassName="text-base md:text-lg max-w-xl mx-auto"
            align="center"
            className={DIMENSIONS.headingMargin}
          />


          {/* Desktop Tabs */}
          <div
            className={cn(
              "mx-auto hidden lg:flex max-w-fit flex-wrap justify-center gap-2 rounded-lg border border-white/[0.08] bg-[#1a1a1a]/50 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl",
              DIMENSIONS.tabsMargin
            )}
            role="tablist"
          >
            {industryTabs.map((tab) => (
              <Button
                key={tab}
                variant="ghost"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative overflow-hidden rounded-lg px-5 py-2.5 text-sm font-bold transition-all duration-300 min-h-0",
                  activeTab === tab
                    ? "text-white shadow-[0_4px_16px_rgba(218,41,28,0.3)] bg-brand"
                    : "text-white/50 border-transparent hover:bg-white/5 hover:text-white/90"
                )}
              >
                <span className="font-sans relative z-10">{tab}</span>
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeIndustry"
                    className="absolute inset-0 z-0 bg-gradient-to-br from-[#DA291C] to-[#8f1208]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Button>
            ))}
          </div>

          {/* Mobile Custom Dropdown */}
          <div
            ref={dropdownRef}
            className={cn("mx-auto flex lg:hidden w-full max-w-xs justify-center", DIMENSIONS.tabsMargin)}
          >
            <div className="relative w-full">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between rounded-lg border border-white/20 bg-[#1a1a1a]/80 py-3.5 px-5 text-sm font-bold text-white shadow-xl outline-none backdrop-blur-xl transition-all hover:border-brand/50 focus:border-brand"
              >
                <span>{activeTab}</span>
                <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isOpen ? "rotate-180" : "")} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]/95 p-1 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
                  >
                    <div className="flex flex-col gap-1">
                      {industryTabs.map((tab) => {
                        const isActive = activeTab === tab;
                        return (
                          <button
                            key={tab}
                            onClick={() => {
                              setActiveTab(tab);
                              setIsOpen(false);
                            }}
                            className={cn(
                              "flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-bold transition-all",
                              isActive
                                ? "bg-brand text-white shadow-lg shadow-brand/20"
                                : "text-white/60 hover:bg-white/10 hover:text-white"
                            )}
                          >
                            {tab}
                            {isActive && <Check className="h-4 w-4" strokeWidth={3} />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className={cn(
            "group relative overflow-hidden rounded-xl border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.6)]",
            DIMENSIONS.imageBoxAspect,
            DIMENSIONS.imageBoxHeight
          )}>
            <AnimatePresence mode="wait">
              <motion.img
                key={`${activeTab}-${currentImageIndex}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                src={Array.isArray(industryImages[activeTab]) ? industryImages[activeTab][currentImageIndex] : industryImages[activeTab]}
                alt={`${activeTab} - view ${currentImageIndex + 1}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
            </AnimatePresence>

            {/* Pagination Dots for Slideshow */}
            {Array.isArray(industryImages[activeTab]) && industryImages[activeTab].length > 1 && (
              <div className="absolute bottom-1/5 translate-y-1/2 right-6 sm:right-8 md:right-10 z-20 flex flex-col gap-2.5">
                {industryImages[activeTab].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={cn(
                      "w-2 rounded-full transition-all duration-300",
                      currentImageIndex === idx ? "h-6 bg-brand shadow-[0_0_12px_rgba(218,41,28,0.5)]" : "h-2 bg-white/30 hover:bg-white/50"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

            {/* Top Right Decorative Arrow Button (Replica) */}
            {DIMENSIONS.showArrowButton && (
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
                <div className="flex h-10 w-10 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-105 hover:bg-white/10 group/btn cursor-pointer">
                  <ArrowUpRight className="h-5 w-5 sm:h-8 sm:w-8 text-white transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" strokeWidth={1.5} />
                </div>
              </div>
            )}

            <div className={cn(
              "absolute inset-0 flex flex-col justify-end sm:flex-row sm:items-end sm:justify-between sm:gap-6",
              DIMENSIONS.contentPadding
            )}>
              <div className="max-w-xl text-left">
                <span className="mb-4 inline-block rounded-full border border-[#DA291C]/30 bg-[#DA291C]/10 px-3 py-1 font-bold tracking-widest text-[#DA291C] text-[0.625rem] uppercase backdrop-blur-md">
                  Active sector
                </span>
                <h3 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-lg">{industryCopy[activeTab].title}</h3>
                <p className="font-sans mt-2 text-sm sm:text-base leading-relaxed text-white/70 drop-shadow-md">{industryCopy[activeTab].description}</p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {industryCopy[activeTab].tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.8)] backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
