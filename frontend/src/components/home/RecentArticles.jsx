import { Grid, ArrowRight, ChevronRight, FileText, ArrowUpRight, Lock, Unlock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { recentArticles } from "../../constants/siteContent";
import Button from "../common/Button";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Tag from "../common/Tag";
import SectionBadge from "../common/SectionBadge";
import ActionLink from "../common/ActionLink";
import { cn } from "../../utils/cn";

/**
 * RecentArticles Component
 * 
 * Logic & Workflow:
 * 1. Data Mapping: Iterates through the `recentArticles` array from `siteContent.js`.
 * 2. Interaction State: Uses `hoveredIdx` state to track which card is currently being hovered.
 * 3. Dynamic Layout (AER - Automated Expansion/Reduction):
 *    - On desktop (`lg`), the hovered card expands (`flex-[2.5]`) while siblings shrink (`flex-1`).
 *    - This creates a sophisticated, interactive gallery feel without complex JS calculations.
 * 4. Visual Layering:
 *    - Base: Background image with hover scale effect.
 *    - Overlay 1: Dark gradient & glassmorphism backdrop (active on hover).
 *    - Overlay 2: Text content (active on hover, with a slight delay for smooth entry).
 * 5. Animations: Uses Framer Motion for stagger entry and Tailwind transitions for layout shifts.
 * 
 * @param {Object} props
 * @param {Object} props.staggerContainer - Framer motion variants for the parent container.
 * @param {Object} props.staggerItem - Framer motion variants for individual cards.
 */
export default function RecentArticles({ staggerContainer, staggerItem }) {
  // State to track the currently hovered index for the expansion effect
  const [hoveredIdx, setHoveredIdx] = useState(null);
  // State to track the currently locked index (clicked card)
  const [lockedIdx, setLockedIdx] = useState(null);

  const handleCardClick = (idx) => {
    setLockedIdx(lockedIdx === idx ? null : idx);
  };

  return (
    <Section id="recent-articles" variant="default">
      <Container>
        <div className="island-card">
          {/* Section header with localized badges/icons for brand consistency */}
          <SectionHeading
            badgeIcon={FileText}
            badgeText="Recent Articles"
            title="Transforming Industries Through Intelligent Innovation"
            description="At Latrics, we build precision driven LiDAR and aerospace solutions that help industries operate smarter. We fuse advanced drone hardware with proprietary AI analytics to give manufacturer and facility operators real time visibility, safer inspections, and data driven decision making at scale"
            titleClassName="max-w-none"
            descriptionClassName="max-w-none"
          />

          {/* 
          Grid Container:
          - Uses flex-col for mobile and flex-row for desktop to enable the expansion effect.
          - Fixed height on desktop ensures cards remain consistent during expansion.
        */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-70px" }}
            className="flex flex-col lg:flex-row gap-6 mb-16 h-auto lg:h-[372px]"
          >
            {recentArticles.map((item, idx) => {
              const isActive = hoveredIdx === idx;

              return (
                <motion.article
                  key={idx}
                  variants={staggerItem}
                  onClick={() => handleCardClick(idx)}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  // Logic: flex property changes from 1 to 2.5 on hover or lock for the expansion effect
                  // If something is locked, it takes priority. Otherwise, use hover.
                  className={`group relative overflow-visible rounded-lg border-2 lg:border-[2px] border-white/40 bg-white/5 shadow-2xl transition-all duration-[0.6s] ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-white/20 h-[280px] sm:h-[320px] lg:h-full w-full lg:w-auto ${lockedIdx !== null
                    ? (lockedIdx === idx ? "lg:flex-[2.5]" : "lg:flex-1")
                    : (hoveredIdx === idx ? "lg:flex-[2.5]" : "lg:flex-1")
                    }`}
                >
                  {/* Image Container with overflow-hidden for the inner zoom effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-lg lg:rounded-lg" style={{ transform: "translateZ(0)", WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}>
                    {/* Zoom & Brightness/Contrast enhancements on hover or active (locked) state */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className={cn(
                        "h-full w-full object-cover transition-all duration-500",
                        (lockedIdx === idx || (lockedIdx === null && hoveredIdx === idx))
                          ? "scale-110 brightness-110 contrast-105"
                          : "scale-100 brightness-90"
                      )}
                    />

                    {/* 
                    Glassmorphism Overlay:
                    - Fades in using opacity-100 on active state.
                    - We keep it clear (no backdrop blur) on hover/press so details stand out.
                  */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 opacity-100",
                        (lockedIdx === idx || (lockedIdx === null && hoveredIdx === idx))
                          ? "backdrop-blur-none from-black/80 via-black/20"
                          : "backdrop-blur-[1px]"
                      )}
                    />

                    {/* 
                    Text Content Overlay:
                    - Visible at all times, with enhanced sizing on hover.
                  */}
                    <div
                      className="absolute inset-0 p-6 lg:p-8 pt-12 pr-12 flex flex-col justify-end transition-all duration-500 opacity-100"
                    >
                      <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/50">
                        {item.meta}
                      </p>
                      <p className="mb-2 text-lg lg:text-lg lg:group-hover:text-lg font-bold leading-tight text-white max-w-[90%] transition-all duration-300">
                        {item.title}
                      </p>
                      <p className="text-xs font-medium leading-relaxed text-white/70 max-w-[85%] line-clamp-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* 
                  Interactive Redirect Button:
                  - Custom styling to mimic a floating action button.
                  - Inverts colors on group hover (White bg, Black icon).
                */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(idx);
                    }}
                    className="absolute -bottom-2 -right-2 z-20 transition-transform duration-300 hover:scale-110"
                    aria-label={lockedIdx === idx ? "Unlock card" : "Lock card"}
                  >
                    <div className={cn(
                      "grid size-18 place-items-center rounded-[15px] bg-black/50 backdrop-blur-sm shadow-2xl transition-all duration-300",
                      lockedIdx === idx
                        ? "bg-[#DA291C] border-[#DA291C] shadow-[0_0_30px_rgba(218,41,28,0.4)]"
                        : "bg-[#2C2B2B] group-hover:bg-[#DA291C] group-hover:border-[#DA291C] group-hover:shadow-[0_0_30_rgba(218,41,28,0.4)]"
                    )}>
                      {lockedIdx === idx ? (
                        <Lock className="size-8" />
                      ) : (
                        (lockedIdx === null && hoveredIdx === idx) ? (
                          <ArrowUpRight className="size-8" />
                        ) : (
                          <ChevronRight className="size-8" />
                        )
                      )}
                    </div>
                  </button>
                </motion.article>
              );
            })}
          </motion.div>

          {/* CTA to link to a dedicated articles page */}
          <div className="flex justify-center">
            <ActionLink href="">View More</ActionLink>  {/*TODO: Add link to articles page*/}
          </div>
        </div>
      </Container>
    </Section>
  );
}
