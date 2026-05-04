import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Rocket, Clock, ShieldCheck, Cpu, Flame } from "lucide-react";
import Button from "./Button";
import Container from "./Container";
import { cn } from "../../utils/cn";

/**
 * ComingSoon Component
 * A reusable, premium placeholder for sections or pages under development.
 * 
 * @param {string} title - The title of the upcoming section.
 * @param {string} subtitle - A short description or teaser.
 * @param {React.ReactNode} icon - A Lucide icon or custom element.
 */
export default function ComingSoon({ title, subtitle, icon: Icon = Rocket }) {
  useEffect(() => {
    // Disable scrolling when ComingSoon is mounted
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.documentElement.style.height = '100%';

    return () => {
      // Re-enable scrolling when unmounted
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.height = 'auto';
      document.documentElement.style.height = 'auto';
    };
  }, []);

  return (
    <div className="relative h-[100dvh] flex items-center justify-center pt-20 pb-12 overflow-hidden bg-[#1B1A1A]/40">
      {/* --- GRID BACKGROUND --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* --- ATMOSPHERIC GLOWS --- */}
      <div className="absolute -left-[20%] -top-[20%] w-[50vw] h-[50vw] rounded-full pointer-events-none opacity-40 blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(255, 17, 0, 1) 0%, transparent 70%)' }}
      />
      <div className="absolute -right-[20%] -bottom-[50%] w-[50vw] h-[50vw] rounded-full pointer-events-none opacity-40 blur-[10px]"
        style={{ background: 'radial-gradient(circle, rgba(255, 17, 0, 1) 0%, transparent 70%)' }}
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* --- SQUIRCLE ICON --- */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex mb-10"
          >
            <div className="relative p-5 bg-brand rounded-2xl shadow-[0_0_40px_rgba(218,41,28,0.3)]">
              <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
          </motion.div>

          {/* --- TITLE & SUBTITLE --- */}
          <h1 className="text-4xl md:text-7xl font-display font-black text-white mb-8 tracking-tight uppercase">
            {title}
          </h1>

          <p className="text-base md:text-lg text-white/70 font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
            {subtitle || "We are currently engineering this segment to meet Latrics' standards of excellence. Check back soon for the full experience."}
          </p>

          {/* --- CUSTOM 'BACK TO HOME' BUTTON --- */}
          <div className="flex flex-col items-center gap-10">
            <a
              href="#top"
              className="group relative flex items-center gap-4 pl-6 pr-1.5 py-1.5 bg-[#1A1A1A]/80 border border-white/5 rounded-xl hover:bg-[#1A1A1A] transition-all duration-300 backdrop-blur-xl shadow-2xl"
            >
              <span className="text-white text-sm font-bold tracking-tight">Back to Home</span>
              <div className="flex items-center justify-center size-9 bg-brand rounded-lg transition-transform duration-500 group-hover:-translate-x-1">
                <ArrowLeft className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
            </a>

            {/* --- UNDER DEVELOPMENT BADGE --- */}
            <div className="flex items-center gap-3 px-6 py-2.5 bg-brand/5 border border-brand/40 rounded-full">
              <span className="flex h-3 w-3 rounded-full bg-brand shadow-[0_0_10px_rgba(218,41,28,0.5)]"></span>
              <span className="text-brand text-[0.7rem] font-black uppercase tracking-[0.25em]">Under Development</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
