import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, ClipboardList, Plane, Zap, Database, Trophy, FileCheck } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { cn } from "../../utils/cn";

export default function ExpertiseWorkflow({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepIcons = [ClipboardList, Plane, Zap, Database, Trophy, FileCheck];

  return (
    <Section className="relative" id="expertise-workflow">
      <Container>
        <div className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121212]/90 px-8 py-10 sm:px-12 md:px-16 md:py-14 shadow-[0_48px_96px_rgba(0,0,0,0.7)] flex flex-col">
          {/* Square Grid Pattern */}
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

          {/* Background Aesthetic Glows */}
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-glow blur-[100px] opacity-10 pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-accent-glow blur-[100px] opacity-5 pointer-events-none" />

          <SectionHeading
            badgeIcon={Flame}
            badgeText={data.badge || "WORKFLOW"}
            title={data.title}
            description={data.description}
            className="mb-16"
          />

          <div className="relative flex flex-col md:flex-row items-start justify-around w-full max-w-6xl mx-auto pt-4 pb-12">
            {data.steps.map((step, index) => {
              const isLast = index === data.steps.length - 1;
              const isActive = activeIndex === index;

              // Logic to handle icon assignment for grouped vs single steps
              let Icon1, Icon2;
              if (step.isGroup) {
                Icon1 = Plane; 
                Icon2 = Zap;   
              } else {
                const iconIndex = index === 0 ? 0 : index + 1;
                Icon1 = stepIcons[iconIndex % stepIcons.length];
              }

              return (
                <div key={index} className="flex items-center w-full md:w-auto group/step">
                  <div 
                    className="relative flex flex-col items-center cursor-pointer"
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* The Box */}
                    {step.isGroup ? (
                      <motion.div
                        animate={{
                          scale: isActive ? 1.05 : 1,
                          backgroundColor: isActive ? "rgba(218, 41, 28, 0.2)" : "rgba(255, 255, 255, 0.03)",
                          borderColor: isActive ? "rgba(218, 41, 28, 0.4)" : "rgba(255, 255, 255, 0.08)"
                        }}
                        className={cn(
                          "relative z-10 w-44 md:w-56 h-20 md:h-24 rounded-xl flex items-center justify-center gap-10 px-6 transition-all duration-500 mx-auto border backdrop-blur-xl shadow-2xl",
                          isActive && "shadow-brand/20"
                        )}
                      >
                        <Icon1 className={cn(
                          "size-7 md:size-8 transition-all duration-500",
                          isActive ? "text-brand scale-110" : "text-[#FFF5E0]"
                        )} strokeWidth={1.5} />
                        <span className="text-[0.65rem] font-bold text-white/30 uppercase tracking-widest">OR</span>
                        <Icon2 className={cn(
                          "size-7 md:size-8 transition-all duration-500",
                          isActive ? "text-brand scale-110" : "text-[#FFF5E0]"
                        )} strokeWidth={1.5} />
                      </motion.div>
                    ) : (
                      <motion.div
                        animate={{
                          scale: isActive ? 1.05 : 1,
                          backgroundColor: isActive ? "rgba(218, 41, 28, 0.2)" : "rgba(255, 255, 255, 0.03)",
                          borderColor: isActive ? "rgba(218, 41, 28, 0.4)" : "rgba(255, 255, 255, 0.08)"
                        }}
                        className={cn(
                          "relative z-10 size-20 md:size-24 rounded-xl flex items-center justify-center transition-all duration-500 mx-auto border backdrop-blur-xl shadow-2xl",
                          isActive && "shadow-brand/20"
                        )}
                      >
                        <Icon1 className={cn(
                          "size-8 md:size-10 transition-all duration-500",
                          isActive ? "text-brand scale-110" : "text-[#FFF5E0]"
                        )} strokeWidth={1.5} />
                      </motion.div>
                    )}

                    {/* The Label */}
                    <p className={cn(
                      "mt-6 text-center font-bold text-xs md:text-sm uppercase tracking-wider leading-tight w-24 md:w-32 transition-colors duration-500",
                      isActive ? "text-brand" : "text-[#FFF5E0]"
                    )}>
                      {step.title}
                    </p>
                  </div>

                  {/* The Connecting Path (Desktop) */}
                  {!isLast && (
                    <div className="hidden md:flex items-center justify-center -mt-16 px-2 lg:px-4 min-w-[2rem] lg:min-w-[3rem]">
                      <div className="relative w-12 lg:w-16 h-[1px]">
                        <div className={cn(
                          "w-full h-full transition-all duration-700",
                          activeIndex >= index + 1 ? "bg-brand shadow-[0_0_8px_rgba(218,41,28,0.5)]" : "bg-white/10"
                        )} />
                        <div className={cn(
                          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-1.5 rounded-full transition-all duration-700",
                          activeIndex >= index + 1 ? "bg-brand shadow-[0_0_10px_rgba(218,41,28,0.8)]" : "bg-white/40"
                        )} />
                      </div>
                    </div>
                  )}

                  {/* Mobile Connector (Vertical) */}
                  {!isLast && (
                    <div className="md:hidden flex flex-col items-center py-6 w-full">
                      <div className={cn(
                        "w-[1px] h-10 relative transition-all duration-700",
                        activeIndex >= index + 1 ? "bg-brand" : "bg-white/10"
                      )}>
                        <div className={cn(
                          "absolute bottom-0 left-1/2 -translate-x-1/2 size-1.5 rounded-full transition-all duration-700",
                          activeIndex >= index + 1 ? "bg-brand" : "bg-white/40"
                        )} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Description Box at bottom */}
          <div className="mt-8 relative h-auto min-h-[12rem] md:min-h-[10rem] w-full rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-3xl shadow-inner overflow-hidden group/desc">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

            <motion.div
              animate={{ x: `${(activeIndex / (data.steps.length - 1)) * 100}%` }}
              className="absolute -top-24 left-0 w-64 h-64 bg-brand/5 blur-[80px] rounded-full pointer-events-none"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 p-8 md:p-10 flex flex-col justify-center h-full"
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                  {data.steps[activeIndex].isGroup ? (
                    data.steps[activeIndex].subSteps.map((subStep, idx) => (
                      <div key={idx} className="flex-1">
                        <h3 className="text-brand font-display font-bold text-lg mb-3 flex items-center gap-3">
                          <span className="text-[0.6rem] font-sans opacity-40 uppercase tracking-widest">
                            {idx === 0 ? "A" : "B"}
                          </span>
                          {subStep.title}
                        </h3>
                        <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed">
                          {subStep.description}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="flex-1">
                      <h3 className="text-brand font-display font-bold text-xl mb-3 flex items-center gap-3">
                        <span className="text-sm font-sans opacity-40">STEP {activeIndex + 1}</span>
                        {data.steps[activeIndex].title}
                      </h3>
                      <p className="text-white/60 font-sans text-base md:text-lg leading-relaxed max-w-5xl">
                        {data.steps[activeIndex].description}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
