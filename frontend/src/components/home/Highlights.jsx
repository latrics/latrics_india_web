import { Sparkles, ArrowUp, ArrowDown, Download } from "lucide-react";
import { cn } from "../../utils/cn";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { highlightItems } from "../../constants/siteContent";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";
import ActionLink from "../common/ActionLink";

function HighlightCard({ item }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const MAX_DESC_LENGTH = isMobile ? 45 : 150;
  const isLongDesc = item.desc.length > MAX_DESC_LENGTH;
  const isCurrentlyExpanded = isExpanded || (!isMobile && isHovered && isLongDesc);

  return (
    <motion.article
      ref={cardRef}
      layout
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ height: "auto" }}
      animate={{
        height: "auto",
        zIndex: isHovered ? 50 : 1,
      }}
      whileHover={{
        scale: 1.02,
        backgroundColor: "rgba(255, 255, 255, 0.07)",
        borderColor: "rgba(218, 41, 28, 0.5)",
      }}
      transition={{
        layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.4, ease: "easeOut" },
        backgroundColor: { duration: 0.3 },
        borderColor: { duration: 0.3 }
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "group relative grid w-full gap-2 items-start overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3 sm:px-5 sm:py-5 shadow-xl sm:grid-cols-[130px_1fr] sm:gap-6 flex-shrink-0",
        isHovered && "ring-1 ring-[#DA291C]/50 shadow-2xl"
      )}
    >
      <div className="relative h-30 w-full overflow-hidden rounded-xl hidden sm:block" style={{ transform: "translateZ(20px)" }}>
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

      <div className="flex flex-col justify-start gap-1 sm:gap-2 pr-2 pb-1 sm:pb-2 pt-0" style={{ transform: "translateZ(30px)" }}>
        <span className="text-[0.75rem] font-bold uppercase tracking-wider text-white/50">
          {item.date}
        </span>
        <h2 className="font-display text-lg font-black leading-tight text-[#FFF5E0] md:text-lg">
          {item.title}
        </h2>
        <p className="text-[1rem] font-regular leading-tight text-white/80 md:text-[0.75rem]">
          {!isCurrentlyExpanded && isLongDesc ? (
            <>
              {item.desc.substring(0, MAX_DESC_LENGTH)}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(true);
                }}
                className="text-[#DA291C] font-semibold ml-1 cursor-pointer hover:underline whitespace-nowrap"
              >read more..</span>
            </>
          ) : (
            <>
              {item.desc}
              {isMobile && isExpanded && isLongDesc && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                  className="text-[#DA291C] font-semibold ml-1 cursor-pointer hover:underline whitespace-nowrap"
                >
                  show less
                </span>
              )}
            </>
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
    <Section id="highlights" className="relative">
      <Container>
        {/* Main 'Box' Container */}
        <div className="island-card">
          {/* Subtle Ambient Glow inside the box */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-glow blur-[100px] opacity-20" />

          <div className="grid items-stretch gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            {/* Left Column: Text & Navigation Controls */}
            <div className="flex flex-col">
              <SectionHeading
                badgeIcon={Sparkles}
                badgeText="Highlights"
                title="Pioneering Indigenous Technology"
                description="From DGCA certification to PM showcase - see how India's first 
indigenous LiDAR platform is transforming industries."
                className="mb-0"
              />

              <div className="hidden lg:flex items-center gap-4 mt-auto">
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
              className="flex flex-col gap-5 md:h-[570px] md:overflow-y-auto overflow-x-hidden no-scrollbar p-4 -m-4 scroll-smooth"
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



