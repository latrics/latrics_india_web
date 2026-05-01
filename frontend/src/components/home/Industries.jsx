import { Flame, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { industryCopy, industryTabs } from "../../constants/siteContent";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Tag from "../common/Tag";
import SectionBadge from "../common/SectionBadge";
import Button from "../common/Button";
import { cn } from "../../utils/cn";

export default function Industries({ activeTab, setActiveTab, industryImages }) {
  return (
    <Section id="industries">
      <Container>
        <div className="island-card">
          <SectionHeading
            badgeIcon={Flame}
            badgeText="Industries"
            badgeAlign="start"
            title="Solutions tailored for every frontier"
            description="At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter."
            align="center"
          />


          <div
            className="mx-auto mb-10 flex max-w-fit flex-wrap justify-center gap-2 rounded-lg border border-white/[0.08] bg-[#1a1a1a]/50 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            role="tablist"
          >
            {industryTabs.map((tab) => (
              <Button
                key={tab}
                variant="ghost"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative overflow-hidden rounded-lg px-5 py-2.5 text-sm font-bold transition-all duration-300 min-h-0",
                  activeTab === tab
                    ? "text-white shadow-[0_4px_16px_rgba(218,41,28,0.3)] bg-brand"
                    : "text-white/50 border-transparent hover:bg-white/5 hover:text-white/90"
                )}
              >
                <span className="font-sans relative z-10">{tab}</span>
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeIndustry"
                    className="absolute inset-0 z-0 bg-gradient-to-br from-[#DA291C] to-[#8f1208]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Button>
            ))}
          </div>

          <div className="group relative aspect-[16/11] min-h-[360px] overflow-hidden rounded-xl border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.6)] sm:min-h-[440px] lg:aspect-auto lg:h-[600px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                src={industryImages[activeTab]}
                alt={activeTab}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

            {/* Top Right Decorative Arrow Button (Replica) */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
              <div className="flex h-10 w-10 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-105 hover:bg-white/10 group/btn cursor-pointer">
                <ArrowUpRight className="h-5 w-5 sm:h-8 sm:w-8 text-white transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" strokeWidth={1.5} />
              </div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:p-10 lg:p-14">
              <div className="max-w-xl text-left">
                <span className="mb-4 inline-block rounded-full border border-[#DA291C]/30 bg-[#DA291C]/10 px-3 py-1 font-bold tracking-widest text-[#DA291C] text-[0.625rem] uppercase backdrop-blur-md">
                  Active sector
                </span>
                <h3 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-lg">{industryCopy[activeTab].title}</h3>
                <p className="font-sans mt-4 text-base sm:text-[1.1rem] leading-[1.6] text-white/70 drop-shadow-md">{industryCopy[activeTab].description}</p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {industryCopy[activeTab].tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.8)] backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
