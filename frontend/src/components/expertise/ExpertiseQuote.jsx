import { ArrowDown, Flame } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";

export default function ExpertiseQuote() {
  return (
    <Section className="relative pb-24" id="expertise-quote">
      <Container>
        <div className="flex flex-col">
          {/* Custom White Badge */}
          <div className="mb-6 flex justify-start">
            <div className="inline-flex items-center gap-3 rounded-xl bg-white p-1.5 pr-5 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
              <div className="flex size-8 items-center justify-center rounded-lg bg-[#DA291C]">
                <Flame className="size-5 text-white fill-current" />
              </div>
              <span className="text-sm font-bold tracking-widest text-black uppercase">
                Service Quote
              </span>
            </div>
          </div>

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-xl bg-[#0A0A0A] border border-white/5 shadow-2xl flex flex-col min-h-[500px]">
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

            {/* Top Content Container */}
            <div className="relative z-10 p-10 md:p-14 lg:p-16 w-full flex flex-col gap-5 max-w-4xl">
              <h2 className="text-white font-display text-3xl md:text-[2.5rem] font-bold leading-[1.1]">
                LiDAR-Powered Survey & Intelligence Services
              </h2>
              <p className="text-[#A3A3A3] font-sans text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently.
              </p>

              {/* Dropdown Input */}
              <div className="relative w-full max-w-sm mt-4">
                <div className="flex items-center w-full bg-[#404040]/80 border border-white/10 rounded-xl overflow-hidden h-14 backdrop-blur-sm shadow-inner transition-colors hover:bg-[#404040]">
                  <span className="flex-1 px-5 text-white font-medium text-sm md:text-base">Type of Service Quotation</span>
                  <div className="h-[calc(100%-8px)] aspect-square bg-[#DA291C] flex items-center justify-center m-1 rounded-lg cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-md">
                    <ArrowDown className="text-white size-5" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>

            {/* Wireframe Terrain Background */}
            <div className="absolute bottom-0 left-0 right-0 h-[65%] lg:h-[75%] z-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
              <img
                src="/topographic_map.jpg"
                alt="Wireframe Terrain"
                className="w-full h-full object-cover object-top opacity-90"
              />
            </div>

            {/* CTA Button */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-full px-4 flex justify-center">
              <button className="bg-[#DA291C] hover:bg-[#ff4d3d] text-white font-bold py-4 px-12 rounded-xl shadow-[0_12px_32px_rgba(218,41,28,0.4)] transition-all active:scale-95 text-[15px] tracking-wide">
                Get a Quotation
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
