import { Flame, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { aboutFeatures } from "../../constants/siteContent";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import ActionLink from "../common/ActionLink";

export default function About({ fadeInUp }) {
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
              badgeIcon={Flame}
              badgeText="About Latrics"
              title={
                <>The Intelligence Layer for<br className="hidden sm:block" /> Industrial Operations</>
              }
              description={
                <>We fuse advanced drone hardware with proprietary AI analytics to give
                  manufacturer and facility operators real-time visibility, safer inspections, and
                  data-driven decision-making at scale.</>
              }
              className="max-w-4xl"
            />

            {/* List Items */}
            <ul className="mb-10 grid gap-4">
              {aboutFeatures.map((text) => (
                <li key={text} className="font-sans flex gap-4 items-start group/item">
                  <span className="font-sans mt-1.5 grid h-[1.125rem] w-[1.125rem] shrink-0 place-items-center rounded-sm bg-white/10 border border-white/20 shadow-sm transition-colors duration-300 group-hover/item:border-[#DA291C]/50 group-hover/item:bg-[#DA291C]/20" />
                  <p className="font-sans text-[0.95rem] leading-relaxed text-white/70">{text}</p>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <ActionLink>Read more</ActionLink>
              <ActionLink>Read more</ActionLink>
            </div>
          </div>

        </motion.div>
      </Container>
    </Section>
  );
}
