import { useState, memo } from "react";
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
    title: "Mission-Grade Visibility for Flight Ops",
    description: "Inspect fuselage and restricted airside zones with autonomous drone hardware paired with proprietary AI analytics.",
    bgImage: "/industry_aerospace.png",
    thumbnail: "/industry_aerospace.png"
  },
  {
    id: "digital",
    label: "Digital",
    title: "Digital Intelligence for Critical Assets",
    description: "Unify imagery and telemetry into one operating picture for asset-heavy environments that move too fast for manual review.",
    bgImage: "/industry_digital.png",
    thumbnail: "/industry_digital.png"
  },
  {
    id: "energy",
    label: "Energy",
    title: "Powering the Future of Clean Energy & Storage",
    description: "From 20MW solar deployments to next-gen battery R&D - building self-reliant energy solutions for drones, infrastructure, and the grid.",
    bgImage: "/industry_energy.png",
    thumbnail: "/industry_energy.png"
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
  const [selectedIndex, setSelectedIndex] = useState(null);

  const currentContent = selectedIndex !== null ? verticals[selectedIndex] : defaultContent;

  const handleSelect = (idx) => {
    setSelectedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden pt-20 lg:pt-16 pb-0">
      <Background crossfadeKey={currentContent.id} imageUrl={currentContent.bgImage} />

      <Container
        wrapperClassName="h-full"
        className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-8 py-6 md:py-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">

          {/* Left Side: Content */}
          <div className="lg:col-span-9 flex flex-col items-start text-left gap-6 h-full pb-12">
            {/* Conditional "Visit Page" Button */}
            <div className="min-h-[50px]">
              <AnimatePresence>
                {selectedIndex !== null && (
                  <motion.div
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
                )}
              </AnimatePresence>
            </div>

            <DynamicText content={currentContent} />
            {/* Industry Badges (Made in India, etc.) */}
            <div className="mt-12 lg:mt-auto pt-10">
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
        <div className="mt-10 lg:hidden flex flex-col items-center gap-8 pb-8">
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

const Background = memo(({ crossfadeKey, imageUrl }) => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <AnimatePresence>
      <motion.div
        key={crossfadeKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-linear scale-105"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
    </AnimatePresence>
    <div className="absolute inset-0 bg-black/30" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
  </div>
));
Background.displayName = "Background";

const DynamicText = memo(({ content }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={content.id}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-start gap-8 w-full"
    >
      <h1 className="text-title-1 leading-[1.2] text-white font-bold tracking-tight text-left max-w-5xl">
        {content.title}
      </h1>
      <p className="max-w-3xl text-lg md:text-[1.25rem] font-medium leading-relaxed text-white/70 text-left">
        {content.description}
      </p>
    </motion.div>
  </AnimatePresence>
));
DynamicText.displayName = "DynamicText";

const BadgeCard = ({ image, label, containerClassName, imageContainerClassName, textClassName }) => (
  <div className={cn(
    "flex flex-col items-center gap-1 px-3 py-1 rounded-2xl bg-black/5 border border-white/10 backdrop-blur-[2px] shadow-2xl transition-all hover:bg-white/5 group w-full sm:w-60 lg:w-60",
    containerClassName
  )}>
    <div className={cn("relative h-24 sm:h-28 w-full flex items-center justify-center transition-transform group-hover:scale-105", imageContainerClassName)}>
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
  const isSpecialSector = activeId === "digital" || activeId === "energy";

  if (isSpecialSector) return null;

  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-8 w-full lg:w-auto justify-center lg:justify-start">
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
        <button
          key={v.id}
          onClick={() => onSelect(idx)}
          className={cn(
            "group relative flex flex-col items-center gap-2 w-18 sm:w-28 transition-all duration-500",
            isActive ? "scale-105" : "opacity-90 hover:opacity-100"
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
              <div className="absolute inset-0 bg-[#DA291C]/10" />
            )}
          </div>
          <span className={cn(
            "text-sm sm:text-base font-medium tracking-tight transition-colors duration-300",
            isActive ? "text-white" : "text-white/60"
          )}>
            {v.label}
          </span>
        </button>
      );
    })}
  </div>
));
Controls.displayName = "Controls";
