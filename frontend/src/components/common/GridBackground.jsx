import { useEffect } from "react";

/**
 * GridBackground
 *
 * Renders the interactive grid background behind all components.
 * 
 * Architecture:
 * - We render actual DOM nodes inside the React tree rather than using 
 *   body::before/after. This ensures they respect the z-index stacking context 
 *   of the App container and genuinely sit BEHIND all cards, text, and navbars 
 *   without unexpectedly painting over them.
 * - Uses exact same CSS mask trick to illuminate *only* the grid lines.
 */
export default function GridBackground() {
  useEffect(() => {
    const body = document.body;

    const onMouseMove = (e) => {
      body.style.setProperty("--mouse-x", `${e.clientX}px`);
      body.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    const onMouseLeave = () => {
      body.style.setProperty("--mouse-x", "-9999px");
      body.style.setProperty("--mouse-y", "-9999px");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      {/* 
        Fixed container sitting securely underneath all relative/absolute elements 
        inside the React application but tracking the viewport via fixed positioning.
      */}
      
      {/* Layer 1: Faint base grid (always visible) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "54px 54px",
        }}
      />

      {/* Layer 2: Glowing grid exposed only via the cursor radial mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "54px 54px",
          WebkitMaskImage: "radial-gradient(400px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), black, transparent 100%)",
          maskImage: "radial-gradient(400px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), black, transparent 100%)",
        }}
      />
    </div>
  );
}
