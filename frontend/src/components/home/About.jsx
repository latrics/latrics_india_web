import { useState, useEffect } from "react";
import { Info, Target, History, Rocket, Check, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import { aboutFeatures } from "../../constants/siteContent";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import ActionLink from "../common/ActionLink";
import Logo3D from "../3d/Logo3D";

export default function About({ fadeInUp }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const total = aboutFeatures.length;
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        if (current >= total - 1) return -1; // Reset to "none checked"
        return current + 1;
      });
    }, 1500); // Change every 1.5s

    return () => clearInterval(interval);
  }, []);
  return (
    <Section id="about" variant="default">
      <Container>
        <motion.div
          {...fadeInUp}
          className="island-card group"
        >
          {/* Subtle Atmospheric Background Glow */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-[300px] w-[300px] rounded-full bg-[#DA291C] opacity-5 mix-blend-screen blur-[80px] transition-opacity duration-700 group-hover:opacity-10" />

          <div className="relative z-10">
            <SectionHeading
              badgeIcon={Target}
              badgeText="About Latrics"
              title={
                <>India's Autonomous Technology Company<br /> Building Tomorrow's Aerial Infrastructure</>
              }
              className="max-w-none mb-8"
              titleClassName="max-w-none"
            />

            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <p className="text-body-lg text-white/70 mb-10 leading-relaxed max-w-none">
                  We integrate indigenous aerospace systems, intelligent analytics, and sustainable infrastructure to deliver real time visibility, safer operations, and data driven decisions. Transforming mining, corridors, urban development, utilities, water conservation, and emergency response across India accelerating our journey toward a self reliant, technologically advanced nation
                </p>

                {/* List Items */}
                <ul className="mb-10 grid gap-4">
                  {aboutFeatures.map((text, index) => {
                    const isChecked = index <= activeIndex;
                    return (
                      <li key={text} className="font-sans flex gap-4 items-start group/item">
                        <div
                          className={cn(
                            "font-sans mt-1.5 grid h-[1.125rem] w-[1.125rem] shrink-0 place-items-center rounded-sm border transition-all duration-500 shadow-sm",
                            isChecked
                              ? "bg-[#DA291C] border-[#DA291C] shadow-[#DA291C]/20 scale-110"
                              : "bg-white/10 border-white/20"
                          )}
                        >
                          <AnimatePresence>
                            {isChecked && (
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                              >
                                <Check className="h-3 w-3 text-white stroke-[3]" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <p
                          className={cn(
                            "font-sans text-[0.95rem] leading-relaxed transition-colors duration-500",
                            isChecked ? "text-white" : "text-white/70"
                          )}
                        >
                          {text}
                        </p>
                      </li>
                    );
                  })}
                </ul>

                {/* Buttons */}
                <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                  <ActionLink>Read more</ActionLink> {/** This button is just for show, it will redirect to the about page */}
                  <ActionLink 
                    href="/LiCopter_Brochure_V2.0.pdf" 
                    download="LiCopter_Brochure.pdf"
                    icon={Download}
                  >
                    Download Brochures
                  </ActionLink>
                </div>
              </div>

              {/* 3D Logo Section */}
              <div className="lg:col-span-2 flex justify-center lg:justify-end">
                <Logo3D />
              </div>
            </div>
          </div>

        </motion.div>
      </Container>
    </Section>
  );
}
