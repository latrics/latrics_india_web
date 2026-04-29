import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";

export default function ExpertiseWhy({ data }) {
  return (
    <Section className="relative" id="expertise-why">
      <Container>
        <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0E0E0E]/95 px-8 py-10 sm:px-12 md:px-16 md:py-16 shadow-[0_48px_96px_rgba(0,0,0,0.7)]">
          {/* Subtle Square Grid Pattern */}
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

          <div className="relative z-10">
            <header className="mb-16">
              <div className="mb-6 flex justify-start">
                <SectionBadge icon={Flame} text={data.badge} iconClassName="bg-brand text-white" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                <h2 className="text-title-1 text-white">
                  {data.title}
                </h2>
                <p className="font-sans text-body-lg text-white/60 font-medium flex items-center">
                  {data.description}
                </p>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover="hovered"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  variants={{
                    hovered: {
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
                    }
                  }}
                  className="flex flex-col p-8 md:p-10 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-xl relative transition-colors duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-xl" />
                  
                  <div className="relative z-10">
                    <motion.div
                      variants={{ hovered: { scale: 1.1 } }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="relative shrink-0 size-12 rounded-xl flex items-center justify-center shadow-[0_8px_24px_rgba(218,41,28,0.3)] mb-8 bg-brand"
                    >
                      <Flame className="size-5 text-white fill-current" />
                    </motion.div>

                    <h3 className="font-display font-bold text-white text-2xl mb-4 leading-tight pr-4">
                      {card.title}
                    </h3>
                    
                    <p className="font-sans text-base text-white/50 leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
