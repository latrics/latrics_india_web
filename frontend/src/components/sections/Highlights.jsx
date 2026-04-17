import { Flame, ArrowUp, ArrowDown } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { highlightItems } from "../../data/siteContent";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

function HighlightCard({ item }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsExpanded(false); // Shrink back when cursor leaves
    x.set(0);
    y.set(0);
  };

  const MAX_DESC_LENGTH = 150; // Approx 2 lines of text at the current font size
  const isLongDesc = item.desc.length > MAX_DESC_LENGTH;
  const isCurrentlyExpanded = isExpanded || (isHovered && isLongDesc);

  return (
    <motion.article
      ref={cardRef}
      layout
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ height: "160px" }}
      animate={{
        height: isCurrentlyExpanded ? "auto" : "160px",
        zIndex: isHovered ? 50 : 1,
      }}
      transition={{
        layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative grid w-full gap-4 items-start overflow-hidden rounded-[2.25rem] border-transparent bg-[#1B1A1A]/80 px-5 py-5 shadow-xl transition-all duration-500 ease-out sm:grid-cols-[130px_1fr] sm:gap-6 flex-shrink-0 ${isHovered ? 'ring-1 ring-[#DA291C]/50 shadow-2xl' : ''}`}
    >
      <div className="relative h-30 w-full overflow-hidden rounded-2xl" style={{ transform: "translateZ(20px)" }}>
        <motion.img
          src={item.image}
          alt=""
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.6 }}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-start gap-2 pr-2 pb-2 pt-0" style={{ transform: "translateZ(30px)" }}>
        <span className="text-[0.75rem] font-bold uppercase tracking-wider text-white/50">
          {item.date}
        </span>
        <h3 className="font-display text-lg font-black leading-tight text-[#FFF5E0] md:text-xl">
          {item.title}
        </h3>
        <p className="text-[1rem] font-regular leading-tight text-white/80 md:text-[1rem]">
          {!isCurrentlyExpanded && isLongDesc ? (
            <>
              {item.desc.substring(0, MAX_DESC_LENGTH)}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(true);
                }}
                className="text-[#DA291C] font-semibold ml-1 cursor-pointer hover:underline"
              >...read more</span>
            </>
          ) : (
            item.desc
          )}
        </p>
      </div>
    </motion.article>
  );
}

export default function Highlights() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollTop } = scrollContainerRef.current;
      const scrollAmount = 180; // Height of one card + gap (160 + 20)
      scrollContainerRef.current.scrollTo({
        top: direction === "up" ? scrollTop - scrollAmount : scrollTop + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <Section id="highlights" className="bg-[#1B1A1A] relative">
      <Container className="mx-auto max-w-[1400px] px-2">
        {/* Main 'Box' Container */}
        <div className="relative overflow-hidden rounded-[3.5rem] border border-white/40 bg-[#2C2B2B]/60 px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
          {/* Subtle Ambient Glow inside the box */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-glow blur-[100px] opacity-20" />

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            {/* Left Column: Text & Navigation Controls */}
            <div className="flex flex-col gap-6">
              <SectionHeading
                badgeIcon={Flame}
                badgeText="Highlights"
                title="Transforming Industries Through Intelligent Innovation"
                description="At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter."
                className="mb-2"
              />

              <div className="flex gap-4">
                <button
                  onClick={() => scroll("up")}
                  aria-label="Scroll up"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-white/15 hover:border-white/30 group active:scale-95"
                >
                  <ArrowUp size={22} className="transition-transform group-hover:-translate-y-0.5" />
                </button>
                <button
                  onClick={() => scroll("down")}
                  aria-label="Scroll down"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-white/15 hover:border-white/30 group active:scale-95"
                >
                  <ArrowDown size={22} className="transition-transform group-hover:translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Discrete 3-Card Scroll Container */}
            <motion.div
              layout
              ref={scrollContainerRef}
              className="flex flex-col gap-5 md:h-[520px] md:overflow-y-auto overflow-x-hidden no-scrollbar pr-1 scroll-smooth"
            >
              {highlightItems.map((item, index) => (
                <HighlightCard key={index} item={item} />
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}



