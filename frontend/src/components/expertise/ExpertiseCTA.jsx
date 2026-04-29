import { Mail, MessageSquare } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import ActionLink from "../common/ActionLink";

/**
 * ExpertiseCTA Banner
 * High-fidelity call-to-action for connecting with LiDAR experts.
 */
export default function ExpertiseCTA() {
  return (
    <Section className="relative" id="expertise-cta">
      <Container>
        <div className="bg-[#151515]/90 rounded-xl border border-white/[0.08] p-10 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-[0_48px_96px_rgba(0,0,0,0.5)]">
          {/* Atmospheric Glow */}
          <div className="absolute -top-24 -left-24 -z-10 size-96 bg-brand/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 -z-10 size-96 bg-brand/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-title-1 text-white mb-8 max-w-4xl mx-auto leading-[1.1]">
              Talk to our LiDAR experts & Geospatial Engineers
            </h2>
            
            <p className="text-body-lg text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed">
              Any queries regarding anything related to service, products and solutions, You can Connect with our Expert team.
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <ActionLink href="mailto:support@latrics.com" icon={Mail}>
                Email Us
              </ActionLink>
              
              <ActionLink href="#contact" icon={MessageSquare}>
                Talk to our Team
              </ActionLink>
            </div>
          </div>

          {/* Decorative Corner Lines */}
          <div className="absolute top-10 left-10 size-20 border-t border-l border-white/5 rounded-tl-xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 size-20 border-b border-r border-white/5 rounded-br-xl pointer-events-none" />
        </div>
      </Container>
    </Section>
  );
}
