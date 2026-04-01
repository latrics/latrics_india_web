import { cn } from "../../lib/cn";

/**
 * Eyebrow + title + optional description — consistent hierarchy.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "start"
}) {
  return (
    <header
      className={cn(
        "mb-10 max-w-2xl md:mb-12",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <div className="mb-4">{eyebrow}</div> : null}
      <h2 className="text-title-1 text-fg">{title}</h2>
      {description ? (
        <p className="mt-4 text-body-lg text-fg-secondary md:mt-5">{description}</p>
      ) : null}
    </header>
  );
}
