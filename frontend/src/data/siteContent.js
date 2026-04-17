/**
 * Centralized UI copy and section data for the frontend.
 * Debugging is much easier when text, images, and section lists live in one place.
 */
export const industryImages = {
  Aerospace: "/industry_aerospace.png",
  "Digital Intelligence": "/industry_digital.png",
  "Sustainable Energy": "/industry_energy.png"
};

export const marqueePartners = ["COMPANY", "COMPANY", "COMPANY", "COMPANY", "COMPANY", "COMPANY"];

export const heroMetrics = [
  { value: "4x", label: "Faster inspection cycles" },
  { value: "98.6%", label: "Defect detection accuracy" },
  { value: "24/7", label: "Autonomous mission readiness" }
];

export const heroBadges = ["Autonomous", "Precision", "Scalable"];

export const aboutFeatures = [
  "FAA & EASA certified autonomous flight systems with obstacle avoidance",
  "AI vision models processing 4K imagery at 60fps for real-time defect detection",
  "Cloud-native platform integrating directly with SAP, SCADA, and ERP systems",
  "ISO 27001 certified — your operational data stays in your region"
];

export const simulationStats = [
  { label: "Terrain reconstruction", value: "16 ms/frame" },
  { label: "Digital twin validation", value: "99.2% match" },
  { label: "Mission planning export", value: "CAD + GIS ready" }
];

export const highlightItems = [
  {
    date: "March 5, 2026",
    title: "Aerospace innovation award",
    desc: "Autonomous corridor mapping workflows reduced inspection overhead while improving mission safety review.",
    image: "/drone_inspection.png",
    featured: true
  },
  {
    date: "March 12, 2026",
    title: "Clean energy thermal partnership",
    desc: "A new field deployment pairs thermal analytics with LiDAR to prioritize turbine maintenance in real time.",
    image: "/industry_energy.png"
  },
  {
    date: "February 27, 2026",
    title: "Featured in Kotak Biz Lab",
    desc: "Recognition for translating advanced sensing into practical industrial workflows across Indian manufacturing and aerospace.",
    image: "/industry_digital.png"
  },
  {
    date: "April 2, 2026",
    title: "Global Fleet Expansion",
    desc: "Latrix expands its autonomous drone fleet to 15 new countries, enhancing global operational intelligence and coverage across multiple industries.",
    image: "/drone_on_pedestals.png"
  },
  {
    date: "March 20, 2026",
    title: "Next-Gen LiDAR Sensors",
    desc: "Unveiling our ultra-precise LiDAR sensor suite that allows for sub-millimeter defect detection in high-stress industrial environments.",
    image: "/drone_sensor.png"
  }
];

export const whyCards = [
  { title: "Industrial Precision", desc: "High-accuracy LiDAR mapping for complex manufacturing environments." },
  { title: "Autonomous Safety", desc: "Mission-ready drone systems with advanced obstacle avoidance and repeatable route logic." },
  { title: "Real-Time Insights", desc: "AI models surface defects fast enough for teams to act during the same maintenance cycle." },
  { title: "Seamless Integration", desc: "Cloud-native workflows sync with ERP, SCADA, and digital twin environments." },
  { title: "Global Scalability", desc: "Built for multi-site programs that need governance, consistency, and local execution." },
  { title: "Unrivaled Support", desc: "Operational specialists stay close to high-stakes deployments from onboarding through rollout." }
];

export const industryTabs = ["Aerospace", "Digital Intelligence", "Sustainable Energy"];

export const industryCopy = {
  Aerospace: {
    title: "Aerospace operations with mission-grade visibility",
    description: "Inspect fuselage, corridors, and restricted airside zones with autonomous missions that are easier to validate and safer to repeat."
  },
  "Digital Intelligence": {
    title: "Digital intelligence for critical infrastructure",
    description: "Unify imagery, telemetry, and AI alerts into one operating picture for asset-heavy environments that move too fast for manual review."
  },
  "Sustainable Energy": {
    title: "Sustainable energy fleets that stay inspection-ready",
    description: "Detect thermal anomalies, map blade surfaces, and prioritize maintenance windows before downtime turns into lost output."
  }
};

/**
 * Case Studies Data Table
 * Used in the CaseStudies section to populate the interactive gallery.
 * Each object represents a success story or industrial application.
 */
export const caseStudies = [
  {
    title: "Intelligent AI Ethics",
    desc: "Precision LiDAR workflows for high-speed rail corridors.",
    img: "/case_1.png",
    meta: "AI & ROBOTICS"
  },
  {
    title: "Sustainable Energy",
    desc: "A 30% maintenance reduction across utility-scale solar farms.",
    img: "/case_2.png",
    meta: "RENEWABLE ENERGY"
  },
  {
    title: "Precision Mining",
    desc: "AI-assisted monitoring that gives operators faster visibility.",
    img: "/case_3.png",
    meta: "INDUSTRIAL DRONES"
  },
  {
    title: "Urban Logistics",
    desc: "Offshore blade inspection workflows capable of identifying defects.",
    img: "/case_4.png",
    meta: "AEROSPACE AI"
  }
];


export const milestoneItems = [
  { value: "15+", label: "Years of Experience" },
  { value: "20+", label: "Active Drones" },
  { value: "1000", label: "Years of Experience" },
  { value: "200+", label: "Years of Experience" }
];
