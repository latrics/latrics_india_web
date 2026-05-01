/**
 * Centralized UI copy and section data for the frontend.
 * Debugging is much easier when text, images, and section lists live in one place.
 */
export const industryImages = {
  Mining: "/case_3.png",
  "Highways and Railways": "/industry_digital.png",
  "Urban Development": "/topographic_map.jpg",
  "Energy and Utilities": "/industry_energy.png",
  "Water Resources": "/hero_bg.png",
  "Emergency Services": "/industry_aerospace.png"
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

export const industryTabs = [
  "Mining",
  "Highways and Railways",
  "Urban Development",
  "Energy and Utilities",
  "Water Resources",
  "Emergency Services"
];

export const industryCopy = {
  Mining: {
    title: "Precision Mining with Autonomous Visibility",
    description: "Monitor stockpiles, track site changes, and optimize excavation workflows with high-accuracy LiDAR mapping and AI analytics.",
    tags: ["HIGH-PRECISION MAPPING", "DGCA-CERTIFIED", "AI-POWERED ANALYTICS"]
  },
  "Highways and Railways": {
    title: "Rapid Corridor Mapping for Infrastructure",
    description: "Enable faster corridor surveys, precise gradient analysis, and seamless alignment planning with autonomous LiDAR drones built for long-distance infrastructure projects.",
    tags: ["CORRIDOR MAPPING", "DGCA-CERTIFIED", "GPS-DENIED NAVIGATION"]
  },
  "Urban Development": {
    title: "3D Digital Twins for Smarter Cities",
    description: "Enable precise urban planning, infrastructure optimization, and zoning compliance with autonomous LiDAR drones that generate intelligent 3D city models.",
    tags: ["DIGITAL TWIN", "DGCA-CERTIFIED", "AI-POWERED ANALYTICS"]
  },
  "Energy and Utilities": {
    title: "Autonomous Solutions for Power & Utilities",
    description: "Enable safer powerline inspections, precise solar farm planning, and predictive maintenance with autonomous drones built to operate safely near high-interference infrastructure.",
    tags: ["THERMAL VISION", "DGCA-CERTIFIED", "ASSET MANAGEMENT"]
  },
  "Water Resources": {
    title: "Autonomous Solutions for Water Body Management",
    description: "Enable precise reservoir mapping, flood risk prediction, and catchment area analysis with autonomous drones that support intelligent water conservation and management.",
    tags: ["FLOOD PREDICTION", "REAL-TIME MONITORING", "AQUIFER ANALYSIS"]
  },
  "Emergency Services": {
    title: "Rapid Response for Critical Situations",
    description: "Enable faster damage assessment, precise rescue planning, and real-time situational awareness with autonomous drones built for rapid deployment in challenging conditions.",
    tags: ["3D DAMAGE MAPPING", "DGCA-CERTIFIED", "GPS-DENIED OPERATION"]
  },
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
    meta: "AI & ROBOTICS",
    href: "#"
  },
  {
    title: "Sustainable Energy",
    desc: "A 30% maintenance reduction across utility-scale solar farms.",
    img: "/case_2.png",
    meta: "RENEWABLE ENERGY",
    href: "#"
  },
  {
    title: "Precision Mining",
    desc: "AI-assisted monitoring that gives operators faster visibility.",
    img: "/case_3.png",
    meta: "INDUSTRIAL DRONES",
    href: "#"
  },
  {
    title: "Urban Logistics",
    desc: "Offshore blade inspection workflows capable of identifying defects.",
    img: "/case_4.png",
    meta: "AEROSPACE AI",
    href: "#"
  }
];



export const milestoneItems = [
  { value: "15+", label: "Years of Experience" },
  { value: "20+", label: "Active Drones" },
  { value: "1000", label: "Completed Missions" },
  { value: "200+", label: "Industrial Clients" }
];

export const timelineEvents = [
  {
    year: "2022",
    title: "The Foundation",
    description: "Latrics was founded with a mission to bridge the gap between traditional surveying and high-precision autonomous technology."
  },
  {
    year: "2023",
    title: "LiDAR Integration",
    description: "Successfully integrated advanced LiDAR sensor suites into our autonomous drone fleet, achieving sub-millimeter precision."
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded our operations across 15+ countries, serving key industries in aerospace, energy, and digital infrastructure."
  },
  {
    year: "2025",
    title: "AI & Automation",
    description: "Leveraged AI-driven analytics to provide real-time defect detection and automated mission planning for industrial fleets."
  },
  {
    year: "2026",
    title: "Future Horizons",
    description: "Continuing to push the boundaries of industrial intelligence, making autonomous surveying the global standard for safety and efficiency."
  }
];

