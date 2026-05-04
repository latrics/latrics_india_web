import { motion } from "framer-motion";
import Container from "../common/Container";

export default function ProductHero() {
  return (
    <Container className="pt-28">
      <section className="relative w-full h-[400px] md:h-[520px] flex items-center justify-center overflow-hidden rounded-xl shadow-2xl">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/licopter_hero.jpg')" }}
        >
          {/* Dark Overlays to match the premium look */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 w-full">
          <motion.h1
            className="text-4xl md:text-7xl lg:text-8xl font-black font-display tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-sans text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">LiCOPTER-P</span>
            <span className="font-sans text-brand drop-shadow-[0_10px_30px_rgba(218,41,28,0.4)] ml-1">720</span>
          </motion.h1>
        </div>
      </section>
    </Container>
  );
}
