import { expertisePageData } from "../../constants/siteContent";

import ExpertiseHero from "./ExpertiseHero";
import ExpertiseWhy from "./ExpertiseWhy";
import ExpertiseServices from "./ExpertiseServices";
import ExpertiseSolutions from "./ExpertiseSolutions";
import ExpertiseWorkflow from "./ExpertiseWorkflow";
import ExpertiseDeliverables from "./ExpertiseDeliverables";
import ExpertiseAnalysis from "./ExpertiseAnalysis";
import ExpertiseOutcomes from "./ExpertiseOutcomes";
import ExpertiseQuote from "./ExpertiseQuote";
import ExpertiseCTA from "./ExpertiseCTA";
import ExpertiseFAQ from "./ExpertiseFAQ";
import ExpertiseChooseUs from "./ExpertiseChooseUs";

export default function ExpertisePage() {
  const { 
    hero, 
    whyServices, 
    services, 
    solutions, 
    workflow, 
    analysis, 
    outcomes, 
    deliverables,
    faq,
    chooseUs 
  } = expertisePageData;

  return (
    <main className="min-h-screen">
      <ExpertiseHero data={hero} />
      <ExpertiseWhy data={whyServices} />
      <ExpertiseServices data={services} />
      <ExpertiseAnalysis data={analysis} />
      <ExpertiseSolutions data={solutions} />
      <ExpertiseWorkflow data={workflow} />
      <ExpertiseDeliverables data={deliverables} />
      <ExpertiseOutcomes data={outcomes} />
      <ExpertiseChooseUs data={chooseUs} />
      <ExpertiseFAQ data={faq} />
      <ExpertiseQuote />
      <ExpertiseCTA />
    </main>
  );
}

