import { Grid, ArrowRight, ChevronRight, Flame, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { caseStudies } from "../../constants/siteContent";
import Button from "../common/Button";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Tag from "../common/Tag";
import SectionBadge from "../common/SectionBadge";
import ActionLink from "../common/ActionLink";

/**
 * CaseStudies Component
 * 
 * Logic & Workflow:
 * 1. Data Mapping: Iterates through the `caseStudies` array from `siteContent.js`.
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
export default function CaseStudies({ staggerContainer, staggerItem }) {
  // State to track the currently hovered index for the expansion effect
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <Section id="case-studies" variant="default">
      <Container>
        <div className="island-card">
          {/* Section header with localized badges/icons for brand consistency */}
          <SectionHeading
            badgeIcon={Flame}
            badgeText="Recent Articles"
            title="Transforming Industries Through Intelligent Innovation"
            description="At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter. We fuse advanced drone hardware with proprietary AI analytics to give manufacturer and facility operators real-time visibility, safer inspections, and data-driven decision-making at scale."
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
            {caseStudies.map((item, idx) => {
              const isActive = hoveredIdx === idx;

              return (
                <motion.article
                  key={idx}
                  variants={staggerItem}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  // Logic: flex property changes from 1 to 2.5 on hover for the expansion effect
                  className={`group relative overflow-visible rounded-lg border-4 lg:border-8 border-white/70 bg-white/5 shadow-2xl transition-all duration-[0.6s] ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-white/30 h-[372px] lg:h-full w-full lg:w-auto ${isActive ? "lg:flex-[2.5]" : "lg:flex-1"
                    }`}
                >
                  {/* Image Container with overflow-hidden for the inner zoom effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-xs">
                    {/* Zoom Effect: Scale 110 on group-hover */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* 
                    Glassmorphism Overlay:
                    - Fades in using opacity-100 on active state.
                    - backdrop-blur adds a premium feel to the text background.
                  */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${isActive ? "opacity-100 backdrop-blur-[2px]" : "lg:opacity-0 opacity-100"
                        }`}
                    />

                    {/* 
                    Text Content Overlay:
                    - Controlled by isActive state.
                    - delay-100 ensures the background starts fading before text appears for readability.
                  */}
                    <div
                      className={`absolute inset-0 p-8 pt-12 pr-12 flex flex-col justify-end transition-opacity duration-500 ${isActive ? "opacity-100 delay-100" : "lg:opacity-0 opacity-100"
                        }`}
                    >
                      <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/50">
                        {item.meta}
                      </p>
                      <h3 className="mb-2 text-2xl font-bold leading-tight text-white max-w-[90%]">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-white/70 max-w-[85%] line-clamp-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* 
                  Interactive Redirect Button:
                  - Custom styling to mimic a floating action button.
                  - Inverts colors on group hover (White bg, Black icon).
                */}
                  <a
                    href={item.href}
                    className="absolute -bottom-4 -right-4 z-20 transition-transform duration-300 hover:scale-110"
                    aria-label={`View details for ${item.title}`}
                  >
                    <div className="grid size-14 place-items-center rounded-xl border-8 border-[#121212] bg-[#2C2B2B] text-white shadow-2xl transition-all duration-300 group-hover:bg-[#DA291C] group-hover:border-[#DA291C] group-hover:shadow-[0_0_30px_rgba(218,41,28,0.4)]">
                      {isActive ? (
                        <ArrowUpRight className="size-5" />
                      ) : (
                        <ChevronRight className="size-5" />
                      )}
                    </div>
                  </a>
                </motion.article>
              );
            })}
          </motion.div>

          {/* CTA to link to a dedicated case studies or articles page */}
          <div className="flex justify-center">
            <ActionLink href="#">View More</ActionLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}


