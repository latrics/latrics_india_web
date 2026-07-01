/**
 * Centralized UI copy and section data for the frontend.
 * Debugging is much easier when text, images, and section lists live in one place.
 */
export const industryImages = {
  Mining: [
    "/adani_mines_0.png",
    "/adani_mines_1.png",
    "/adani_mines_2.png",
    "/adani_mines_3.png",
    "/adani_mines_4.png"
  ],
  "Highways and Railways": "/highways_railways.jpg",
  "Urban Development": [
    "/amaravthi_urban_dev_0.png",
    "/amaravthi_urban_dev_1.png",
    "/amaravthi_urban_dev_2.png",
    "/amaravthi_urban_dev_3.png",
    "/amaravthi_urban_dev_4.png",
    "/amaravthi_urban_dev_5.jpeg"
  ],
  "Energy and Utilities": [
    "/powerlines1.jpeg",
    "/powerlines2.jpeg",
    "/powerlines3.jpeg",
    "/powerlines_0.png",
    "/powerlines_1.png",
    "/powerlines_2.png",
    "/powerlines_3.png"
  ],
  "Water Resources": [
    "/nalla_0.png",
    "/nalla_1.png"
  ],
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
  "First indigenous DGCA-certified LiDAR platform - built for Indian conditions with advanced safety systems",
  "Intelligent analytics transforming raw aerial data into predictive insights for smarter operations",
  "Flexible deployment architecture - cloud-based or on-premise to meet your data sovereignty requirements"
];

export const simulationStats = [
  { label: "Terrain reconstruction", value: "16 ms/frame" },
  { label: "Digital twin validation", value: "99.2% match" },
  { label: "Mission planning export", value: "CAD + GIS ready" }
];

export const highlightItems = [
  {
    date: "May, 2026",
    title: "Latrics Receives Land Allocation to Contribute to Andhra Pradesh Drone City Vision",
    desc: " LiCopter P720 deployment and R&D facility established in Kurnool under the AP Drone City initiative, inaugurated in Puttaparthi in the presence of Defence Minister Shri Rajnath Singh and AP Chief Minister Shri Nara Chandrababu Naidu. Delivering precision LiDAR mapping for smart infrastructure, defense readiness, and critical corridor surveying - advancing India's sovereign autonomous ecosystem.",
    image: "/landAllocation_highlights.jpg"
  },
  {
    date: "May, 2026",
    title: "Latrics Received ₹30 Lakh Grant Support from Kotak BizLabs Season 2",
    desc: "Selected among the top 15 startups from 730+ applications nationwide, receiving grant support to scale India's indigenous LiDAR platform for critical infrastructure operations.",
    image: "/kotakBizlab.jpg",
    featured: true
  },
  {
    date: "Jan, 2026",
    title: "Finally, Latrics Now Has India's First DGCA Certified LiDAR Drone",
    desc: "LiCopter P720 received DGCA Type Certification as India's first indigenous LiDAR drone platform. Engineered for commercial autonomy, it delivers precise aerial mapping, advanced obstacle avoidance, and secure deployments across mining, infrastructure, and critical operations.",
    image: "/dgca_certified_highlight.jpeg"
  },
  {
    date: "Jan, 2025",
    title: "Latrics Presents Indigenous LiCopter P720 to PM Modi at Viksit Bharat Young Leader Dialogue 2025",
    desc: "LiCopter was showcased to Hon'ble PM Shri Narendra Modi at the Viksit Bharat Young Leader Dialogue 2025, securing national recognition and multi-channel coverage for advancing India's indigenous aerial mapping and autonomous operations.",
    image: "/My pitch with Modi ji.jpeg"
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
    tags: ["STOCKPILE VOLUMETRICS", "3D MINE MODELS", "AI-BASED MINE ANALYTICS"]
  },
  "Highways and Railways": {
    title: "Rapid Corridor Mapping for Infrastructure",
    description: "Enable faster corridor surveys, precise gradient analysis, and seamless alignment planning with autonomous LiDAR drones built for long-distance infrastructure projects.",
    tags: ["RAILWAY INFRASTRUCTURE MAPPING", "LIDAR CORRIDOR SURVEYS", "ROAD ASSET MANAGEMENT"]
  },
  "Urban Development": {
    title: "3D Digital Twins for Smarter Cities",
    description: "Enable precise urban planning, infrastructure optimization, and zoning compliance with autonomous LiDAR drones that generate intelligent 3D city models.",
    tags: ["SMART CITY MAPPING", "3D CITY MODELS", "URBAN PLANNING"]

  },
  "Energy and Utilities": {
    title: "Autonomous Solutions for Power & Utilities",
    description: "Enable safer powerline inspections, precise solar farm planning, and predictive maintenance with autonomous drones built to operate safely near high-interference infrastructure.",
    tags: ["POWER LINE INSPECTION", "SUBSTATION MAPPING", "AI ASSET ANALYTICS"]
  },
  "Water Resources": {
    title: "Autonomous Solutions for Water Body Management",
    description: "Enable precise reservoir mapping, flood risk prediction, and catchment area analysis with autonomous drones that support intelligent water conservation and management.",
    tags: ["FLOOD RISK ASSESSMENT", "CANAL SURVEYING", "WATER RESOURCE MONITORING"]
  },
  "Emergency Services": {
    title: "Rapid Response for Critical Situations",
    description: "Enable faster damage assessment, precise rescue planning, and real-time situational awareness with autonomous drones built for rapid deployment in challenging conditions.",
    tags: ["DISASTER RESPONSE MAPPING", "RAPID DAMAGE ASSESSMENT", "FLOOD DAMAGE MAPPING"]
  },
};

