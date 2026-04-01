import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { postNewsletterSubscription } from "../../services/api";
import Button from "../common/Button";
import Container from "../common/Container";

export default function Footer() {
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
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    }
  };

  return (
    <footer className="relative z-[1] border-t border-white/10 bg-[#DA291C]">
      <Container className="section-y-sm pt-14 pb-10 md:pt-20 md:pb-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.05fr] lg:gap-12">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/latrics_logo.svg"
                alt="Latrics logo"
                className="h-8 w-auto shrink-0"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/80">
              Leading the intelligence layer for global industrial operations through LiDAR, AI analytics, and autonomous aerospace systems.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-label text-fg">Quick links</h4>
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
            <h4 className="mb-4 text-label text-fg">Company</h4>
            <ul className="grid gap-3">
              {[
                ["#about", "About us"],
                ["#contact", "Contact"],
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
            <h4 className="mb-4 text-label text-fg">Newsletter</h4>
            <p className="mb-4 text-sm leading-relaxed text-white/80">Stay updated with our latest breakthroughs.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="min-h-11 min-w-0 flex-1 rounded-xl border border-white/50 bg-black/20 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 transition-colors focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
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
