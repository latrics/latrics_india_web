const easeOut = [0.16, 1, 0.3, 1];

/**
 * Shared motion presets — subtle, premium easing (Linear-style).
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: easeOut }
};

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  },
  viewport: { once: true, margin: "-60px" }
};

export const staggerItem = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.48, ease: easeOut }
};
