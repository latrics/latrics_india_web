import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, MapPin } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";

const ACCOMPLISHMENTS = [
  {
    id: "telangana",
    name: "Telangana",
    description: "Strategic headquarters and primary testing facility for the Sudarshana series. Conducted high-altitude endurance testing for tactical missions.",
    x: "48%",
    y: "65%",
    isLatest: true
  },
  {
    id: "odisha",
    name: "Odisha",
    description: "Executed state-wide LiDAR mapping for forest resource management and coastal ecosystem monitoring.",
    x: "65%",
    y: "55%",
    isLatest: false
  },
  {
    id: "assam",
    name: "Assam",
    description: "Pioneered autonomous flood relief surveillance and infrastructure monitoring across the Brahmaputra valley.",
    x: "88%",
    y: "35%",
    isLatest: false
  },
  {
    id: "karnataka",
    name: "Karnataka",
    description: "Advanced urban development mapping and smart-city infrastructure inspection for the Bangalore metropolitan region.",
    x: "45%",
    y: "80%",
    isLatest: false
  }
];

export default function ExpertiseAccomplishments() {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  // Default to the latest mission
  const activeLocation = hoveredLocation || ACCOMPLISHMENTS.find(loc => loc.isLatest);

  return (
    <Section className="relative py-24" id="expertise-accomplishments">
      <Container>
        <div className="mb-12 flex flex-col items-center text-center">
          <SectionBadge icon={Flame} text="ACCOMPLISHED" />
          <h2 className="mt-6 text-3xl font-display font-bold text-white md:text-5xl uppercase tracking-tight">
            See How Latrics Can Work For You
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            We fuse advanced drone hardware with proprietary AI analytics to provide actionable industrial intelligence across the nation.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl aspect-[4/5] md:aspect-[5/4] bg-[#121212]/40 rounded-3xl border border-white/[0.05] overflow-hidden shadow-2xl backdrop-blur-sm">
          {/* Decorative Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-glow/5 rounded-full blur-[100px] pointer-events-none" />

          {/* India Map SVG */}
          <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
            <svg
              viewBox="0 0 800 900"
              className="w-full h-full opacity-40 grayscale brightness-75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-white/5 stroke-white/20"
                strokeWidth="1.5"
                d="M310 840 L280 810 L250 780 L220 740 L200 700 L185 660 L170 620 L150 590 L130 570 L110 540 L90 510 L80 470 L85 430 L100 400 L125 370 L155 330 L190 290 L230 260 L270 230 L310 200 L350 180 L390 160 L430 150 L470 160 L510 180 L540 210 L570 250 L590 290 L610 330 L630 380 L640 430 L645 480 L640 530 L625 580 L600 620 L570 660 L535 700 L490 740 L450 780 L400 810 L350 835 Z"
              />
              {/* Internal state lines simulation */}
              <path d="M350,200 L380,250 M400,300 L430,350 M300,400 L350,420 M450,500 L500,520 M550,400 L520,350" stroke="white" strokeWidth="0.5" opacity="0.1" fill="none" />
              <path d="M250,600 L300,620 M400,650 L450,670 M500,700 L550,720" stroke="white" strokeWidth="0.5" opacity="0.1" fill="none" />
            </svg>
          </div>

          {/* Dots Layer */}
          <div className="absolute inset-0">
            {ACCOMPLISHMENTS.map((loc) => (
              <div
                key={loc.id}
                className="absolute transition-all duration-300 cursor-pointer z-10"
                style={{ left: loc.x, top: loc.y }}
                onMouseEnter={() => setHoveredLocation(loc)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                {/* Latrics Logo Dot */}
                <div className="relative group">
                  <motion.div
                    initial={false}
                    animate={{
                      scale: activeLocation.id === loc.id ? 1.2 : 1,
                      backgroundColor: activeLocation.id === loc.id ? "rgba(218, 41, 28, 1)" : "rgba(218, 41, 28, 0.6)"
                    }}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 shadow-[0_0_20px_rgba(218,41,28,0.5)] overflow-hidden"
                  >
                    <img src="/latrics_logo.svg" alt="Latrics" className="w-6 h-6 object-contain brightness-0 invert" />
                  </motion.div>
                  
                  {/* Glowing Pulse Effect for active dot */}
                  {activeLocation.id === loc.id && (
                    <motion.div
                      layoutId="pulse"
                      className="absolute inset-0 rounded-full bg-brand/30 -z-10"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Description Glass Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLocation.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 md:left-auto md:top-1/2 md:bottom-auto md:translate-y-[-50%] md:translate-x-[20px] p-6 rounded-2xl border border-white/[0.08] bg-[#121212]/80 backdrop-blur-xl shadow-[0_32px_64px_rgba(0,0,0,0.6)] z-20"
              style={{
                 // Responsively position the box near the active dot on large screens if possible, 
                 // but a fixed position relative to the container is cleaner for this layout
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-brand/10 border border-brand/20">
                  <MapPin className="w-4 h-4 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{activeLocation.name}</h3>
                {activeLocation.isLatest && (
                  <span className="ml-auto text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-brand text-white">
                    LATEST
                  </span>
                )}
              </div>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                {activeLocation.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Operational Impact</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= 4 ? "bg-brand" : "bg-white/10"}`} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
