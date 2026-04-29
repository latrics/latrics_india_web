import { motion } from "framer-motion";
import { Flame, Target, Zap, Users, ShieldCheck } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";
import { expertisePageData } from "../../constants/siteContent";

const iconMap = {
  Target,
  Zap,
  Users,
  ShieldCheck
};

/**
 * ExpertiseChooseUs Section
 * High-fidelity representation of what sets Latrics apart.
 */
export default function ExpertiseChooseUs({ data }) {
  const content = data || expertisePageData?.chooseUs;

  if (!content) return null;

  return (
    <Section className="relative" id="expertise-choose-us">
      <Container>
        <div className="bg-[#151515]/90 rounded-xl border border-white/[0.08] p-10 sm:p-12 md:p-16 shadow-[0_48px_96px_rgba(0,0,0,0.5)] overflow-hidden relative group">
          {/* Subtle Glow Backdrop */}
          <div className="absolute top-0 right-0 -z-10 size-[400px] bg-brand/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="flex flex-col items-start text-left mb-12 md:mb-16">
            <div className="mb-6">
              <SectionBadge icon={Flame} text={content.badge} iconClassName="bg-brand text-white" />
            </div>
            <h2 className="text-title-1 text-white w-full">
              {content.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {content.items?.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Target;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-6 group/item"
                >
                  <div className="size-16 md:size-24 bg-white rounded-xl flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover/item:scale-110 group-hover/item:-rotate-3">
                    <IconComponent className="size-10 md:size-14 text-black stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight text-center">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
