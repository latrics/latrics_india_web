import { useState, useEffect, memo } from "react";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";
import { cn } from "../../utils/cn";
import ActionLink from "../common/ActionLink";
import Container from "../common/Container";

// Static data for industry verticals
const verticals = [
  {
    id: "aerospace",
    label: "Aerospace",
    title: <>India's First Indigenous <br />DGCA-Certified LiDAR Platform</>,
    description: "Autonomous drones + AI analytics for Mining, Highways, Urban Development, Energy, Water & Emergency Services",
    bgImage: "/aerospace_hero.png",
    thumbnail: "/aerospace_hero.png",
    bgClassName: "bg-[length:100%_auto] bg-[center_180%] bg-no-repeat bg-[#08090d] max-sm:bg-cover max-sm:bg-[75%_center]"
  },
  {
    id: "digital",
    label: "Digital",
    title: <>Where Reality <br />Becomes Data</>,
    description: "Convert billions of spatial data points into accurate digital models that accelerate inspection, asset management, and decision-making.",
    bgImage: "/industry_digital.png",
    thumbnail: "/industry_digital.png",
    bgClassName: "bg-contain bg-center bg-no-repeat bg-[#08090d] max-sm:bg-contain max-sm:bg-center"
  },
  {
    id: "energy",
    label: "Energy",
    title: <>Powering the Future of<br />Clean Energy & Storage</>,
    description: "From 20MW solar deployments to next-gen battery R&D - building self-reliant energy solutions for drones, infrastructure, and the grid",
    bgImage: "/energy_hero.png",
    thumbnail: "/energy_hero.png"
  }
];

const defaultContent = {
  id: "default",
  title: (
    <>
      India&apos;s First Indigenous <br />
      DGCA-Certified LiDAR Platform
    </>
  ),
  description: "Autonomous drones + AI analytics for Aerospace, Digital Intelligence, and Energy.",
  bgImage: "/hero_bg.png"
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-cycle effect: Switch verticals every 12 seconds
  // Resets whenever selectedIndex changes (e.g., on manual click)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedIndex((prev) => (prev + 1) % verticals.length);
    }, 12000);
    return () => clearTimeout(timer);
  }, [selectedIndex]);

  const currentContent = verticals[selectedIndex];

  const handleSelect = (idx) => {
    setSelectedIndex(idx);
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden pt-24 lg:pt-44 pb-12">
      <Background
        crossfadeKey={currentContent.id}
        imageUrl={currentContent.bgImage}
        customClassName={currentContent.bgClassName}
      />

      <Container
        wrapperClassName="h-full"
        className="relative z-10 w-full h-full flex flex-col justify-center px-6 sm:px-6 md:px-8 py-6 md:py-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">

          {/* Left Side: Content */}
          <div className="lg:col-span-9 flex flex-col items-start text-left gap-4 md:gap-6 h-full pb-4 lg:pb-12">
            {/* Conditional "Visit Page" Button (Desktop Only) */}
            <div className="min-h-[50px] hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <ActionLink
                    href={`#${verticals[selectedIndex].id}`}
                    className="rounded-lg bg-black/40 backdrop-blur-[2px] border border-white/10 p-2 pl-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-[1.02] active:scale-95 transition-all"
                    iconClassName="size-11 bg-brand border border-white/10"
                  >
                    <span className="text-[1rem] font-semibold tracking-wide text-white">
                      Visit Page
                    </span>
                  </ActionLink>
                </motion.div>
              </AnimatePresence>
            </div>

            <DynamicText content={currentContent} />
            {/* Industry Badges (Made in India, etc.) */}
            <div className="mt-6 md:mt-12 lg:mt-auto pt-4 md:pt-10">
              <Badges activeId={currentContent.id} />
            </div>
          </div>

          {/* Right Side: Bottom-Right Controls */}
          <div className="hidden lg:flex lg:col-span-3 justify-end items-end h-full pt-20 pb-12">
            <div className="mt-auto">
              <Controls
                verticals={verticals}
                selectedIndex={selectedIndex}
                onSelect={handleSelect}
              />
            </div>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="mt-2 lg:hidden flex flex-col items-center gap-4 pb-8">
          <Controls
            verticals={verticals}
            selectedIndex={selectedIndex}
            onSelect={handleSelect}
          />
        </div>
      </Container>

      {/* Hero Bottom Fade Effect */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-canvas via-canvas/40 to-transparent pointer-events-none" />
    </section>
  );
}

// --- Subcomponents ---