/**
 * Recent Articles Data Table
 * Used in the RecentArticles section to populate the interactive gallery.
 * Each object represents an article, success story or industrial application.
 */
export const recentArticles = [
  {
    title: "Latrics Receives Land Allocation to Contribute to Andhra Pradesh Drone City Vision",
    desc: "LiCopter P720 deployment and R&D facility established in Kurnool under the AP Drone City initiative, inaugurated in Puttaparthi in the presence of Defence Minister Shri Rajnath Singh and AP Chief Minister Shri Nara Chandrababu Naidu. Delivering precision LiDAR mapping for smart infrastructure, defense readiness, and critical corridor surveying - advancing India's sovereign autonomous ecosystem.",
    img: "/landAllocation_highlights.jpg",
    meta: "May, 2026",
    href: "#"
  },
  {
    title: "Latrics Received ₹30 Lakh Grant Support from Kotak BizLabs Season 2",
    desc: "Selected among the top 15 startups from 730+ applications nationwide, receiving grant support to scale India's indigenous LiDAR platform for critical infrastructure operations.",
    img: "/kotakBizlab.jpg",
    meta: "May, 2026",
    href: "#"
  },
  {
    title: "Finally, Latrics Now Has India's First DGCA Certified LiDAR Drone",
    desc: "LiCopter P720 received DGCA Type Certification as India's first indigenous LiDAR drone platform. Engineered for commercial autonomy, it delivers precise aerial mapping, advanced obstacle avoidance, and secure deployments across mining, infrastructure, and critical operations.",
    img: "/dgca_certified_highlight.jpeg",
    meta: "Jan, 2026",
    href: "#"
  },
  {
    title: "Latrics Presents Indigenous LiCopter P720 to PM Modi at Viksit Bharat Young Leader Dialogue 2025",
    desc: "LiCopter was showcased to Hon'ble PM Shri Narendra Modi at the Viksit Bharat Young Leader Dialogue 2025, securing national recognition and multi-channel coverage for advancing India's indigenous aerial mapping and autonomous operations.",
    img: "/My pitch with Modi ji.jpeg",
    meta: "Jan, 2025",
    href: "#"
  }
];



export const milestoneItems = [
  { value: "15+", label: "Years of Experience" },
  { value: "20+", label: "Active Drones" },
  { value: "100+", label: "Successful Flights" },
  { value: "10+", label: "Successful Mission Executions" }
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
