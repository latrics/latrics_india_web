import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { postNewsletterSubscription } from "../../services/api";
import Button from "../common/Button";
import Container from "../common/Container";

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = ({ size = 20, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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

      <Container className="section-y-sm pt-4 pb-6 md:pt-4 md:pb-5">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] lg:gap-10">
          <div className="space-y-4">
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

            <div className="space-y-1.5 pt-1 text-sm text-white/80 font-sans">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Phone:</span>
                <a href="tel:+919010011223" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">+91 90100 11223</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Email:</span>
                <a href="mailto:info@latrics.com" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">info@latrics.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://www.linkedin.com/company/latricsindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full p-1"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/latricsindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full p-1"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display mb-3 text-label text-fg">Quick links</h4>
            <ul className="grid gap-2">
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
            <h4 className="font-display mb-3 text-label text-fg">Company</h4>
            <ul className="grid gap-2">
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
            <h4 className="font-display mb-3 text-label text-fg">Newsletter</h4>
            <p className="font-sans mb-3 text-sm leading-relaxed text-white/80">Stay updated with our latest breakthroughs.</p>
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

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between md:pt-6">
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
