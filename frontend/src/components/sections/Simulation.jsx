import { useReducedMotion, motion } from "framer-motion";
import { Flame, ArrowUpRight } from "lucide-react";
import DroneScene from "../3d/DroneScene";

export default function Simulation() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="simulation" className="w-full bg-[#1B1A1A] py-12 px-6 md:px-12 lg:px-16 flex flex-col items-center min-h-[80vh] font-sans">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Left Badge */}
        <div className="mb-4 flex justify-start">
          <div className="inline-flex items-center gap-3 rounded-lg bg-white p-1 pr-5 shadow-xl transition-transform hover:scale-105">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E33B26] shadow-sm">
              <Flame className="size-5 fill-white text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[0.7rem] font-black uppercase tracking-[0.15em] text-black pt-0.5">
              3D Simulation
            </span>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#702C26] border border-[#8C3A35] p-3 rounded-xl transition-colors hover:opacity-80 flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </button>
          <button className="bg-transparent border border-white/20 p-3 rounded-xl transition-colors hover:bg-white/5 flex items-center justify-center shadow-sm">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center mt-16 md:mt-20">
        <h2 className="text-title-1 text-[#F4F4F4] text-center mb-16 md:mb-24">
          India&apos;s First DGCA Certified LiDAR Drone
        </h2>
        <div className="w-full max-w-4xl mx-auto flex justify-center pb-8 mt-12 md:max-w-5xl">
          {/* Interactive 3D Canvas replacement for static image */}
          <DroneScene />
        </div>
      </div>
    </section>
  );
}
