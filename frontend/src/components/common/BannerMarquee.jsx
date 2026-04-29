import { motion } from "framer-motion";
import { marqueePartners } from "../../constants/siteContent";

// Items displayed in the marquee strip — mirroring "Company" labels from the reference image
const items = marqueePartners;

export default function BannerMarquee() {
  return (
    <div
      style={{ backgroundColor: "#1a1b1f" }}
      className="relative overflow-hidden border-y border-border-muted py-3.5 md:py-4"
    >
      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30, // Slightly slower for better readability across wide screens
            ease: "linear",
          },
        }}
        className="flex w-max items-center gap-12 md:gap-20 px-2"
      >
        {[0, 1, 2, 3].map((dup) =>
          items.map((name, index) => (
            <div
              key={`${dup}-${name}-${index}`}
              className="flex items-center gap-12 md:gap-20 whitespace-nowrap"
            >
              <span
                className="text-[0.9375rem] font-medium tracking-[0.04em] text-[#d0d2d8] uppercase"
              >
                {name}
              </span>
              {/* Red diamond separator with uniform rotation */}
              <span
                aria-hidden
                className="animate-spin-slow text-brand text-xl md:text-2xl flex-shrink-0"
              >
                ◆
              </span>
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
}
