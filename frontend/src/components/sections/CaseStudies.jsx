import { Grid, ArrowRight, ChevronRight, Flame, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { caseStudies } from "../../data/siteContent";
import Button from "../common/Button";
import Container from "../common/Container";
import Section from "../common/Section";
import Tag from "../common/Tag";

export default function CaseStudies({ staggerContainer, staggerItem }) {
  return (
    <Section variant="default" className="bg-[#1B1A1A]">
      <Container>
        <div className="mb-12 flex flex-col items-start gap-8">
          {/* Custom Header Badge */}
          <div className="mb-10 flex justify-start">
            <div className="inline-flex items-center gap-3 rounded-lg bg-white p-1 pr-5 shadow-xl transition-transform hover:scale-105">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E33B26] shadow-sm">
                <Flame className="size-5 fill-white text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[0.7rem] font-black uppercase tracking-[0.15em] text-black pt-0.5">
                Recent Articles
              </span>
            </div>
          </div>

          <div className="max-w-10xl space-y-6">
            <h2 className="text-title-1 text-white">
              Transforming Industries Through Intelligent Innovation
            </h2>
            <p className="text-body-lg text-white/70 max-w-10xl">
              At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter.
              We fuse advanced drone hardware with proprietary AI analytics to give manufacturer and facility operators
            </p>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-70px" }}
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-16"
        >
          {caseStudies.map((item, idx) => (
            <motion.article
              key={idx}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative h-[520px] rounded-[3.5rem] border-8 border-white/70 bg-white/5 shadow-2xl transition-all duration-300 hover:border-white/30"
            >
              {/* Image gets its own overflow-hidden so the zoom effect still works */}
              <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                <img src={item.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />

                {/* Gradient Overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Text Content Overlay (Inspired by Image 1) */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/50">
                    {item.meta}
                  </p>
                  <h3 className="mb-2 text-2xl font-bold leading-tight text-white max-w-[90%]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-white/70 max-w-[85%]">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Arrow button — lives outside overflow-hidden so it's never clipped */}
              <div className="absolute -bottom-5 -right-3 z-10">
                <div className="grid size-20 place-items-center rounded-full border-[8px] border-[#1B1A1A] bg-[#2C2B2B] text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <ChevronRight className="size-6 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-6 bg-[#2A2A2A] hover:bg-[#333] transition-all px-4 py-2 rounded-lg border border-white/10 group">
            <span className="text-white font-bold text-lg">View More</span>
            <div className="bg-[#E23F2E] p-2.5 rounded-lg flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </Container>
    </Section>
  );
}

