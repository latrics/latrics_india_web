import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Download, ArrowUpRight } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";
import ActionLink from "../common/ActionLink";
import Card from "../common/Card";
import BackgroundGlow from "../common/BackgroundGlow";
import FeatureListItem from "../common/FeatureListItem";
import { expertisePageData } from "../../constants/siteContent";
import Button from "../common/Button";
import { cn } from "../../utils/cn";

/**
 * ExpertiseDeliverables Section
 * Redesigned to match tabbed wireframe with left-side arch-image and list.
 */
export default function ExpertiseDeliverables({ data }) {
  const content = data || expertisePageData?.deliverables;
  const [activeTabId, setActiveTabId] = useState(content?.tabs[0]?.id || "lidar");

  if (!content) return null;

  const activeTab = content.tabs.find(t => t.id === activeTabId);

  return (
    <Section className="relative overflow-hidden" id="expertise-deliverables">
      {/* Background Decor */}
      <BackgroundGlow position="top-right" color="brand" className="top-0 right-0 size-[600px]" />

      <Container>
        <Card variant="dark-glass" className="overflow-hidden">
          <div className="p-8 sm:p-12 md:p-16">

            {/* Header Area */}
            <div className="mb-12 text-center lg:text-left">
              <div className="mb-8 flex justify-center lg:justify-start">
                <SectionBadge icon={Flame} text={content.badge} iconClassName="bg-brand text-white" />
              </div>
              <h2 className="text-title-1 text-white max-w-4xl">
                {content.title}
              </h2>
            </div>

            {/* Tab Navigation - Folder Style with Gaps */}
            <div className="flex items-end gap-6 mb-16 border-b-2 border-white/30 overflow-x-auto no-scrollbar">
              {content.tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant="tab"
                  onClick={() => setActiveTabId(tab.id)}
                  className={cn(
                    "relative px-10 py-5 text-lg font-bold min-h-0",
                    activeTabId === tab.id
                      ? "bg-brand text-white translate-y-[2px] z-10 shadow-[0_-8px_24px_rgba(218,41,28,0.2)] border-transparent"
                      : "bg-[#1A1A1A] text-white/30 border border-white/5 border-b-0 hover:text-white/60 hover:bg-[#222]"
                  )}
                >
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Content Area - Aligned to match height */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">

              {/* Left: Rectangle Image Box - Spans content height */}
              <div className="relative order-2 lg:order-1 flex flex-col h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTabId}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="relative flex-1 min-h-[400px] lg:min-h-0"
                  >
                    <Card variant="dark-solid" className="w-full h-full overflow-hidden p-0">
                      <img
                        src={activeTab.image}
                        alt={activeTab.label}
                        className="w-full h-full object-cover"
                      />
                      {/* Atmospheric Glow inside image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </Card>
                  </motion.div>
                </AnimatePresence>

                {/* Decorative Elements */}
                <BackgroundGlow color="brand" opacity="20" blur="60" className="-left-8 -bottom-8 size-32" />
              </div>

              {/* Right: List & Buttons */}
              <div className="flex flex-col h-full order-1 lg:order-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTabId}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col"
                  >
                    {/* List Section */}
                    <div className="space-y-4 md:space-y-6">
                      {activeTab.items.map((item, idx) => (
                        <FeatureListItem key={idx} text={item} />
                      ))}
                    </div>

                    {/* CTAs - Anchored with consistent gap */}
                    <div className="mt-auto pt-12 flex flex-wrap gap-6 justify-center lg:justify-start items-end">
                      <ActionLink href="#download" icon={Download}>
                        Download Brochure
                      </ActionLink>

                      <ActionLink href="#discover">
                        Discover more
                      </ActionLink>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>
        </Card>
      </Container>
    </Section>
  );
}
