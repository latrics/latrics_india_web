import { aboutPageCopy } from "../../constants/siteContent";

// Modular Components
import AboutHero from "./AboutHero";
import AboutApproach from "./AboutApproach";
import AboutProfile from "./AboutProfile";
import AboutTimeline from "./AboutTimeline";
import AboutVision from "./AboutVision";
import AboutValues from "./AboutValues";
import AboutLeadership from "./AboutLeadership";
import AboutExpertTeam from "./AboutExpertTeam";

/**
 * AboutPage Orchestrator
 * This component assembles all sections of the About page, following the same
 * pattern as the ProductPage.
 */
export default function AboutPage() {
  const { hero } = aboutPageCopy;

  return (
    <div className="relative">
      <AboutHero data={hero} />
      <AboutApproach />
      <AboutProfile />
      <AboutTimeline />
      <AboutVision />
      <AboutValues />
      <AboutLeadership />
      <AboutExpertTeam />
    </div>
  );
}
