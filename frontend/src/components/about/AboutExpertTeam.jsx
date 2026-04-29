import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionBadge from "../common/SectionBadge";

const TEAM = [
  { name: "Team Member", role: "Aerospace Engineer", img: "/drone_hero01.png" },
  { name: "Team Member", role: "AI Operations", img: "/drone_simulation00.png" },
  { name: "Team Member", role: "Robotics Lead", img: "/industry_energy00.png" },
  { name: "Team Member", role: "Client Success", img: "/industry_aerospace.png" }
];

/**
 * AboutExpertTeam Section
 * Showcases the key team members behind Latrics.
 */
export default function AboutExpertTeam() {
  return (
    <Section className="relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <SectionBadge icon={Users} text="Expert Team" iconClassName="bg-brand text-white" />
            <h2 className="mt-8 text-title-1 font-bold text-white leading-[1.1] tracking-tight">
              Driven by <br /> World-Class Minds.
            </h2>
          </div>
          <div className="group flex items-center gap-4 cursor-pointer">
            <span className="text-lg font-bold text-white/40 group-hover:text-white transition-colors uppercase tracking-widest italic">Join the mission</span>
            <div className="size-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-500">
              <ArrowRight className="size-6 text-white" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/[0.08] mb-8">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-tight uppercase italic">{member.name}</h3>
              <p className="text-label text-brand mt-2">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
