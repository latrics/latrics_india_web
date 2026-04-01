import { marqueePartners } from "../../data/siteContent";

// Items displayed in the marquee strip — mirroring "Company" labels from the reference image
const items = marqueePartners;

export default function BannerMarquee() {
  return (
    <div
      style={{ backgroundColor: "#1a1b1f" }}
      className="relative overflow-hidden border-y border-border-muted py-3.5 md:py-4"
    >
      <div className="animate-marquee flex w-max items-center gap-12 md:gap-20 px-6 md:px-10">
        {[0, 1].map((dup) =>
          items.map((name, index) => (
            <div
              key={`${dup}-${name}-${index}`}
              className="flex items-center gap-12 md:gap-20 whitespace-nowrap"
            >
              <span
                className="text-[0.9375rem] font-medium tracking-[0.04em] text-[#d0d2d8] uppercase"
              >
                {name}
              </span>
              {/* Red diamond separator with uniform rotation */}
              <span
                aria-hidden
                className="animate-spin-slow text-brand text-xl md:text-2xl flex-shrink-0"
              >
                ◆
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
