import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { postNewsletterSubscription } from "../../services/api";
import Button from "../common/Button";
import Container from "../common/Container";

export default function Footer({ isHomePage = true }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubscribe = async (e) => {
    if (e) e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await postNewsletterSubscription(email);
      if (result.ok) {
        setStatus({ type: "success", message: "Thanks for subscribing!" });
        setEmail("");
      } else {
        setStatus({
          type: "error",
          message: result.data.message || "Something went wrong."
        });
      }
    } catch (error) {
      console.error("[Newsletter Error]", error);
      setStatus({ type: "error", message: "Network error. Try again." });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: "", message: "" }), 50000);
    }
  };

  return (
    <footer
      className="relative z-[1] border-t border-white/10 transition-colors duration-500 mt-[var(--section-spacing)]"
      style={{ backgroundColor: isHomePage ? "#DA291C" : "#54585A" }}
    >
      {/* Top Section: Building Better Tomorrow Marquee */}
      <div className="overflow-hidden border-b border-white/5 py-1 md:py-0.5 select-none">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 80,
            ease: "linear"
          }}
          className={`flex w-max whitespace-nowrap text-[6vw] md:text-[4vw] font-black uppercase tracking-tighter transition-colors duration-500 ${isHomePage ? "text-[#800F0F]/80" : "text-white/10"
            }`}
        >
          {/* Render double the items for a mathematically perfect seamless loop (0 to -50%) */}
          {[...Array(12)].map((_, i) => (
            <span key={i} className="font-sans px-8 md:px-12" style={{ wordSpacing: "12px" }}>
              Building Better Tomorrow
            </span>
          ))}
        </motion.div>
      </div>

      <Container className="section-y-sm pt-6 pb-8 md:pt-6 md:pb-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.05fr] lg:gap-12">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/latrics_logo.svg"
                alt="Latrics logo"
                className="h-8 w-auto shrink-0"
              />
            </div>
            <p className="font-sans max-w-xs text-sm leading-relaxed text-white/80">
              India's Autonomous Technology Company, building Tomorrow's Aerial Infrastructure
            </p>
          </div>

          <div>
            <h4 className="font-display mb-4 text-label text-fg">Quick links</h4>
            <ul className="grid gap-3">
              {[
                ["#simulation", "Simulation"],
                ["#highlights", "Highlights"],
                ["#industries", "Industries"]
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm font-medium text-white/80 no-underline transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white focus-visible:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display mb-4 text-label text-fg">Company</h4>
            <ul className="grid gap-3">
              {[
                ["#about", "About us"],
                ["#request-demo-form", "Contact"],
                ["#highlights", "Latest news"]
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm font-medium text-white/80 no-underline transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white focus-visible:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display mb-4 text-label text-fg">Newsletter</h4>
            <p className="font-sans mb-4 text-sm leading-relaxed text-white/80">Stay updated with our latest breakthroughs.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="text"
                placeholder="Coming Soon"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
                className="min-h-11 min-w-0 flex-1 rounded-xl border border-white/50 bg-black/20 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 transition-colors focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 cursor-not-allowed"
              />
              <Button
                type="submit"
                variant="primary"
                className="min-h-11 min-w-11 shrink-0 px-3 bg-white border-white/50 text-[#DA291C] hover:bg-white/90"
                aria-label="Subscribe to newsletter"
                disabled={isSubmitting || !email}
              >
                {isSubmitting ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <ArrowRight className="size-4" aria-hidden />}
              </Button>
            </form>
            {status.message ? (
              <p className={`mt-3 text-sm ${status.type === "error" ? "text-danger-fg" : "text-success-fg"}`}>{status.message}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-[0.8125rem] text-white/60 sm:mt-14 sm:flex-row sm:items-center sm:justify-between md:pt-10">
          <span>© 2026 Latrics Inc. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2 sm:gap-x-8">
            <span>Privacy-first workflows</span>
            <span>Enterprise-ready security</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
