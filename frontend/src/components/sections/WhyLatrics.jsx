import { ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { whyCards } from "../../data/siteContent";
import Card from "../common/Card";
import Container from "../common/Container";
import Section from "../common/Section";

export default function WhyLatrics({ staggerContainer, staggerItem }) {
  return (
    <Section variant="elevate">
      <Container>
        <div className="mb-10 flex flex-col gap-5 md:mb-14 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl space-y-4 md:space-y-5">
            <div className="mb-4 flex justify-start">
              <div className="inline-flex items-center gap-3 rounded-lg bg-white p-1 pr-5 shadow-xl transition-transform hover:scale-105">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E33B26] shadow-sm">
                  <Zap className="size-5 fill-white text-white" strokeWidth={2.5} />
                </div>
                <span className="text-[0.7rem] font-black uppercase tracking-[0.15em] text-black pt-0.5">
                  Why Latrics
                </span>
              </div>
            </div>
            <h2 className="text-title-1 text-fg">Unmatched precision, unrivaled reliability</h2>
          </div>
          <p className="max-w-md text-body-lg text-fg-secondary lg:max-w-sm lg:text-right lg:leading-relaxed">
            Every deployment is built around dependable sensing, repeatable workflows, and operator confidence in the field.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3"
        >
          {whyCards.map((item) => (
            <motion.div key={item.title} variants={staggerItem} whileHover={{ y: -4 }}>
              <Card
                variant="elevated"
                className="h-full p-6 transition-[border-color,box-shadow] duration-200 hover:border-[var(--ui-border-brand)]"
              >
                <div className="mb-4 inline-grid size-12 place-items-center rounded-xl bg-gradient-to-b from-brand to-brand-deep shadow-brand">
                  <ShieldCheck className="size-6 text-white" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="font-display text-lg font-bold text-fg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-secondary sm:text-[0.9375rem]">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
