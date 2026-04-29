import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";
import { cn } from "../../utils/cn";

export default function ExpertiseServices({ data }) {
  const [activeTab, setActiveTab] = useState(data.tabs[0].id);

  return (
    <Section className="relative" id="expertise-services">
      <Container>
        <div className="bg-[#151515]/90 rounded-xl border border-white/[0.06] p-10 sm:p-16 shadow-[0_48px_96px_rgba(0,0,0,0.5)]">
          <div className="mb-16">
            <div className="mb-6 flex justify-start">
              <SectionBadge icon={Flame} text={data.badge} iconClassName="bg-brand text-white" />
            </div>
            <h2 className="text-title-1 text-white mb-6">
              {data.title}
            </h2>
            <p className="font-sans text-body-lg text-white/60 font-medium max-w-4xl">
              {data.description}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-white/10 mb-12 overflow-x-auto no-scrollbar">
            {data.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative pb-4 px-6 md:px-10 text-lg font-bold transition-colors whitespace-nowrap",
                  activeTab === tab.id ? "text-white" : "text-white/40 hover:text-white/80"
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeServiceTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.tabs.map((tab, index) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1A1A1A] rounded-xl p-4 h-[350px]"
              >
                <div className="w-full h-[65%] rounded-xl overflow-hidden relative">
                  <img
                    src={tab.image}
                    alt={tab.label}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="mt-4 px-2">
                  <h3 className="text-white font-bold text-lg">{tab.label}</h3>
                  <p className="text-white/40 text-xs mt-1 uppercase tracking-widest font-bold">Industrial Solutions</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
