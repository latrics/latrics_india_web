import { useState, memo } from "react";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { industryCopy } from "../../data/siteContent";
import { cn } from "../../lib/cn";
import ActionLink from "../common/ActionLink";

// Static data extracted to prevent recreation on re-renders
const verticals = [
  {
    id: "aerospace",
    src: "/drone_hero.png",
    alt: "Aerospace",
    title: industryCopy.Aerospace.title,
    description: industryCopy.Aerospace.description,
    bgImage: "/drone_hero.png",
  },
  {
    id: "digital",
    src: "/drone_simulation.png",
    alt: "Digital Intelligence",
    title: industryCopy["Digital Intelligence"].title,
    description: industryCopy["Digital Intelligence"].description,
    bgImage: "/drone_simulation.png",
  },
  {
    id: "energy",
    src: "/industry_energy.png",
    alt: "Sustainable Energy",
    title: industryCopy["Sustainable Energy"].title,
    description: industryCopy["Sustainable Energy"].description,
    bgImage: "/industry_energy.png",
  },
];

const defaultContent = {
  title: "Transforming Industries\nThrough Intelligent\nInnovation",
  description: null,
  bgImage: "/hero_bg.png",
};

/**
 * Component: Hero
 * 
 * The main high-impact landing section.
 * Implementation Details:
 * - Responsive layout (mobile-first, stacked to full-screen horizontal).
 * - Multi-state content delivery: switching between 'Aerospace', 'Digital', etc.
 * - Performance: Utilizes React.memo (via DynamicText/Controls) to avoid 
 *   expensive re-renders of heavy UI elements during selection transitions.
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const currentContent = selectedIndex !== null ? verticals[selectedIndex] : defaultContent;

  /**
   * Toggles the selection of an industry vertical.
   * If the same index is clicked twice, it reverts back to the 'Default' landing state.
   */
  const handleCardClick = (idx) => {
    setSelectedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col justify-end pb-16 sm:pb-24 lg:pb-6 overflow-hidden bg-[#1B1A1A]">
      <Background crossfadeKey={currentContent.bgImage} imageUrl={currentContent.bgImage} />

      {/* Main Content */}
      <div className="relative z-10 mx-auto mt-32 w-full max-w-[1400px] px-6 md:mt-0 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between pt-16 mt-8 md:mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-4xl"
          >
            <AnimatePresence>
              {selectedIndex !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 -top-[72px]"
                >
                  <ActionLink href="#visit">Visit Page</ActionLink>
                </motion.div>
              )}
            </AnimatePresence>

            <DynamicText content={currentContent} />
          </motion.div>

          <Controls
            verticals={verticals}
            selectedIndex={selectedIndex}
            onSelect={handleCardClick}
            reduceMotion={reduceMotion}
          />
        </div>
      </div>
    </section>
  );
}

// --- Subcomponents (Separated for clarity and memoization) ---

/**
 * Animated Background Layer
 * Handles the cross-fading image transitions using Framer Motion's AnimatePresence.
 */
const Background = memo(({ crossfadeKey, imageUrl }) => (
  <>
    <AnimatePresence>
      <motion.div
        key={crossfadeKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
    </AnimatePresence>
    <div className="absolute inset-0 z-0 bg-black/50 transition-colors duration-700" />
  </>
));
Background.displayName = "Background";



const DynamicText = memo(({ content }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={content.title}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6"
    >
      <h1 className="whitespace-pre-line text-display leading-tight text-white">
        {content.title}
      </h1>
      {content.description && (
        <p className="max-w-2xl text-xl font-medium leading-relaxed text-white/80">
          {content.description}
        </p>
      )}
    </motion.div>
  </AnimatePresence>
));
DynamicText.displayName = "DynamicText";

const Controls = memo(({ verticals, selectedIndex, onSelect, reduceMotion }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
    className="z-10 mt-8 shrink-0 lg:mt-0"
  >
    <div className="inline-flex gap-4 rounded-[2rem] border border-white/10 bg-black/40 p-4 shadow-2xl backdrop-blur-xl sm:gap-5 sm:p-5">
      {verticals.map((card, idx) => (
        <motion.button
          key={idx}
          type="button"
          onClick={() => onSelect(idx)}
          whileHover={reduceMotion ? {} : { y: -4, scale: 1.05 }}
          className={cn(
            "relative h-20 w-20 cursor-pointer overflow-hidden rounded-[1.25rem] border-[5px] shadow-lg transition-all duration-300 sm:h-24 sm:w-24 md:h-28 md:w-28",
            selectedIndex === idx ? "border-[#DA291C]" : "border-white"
          )}
        >
          <img src={card.src} alt={card.alt} className="h-full w-full object-cover" />
        </motion.button>
      ))}
    </div>
  </motion.div>
));
Controls.displayName = "Controls";