export const aboutPageCopy = {
  hero: {
    title: "ABOUT LATRICS",
    description: "At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently."
  },
  approach: {
    badge: "ANALYSIS",
    title: "Our Approach to Work",
    description: "At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently.",
    cards: [
      {
        id: "why",
        title: "Why?",
        description: "To bridge the gap between traditional surveying and high-precision autonomous technology, ensuring safety and efficiency for industrial operations.",
        image: "/thinking_why.svg"
      },
      {
        id: "what",
        title: "What?",
        description: "We provide autonomous LiDAR mapping and AI-driven aerospace solutions that translate complex data into actionable industrial intelligence.",
        image: "/thinking_what.svg"
      },
      {
        id: "how",
        title: "How?",
        description: "By fusing advanced drone hardware with proprietary AI analytics and DGCA-certified flight systems to deliver sub-millimeter precision.",
        image: "/thinking_how.svg"
      }
    ]
  }
};

export const expertisePageData = {
  hero: {
    title: "Transforming Industries Through Intelligent Innovation",
    description: "LiDAR-Powered Survey & Intelligence Services"
  },
  whyServices: {
    badge: "WHY LATRICS SERVICES",
    title: "Transforming Industries Through Intelligent Innovation",
    description: "At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter. We fuse advanced drone hardware with proprietary AI analytics to give manufacturer and facility operators",
    cards: [
      {
        id: 1,
        title: "Trusted by industry leaders",
        description: "At Latrics, we build precision-driven LiDAR and aerospace solutions."
      },
      {
        id: 2,
        title: "Trusted by industry leaders",
        description: "At Latrics, we build precision-driven LiDAR and aerospace solutions."
      },
      {
        id: 3,
        title: "Trusted by industry leaders",
        description: "At Latrics, we build precision-driven LiDAR and aerospace solutions."
      }
    ]
  },
  services: {
    badge: "SERVICES",
    title: "Transforming Industries Through Intelligent Innovation",
    description: "At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter. At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter.",
    tabs: [
      { id: "aerospace", label: "Aerospace", image: "/industry_aerospace.png" },
      { id: "digital", label: "Digital Intelligence", image: "/industry_digital.png" },
      { id: "energy", label: "Sustainable Energy", image: "/industry_energy.png" }
    ]
  },
  solutions: [
    {
      badge: "SOLUTIONS",
      title: "Transforming Industries Through Intelligent Innovation",
      description: "At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter and more efficiently.",
      image: "/drone_simulation.png"
    },
    {
      badge: "SOLUTIONS",
      title: "Sustainable Power Fleet Inspection Ready",
      description: "Detect thermal anomalies and map blade surfaces with autonomous missions that are easier to validate and safer to repeat.",
      image: "/industry_energy.png"
    },
    {
      badge: "SOLUTIONS",
      title: "Mission-Grade Visibility for Flight Ops",
      description: "Inspect fuselage and restricted airside zones with autonomous drone hardware paired with proprietary AI analytics.",
      image: "/industry_aerospace.png"
    },
    {
      badge: "SOLUTIONS",
      title: "Digital Intelligence for Critical Assets",
      description: "Unify imagery and telemetry into one operating picture for asset-heavy environments that move too fast for manual review.",
      image: "/industry_digital.png"
    },
    {
      badge: "SOLUTIONS",
      title: "Ultra-Precise LiDAR Sensor Suites",
      description: "Unveiling our next-gen LiDAR sensors that allow for sub-millimeter defect detection in high-stress industrial environments.",
      image: "/drone_sensor.png"
    }
  ],
  workflow: {
    badge: "WORKFLOW",
    title: "SEE HOW LICOPTER CAN WORK FOR YOU",
    description: "We fuse advanced drone hardware with proprietary AI analytics to give manufacturer .",
    steps: [
      {
        title: "Project Planning",
        description: "Comprehensive mission assessment and logistics coordination. We define flight paths, safety protocols, and data requirements to ensure a seamless industrial operation."
      },
      {
        title: "Survey & Scanning",
        isGroup: true,
        subSteps: [
          {
            title: "Arial Survey",
            description: "High-resolution data acquisition using autonomous drone fleets. Our DGCA-certified systems capture mission-critical imagery with precision and repeatability."
          },
          {
            title: "Lidar Scanning",
            description: "Ultra-precise 3D point cloud generation with sub-millimeter accuracy. We map complex environments and infrastructure to create high-fidelity digital twins."
          }
        ]
      },
      {
        title: "Data Processing",
        description: "Advanced AI-driven analytics translate raw telemetry into actionable intelligence. Our cloud-native platform processes massive datasets in real-time."
      },
      {
        title: "Insights & Processing",
        description: "Delivery of industrial-grade reports and predictive maintenance alerts. We provide the clarity needed for data-driven decision-making and safety review."
      },
      {
        title: "Deliverables",
        description: "Final delivery of high-precision datasets, inspection reports, and 3D models. We ensure all mission objectives are met and data is integrated into your existing asset management workflows."
      }
    ]
  },
  analysis: {
    badge: "ANALYSIS",
    title: "SEE HOW LICOPTER CAN WORK FOR YOU",
    description: "We fuse advanced drone hardware with proprietary AI analytics to give manufacturer .",
    stats: [
      { id: 1, value: "700+", label: "Years of Experience", highlight: false },
      { id: 2, value: "700+", label: "Years of Experience", highlight: true },
      { id: 3, value: "700+", label: "Years of Experience", highlight: false }
    ]
  },
  outcomes: {
    badge: "OUTCOMES",
    title: "Transforming Industries Through Intelligent Innovation",
    items: [
      {
        title: "Aerospace Fleet Intelligence",
        description: "Our autonomous LiDAR workflows have reduced inspection downtime by 60% for major aerospace manufacturers, ensuring mission-grade visibility and safety.",
        image: "/outcomes_aerospace_1777361362799.png",
      },
      {
        title: "Digital Infrastructure Mapping",
        description: "Achieved sub-millimeter accuracy in railway corridor mapping, enabling predictive maintenance for high-speed rail networks across complex urban environments.",
        image: "/outcomes_digital_1777361384034.png",
      },
      {
        title: "Sustainable Energy Optimization",
        description: "Automated blade inspections for offshore wind farms, identifying structural anomalies 4x faster than manual teams with 99.2% digital twin validation.",
        image: "/outcomes_energy_1777361405188.png",
      }
    ]
  },
  chooseUs: {
    badge: "Why Choose Us",
    title: "What Sets Our Solutions Apart",
    items: [
      {
        id: 1,
        title: "High Accuracy",
        icon: "Target"
      },
      {
        id: 2,
        title: "Rapid Deployment",
        icon: "Zap"
      },
      {
        id: 3,
        title: "Expert Team",
        icon: "Users"
      },
      {
        id: 4,
        title: "End-to-End Support",
        icon: "ShieldCheck"
      }
    ]
  },
  faq: {
    badge: "FAQ",
    title: "Commonly Asked Questions",
    description: "Quick answers to help you understand our industrial drone and AI inspection solutions.",
    questions: [
      {
        id: 1,
        question: "How accurate is the LiDAR data?",
        answer: "Our LiDAR systems achieve sub-centimeter vertical accuracy (5-10mm) and absolute horizontal accuracy of 1-3cm, depending on flight altitude and ground control points."
      },
      {
        id: 2,
        question: "What is the typical turnaround time for reports?",
        answer: "Standard inspection reports are delivered within 24-48 hours. High-priority AI-verified anomaly detections can be delivered in near real-time via our cloud platform."
      },
      {
        id: 3,
        question: "Can your drones operate in extreme weather?",
        answer: "Our industrial fleet is IP55 rated, allowing for operations in light rain and winds up to 15 m/s. We operate in temperatures ranging from -20°C to 50°C."
      },
      {
        id: 4,
        question: "How do you handle data security?",
        answer: "All data is encrypted in transit and at rest using AES-256 standards. We offer on-premise hosting options for highly sensitive infrastructure projects."
      }
    ]
  },
  deliverables: {
    badge: "SCANNER",
    title: "Delivering These Solutions Through Expert Services",
    tabs: [
      {
        id: "lidar",
        label: "LiDAR services",
        image: "/industry_digital.png",
        items: [
          "High-Precision Aerial LiDAR Surveys",
          "Corridor & Infrastructure Mapping",
          "Terrain & Topographic Modeling",
          "3D Point Cloud Processing & Classification",
          "Volumetric & Elevation Analysis",
          "Asset Inspection & Condition Assessment",
          "GIS Data Integration & Layer Generation"
        ]
      },
      {
        id: "aerial",
        label: "Aerial Services",
        image: "/industry_aerospace.png",
        items: [
          "High-Resolution Orthomosaic Mapping",
          "Autonomous Flight Mission Planning",
          "Thermal Asset Inspection",
          "Multispectral Data Acquisition",
          "Real-time Telemetry Analytics",
          "Stockpile & Earthwork Analysis",
          "Environmental Impact Assessments"
        ]
      }
    ]
  }
};
