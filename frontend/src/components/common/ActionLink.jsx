import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/cn";

export default function ActionLink({ children, href, className, iconClassName, ...props }) {
  const Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      className={cn(
        "group/btn flex w-max items-center gap-4 rounded-xl border border-white/10 bg-white/5 py-1.5 pl-6 pr-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10",
        className
      )}
      {...props}
    >
      <span className="text-sm font-semibold tracking-wide text-white/90">{children}</span>
      <div 
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-lg shadow-[0_2px_10px_rgba(218,41,28,0.4)] transition-transform duration-300 group-hover/btn:scale-110", 
          iconClassName || "bg-gradient-to-br from-[#DA291C] to-[#8f1208]"
        )}
      >
        <ArrowUpRight className="size-4 text-white" strokeWidth={2.5} />
      </div>
    </Component>
  );
}
