import { cn } from "../../lib/cn";

export default function SectionBadge({ icon: Icon, text, className, iconClassName = "bg-[#E33B26]" }) {
  return (
    <div className={cn("inline-flex items-center gap-3 rounded-lg bg-white p-1 pr-5 shadow-xl transition-transform hover:scale-105", className)}>
      <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg shadow-sm", iconClassName)}>
        {Icon && <Icon className="size-5 fill-white text-white" strokeWidth={2.5} />}
      </div>
      <span className="text-[0.70rem] font-black uppercase tracking-[0.15em] text-black pt-0.5">
        {text}
      </span>
    </div>
  );
}
