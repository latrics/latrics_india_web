import { useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  // These images match the ones referenced in the public folder.
  const cards = [
    { src: "/drone_hero.png", alt: "Drone" },
    { src: "/drone_simulation.png", alt: "AI Network" },
    { src: "/industry_energy.png", alt: "Solar Panels" },
  ];

  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden bg-[#1B1A1A]">
      {/* Background Image - We assume the user added the desired image as ui-72.jpg or we use the default hero_bg if not present.  We'll use a local fallback logic but prefer the uploaded design look! */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero_bg.png')" }}
      ></div>
      {/* Fallback overlay in case url fails or just to darken it slightly for text contrast if needed, though design looks fairly clear without heavy overlay. */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-8 mt-85">

        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col gap-8"
        >
          {/* Visit Page Tag */}
          <motion.a
            href="#visit"
            whileHover={reduceMotion ? {} : { scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-max items-center gap-3 rounded-xl border border-white/50 bg-white/10 py-1.5 pl-5 pr-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <span className="text-sm font-semibold tracking-wide text-white">Visit Page</span>
            <div className="flex items-center justify-center rounded-lg bg-[#DA291C] p-1.5">
              <ArrowUpRight className="h-4 w-4 text-white" />
            </div>
          </motion.a>

          {/* Heading */}
          <h1 className="text-display text-white">
            Transforming Industries<br />
            Through Intelligent<br />
            Innovation
          </h1>
        </motion.div>
      </div>

      {/* Bottom Right Cards Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-8 right-4 z-10 sm:bottom-12 sm:right-8 md:right-12 lg:right-16"
      >
        <div className="flex gap-4 rounded-[2rem] border border-white/10 bg-black/30 p-4 shadow-2xl backdrop-blur-xl sm:gap-5 sm:p-5">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={reduceMotion ? {} : { y: -4, scale: 1.05 }}
              className="relative h-20 w-20 overflow-hidden rounded-[1.25rem] border-[5px] border-white/100 shadow-lg sm:h-24 sm:w-24 md:h-28 md:w-28"
            >
              <img
                src={card.src}
                alt={card.alt}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
