import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";
import { cn } from "../../utils/cn";

export default function ExpertiseAnalysis({ data }) {
  return (
    <Section className="relative" id="expertise-analysis">
      <Container>
        <div className="bg-[#151515]/90 rounded-xl border border-white/[0.06] p-10 sm:p-16 shadow-[0_48px_96px_rgba(0,0,0,0.5)]">
          <div className="mb-16">
            <div className="mb-6 flex justify-start">
              <SectionBadge icon={Flame} text={data.badge} iconClassName="bg-brand text-white" />
            </div>
            <h2 className="text-title-1 text-white mb-4 uppercase">
              {data.title}
            </h2>
            <p className="font-sans text-body-lg text-white/70 font-medium">
              {data.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12 w-full max-w-5xl mx-auto">
            {data.stats.map((stat, index) => {
              const isHighlighted = stat.highlight;

              return (
                <div key={stat.id} className="flex items-center w-full md:w-auto flex-1 justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={cn(
                      "flex flex-col items-center justify-center rounded-xl w-full max-w-[280px] aspect-[4/3] transition-transform duration-500 hover:scale-105",
                      isHighlighted
                        ? "bg-brand shadow-[0_16px_40px_rgba(218,41,28,0.4)]"
                        : "bg-[#1A1A1A] border border-white/5 shadow-inner"
                    )}
                  >
                    <h3 className="font-display font-black text-5xl md:text-6xl text-white mb-4 tracking-tight">
                      {stat.value}
                    </h3>
                    <p className="font-sans text-sm md:text-base font-medium text-white/80">
                      {stat.label}
                    </p>
                  </motion.div>

                  {/* Vertical Divider (Hidden on Mobile, skipped for last item) */}
                  {index < data.stats.length - 1 && (
                    <div className="hidden md:block w-px h-32 bg-white/10 ml-6 lg:ml-12" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