const Background = memo(({ crossfadeKey, imageUrl, customClassName }) => {
  const hasBgSize = customClassName?.includes("bg-cover") || customClassName?.includes("bg-contain");
  const hasBgPosition = customClassName?.includes("bg-center") || customClassName?.includes("bg-right") || customClassName?.includes("bg-left") || customClassName?.includes("bg-[");
  const hasBgRepeat = customClassName?.includes("bg-repeat") || customClassName?.includes("bg-no-repeat");

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <AnimatePresence>
        <motion.div
          key={crossfadeKey}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className={cn(
            "absolute inset-0 transition-transform duration-[20s] ease-linear scale-105",
            !hasBgSize && "bg-cover",
            !hasBgPosition && "bg-center",
            !hasBgRepeat && "bg-no-repeat",
            customClassName
          )}
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
    </div>
  );
});
Background.displayName = "Background";

const DynamicText = memo(({ content }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={content.id}
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.5 },
        filter: { duration: 0.5 }
      }}
      className="flex flex-col items-start gap-4 md:gap-8 w-full pt-4 lg:pt-0"
    >
      <h1 className="text-title-1 leading-[1.2] text-white font-bold tracking-tight text-left max-w-none lg:max-w-5xl min-h-[2.4em] lg:min-h-[2.4em] flex items-center">
        {content.title}
      </h1>
      <p className="max-w-none lg:max-w-3xl text-lg md:text-[1.25rem] font-medium leading-relaxed text-white/70 text-left min-h-[3.2em] flex items-start">
        {content.description}
      </p>

      {/* Mobile Visit Page Button */}
      <div className="mt-3 lg:hidden">
        <ActionLink
          href={`#${content.id}`}
          className="rounded-lg bg-black/40 backdrop-blur-[2px] border border-white/10 p-1 pl-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all"
          iconClassName="size-9 bg-brand border border-white/10"
        >
          <span className="text-[0.9rem] font-semibold tracking-wide text-white">
            Visit Page
          </span>
        </ActionLink>
      </div>
    </motion.div>
  </AnimatePresence>
));
DynamicText.displayName = "DynamicText";

const BadgeCard = ({ image, label, containerClassName, imageContainerClassName, textClassName }) => (
  <div className={cn(
    "flex flex-col items-center gap-1 px-3 py-1 rounded-2xl bg-black/5 border border-white/10 backdrop-blur-[2px] shadow-2xl transition-all hover:bg-white/5 group flex-1 min-w-0 sm:flex-none sm:w-60 lg:w-60",
    containerClassName
  )}>
    <div className={cn("relative h-20 sm:h-28 w-full flex items-center justify-center transition-transform group-hover:scale-105", imageContainerClassName)}>
      <img
        src={image}
        alt={label}
        className="max-h-full max-w-full object-contain opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
      />
    </div>
    <span className={cn("text-[0.8rem] font-bold tracking-widest text-white/80 uppercase text-center leading-tight whitespace-nowrap", textClassName)}>
      {label}
    </span>
  </div>
);

const Badges = memo(({ activeId }) => {
  const showBadges = activeId === "aerospace"; // Only Aerospace has these specific certifications

  return (
    <div className={cn(
      "flex flex-row gap-18 w-full justify-between lg:justify-start lg:gap-8 transition-opacity duration-500",
      !showBadges && "opacity-0 pointer-events-none" // Maintain layout but hide contents
    )}>
      <BadgeCard
        image="/make_in_india.png"
      //label="Made in India"
      />
      <BadgeCard
        image="/dgca_certified_logo.jpg"
      //label="DGCA Type Certified"
      />
    </div>
  );
});
Badges.displayName = "Badges";

const Controls = memo(({ verticals, selectedIndex, onSelect }) => (
  <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-3xl shadow-2xl overflow-x-auto no-scrollbar max-w-full">
    {verticals.map((v, idx) => {
      const isActive = selectedIndex === idx;
      return (
        <motion.button
          key={v.id}
          onClick={() => onSelect(idx)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: isActive ? 1.08 : 1,
            opacity: isActive ? 1 : 0.7
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={cn(
            "group relative flex flex-col items-center gap-2 w-18 sm:w-28",
            isActive && "z-10"
          )}
        >
          <div className={cn(
            "relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-lg border-2 transition-all duration-500",
            isActive ? "border-[#DA291C] shadow-[0_0_40px_rgba(218,41,28,0.4)]" : "border-white/10"
          )}>
            <img
              src={v.thumbnail}
              alt={v.label}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {isActive && (
              <motion.div
                layoutId="active-glow"
                className="absolute inset-0 bg-[#DA291C]/10"
              />
            )}
          </div>
          <span className={cn(
            "text-sm sm:text-base font-medium tracking-tight transition-colors duration-300",
            isActive ? "text-white" : "text-white/60"
          )}>
            {v.label}
          </span>
        </motion.button>
      );
    })}
  </div>
));
Controls.displayName = "Controls";
