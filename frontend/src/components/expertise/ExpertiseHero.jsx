import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import Container from "../common/Container";

export default function ExpertiseHero({ data }) {
  return (
    <section className="relative w-full pt-32 pb-10">
      <Container>
        <div className="relative w-full overflow-hidden rounded-xl min-h-[500px] flex flex-col justify-center">
          {/* Subtle Square Grid Pattern */}
          <div
            className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="vision_hero.png"
              alt="Expertise Latrics"
              className="h-full w-full object-cover object-center"
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col items-start justify-center p-8 md:p-16 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-display text-white mb-4"
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-10 text-lg md:text-[1.25rem] text-white font-semibold tracking-wide"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <button className="group relative inline-flex items-center justify-between gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-1.5 py-1.5 rounded-xl font-bold transition-all w-fit">
                <span className="pl-5 pr-2 font-sans tracking-wide">Request Demo</span>
                <div className="flex bg-[#DA291C] rounded-xl size-10 items-center justify-center transition-transform">
                  <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
              </button>

              <button className="group relative inline-flex items-center justify-between gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-1.5 py-1.5 rounded-xl font-bold transition-all w-fit">
                <span className="pl-5 pr-2 font-sans tracking-wide">Download Brochure</span>
                <div className="flex bg-[#DA291C] rounded-xl size-10 items-center justify-center transition-transform">
                  <Download className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
