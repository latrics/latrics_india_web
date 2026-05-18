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
    <div className="relative h-[100dvh] w-full flex flex-col items-center justify-start pt-[12vh] md:pt-[15vh] pb-12 overflow-hidden bg-transparent">

      {/* --- ATMOSPHERIC GLOWS --- */}
      <div className="absolute -left-[20%] -top-[20%] w-[50vw] h-[50vw] rounded-full pointer-events-none opacity-40 blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(255, 17, 0, 1) 0%, transparent 70%)' }}
      />
      <div className="absolute -right-[20%] -bottom-[50%] w-[50vw] h-[50vw] rounded-full pointer-events-none opacity-40 blur-[10px]"
        style={{ background: 'radial-gradient(circle, rgba(255, 17, 0, 1) 0%, transparent 70%)' }}
      />

      <Container className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* --- SQUIRCLE ICON (Fixed height wrapper) --- */}
          <div className="h-24 flex items-center justify-center mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex"
            >
              <div className="relative p-5 -mb-8 bg-brand rounded-2xl shadow-[0_0_40px_rgba(218,41,28,0.3)]">
                <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
            </motion.div>
          </div>

          {/* --- TITLE CONTAINER (Fixed height wrapper to prevent subheading shift) --- */}
          <div className="h-20 md:h-28 flex items-center justify-center w-full -mb-6">
            <h1 className="text-title-1 font-display font-bold text-white tracking-tight uppercase text-center leading-tight">
              {title}
            </h1>
          </div>

          {/* --- SUBTITLE CONTAINER (Fixed height wrapper to prevent button shift) --- */}
          <div className="h-24 md:h-28 flex items-center justify-center w-full mb-10">
            <p className="text-body-lg text-white/70 font-medium leading-relaxed max-w-2xl mx-auto text-center">
              {subtitle || "We are currently engineering this segment to meet Latrics' standards of excellence. Check back soon for the full experience."}
            </p>
          </div>

          {/* --- CUSTOM 'BACK TO HOME' BUTTON & BADGE (Fixed position actions) --- */}
          <div className="flex flex-col items-center gap-10 h-36 justify-start w-full">
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
