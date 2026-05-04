import { Flame } from "lucide-react";
import Section from "../common/Section";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const PAYLOADS = [
  {
    title: "LiDAR",
    desc: "At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently.",
    img: "/lidarimg.jpg",
    imgLeft: true,
  },
  {
    title: "OBLIQUE",
    desc: "At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently.",
    img: "/oblique.jpg",
    imgLeft: false,
  },
  {
    title: "RGB-61MP CAMERA",
    desc: "At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently.",
    img: "/rgb61mp.jpg",
    imgLeft: true,
  },
];

export default function ProductPayloads() {
  return (
    <Section id="payloads">
      <Container>
        <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#121212]/90 px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-white/[0.12] hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
          {/* Subtle Atmospheric Background Glow */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-[300px] w-[300px] rounded-full bg-[#DA291C] opacity-5 mix-blend-screen blur-[80px] transition-opacity duration-700 group-hover:opacity-10" />

          <div className="relative z-10">
            <SectionHeading
              badgeIcon={Flame}
              badgeText="PAYLOAD SPECS"
              title={<>Powering Missions with Payloads<br /><span className="font-sans text-brand">Designed for Precision.</span></>}
              description="We fuse advanced drone hardware with proprietary AI analytics to give manufacturer and facility operators real-time visibility."
            />

            <div className="space-y-24 mt-12">
              {PAYLOADS.map((item) => (
                <div key={item.title} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                  {/* Image Block */}
                  <div className={`relative ${!item.imgLeft ? "md:order-2" : ""}`}>
                    <div className={`absolute top-0 bottom-0 w-3 bg-brand ${item.imgLeft ? "left-0" : "right-0"} z-10 rounded-sm`} />
                    <div className="w-full aspect-[2/1] rounded-xl overflow-hidden shadow-2xl">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Text Block */}
                  <div className={!item.imgLeft ? "md:order-1" : ""}>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-300 font-medium leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
