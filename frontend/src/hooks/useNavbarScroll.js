import { useEffect, useState } from "react";

/**
 * Custom Hook: Tracks whether the page has crossed the Y=50px scroll threshold.
 * 
 * Performance Note:
 * Uses `window.requestAnimationFrame (rAF)` to throttle scroll events.
 * This prevents the browser from firing hundreds of React state updates per second
 * during rapid scrolling, preventing jank/stuttering.
 */
export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let rafId = null;

    const updateScrollState = () => {
      const nextIsScrolled = window.scrollY > 50;
      setIsScrolled((previousValue) => (
        previousValue === nextIsScrolled ? previousValue : nextIsScrolled
      ));
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateScrollState);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return isScrolled;
}
