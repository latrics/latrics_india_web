import { cn } from "../../utils/cn";
import SectionBadge from "./SectionBadge";

/**
 * SectionBadge + title + optional description — consistent hierarchy.
 */
/**
 * Component: SectionHeading
 * 
 * Standard header block used at the top of every major page section.
 * Maintains consistent vertical rhythm and typography hierarchy.
 *
 * @param {LucideIcon} badgeIcon - Icon component for the top badge
 * @param {string} badgeText - Label text for the badge
 * @param {"center" | "start"} badgeAlign - Optional override for badge positioning
 * @param {string} title - Main H2 header text
 * @param {string} description - Optional P text for sub-description
 * @param {"center" | "start"} align - Global horizontal alignment (defaults to start)
 */
export default function SectionHeading({
  badgeIcon,
  badgeText,
  badgeAlign,
  badgeProps,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  align = "start",
  children
}) {
  const effectiveBadgeAlign = badgeAlign || align;

  return (
    <header
      className={cn(
        "mb-10 w-full md:mb-12 flex flex-col items-center text-center",
        align === "center" && "md:items-center md:text-center",
        align === "start" && "md:items-start md:text-left",
        className
      )}
    >
      {badgeText && (
        <div className={cn(
          "mb-8 w-full flex",
          effectiveBadgeAlign === "center" ? "justify-center" : "justify-start"
        )}>
          <SectionBadge icon={badgeIcon} text={badgeText} {...badgeProps} />
        </div>
      )}
      <h2 className={cn(
        "text-title-1 text-white text-center md:text-start",
        align === "center" && "md:text-center",
        !titleClassName?.includes("max-w-") && (align === "center" ? "max-w-4xl mx-auto" : "max-w-3xl"),
        titleClassName
      )}>
        {title}
      </h2>
      {description ? (
        <p className={cn(
          "mt-5 text-body-lg text-white/70 text-center md:text-start",
          align === "center" && "md:text-center",
          !descriptionClassName?.includes("max-w-") && (align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"),
          descriptionClassName
        )}>
          {description}
        </p>
      ) : null}
      {children}
    </header>
  );
}
