import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

/**
 * Innovative LiDAR-inspired Loading Screen.
 * Replaces the drone with a high-tech scanning radar and point-cloud assembly effect.
 */
export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 8; // Slower, more "calculated" progress
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
    >
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#DA291C 1px, transparent 1px), linear-gradient(90deg, #DA291C 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Central LiDAR Animation */}
        <div className="relative size-48 md:size-64 mb-12 flex items-center justify-center">
          {/* Outer Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-white/5 rounded-full border-dashed"
          />
          
          {/* Middle Rotating Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border border-brand/20 rounded-full"
          />

          {/* Inner Pulsing Ring */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-12 border-2 border-brand rounded-full"
          />

          {/* Scanning Line */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex justify-center z-10"
          >
            <div className="h-1/2 w-1 bg-gradient-to-t from-brand via-brand/40 to-transparent shadow-[0_0_15px_rgba(218,41,28,0.6)] rounded-full origin-bottom" />
          </motion.div>

          {/* Center Point */}
          <div className="size-3 bg-brand rounded-full shadow-[0_0_20px_rgba(218,41,28,1)] z-20" />

          {/* Random Point Cloud Dots */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
              className="absolute size-1 bg-white rounded-full z-10"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
            />
          ))}

          {/* HUD Indicators */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/40 tracking-[0.4em] uppercase">
            Scanning Vertical Zones
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-mono text-brand/60 tracking-[0.4em] uppercase whitespace-nowrap">
            Intelligence Layer Active
          </div>
        </div>

        {/* Text and Progress */}
        <div className="w-full max-w-[280px] flex flex-col gap-4">
          <div className="flex flex-col gap-1 items-center">
            <motion.span 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[10px] font-black tracking-[0.5em] text-white uppercase ml-1"
            >
              Initializing Systems
            </motion.span>
            <span className="text-[8px] font-mono text-white/30 uppercase tracking-[0.2em]">
              Precision Index: {(progress * 0.942).toFixed(3)}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-brand shadow-[0_0_20px_rgba(218,41,28,0.6)]"
            />
          </div>

          <div className="flex justify-between items-center px-1">
            <div className="flex gap-1">
              <div className={cn("size-1 rounded-full", progress > 25 ? "bg-brand" : "bg-white/10")} />
              <div className={cn("size-1 rounded-full", progress > 50 ? "bg-brand" : "bg-white/10")} />
              <div className={cn("size-1 rounded-full", progress > 75 ? "bg-brand" : "bg-white/10")} />
              <div className={cn("size-1 rounded-full", progress > 95 ? "bg-brand" : "bg-white/10")} />
            </div>
            <span className="text-xs font-black text-brand tracking-tighter">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Branding Overlay (Flicker Effect) */}
      <motion.div
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
        className="absolute bottom-12 text-[10px] font-mono text-white tracking-[1em] uppercase"
      >
        Latrics Advanced Solutions
      </motion.div>
    </motion.div>
  );
}
