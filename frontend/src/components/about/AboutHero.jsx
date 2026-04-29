import { motion } from "framer-motion";
import Container from "../common/Container";

/**
 * Hero Section for the About Page
 * Features a full-bleed image with a bottom fade transition.
 */
export default function AboutHero({ data }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Starts from top of screen */}
      <div className="absolute inset-0 z-0">
        <img
          src="Drone_image_2.jpg"
          alt="About Latrics"
          className="h-full w-full object-cover object-center"
        />
        {/* Darkening Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Bottom Fade Transition */}
        <div className="absolute inset-x-0 bottom-0 h-50 bg-gradient-to-t from-canvas to-transparent" />
      </div>

      <Container className="relative z-10 flex h-full flex-col items-center justify-center text-center pt-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-display leading-[1.1] text-white font-bold tracking-tight"
        >
          {data.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 max-w-3xl text-body-lg text-white/70 font-medium leading-relaxed"
        >
          {data.description}
        </motion.p>
      </Container>
    </section>
  );
}
