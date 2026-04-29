import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Plus, Minus } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import BackgroundGlow from "../common/BackgroundGlow";
import { expertisePageData } from "../../constants/siteContent";
import { cn } from "../../utils/cn";

/**
 * ExpertiseFAQ Section
 * Interactive accordion for common industrial inspection queries.
 */
export default function ExpertiseFAQ({ data }) {
  const content = data || expertisePageData?.faq;
  const [openId, setOpenId] = useState(null);

  if (!content) return null;

  return (
    <Section className="relative overflow-hidden" id="expertise-faq">
      {/* Background Decor */}
      <BackgroundGlow color="brand" className="top-1/2 left-0 -translate-y-1/2" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Header Info */}
          <div className="lg:col-span-5 sticky top-24">
            <SectionHeading
              badgeIcon={Flame}
              badgeText={content.badge}
              title={content.title}
              description={content.description}
              align="start"
              descriptionClassName="max-w-md text-white/50"
              titleClassName="leading-[1.1]"
              badgeProps={{ iconClassName: "bg-brand text-white" }}
            />
          </div>

          {/* Right Side: Accordion Questions */}
          <div className="lg:col-span-7 space-y-4">
            {content.questions?.map((item) => {
              const isOpen = openId === item.id;
              
              return (
                <div 
                  key={item.id}
                  className={cn(
                    "group rounded-xl border transition-all duration-500 overflow-hidden",
                    isOpen 
                      ? "bg-white/[0.04] border-white/20 shadow-2xl" 
                      : "bg-[#121212]/50 border-white/[0.08] hover:border-white/15 hover:bg-white/[0.02]"
                  )}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full p-8 md:p-10 flex items-center justify-between text-left gap-6"
                  >
                    <span className={cn(
                      "text-xl md:text-2xl font-bold transition-colors duration-300",
                      isOpen ? "text-white" : "text-white/60 group-hover:text-white"
                    )}>
                      {item.question}
                    </span>
                    
                    <div className={cn(
                      "size-12 rounded-xl flex items-center justify-center transition-all duration-500 border",
                      isOpen 
                        ? "bg-brand border-brand text-white rotate-180" 
                        : "bg-white/[0.05] border-white/10 text-white/40 group-hover:border-white/20"
                    )}>
                      {isOpen ? <Minus className="size-6" /> : <Plus className="size-6" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-8 pb-10 md:px-10 md:pb-12 border-t border-white/5 pt-8">
                          <p className="text-lg md:text-xl text-white/50 leading-relaxed font-medium">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </Section>
  );
}
