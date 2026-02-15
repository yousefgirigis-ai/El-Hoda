import {
  Beaker,
  Droplet,
  Activity,
  Table,
  Shield,
  Layers,
  Package,
  TestTube,
  Atom,
  Heart,
  Thermometer,
  Microscope,
  Droplets,
  Stethoscope,
  Pill,
  AlertCircle,
  Cpu,
  Tag,
  TrendingUp,
  Target,
  FlaskConical,
  Zap,
  Monitor,
  Smartphone,
  ClipboardCheck,
  Printer,
  Waves,
  Scissors,
} from "lucide-react";
export const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Our Services", href: "#services" },
  { name: "About Us", href: "/#about" },
  { name: "Partners", href: "/#partners" },
  { name: "Products", href: "/products" },
  { name: "Events", href: "/#blog" },
  { name: "Contact Us", href: "/#contact us" },
];
export const eventsLinks = [
  { name: "Annual Events", path: "/events/annual" },
  { name: "One-Time Events", path: "/events/one-time" },
];
export const productsLinks = [
  { name: "All Products", path: "/products" },
  { name: "In Vitro Diagnostics (IVD)", path: "/products/ivd" },
  { name: "Rapid Test", path: "/products/rapid-test" },
  { name: "IPC Solutions", path: "/products/ipc" },
  { name: "Medical Consumables", path: "/products/medical-consumables" },
];
export const partnerLinks = [
  { name: "Laboratory & Diagnostics", path: "/partners/laboratory" },
  { name: "Clinical Chemistry & Hematology", path: "/partners/clinical" },
  { name: "Infection Control & Research", path: "/partners/infection" },
];

export const aboutLinks = [
  { name: "Corporate History", path: "/about/history" },
  { name: "Corporate Identity", path: "/about/identity" },
  { name: "Headquarters & Operations", path: "/about/operations" },
  { name: "Government Partnerships", path: "/about/partnerships" },
  { name: "Corporate Citizenship", path: "/about/citizenship" },
  { name: "Products & Services", path: "/about/products" },
  { name: "Value Proposition", path: "/about/value" },
  { name: "Company Overview", path: "/about/overview" },
];

export const serviceLinks = [
  {
    name: "Quality Management & Compliance",
    path: "/services/quality-management-compliance",
    description:
      "ISO certifications, quality assurance, and regulatory compliance",
  },
  {
    name: "Application Support & Training",
    path: "/services/application-support-training",
    description: "Software support, user training, and implementation guidance",
  },
  {
    name: "Technical & Engineering",
    path: "/services/technical-engineering",
    description: "Engineering solutions and technical consulting services",
  },
];
export const services = [
  {
    id: 1,
    icon: "certificate",
    title: "Quality Management & Compliance Assurance",
    shortDescription:
      "Extending commitment to highest international standards across all product lines.",
    description:
      "Quality is the foundational principle of the EL HODA Industrial Complex. We extend our commitment to the highest international standards across all localized and proprietary product lines, mitigating risk and ensuring product integrity for our clients.",
    features: [
      "Manufacturing Quality Systems: Our entire production process, for both localized reagents and medical consumables, is rigorously governed by adherence to ISO 13485 standards and Good Manufacturing Practice (GMP). This ensures all products meet verifiable global benchmarks for safety and accuracy.",
      "Supplier Quality Assurance (SQA): We maintain stringent quality oversight for all raw materials and components, ensuring the integrity of both localized and distributed equipment.",
      "Regulatory Support: We provide expert guidance to clients in navigating complex local and international regulatory requirements for IVD devices and laboratory standards, facilitating seamless quality system integration.",
    ],
    stats: [
      { label: "ISO Standards", value: "ISO 13485 Certified" },
      { label: "Quality Checks", value: "100+ Daily" },
      { label: "Compliance Rate", value: "99.9%" },
    ],
    path: "/services/quality-management-compliance",
    color: "#E81729",
  },
  {
    id: 2,
    icon: "tools",
    title: "Technical & Engineering Services",
    shortDescription:
      "Specialized engineering team delivering rapid-response support across the region.",
    description:
      "Our specialized engineering team delivers critical, rapid-response support across all distributed and localized equipment, ensuring maximum longevity and reliable operation across the region.",
    features: [
      "Installation and Commissioning: Professional, on-site installation and rigorous testing of all new systems to guarantee immediate operational readiness and optimal performance.",
      "Preventive and Corrective Maintenance (PM/CM): We offer structured Preventive Maintenance programs to maximize performance and minimize downtime. Our Corrective Maintenance service provides rapid response for technical issues, supported by outstanding internal service capabilities.",
      "Strategic Spare Parts Management: We maintain a dedicated, strategic inventory of spare parts for all supported instruments, enabling quick repairs and significantly reducing service turn-around time, a critical advantage in regional supply chains.",
    ],
    stats: [
      { label: "Response Time", value: "<24 Hours" },
      { label: "Equipment Uptime", value: "99.5%" },
      { label: "Spare Parts", value: "10,000+" },
    ],
    path: "/services/technical-engineering",
    color: "#2D3748",
  },
  {
    id: 3,
    icon: "graduation-cap",
    title: "Application Support and Training",
    shortDescription:
      "Empowering clients' personnel with knowledge for effective and safe product utilization.",
    description:
      "We empower our clients' personnel with the knowledge necessary to utilize all products effectively and safely, directly enhancing overall diagnostic accuracy and efficiency.",
    features: [
      "Comprehensive User Training: Specialized training sessions cover the operation, daily maintenance, and quality control procedures for all diagnostic systems.",
      "Application and Workflow Optimization: Focused training ensures the optimal use of diagnostic reagents, rapid tests, and consumables to achieve accurate clinical results. We also provide expert consultation to help laboratories optimize their diagnostic workflows, from sample collection to final reporting.",
      "Infection Prevention & Control (IPC) Protocols: We provide training and consultation on the application of sterilization protocols and the effective use of IPC products, ensuring full compliance with international safety and health standards.",
    ],
    stats: [
      { label: "Training Sessions", value: "500+ Annually" },
      { label: "Certified Trainers", value: "50+" },
      { label: "Client Satisfaction", value: "98%" },
    ],
    path: "/services/application-support-training",
    color: "#3182CE",
  },
];

export const servicesOverview = {
  title: "Comprehensive Services",
  description:
    "EL HODA Trade & Supplies provides comprehensive support that spans the entire product lifecycle—from stringent manufacturing quality assurance to exceptional after-sales service. Our integrated approach is designed to guarantee regulatory compliance, maximize equipment uptime, and ensure optimal operational performance for our partners.",
  integratedApproach:
    "Our integrated approach is designed to guarantee regulatory compliance, maximize equipment uptime, and ensure optimal operational performance for our partners.",
  keyHighlights: [
    "End-to-end product lifecycle support",
    "Regulatory compliance assurance",
    "Maximized equipment uptime",
    "Optimal operational performance",
    "Exceptional after-sales service",
  ],
  stats: [
    {
      label: "Years of Excellence",
      value: "25+",
      description: "In healthcare services",
    },
    {
      label: "Countries Served",
      value: "50+",
      description: "Across the region",
    },
    {
      label: "Projects Completed",
      value: "10,000+",
      description: "Successful implementations",
    },
    {
      label: "Expert Team",
      value: "200+",
      description: "Qualified professionals",
    },
  ],
};

export const serviceDetails = {
  qualityManagement: {
    title: "Quality Management & Compliance Assurance",
    sections: [
      {
        title: "Manufacturing Quality Systems",
        content:
          "Our entire production process, for both localized reagents and medical consumables, is rigorously governed by adherence to ISO 13485 standards and Good Manufacturing Practice (GMP). This ensures all products meet verifiable global benchmarks for safety and accuracy.",
        bullets: [
          "ISO 13485:2016 Certified Quality Management System",
          "GMP compliant manufacturing facilities",
          "Regular internal and external audits",
          "Continuous quality improvement processes",
        ],
      },
      {
        title: "Supplier Quality Assurance (SQA)",
        content:
          "We maintain stringent quality oversight for all raw materials and components, ensuring the integrity of both localized and distributed equipment.",
        bullets: [
          "Rigorous supplier qualification process",
          "Regular quality audits of suppliers",
          "Material testing and validation",
          "Supply chain transparency and traceability",
        ],
      },
      {
        title: "Regulatory Support",
        content:
          "We provide expert guidance to clients in navigating complex local and international regulatory requirements for IVD devices and laboratory standards, facilitating seamless quality system integration.",
        bullets: [
          "Regulatory pathway consultation",
          "Documentation and submission support",
          "Compliance gap analysis",
          "Post-market surveillance support",
        ],
      },
    ],
  },
  technicalServices: {
    title: "Technical & Engineering Services",
    sections: [
      {
        title: "Installation and Commissioning",
        content:
          "Professional, on-site installation and rigorous testing of all new systems to guarantee immediate operational readiness and optimal performance.",
        bullets: [
          "Site preparation assessment",
          "Professional equipment installation",
          "Performance validation testing",
          "Handover documentation and training",
        ],
      },
      {
        title: "Preventive and Corrective Maintenance (PM/CM)",
        content:
          "We offer structured Preventive Maintenance programs to maximize performance and minimize downtime. Our Corrective Maintenance service provides rapid response for technical issues, supported by outstanding internal service capabilities.",
        bullets: [
          "Scheduled preventive maintenance",
          "24/7 emergency support",
          "Remote diagnostics and troubleshooting",
          "Performance optimization services",
        ],
      },
      {
        title: "Strategic Spare Parts Management",
        content:
          "We maintain a dedicated, strategic inventory of spare parts for all supported instruments, enabling quick repairs and significantly reducing service turn-around time, a critical advantage in regional supply chains.",
        bullets: [
          "Centralized spare parts inventory",
          "Just-in-time delivery system",
          "Critical parts availability guarantee",
          "Parts lifecycle management",
        ],
      },
    ],
  },
  applicationSupport: {
    title: "Application Support and Training",
    sections: [
      {
        title: "Comprehensive User Training",
        content:
          "Specialized training sessions cover the operation, daily maintenance, and quality control procedures for all diagnostic systems.",
        bullets: [
          "On-site and remote training options",
          "Customized training programs",
          "Hands-on practical sessions",
          "Certification upon completion",
        ],
      },
      {
        title: "Application and Workflow Optimization",
        content:
          "Focused training ensures the optimal use of diagnostic reagents, rapid tests, and consumables to achieve accurate clinical results. We also provide expert consultation to help laboratories optimize their diagnostic workflows, from sample collection to final reporting.",
        bullets: [
          "Workflow analysis and optimization",
          "Best practice implementation",
          "Process efficiency improvement",
          "Quality control program setup",
        ],
      },
      {
        title: "Infection Prevention & Control (IPC) Protocols",
        content:
          "We provide training and consultation on the application of sterilization protocols and the effective use of IPC products, ensuring full compliance with international safety and health standards.",
        bullets: [
          "IPC protocol development",
          "Sterilization validation support",
          "Compliance monitoring",
          "Safety audit preparation",
        ],
      },
    ],
  },
};

export const serviceIcons = {
  quality: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  technical:
    "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  training:
    "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
};

export const serviceBenefits = [
  "Reduced operational downtime",
  "Enhanced regulatory compliance",
  "Improved product performance",
  "Cost-effective maintenance",
  "Expert technical support",
  "Comprehensive training programs",
  "Strategic spare parts availability",
  "24/7 customer support",
];
// data/constants.js
export const slider = [
  {
    id: 1,
    name: "Assure Tech",
    img: "assuretech.png",
    description: "Specialized in diagnostic reagents and kits",
    portfolios: [
      {
        name: "Assure Tech Product Catalog",
        url: "/pdfs/assure-tech-catalog.pdf",
        description: "Download Assure Tech full product catalog",
        download: true,
      },
    ],
  },
  {
    id: 2,
    name: "Oxy Pharm",
    img: "oxy-pharm.png",
    description: "Pharmaceutical and medical device company",
    portfolios: [
      {
        name: "Oxy Pharm Product Catalog",
        url: "/pdfs/oxypharm-catalog.pdf",
        description: "Download Oxy Pharm full catalog",
        download: true,
      },
    ],
  },
];

export const partners = [
  {
    name: "Greiner Bio-One",
    slug: "greiner",
    img: "greiner.png",
    description:
      "Greiner is a global leader in medical and laboratory consumables.",
  },
  {
    name: "i-SENS",
    slug: "i-sens",
    img: "i-sens.png",
    description:
      "I-Sens specializes in high-quality diagnostic equipment and biosensors.",
  },
  {
    name: "NeoMedica",
    slug: "neomedica",
    img: "neomedica.png",
    description:
      "NeoMedica provides innovative medical devices and diagnostic solutions.",
    products: [
      {
        category: "5-Part Hematology Analyzers",
        models: [
          {
            catalog: "HM-61",
            model: "Phoenix NNC-61 (5-Diff)",
            img: "phoenix-nnc-61.png",
            specs: {
              principles: `
WBC/DIFF: Flow Cytometry, Semi-conductor, Laser light multi-dimensional cell classification
WBC Analysis: Optical and Impedance
RBC/PLT Analysis: Impedance
HGB test: Cyanide-free reagent colorimetry
            `.trim(),

              parameters: `
5-part differentiation using sheath-only reagent
34 parameters (WBC, LYM%, MON%, NEU%, EOS%, BASO%, LYM#, MON#, NEU#, EOS#, BAS#, RBC, HGB, HCT, MCV, MCH, MCHC, RDW_CV, RDW_SD, PLT, MPV, PDW, PCT, P_LCR, P_LCC)
6 research parameters (ALY%, ALY#, LIC%, LIC#, NRBC%, NRBC#)
2 Histograms (RBC, PLT)
2 Scattergrams (Neutrophils, Eosinophils)
2 3D stereograms
3 reticulocyte parameters (RETIC%, RETIC_ABS, IRF)
            `.trim(),

              mode: "Whole blood, Prediluted, Capillary",

              workingMode: `
4 cyanide-free reagents onboard:
• Diluent  
• Sheath  
• Detergent  
• Lyser
            `.trim(),

              sampleVolume: "Whole blood 20μL, Pre-diluted 20μL",

              apertureDimensions: "WBC 100μm, RBC/PLT 68μm",

              throughput: `
60 samples/hour (sample-by-sample)
24-hour continuous running, auto standby
            `.trim(),

              calibrationMode:
                "Automatic, Whole Blood Calibration, Manual Calibration",

              operatingSystem: "Double WBC counting (Impedance + Optical)",

              dilution: "Available",

              cv: `
WBC ≤ 2.5%
RBC ≤ 2.0%
HGB ≤ 1.5%
MCV ≤ 0.4%
PLT ≤ 5.0%
            `.trim(),

              linearityRange: `
WBC: 0.0–99 ×10³/µL
RBC: 0.00–9.99 ×10⁶/µL
HGB: 0–30 g/dL
MCV: 40–150 fL
PLT: 0–999 ×10³/µL
            `.trim(),

              dataStorage: "Up to 200 results with histograms",

              qcMode: "LJ, X, XR, XB control modes",

              connectivity: "Available",

              interface: "LIS",

              report: "External printer supported",

              alarms:
                "Automatic reagent residual alarm, error messages, pathological flagging",

              display: "10.4-inch touch screen",

              power: "AC 100–240V, 50/60Hz, Fuse 250V/3.15A",

              dimensions: "Dimensions missing, Weight: 35kg",

              languages: "EN, RU, ES, FR, PT",
            },
          },
          {
            catalog: "HM-51-A",
            model: "Phoenix NNC-51 with Autoloader",
            img: "phoenix-nnc-51.png",
            specs: {
              principles: `
WBC/DIFF: Flow cytometry, Semi-conductor, Laser light multi-dimensional cell classification
WBC Analysis: Optical and Impedance
RBC/PLT Analysis: Impedance method
HGB test: Cyanide-free reagent colorimetry
    `.trim(),

              parameters: `
Fully automated 5-diff hematology analyzer (up to 60 samples/hour)
34 parameters (WBC, LYM%, MON%, NEU%, EOS%, BASO%, LYM#, MON#, NEU#, EOS#, BAS#, RBC, HGB, HCT, MCV, MCH, MCHC, RDW_CV, RDW_SD, PLT, MPV, PDW, PCT, P_LCR, P_LCC)
Research parameters (ALY%, ALY#, LIC%, LIC#, NRBC%, NRBC#)
3 reticulocyte parameters: RETIC%, RETIC_ABS, IRF
    `.trim(),

              mode: "Whole blood, Prediluted, Capillary",

              workingMode: `
4 cyanide-free reagents onboard: Diluent, Sheath, Detergent, Lyser
Enclosed puncture sampling
Continuous sampling
50-sample autoloader batch processing
Emergency sample test available anytime
    `.trim(),

              sampleVolume: `
Whole blood: 20μL
Pre-diluted: 20μL
    `.trim(),

              apertureDimensions: `
WBC: 100μm
RBC/PLT: 68μm
    `.trim(),

              throughput: `
Up to 60 samples/hour
50 autoloader positions
    `.trim(),

              calibrationMode: `
Automatic Calibration
Whole Blood Calibration
Manual Calibration
    `.trim(),

              operatingSystem: `
Double WBC counting mode (Impedance & Optical)
    `.trim(),

              dilution: `
Whole blood: WBC/HGB 1:232, RBC/PLT 1:40000
Capillary blood: WBC/HGB 1:400, RBC/PLT 1:45000
    `.trim(),

              cv: `
WBC ≤ 1.5%
RBC ≤ 1.0%
HGB ≤ 1.5%
MCV ≤ 1.0%
HCT ≤ 2.0%
PLT ≤ 4.0%
    `.trim(),

              linearityRange: `
WBC: 0.0–99.9 ×10⁹/L
RBC: 0.1–7 ×10¹²/L
HGB: 0–300 g/dL
PLT: 0–999 ×10⁹/L
    `.trim(),

              dataStorage: "Up to 200 sample results with histograms",

              qcMode: "LJ, X, XR, XB quality control modes",

              connectivity: `
Windows operating systems
2 Histograms (RBC, PLT)
2 Scattergrams (Neutrophils, Eosinophils)
    `.trim(),

              interface: "LIS",

              report: `
External printer supported
Histogram printing option
Warning alarms for probable abnormalities
    `.trim(),

              alarms: `
Automatic reagent residual alarm
Error messages & system warnings
    `.trim(),

              display: `
PC display (14-inch color TFT)
Bi-directional LIS and barcode reader
    `.trim(),

              power: `
220V, 50/60Hz, 300VA
Fuse: 250V / 3.15A
    `.trim(),

              dimensions: `
660 × 560 × 545 mm (W×D×H)
Weight: 73kg
    `.trim(),

              languages: "EN, RU, ES, FR, PL, PT",
            },
          },
          {
            catalog: "HM-5500",
            model: "Phoenix NCC-5500 with Autoloader",
            img: "phoenix-ncc-5500.png",
            specs: {
              principles: `
34 Parameters
3D plot, scattergrams, histograms
    `.trim(),

              parameters: `
Fully automated 5-diff Hematology Analyzer with RETIC Analysis
34 parameters (WBC, LYM%, MON%, NEU%, EOS%, BASO%, LYM#, MON#, NEU#, EOS#, BAS#, RBC, HGB, HCT, MCV, MCH, MCHC, RDW_CV, RDW_SD, PLT, MPV, PDW, PCT, P_LCR, P_LCC)
Research parameters (ALY%, ALY#, LIC%, LIC#, NRBC%, NRBC#)
3 reticulocyte parameters: RETIC%, RETIC_ABS, IRF
    `.trim(),

              mode: "Whole blood, Prediluted, Capillary",

              workingMode: `
Auto sampling and rinsing of the residual blood on the aspiration probe
Avoids operator contact with sample
    `.trim(),

              sampleVolume: `
Autoloader: 50μL
Manual (emergency): 50μL
Pre-diluted mode: 40μL
    `.trim(),

              apertureDimensions: "WBC: 100μm",

              throughput: `
Autoloader: up to 110 samples/hour
Manual mode: up to 100 samples/hour
    `.trim(),

              calibrationMode: `
Automatic Calibration
Whole Blood Calibration
Manual Calibration
    `.trim(),

              operatingSystem: `
Autoloader with automatic sampling device
Capacity: 120 samples
    `.trim(),

              emergencyTesting: `
Intelligent barcoded tube-rack system allows continuous sampling
Two units (WOC & WIC) enabling selection of WBC, RBC, HGB, PLT parameters
Up to 120 samples per batch
Emergency sample can be added anytime
    `.trim(),

              dilution: `
Whole blood: WBC/HGB 1:232, RBC/PLT 1:40000
Capillary blood: WBC/HGB 1:400, RBC/PLT 1:45000
    `.trim(),

              cv: `
WBC ≤ 1.5%
RBC ≤ 1.0%
HGB ≤ 1.5%
MCV ≤ 1.0%
HCT ≤ 2.0%
PLT ≤ 4.0%
    `.trim(),

              linearityRange: `
WBC: 0–99.9 ×10⁹/L
RBC: 0.1–7 ×10¹²/L
HGB: 0–300 g/dL
PLT: 0–999 ×10⁹/L
    `.trim(),

              dataStorage: "More than 200 sample results with histograms",

              qcMode: `
Comprehensive QC program
Supports LJ, X, XR, XB control modes
    `.trim(),

              connectivity: "Windows operating systems",

              interface: "LIS",

              report: `
2 histograms
3 scattergrams
2 3D stereograms
    `.trim(),

              alarms: "Automatic reagent residual alarm",

              display: `
PC display with Windows system
Bi-directional LIS
Barcode reading supported
    `.trim(),

              power: `
220V, 50/60Hz, 300VA
Fuse: 250V / 3.15A
    `.trim(),

              dimensions: `
670mm (H) × 790mm (L) × 690mm (W)
Weight: 91.5kg (Net), 210kg (Gross)
    `.trim(),
            },
          },
        ],
      },

      {
        category: "3-Part Hematology Analyzers",
        models: [
          {
            catalog: "HM-3300",
            model: "Phoenix NNC-3300 (3-Diff)",
            img: "phoenix-nnc-3300.png",
            specs: {
              principles: `
Electrical impedance method for counting
HGB: Photoelectric colorimetry
    `.trim(),

              parameters: `
3-part WBC differentiation
24 parameters including 3 histograms (WBC, RBC, PLT)
WBC, LYM#, MID#, GRAN#, LYM%, MID%, GRAN%, RBC, HGB, HCT, MCV, MCH, MCHC,
RDW-SD, RDW-CV, PLT, MPV, PDW, PCT, P-LCR, P-LCC
    `.trim(),

              mode: "Whole blood, Capillary, Prediluted",

              workingMode: `
Double counting pathway
Independent HGB detection system
    `.trim(),

              sampleVolume: `
Whole blood: 10μL
Pre-diluted: 20μL
    `.trim(),

              apertureDimensions: `
WBC: 100μm
RBC/PLT: 6μm
    `.trim(),

              throughput: `
60 samples/hour
24-hour continuous running
Auto stand-by mode
    `.trim(),

              calibrationMode: `
Manual calibration
Auto calibration
    `.trim(),

              operatingSystem: "Linux operating system",

              dilution: `
Whole blood: WBC/HGB 1:232, RBC/PLT 1:40000
Capillary blood: WBC/HGB 1:400, RBC/PLT 1:45000
    `.trim(),

              cv: `
WBC ≤ 2.0%
RBC ≤ 1.5%
HGB ≤ 1.5%
MCV ≤ 0.5%
HCT ≤ 1.0%
PLT ≤ 4.0%
    `.trim(),

              linearityRange: `
WBC: 0–99.9 ×10⁹/L
RBC: 0.1–7 ×10¹²/L
HGB: 0–300 g/L
PLT: 0–999 ×10⁹/L
    `.trim(),

              dataStorage: "Up to 100,000 sample results including histograms",

              qcMode: "L-J, X, X-R, X-B",

              connectivity: `
USB backup
USB system upgrade
    `.trim(),

              interface: `
RS232
Standard network port
USB
Integrated graphic thermal printer
Parallel port & USB for external printer
    `.trim(),

              report: `
Built-in thermal recorder
Optional external printer
8 report formats
    `.trim(),

              alarms: `
Reagent empty
Waste full
Reagent temperature abnormal
Other system warnings
    `.trim(),

              display: `
10.4" LCD high-quality touch screen
    `.trim(),

              power: "AC 100–240V, 50/60Hz",

              dimensions: `
330 × 530 × 460 mm (W × D × H)
Weight: 25 kg
    `.trim(),

              languages: "EN, RU, SR",
            },
          },
        ],
      },
      {
        category: "Reagents for Neomedica Analyzers",
        models: [
          {
            name: "Phoenix NNC-51 / NCC-5500 (5-Diff) Reagents",
            img: "phoenix-ncc-5500.png",
            reagents: [
              {
                productName: "Neo-U-Diluent",
                catalogNumber: "HM-51-DIL",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "20L",
                shelfLife: "24 Months",
              },
              {
                productName: "Neo-Lyser-WHP",
                catalogNumber: "HM-51-LYS",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "1L",
                shelfLife: "18 Months",
              },
              {
                productName: "Neo-Cleaner",
                catalogNumber: "HM-51-CLR",
                analyte: "Cleaner",
                reagentForm: "Liquid Stable",
                packSize: "20L",
                shelfLife: "18 Months",
              },
              {
                productName: "Neo-U-Sheath",
                catalogNumber: "HM-51-SH",
                analyte: "Cleaner",
                reagentForm: "Liquid Stable",
                packSize: "20L",
                shelfLife: "18 Months",
              },
              {
                productName: "Neo-Probe Cleaner",
                catalogNumber: "HM-51-PRB",
                analyte: "Cleaner",
                reagentForm: "Liquid Stable",
                packSize: "50mL",
                shelfLife: "19 Months",
              },
            ],
          },
          {
            name: "Phoenix NCC-51 (5-Diff) with Autoloader Reagents",
            img: "phoenix-nnc-51.png",
            reagents: [
              {
                productName: "Neo-Diluent E",
                catalogNumber: "HM-51-A-DIL",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "20L",
                shelfLife: "24 Months",
              },
              {
                productName: "Neo-Lyse E-WHP",
                catalogNumber: "HM-51-A-LYS",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "1L",
                shelfLife: "18 Months",
              },
              {
                productName: "Neo-Cleaner E",
                catalogNumber: "HM-51-A-CLR",
                analyte: "Cleaner",
                reagentForm: "Liquid Stable",
                packSize: "20L",
                shelfLife: "18 Months",
              },
              {
                productName: "Neo-Sheath E",
                catalogNumber: "HM-51-A-SH",
                analyte: "Cleaner",
                reagentForm: "Liquid Stable",
                packSize: "20L",
                shelfLife: "18 Months",
              },
              {
                productName: "Neo-Rinse E",
                catalogNumber: "HM-51-A-RIN",
                analyte: "Cleaner",
                reagentForm: "Liquid Stable",
                packSize: "100mL",
                shelfLife: "18 Months",
              },
            ],
          },
          {
            name: "Phoenix NNC-3300 (3-Diff) Reagents",
            img: "phoenix-nnc-3300.png",
            reagents: [
              {
                productName: "Neo Diluent C",
                catalogNumber: "HM-3300-DIL",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "20 L/Ctn (2 x 10 L)",
                shelfLife: "24 Months",
              },
              {
                productName: "Neo Lyse C",
                catalogNumber: "HM-3300-LYS",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "1 L/Bottle",
                shelfLife: "18 Months",
              },
              {
                productName: "Neo Detergent/Cleaner C",
                catalogNumber: "HM-3300-CLR",
                analyte: "Cleaner",
                reagentForm: "Liquid Stable",
                packSize: "20L",
                shelfLife: "18 Months",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Assure Tech",
    slug: "assure-tech",
    img: "assuretech.png",
    description:
      "Assure Tech focuses on rapid diagnostic test development and manufacturing.",
  },
  {
    name: "Drawray",
    slug: "drawray",
    img: "drawray.png",
    description:
      "Drawray manufactures laboratory equipment and clinical diagnostic tools.",
  },
  {
    name: "Dymind",
    slug: "dymind",
    img: "dymind.png",
    description:
      "Dymind provides advanced hematology analyzers and diagnostic solutions.",
    products: [
      {
        category: "8-Part Hematology Analyzers",
        models: [
          {
            catalog: "DH800-AL-8D",
            model: "DH800 AL",
            img: "dh-800-al.png",
            specs: {
              principles:
                "CBC+DIFF/RET/NRBC: Laser scattering Fluorescent method Flow cytometry\nRBC/PLT counting: Hydrodynamic focusing impedance method\nHGB calculating: Cyanide-free colorimetric method",
              parameters:
                "CBC, RET, CBC+RET, CBC+DIFF, CBC+DIFF+RET, CBC+DIFF+PLT-F, CBC+DIFF+RET+PLT-F, \nCBC+DIFF/WBC-3X, CBC+DIFF+WPC, CBC+DIFF+WPC+PLT-F, CBC+DIFF+RET+WPC, CBC+DIFF+RET+WPC+PLT-F, PLT-F",
              detectedParameters:
                "39 reportable parameters (Whole blood): WBC, Neu#, Lym#, Mon#, Eos#, Bas#, Neu%, Lym%, Mon%, Eos%, Bas%, IG#, IG%, NLR, PLR, RBC, HGB, HCT, MCV, MCH, MCHC, RDW-SD, RDW-CV, NRBC#, NRBC%, RET#, RET%, LFR, MFR, HFR, IRF, RHE, PLT, PCT, MPV, PDW, P-LCR, P-LCC, IPF\n7 reportable parameters (Body fluid): TC-BF#, WBC-BF, MN#, PMN#, MN%, PMN%, RBC-BF\n163 researchable parameters (Whole blood) & 11 researchable parameters (Body fluid)\n3 Histograms & 2*3D Scattergrams & 8*2D Scattergrams",
              mode: "Whole blood, capillary blood, pre-diluted, body fluid",
              workingMode:
                "Auto sampling; Manual sampling (Closed); Manual sampling (Open)\nPioneer three-dimensional sampling modes including one automatic mode and two STAT modes\nQ-button for switching common mode enhance operation efficiency",
              sampleVolume:
                "Whole blood: all≤85μL\nCapillary blood: CBC/CBC+DIFF≤27.5μL\nPre-diluted: all≤20μL\nBody fluid: all≤85μL",
              throughput:
                "110 Test/Hour (CBC/CBC+DIFF) & 50 Test/Hour (Body fluid)",
              calibrationMode: "Auto cal and manual",
              operatingSystem: "Linux",
              dilution:
                "Whole blood: WBC/HGB 1:232, RBC/PLT 1:40000\nCapillary blood: WBC/HGB 1:400, RBC/PLT 1:45000",
              cv: "WBC(10^9/L): ≤2.5%(4.00-15.00)\nRBC(10^12/L): ≤1.5% (3.50-6.00)\nHGB(g/L): ≤1.0% (110-180)\nMCV(fL): ≤1.0% (70.0-120)\nPLT(10^9/L): ≤4.0% (100-500)",
              linearityRange:
                "WBC(10^9/L): 0-500\nRBC(10^12/L): 0-8.50\nHGB(g/L): 0-250\nPLT(10^9/L): 0-5000",
              dataStorage: "≥300,000 samples",
              connectivity:
                "New hydrodynamic focusing impedance method decreases for PLT the interference by the microcytes\nDedicated PLT de-clump technology figures out the PLT aggregation issues\nPowerful PLT-F channel provides accurate results for low-value PLT and Immature PLT",
              interface:
                "USB, LAN port and HL7 with bi-direction LIS are available",
              report:
                "Compatible with multiple print formats & user-defined set",
              display: "15.6 inch color screen",
              power:
                "Voltage: AC 100V~240V (±10%)\nFrequency: 50Hz/60Hz（±1 Hz）\nPower: 1000VA",
              dimensions: "W*D*H: 670mm*865mm*873mm, Weight: 115Kg",
            },
            reagents: [
              {
                productName: "D-80LD",
                catalogNumber: "DH800-D-80LD",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "4L",
                shelfLife: "24 Months",
              },
              {
                productName: "D-80FD",
                catalogNumber: "DH800-D-80FD-22ML",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "22mL",
                shelfLife: "24 Months",
              },
              {
                productName: "D-80FD",
                catalogNumber: "DH800-D-80FD-42ML",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "42mL",
                shelfLife: "24 Months",
              },
              {
                productName: "D-80DR",
                catalogNumber: "DH800-D-80DR-500ML",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "500mL",
                shelfLife: "24 Months",
              },
              {
                productName: "D-80DR",
                catalogNumber: "DH800-D-80DR-1L",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "1L",
                shelfLife: "24 Months",
              },
              {
                productName: "D-80FR",
                catalogNumber: "DH800-D-80FR",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "12mL",
                shelfLife: "24 Months",
              },
              {
                productName: "D-80LN",
                catalogNumber: "DH800-D-80LN-2L",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "2L",
                shelfLife: "24 Months",
              },
              {
                productName: "D-80LN",
                catalogNumber: "DH800-D-80LN-4L",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "4L",
                shelfLife: "24 Months",
              },
              {
                productName: "D-80FN",
                catalogNumber: "DH800-D-80FN-12ML",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "12mL",
                shelfLife: "24 Months",
              },
              {
                productName: "D-80FN",
                catalogNumber: "DH800-D-80FN-22ML",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "22mL",
                shelfLife: "24 Months",
              },
              {
                productName: "D-80FP",
                catalogNumber: "DH800-D-80FP",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "12mL",
                shelfLife: "24 Months",
              },
              {
                productName: "CLE-P Cleanser",
                catalogNumber: "DH800-CLE-P-4MLx10",
                analyte: "Cleaner",
                reagentForm: "Liquid Stable",
                packSize: "4mL*10",
                shelfLife: "18 Months",
              },
              {
                productName: "CLE-P Cleanser",
                catalogNumber: "DH800-CLE-P-50ML",
                analyte: "Cleaner",
                reagentForm: "Liquid Stable",
                packSize: "50mL",
                shelfLife: "18 Months",
              },
              {
                productName: "CLE-P Cleanser",
                catalogNumber: "DH800-CLE-P-100MLx2",
                analyte: "Cleaner",
                reagentForm: "Liquid Stable",
                packSize: "100mL*2",
                shelfLife: "18 Months",
              },
            ],
          },
        ],
      },
      {
        category: "6-Part Hematology Analyzers",
        models: [
          {
            catalog: "DH615-RET-6D",
            model: "DH615 with RET",
            img: "dh-615-ret.png",
            specs: {
              principles:
                "CBC+DIFF/RET: Semi-conductor laser scattering & fluorescent staining method\nWBC/RBC/PLT counting: Impedance\nHGB calculating: Cyanide-free colorimetric method",
              parameters: "CBC, RET, CBC+DIFF, CBC+RET, CBC+DIFF+RET",
              detectedParameters:
                "35 reportable parameters: WBC, Lym%, Mon%, Neu%, Bas%, Eos%, IG%, Lym#, Mon#, Neu#, Eos#, Bas#, IG#, RBC, HGB, HCT, MCV, MCH, MCHC, RDW-CV, RDW-SD, PLT, MPV, PDW, PCT, P-LCR, P-LCC, RET%, RET#, RHE, IRF, LFR, MFR, HFR, IPF\n29 researchable parameters: WBC-D,TNC-D, IME%, IME#, NLR, PLR, d-NLR, HFC#, HFC%, NRBC#, NRBC%, Micro%, Micro#, Macro%, Macro#, INR#, INR%, H-NR%, L-NR%, PDW-CV, RBC-O, PLT-I, WBC-O, MRV, RPI, IPF#, H-IPF, FRC#, FRC%",
              mode: "Whole blood, capillary blood",
              workingMode: "Automatic & manual modes",
              sampleVolume:
                "Whole blood mode: CBC: 20μL; CBC+DIFF: 30μL; CBC+DIFF+RET: 35μL",
              throughput: "Up to 100 Test/Hour",
              calibrationMode: "Automatic",
              operatingSystem:
                "Semi-conductor-based laser scattering Technology + Fluorescence Method + Flow Cytometry",
              dilution:
                "Whole blood: WBC/HGB 1:232, RBC/PLT 1:40000\nCapillary blood: WBC/HGB 1:400, RBC/PLT 1:45000",
              dataStorage: "≥150,000 samples",
              connectivity:
                "Various analyzer combination including double analyzers and customized workflow",
              interface:
                "USB, LAN port and HL7 with bi-direction LIS are available",
              report:
                "Compatible with multiple print formats with user-defined set",
              display: "12.1 inch color screen",
              power:
                "Voltage: 100V~240V (±10%)\nFrequency: 50Hz/60Hz（±1 Hz）\nPower: 660VA",
              dimensions: "W*D*H: 660mm*820mm*870mm, Weight: 100Kg",
            },
            reagents: [
              {
                productName: "DIL-N",
                catalogNumber: "DH615-DIL-N",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "20L",
                shelfLife: "24 Months",
              },
              {
                productName: "DIN-R",
                catalogNumber: "DH615-DIN-R-500ML",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "500mL",
                shelfLife: "24 Months",
              },
              {
                productName: "DIN-R",
                catalogNumber: "DH615-DIN-R-1L",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "1L",
                shelfLife: "24 Months",
              },
              {
                productName: "LYN-D",
                catalogNumber: "DH615-LYN-D-500ML",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "500mL",
                shelfLife: "18 Months",
              },
              {
                productName: "LYN-D",
                catalogNumber: "DH615-LYN-D-1L",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "1L",
                shelfLife: "18 Months",
              },
              {
                productName: "LYN-G",
                catalogNumber: "DH615-LYN-G-200ML",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "200mL",
                shelfLife: "18 Months",
              },
              {
                productName: "LYN-G",
                catalogNumber: "DH615-LYN-G-500ML",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "500mL",
                shelfLife: "18 Months",
              },
              {
                productName: "FDN-D",
                catalogNumber: "DH615-FDN-D",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "22mL",
                shelfLife: "18 Months",
              },
              {
                productName: "FDN-R",
                catalogNumber: "DH615-FDN-R-6ML",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "6mL",
                shelfLife: "18 Months",
              },
              {
                productName: "FDN-R",
                catalogNumber: "DH615-FDN-R-12ML",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "12mL",
                shelfLife: "18 Months",
              },
              {
                productName: "CLE-P Cleanser",
                catalogNumber: "DH615-CLE-P-4MLx10",
                analyte: "Cleaner",
                reagentForm: "Liquid Stable",
                packSize: "4mL*10",
                shelfLife: "18 Months",
              },
              {
                productName: "CLE-P Cleanser",
                catalogNumber: "DH615-CLE-P-50ML",
                analyte: "Cleaner",
                reagentForm: "Liquid Stable",
                packSize: "50ml",
                shelfLife: "18 Months",
              },
            ],
          },
        ],
      },
      {
        category: "5-Part Hematology Analyzers",
        models: [
          {
            catalog: "DH76-AL-5D",
            model: "DH76 AL",
            img: "dh-76-al.png",
            specs: {
              principles:
                "3-angel semiconductor laser scatter, flow cytometry (WBC Diff)\nImpedance method (WBC/RBC/PLT)\nCyanide free (HGB)",
              parameters: "CBC and CBC+Diff",
              detectedParameters:
                "29 parameters: 25 report parameters (WBC, LYM%, LYM#, NEU%, NEU#, MON%, MON#, EOS%, EOS#, BAS%, BAS#, RBC, HGB, HCT, MCV, MCH, MCHC, RDW-CV, RDW-SD, PLT, PDW, MPV, PCT, P-LCR, P-LCC)\n4 research parameters (ALY#, ALY%, LIC#, LIC%)\nOne 3D scattergram, three 2D scattergrams, three histograms",
              mode: "Closed and open vial modes, emergency mode available",
              workingMode:
                "Venous whole blood, capillary whole blood and pre-diluted",
              sampleVolume: "≤20μL",
              throughput:
                "80 samples per hour (Up to 90 samples per hour in CBC mode)",
              calibrationMode: "Automatic",
              operatingSystem: "Fully Automatic Intelligent Technology",
              cv: "WBC≤2.0%\nRBC≤1.5%\nHGB≤1.5%\nPLT≤4.0%\nMCV≤1.0%",
              linearityRange:
                "WBC(0.00-300.00)x10^9/L\nHGB(0-250)G/L\nHCT(0.0-67.0%)\nRBC(0.00-8.50)x10^12/L\nPLT(0-3000)X10^9/L",
              dataStorage: "Up to 100,000 results",
              interface: "Bi-directional LIS connection",
              report: "Internal Barcode scanning, Customized templates print",
              alarms: "Up to 20 user-defined pathological alarm ranges",
              display: "N/A, connected to PC software",
              power: "100V-240V, ≤ 250VA, 50/60 Hz, Weight: 56Kg",
              dimensions: "650mm(L)x610mm(W)x550mm(H)",
            },
            reagents: [
              {
                productName: "DIL-A Diluent",
                catalogNumber: "DH76-DIL-A",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "20L",
                shelfLife: "24 Months",
              },
              {
                productName: "LYA-1 Lyse",
                catalogNumber: "DH76-LYA-1",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "500ml",
                shelfLife: "18 Months",
              },
              {
                productName: "LYA-2 Lyse",
                catalogNumber: "DH76-LYA-2",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "500ml",
                shelfLife: "18 Months",
              },
              {
                productName: "LYA-3 Lyse",
                catalogNumber: "DH76-LYA-3",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "1L",
                shelfLife: "18 Months",
              },
            ],
          },
          {
            catalog: "DF55-5D",
            model: "DF55 (5-Diff)",
            img: "df-55.png",
            specs: {
              principles:
                "Flow cytometry(FCM)+ Tri-angle scatter for 5-part differential analysis and WBC counting\nImpedance method for RBC and PLT counting\nCyanide free colorimetry for HGB test",
              detectedParameters:
                "25 reportable parameters: WBC, Neu#, Lym#, Mon#, Eos#, Bas#, Neu%, Lym%, Mon%, Eos%, Bas%, RBC, HGB, HCT, MCV, MCH, MCHC, RDW-SD, RDW-CV, PLT, MPV, PDW, PCT, P-LCR, P-LCC\n6 Research parameters: ALY#, ALY%, LIC#, LIC%, NRBC#, NRBC%\n3 histograms for WBC, RBC and PLT\nThree DIFF scattergrams and one BASO scattergram for WBC differentiation",
              mode: "Whole blood, capillary whole blood and pre-diluted modes",
              workingMode:
                "Multi sample modes: whole blood, capillary whole blood and pre-diluted modes",
              sampleVolume: "20 μL",
              throughput: "Up to 60 Test/hour",
              calibrationMode: "Automatic",
              cv: "WBC≤2.0%(4.0-15.0x10^9/L)\nRBC≤1.5%(3.5-6.0x10^12/L)\nHGB≤1.5%(110-180g/L)\nMCV≤1%(70-120fL)\nPLT≤6.0%(100-149x10^9/L) or PLT≤4.0%(150-500x10^9/L)",
              linearityRange:
                "WBC(0.00-300.00)x10^9/L\nRBC(0-8.50X10^12)/L\nHGB(0-250g/L)\nPLT(0-3000)X10^9/L\nHCT:0.0-67%",
              dataStorage: "Up to 100,000 records",
              connectivity:
                "LAN port supports HL7 protocol, Support bi-directional LIS",
              interface: "4 USB ports and 1 LAN port",
              report:
                "Internal printer: 57mm thermal printer with various formats, External printer: compatible with multiply laser/inkjet printers",
              display: "10.4 inches TFT touch screen",
              power: "100V-240V~ ; 50/60Hz, ≤200VA",
              dimensions: "364mm(L)×498mm(H)×431mm(D), Weight: 28KG",
            },
            reagents: [
              {
                productName: "DIL-C Diluent",
                catalogNumber: "DF55-DIL-C",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "20L",
                shelfLife: "24 Months",
              },
              {
                productName: "LYC-1 Lyse",
                catalogNumber: "DF55-LYC-1",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "200mL",
                shelfLife: "18 Months",
              },
              {
                productName: "LYC-2 Lyse",
                catalogNumber: "DF55-LYC-2",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "500ml",
                shelfLife: "18 Months",
              },
            ],
          },
        ],
      },
      {
        category: "3-Part Hematology Analyzers",
        models: [
          {
            catalog: "DH33-3D",
            model: "DH33",
            img: "dh-33.png",
            specs: {
              principles:
                "Pulse baseline tracking technology, waveform discrimination technology and intelligent floating threshold technology",
              detectedParameters:
                "21 parameters: WBC, Lym#, Mid#, Gran#, Lym%, Mid%, Gran%, RBC, HGB, HCT, MCV, MCH, MCHC, RDW-CV, RDW-SD, PLT, MPV, PDW, PCT, P-LCR, P-LCC\n3 histograms, alarm for abnormal erythrocytes, leukocyte and platelet",
              mode: "Venous whole blood, capillary whole blood and pre-diluted",
              workingMode: "Dual-channel for counting",
              sampleVolume: "Minimum volume 9 μL",
              throughput: "60 samples/hour",
              calibrationMode: "Automatic",
              operatingSystem:
                "Impedance method (WBC/RBC/PLT) and cyanide free colorimetric method (HGB)",
              dilution: "Internal Lyse position",
              cv: "WBC≤2.0%\nRBC≤1.5%\nHGB≤1.5%\nPLT≤4.0%\nMCV≤1.0%",
              linearityRange:
                "WBC (0.00-300.00)×10^9/L\nRBC (0.00-8.50)×10^12/L\nHGB (0-250)g/L\nPLT (0-3000)×10^9/L\nHCT 0.0-67.0%",
              dataStorage:
                "50,000 sample results, including parameter, histogram and patient information",
              interface: "4 USB ports and Bi-directional LIS connection",
              report:
                "Built-in thermal printer, supports various types of printers. Muti-built in print templates available",
              display:
                "10.4 inch TFT touch screen. Humanized interface, easy operation",
              power: "100V-240V~ ; 50/60Hz",
              dimensions: "364mm(L)×417mm(W)×477mm(H), Weight: ≤25KG",
            },
            reagents: [
              {
                productName: "DIL-E Diluent",
                catalogNumber: "DH33-DIL-E",
                analyte: "Diluent",
                reagentForm: "Liquid Stable",
                packSize: "20L",
                shelfLife: "24 Months",
              },
              {
                productName: "LYE-1 Lyse",
                catalogNumber: "DH33-LYE-1",
                analyte: "Lysing Agent",
                reagentForm: "Liquid Stable",
                packSize: "500 ml",
                shelfLife: "18 Months",
              },
              {
                productName: "CEL-P Cleanser",
                catalogNumber: "DH33-CEL-P",
                analyte: "Cleaner",
                reagentForm: "Liquid Stable",
                packSize: "50mL",
                shelfLife: "18 Months",
              },
            ],
          },
        ],
      },
    ],
    universalReagents: {
      description:
        "Elhoda is a leading Egyptian manufacturer of high-quality, universal reagents for hematology analyzers. We specialize in providing compatible solutions that offer reliable performance and cost-effectiveness for a wide range of leading hematology analyzers. Our products are formulated to meet the demanding needs of laboratories across the African region, ensuring accurate and consistent results.",
      compatibilityNote:
        "All liquid stable reagents have an on-board stability of up to 60 days (60 days after opening) when stored according to manufacturer's instructions on the analyzer",
      brands: [
        {
          brand: "ABBOTT hematology analyzers",
          models: "CD3000, CD3500, CD3700",
          reagents: [
            {
              productName: "Neo-Diluent CD5",
              catalogNumber: "HM-CD-DIL",
              analyte: "Diluent",
              reagentForm: "Liquid Stable",
              packSize: "20L",
              shelfLife: "24 Months",
            },
            {
              productName: "Neo-WIC/HGB Lyse",
              catalogNumber: "HM-CD-LYS",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "5L",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-Detergent CD5",
              catalogNumber: "HM-CD-DET",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "20L",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-Sheath",
              catalogNumber: "HM-CD-SH",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "20L",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-EZ-Cleaner",
              catalogNumber: "HM-CD-EZ",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "50mL",
              shelfLife: "18 Months",
            },
          ],
        },
        {
          brand: "ABX HORIBA Hematology Analyzers",
          models:
            "MICROS 60, MICROS ES60, 45/OT18, BAYER ADVIA 60/ Horiba LC550",
          reagents: [
            {
              productName: "Neo Diluent-M",
              catalogNumber: "HM-ABX-DIL-M",
              analyte: "Diluent",
              reagentForm: "Liquid Stable",
              packSize: "20L",
              shelfLife: "24 Months",
            },
            {
              productName: "Neo M-Lyse",
              catalogNumber: "HM-ABX-LYS-M",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "1L",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-Cleaner -M",
              catalogNumber: "HM-ABX-CLR-M",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "1L",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-Cleaner-C",
              catalogNumber: "HM-ABX-CLR-C",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "500mL",
              shelfLife: "18 Months",
            },
          ],
        },
        {
          brand: "ABX HORIBA Hematology Analyzers",
          models: "PENTRA60, PENTRA80",
          reagents: [
            {
              productName: "Neo-Diluent-P",
              catalogNumber: "HM-PEN-DIL",
              analyte: "Diluent",
              reagentForm: "Liquid Stable",
              packSize: "20L",
              shelfLife: "24 Months",
            },
            {
              productName: "Neo-a-Lyse",
              catalogNumber: "HM-PEN-LYS-A",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "400 mL",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-EO-Lyse",
              catalogNumber: "HM-PEN-LYS-EO",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "1L",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-BA-Lyse2",
              catalogNumber: "HM-PEN-LYS-BA2",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "1L",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-Cleaner-P",
              catalogNumber: "HM-PEN-CLR-P",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "1L",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-Cleaner-C",
              catalogNumber: "HM-PEN-CLR-C",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "1L",
              shelfLife: "18 Months",
            },
          ],
        },
        {
          brand: "BECKMAN COULTER Hematology Analyzers",
          models: "LH-750, GENS-S, STKS, HmX, MAXM",
          reagents: [
            {
              productName: "Neo-Isotonic Diluent",
              catalogNumber: "HM-BC-DIL",
              analyte: "Diluent",
              reagentForm: "Liquid Stable",
              packSize: "20L",
              shelfLife: "24 Months",
            },
            {
              productName: "Neo-Lyse Diff",
              catalogNumber: "HM-BC-LYS-D",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "1L",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-Lyse Pack",
              catalogNumber: "HM-BC-LYS-P",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "1900mL+500mL",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-E-Cleaner",
              catalogNumber: "HM-BC-E-CLR",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "5L",
              shelfLife: "18 Months",
            },
          ],
        },
        {
          brand: "MINDRAY Hematology Analyzers",
          models:
            "BC 3000, BC 3000+, BC 2800, BC 2600, BC 2300, BC 3200, BC 3600",
          reagents: [
            {
              productName: "Neo- Diluent BC3",
              catalogNumber: "HM-MDR-DIL-3",
              analyte: "Diluent",
              reagentForm: "Liquid Stable",
              packSize: "20L",
              shelfLife: "24 Months",
            },
            {
              productName: "Neo-Rinse & HGB Ref",
              catalogNumber: "HM-MDR-RIN",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "20L",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-Lyse BC3",
              catalogNumber: "HM-MDR-LYS-3",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "500mL",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-CE-Clean",
              catalogNumber: "HM-MDR-CE-CLR",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "100 mL",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-Probe Cleaner",
              catalogNumber: "HM-MDR-PB-CLR",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "100 mL",
              shelfLife: "18 Months",
            },
          ],
        },
        {
          brand: "SYSMEX Hematology Analyzers",
          models: "XT-1800i/2000i",
          reagents: [
            {
              productName: "Neo-Diluent-ST",
              catalogNumber: "HM-SYS-DIL-ST",
              analyte: "Diluent",
              reagentForm: "Liquid Stable",
              packSize: "20L",
              shelfLife: "24 Months",
            },
            {
              productName: "Neo-SLS Lyser",
              catalogNumber: "HM-SYS-LYS-SLS",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "500ml",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-4DS-Lyser",
              catalogNumber: "HM-SYS-LYS-4DS",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "500mL",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-4DN-Lyser",
              catalogNumber: "HM-SYS-LYS-4DN",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "42ml",
              shelfLife: "19 Months",
            },
            {
              productName: "Neo-FB-Lyser",
              catalogNumber: "HM-SYS-LYS-FB",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "5L",
              shelfLife: "20 Months",
            },
            {
              productName: "Neo-CeIN-Cleaner",
              catalogNumber: "HM-SYS-CLR-C",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "100 mL",
              shelfLife: "18 Months",
            },
          ],
        },
        {
          brand: "SYSMEX Hematology Analyzers",
          models: "XE-2100, XS-800i/1000I",
          reagents: [
            {
              productName: "Neo-Diluent-ST",
              catalogNumber: "HM-SYS-DIL-ST2",
              analyte: "Diluent",
              reagentForm: "Liquid Stable",
              packSize: "20L",
              shelfLife: "24 Months",
            },
            {
              productName: "Neo-SLS Lyser",
              catalogNumber: "HM-SYS-LYS-SLS2",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "500ml",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-4DS-Lyser",
              catalogNumber: "HM-SYS-LYS-4DS2",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "500mL",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-4DN-Lyser",
              catalogNumber: "HM-SYS-LYS-4DN2",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "42ml",
              shelfLife: "19 Months",
            },
            {
              productName: "Neo-CeIN-Cleaner",
              catalogNumber: "HM-SYS-CLR-C2",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "100 mL",
              shelfLife: "18 Months",
            },
          ],
        },
        {
          brand: "SYSMEX Hematology Analyzers",
          models: "KX-21, POCH 100i, XP 300",
          reagents: [
            {
              productName: "Neo-Diluent-ST",
              catalogNumber: "HM-SYS-DIL-ST2",
              analyte: "Diluent",
              reagentForm: "Liquid Stable",
              packSize: "20L",
              shelfLife: "24 Months",
            },
            {
              productName: "Neo-Lyser-WH",
              catalogNumber: "HM-SYS-LYS-WH",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "500mL",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-CeIN-Cleaner",
              catalogNumber: "HM-SYS-CLR-C2",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "100 mL",
              shelfLife: "18 Months",
            },
          ],
        },
        {
          brand: "NIHON KOHDEN Hematology Analyzers",
          models: "MEK-6318, 6400, 6420, 6410, 6510, 6500",
          reagents: [
            {
              productName: "Neo-Diluent NK",
              catalogNumber: "HM-NK-DIL",
              analyte: "Diluent",
              reagentForm: "Liquid Stable",
              packSize: "20L",
              shelfLife: "24 Months",
            },
            {
              productName: "Neo-Rinse NK",
              catalogNumber: "HM-NK-RIN",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "5L",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-Lysis NK",
              catalogNumber: "HM-NK-LYS",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "500mL",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-Cleanac NK",
              catalogNumber: "HM-NK-CLN",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "5L",
              shelfLife: "18 Months",
            },
          ],
        },
        {
          brand: "ORPHEE Hematology Analyzers",
          models: "ORPHEE MYTHIC 18",
          reagents: [
            {
              productName: "Neo-Diluent-MT",
              catalogNumber: "HM-ORP-DIL",
              analyte: "Diluent",
              reagentForm: "Liquid Stable",
              packSize: "20L",
              shelfLife: "24 Months",
            },
            {
              productName: "Neo-MT-Lyse",
              catalogNumber: "HM-ORP-LYS",
              analyte: "Lysing Agent",
              reagentForm: "Liquid Stable",
              packSize: "1L",
              shelfLife: "18 Months",
            },
            {
              productName: "Neo-Cleaner-MT",
              catalogNumber: "HM-ORP-CLR",
              analyte: "Cleaner",
              reagentForm: "Liquid Stable",
              packSize: "1L",
              shelfLife: "18 Months",
            },
          ],
        },
      ],
    },
    controlsCalibrators: {
      description: "Hematology controls & calibrators",
      compatibilityNote:
        "Our hematology controls and calibrators are validated for compatibility with a wide range of 3-part and 5-part hematology analyzers used on the worldwide market, including but not limited to Abbott, ABX, Nihon Kohden, Sysmex, Beckman Coulter, Mindray, URIT, and Hycel. For detailed information on specific instrument compatibility, please consult the product insert.",
      stability:
        "All liquid stable reagents have an on-board stability of up to 28 days (28 days after opening) when stored according to manufacturer's instructions on the analyzer",
      storageCondition: "Storage in Refrigerator",
      products: [
        {
          productName: "Neo Control N",
          catalogNumber: "HM-C-N",
          controlLevel: "Normal",
          reagentForm: "Liquid Stable",
          packSize: "1×3 ml, 3×3 ml, 6×3 ml, 12×3 ml",
          shelfLife: "3 Months",
        },
        {
          productName: "Neo Control L",
          catalogNumber: "HM-C-L",
          controlLevel: "Low",
          reagentForm: "Liquid Stable",
          packSize: "1×3 ml, 3×3 ml, 6×3 ml, 12×3 ml",
          shelfLife: "3 Months",
        },
        {
          productName: "Neo Control H",
          catalogNumber: "HM-C-H",
          controlLevel: "High",
          reagentForm: "Liquid Stable",
          packSize: "1×3 ml, 3×3 ml, 6×3 ml, 12×3 ml",
          shelfLife: "3 Months",
        },
      ],
    },
  },
  {
    name: "URIT",
    slug: "urit",
    img: "urit.png",
    description:
      "URIT is known for hematology analyzers and medical laboratory equipment.",
  },
  {
    name: "Parasure",
    slug: "parasure",
    img: "parasure.png",
    description:
      "Parasure develops infection control and hygiene medical products.",
    products: [
      {
        category: "Steam Sterilization Assurance Systems",
        models: [
          {
            name: "Autoclave Tape for Steam Sterilization",
            img: "autoclave-tape.png",
            specs: {
              classification: "EN-ISO 11140-1 (Type 1 Process Indicator)",
              intendedUse:
                "Distinguishes processed from unprocessed items by visually confirming exposure to steam.",
              substrateMaterial: "Medical Grade Crepe Paper",
              indicatorChange:
                "Permanent visual color change from White/Off-White to Brown",
              operatingTemperature: "121°C to 134°C",
              minimumExposure:
                "As per specific sterilization cycles (e.g., 134°C for 3.5 minutes or equivalent)",
              storageConditions: "10°C to 30°C",
              relativeHumidity: "30% to 70%",
              shelfLife: "2 Years from Date of Manufacture",
              traceability:
                "Lot No. and Expiration Date printed on the core, Production Date on the outer carton.",
              recordableInfo:
                "Surface allows for writing with standard pen or ParaSure PIP marker for batch tracking.",
              features:
                "Excellent adhesion to various wraps (paper, linen, non-woven). Latex-free.",
            },
            reagents: [
              {
                productName: "Steam Autoclave Tape 12 mm×50 m",
                catalogNumber: "PS 1575",
                analyte: "Process Indicator",
                reagentForm: "Tape",
                packSize: "1 Roll",
                shelfLife: "2 Years",
              },
              {
                productName: "Steam Autoclave Tape 18 mm×50 m",
                catalogNumber: "PS 1510",
                analyte: "Process Indicator",
                reagentForm: "Tape",
                packSize: "1 Roll",
                shelfLife: "2 Years",
              },
              {
                productName: "Steam Autoclave Tape 25 mm×50 m",
                catalogNumber: "PS 1520",
                analyte: "Process Indicator",
                reagentForm: "Tape",
                packSize: "1 Roll",
                shelfLife: "2 Years",
              },
            ],
          },
          {
            name: "PARASURE® Bowie & Dick Test Systems",
            img: "bowie-dick-test.png",
            specs: {
              classification: "EN-ISO 11140-1 (Type 2), EN ISO 11140-4",
              coreFunction:
                "Diagnoses air removal, wet steam, superheated steam, and presence of non-condensable gases.",
              operatingTemperature: "134°C to 137°C",
              time: "3.3 min−3.5 min (minimum holding time)",
              indicator:
                "Both internal (diagnostic) and external (process indicator) included.",
              substrate: "Silk Screen Printed, Lead-Free",
              colorChange:
                "Clear and accurate change from Pink to Black (Internal Indicator)",
              features:
                "Independently validated to mirror the performance of the original towel pack. Non-toxic, single-use, disposable.",
            },
            reagents: [
              {
                productName: "Daily Bowie & Dick Test Pack: Steam Penetration",
                catalogNumber: "PS 1020",
                analyte: "Specific Test Indicator",
                reagentForm: "Test Pack",
                packSize: "1 Box",
                shelfLife: "As per manufacturer",
              },
              {
                productName: "A4 Format Bowie & Dick Test",
                catalogNumber: "PS 1030",
                analyte: "Specific Test Indicator",
                reagentForm: "Single Sheet",
                packSize: "Box of 50 Sheets",
                shelfLife: "As per manufacturer",
              },
            ],
          },
          {
            name: "PARASURE® Type 4 Multivariable Chemical Indicator for Steam",
            img: "type4-steam.png",
            specs: {
              classification:
                "ISO 11140-1 Part 1 Type 4 (Multi-Variable Indicator)",
              compliance: "CE Marked, UDI Numbered, Patented Design",
              application:
                "For use in every tray, peel-pouch, or item during steam sterilization cycles.",
              operatingRange: "121°C to 134°C",
              monitoredParameters:
                "Reacts to two or more critical parameters (Time, Temperature, and Saturated Steam).",
              colorChange:
                "Clear, accurate change from Pink (Unprocessed) to Black (Processed).",
              failCriteria:
                "Any remaining pink color on the indicator lines reflects a FAIL.",
              material: "Laminated Strip",
              safety:
                "Non-Toxic formulation, a key advantage over many existing Type 4 indicators.",
              storage:
                "Store between 10°C - 38°C in the resealable bag provided. No special storage necessary post-exposure.",
              traceability:
                "Unique identification code (LOT number) printed on each indicator strip and packaging label.",
            },
            reagents: [
              {
                productName: "Type 4 Multivariable Indicator for Steam",
                catalogNumber: "PS 1100",
                analyte: "Multi-Variable Indicator",
                reagentForm: "Single strip",
                packSize: "200 strips or 400 strips",
                shelfLife: "As per manufacturer",
              },
              {
                productName: "Type 4 Multi-Parameter Indicator",
                catalogNumber: "PS 1110",
                analyte: "Multi-Variable Indicator",
                reagentForm: "Single strip",
                packSize: "200 strips or 400 strips",
                shelfLife: "As per manufacturer",
              },
            ],
          },
          {
            name: "PARASURE® Type 4 Chemical Indicator for VHP / H2O2 / Plasma",
            img: "type4-vhp.png",
            specs: {
              classification:
                "ISO 11140-1 Part 1 Type 4 (Multi-Variable Indicator)",
              compliance: "CE Marked, UDI Numbered, Patented Design",
              application:
                "For use in every pack, peel-pouch, or tray processed in low-temperature VHP, H2O2, and Plasma sterilizers.",
              monitoredParameters:
                "Indicates exposure to two or more critical parameters of the VHP/H2O2/Plasma process.",
              colorChange:
                "Clear, accurate change from Red or orange (Unprocessed) to Yellow (Successfully Processed - Reference Color).",
              substrateMaterial:
                "Tyvek® (Ensures maximum penetration of the sterilant)",
              interpretation:
                "Easy to read and interpret: the indicator color changes to the reference color after a successful sterilization cycle.",
              safety: "Non-Toxic, Single-Use Only.",
              shelfLife: "3 Years from Date of Manufacture.",
              storage:
                "Store in its original packaging between 0°C and 40°C and max RH of 70%. Do not expose to direct sunlight or moisture.",
              traceability:
                "LOT number and expiration date available on the product label.",
            },
            reagents: [
              {
                productName: "Type 4 Chemical Indicator for VHP/Plasma",
                catalogNumber: "PS 1820",
                analyte: "Multi-Variable Indicator",
                reagentForm: "Single strip",
                packSize: "Box of 200 pieces",
                shelfLife: "3 Years",
              },
            ],
          },
          {
            name: "PARASURE® Type 5 Integrating Chemical Indicators",
            img: "type5-integrator.png",
            specs: {
              classification:
                "ISO 11140-1 Part 1 Type 5 (Integrating Indicator)",
              mechanism:
                "A chemical pellet melts and travels through wicking paper.",
              resultInterpretation:
                "PASS (ACCEPT): The bar moves completely past the REJECT/FAIL area to the ACCEPT window. FAIL (REJECT): The bar remains in the REJECT/FAIL area.",
              operatingRange: "121°C to 134°C",
              complianceDesign:
                "CE Marked, UDI Numbered, Patented Design, Non-toxic.",
              storage:
                "Store between 10°C - 38°C in the resealable bag provided.",
            },
            reagents: [
              {
                productName:
                  "Integrating Chemical Indicator Moving Line - Type 5",
                catalogNumber: "PS 1830",
                analyte: "Integrating Indicator",
                reagentForm: "Single strip",
                packSize: "Box of 500 pieces",
                shelfLife: "As per manufacturer",
              },
              {
                productName: "Type 5 Integrator Steam (Triangle Indicator)",
                catalogNumber: "PS 1840",
                analyte: "Integrating Indicator",
                reagentForm: "Single strip",
                packSize: "Bag of 250 Indicators",
                shelfLife: "As per manufacturer",
              },
            ],
          },
          {
            name: "PARASURE® Type 6 Emulating Indicator",
            img: "type6-emulating.png",
            specs: {
              classification: "EN ISO 11140-1 Type 6 (Emulating Indicator)",
              complianceDesign:
                "CE Marked, Non-toxic / Lead-free, Easy to interpret and record.",
              application:
                "For use in every tray or item to confirm cycle-specific conditions were met.",
              monitoredParameters:
                "Monitors all three critical parameters: Time, Temperature, and Steam saturation.",
              calibration:
                "Specifically calibrated to individual cycle requirements: 3.5 minutes at 134°C and 15 minutes at 121°C",
              colorChange:
                "Clear and abrupt color change from Pale Pink (Unprocessed) to Teal or Darker (Successfully Processed).",
              failCriteria:
                "Evidence of original pink color on the large rectangle indicates a FAIL.",
              storage:
                "Store between 10°C - 38°C in the resealable bag provided. No special storage necessary post-exposure.",
              traceability:
                "Unique identification code (LOT number) printed on each indicator strip and packaging label.",
            },
            reagents: [
              {
                productName: "Type 6 Emulating Indicator (3.5 min at 134°C)",
                catalogNumber: "PS 1110",
                analyte: "Emulating Indicator",
                reagentForm: "Single strip",
                packSize: "Box of 200 Indicators",
                shelfLife: "As per manufacturer",
              },
              {
                productName: "Type 6 Emulating Indicator (5.3 min at 134°C)",
                catalogNumber: "PS 1130",
                analyte: "Emulating Indicator",
                reagentForm: "Single strip",
                packSize: "Available upon request",
                shelfLife: "As per manufacturer",
              },
            ],
          },
          {
            name: "PARASURE® EN 867-5 Helix Device",
            img: "helix-device.png",
            specs: {
              classification: "EN 867 Part 5 (Hollow Load Test Device)",
              indicatorClassification:
                "EN-ISO 11140-1 (Type 2 Specific Test Indicator)",
              universalApplication:
                "For daily testing in all Type B vacuum-assisted steam sterilizers (ISO 13060 compliance).",
              operatingTemperature: "134°C / 132°C",
              time: "3.5 min / 4 min (Cycle time validation)",
              systemComposition:
                "Combination of a 1.5 meter hollow lumen device (2 mm inner diameter) and a self-adhesive indicator.",
              indicatorChange: "Clear visual change from Pink to Black.",
              usability:
                "Complete system (Device and 250 indicators). Easy to interpret.",
              safety: "Non-toxic / Lead-free.",
              storageConditions: "10°C - 30°C at 30% - 70% RH.",
              recordableInformation: "Pass/Fail result can be easily recorded.",
              usage:
                "Device comes complete with 250 cycles worth of indicators.",
            },
            reagents: [
              {
                productName: "EN 867-5 Helix Device",
                catalogNumber: "PS 1400",
                analyte: "Hollow Load Test Device",
                reagentForm: "Complete System",
                packSize: "1 Device and 250 Indicators",
                shelfLife: "As per manufacturer",
              },
            ],
          },
        ],
      },
      {
        category: "Biological Indicators (BIs)",
        models: [
          {
            name: "PARASURE® Self-Contained Biological Indicators (SCBI) for Steam",
            img: "scbi-steam.png",
            specs: {
              classification: "Conforms to EN ISO 11138",
              sporeOrganism:
                "Geobacillus stearothermophilus (ATCC 7953) at a population of 10^6",
              medium:
                "Sealed glass ampoule containing specialty-formulated soybean casein digest culture medium.",
              colorIndicator:
                "Turns from Purple to Yellow when spore growth is present (Sterilization failure).",
              readoutTime:
                "Produces final results within 24 hours via standard incubation.",
              interpretation:
                "Dramatic color change (Purple to Yellow) is easy to interpret. No color change indicates adequate sterilization.",
              incubation:
                "Requires incubation at an adjustable temperature unit offering 55°C to 60°C (60°C specifically recommended for steam BIs).",
              safety: "Non-toxic.",
              shelfLifeStorage:
                "Store at room temperature. Do not desiccate. Do not use after the expiration date printed on the package.",
            },
            reagents: [
              {
                productName:
                  "Self-Contained Biological Indicators for Steam Sterilization",
                catalogNumber: "PS 1900",
                analyte: "Biological Indicator",
                reagentForm: "Self-Contained Unit",
                packSize: "10 boxes of 100 units (Total 1000 indicators)",
                shelfLife: "As per manufacturer",
              },
            ],
          },
          {
            name: "PARASURE PS1930 Incubator",
            img: "incubator.png",
            specs: {
              usage:
                "Incubation of Biological Indicators at 37°C±2°C or 60°C±2°C (Switchable temperatures for EO and Steam BIs).",
              capacity: "21 metal positions (0.9 cm diameter, 3.3 cm deep).",
              safetyCompliance:
                "Complies with Low Voltage Directive 2014/35/EU and EMC Directive 2014/30/EU.",
              voltage: "100−240 V AC (Universal voltage range)",
              power: "15 W (Average power: 8 W)",
              selfLife: "5 Years",
              keyFeature:
                "Designed for use only with Biological Indicators (not compatible with fluorescence readout BIs).",
            },
            reagents: [
              {
                productName: "Biological Indicator Incubator",
                catalogNumber: "PS 1930",
                analyte: "Incubation Device",
                reagentForm: "Electronic Device",
                packSize: "Single Unit",
                shelfLife: "5 Years",
              },
            ],
          },
          {
            name: "PARASURE® Superfast Biological Indicator System",
            img: "superfast-bi.png",
            specs: {
              compatibility:
                "Compatible with Steam and VHP sterilization processes",
              readoutTime: "20 minutes for rapid results",
              indicatorOrganism: "Geobacillus Stearothermophilus",
              classification: "Conforms to EN ISO 11138 – Parts 1 & 3",
              keyFeature:
                "Each BI has a barcode for reader traceability. No laboratory required.",
            },
            reagents: [
              {
                productName: "Superfast BI for Steam",
                catalogNumber: "PS 1950",
                analyte: "Rapid Biological Indicator",
                reagentForm: "Self-Contained Unit",
                packSize: "As per manufacturer",
                shelfLife: "As per manufacturer",
              },
              {
                productName: "Superfast BI for Vaporised Hydrogen Peroxide",
                catalogNumber: "PS 1960",
                analyte: "Rapid Biological Indicator",
                reagentForm: "Self-Contained Unit",
                packSize: "As per manufacturer",
                shelfLife: "As per manufacturer",
              },
              {
                productName: "Rapid Challenge Steam Test Pack",
                catalogNumber: "PS 1995",
                analyte: "Test Pack",
                reagentForm: "Complete System",
                packSize: "Contains BI and Class 5 Integrator",
                shelfLife: "As per manufacturer",
              },
            ],
          },
          {
            name: "PARASURE® Rapid Readout Biological System",
            img: "rapid-readout-system.png",
            specs: {
              compatibility:
                "Compatible with the six major sterilization BI types (Steam, VHP, EO, LTSF, etc.).",
              readoutTime: "Judgment Time: 4 – 240 minutes (Cycle-dependent).",
              incubationSlots: "8 slots for simultaneous incubation.",
              incubationTemp:
                "58°C±2°C and 36°C±1°C (Adjustable for different spore types).",
              display: "7 inch TFT Touch Screen.",
              ratedPower: "20 W",
              connectivity: "LAN, USB, DC Input/Output.",
              dimensions: "246 mm×214 mm×100 mm (Net Weight: 1 kg)",
              system: "Closed system",
            },
            reagents: [
              {
                productName: "Rapid Readout Biological System Reader",
                catalogNumber: "PS 1940",
                analyte: "Reading Device",
                reagentForm: "Electronic System",
                packSize: "Single Unit",
                shelfLife: "As per manufacturer",
              },
            ],
          },
          {
            name: "PARASURE® Mini Auto-reader System",
            img: "mini-autoreader.png",
            specs: {
              compatibility:
                "Monitors Steam, VHP/H2O2, LTSF, and EO sterilization processes (requires compatible RRBI).",
              readoutPrinciple:
                "Spectrum analysis technology monitors fluorescence changes to judge spore survival.",
              readoutTime:
                "Provides positive readout results in 20 minutes (Steam/VHP models), 1 hour (LTSF), 3 hours (Steam models), and 4 hours (EO models).",
              incubationTemp:
                "Adjustable temperature control: 58°C or 37°C (User-adjustable for specific indicator requirements).",
              alarmSystem:
                "Visual and Sound Alarm system (includes screen, light changing, and buzzer).",
              externalFeatures:
                "Includes a Printer, Scanner, and Digital Tube Display on the operation panel.",
              connections:
                "Ethernet Port and USB port for data transfer and communication.",
            },
            reagents: [
              {
                productName: "Mini Auto-reader System",
                catalogNumber: "PS 1970",
                analyte: "Reading Device",
                reagentForm: "Electronic System",
                packSize: "Single Unit",
                shelfLife: "As per manufacturer",
              },
            ],
          },
        ],
      },
      {
        category: "Cleaning and Documentation Assurance Systems",
        models: [
          {
            name: "PARASURE® Protein Test Kit",
            img: "protein-test-kit.png",
            specs: {
              intendedPurpose:
                "Rapid detection of residual protein residues on surfaces of washer/disinfectors, ultrasonic cleaners, endoscopes, and surgical instruments.",
              conformsTo:
                "Recommendations in EN ISO 15883 (Requirements for washer-disinfectors).",
              methodology: "Dye-binding solution used in clinical chemistry.",
              sensitivity:
                "Highly sensitive, able to detect protein residues to within 1μg (one microgram).",
              resultTime:
                "Clear and almost instantaneous result within 10 seconds (no incubation required).",
              interpretation:
                "Color Indicator: The protein test liquid will change to shades of Blue if protein residue is present. No color change (liquid remains brown/yellow) indicates protein residue has not been detected.",
              positiveControl:
                "Supplied to confirm the reagent's efficacy and provide a reference color for a highly positive reaction to protein (Bright Blue).",
              frequencyOfUse:
                "As required by local procedure and compliance standards (e.g., daily, weekly, or after maintenance).",
              numberOfUses: "Single Use (one test per swab/vial).",
              storage:
                "Store at room temperature. If refrigerated, shelf life is extended from 6 months to 2 years.",
              suppliedWith:
                "Instructions for Use (I.F.U), Swabs (short or EndoSwabs), Reagent Vials, and Positive Control.",
            },
            reagents: [
              {
                productName: "Protein Test Kit (Standard)",
                catalogNumber: "PS 1700",
                analyte: "Protein Detection",
                reagentForm: "Test Kit",
                packSize:
                  "Box of 25 tests with 25 short swabs & 2 positive controls",
                shelfLife: "6 months (2 years if refrigerated)",
              },
              {
                productName: "ParaScope Protein Test Kit (1.9 mm Head)",
                catalogNumber: "PS 1710",
                analyte: "Protein Detection",
                reagentForm: "Test Kit",
                packSize:
                  "Box of 25 tests with 25 EndoSwabs & 1 positive control",
                shelfLife: "6 months (2 years if refrigerated)",
              },
              {
                productName: "ParaScope Protein Test Kit (2.8 mm Head)",
                catalogNumber: "PS 1720",
                analyte: "Protein Detection",
                reagentForm: "Test Kit",
                packSize:
                  "Box of 25 tests with 25 EndoSwabs & 1 positive control",
                shelfLife: "6 months (2 years if refrigerated)",
              },
              {
                productName: "ParaScope Protein Test Kit (3.7 mm Head)",
                catalogNumber: "PS 1730",
                analyte: "Protein Detection",
                reagentForm: "Test Kit",
                packSize:
                  "Box of 25 tests with 25 EndoSwabs & 1 positive control",
                shelfLife: "6 months (2 years if refrigerated)",
              },
            ],
          },
          {
            name: "PARASURE® CEI (Cleaning Efficacy Indicator)",
            img: "cleaning-efficacy.png",
            specs: {
              classification: "Conforms to ISO 15883",
              application:
                "Monitoring cleaning efficiency of washer-disinfectors and ultrasonic machines.",
              substrateMaterial:
                "Special cleaning indicator made of stainless steel.",
              testSoil:
                "Contaminated with a quantitative measure of test soil simulation of human blood (blood and additives).",
              usability:
                "Routine monitor/validation tool, single-use, easy to use, and easy to read.",
              shelfLife: "18 months.",
            },
            reagents: [
              {
                productName: "ParaSure CEI (Cleaning Efficacy Indicator)",
                catalogNumber: "PS 1600",
                analyte: "Cleaning Efficacy",
                reagentForm: "Indicator",
                packSize: "Box of 50 indicators",
                shelfLife: "18 months",
              },
            ],
          },
          {
            name: "PARASURE® Documentation Label System",
            img: "documentation-label.png",
            specs: {
              classification: "Conforms to EN ISO 11140-1 Type 1",
              operatingTemp: "121°C - 134°C Steam",
              indicator: "Clear color change from pink to brown for steam.",
              usage: "Yes, but can be used as part of a record system.",
              safety: "Non-toxic, Lead free.",
              adhesive: "Non-toxic/Lead free Adhesive.",
              labelFunction:
                "Duplex Label for effective sterilization process record keeping.",
            },
            reagents: [
              {
                productName: "Duplex 3 Line Documentation Labels",
                catalogNumber: "PS 1500",
                analyte: "Documentation",
                reagentForm: "Labels",
                packSize: "30 rolls of 400 labels/carton",
                shelfLife: "As per manufacturer",
              },
              {
                productName: "3 Line Documentation Label Gun",
                catalogNumber: "PS 1530",
                analyte: "Application Device",
                reagentForm: "Mechanical Device",
                packSize: "Single Unit",
                shelfLife: "N/A",
              },
              {
                productName: "Ink Cartridge for Label Gun",
                catalogNumber: "PS 1540",
                analyte: "Ink Supply",
                reagentForm: "Ink Cartridge",
                packSize: "Single Unit",
                shelfLife: "As per manufacturer",
              },
            ],
          },
          {
            name: "PARASURE® ULTRASONIC CAVICHECK",
            img: "ultrasonic-cavicheck.png",
            specs: {
              productType: "Ultrasonic Washer Test (Performance Monitor)",
              mechanism:
                "Pre-prepared test showing immediate results via colour change.",
              resultIndicators:
                "Blue (FAIL/Negative result - Insufficient energy) to Yellow (PASS/Positive result - Sufficient energy).",
              efficacyDetection: "Detects sufficient energy for cavitation.",
              standardPerformance:
                "Average time for a colour change is 6 min @ 27kHz.",
              warningIndicator: "A slower change will indicate a weak spot.",
              archiving: "Suitable for archiving",
              instructionsForUse: "1 PCS IFU",
            },
            reagents: [
              {
                productName: "ULTRASONIC CAVICHECK",
                catalogNumber: "PS-2221",
                analyte: "Ultrasonic Performance",
                reagentForm: "Test Kit",
                packSize: "30 PCS Tests + 30 PCS Archived Labels",
                shelfLife: "As per manufacturer",
              },
            ],
          },
          {
            name: "PARACHLOR® Effervescent Disinfectant Tablets",
            img: "parachlor-tablets.png",
            specs: {
              productType: "Effervescent Disinfectant Tablets",
              activeIngredient: "Registered as US EPA.",
              manufacturing:
                "Manufactured in a Good Manufacturing Practice facility in conformance with European Standards.",
              shelfLife: "Tablets: 3 years. Granules: 2 years.",
              safetySustainability:
                "100% biodegradable. pH same as human skin, will not burn or sting. Surface-friendly; will not corrode like bleach and will not leave residue like Quats.",
              efficiency:
                "The biocidal effectiveness is maintained until all the 'bound' chlorine is consumed.",
              format:
                "Available in 4 tablet sizes (5,17,25, and 87) and a 500 g granule tub.",
            },
            reagents: [
              {
                productName: "PARACHLOR Tablets 1.7 concentration",
                catalogNumber: "N/A",
                analyte: "Disinfectant",
                reagentForm: "Tablets",
                packSize: "Granule tub of 200 Tablets",
                shelfLife: "3 years",
              },
              {
                productName: "PARACHLOR Tablets 2.5 concentration",
                catalogNumber: "N/A",
                analyte: "Disinfectant",
                reagentForm: "Tablets",
                packSize: "Granule tub of 100 Tablets",
                shelfLife: "3 years",
              },
            ],
          },
        ],
      },
      {
        category: "Instrument & Scope Reprocessing",
        models: [
          {
            name: "Parazyme Neutral Enzymatic Detergent",
            img: "parazyme-detergent.png",
            specs: {
              productType: "High-Performance Enzymatic Detergent",
              primaryUse:
                "Pre-treatment and cleaning of surgical instruments and medical devices prior to disinfection and sterilization.",
              formulaPH: "Neutral pH",
              instrumentCompatibility:
                "Gentle on instruments and compatible with all types of materials.",
              waterQuality: "Effective in all water qualities (hard or soft).",
              disinfectantCompatibility:
                "Compatible with all high-level disinfectants (HLDs).",
            },
            reagents: [
              {
                productName: "Parazyme Neutral Enzymatic Detergent",
                catalogNumber: "N/A",
                analyte: "Enzymatic Detergent",
                reagentForm: "Liquid",
                packSize: "Gallon of 5 Liters",
                shelfLife: "As per manufacturer",
              },
            ],
          },
          {
            name: "InstaClean Neutral Pre-Clean Kit",
            img: "instaclean-kit.png",
            specs: {
              productType:
                "Ready-to-use Neutral, Non-Enzymatic Pre-Cleaning Kit",
              systemComponents:
                "Integrated pre-mixed neutral solution and Contoured Sponge.",
              regulatoryStatus: "CE Marked",
              volumePerPouch: "500 ml of pre-mixed neutral detergent.",
              pHValue: "7.0 to 7.5 (Neutral pH)",
              enzymeContent: "Non-enzymatic",
              shelfLife: "2 years from date of manufacture",
              toxicity: "Non-toxic",
              numberOfUses: "Single use",
            },
            reagents: [
              {
                productName: "InstaClean Neutral Pre-Clean Kit",
                catalogNumber: "PS2300",
                analyte: "Pre-Cleaning Solution",
                reagentForm: "Ready-to-Use Kit",
                packSize: "Box of 25 bags",
                shelfLife: "2 years",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Oxy Pharm",
    slug: "oxy-pharm",
    img: "oxy-pharm.png",
    description:
      "Oxy Pharm specializes in disinfection technology and medical sanitation systems.",
    products: [
      {
        category:
          "Environmental Decontamination: Portable Aerial Surface Bio-disinfection Devices",
        models: [
          {
            catalog: "NOCOSPRAY®",
            model: "Portable Aerial Surface Bio-Disinfection Device",
            img: "nocospray.png",
            specs: {
              classification:
                "Manufactured in France by OxyPharm according to ISO 14698",
              application: "Surface bio-disinfection",
              treatmentVolume: "Treatments of rooms from 10 to 1,000 m3",
              maximumTreatmentVolume: "1,000 m3",
              outputSpeed: "80 m/s",
              averageLiquidFlowRate: "1,000 ml/h",
              emptyWeight: "5.9 kg",
              power: "1,000 W",
              compatibility:
                "Disinfectant bottles (1 L): Nocolyse, Nocolyse+, Nocolyse Food. Insecticide bottles (1 L): Oxyppy, Oxyppy+",
              keyAdvantage:
                "Guaranteed Time Saving: No preparation required before treatment and no need to wipe or ventilate afterward",
            },
          },
          {
            catalog: "STAINLESS STEEL NOCOSPRAY®",
            model: "Portable Aerial Surface Bio-Disinfection Device",
            img: "nocolyse-12.png",
            specs: {
              classification:
                "Manufactured in France by OxyPharm according to ISO 18485",
              maximumTreatmentVolume: "1,000 m3",
              treatmentVolumeRange: "10 to 1,000 m3",
              emptyWeight: "6.5 kg",
              power: "1,000 W",
              outputSpeed: "80 m/s",
              averageLiquidFlowRate: "1,000 ml/h",
              compatibility:
                "Disinfectant bottles (1 L): Nocolyse, Nocolyse+, Nocolyse Food, Nocolyse One Shot. Insecticide bottles (1 L): Oxyppy, Oxyppy+",
              keyAdvantage:
                "Guaranteed Time Saving: No preparation required before treatment (except for cleaning) or after treatment (no need to wipe or ventilate)",
            },
          },
        ],
      },
      {
        category: "NOCOLYSE® Bio-Disinfectants for Surfaces",
        models: [
          {
            catalog: "NOCOLYSE 6% H₂O₂",
            model: "Hydrogen Peroxide & Silver-Based Solution",
            img: "nocolyse-6.png",
            specs: {
              productType: "BIO-disinfectant for surfaces",
              composition:
                "Stabilized hydrogen peroxide in solution 6% (60ml/l) and Silver 17 ppm",
              compatibility:
                "Used exclusively with NOCOTECH diffusion appliances (NOCOSPRAY or NOCOMAX)",
              availableVersions:
                "Neutral fragrance, Mint fragrance, or Nocodor fragrance (mix of essential oils destroying smells)",
              shelfLife:
                "Closed original packaging: 2 years from manufacturing date. Once opened: 2 months from opening date",
              effectivenessStandard:
                "Protocols for curative use conform to results obtained in laboratory tests conducted according to NF T 72 281 norm (November 2014)",
            },
            packaging: [
              {
                productDescription: "Neutral",
                productCode: "4000.005",
                packageContents: "5 Litre Canister",
              },
            ],
          },
          {
            catalog: "NOCOLYSE ONE SHOT 12% H₂O₂",
            model: "BIO-disinfectant",
            img: "nocolyse-one-shot.png",
            specs: {
              productType: "NOCOLYSE ONE SHOT BIO-disinfectant",
              composition:
                "Stabilized hydrogen peroxide in solution 12% (120ml/l) and Silver 17 ppm",
              compatibility:
                "Used exclusively with NOCOTECH diffusion appliances",
              effectiveness:
                "Enables surface disinfection treatments effective against bactericidal, fungicidal, virucidal, yeasticidal, tuberculocidal, and sporicidal activity",
            },
            packaging: [
              {
                productDescription: "Neutral",
                productCode: "4010.005",
                packageContents: "5 Litre Canister",
              },
            ],
          },
        ],
      },
      {
        category: "NOCOMAX EASY® Dry Mist Diffusion Device",
        models: [
          {
            catalog: "NOCOMAX EASY®",
            model: "Dry Mist Diffusion Device",
            img: "nocomax-easy.png",
            specs: {
              technology: "Developed around a heating and ionizing turbine",
              function:
                "Spreads disinfectants and insecticides in the form of dry mist",
              environmentalConditions:
                "Temperature 0°C to 50°C, Hygrometry 25% to 75%, Atmospheric Pressure 800 to 1060 hectopascals",
              volumeTreated: "Max: 20,000 m3, Min: 500 m3",
              mobility: "Easily movable thanks to its wheels",
              compatiblePackaging: "Disinfectants & Insecticides 20 L cans",
              diffusionOutputs: "4 (Diffuser nose/Venturi x4)",
              rotationSpeed: "22,000 trs/min",
              averageLiquidFlow: "6 L/h",
              suitableEnvironments:
                "All environments, including the food industry",
              adjustableFeature:
                "Can be angled up to 45° max (for full room treatment)",
              electricalSpecification: "230 V mono + T, 2000 W, 50 to 60 Hertz",
              deviceWeight: "43.4 kg",
            },
            packaging: [
              {
                productCode: "PSDUNLNE20",
                productDescription: "NOCOLYSE 20 L",
                packageContents: "20L Can",
              },
              {
                productCode: "PSDUNLF020",
                productDescription: "NOCOLYSE FOOD 20 L",
                packageContents: "20L Can",
              },
              {
                productCode: "PSDUNLOS20",
                productDescription: "NOCOLYSE ONE SHOT 20 L",
                packageContents: "20L Can",
              },
              {
                productCode: "PSILO20",
                productDescription: "OXYPY 20 L",
                packageContents: "20L Can",
              },
              {
                productCode: "PSILO20",
                productDescription: "OXYPY + 20 L",
                packageContents: "20L Can",
              },
            ],
          },
        ],
      },
    ],
  },

  // blue
  {
    name: "DiaSure_blue",
    slug: "dia-sure",
    img: "dia-sure-blue.png",
    description:
      "Elhoda trade & supplies IVD product line features a comprehensive portfolio of reliable diagnostic tools, including rapid test kits, that empower healthcare professionals across Africa to perform swift and accurate diagnoses for infectious diseases in diverse clinical settings.\n\nThrough a strategic partnership with Assurtech, a recognized global leader in rapid diagnostic solutions, we are uniquely positioned to serve the diagnostic needs of the African healthcare market. Our collaboration ensures that every product adheres to stringent international quality standards, while enabling local production to offer cost-effective and readily available solutions tailored to the region's specific needs.\n\nWe manufacture a wide range of rapid test kits; all produced in a certified facility and designed for dependable performance. Our focus is on providing timely and efficient screening tools that support public health and clinical management initiatives across the African continent.",
    certificates: ["ISO 13485", "CE Mark", "WHO Prequalification"],
    products: [
      {
        category: "Drugs of Abuse (DOA) Rapid Tests",
        models: [
          {
            catalog: "THC",
            model: "Marijuana Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "50 ng/mL",
              kitFormat: "Cassette",
              packageSize: "48T/96T",
            },
          },
          {
            catalog: "TCA",
            model: "Tricyclic Antidepressant Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "1,000 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "OPI / MOP",
            model: "Opiate Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL or 2000 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "PPX",
            model: "Propoxyphene Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "PCP",
            model: "Phencyclidine Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "25 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "OXY",
            model: "Oxycodone Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "100 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "MTD",
            model: "Methadone Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "MDMA",
            model: "MDMA Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "500 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "MET",
            model: "Methamphetamine Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "1000 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "COC",
            model: "Cocaine Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "COT",
            model: "Cotinine Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "100 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "BUP",
            model: "Buprenorphine Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "10 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "BZO",
            model: "Benzodiazepine Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "BAR",
            model: "Barbiturate Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "AMP",
            model: "Amphetamine Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "1000 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "6-MAM",
            model: "6-MAM Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "10 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "TML",
            model: "Tramadol Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "100 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "PGB",
            model: "Pregabalin Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "MDPV",
            model: "MDPV Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "500 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "MQL",
            model: "Methaqualone Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "KET",
            model: "Ketamine Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "1,000 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "K3 / K2",
            model: "K3 Synthetic Cannabinoids Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "25 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "FYL",
            model: "Fentanyl Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "20 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "DIA",
            model: "Diazepam Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "ALP",
            model: "Alprazolam Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "ZOP",
            model: "Zopiclone Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "200 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "ZAL",
            model: "Zaleplon Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "100 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "ZOL",
            model: "Zolpidem Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "20 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "TPM",
            model: "Tropicamide Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "200 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "INN/MDA",
            model: "Tenamfetamine Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "500 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "TAP",
            model: "Tapentadol Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "200 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "TLD",
            model: "Tilidine Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "100 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "TZD",
            model: "Trazodone Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "NFYL",
            model: "Norfentanyl Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "10 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "MPD",
            model: "Methylphenidate Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "100 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "MOR",
            model: "Morphine Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "MEP",
            model: "Mephedrone Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "500 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "MDPHP",
            model: "MDPV Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "500 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "MCAT",
            model: "Methcathinone Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "500 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "LSD/LSD- 25",
            model: "LSD Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "20 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "KRA",
            model: "Kratom Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "K4",
            model: "K4 Synthetic Cannabinoids Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "25 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "HMO",
            model: "Hydromorphone Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "GAB",
            model: "Gabapentin Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "1000 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "ETG",
            model: "Ethyl Glucuronide Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "500 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "SOMA",
            model: "Carisoprodol Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "50 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "CLO",
            model: "Clonazepam Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "CFYL",
            model: "Carfentanyl Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "20 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "CAT",
            model: "Cathine Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "500 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "CAF",
            model: "Caffeine Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "2500 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "ACL",
            model: "7-Amino Clonazepam Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "300 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "α-PVP",
            model: "α-PVP Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "500 ng/mL",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "ACET",
            model: "Acetaminophen Test",
            specs: {
              specimenType: "Urine",
              cutOffConcentration: "500 ng/mL",
              kitFormat: "Cassette",
            },
          },
        ],
      },
      {
        category: "Drugs of Abuse (DOA) Multi-panel Rapid Tests",
        models: [
          {
            catalog: "Multi-Drug Integrated Cup",
            model: "7-Panel Cup with Adulterants",
            specs: {
              panelConfiguration: "7-Panel",
              analyteList:
                "Creatinine, Nitrite, Glutaraldehyde, pH, Specific Gravity, Oxidants, and Pyridinium Chlorochromate.",
              specimenType: "Urine",
              kitFormat: "Integrated Cup",
              packageSize: "25T",
            },
          },
          {
            catalog: "Urine Drugs Test Kit",
            model: "24-Panel Cup",
            specs: {
              panelConfiguration: "24-Panel",
              analyteList:
                "ACE, APVP, BUP, CAF, CFYL, COT, ETG, K2, K3, MCAT, MDPV, MEP, MES, MQL, MTD, NFYL, OPI, PPX, SOMA, TCA, TLD, ZAL, ZOP, ALC",
              specimenType: "Urine",
              kitFormat: "Integrated Cup",
              packageSize: "25T",
            },
          },
          {
            catalog: "Multi-Dipstick Drugs Panel",
            model: "3-Panel Dipstick Panel",
            specs: {
              panelConfiguration: "3-Panel",
              analyteList:
                "Morphine, Methamphetamine, and Amphetamine & Alcohol",
              specimenType: "Urine",
              kitFormat: "Multi-Dipstick Panel",
              packageSize: "25T",
            },
          },
          {
            catalog: "Multi-Line Drugs Device",
            model: "15-Panel Dipstick",
            specs: {
              panelConfiguration: "15-Panel",
              analyteList: "15 analytes",
              specimenType: "Urine",
              kitFormat: "Integrated Cup",
              packageSize: "25T",
            },
          },
        ],
      },
      {
        category: "Infectious Disease: COVID-19 Rapid Tests",
        models: [
          {
            catalog: "SARS Ag-RDT",
            model: "SARS-CoV-2 Antigen Rapid Test",
            specs: {
              specimenType: "Nasal, Nasopharyngeal, or Oropharyngeal Swabs",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "COVID Ag-RDT",
            model: "COVID-19 Antigen Rapid Test Device",
            specs: {
              specimenType: "Nasal, Nasopharyngeal, or Oropharyngeal Swabs",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "COVID-19 Ag Saliva",
            model: "COVID-19 Antigen Saliva Test",
            specs: {
              specimenType: "Saliva",
              detection: "Qualitative detection",
              kitFormat: "Card Device, Cassette",
            },
          },
          {
            catalog: "COVID Ag-RDT (For Self-testing)",
            model: "COVID-19 Antigen Test Kit (Self-Test)",
            specs: {
              specimenType: "Nasal Swabs",
              detection: "Qualitative detection",
              kitFormat: "Kit with Instructions for Lay Users",
            },
          },
          {
            catalog: "COVID-19 IgG/IgM",
            model: "COVID-19 IgG/IgM Antibody Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "SARS-CoV-2 nAb (FIA)",
            model: "SARS-CoV-2 Neutralizing Antibody Test (FIA)",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette (for use with FIA Analyzer)",
            },
          },
          {
            catalog: "COVID-19 Ag (FIA)",
            model: "COVID-19 Antigen Test (FIA)",
            specs: {
              specimenType: "Nasopharyngeal, Oropharyngeal, and Sputum Swabs",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette (for use with FIA Analyzer)",
            },
          },
        ],
      },
      {
        category: "Infectious Disease: Respiratory Disease",
        models: [
          {
            catalog: "SPN Ag",
            model: "Streptococcus Pneumoniae Antigen Test",
            specs: {
              specimenType: "Urine",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "GAS",
            model: "Group A Streptococcus Test",
            specs: {
              specimenType: "Throat Swab",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "RSV Ag",
            model: "Respiratory Syncytial Virus Test",
            specs: {
              specimenType: "Nasal, Nasopharyngeal Swabs",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Myco IgG/IgM",
            model: "Mycoplasma Pneumoniae IgG/IgM Combo",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Legionella UAT",
            model: "Legionella Urinary Antigen Test",
            specs: {
              specimenType: "Urine",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Flu A/B",
            model: "Influenza A & B Test",
            specs: {
              specimenType: "Nasal, Nasopharyngeal Swabs",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "ADV Ag",
            model: "Adenovirus Rapid Test",
            specs: {
              specimenType: "Nasopharyngeal, Oropharyngeal, and Sputum Swabs",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
        ],
      },
      {
        category: "Infectious Disease: Tropical Diseases",
        models: [
          {
            catalog: "TB IgG/IgM/IgA",
            model: "Tuberculosis Antibody Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Typhoid Ab combo",
            model: "Typhoid Antibody Combo Test",
            specs: {
              specimenType: "Serum, Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Leishmania IgG/IgM Combo",
            model: "Leishmaniasis Antibody Combo Test",
            specs: {
              specimenType: "Serum, Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Filariasis IgG/IgM Combo",
            model: "Filariasis Antibody Combo Test",
            specs: {
              specimenType: "Serum, Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Malaria Ag Pf/Pan",
            model: "Malaria Test (Pf/Pv)",
            specs: {
              specimenType: "Whole Blood",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Malaria Ag Pf",
            model: "Malaria Pf Antigen Test",
            specs: {
              specimenType: "Whole Blood",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Dengue IgG/IgM/NS1 Combo",
            model: "Dengue Combo Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Dengue NS1 Ag",
            model: "Dengue NS1 Antigen Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Dengue IgG/IgM Combo",
            model: "Dengue IgG/IgM Combo Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "T. cruzi Ab",
            model: "Chagas Antibody Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Zika/Chik IgG/IgM Combo",
            model: "Zika/Chikungunya/Dengue Combo Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Zika IgG/IgM Combo",
            model: "Zika IgG/IgM Combo Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "CHIK IgG/IgM",
            model: "Chikungunya IgG/IgM Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
        ],
      },
      {
        category: "Infectious Disease: Blood borne Pathogens",
        models: [
          {
            catalog: "HIV 1/2 Ab",
            model: "HIV 1/2 Ab Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "HIV 5-in-1",
            model: "HIV 5-in-1 Combo Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "HCV Ab",
            model: "Hepatitis C Virus Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "HBV Combo",
            model: "Hepatitis B Virus Combo Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "HBcAb",
            model: "Hepatitis B (HBV) Core Ab Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "HBeAg",
            model: "Hepatitis B e-Antigen Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "HBsAg",
            model: "Hepatitis B s-Antigen Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "HBeAb",
            model: "Hepatitis B e-Antibody Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "HBsAb",
            model: "Hepatitis B s-Antibody Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "HBsAg/HCV/HIV",
            model: "3-in-1 Combo Rapid Test",
            specs: {
              specimenType: "Serum, Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "HBsAg/HCV",
            model: "Hepatitis B s-Antigen & HCV 2-in-1 Combo",
            specs: {
              specimenType: "Serum, Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "Syphilis/HIV 1/2",
            model: "Syphilis and HIV 1 & 2 2-in-1 Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "Syphilis Ab",
            model: "Syphilis Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
        ],
      },
      {
        category: "Infectious Disease: Gastrointestinal Tract Infections",
        models: [
          {
            catalog: "Shigella Ag",
            model: "Shigella Antigen Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "S. typhi/paratyphi Ag",
            model: "Salmonella typhi/paratyphi Ag Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "Gastro Combo",
            model: "Rota/Adeno/Noro/Astro Combo Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "Rota/Adeno Combo",
            model: "Rota/Adeno Combo Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "RV Ag",
            model: "Rotavirus Rapid Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "Norovirus Ag",
            model: "Norovirus Antigen Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "HP/TF/FOB Combo",
            model: "H. pylori and FOB Combo Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "HEV IgM",
            model: "Hepatitis E Virus IgM Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "HAV IgG/IgM Combo",
            model: "Hepatitis A Virus IgG/IgM Combo Test",
            specs: {
              specimenType: "Serum, Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "H. pylori Ag",
            model: "H. pylori Antigen Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "H. pylori Ab IgG",
            model: "H. pylori Antibody IgG Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "Giardia Lamblia Ag",
            model: "Giardia Lamblia Antigen Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "E. Histolytica Ag",
            model: "E. Histolytica Antigen Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "EHG Combo",
            model: "EHEC Combo Test (E. histolytica + Crypto + Giardia)",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "E. coli O157 Ag",
            model: "E. coli O157 Antigen Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "V. cholerae O1 Ag",
            model: "Vibrio cholerae O1/O139 Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "Crypto/Giardia Ag combo",
            model: "Crypto/Giardia Combo Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "Cryptosporidium Ag",
            model: "Cryptosporidium Antigen Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "C. Difficile Toxin A/B/GDH",
            model: "C. difficile Toxin A/B and GDH Combo Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "C. difficile GDH Ag",
            model: "C. difficile GDH Antigen Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "C. difficile A/B",
            model: "C. difficile Toxin A/B Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "Campy Ag",
            model: "Campylobacter Antigen Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "Astro Ag",
            model: "Astrovirus Antigen Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "Adeno Ag",
            model: "Adenovirus Antigen Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
        ],
      },
      {
        category:
          "Infectious Disease: Sexually Transmitted Disease and Prenatal Care",
        models: [
          {
            catalog: "HBsAg",
            model: "HBsAg Rapid Test",
            specs: {
              specimenType:
                "Serum, Plasma, Vaginal/Rectal Swabs, Swabs from Newborns",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "40T",
            },
          },
          {
            catalog: "Strep B Ag",
            model: "Group B Strep Antigen Test",
            specs: {
              specimenType: "Vaginal or Rectal Swabs",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "40T",
            },
          },
          {
            catalog: "HSV-II IgG/IgM",
            model: "HSV-II IgG and IgM Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "40T",
            },
          },
          {
            catalog: "HSV-I IgG/IgM",
            model: "HSV-I IgG and IgM Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "40T",
            },
          },
          {
            catalog: "Rubella IgG/IgM",
            model: "Rubella IgG and IgM Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "40T",
            },
          },
          {
            catalog: "CMV IgG/IgM",
            model: "Cytomegalovirus IgG and IgM Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "40T",
            },
          },
          {
            catalog: "Toxo IgG/IgM",
            model: "Toxoplasmosis IgG and IgM Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "40T",
            },
          },
          {
            catalog: "TORCH IgG/IgM",
            model: "TORCH IgG and IgM Combo Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "40T",
            },
          },
          {
            catalog: "GC",
            model: "Gonorrhea Rapid Test",
            specs: {
              specimenType:
                "Female Cervical Swab, Male Urethral Swab, or Urine",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "40T",
            },
          },
          {
            catalog: "CT",
            model: "Chlamydia Rapid Test",
            specs: {
              specimenType: "Swab (Female Cervical, Male Urethral) or Urine",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "40T",
            },
          },
        ],
      },
      {
        category: "Infectious Disease: Other Tests",
        models: [
          {
            catalog: "Leptospira IgG/IgM",
            model: "Leptospira IgG/IgM Test",
            specs: {
              specimenType: "Serum, Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "EV71 IgM",
            model: "Enterovirus 71 IgM Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Brucella",
            model: "Brucella Rapid Test",
            specs: {
              specimenType: "Serum, Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
        ],
      },
      {
        category: "Fertility Tests",
        models: [
          {
            catalog: "IGFBP-1 PROM",
            model:
              "Human Insulin-like Growth Factor Binding Protein 1 (IGFBP-1) PROM Test",
            specs: {
              specimenType: "Vaginal Swab",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "40T",
            },
          },
          {
            catalog: "TSH",
            model: "Thyroid-Stimulating Hormone Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative/Semi-quantitative detection",
              kitFormat: "Cassette",
              packageSize: "40T",
            },
          },
          {
            catalog: "FSH",
            model: "Follicle-Stimulating Hormone Test",
            specs: {
              specimenType: "Urine",
              detection: "Qualitative/Semi-quantitative detection",
              kitFormat: "Cassette",
              packageSize: "40T",
            },
          },
          {
            catalog: "LH Ovulation",
            model: "Luteinizing Hormone Ovulation Test",
            specs: {
              specimenType: "Urine",
              detection: "Qualitative/Semi-quantitative detection",
              kitFormat: "Strip, Cassette, Midstream",
              packageSize: "40T",
            },
          },
          {
            catalog: "hCG/LH",
            model: "Digital Pregnancy and Ovulation Test",
            specs: {
              specimenType: "Urine",
              detection: "Qualitative/Digital detection",
              kitFormat: "Digital Device",
              packageSize: "40T",
            },
          },
          {
            catalog: "hCG",
            model: "Human Chorionic Gonadotropin Test",
            specs: {
              specimenType: "Urine or Serum",
              detection: "Qualitative/Semi-quantitative detection",
              kitFormat: "Strip, Cassette, Midstream",
              packageSize: "40T",
            },
          },
          {
            catalog: "hCG weekly",
            model: "hCG Weekly Pregnancy Test",
            specs: {
              specimenType: "Urine",
              detection:
                "Qualitative/Semi-quantitative detection (with weekly progression)",
              kitFormat: "Midstream",
              packageSize: "40T",
            },
          },
        ],
      },
      {
        category: "Cardiac Markers",
        models: [
          {
            catalog: "cTnI",
            model: "Troponin I Diagnostic Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "PCT",
            model: "Procalcitonin Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "NT-proBNP",
            model: "NT-proBNP Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "MI",
            model: "Myoglobin Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "CRP",
            model: "C-Reactive Protein Semi-Quantitative Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "D-Dimer",
            model: "D-Dimer Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "MI combo",
            model: "Cardiac Markers Combo Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Multi-Panel",
            },
          },
          {
            catalog: "CK-MB",
            model: "CK-MB Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
            },
          },
        ],
      },
      {
        category: "Tumor Markers",
        models: [
          {
            catalog: "LF",
            model: "Lactoferrin Rapid Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "TRF And FOB Combo",
            model: "Transferrin and Fecal Occult Blood Combo Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Multi-Panel",
              packageSize: "25T",
            },
          },
          {
            catalog: "TRF",
            model: "Transferrin Rapid Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "PSA",
            model: "Prostate Specific Antigen Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative/Semi-quantitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "Ferritin",
            model: "Ferritin Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative/Semi-quantitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "HL-Ferritin",
            model: "High Level Ferritin Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative/Semi-quantitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "FOB",
            model: "Fecal Occult Blood Rapid Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette, Dipstick",
              packageSize: "25T",
            },
          },
          {
            catalog: "CPT",
            model: "Calprotectin Rapid Test",
            specs: {
              specimenType: "Feces",
              detection: "Qualitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "CEA Ag",
            model: "Carcinoembryonic Antigen Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative/Semi-quantitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
          {
            catalog: "AFP",
            model: "Alpha-fetoprotein Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Qualitative/Semi-quantitative detection",
              kitFormat: "Cassette",
              packageSize: "25T",
            },
          },
        ],
      },
      {
        category: "Allergy Tests",
        models: [
          {
            catalog: "Total IgE",
            model: "Total IgE Rapid Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "slgE",
            model: "Mugwort Allergy Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "IgE Type I",
            model: "Ragweed Allergy Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Oak White",
            model: "Oak White Allergy Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Alternaria",
            model: "Alternaria Alternate Allergy Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Aspergillus Fumigatus",
            model: "Aspergillus Fumigatus Allergy Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Timothy",
            model: "Timothy Allergy Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Dog Dander",
            model: "Dog Dander Allergy Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Cat Dander",
            model: "Cat Dander Allergy Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Shrimp",
            model: "Shrimp Allergy Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Peanut",
            model: "Peanut Allergy Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Milk",
            model: "Milk Allergy Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette",
            },
          },
          {
            catalog: "Egg White",
            model: "Egg White Allergy Test",
            specs: {
              specimenType: "Whole Blood, Serum, or Plasma",
              detection: "Semi-quantitative detection",
              kitFormat: "Cassette",
            },
          },
        ],
      },
    ],
  },

  // red
  {
    name: "DiaSure",
    slug: "dia-sure-red",
    img: "dia-sure-red.png",
    description:
      "ELHODA TRADE present a comprehensive portfolio of high-quality clinical chemistry reagents, manufactured in Egypt. Our reagents are meticulously designed and produced to support a wide range of diagnostic tests, enabling clinical laboratories worldwide to perform routine and specialized analysis with exceptional accuracy and reliability. This catalog is divided into two principal sections to meet the diverse needs of modern laboratories, ranging from small semi-automatic setups to high-throughput fully automated systems.",
    products: [
      {
        category: "Manual / Semi-Automatic Kits",
        description:
          "We offer a comprehensive portfolio of high-quality clinical chemistry reagents designed to support a wide range of diagnostic tests. Our reagents enable clinical laboratories to perform routine and specialized analysis with exceptional accuracy and reliability. These kits are formulated as Liquid Stable reagents, minimizing preparation time and maximizing bench stability. They are optimized for use with most semi-automatic clinical chemistry analyzers, as well as for manual spectrophotometric procedures, providing laboratories with flexibility, proven methodology, and excellent cost-efficiency.",
        models: [
          {
            catalog: "CC-G001",
            model: "Glucose",
            specs: {
              method: "Enzymatic (GOD-PAP)",
              reagentForm: "Liquid Stable",
              shelfLife: "24 Months",
            },
            packaging: [
              {
                packSize: "2x100 ml",
                kitContent: "R 2x100 ml, St 1x4ml",
              },
              {
                packSize: "4x100 ml",
                kitContent: "R 4x100 ml, St 1x4ml",
              },
              {
                packSize: "4x250 ml",
                kitContent: "R 4x250 ml, St 1x10 ml",
              },
            ],
          },
          {
            catalog: "CC-C002",
            model: "Cholesterol",
            specs: {
              method: "Enzymatic (CHOD-PAP)",
              reagentForm: "Liquid Stable",
              shelfLife: "18 Months",
            },
            packaging: [
              {
                packSize: "2x25 ml",
                kitContent: "R 2x25 ml, St 1x3ml",
              },
              {
                packSize: "4x25 ml",
                kitContent: "R 4x25 ml, St 1x3ml",
              },
              {
                packSize: "4x50 ml",
                kitContent: "R 4x50 ml, St 1x3ml",
              },
              {
                packSize: "4x100 ml",
                kitContent: "R 4x100 ml, St 1x3ml",
              },
            ],
          },
          {
            catalog: "CC-T003",
            model: "Triglyceride",
            specs: {
              method: "Enzymatic (GPO-PAP)",
              reagentForm: "Liquid Stable",
              shelfLife: "18 Months",
            },
            packaging: [
              {
                packSize: "2x25 ml",
                kitContent: "R 2x25 ml, St 1x3ml",
              },
              {
                packSize: "4x25 ml",
                kitContent: "R 4x25 ml, St 1x3ml",
              },
              {
                packSize: "4x50 ml",
                kitContent: "R 4x50 ml, St 1x3ml",
              },
              {
                packSize: "4x100 ml",
                kitContent: "R 4x100 ml, St 1x3ml",
              },
            ],
          },
          {
            catalog: "CC-U004",
            model: "Uric Acid",
            specs: {
              method: "Enzymatic (Uricase)",
              reagentForm: "Liquid Stable",
              shelfLife: "16 Months",
            },
            packaging: [
              {
                packSize: "2x25 ml",
                kitContent: "R 2x25 ml, St 1x3ml",
              },
              {
                packSize: "4x25 ml",
                kitContent: "R 4x25 ml, St 1x3ml",
              },
              {
                packSize: "4x50 ml",
                kitContent: "R 4x50 ml, St 1x3ml",
              },
              {
                packSize: "4x100 ml",
                kitContent: "R 4x100 ml, St 1x3ml",
              },
            ],
          },
          {
            catalog: "CC-G005",
            model: "GOT (4+1)",
            specs: {
              method: "IFCC",
              reagentForm: "Liquid Stable",
              shelfLife: "18 Months",
            },
            packaging: [
              {
                packSize: "4x25 ml",
                kitContent: "R1 4x20ml, R2 2x11ml",
              },
              {
                packSize: "4x50 ml",
                kitContent: "R1 4x40ml, R2 4x10ml",
              },
              {
                packSize: "4x100 ml",
                kitContent: "R1 4x80ml, R2 4x20ml",
              },
            ],
          },
          {
            catalog: "CC-G006",
            model: "GPT (4+1)",
            specs: {
              method: "IFCC",
              reagentForm: "Liquid Stable",
              shelfLife: "18 Months",
            },
            packaging: [
              {
                packSize: "4x25 ml",
                kitContent: "R1 4x20ml, R2 2x11ml",
              },
              {
                packSize: "4x50 ml",
                kitContent: "R1 4x40ml, R2 4x10ml",
              },
              {
                packSize: "4x100 ml",
                kitContent: "R1 4x80ml, R2 4x20ml",
              },
            ],
          },
          {
            catalog: "CC-U007",
            model: "Urea Colorimetric",
            specs: {
              method: "Enzymatic",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "R1 1x100 ml, R2 1x6 ml, R3 1x22 ml, St 1x4 ml",
              },
              {
                packSize: "200 T",
                kitContent: "R1 2x100 ml, R2 2x6 ml, R3 1x45 ml, St 1x4 ml",
              },
            ],
          },
          {
            catalog: "CC-A008",
            model: "Albumin",
            specs: {
              method: "Bromocresol Green (BCG)",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "2x100 ml",
                kitContent: "R 2x100 ml, St 1x4ml",
              },
              {
                packSize: "2x250 ml",
                kitContent: "R 2x250 ml, St 1x10 ml",
              },
            ],
          },
          {
            catalog: "CC-CR004",
            model: "Creatinine",
            specs: {
              method: "Kinetic Jaffe",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "2x100 ml",
                kitContent: "R1 1x100 ml, R2 1x100 ml, St 1 x 6 ml",
              },
              {
                packSize: "2x250 ml",
                kitContent: "R1 1x250 ml, R2 1x250 ml, St 1 x 15 ml",
              },
            ],
          },
          {
            catalog: "CC-B009",
            model: "Bilirubin JG",
            specs: {
              method: "Jendrasik Grof",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "R1 1x50 ml, R2 1x12 ml, R3 1x100 ml, R4 1x100 ml",
              },
            ],
          },
          {
            catalog: "CC-U010",
            model: "Urea UV",
            specs: {
              method: "UV-Kinetic",
              reagentForm: "Liquid Stable",
              shelfLife: "18 months",
            },
            packaging: [
              {
                packSize: "4x25 ml",
                kitContent: "R1 4x20ml, R2 2x11ml, St 1x3ml",
              },
              {
                packSize: "4x50 ml",
                kitContent: "R1 4x40ml, R2 4x10ml, St 1x3ml",
              },
            ],
          },
          {
            catalog: "BG-A001",
            model: "Anti A",
            specs: {
              method: "Slide/Tube",
              reagentForm: "Liquid Stable",
              shelfLife: "22 months",
            },
            packaging: [
              {
                packSize: "200 T",
                kitContent: "1 x 10 ml",
              },
            ],
          },
          {
            catalog: "BG-B002",
            model: "Anti B",
            specs: {
              method: "Slide/Tube",
              reagentForm: "Liquid Stable",
              shelfLife: "22 months",
            },
            packaging: [
              {
                packSize: "200 T",
                kitContent: "1 x 10 ml",
              },
            ],
          },
          {
            catalog: "BG-D003",
            model: "Anti D",
            specs: {
              method: "Slide/Tube",
              reagentForm: "Liquid Stable",
              shelfLife: "22 months",
            },
            packaging: [
              {
                packSize: "200 T",
                kitContent: "1 x 10 ml",
              },
            ],
          },
          {
            catalog: "IT-C001",
            model: "CRP Comp.",
            specs: {
              method: "Latex Agglutination",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "L 1x5 ml, P 1x1 ml, N 1x1 ml",
              },
            ],
          },
          {
            catalog: "IT-C002",
            model: "CRP LO",
            specs: {
              method: "Latex Agglutination",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "L 1x5 ml",
              },
            ],
          },
          {
            catalog: "IT-A003",
            model: "ASO Comp.",
            specs: {
              method: "Latex Agglutination",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "L 1x5 ml, P 1x1 ml, N 1x1 ml",
              },
            ],
          },
          {
            catalog: "IT-A004",
            model: "ASO LO",
            specs: {
              method: "Latex Agglutination",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "L 1x5 ml",
              },
            ],
          },
          {
            catalog: "IT-R005",
            model: "RF Comp.",
            specs: {
              method: "Latex Agglutination",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "L 1x5 ml, P 1x1 ml, N 1x1 ml",
              },
            ],
          },
          {
            catalog: "IT-R006",
            model: "RF LO",
            specs: {
              method: "Latex Agglutination",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "L 1x5 ml",
              },
            ],
          },
        ],
      },
      {
        category: "Full Automation Kits (Liquid Stable)",
        description:
          "This section details our advanced line of reagents optimized for high-throughput, fully automated chemistry analyzers.\n\nKey Technical Specifications & Stability:\n\n• Automation Focus: Kits are designed for seamless integration and minimal operator intervention on most Fully Automatic Clinical Chemistry Analyzers.\n\n• Reagent Form: All kits are supplied in a Liquid Stable format.\n\n• On-Board Stability: Reagents are specially formulated for high on-board stability, ensuring the integrity of the reagent is maintained for extended periods once loaded onto the analyzer.\n\n• High Efficiency: Large kit sizes (up to 800 Tests/Kit) and optimized μl/Test volumes support high-volume testing with excellent cost-per-test economics.",
        models: [
          {
            catalog: "A-100",
            model: "Albumin",
            specs: {
              r1Volume: "5×42 ml",
              r2Volume: "–",
              testsPerKit: "800 T",
              ulPerTest: "250 μl",
              stability: "Liquid Stable",
              shelfLife: "24 months",
            },
          },
          {
            catalog: "A-101",
            model: "Cholesterol",
            specs: {
              r1Volume: "5×42 ml",
              r2Volume: "–",
              testsPerKit: "800 T",
              ulPerTest: "250 μl",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-102",
            model: "Direct Bilirubin",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×17 ml",
              testsPerKit: "800 T",
              ulPerTest: "240 μl(200+40)",
              stability: "Liquid Stable",
              shelfLife: "24 months",
            },
          },
          {
            catalog: "A-103",
            model: "Glucose",
            specs: {
              r1Volume: "5×42 ml",
              r2Volume: "–",
              testsPerKit: "800 T",
              ulPerTest: "250 μl",
              stability: "Liquid Stable",
              shelfLife: "24 Months",
            },
          },
          {
            catalog: "A-104",
            model: "HDL Cholesterol Direct (Large)",
            specs: {
              r1Volume: "4×47 ml",
              r2Volume: "3×21.5 ml",
              testsPerKit: "800 T",
              ulPerTest: "300 μl(225+75)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-105",
            model: "HDL Cholesterol Direct (Small)",
            specs: {
              r1Volume: "4×23.5 ml",
              r2Volume: "2×16 ml",
              testsPerKit: "400 T",
              ulPerTest: "300 μl(225+75)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-106",
            model: "Total Protein",
            specs: {
              r1Volume: "5×42 ml",
              r2Volume: "–",
              testsPerKit: "800 T",
              ulPerTest: "250 μl",
              stability: "Liquid Stable",
              shelfLife: "24 months",
            },
          },
          {
            catalog: "A-107",
            model: "Triglycerides",
            specs: {
              r1Volume: "5×42 ml",
              r2Volume: "–",
              testsPerKit: "800 T",
              ulPerTest: "250 μl",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-108",
            model: "Urea UV",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×21 ml",
              testsPerKit: "800 T",
              ulPerTest: "250 μl(200+50)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-109",
            model: "ALT/GPT",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×21 ml",
              testsPerKit: "800 T",
              ulPerTest: "250 μl(200+50)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-110",
            model: "ALP",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×21 ml",
              testsPerKit: "800 T",
              ulPerTest: "250 μl(200+50)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-111",
            model: "AST/GOT",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×21 ml",
              testsPerKit: "800 T",
              ulPerTest: "250 μl(200+50)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-112",
            model: "CK",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×21 ml",
              testsPerKit: "800 T",
              ulPerTest: "250 μl(200+50)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-113",
            model: "CK-MB",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×21 ml",
              testsPerKit: "800 T",
              ulPerTest: "250 μl(200+50)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-114",
            model: "LDH",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×21 ml",
              testsPerKit: "800 T",
              ulPerTest: "250 μl(200+50)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
        ],
      },
    ],
  },
  {
    name: "AMS",
    slug: "ams",
    img: "ams-red.png",
    description:
      "AMS manufactures advanced medical systems and laboratory diagnostic devices.",
    products: [
      {
        category: "Manual / Semi-Automatic Kits",
        description:
          "We offer a comprehensive portfolio of high-quality clinical chemistry reagents designed to support a wide range of diagnostic tests. Our reagents enable clinical laboratories to perform routine and specialized analysis with exceptional accuracy and reliability. These kits are formulated as Liquid Stable reagents, minimizing preparation time and maximizing bench stability. They are optimized for use with most semi-automatic clinical chemistry analyzers, as well as for manual spectrophotometric procedures, providing laboratories with flexibility, proven methodology, and excellent cost-efficiency.",
        models: [
          {
            catalog: "CC-G001",
            model: "Glucose",
            specs: {
              method: "Enzymatic (GOD-PAP)",
              reagentForm: "Liquid Stable",
              shelfLife: "24 Months",
            },
            packaging: [
              {
                packSize: "2x100 ml",
                kitContent: "R 2x100 ml, St 1x4ml",
              },
              {
                packSize: "4x100 ml",
                kitContent: "R 4x100 ml, St 1x4ml",
              },
              {
                packSize: "4x250 ml",
                kitContent: "R 4x250 ml, St 1x10 ml",
              },
            ],
          },
          {
            catalog: "CC-C002",
            model: "Cholesterol",
            specs: {
              method: "Enzymatic (CHOD-PAP)",
              reagentForm: "Liquid Stable",
              shelfLife: "18 Months",
            },
            packaging: [
              {
                packSize: "2x25 ml",
                kitContent: "R 2x25 ml, St 1x3ml",
              },
              {
                packSize: "4x25 ml",
                kitContent: "R 4x25 ml, St 1x3ml",
              },
              {
                packSize: "4x50 ml",
                kitContent: "R 4x50 ml, St 1x3ml",
              },
              {
                packSize: "4x100 ml",
                kitContent: "R 4x100 ml, St 1x3ml",
              },
            ],
          },
          {
            catalog: "CC-T003",
            model: "Triglyceride",
            specs: {
              method: "Enzymatic (GPO-PAP)",
              reagentForm: "Liquid Stable",
              shelfLife: "18 Months",
            },
            packaging: [
              {
                packSize: "2x25 ml",
                kitContent: "R 2x25 ml, St 1x3ml",
              },
              {
                packSize: "4x25 ml",
                kitContent: "R 4x25 ml, St 1x3ml",
              },
              {
                packSize: "4x50 ml",
                kitContent: "R 4x50 ml, St 1x3ml",
              },
              {
                packSize: "4x100 ml",
                kitContent: "R 4x100 ml, St 1x3ml",
              },
            ],
          },
          {
            catalog: "CC-U004",
            model: "Uric Acid",
            specs: {
              method: "Enzymatic (Uricase)",
              reagentForm: "Liquid Stable",
              shelfLife: "16 Months",
            },
            packaging: [
              {
                packSize: "2x25 ml",
                kitContent: "R 2x25 ml, St 1x3ml",
              },
              {
                packSize: "4x25 ml",
                kitContent: "R 4x25 ml, St 1x3ml",
              },
              {
                packSize: "4x50 ml",
                kitContent: "R 4x50 ml, St 1x3ml",
              },
              {
                packSize: "4x100 ml",
                kitContent: "R 4x100 ml, St 1x3ml",
              },
            ],
          },
          {
            catalog: "CC-G005",
            model: "GOT (4+1)",
            specs: {
              method: "IFCC",
              reagentForm: "Liquid Stable",
              shelfLife: "18 Months",
            },
            packaging: [
              {
                packSize: "4x25 ml",
                kitContent: "R1 4x20ml, R2 2x11ml",
              },
              {
                packSize: "4x50 ml",
                kitContent: "R1 4x40ml, R2 4x10ml",
              },
              {
                packSize: "4x100 ml",
                kitContent: "R1 4x80ml, R2 4x20ml",
              },
            ],
          },
          {
            catalog: "CC-G006",
            model: "GPT (4+1)",
            specs: {
              method: "IFCC",
              reagentForm: "Liquid Stable",
              shelfLife: "18 Months",
            },
            packaging: [
              {
                packSize: "4x25 ml",
                kitContent: "R1 4x20ml, R2 2x11ml",
              },
              {
                packSize: "4x50 ml",
                kitContent: "R1 4x40ml, R2 4x10ml",
              },
              {
                packSize: "4x100 ml",
                kitContent: "R1 4x80ml, R2 4x20ml",
              },
            ],
          },
          {
            catalog: "CC-U007",
            model: "Urea Colorimetric",
            specs: {
              method: "Enzymatic",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "R1 1x100 ml, R2 1x6 ml, R3 1x22 ml, St 1x4 ml",
              },
              {
                packSize: "200 T",
                kitContent: "R1 2x100 ml, R2 2x6 ml, R3 1x45 ml, St 1x4 ml",
              },
            ],
          },
          {
            catalog: "CC-A008",
            model: "Albumin",
            specs: {
              method: "Bromocresol Green (BCG)",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "2x100 ml",
                kitContent: "R 2x100 ml, St 1x4ml",
              },
              {
                packSize: "2x250 ml",
                kitContent: "R 2x250 ml, St 1x10 ml",
              },
            ],
          },
          {
            catalog: "CC-CR004",
            model: "Creatinine",
            specs: {
              method: "Kinetic Jaffe",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "2x100 ml",
                kitContent: "R1 1x100 ml, R2 1x100 ml, St 1 x 6 ml",
              },
              {
                packSize: "2x250 ml",
                kitContent: "R1 1x250 ml, R2 1x250 ml, St 1 x 15 ml",
              },
            ],
          },
          {
            catalog: "CC-B009",
            model: "Bilirubin JG",
            specs: {
              method: "Jendrasik Grof",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "R1 1x50 ml, R2 1x12 ml, R3 1x100 ml, R4 1x100 ml",
              },
            ],
          },
          {
            catalog: "CC-U010",
            model: "Urea UV",
            specs: {
              method: "UV-Kinetic",
              reagentForm: "Liquid Stable",
              shelfLife: "18 months",
            },
            packaging: [
              {
                packSize: "4x25 ml",
                kitContent: "R1 4x20ml, R2 2x11ml, St 1x3ml",
              },
              {
                packSize: "4x50 ml",
                kitContent: "R1 4x40ml, R2 4x10ml, St 1x3ml",
              },
            ],
          },
          {
            catalog: "BG-A001",
            model: "Anti A",
            specs: {
              method: "Slide/Tube",
              reagentForm: "Liquid Stable",
              shelfLife: "22 months",
            },
            packaging: [
              {
                packSize: "200 T",
                kitContent: "1 x 10 ml",
              },
            ],
          },
          {
            catalog: "BG-B002",
            model: "Anti B",
            specs: {
              method: "Slide/Tube",
              reagentForm: "Liquid Stable",
              shelfLife: "22 months",
            },
            packaging: [
              {
                packSize: "200 T",
                kitContent: "1 x 10 ml",
              },
            ],
          },
          {
            catalog: "BG-D003",
            model: "Anti D",
            specs: {
              method: "Slide/Tube",
              reagentForm: "Liquid Stable",
              shelfLife: "22 months",
            },
            packaging: [
              {
                packSize: "200 T",
                kitContent: "1 x 10 ml",
              },
            ],
          },
          {
            catalog: "IT-C001",
            model: "CRP Comp.",
            specs: {
              method: "Latex Agglutination",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "L 1x5 ml, P 1x1 ml, N 1x1 ml",
              },
            ],
          },
          {
            catalog: "IT-C002",
            model: "CRP LO",
            specs: {
              method: "Latex Agglutination",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "L 1x5 ml",
              },
            ],
          },
          {
            catalog: "IT-A003",
            model: "ASO Comp.",
            specs: {
              method: "Latex Agglutination",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "L 1x5 ml, P 1x1 ml, N 1x1 ml",
              },
            ],
          },
          {
            catalog: "IT-A004",
            model: "ASO LO",
            specs: {
              method: "Latex Agglutination",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "L 1x5 ml",
              },
            ],
          },
          {
            catalog: "IT-R005",
            model: "RF Comp.",
            specs: {
              method: "Latex Agglutination",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "L 1x5 ml, P 1x1 ml, N 1x1 ml",
              },
            ],
          },
          {
            catalog: "IT-R006",
            model: "RF LO",
            specs: {
              method: "Latex Agglutination",
              reagentForm: "Liquid Stable",
              shelfLife: "24 months",
            },
            packaging: [
              {
                packSize: "100 T",
                kitContent: "L 1x5 ml",
              },
            ],
          },
        ],
      },
      {
        category: "Full Automation Kits (Liquid Stable)",
        description:
          "This section details our advanced line of reagents optimized for high-throughput, fully automated chemistry analyzers.\n\nKey Technical Specifications & Stability:\n\n• Automation Focus: Kits are designed for seamless integration and minimal operator intervention on most Fully Automatic Clinical Chemistry Analyzers.\n\n• Reagent Form: All kits are supplied in a Liquid Stable format.\n\n• On-Board Stability: Reagents are specially formulated for high on-board stability, ensuring the integrity of the reagent is maintained for extended periods once loaded onto the analyzer.\n\n• High Efficiency: Large kit sizes (up to 800 Tests/Kit) and optimized μl/Test volumes support high-volume testing with excellent cost-per-test economics.",
        models: [
          {
            catalog: "A-100",
            model: "Albumin",
            specs: {
              r1Volume: "5×42 ml",
              r2Volume: "–",
              testsPerKit: "800 T",
              ulPerTest: "250 μl",
              stability: "Liquid Stable",
              shelfLife: "24 months",
            },
          },
          {
            catalog: "A-101",
            model: "Cholesterol",
            specs: {
              r1Volume: "5×42 ml",
              r2Volume: "–",
              testsPerKit: "800 T",
              ulPerTest: "250 μl",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-102",
            model: "Direct Bilirubin",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×17 ml",
              testsPerKit: "800 T",
              ulPerTest: "240 μl(200+40)",
              stability: "Liquid Stable",
              shelfLife: "24 months",
            },
          },
          {
            catalog: "A-103",
            model: "Glucose",
            specs: {
              r1Volume: "5×42 ml",
              r2Volume: "–",
              testsPerKit: "800 T",
              ulPerTest: "250 μl",
              stability: "Liquid Stable",
              shelfLife: "24 Months",
            },
          },
          {
            catalog: "A-104",
            model: "HDL Cholesterol Direct (Large)",
            specs: {
              r1Volume: "4×47 ml",
              r2Volume: "4×16 ml",
              testsPerKit: "800 T",
              ulPerTest: "300 μl(225+75)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-105",
            model: "HDL Cholesterol Direct (Small)",
            specs: {
              r1Volume: "4×23.5 ml",
              r2Volume: "2×16 ml",
              testsPerKit: "400 T",
              ulPerTest: "300 μl(225+75)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-106",
            model: "Total Protein",
            specs: {
              r1Volume: "5×42 ml",
              r2Volume: "–",
              testsPerKit: "800 T",
              ulPerTest: "250 μl",
              stability: "Liquid Stable",
              shelfLife: "24 months",
            },
          },
          {
            catalog: "A-107",
            model: "Triglycerides",
            specs: {
              r1Volume: "5×42 ml",
              r2Volume: "–",
              testsPerKit: "800 T",
              ulPerTest: "250 μl",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-108",
            model: "Urea UV",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×21 ml",
              testsPerKit: "800 T",
              ulPerTest: "250 μl(200+50)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-109",
            model: "ALT/GPT",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×21 ml",
              testsPerKit: "800 T",
              ulPerTest: "250 μl(200+50)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-110",
            model: "ALP",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×21 ml",
              testsPerKit: "800 T",
              ulPerTest: "250 μl(200+50)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-111",
            model: "AST/GOT",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×21 ml",
              testsPerKit: "800 T",
              ulPerTest: "250 μl(200+50)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-112",
            model: "CK",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×21 ml",
              testsPerKit: "800 T",
              ulPerTest: "250 μl(200+50)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-113",
            model: "CK-MB",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×21 ml",
              testsPerKit: "800 T",
              ulPerTest: "250 μl(200+50)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
          {
            catalog: "A-114",
            model: "LDH",
            specs: {
              r1Volume: "4×42 ml",
              r2Volume: "2×21 ml",
              testsPerKit: "800 T",
              ulPerTest: "250 μl(200+50)",
              stability: "Liquid Stable",
              shelfLife: "18 Months",
            },
          },
        ],
      },
      {
        category: "Full Automation Biochemistry Analyzers",
        description:
          "We offer the CA-200 Automatic Chemistry Analyzer, a high-performance, compact bench-top system designed to meet the rigorous demands of modern clinical laboratories. This fully automated, random access system delivers a constant throughput of 200 tests per hour, ensuring efficient, high-volume sample processing with minimal operator intervention. Engineered for compatibility and reliability, the CA-200 integrates seamlessly with our line of Liquid Stable Full Automation Reagents, providing maximum on-board stability, exceptional accuracy, and supporting rapid, dependable diagnostic results. The CA-200 is positioned as a powerful and cost-effective solution for comprehensive biochemistry analysis.",
        models: [
          {
            catalog: "CA-200",
            model: "CA-200 Automatic Chemistry Analyzer",
            img: "ca-200.jpg",
            specs: {
              design: "Bench-top compact design",
              throughput: "Constant speed of 200 tests/hour",
              access: "Random access",
              reactionSystem: "48 reaction cuvettes",
              reagentCapacity: "60 reagent positions",
              sampleCapacity:
                "30 sample positions, which includes: * Detergent positions * Standard positions * QC (Quality Control) positions * STAT (Emergency) positions",
              handling:
                "* Durable ceramic syringes * 1 Sample & Reagent probe * 1 High-performance stirrer",
              incubation: "Air bath heating incubation system",
              compatibility:
                "Fully automated chemistry analyzer compatible with international brands like Roche, Beckman Coulter, Abbott, Siemens, and Mindray (for Elhoda reagents)",
            },
          },
        ],
      },
    ],
  },

  {
    name: "AMS blue",
    slug: "ams blue",
    img: "ams-blue.png",
    description:
      "AMS manufactures advanced medical systems and laboratory diagnostic devices.",
  },

  {
    name: "Medentech",
    slug: "medntech",
    img: "medntech.png",
    description:
      "Medntech provides cutting-edge healthcare and diagnostic technologies.",
  },
  {
    name: "ACON",
    slug: "acon",
    img: "acon.png",
    description:
      "Acon is a global provider of rapid test kits and medical diagnostic products.",
  },
];

export const ivdCategories = [
  {
    id: "clinical-chemistry-instrumentation",
    name: "CLINICAL CHEMISTRY INSTRUMENTATION",
    description:
      "Complete range of chemistry analyzers from semi to fully automated systems",
    icon: Microscope,
    color: "from-indigo-400 to-indigo-600",
    bgColor: "bg-indigo-50",
    type: "main-category",
    subcategories: [
      {
        id: "hc-80",
        name: "1. HC-80 Semi-automatic Chemistry Analyzer",
        description:
          "Efficient, Intuitive, and High-Precision Diagnostic Solutions \n The HC-80 is a versatile semi-automatic chemistry analyzer designed to deliver high-quality diagnostic results with minimal intervention. Featuring a large 7-inch color touch screen and an intuitive interface, it supports both flowcell and disposable cuvette modes, making it an adaptable choice for various laboratory environments.",
        icon: Cpu,
        bgColor: "bg-indigo-100",
        type: "instrument",
        image: "HC-80.png",
        features: [
          "Precision Optics: High-quality filters across 8 wavelengths (340 to 800) ensure accurate real dual-wavelength detection.",
          "User-Friendly Design: Includes a large memory capacity for 30,000 test results and an internal thermal printer for immediate reporting.",
          "Minimal Maintenance: Offers a free-maintenance disposable cuvette mode to reduce purified water consumption and eliminate cross-contamination.",
          "Intelligent Software: Real-time reaction curve display, QC graph printing, and support for multi-point calibration.",
          "Advanced Connectivity: Equipped with USB, SD, and LAN ports for LIS communication, data backup, and external peripherals like barcode readers.",
        ],
        specifications: {
          headers: ["Feature", "Specification"],
          rows: [
            {
              feature: "Analysis Method",
              specification:
                "Endpoint, Kinetic, 2-point Kinetic, Dual WL, ABS, and polygon method",
            },
            {
              feature: "Light Source",
              specification: "Halogen lamp, 6V/10W",
            },
            {
              feature: "Wavelengths",
              specification:
                "8 options: 340, 405, 492, 510, 546, 578, 630, 700, 750, 800nm",
            },
            {
              feature: "Absorbance Range",
              specification: "-0.3Abs to 4.0Abs",
            },
            {
              feature: "Aspiration Volume",
              specification: "100 uL – 9999 uL(recommended >500uL)",
            },
            {
              feature: "Flowcell",
              specification: "Quartz cell, 10mm optical diameter, 32 uL volume",
            },
            {
              feature: "Temperature Control",
              specification: "25°C, 30°C, and 37°C",
            },
            {
              feature: "Memory",
              specification:
                "Up to 300 items, 20 curve parameters, and 30,000 test results",
            },
            {
              feature: "Display",
              specification: "7-inch color touch screen (800 *480 resolution)",
            },
            {
              feature: "Interface",
              specification: "1 SD, 3 USB, and 1 RJ-45 (LAN port)",
            },
            {
              feature: "Printer",
              specification: "Built-in thermal printer",
            },
            {
              feature: "Dimensions",
              specification: "340mm (L) *280mm (W) *143mm (H)",
            },
            { feature: "Weight", specification: "Approximately 5.1 kg" },
          ],
        },
      },
      {
        id: "ca-200",
        name: "2. CA-200 Automatic Chemistry Analyzer",
        description:
          "The CA-200 is a high-performance, bench-top diagnostic solution engineered to bring full-scale automation to the modern clinical laboratory. Delivering a constant speed of 200 tests per hour, this system balances a compact footprint with robust throughput. By utilizing true random-access processing and a sophisticated 48-reaction cuvette system, the CA-200 optimizes laboratory workflows for both routine and urgent diagnostic needs.",
        icon: Cpu,
        bgColor: "bg-indigo-100",
        type: "instrument",
        image: "ca-200.jpg",
        features: [
          "Optimal Throughput: Maintains a constant speed of 200 tests per hour with random access capability for streamlined laboratory efficiency.",
          "Precision Handling: Utilizes durable ceramic syringes, a high-performance stirrer, and a dedicated sample/reagent probe for consistent accuracy.",
          "Compact Capacity: Features a space-saving bench-top design housing 60 reagent and 30 sample positions.",
          "Intelligent Prioritization: Includes dedicated positions for Detergents, Standards, Quality Control (QC), and STAT (Emergency) samples.",
          "Thermal Control: Employs an air bath heating incubation system to ensure stable reaction environments across 48 cuvettes.",
          "Universal Compatibility: Fully compatible with international reagent brands, including Roche, Beckman Coulter, Abbott, Siemens, and Mindray.",
        ],
        specifications: {
          headers: ["Feature", "Specification"],
          rows: [
            { feature: "Catalog Number", specification: "CA-200" },
            {
              feature: "Model",
              specification: "CA-200 (Automatic Chemistry Analyzer)",
            },
            {
              feature: "Design",
              specification: "Bench-top compact design",
            },
            {
              feature: "Throughput",
              specification: "Constant speed of 200 tests/hour",
            },
            { feature: "Access", specification: "Random access" },
            {
              feature: "Reaction System",
              specification: "48 reaction cuvettes",
            },
            {
              feature: "Reagent Capacity",
              specification: "60 reagent positions",
            },
            {
              feature: "Sample Capacity",
              specification:
                "30 sample positions, which includes: * Detergent positions * Standard positions * QC (Quality Control) positions * STAT (Emergency) positions",
            },
            {
              feature: "Handling",
              specification:
                "* Durable ceramic syringes * 1 Sample & Reagent probe * 1 High-performance stirrer",
            },
            {
              feature: "Incubation",
              specification: "Air bath heating incubation system",
            },
            {
              feature: "Compatibility",
              specification:
                "Fully automated chemistry analyzer compatible with international brands like Roche, Beckman Coulter, Abbott, Siemens, and Mindray (for Elhoda reagents)",
            },
          ],
        },
      },
      {
        id: "ca-430",
        name: "3. CA-430 Fully Automated Chemistry Analyzer",
        description:
          "The CA-430 is a high-capacity diagnostic powerhouse designed for laboratories requiring maximum throughput and sophisticated automation. Delivering a constant speed of 400 tests per hour (reaching up to 600 tests per hour with an optional ISE module), this system is engineered to manage heavy workloads with uncompromising precision. Featuring a state-of-the-art grating optical system and a triple-probe assembly, the CA-430 ensures rapid, high-fidelity results for large-scale clinical environments.",
        icon: Cpu,
        bgColor: "bg-indigo-100",
        type: "instrument",
        image: "CA-430.jpg",
        features: [
          "High-Volume Performance: Delivers a constant throughput of 400 tests per hour, increasing to 600 tests per hour with an optional ISE module.",
          "Advanced Optical System: Features a 12-wavelength grating system (340nm to 800nm) and 90 high-transmittance reaction cuvettes.",
          "Precision Fluidics: Utilizes a triple-probe system (Sample, Reagent A, and Reagent B) with independent high-performance stirrers to eliminate cross-contamination.",
          "Intelligent Sensing: Probes include advanced liquid level detection, volume tracking, and horizontal/vertical collision protection.",
          "Extended Loading Capacity: Equipped with 105 reagent positions and 77 sample positions to maximize walk-away time.",
          "Superior Stability: Features a maintenance-free solid-phase heating system for constant 37°C incubation and 24-hour non-stop cooling for reagents.",
          "Automated Hygiene: Includes an 8-step automatic washing system to ensure cuvette integrity and accurate results.",
        ],
        specifications: {
          headers: ["Feature", "Specification"],
          rows: [
            { feature: "Catalog Number", specification: "CA-430" },
            {
              feature: "Model",
              specification: "CA-430 (Automatic Chemistry Analyzer)",
            },
            {
              feature: "Throughput",
              specification:
                "Constant 430 T/H (up to 620 T/H with optional ISE)",
            },
            {
              feature: "Reaction System",
              specification: "120 reaction cuvettes",
            },
            {
              feature: "Reagent Capacity",
              specification: "80 reagent positions",
            },
            {
              feature: "Sample Capacity",
              specification: "80 sample positions",
            },
            {
              feature: "Incubation",
              specification: "Solid direct heating incubation system",
            },
            {
              feature: "Cooling System",
              specification:
                "24 hours non-stop, 2~8°C constant ice-free cooling system",
            },
            {
              feature: "Optical System",
              specification:
                "Fully sealed grating optical system with 16 wavelengths",
            },
          ],
        },
      },
    ],
  },
  {
    id: "clinical-chemistry-reagents",
    name: "CLINICAL CHEMISTRY REAGENTS",
    description:
      "Comprehensive range of clinical chemistry diagnostic reagents",
    icon: Beaker,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    type: "main-category",
    subcategories: [
      {
        id: "general-purpose-reagents",
        name: "I. GENERAL PURPOSE REAGENTS",
        description: "Comprehensive range of clinical diagnostic reagents",
        icon: Package,
        color: "from-blue-400 to-blue-600",
        bgColor: "bg-blue-100",
        subcategories: [
          {
            id: "clinical-chemistry",
            name: "1. CLINICAL CHEMISTRY",
            description:
              "Substrates, Enzymes, Electrolytes, Calibrators & Controls",
            icon: Beaker,
            color: "from-blue-400 to-blue-600",
            bgColor: "bg-blue-100",
            subcategories: [
              {
                id: "substrates",
                name: "A-CLINICAL CHEMISTRY - 1-SUBSTRATES",
                tableData: {
                  headers: [
                    "PRODUCT",
                    "METHOD",
                    "PACK SIZE",
                    "TEST/KIT",
                    "Shelf Life",
                  ],
                  rows: [
                    {
                      product: "Albumin",
                      method: "Colorimetric BcG",
                      packSize: "2 x 100 ml",
                      tests: "200",
                      shelfLife: "24 Months",
                      note: "Also available: 4 x 100 ml (400 tests)",
                    },
                    {
                      product: "Bilirubin Direct",
                      method: "Stable Diazo Compound",
                      packSize: "210 ml",
                      tests: "65",
                      shelfLife: "24 Months",
                    },
                    {
                      product: "Bilirubin Direct & Total",
                      method: "Jendrassik Grof",
                      packSize: "250 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                    },
                    {
                      product: "Bilirubin Total",
                      method: "Stable Diazo Compound",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "18 Months",
                      note: "Also available: 4 x 25 ml (100 tests)",
                    },
                    {
                      product: "Cholesterol",
                      method: "Colorimetric Enzymatic CHOD-PAP",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "18 Months",
                      note: "Also available: 4 x 25 ml (100 tests), 4 x 50 ml (200 tests), 4 x 100 ml (400 tests)",
                    },
                    {
                      product: "Creatinine",
                      method: "Jaffe Fixed time",
                      packSize: "2x100 ml",
                      tests: "200",
                      shelfLife: "24 Months",
                      note: "Also available: 4 x 100 ml (400 tests)",
                    },
                    {
                      product: "Glucose",
                      method: "Enzymatic (GOD-PAP)",
                      packSize: "2x100 ml",
                      tests: "200",
                      shelfLife: "24 Months",
                      note: "Also available: 4x100 ml (400 tests)",
                    },
                    {
                      product: "HDL Cholesterol",
                      method: "Precipitation",
                      packSize: "2 x 25 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                      note: "Also available: 2 x 100 ml (400 tests)",
                    },
                    {
                      product: "HDL Cholesterol",
                      method: "Direct Enzymatic",
                      packSize: "40 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                      note: "Also available: 80 ml (200 tests)",
                    },
                    {
                      product: "Hemoglobin",
                      method: "Drabkin",
                      packSize: "2 x 25 ml",
                      tests: "1000",
                      shelfLife: "18 Months",
                      note: "Also available: 4 x 25 ml (2000 tests)",
                    },
                    {
                      product: "LDL Cholesterol",
                      method: "Direct Enzymatic",
                      packSize: "40 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                      note: "Also available: 80 ml (200 tests)",
                    },
                    {
                      product: "Micro total Protein (MTP)",
                      method: "Pyrogallol - Red",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "18 Months",
                      note: "Also available: 4 x 25 ml (100 tests)",
                    },
                    {
                      product: "Total protein",
                      method: "Biuret",
                      packSize: "2 x 100 ml",
                      tests: "200",
                      shelfLife: "24 Months",
                    },
                    {
                      product: "Triglycerides",
                      method: "Colorimetric Enzymatic GPO-PAP",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "18 Months",
                      note: "Also available: 4 x 25 ml (100 tests), 4 x 50 ml (200 tests), 4 x 100 ml (400 tests)",
                    },
                    {
                      product: "Urea Colorimetric",
                      method: "Colorimetric Enzymatic",
                      packSize: "125 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                      note: "Also available: 250 ml (200 tests)",
                    },
                    {
                      product: "Urea UV",
                      method: "Fixed time UV",
                      packSize: "4 x 25 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                      note: "Also available: 4 x 50 ml (200 tests)",
                    },
                    {
                      product: "Uric Acid",
                      method: "Colorimetric Enzymatic",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "18 Months",
                      note: "Also available: 4 x 25 ml (100 tests), 4 x 50 ml (200 tests), 4 x 100 ml (400 tests)",
                    },
                  ],
                },
              },
              {
                id: "enzymes",
                name: "A-CLINICAL CHEMISTRY - 2-ENZYMES",
                tableData: {
                  headers: [
                    "PRODUCT",
                    "METHOD",
                    "PACK SIZE",
                    "TEST/KIT",
                    "Shelf Life",
                  ],
                  rows: [
                    {
                      product: "Alkaline Phosphatase (ALP) IFCC",
                      method: "Kinetic Colorimetric Method",
                      packSize: "4x25 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                      note: "Also available: 4x50 ml (200 tests)",
                    },
                    {
                      product: "Creatine Kinase (CK) DGKC/IFCC",
                      method: "Kinetic UV",
                      packSize: "5 x 5 ml",
                      tests: "50",
                      shelfLife: "18 Months",
                      note: "Also available: 5 x 10 ml (100 tests)",
                    },
                    {
                      product: "Creatine Kinase-MB (CK-MB) DGKC/IFCC",
                      method: "Kinetic UV",
                      packSize: "5 x 5 ml",
                      tests: "50",
                      shelfLife: "18 Months",
                      note: "Also available: 5 x 10 ml (100 tests)",
                    },
                    {
                      product: "GOT/AST IFCC",
                      method: "Kinetic UV",
                      packSize: "4x25 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                      note: "Also available: 4x50 ml (200 tests), 4x100 ml (400 tests)",
                    },
                    {
                      product: "GPT/ALT IFCC",
                      method: "Kinetic UV",
                      packSize: "4x25 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                      note: "Also available: 4x50 ml (200 tests), 4x100 ml (400 tests)",
                    },
                    {
                      product: "G6PD single assay vials",
                      method: "Kinetic UV",
                      packSize: "10 x 1 T",
                      tests: "10",
                      shelfLife: "18 Months",
                    },
                    {
                      product: "G6PD single LR",
                      method: "Kinetic UV",
                      packSize: "25 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                    },
                    {
                      product: "Lactate dehydrogenase (LDH)",
                      method: "Kinetic UV",
                      packSize: "4x25 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                      note: "Also available: 4x50 ml (200 tests)",
                    },
                    {
                      product: "Lipase LR",
                      method: "Kinetic Colorimetric",
                      packSize: "25 ml",
                      tests: "40",
                      shelfLife: "18 Months",
                      note: "Also available: 50 ml (80 tests)",
                    },
                    {
                      product: "γ-Glutamyl transferase (γ GT)",
                      method: "Kinetic Colorimetric",
                      packSize: "4x25 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                      note: "Also available: 4x50 ml (200 tests)",
                    },
                  ],
                },
              },
              {
                id: "electrolytes",
                name: "A-CLINICAL CHEMISTRY - 3-ELECTROLYTES",
                tableData: {
                  headers: [
                    "PRODUCT",
                    "METHOD",
                    "PACK SIZE",
                    "TEST/KIT",
                    "Shelf Life",
                  ],
                  rows: [
                    {
                      product: "Ammonia",
                      method: "Enzymatic UV",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "12 Months",
                      note: "Also available: 4 x 25 ml (100 tests)",
                    },
                    {
                      product: "Calcium",
                      method: "Arsenazo III",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "24 Months",
                      note: "Also available: 4 x 25 ml (100 tests)",
                    },
                    {
                      product: "Calcium",
                      method: "o-cresolphtalein complexone",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "24 Months",
                      note: "Also available: 4 x 25 ml (100 tests)",
                    },
                    {
                      product: "Chloride",
                      method: "Colorimetric",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "24 Months",
                      note: "Also available: 4 x 25 ml (100 tests)",
                    },
                    {
                      product: "Copper",
                      method: "Colorimetric, Di-Br-PAESA",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "18 Months",
                      note: "Also available: 4 x 25 ml (100 tests)",
                    },
                    {
                      product: "Magnesium",
                      method: "Colorimetric",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "18 Months",
                      note: "Also available: 4 x 25 ml (100 tests)",
                    },
                    {
                      product: "Phosphorus",
                      method: "UV",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "24 Months",
                      note: "Also available: 4 x 25 ml (100 tests)",
                    },
                    {
                      product: "Potassium",
                      method: "Turbidimetric - TPB",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "18 Months",
                      note: "Also available: 4 x 25 ml (100 tests)",
                    },
                    {
                      product: "Sodium",
                      method: "Colorimetric",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "18 Months",
                      note: "Also available: 4 x 25 ml (100 tests)",
                    },
                    {
                      product: "Total Iron",
                      method: "Colorimetric, CAB",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "24 Months",
                      note: "Also available: 4 x 25 ml (100 tests)",
                    },
                    {
                      product: "Zinc",
                      method: "Colorimetric, Nitro-PAPS",
                      packSize: "2 x 25 ml",
                      tests: "50",
                      shelfLife: "24 Months",
                      note: "Also available: 4 x 25 ml (100 tests)",
                    },
                  ],
                },
              },
              {
                id: "calibrators-controls",
                name: "A-CLINICAL CHEMISTRY - 4-CALIBRATORS AND CONTROLS",
                tableData: {
                  headers: ["PRODUCT", "PACK SIZE", "Shelf Life"],
                  rows: [
                    {
                      product: "Normal Control",
                      packSize: "1 x 5 ml",
                      shelfLife: "24 Months",
                      note: "Also available: 3 x 5 ml",
                    },
                    {
                      product: "Pathological Control",
                      packSize: "1 x 5 ml",
                      shelfLife: "24 Months",
                      note: "Also available: 3 x 5 ml",
                    },
                    {
                      product: "Multi-calibrator",
                      packSize: "1 x 3 ml",
                      shelfLife: "24 Months",
                      note: "Also available: 3 x 3 ml",
                    },
                  ],
                },
              },
            ],
          },
          {
            id: "serology",
            name: "2. SEROLOGY",
            description: "Latex Slide Tests and Infectious Serology",
            icon: Shield,
            color: "from-green-400 to-green-600",
            bgColor: "bg-green-100",
            subcategories: [
              {
                id: "latex-slide",
                name: "B-SEROLOGY - 1-LATEX SLIDE TEST",
                tableData: {
                  headers: [
                    "PRODUCT",
                    "METHOD",
                    "TYPE",
                    "TEST/KIT",
                    "Shelf Life",
                  ],
                  rows: [
                    {
                      product: "ASO (Antistreptolysin-O Titre)",
                      method: "Slide",
                      type: "Latex",
                      tests: "100",
                      shelfLife: "24 Months",
                      note: "Complete Kit available",
                    },
                    {
                      product: "CRP (C-Reactive Protein)",
                      method: "Slide",
                      type: "Latex",
                      tests: "100",
                      shelfLife: "24 Months",
                      note: "Complete Kit available",
                    },
                    {
                      product: "RF (Rheumatoid Factor)",
                      method: "Slide",
                      type: "Latex",
                      tests: "100",
                      shelfLife: "24 Months",
                      note: "Complete Kit available",
                    },
                  ],
                },
              },
              {
                id: "infectious-serology",
                name: "B-SEROLOGY - 2-INFECTIOUS SEROLOGY",
                tableData: {
                  headers: [
                    "PRODUCT",
                    "METHOD",
                    "PACK SIZE",
                    "TEST/KIT",
                    "Shelf Life",
                  ],
                  rows: [
                    {
                      product: "Brucella - A",
                      method: "Slide",
                      packSize: "1 x 5 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                    },
                    {
                      product: "Brucella - A",
                      method: "Slide",
                      packSize: "1 x 5 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                    },
                    {
                      product: "RPR Syphilis Test",
                      method: "Slide",
                      packSize: "1 x 2 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                    },
                    {
                      product: "Rose Bengal",
                      method: "Slide",
                      packSize: "1 x 5 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                    },
                    {
                      product: "Widal Test S. Typhi H",
                      method: "Slide",
                      packSize: "1 x 5 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                    },
                    {
                      product: "Widal Test S. Typhi O",
                      method: "Slide",
                      packSize: "1 x 5 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                    },
                    {
                      product: "Widal Test S. Para typhi AH",
                      method: "Slide",
                      packSize: "1 x 5 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                    },
                    {
                      product: "Widal Test S. Para typhi AO",
                      method: "Slide",
                      packSize: "1 x 5 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                    },
                    {
                      product: "Widal Test S. Para typhi BH",
                      method: "Slide",
                      packSize: "1 x 5 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                    },
                    {
                      product: "Widal Test S. Para typhi BO",
                      method: "Slide",
                      packSize: "1 x 5 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                    },
                    {
                      product: "Widal Test S. Para typhi CH",
                      method: "Slide",
                      packSize: "1 x 5 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                    },
                    {
                      product: "Widal Test S. Para typhi CO",
                      method: "Slide",
                      packSize: "1 x 5 ml",
                      tests: "100",
                      shelfLife: "24 Months",
                    },
                  ],
                },
              },
            ],
          },
          {
            id: "immuno-turbidimetry",
            name: "3. IMMUNO-TURBIDIMETRY",
            description: "Particle Enhanced Immunoassays",
            icon: Activity,
            color: "from-purple-400 to-purple-600",
            bgColor: "bg-purple-100",
            subcategories: [
              {
                id: "immuno-turbidimetry-all",
                name: "C-IMMUNO-TURBIDIMETRY",
                tableData: {
                  headers: [
                    "PRODUCT",
                    "METHOD",
                    "PACK SIZE",
                    "TEST/KIT",
                    "Shelf Life",
                  ],
                  rows: [
                    {
                      product: "ASO",
                      method: "Particle enhanced",
                      packSize: "50 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                    },
                    {
                      product: "CRP",
                      method: "Particle enhanced",
                      packSize: "50 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                    },
                    {
                      product: "D-DIMER",
                      method: "Particle enhanced",
                      packSize: "20 ml",
                      tests: "40",
                      shelfLife: "18 Months",
                    },
                    {
                      product: "Ferritin",
                      method: "Particle enhanced",
                      packSize: "50 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                    },
                    {
                      product: "HbA1c",
                      method: "Particle enhanced",
                      packSize: "40 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                    },
                    {
                      product: "Microalbumin",
                      method: "Particle enhanced",
                      packSize: "50 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                    },
                    {
                      product: "Vitamin D",
                      method: "Particle enhanced",
                      packSize: "20 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                    },
                  ],
                },
              },
            ],
          },
          {
            id: "blood-groups-hemostasis",
            name: "4. BLOOD GROUPS AND HEMOSTASIS",
            description: "Blood Typing and Coagulation Reagents",
            icon: Droplet,
            color: "from-red-400 to-red-600",
            bgColor: "bg-red-100",
            subcategories: [
              {
                id: "blood-groups-hemostasis-all",
                name: "D-BLOOD GROUPS AND HEMOSTASIS",
                tableData: {
                  headers: [
                    "PRODUCT",
                    "METHOD",
                    "PACK SIZE",
                    "TEST/KIT",
                    "Shelf Life",
                  ],
                  rows: [
                    {
                      product: "Anti A IgM",
                      method: "Slide",
                      packSize: "1 x 10 ml",
                      tests: "200",
                      shelfLife: "18 Months",
                      note: "Also available: 10 x 10 ml (2000 tests)",
                    },
                    {
                      product: "Anti B IgM",
                      method: "Slide",
                      packSize: "1 x 10 ml",
                      tests: "200",
                      shelfLife: "18 Months",
                      note: "Also available: 10 x 10 ml (2000 tests)",
                    },
                    {
                      product: "Anti D IgG + IgM",
                      method: "Slide",
                      packSize: "1 x 10 ml",
                      tests: "200",
                      shelfLife: "18 Months",
                      note: "Also available: 10 x 10 ml (2000 tests)",
                    },
                    {
                      product: "PT Reagent ISI 1.5",
                      method: "Clot Detection",
                      packSize: "4 x 5 ml",
                      tests: "200",
                      shelfLife: "18 Months",
                      note: "Also available: 8 x 5 ml (400 tests)",
                    },
                    {
                      product: "APTT Reagent",
                      method: "Clot Detection",
                      packSize: "2 x 5 ml",
                      tests: "100",
                      shelfLife: "18 Months",
                      note: "Also available: 4 x 5 ml (200 tests)",
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "elhoda-auto",
        name: "II. ELHODA AUTO-ANALYZER SERIES REAGENTS",
        description: "Reagents for ELHODA Auto-Analyzer Systems",
        icon: Layers,
        color: "from-amber-400 to-amber-600",
        bgColor: "bg-amber-50",
        subcategories: [
          {
            id: "elhoda-substrates",
            name: "ELHODA AUTO-ANALYZER SERIES REAGENTS - I-SUBSTRATES",
            icon: TestTube,
            bgColor: "bg-amber-100",
            tableData: {
              headers: ["PRODUCT", "R1 Size", "R2 Size", "TEST/KIT"],
              rows: [
                { product: "Albumin", r1: "5 x 42 ml", r2: "—", tests: "800" },
                {
                  product: "Cholesterol",
                  r1: "5 x 42 ml",
                  r2: "—",
                  tests: "800",
                },
                {
                  product: "Creatinine Jaffe",
                  r1: "4 x 42 ml",
                  r2: "2 x 21 ml",
                  tests: "800",
                },
                {
                  product: "Direct Bilirubin",
                  r1: "4 x 42 ml",
                  r2: "2 x 17 ml",
                  tests: "800",
                },
                { product: "Glucose", r1: "5 x 42 ml", r2: "—", tests: "800" },
                {
                  product: "HDL Cholesterol Direct",
                  r1: "3 x 42 ml",
                  r2: "2 x 21 ml",
                  tests: "800",
                },
                {
                  product: "Total bilirubin",
                  r1: "5 x 42 ml",
                  r2: "—",
                  tests: "800",
                },
                {
                  product: "Total Protein",
                  r1: "5 x 42 ml",
                  r2: "—",
                  tests: "800",
                },
                {
                  product: "Triglycerides",
                  r1: "5 x 42 ml",
                  r2: "—",
                  tests: "800",
                },
                {
                  product: "Urea UV",
                  r1: "4 x 42 ml",
                  r2: "2 x 21 ml",
                  tests: "800",
                },
                {
                  product: "Uric Acid",
                  r1: "4 x 42 ml",
                  r2: "2 x 21 ml",
                  tests: "800",
                },
              ],
            },
          },
          {
            id: "elhoda-enzymes",
            name: "ELHODA AUTO-ANALYZER SERIES REAGENTS - II-ENZYMES",
            icon: Table,
            bgColor: "bg-amber-100",
            tableData: {
              headers: ["PRODUCT", "R1 Size", "R2 Size", "TEST/KIT"],
              rows: [
                {
                  product: "ALT/GPT",
                  r1: "4 x 42 ml",
                  r2: "2 x 21 ml",
                  tests: "800",
                },
                {
                  product: "ALP",
                  r1: "4 x 42 ml",
                  r2: "2 x 21 ml",
                  tests: "800",
                },
                {
                  product: "AST/GOT",
                  r1: "4 x 42 ml",
                  r2: "2 x 21 ml",
                  tests: "800",
                },
                {
                  product: "CK",
                  r1: "4 x 42 ml",
                  r2: "2 x 21 ml",
                  tests: "800",
                },
                {
                  product: "CK-MB",
                  r1: "4 x 42 ml",
                  r2: "2 x 21 ml",
                  tests: "800",
                },
                {
                  product: "LDH",
                  r1: "4 x 42 ml",
                  r2: "2 x 21 ml",
                  tests: "800",
                },
                {
                  product: "g-GT",
                  r1: "4 x 42 ml",
                  r2: "2 x 21 ml",
                  tests: "800",
                },
              ],
            },
          },
          {
            id: "elhoda-electrolytes",
            name: "ELHODA AUTO-ANALYZER SERIES REAGENTS - III-ELECTROLYTES",
            icon: Activity,
            bgColor: "bg-amber-100",
            tableData: {
              headers: ["PRODUCT", "R1 Size", "R2 Size", "TEST/KIT"],
              rows: [
                { product: "Calcium", r1: "5 x 42 ml", r2: "—", tests: "800" },
                { product: "Chloride", r1: "5 x 42 ml", r2: "—", tests: "800" },
                {
                  product: "Magnesium",
                  r1: "5 x 42 ml",
                  r2: "—",
                  tests: "800",
                },
                {
                  product: "Phosphorus",
                  r1: "5 x 42 ml",
                  r2: "—",
                  tests: "800",
                },
                { product: "Zinc", r1: "5 x 42 ml", r2: "—", tests: "800" },
              ],
            },
          },
          {
            id: "elhoda-immunoturbidimetry",
            name: "ELHODA AUTO-ANALYZER SERIES REAGENTS - IV-IMMUNOTURBIDIMETRY",
            icon: Atom,
            bgColor: "bg-amber-100",
            tableData: {
              headers: ["PRODUCT", "R1 Size", "R2 Size", "TEST/KIT"],
              rows: [
                {
                  product: "ASO",
                  r1: "4 x 22 ml",
                  r2: "2 x 11 ml",
                  tests: "400",
                },
                {
                  product: "CRP",
                  r1: "4 x 22 ml",
                  r2: "2 x 11 ml",
                  tests: "400",
                },
                {
                  product: "HbA1c",
                  r1: "4 x 23 ml",
                  r2: "2 x 16 ml",
                  tests: "400",
                },
                {
                  product: "MAU",
                  r1: "4 x 22 ml",
                  r2: "1 x 13 ml",
                  tests: "400",
                },
                {
                  product: "RF",
                  r1: "4 x 22 ml",
                  r2: "2 x 11 ml",
                  tests: "400",
                },
                {
                  product: "25-OH VIT D",
                  r1: "4 x 16 ml",
                  r2: "2 x 8.5 ml",
                  tests: "400",
                },
              ],
            },
          },
        ],
      },
    ],
  },
];

export const ipcCategories = [
  {
    id: "steam-sterilization",
    name: "STEAM STERILIZATION ASSURANCE SYSTEMS",
    description:
      "Complete range of parametric and biological assurance systems for steam sterilization",
    icon: Shield,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    type: "main-category",
    subcategories: [
      {
        id: "parametric-assurance",
        name: "1. Parametric Assurance Systems (Full range of Chemical Indicators)",
        description:
          "Comprehensive chemical indicator systems for steam sterilization monitoring",
        icon: Activity,
        color: "from-blue-400 to-blue-600",
        bgColor: "bg-blue-100",
        subcategories: [
          {
            id: "autoclave-tape",
            name: "I. Autoclave Tape for Steam Sterilization",
            description:
              "Type 1 process indicator for distinguishing processed from unprocessed items",
            icon: Tag,
            bgColor: "bg-blue-100",
            type: "product",
            image: "/autoclave-tape.png",
            features: [
              "Distinguishes processed from unprocessed items by visually confirming exposure to steam",
              "Excellent adhesion to various wraps (paper, linen, non-woven)",
              "Latex-free medical grade crepe paper substrate",
              "Surface allows for writing with standard pen or ParaSure PIP marker for batch tracking",
              "Clear permanent visual color change from White/Off-White to Brown",
            ],
            specifications: {
              headers: ["Feature", "Specification"],
              rows: [
                {
                  feature: "Classification",
                  specification: "EN-ISO 11140-1 (Type 1 Process Indicator)",
                },
                {
                  feature: "Operating Temperature",
                  specification: "121°C to 134°C",
                },
                {
                  feature: "Substrate Material",
                  specification: "Medical Grade Crepe Paper",
                },
                {
                  feature: "Shelf Life",
                  specification: "2 Years from Date of Manufacture",
                },
                {
                  feature: "Storage Conditions",
                  specification: "10°C to 30°C, 30% to 70% RH",
                },
                {
                  feature: "Traceability",
                  specification: "Lot No. and Expiration Date printed on core",
                },
              ],
            },
            packaging: {
              headers: [
                "Product Code",
                "Product Description",
                "Package Contents",
                "Inner Box Quantity",
              ],
              rows: [
                {
                  code: "PS 1575",
                  description: "Steam Autoclave Tape 12 mm×50 m",
                  contents: "1 Roll",
                  quantity: "64 rolls",
                },
                {
                  code: "PS 1510",
                  description: "Steam Autoclave Tape 18 mm×50 m",
                  contents: "1 Roll",
                  quantity: "48 rolls",
                },
                {
                  code: "PS 1520",
                  description: "Steam Autoclave Tape 25 mm×50 m",
                  contents: "1 Roll",
                  quantity: "36 rolls",
                },
              ],
            },
          },
          {
            id: "bowie-dick-test",
            name: "II. PARASURE® Bowie & Dick Test Systems (Type 2 Specific Test Indicator)",
            description:
              "Validated daily monitoring for pre-vacuum steam sterilizers, ready-to-use test pack",
            icon: TestTube,
            bgColor: "bg-blue-100",
            type: "product",
            image: "/bowie-dick.png",
            features: [
              "Diagnoses air removal, wet steam, superheated steam, and non-condensable gases",
              "Ready-to-use test pack - no preparation required",
              "Independently validated to mirror performance of original towel pack",
              "Clear and accurate color change from Pink to Black",
              "Non-toxic, lead-free, single-use disposable",
            ],
            specifications: {
              headers: ["Feature", "Specification"],
              rows: [
                {
                  feature: "Classification",
                  specification: "EN-ISO 11140-1 (Type 2), EN ISO 11140-4",
                },
                {
                  feature: "Operating Temperature",
                  specification: "134°C to 137°C",
                },
                {
                  feature: "Time",
                  specification: "3.3 min - 3.5 min (minimum holding time)",
                },
                {
                  feature: "Indicator Type",
                  specification:
                    "Both internal (diagnostic) and external (process) included",
                },
                {
                  feature: "Substrate",
                  specification: "Silk Screen Printed, Lead-Free",
                },
              ],
            },
            packaging: {
              headers: [
                "Product Code",
                "Product Description",
                "Package Contents",
              ],
              rows: [
                {
                  code: "PS 1020",
                  description:
                    "Daily Bowie & Dick Test Pack: Steam Penetration",
                  contents: "Box of 30 Test Packs",
                },
                {
                  code: "PS 1030",
                  description: "A4 Format",
                  contents: "Box of 50 Sheets",
                },
              ],
            },
          },
          {
            id: "type-4-steam",
            name: "III. PARASURE® Type 4 Multivariable Chemical Indicator for Steam",
            description:
              "Internal assurance for all steam sterilization cycles (ISO 11140-1 Type 4)",
            icon: Layers,
            bgColor: "bg-blue-100",
            type: "product",
            image: "/type4-steam.png",
            features: [
              "For use in every tray, peel-pouch, or item during steam sterilization cycles",
              "Monitors two or more critical parameters (Time, Temperature, and Saturated Steam)",
              "CE Marked, UDI Numbered with patented design",
              "Clear color change from Pink (Unprocessed) to Black (Processed)",
              "Non-toxic formulation - key advantage over many existing Type 4 indicators",
            ],
            specifications: {
              headers: ["Feature", "Specification"],
              rows: [
                {
                  feature: "Classification",
                  specification:
                    "ISO 11140-1 Part 1 Type 4 (Multi-Variable Indicator)",
                },
                {
                  feature: "Operating Range",
                  specification: "121°C to 134°C",
                },
                {
                  feature: "Monitored Parameters",
                  specification: "Time, Temperature, and Saturated Steam",
                },
                {
                  feature: "Material",
                  specification: "Laminated Strip",
                },
                {
                  feature: "Storage",
                  specification: "10°C - 38°C in resealable bag",
                },
                {
                  feature: "Traceability",
                  specification:
                    "Unique identification code (LOT number) on each strip",
                },
              ],
            },
            packaging: {
              headers: [
                "Product Code",
                "Product Description",
                "Package Contents",
              ],
              rows: [
                {
                  code: "PS 1100",
                  description: "Type 4 Multivariable Indicator for Steam",
                  contents: "200 or 400 strips (select upon ordering)",
                },
                {
                  code: "PS 1110",
                  description: "Type 4 Multi-Parameter Indicator",
                  contents: "200 or 400 strips (select upon ordering)",
                },
              ],
            },
          },
          {
            id: "type-5-integrating",
            name: "IV. PARASURE® Type 5 Integrating Chemical Indicators",
            description:
              "Highest level of chemical assurance for steam sterilization (ISO 11140-1 Type 5)",
            icon: TrendingUp,
            bgColor: "bg-blue-100",
            type: "product",
            image: "/type5-integrating.png",
            features: [
              "Highest level of chemical assurance for steam sterilization",
              "Available in Moving Line and Triangle Indicator formats",
              "CE Marked, UDI Numbered with patented design",
              "Non-toxic, lead-free formulation",
              "Easy to interpret and record results",
            ],
            specifications: {
              headers: ["Feature", "Specification"],
              rows: [
                {
                  feature: "Classification",
                  specification:
                    "ISO 11140-1 Part 1 Type 5 (Integrating Indicator)",
                },
                {
                  feature: "Operating Range",
                  specification: "121°C to 134°C",
                },
                {
                  feature: "Monitored Parameters",
                  specification:
                    "Time, Temperature, and Steam saturation simultaneously",
                },
                {
                  feature: "Result Interpretation",
                  specification:
                    "PASS/FAIL based on color change or bar movement",
                },
                {
                  feature: "Storage",
                  specification: "10°C - 38°C in resealable bag",
                },
              ],
            },
            packaging: {
              headers: [
                "Product Code",
                "Product Description",
                "Package Contents",
              ],
              rows: [
                {
                  code: "PS 1830",
                  description:
                    "Integrating Chemical Indicator Moving Line - Type 5",
                  contents: "Box of 500 pieces",
                },
                {
                  code: "PS 1840",
                  description: "Type 5 Integrator Steam (Triangle Indicator)",
                  contents: "Bag of 250 Indicators",
                },
              ],
            },
          },
          {
            id: "type-6-emulating",
            name: "V. PARASURE® Type 6 Emulating Indicator",
            description:
              "Cycle-specific assurance for steam sterilization (ISO 11140-1 Type 6)",
            icon: Target,
            bgColor: "bg-blue-100",
            type: "product",
            image: "/type6-emulating.png",
            features: [
              "Cycle-specific calibration for individual steam sterilization cycles",
              "Monitors all three critical parameters: Time, Temperature, and Steam saturation",
              "Specifically calibrated to cycle requirements",
              "Clear and abrupt color change from Pale Pink to Teal/Darker",
              "CE Marked, non-toxic, lead-free",
            ],
            specifications: {
              headers: ["Feature", "Specification"],
              rows: [
                {
                  feature: "Classification",
                  specification: "EN ISO 11140-1 Type 6 (Emulating Indicator)",
                },
                {
                  feature: "Calibration",
                  specification:
                    "Specifically calibrated to individual cycle requirements",
                },
                {
                  feature: "Monitored Parameters",
                  specification: "Time, Temperature, and Steam saturation",
                },
                {
                  feature: "Color Change",
                  specification:
                    "Pale Pink (Unprocessed) to Teal/Darker (Processed)",
                },
                {
                  feature: "Storage",
                  specification: "10°C - 38°C in resealable bag",
                },
                {
                  feature: "Traceability",
                  specification:
                    "Unique identification code (LOT number) on each strip",
                },
              ],
            },
            packaging: {
              headers: [
                "Product Code",
                "Calibration (Cycle)",
                "Package Contents",
              ],
              rows: [
                {
                  code: "PS 1110",
                  calibration: "3.5 minutes at 134°C",
                  contents: "Box of 200 Indicators",
                },
                {
                  code: "PS 1130",
                  calibration: "5.3 minutes at 134°C",
                  contents: "Available upon request",
                },
                {
                  code: "PS 1140",
                  calibration: "4.0 minutes at 134°C",
                  contents: "Available upon request",
                },
                {
                  code: "PS 1160",
                  calibration: "7.0 minutes at 134°C",
                  contents: "Available upon request",
                },
              ],
            },
          },
          {
            id: "helix-device",
            name: "VI. PARASURE® EN 867-5 Helix Device",
            description:
              "Hollow lumen challenge device for Type B vacuum-assisted steam sterilizers",
            icon: Cpu,
            bgColor: "bg-blue-100",
            type: "product",
            image: "/helix-device.png",
            features: [
              "Daily testing for all Type B vacuum-assisted steam sterilizers",
              "ISO 13060 compliance for hollow load testing",
              "Complete system with 1.5 meter hollow lumen device and indicators",
              "Easy to interpret with clear visual change from Pink to Black",
              "Non-toxic, lead-free, single-use indicators",
            ],
            specifications: {
              headers: ["Feature", "Specification"],
              rows: [
                {
                  feature: "Classification",
                  specification: "EN 867 Part 5 (Hollow Load Test Device)",
                },
                {
                  feature: "Indicator Classification",
                  specification:
                    "EN-ISO 11140-1 (Type 2 Specific Test Indicator)",
                },
                {
                  feature: "Operating Temperature",
                  specification: "134°C / 132°C",
                },
                {
                  feature: "System Composition",
                  specification:
                    "1.5 meter hollow lumen device + self-adhesive indicators",
                },
                {
                  feature: "Storage Conditions",
                  specification: "10°C - 30°C at 30% - 70% RH",
                },
                {
                  feature: "Usability",
                  specification: "Complete system (Device and 250 indicators)",
                },
              ],
            },
            packaging: {
              headers: [
                "Product Code",
                "Product Description",
                "Package Contents",
              ],
              rows: [
                {
                  code: "PS 1400",
                  description: "EN 867-5 Helix Device",
                  contents: "1 Device and 250 Indicators",
                },
              ],
            },
          },
        ],
      },
      {
        id: "biological-indicators",
        name: "2. Steam Biological Indicators (Self-Contained BIs and Rapid Readout Systems)",
        description:
          "Complete biological indicator systems for steam sterilization validation",
        icon: Microscope,
        color: "from-green-400 to-green-600",
        bgColor: "bg-green-100",
        subcategories: [
          {
            id: "scbi-steam",
            name: "I. PARASURE® Self-Contained Biological Indicators (SCBI) for Steam",
            description:
              "Highest level of sterilization assurance with Geobacillus stearothermophilus spores",
            icon: FlaskConical,
            bgColor: "bg-green-100",
            type: "product",
            image: "/superfast-bi.png",
            features: [
              "Contains Geobacillus stearothermophilus (ATCC 7953) at 10⁶ population",
              "Self-contained sealed glass ampoule with culture medium",
              "Dramatic color change from Purple to Yellow indicates failure",
              "Final results within 24 hours via standard incubation",
              "Non-toxic, easy to interpret results",
            ],
            specifications: {
              headers: ["Feature", "Specification"],
              rows: [
                {
                  feature: "Classification",
                  specification: "Conforms to EN ISO 11138",
                },
                {
                  feature: "Spore Organism",
                  specification: "Geobacillus stearothermophilus (ATCC 7953)",
                },
                {
                  feature: "Spore Population",
                  specification: "10⁶",
                },
                {
                  feature: "Medium",
                  specification:
                    "Soybean casein digest culture medium in sealed glass ampoule",
                },
                {
                  feature: "Readout Time",
                  specification: "24 hours via standard incubation",
                },
                {
                  feature: "Incubation Temperature",
                  specification: "60°C recommended for steam BIs",
                },
                {
                  feature: "Shelf Life",
                  specification:
                    "Room temperature storage, check expiration date",
                },
              ],
            },
            packaging: {
              headers: [
                "Product Code",
                "Product Description",
                "Package Contents",
              ],
              rows: [
                {
                  code: "PS 1900",
                  description:
                    "Self-Contained Biological Indicators for Steam Sterilization",
                  contents: "10 boxes of 100 units (Total 1000 indicators)",
                },
              ],
            },
          },
          {
            id: "ps1930-incubator",
            name: "II. PARASURE PS1930 Incubator",
            description: "Dual-temperature incubator for biological indicators",
            icon: Thermometer,
            bgColor: "bg-green-100",
            type: "product",
            image: "/ps1930-incubator.png",
            features: [
              "Switchable temperatures for EO (37°C) and Steam (60°C) BIs",
              "21 metal positions for biological indicators",
              "Complies with Low Voltage and EMC Directives",
              "Universal voltage range (100-240V AC)",
              "Designed specifically for biological indicators",
            ],
            specifications: {
              headers: ["Feature", "Specification"],
              rows: [
                {
                  feature: "Temperature Range",
                  specification: "37°C±2°C or 60°C±2°C (switchable)",
                },
                {
                  feature: "Capacity",
                  specification: "21 metal positions",
                },
                {
                  feature: "Safety Compliance",
                  specification:
                    "Low Voltage Directive 2014/35/EU and EMC Directive 2014/30/EU",
                },
                {
                  feature: "Voltage",
                  specification: "100-240 V AC",
                },
                {
                  feature: "Power",
                  specification: "15 W (Average: 8 W)",
                },
                {
                  feature: "Self-Life",
                  specification: "5 Years",
                },
                {
                  feature: "Compatibility",
                  specification:
                    "Biological Indicators only (not compatible with fluorescence readout BIs)",
                },
              ],
            },
          },
          {
            id: "superfast-bi-system",
            name: "III. PARASURE® Superfast Biological Indicator System",
            description:
              "Ultra-rapid sterility assurance for steam and VHP sterilization",
            icon: Zap,
            bgColor: "bg-green-100",
            type: "product",
            features: [
              "20-minute readout time for rapid results",
              "Barcode for reader traceability",
              "No laboratory required for testing",
              "Compatible with all VH₂O₂ sterilization cycles",
              "Conforms to EN ISO 11138 standards",
            ],
            specifications: {
              headers: [
                "Product Code",
                "Name",
                "Sterilization Process",
                "Readout Time",
                "Key Feature",
              ],
              rows: [
                {
                  code: "PS 1950",
                  name: "Superfast BI",
                  image: "/scbi-steam.png",
                  process: "Steam (132°C, 134°C, 135°C pre-vacuum and 121°C)",
                  readout: "20 minutes",
                  feature: "Each BI has a barcode for reader traceability",
                },
                {
                  code: "PS 1960",
                  name: "Superfast BI",
                  image: "/superfast.png",
                  process: "Vaporised Hydrogen Peroxide (VH₂O₂)",
                  readout: "20 minutes",
                  feature: "Can be used in all VH₂O₂ sterilization cycles",
                },
                {
                  code: "PS 1995",
                  name: "Rapid Challenge Steam Test Pack",
                  image: "/rapid-challenge-steam.png",
                  process: "Steam",
                  readout: "20 minutes",
                  feature:
                    "Contains BI and Class 5 Integrator, equivalent to AAMI 16-towel PCD",
                },
              ],
            },
          },
          {
            id: "rapid-readout-system",
            name: "IV. PARASURE® Rapid Readout Biological System",
            description:
              "Advanced reader system for six major sterilization BI types",
            icon: Monitor,
            bgColor: "bg-green-100",
            type: "product",
            image: "/rapid-readout.png",
            features: [
              "Compatible with six major sterilization BI types",
              "8 slots for simultaneous incubation",
              "7-inch TFT Touch Screen display",
              "LAN, USB, DC Input/Output connectivity",
              "Closed system design",
            ],
            specifications: {
              headers: ["Feature", "Specification"],
              rows: [
                {
                  feature: "Compatibility",
                  specification:
                    "Six major sterilization BI types (Steam, VHP, EO, LTSF, etc.)",
                },
                {
                  feature: "Readout Time",
                  specification: "4 – 240 minutes (cycle-dependent)",
                },
                {
                  feature: "Incubation Slots",
                  specification: "8 slots",
                },
                {
                  feature: "Incubation Temperature",
                  specification: "58°C±2°C and 36°C±1°C (adjustable)",
                },
                {
                  feature: "Display",
                  specification: "7 inch TFT Touch Screen",
                },
                {
                  feature: "Connectivity",
                  specification: "LAN, USB, DC Input/Output",
                },
                {
                  feature: "Dimensions",
                  specification: "246 mm × 214 mm × 100 mm (Net Weight: 1 kg)",
                },
              ],
            },
            packaging: {
              headers: ["Product Code", "Product Description"],
              rows: [
                {
                  code: "PS 1940",
                  description: "Rapid Readout Biological System",
                },
              ],
            },
          },
          {
            id: "mini-autoreader",
            name: "V. PARASURE® Mini Auto-reader System",
            description:
              "Compact auto-reader system for rapid biological indicator monitoring",
            icon: Smartphone,
            bgColor: "bg-green-100",
            type: "product",
            image: "/mini-autoreader.png",
            features: [
              "Spectrum analysis technology for fluorescence monitoring",
              "Adjustable temperature control (58°C or 37°C)",
              "Visual and sound alarm system",
              "Includes printer, scanner, and digital tube display",
              "Ethernet and USB connectivity",
            ],
            specifications: {
              headers: ["Feature", "Specification"],
              rows: [
                {
                  feature: "Compatibility",
                  specification:
                    "Steam, VHP/H₂O₂, LTSF, and EO sterilization processes",
                },
                {
                  feature: "Readout Principle",
                  specification:
                    "Spectrum analysis technology monitors fluorescence changes",
                },
                {
                  feature: "Readout Time",
                  specification: "20 min (Steam/VHP), 1 hr (LTSF), 3-4 hr (EO)",
                },
                {
                  feature: "Incubation Temperature",
                  specification: "58°C or 37°C (user-adjustable)",
                },
                {
                  feature: "Alarm System",
                  specification: "Visual and Sound Alarm system",
                },
                {
                  feature: "External Features",
                  specification: "Printer, Scanner, Digital Tube Display",
                },
                {
                  feature: "Connections",
                  specification: "Ethernet Port and USB port",
                },
              ],
            },
            packaging: {
              headers: ["Product Code", "Product Description"],
              rows: [
                {
                  code: "PS1970",
                  description: "Mini Auto-reader System",
                },
              ],
            },
          },
          {
            id: "protein-test-kit",
            name: "VI. PARASURE® Protein Test Kit",
            description:
              "Rapid detection of residual protein residues on medical devices",
            icon: TestTube,
            bgColor: "bg-green-100",
            type: "product",
            image: "/protein-test.png",
            features: [
              "Highly sensitive detection to within 1μg (one microgram)",
              "Clear results within 10 seconds (no incubation required)",
              "Dye-binding solution methodology",
              "Positive control supplied for reagent efficacy confirmation",
              "Conforms to EN ISO 15883 recommendations",
            ],
            specifications: {
              headers: ["Feature", "Specification"],
              rows: [
                {
                  feature: "Intended Purpose",
                  specification:
                    "Detection of residual protein residues on surfaces and endoscope channels",
                },
                {
                  feature: "Conforms to",
                  specification:
                    "EN ISO 15883 (Requirements for washer-disinfectors)",
                },
                {
                  feature: "Methodology",
                  specification:
                    "Dye-binding solution used in clinical chemistry",
                },
                {
                  feature: "Sensitivity",
                  specification: "1μg (one microgram)",
                },
                {
                  feature: "Result Time",
                  specification: "Within 10 seconds",
                },
                {
                  feature: "Interpretation",
                  specification:
                    "Blue = Protein present, Brown/Yellow = No protein",
                },
                {
                  feature: "Storage",
                  specification:
                    "Room temperature (extended to 2 years if refrigerated)",
                },
              ],
            },
            packaging: {
              headers: [
                "Product Code",
                "Product Description",
                "Package Contents",
              ],
              rows: [
                {
                  code: "PS 1700",
                  description: "Protein Test Kit (Standard)",
                  contents:
                    "Box of 25 tests with 25 short swabs & 2 positive controls",
                },
                {
                  code: "PS 1710",
                  description: "ParaScope Protein Test Kit (1.9 mm Head)",
                  contents:
                    "Box of 25 tests with 25 EndoSwabs & 1 positive control",
                },
                {
                  code: "PS 1720",
                  description: "ParaScope Protein Test Kit (2.8 mm Head)",
                  contents:
                    "Box of 25 tests with 25 EndoSwabs & 1 positive control",
                },
                {
                  code: "PS 1730",
                  description: "ParaScope Protein Test Kit (3.7 mm Head)",
                  contents:
                    "Box of 25 tests with 25 EndoSwabs & 1 positive control",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: "cleaning-documentation",
    name: "CLEANING AND DOCUMENTATION ASSURANCE SYSTEMS",
    description:
      "Complete systems for cleaning efficacy monitoring and sterilization documentation",
    icon: ClipboardCheck,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50",
    type: "main-category",
    subcategories: [
      {
        id: "cei",
        name: "I. PARASURE® CEI (Cleaning Efficacy Indicator)",
        description:
          "Monitoring cleaning efficiency of washer-disinfectors and ultrasonic machines",
        icon: Droplets,
        bgColor: "bg-purple-100",
        type: "product",
        image: "/cei.png",
        features: [
          "Quantitative test soil simulation of human blood",
          "Single-use stainless steel substrate",
          "Easy to use and read results",
          "Conforms to ISO 15883 standards",
          "18-month shelf life",
        ],
        specifications: {
          headers: ["Feature", "Specification"],
          rows: [
            {
              feature: "Classification",
              specification: "Conforms to ISO 15883",
            },
            {
              feature: "Application",
              specification:
                "Monitoring cleaning efficiency of washer-disinfectors and ultrasonic machines",
            },
            {
              feature: "Substrate Material",
              specification:
                "Special cleaning indicator made of stainless steel",
            },
            {
              feature: "Test Soil",
              specification:
                "Contaminated with quantitative measure of test soil simulation of human blood",
            },
            {
              feature: "Usability",
              specification: "Routine monitor/validation tool, single-use",
            },
            {
              feature: "Shelf Life",
              specification: "18 months",
            },
          ],
        },
        packaging: {
          headers: ["Product Code", "Product Description", "Package Contents"],
          rows: [
            {
              code: "PS 1600",
              description: "ParaSure CEI (Cleaning Efficacy Indicator)",
              contents: "Box of 50 indicators",
            },
          ],
        },
      },
      {
        id: "duplex-label-system",
        name: "II. PARASURE® Duplex 3 Line Documentation Label & Gun",
        description:
          "Traceability and documentation assurance system for sterilization processes",
        icon: Printer,
        bgColor: "bg-purple-100",
        type: "product",
        image: "/duplex-label.png",
        features: [
          "Duplex label for effective sterilization process record keeping",
          "Clear color change from pink to brown for steam",
          "Non-toxic, lead-free adhesive",
          "Compatible with 3-line documentation system",
          "Conforms to EN ISO 11140-1 Type 1",
        ],
        specifications: {
          headers: ["Feature", "Specification"],
          rows: [
            {
              feature: "Classification",
              specification: "Conforms to EN ISO 11140-1 Type 1",
            },
            {
              feature: "Operating Temperature",
              specification: "121°C - 134°C Steam",
            },
            {
              feature: "Indicator",
              specification: "Clear color change from pink to brown for steam",
            },
            {
              feature: "Safety",
              specification: "Non-toxic, Lead free",
            },
            {
              feature: "Adhesive",
              specification: "Non-toxic/Lead free Adhesive",
            },
          ],
        },
        packaging: {
          headers: ["Product Code", "Product Description", "Package Contents"],
          rows: [
            {
              code: "PS 1500",
              description: "Duplex 3 Line Documentation Labels",
              contents: "30 rolls of 400 labels/carton",
            },
            {
              code: "PS 1530",
              description: "3 Line Documentation Label Gun",
              contents: "Single Unit",
            },
            {
              code: "PS 1540",
              description: "Ink Cartridge for Label Gun",
              contents: "Single Unit",
            },
          ],
        },
      },
      {
        id: "ultrasonic-cavicheck",
        name: "III. PARASURE® ULTRASONIC CAVICHECK ULTRASONIC WASHER TEST",
        description:
          "Performance monitor for ultrasonic washer energy detection",
        icon: Waves,
        bgColor: "bg-purple-100",
        type: "product",
        image: "/cavicheck.png",
        features: [
          "Immediate results via colour change",
          "Detects sufficient energy for cavitation",
          "Suitable for archiving results",
          "Average colour change time: 6 min @ 27kHz",
          "Pre-prepared test with easy interpretation",
        ],
        specifications: {
          headers: ["Feature", "Specification"],
          rows: [
            {
              feature: "Product Type",
              specification: "Ultrasonic Washer Test (Performance Monitor)",
            },
            {
              feature: "Mechanism",
              specification:
                "Pre-prepared test showing immediate results via colour change",
            },
            {
              feature: "Result Indicators",
              specification: "Blue (FAIL) to Yellow (PASS)",
            },
            {
              feature: "Efficacy Detection",
              specification: "Detects sufficient energy for cavitation",
            },
            {
              feature: "Standard Performance",
              specification: "Average time for colour change: 6 min @ 27kHz",
            },
            {
              feature: "Warning Indicator",
              specification: "Slower change indicates weak spots",
            },
            {
              feature: "Archiving",
              specification: "Suitable for archiving",
            },
          ],
        },
        packaging: {
          headers: ["Product Code", "Product Description", "Package Contents"],
          rows: [
            {
              code: "PS-2221",
              description: "ULTRASONIC CAVICHECK",
              contents: "30 PCS Tests + 30 CS Archived Labels + 1 PCS IFU",
            },
          ],
        },
      },
      {
        id: "parachlor-tablets",
        name: "IV. PARACHLOR® Effervescent Disinfectant Tablets",
        description:
          "High-level, broad-spectrum disinfectant in simple tablet format",
        icon: Shield,
        bgColor: "bg-purple-100",
        type: "product",
        image: "/parachlor.png",
        features: [
          "100% biodegradable and surface-friendly",
          "pH same as human skin (won't burn or sting)",
          "Will not corrode like bleach or leave residue like Quats",
          "Manufactured in GMP facility conforming to European Standards",
          "Available in multiple tablet sizes and granule format",
        ],
        specifications: {
          headers: ["Feature", "Specification"],
          rows: [
            {
              feature: "Product Type",
              specification: "Effervescent Disinfectant Tablets",
            },
            {
              feature: "Active Ingredient",
              specification: "Registered as US EPA",
            },
            {
              feature: "Manufacturing",
              specification: "GMP facility, European Standards compliant",
            },
            {
              feature: "Shelf-Life",
              specification: "Tablets: 3 years, Granules: 2 years",
            },
            {
              feature: "Safety",
              specification:
                "100% biodegradable, surface-friendly, non-corrosive",
            },
            {
              feature: "Efficiency",
              specification:
                "Biocidal effectiveness maintained until chlorine consumed",
            },
          ],
        },
        packaging: {
          headers: ["Product Code", "Product Description", "Package Contents"],
          rows: [
            {
              code: "N/A",
              description: "PARACHLOR Tablets 1.7 concentration",
              contents: "Granule tub of 200 Tablets",
            },
            {
              code: "N/A",
              description: "PARACHLOR Tablets 2.5 concentration",
              contents: "Granule tub of 100 Tablets",
            },
          ],
        },
      },
    ],
  },
  {
    id: "instrument-reprocessing",
    name: "INSTRUMENT & SCOPE REPROCESSING",
    description:
      "Complete solutions for surgical instrument and endoscope reprocessing",
    icon: Scissors,
    color: "from-amber-400 to-amber-600",
    bgColor: "bg-amber-50",
    type: "main-category",
    subcategories: [
      {
        id: "parazyme-detergent",
        name: "I. Parazyme Neutral Enzymatic Detergent",
        description:
          "High-performance enzymatic detergent for surgical instruments and medical devices",
        icon: Droplet,
        bgColor: "bg-amber-100",
        type: "product",
        features: [
          "Neutral pH formulation gentle on instruments",
          "Compatible with all types of materials",
          "Effective in all water qualities (hard or soft)",
          "Compatible with all high-level disinfectants",
          "For pre-treatment and cleaning prior to disinfection and sterilization",
        ],
        specifications: {
          headers: ["Feature", "Specification"],
          rows: [
            {
              feature: "Product Type",
              specification: "High-Performance Enzymatic Detergent",
            },
            {
              feature: "Primary Use",
              specification:
                "Pre-treatment and cleaning of surgical instruments and medical devices",
            },
            {
              feature: "Formula pH",
              specification: "Neutral pH",
            },
            {
              feature: "Instrument Compatibility",
              specification:
                "Gentle on instruments, compatible with all materials",
            },
            {
              feature: "Water Quality",
              specification: "Effective in all water qualities (hard or soft)",
            },
            {
              feature: "Disinfectant Compatibility",
              specification:
                "Compatible with all high-level disinfectants (HLDs)",
            },
          ],
        },
        packaging: {
          headers: ["Product Code", "Product Description", "Package Contents"],
          rows: [
            {
              code: "N/A",
              description: "Parazyme Neutral Enzymatic Detergent",
              contents: "Gallon of 5 Liters",
            },
          ],
        },
      },
      {
        id: "instaclean-kit",
        name: "II. InstaClean Neutral Pre-Clean Kit",
        description:
          "Ready-to-use immersion system for instrument pre-cleaning",
        icon: Package,
        bgColor: "bg-amber-100",
        type: "product",
        image: "/instaclean.png",
        features: [
          "Ready-to-use pre-mixed neutral solution",
          "Integrated contoured sponge included",
          "CE Marked product",
          "Non-toxic, non-enzymatic formulation",
          "Single-use system for convenience",
        ],
        specifications: {
          headers: ["Feature", "Specification"],
          rows: [
            {
              feature: "Product Type",
              specification:
                "Ready-to-use Neutral, Non-Enzymatic Pre-Cleaning Kit",
            },
            {
              feature: "System Components",
              specification:
                "Integrated pre-mixed neutral solution and Contoured Sponge",
            },
            {
              feature: "Regulatory Status",
              specification: "CE Marked",
            },
            {
              feature: "Volume per Pouch",
              specification: "500 ml of pre-mixed neutral detergent",
            },
            {
              feature: "pH Value",
              specification: "7.0 to 7.5 (Neutral pH)",
            },
            {
              feature: "Enzyme Content",
              specification: "Non-enzymatic",
            },
            {
              feature: "Shelf Life",
              specification: "2 years from date of manufacture",
            },
            {
              feature: "Toxicity",
              specification: "Non-toxic",
            },
            {
              feature: "Number of Uses",
              specification: "Single use",
            },
          ],
        },
        packaging: {
          headers: ["Product Code", "Product Description", "Package Contents"],
          rows: [
            {
              code: "PS2300",
              description: "InstaClean Neutral Pre-Clean Kit",
              contents: "Box of 25 bags",
            },
          ],
        },
      },
    ],
  },
];

export const mockProducts = [
  {
    products: [
      {
        title: "sterile_swabs",
        image: "sterile_swabs.png",
        category: "MICROBIOLOGY",
        description:
          "Sterile swabs individually wrapped in peel-pack: medical paper + Polypropylene. Sterilized. For use when samples do not need to be transported.",
        code: "1/10",
        shaft_material: "snappable APS",
        tip_material: "Cotton",
        sterile: "STERILE EO",
        package: "Peel-pack",
        case_quantity: 100,
        case_weight: "1.55 gm",
        cases_per_pallet: 5000,
        expiry_date: "5 years",
      },
      {
        title: "sterile_swabs_in_round_tube",
        image: "sterile_swabs_in_round_tube.png",
        category: "MICROBIOLOGY",
        description:
          "Sterile dry swabs supplied in shockproof round bottom polypropylene tube, with a label sealing the cap. Dimensions of tube: Ø11.5 mm x 153.2 mm. Sterilized by ethylene oxide.",
        code: "1/14",
        shaft_material: "snappable PS",
        tip_material: "Cotton",
        sterile: "STERILE EO",
        package: "Peel-pack",
        case_quantity: 100,
        case_weight: "3.25 gm",
        cases_per_pallet: 3000,
        expiry_date: "5 years",
      },
      {
        title: "single_petri_dishes",
        image: "single_petri_dishes.png",
        category: "MICROBIOLOGY",
        description:
          "Made in crystal clear polystyrene. For single use, Supplied in groups of 12 units, packaged in polyethylene sleeves. Suitable for all bacteriological applications. Distortion free and perfectly flat to ensure even distribution of culture media. For consistent, reliable performance. Independently evaluated for sterility.",
        sizes: [
          {
            code: "1/7",
            description: "Ø57.5mm x 13mm",
            sterile: "STERILE EO",
            aseptic: true,
            case_quantity: "1 x 12",
            case_weight: "8.24 gm",
            cases_per_pallet: 50,
          },
          {
            code: "1/9",
            description: "Ø91.5mm x 12.5mm",
            sterile: "STERILE EO",
            aseptic: true,
            case_quantity: "1 x 12",
            case_weight: "17.90 gm",
            cases_per_pallet: 50,
          },
          {
            code: "1/11",
            description: "Ø140mm x 16.5mm",
            sterile: "STERILE EO",
            aseptic: true,
            case_quantity: "1 x 12",
            cases_per_pallet: 50,
          },
        ],
        expiry_date: "5 years",
      },
      {
        title: "petri_dish_two_compartments",
        image: "petri_dish_two_compartments.png",
        category: "MICROBIOLOGY",
        description:
          "Made in polystyrene. For single use, Aseptic. With three vents. Supplied in groups of 12 units, packaged in polyethylene sleeves.",
        code: "1/10",
        size_description: "Ø92mm×15.5mm Two compartments",
        sterile: "STERILE EO",
        aseptic: true,
        case_quantity: "1 x 12",
        case_weight: "18.8 gm",
        cases_per_pallet: 50,
        expiry_date: "5 years",
      },
      {
        title: "petri_dish_three_compartments",
        image: "petri_dish_three_compartments.png",
        category: "MICROBIOLOGY",
        description:
          "Made in polystyrene. For single use, Aseptic. With three vents. Supplied in groups of 12 units, packaged in polyethylene sleeves.",
        code: "1/14",
        size_description: "Ø92 x 15.5mm 3 compartments",
        sterile: "STERILE EO",
        aseptic: true,
        case_quantity: "1 x 12",
        cases_per_pallet: 50,
        expiry_date: "5 years",
      },
      {
        title: "disposable_sterile_inoculating_loop",
        image: "disposable_sterile_inoculating_loop.png",
        category: "MICROBIOLOGY",
        description:
          "Disposable Sterile Inoculating Loop. Made in polystyrene. For single use. Sterilized. Double use loops: at one of the ends there is a loop for streaking in Petri dishes, using both qualitative and quantitative techniques. At the other end there is a fine tip specially designed for counting colonies. Available in yellow color.",
        code: "1/9",
        loops_internal_diameter: "1 μl & 10 μl",
        loop_type: "double sided loops",
        presentation: "Individual pack",
        sterile: "STERILE EO",
        color: "Yellow",
        case_quantity: 25,
        case_weight: "1.66 gm",
        cases_per_pallet: 5000,
        expiry_date: "5 years",
      },
      {
        title: "specimen_container",
        image: "specimen_container.png",
        category: "MICROBIOLOGY",
        description:
          "Made in polystyrene (PP). For single use. The container is graduated in 10ml chart and includes a molded graduation and a label with space to write down the sample identification. This bottle is made of highly transparent polypropylene and has a cap with a discontinuous, red, ribbed high-density polyethylene thread for easy handling. The closure is airtight and highly secure thanks to the internal shutter incorporated in the cap. Can be sterile upon request.",
        sizes: [
          {
            code: "1/1/3",
            description: "Ø65mm x 45mm",
            sterile: "No",
            capacity_ml: 60,
            case_quantity: 12,
            case_weight: "9.37 gm",
            cases_per_pallet: 50,
          },
          {
            code: "1/1/1",
            description: "Ø58.2mm x 71.8mm",
            sterile: "No",
            capacity_ml: 120,
            case_quantity: 12,
            case_weight: "15.64 gm",
            cases_per_pallet: 50,
          },
          {
            description: "100ml container",
            sterile: "No",
            capacity_ml: 100,
            case_quantity: 12,
            cases_per_pallet: 50,
          },
          {
            description: "140ml container",
            sterile: "No",
            capacity_ml: 140,
            case_quantity: 12,
            cases_per_pallet: 50,
          },
          {
            description: "150ml container",
            sterile: "No",
            capacity_ml: 150,
            case_quantity: 12,
            cases_per_pallet: 50,
          },
        ],
      },
      {
        title: "flocked_swab_for_molecular_kit",
        image: "flocked_swab_for_molecular_kit.png",
        category: "TUBES AND MOLECULAR BIOLOGY",
        description:
          "Standard non-sterile flocked swab with a breaking point at 80 mm. Used for superior biological sample collection in molecular diagnostics, including high-sensitivity PCR and rapid antigen testing. Designed with a user-friendly, molded shear-point on the shaft, this swab ensures quick, clean, and safe transfer of the biological tip into transport media. Made in Nasal self-sampling snappable APS shaft with cotton tip.",
        code: "1/3",
        product_description:
          "Sterile nylon swab with Medical-grade polystyrene shaft",
        sterile: "STERILE EO",
        package: "Peel-pack",
        case_quantity: 100,
        case_weight: "1.85 gm",
        cases_per_pallet: 5000,
        expiry_date: "5 years",
      },
      {
        title: "5ml_screw_cap_system",
        image: "5ml_screw_cap_tubes_round_bottom.png",
        category: "TUBES AND MOLECULAR BIOLOGY",
        description:
          "Complete 5ml screw cap system including polypropylene tubes and matching screw caps with internal O-ring for leakproof sealing.",
        main_description:
          "A precision-molded, crystal-clear test tube system designed for premium optical quality and stability. The tube features a round bottom and is suitable for a temperature range of 4°C to 60°C. Available non-graduated or with a graduated label. The design is compatible with push-type, leak-free closures made of medical grade polypropylene with internal O-rings.",
        code: "1/SERIES",
        sizes: [
          {
            code: "1/8",
            variant_name: "5ml Screw Cap Tube with Round Bottom",
            description: "5ml round bottom polypropylene tube",
            product_description: "5 ml PP tube",
            sterile: "No",
            graduation: true,
            case_quantity: 200,
            case_weight: "2.34 gm",
            cases_per_pallet: 5000,
            expiry_date: "5 years",
            dimensions: "17 mm x 77 mm",
            capacity_ml: 5,
            type: "tube",
          },
          {
            code: "1/16",
            variant_name: "5ml Screw Cap",
            description:
              "Medical grade polypropylene screw cap with internal O-ring",
            product_description: "5ml screw cap",
            color: "Red",
            sterile: "No",
            case_quantity: 1000,
            case_weight: "1.05 gm",
            cases_per_pallet: 20000,
            expiry_date: "5 years",
            dimensions: "1 x 1 mm",
            type: "cap",
          },
        ],
        features: [
          "Crystal-clear polypropylene construction",
          "Leakproof seal with internal O-ring",
          "Suitable for temperature range: 4°C to 60°C",
          "Medical grade materials",
          "Compatible with push-type closures",
          "Available with or without graduation",
        ],
        applications: [
          "Molecular biology applications",
          "Sample storage and transport",
          "Laboratory testing",
          "Research and development",
          "Clinical diagnostics",
        ],
        expiry_date: "5 years",
      },
      {
        title: "graduated_eppendorf_centrifugal_tube",
        image: "graduated_eppendorf_centrifugal_tube.png",
        category: "LIQUID HANDLING",
        description:
          "Graduated Eppendorf centrifugal Tube(Standard). Made of autoclavable polypropylene. Attached hinged caps are flat and easily pierceable. Tubes are easily opened and closed with one hand. Tubes have molded-in graduations in 0.1 ml increments from 0.1 up to 0.6 ml, and a frosted panel on their side for writing or labelling.",
        sizes: [
          {
            code: "1/11/1",
            size_volume: "0.5 ml",
            color: "Neutral",
            sterile: "STERILE EO",
            case_quantity: 100,
            case_weight: "0.80 gm",
          },
          {
            code: "1/11/2",
            size_volume: "1.5 ml",
            color: "Neutral",
            sterile: "STERILE EO",
            case_quantity: 100,
          },
          {
            code: "1/11/3",
            size_volume: "2.0 ml",
            color: "Neutral",
            sterile: "STERILE EO",
            case_quantity: 100,
          },
          {
            code: "1/11/4",
            size_volume: "5.0 ml",
            color: "Neutral",
            sterile: "STERILE EO",
            case_quantity: 100,
          },
        ],
        cases_per_pallet: 25000,
        expiry_date: "5 years",
      },
      {
        title: "eppendorf_tip_5_200",
        image: "eppendorf_tip_5_200.png",
        category: "LIQUID HANDLING",
        description:
          "The Micropipette Tips are made of Translucent Polypropylene with color code. FOR SINGLE USE ONLY. NOT STERILE. Uniform orifice geometry. Exact internal & External diameters. Clean hydrophilic surface. Consistent liquid delivery. Straight stem, no banana shaped. For automatic pipettes. Can be supplied sterile on request.",
        code: "1/4/1",
        color: "Yellow",
        product_description: "Tips in bulk",
        sterile: "No",
        case_quantity: 1000,
        case_weight: "0.28 gm",
        cases_per_pallet: 30000,
        expiry_date: "5 years",
        notes: "Tips in bulk: minimum unit sale: 1 bag",
      },
      {
        title: "eppendorf_tip_100_1000",
        image: "eppendorf_tip_100_1000.png",
        category: "LIQUID HANDLING",
        description:
          "The Micropipette Tips are made of Translucent Polypropylene with color code. FOR SINGLE USE ONLY. NOT STERILE. Uniform orifice geometry. Exact internal & External diameters. Clean hydrophilic surface. Consistent liquid delivery. Straight stem, no banana shaped. For automatic pipettes. Can be supplied sterile on request.",
        code: "1/4/2",
        color: "Blue",
        product_description: "Tips in bulk",
        sterile: "No",
        case_quantity: 500,
        case_weight: "0.55 gm",
        cases_per_pallet: 24000,
        expiry_date: "5 years",
        notes: "Tips in bulk: minimum unit sale: 1 bag",
      },
      {
        title: "alcohol_swab",
        image: "alcohol_swab.png",
        category: "CLINICAL AND MEDICAL CONSUMABLES",
        description:
          "Single-use cleansing solution for all pre-injection and minor first-aid site preparation. Each pad is saturated with 70% Isopropyl Alcohol (IPA), an effective topical antiseptic, and is individually packaged in a hermetically sealed, single-use paper envelope to guarantee sterility and prevent drying. Ideal for use in hospitals, clinics, and diabetic care. For External Use Only.",
        code: "1/13",
        product_description: "Non-woven fabric Sterile Isopropyl Alcohol Swab",
        sterile: "STERILE EO",
        dimensions: "60mm×30mm",
        case_quantity: 100,
        case_weight: "0.72 gm",
        cases_per_pallet: 5000,
        expiry_date: "3 years",
      },
      {
        title: "blood_holder",
        image: "blood_holder.png",
        category: "CLINICAL AND MEDICAL CONSUMABLES",
        description:
          "Made in High-grade Polypropylene (PP) for chemical resistance and durability. Non-sterile, single-use design eliminates the risk of cross-contamination. Neutral color for clear visualization of contents.",
        code: "1/2",
        color: "neutral",
        product_description: "47.7mm x Ø29.9mm",
        sterile: "No",
        case_quantity: 1,
        case_weight: "2.5 gm",
        cases_per_pallet: 2500,
        expiry_date: "5 years",
      },
      {
        title: "urine_bag",
        image: "urine_bag.png",
        category: "CLINICAL AND MEDICAL CONSUMABLES",
        description:
          "Made of polyethylene. Thickness: gauge 300. Ideal for use of the short-term or long-term collection of urine from a patient in clinical applications. The bag is designed to be securely connected to standard drainage devices, such as Foley's and Nelaton Catheters. For single use. Available in both sterile and non-sterile formats.",
        code: "1/15",
        product_description: "Bag 210 x 120 mm",
        capacity_ml: 2000,
        case_quantity: 10,
        case_weight: "45.23 gm",
        cases_per_pallet: 3000,
        expiry_date: "5 years",
      },
      {
        title: "tourniquet",
        image: "tourniquent.png",
        category: "CLINICAL AND MEDICAL CONSUMABLES",
        description:
          "Manufactured with (thermoplastic elastomer). Latex-free, non-cytotoxic, and non-irritant. Product indeed use for the temporary retention and control of blood flow by compression of a corporal limb. Non-sterile. Non-toxic, USP Class I material. Autoclavable, high transparency, and non-smelly. Dimensions: 25 mm wide, 0.6 mm thickness and 450 mm length.",
        code: "1/17",
        product_description: "Silicone/TPE",
        dimensions: "Band 0.5m long each/450mm",
        case_quantity: 1,
        case_weight: "6.0 gm",
        cases_per_pallet: 10,
        expiry_date: "5 years",
      },
    ],
  },
];
export const rapidTestCategories = [
  {
    id: "doa-multi",
    name: "A. Drugs of Abuse (DOA) [Multi-panel] Rapid Tests",
    description: "(4 panel, 5 Panel, 7 Panel and 9 Panel)",
    image:
      "/Drugs of Abuse (DOA) Multi-panel (4 panel, 5 Panel, 7 Panel and 9 Panel) Rapid Tests.jpg",
    icon: Pill,
    color: "from-red-400 to-red-600",
    bgColor: "bg-red-50",
    tableData: {
      headers: [
        "Product",
        "Panel Configuration",
        "Analyte List",
        "Specimen Type",
        "Kit Format",
        "Spec.",
      ],
      rows: [
        {
          product: "4 Panel",
          panel: "4-Panel Dipstick/Cup",
          analytes: "Variable Analytes",
          specimen: "Urine",
          format: "Integrated Cup / Dip",
          spec: "25T",
        },
        {
          product: "5 Panel",
          panel: "5-Panel Dipstick/Cup",
          analytes: "Variable Analytes",
          specimen: "Urine",
          format: "Integrated Cup / Dip",
          spec: "25T",
        },
        {
          product: "7 Panel",
          panel: "7-Panel Dipstick/Cup",
          analytes: "Variable Analytes",
          specimen: "Urine",
          format: "Integrated Cup / Dip",
          spec: "25T",
        },
        {
          product: "9 Panel",
          panel: "9-Panel Dipstick/Cup",
          analytes: "Variable Analytes",
          specimen: "Urine",
          format: "Integrated Cup / Dip",
          spec: "25T",
        },
        {
          product: "Multi-Drug Cup",
          panel: "7-Panel w/ Adulterants",
          analytes:
            "Creatinine, Nitrite, Glutaraldehyde, pH, Specific Gravity, Oxidants, PCC",
          specimen: "Urine",
          format: "Integrated Cup",
          spec: "25T",
        },
        {
          product: "Urine Test Kit",
          panel: "24-Panel Cup",
          analytes:
            "ACE, APVP, BUP, CAF, CFYL, COT, ETG, K2, K3, MCAT, MDPV, MEP, MES, MQL, MTD, NFYL, OPI, PPX, SOMA, TCA, TLD, ZAL, ZOP, ALC",
          specimen: "Urine",
          format: "Integrated Cup",
          spec: "25T",
        },
        {
          product: "Multi-Dipstick",
          panel: "3-Panel Dipstick",
          analytes: "Morphine, Methamphetamine, Amphetamine, Alcohol",
          specimen: "Urine",
          format: "Multi-Dipstick",
          spec: "25T",
        },
        {
          product: "Multi-Line Device",
          panel: "15-Panel Dipstick",
          analytes: "(List of 15 analytes)",
          specimen: "Urine",
          format: "Integrated Cup",
          spec: "25T",
        },
      ],
    },
  },
  {
    id: "doa-single",
    name: "B. Drugs of Abuse (DOA) Rapid Tests",
    description: "Single drug cassette tests",
    image: "/Drugs of Abuse (DOA) Rapid Tests.jpg",
    icon: AlertCircle,
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-50",
    tableData: {
      headers: [
        "Abbr.",
        "Product",
        "Specimen type",
        "Cut-Off Concentration",
        "Kit Format",
        "Sepc.",
      ],
      rows: [
        {
          abbrev: "THC",
          product: "Marijuana Test",
          specimen: "Urine",
          cutoff: "50 ng/mL",
          format: "Cassette",
          spec: "48T/96T",
        },
        {
          abbrev: "TCA",
          product: "Tricyclic Antidepressant Test",
          specimen: "Urine",
          cutoff: "1,000 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "OPI / MOP",
          product: "Opiate Test",
          specimen: "Urine",
          cutoff: "300 ng/mL or 2000 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "PPX",
          product: "Propoxyphene Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "PCP",
          product: "Phencyclidine Test",
          specimen: "Urine",
          cutoff: "25 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "OXY",
          product: "Oxycodone Test",
          specimen: "Urine",
          cutoff: "100 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "MTD",
          product: "Methadone Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "MDMA",
          product: "MDMA Test",
          specimen: "Urine",
          cutoff: "500 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "MET",
          product: "Methamphetamine Test",
          specimen: "Urine",
          cutoff: "1000 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "COC",
          product: "Cocaine Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "COT",
          product: "Cotinine Test",
          specimen: "Urine",
          cutoff: "100 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "BUP",
          product: "Buprenorphine Test",
          specimen: "Urine",
          cutoff: "10 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "BZO",
          product: "Benzodiazepine Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "BAR",
          product: "Barbiturate Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "AMP",
          product: "Amphetamine Test",
          specimen: "Urine",
          cutoff: "1000 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "6-MAM",
          product: "6-MAM Test",
          specimen: "Urine",
          cutoff: "10 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "TML",
          product: "Tramadol Test",
          specimen: "Urine",
          cutoff: "100 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "PGB",
          product: "Pregabalin Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "MDPV",
          product: "MDPV Test",
          specimen: "Urine",
          cutoff: "500 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "MQL",
          product: "Methaqualone Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "KET",
          product: "Ketamine Test",
          specimen: "Urine",
          cutoff: "1,000 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "K3 / K2",
          product: "K3 Synthetic Cannabinoids Test",
          specimen: "Urine",
          cutoff: "25 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "FYL",
          product: "Fentanyl Test",
          specimen: "Urine",
          cutoff: "20 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "DIA",
          product: "Diazepam Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "ALP",
          product: "Alprazolam Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "ZOP",
          product: "Zopiclone Test",
          specimen: "Urine",
          cutoff: "200 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "ZAL",
          product: "Zaleplon Test",
          specimen: "Urine",
          cutoff: "100 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "ZOL",
          product: "Zolpidem Test",
          specimen: "Urine",
          cutoff: "20 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "TPM",
          product: "Tropicamide Test",
          specimen: "Urine",
          cutoff: "200 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "INN/MDA",
          product: "Tenamfetamine Test",
          specimen: "Urine",
          cutoff: "500 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "TAP",
          product: "Tapentadol Test",
          specimen: "Urine",
          cutoff: "200 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "TLD",
          product: "Tilidine Test",
          specimen: "Urine",
          cutoff: "100 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "TZD",
          product: "Trazodone Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "NFYL",
          product: "Norfentanyl Test",
          specimen: "Urine",
          cutoff: "10 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "MPD",
          product: "Methylphenidate Test",
          specimen: "Urine",
          cutoff: "100 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "MOR",
          product: "Morphine Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "ZAL",
          product: "Mescaline Test",
          specimen: "Urine",
          cutoff: "500 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "MEP",
          product: "Mephedrone Test",
          specimen: "Urine",
          cutoff: "500 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "MDPHP",
          product: "MDPV Test",
          specimen: "Urine",
          cutoff: "500 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "MCAT",
          product: "Methcathinone Test",
          specimen: "Urine",
          cutoff: "500 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "LSD/LSD-25",
          product: "LSD Test",
          specimen: "Urine",
          cutoff: "20 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "KRA",
          product: "Kratom Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "K4",
          product: "K4 Synthetic Cannabinoids Test",
          specimen: "Urine",
          cutoff: "25 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "HMO",
          product: "Hydromorphone Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "GAB",
          product: "Gabapentin Test",
          specimen: "Urine",
          cutoff: "1000 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "ETG",
          product: "Ethyl Glucuronide Test",
          specimen: "Urine",
          cutoff: "500 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "SOMA",
          product: "Carisoprodol Test",
          specimen: "Urine",
          cutoff: "50 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "",
          product: "Clonazepam Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "CFYL",
          product: "Carfentanyl Test",
          specimen: "Urine",
          cutoff: "20 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "CAT",
          product: "Cathine Test",
          specimen: "Urine",
          cutoff: "500 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "CAF",
          product: "Caffeine Test",
          specimen: "Urine",
          cutoff: "2500 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "ACL",
          product: "7-Amino Clonazepam Test",
          specimen: "Urine",
          cutoff: "300 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "α-PVP",
          product: "α-PVP Test",
          specimen: "Urine",
          cutoff: "500 ng/mL",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "",
          product: "Acetaminophen Test",
          specimen: "Urine",
          cutoff: "500 ng/mL",
          format: "Cassette",
          spec: "",
        },
      ],
    },
  },
  {
    id: "covid",
    name: "C. Infectious Disease: COVID-19 Rapid Tests",
    description: "SARS-CoV-2 antigen and antibody detection tests",
    image: "/Infectious Disease_ Other Tests.jpg",
    icon: Heart,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    tableData: {
      headers: [
        "Abbr.",
        "Product",
        "Specimen type",
        "Cut-Off / Detection",
        "Kit Format",
        "Sepc.",
      ],
      rows: [
        {
          abbrev: "SARS Ag-RDT",
          product: "SARS-CoV-2 Antigen Rapid Test",
          specimen: "Nasal, Nasopharyngeal, or Oropharyngeal Swabs",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "COVID Ag-RDT",
          product: "COVID-19 Antigen Rapid Test Device",
          specimen: "Nasal, Nasopharyngeal, or Oropharyngeal Swabs",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "",
          product: "COVID-19 Antigen Saliva Test",
          specimen: "Saliva",
          detection: "Qualitative detection",
          format: "Card Device, Cassette",
          spec: "",
        },
        {
          abbrev: "COVID Ag-RDT (For Self-testing)",
          product: "COVID-19 Antigen Test Kit (Self-Test)",
          specimen: "Nasal Swabs",
          detection: "Qualitative detection",
          format: "Kit with Instructions for Lay Users",
          spec: "",
        },
        {
          abbrev: "COVID-19 IgG/IgM",
          product: "COVID-19 IgG/IgM Antibody Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "SARS-CoV-2 nAb (FIA)",
          product: "SARS-CoV-2 Neutralizing Antibody Test (FIA)",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette (for use with FIA Analyzer)",
          spec: "",
        },
        {
          abbrev: "COVID-19 Ag (FIA)",
          product: "COVID-19 Antigen Test (FIA)",
          specimen: "Nasopharyngeal, Oropharyngeal, and Sputum Swabs",
          detection: "Semi-quantitative detection",
          format: "Cassette (for use with FIA Analyzer)",
          spec: "",
        },
      ],
    },
  },
  {
    id: "respiratory",
    name: "C. Infectious Disease: Respiratory Disease",
    description: "Tests for various respiratory pathogens",
    image: "/Infectious Disease_ Other Tests.jpg",
    icon: Thermometer,
    color: "from-cyan-400 to-cyan-600",
    bgColor: "bg-cyan-50",
    tableData: {
      headers: [
        "Abbr.",
        "Product",
        "Specimen type",
        "Cut-Off / Detection",
        "Kit Format",
        "Sepc.",
      ],
      rows: [
        {
          abbrev: "SPN Ag",
          product: "Streptococcus Pneumoniae Antigen Test",
          specimen: "Urine",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "GAS",
          product: "Group A Streptococcus Test",
          specimen: "Throat Swab",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "RSV Ag",
          product: "Respiratory Syncytial Virus Test",
          specimen: "Nasal, Nasopharyngeal Swabs",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "Myco IgG/IgM",
          product: "Mycoplasma Pneumoniae IgG/IgM Combo",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "Legionella UAT",
          product: "Legionella Urinary Antigen Test",
          specimen: "Urine",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "Flu A/B",
          product: "Influenza A & B Test",
          specimen: "Nasal, Nasopharyngeal Swabs",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "ADV Ag",
          product: "Adenovirus Rapid Test",
          specimen: "Nasopharyngeal, Oropharyngeal, and Sputum Swabs",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
      ],
    },
  },
  {
    id: "tropical",
    name: "D. Infectious Disease: Tropical Diseases",
    description: "Tests for tropical and vector-borne diseases",
    image: "/Infectious Disease_ Other Tests.jpg",
    icon: Microscope,
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-50",
    tableData: {
      headers: [
        "Abbr.",
        "Product",
        "Specimen type",
        "Cut-Off/ Detection",
        "Kit Format",
        "Sepc.",
      ],
      rows: [
        {
          abbrev: "TB IgG/IgM/IgA",
          product: "Tuberculosis Antibody Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "Typhoid Ab combo",
          product: "Typhoid Antibody Combo Test",
          specimen: "Serum, Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "Leishmania IgG/IgM Combo",
          product: "Leishmaniasis Antibody Combo Test",
          specimen: "Serum, Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "Filariasis IgG/IgM Combo",
          product: "Filariasis Antibody Combo Test",
          specimen: "Serum, Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "Malaria Ag Pf/Pan",
          product: "Malaria Test (Pf/Pv)",
          specimen: "Whole Blood",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "Malaria Ag Pf",
          product: "Malaria Pf Antigen Test",
          specimen: "Whole Blood",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "Dengue IgG/IgM/NS1 Combo",
          product: "Dengue Combo Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "Dengue NS1 Ag",
          product: "Dengue NS1 Antigen Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "Dengue IgG/IgM Combo",
          product: "Dengue IgG/IgM Combo Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "T. cruzi Ab",
          product: "Chagas Antibody Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "Zika/Chik IgG/IgM Combo",
          product: "Zika/Chikungunya/Dengue Combo Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "Zika IgG/IgM Combo",
          product: "Zika IgG/IgM Combo Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "CHIK IgG/IgM",
          product: "Chikungunya IgG/IgM Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
      ],
    },
  },
  {
    id: "bloodborne",
    name: "E. Infectious Disease: Blood borne Pathogens",
    description: "Tests for bloodborne viruses and infections",
    image: "/Infectious Disease_ Other Tests.jpg",
    icon: Droplets,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50",
    tableData: {
      headers: [
        "Abbr.",
        "Product",
        "Specimen type",
        "Cut-Off/ Detection",
        "Kit Format",
        "Sepc.",
      ],
      rows: [
        {
          abbrev: "HIV 1/2 Ab",
          product: "HIV 1/2 Ab Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "HIV 5-in-1",
          product: "HIV 5-in-1 Combo Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "HCV Ab",
          product: "Hepatitis C Virus Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "HBV Combo",
          product: "Hepatitis B Virus Combo Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "HBcAb",
          product: "Hepatitis B (HBV) Core Ab Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "HBeAg",
          product: "Hepatitis B e-Antigen Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "HBsAg",
          product: "Hepatitis B s-Antigen Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "HBeAb",
          product: "Hepatitis B e-Antibody Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "HBsAb",
          product: "Hepatitis B s-Antibody Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "HBsAg/HCV/HIV",
          product: "3-in-1 Combo Rapid Test",
          specimen: "Serum, Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "HBsAg/HCV",
          product: "Hepatitis B s-Antigen & HCV 2-in-1 Combo",
          specimen: "Serum, Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "Syphilis/HIV 1/2",
          product: "Syphilis and HIV 1 & 2 2-in-1 Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "Syphilis Ab",
          product: "Syphilis Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
      ],
    },
  },
  {
    id: "gastro",
    name: "F. Infectious Disease: Gastrointestinal Tract Infections",
    description: "Tests for gastrointestinal pathogens and conditions",
    image: "/Infectious Disease_ Gastrointestinal Tract Infections.jpg",
    icon: Beaker,
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-50",
    tableData: {
      headers: [
        "Abbr.",
        "Product",
        "Specimen type",
        "Cut-Off/ Detection",
        "Kit Format",
        "Sepc.",
      ],
      rows: [
        {
          abbrev: "Shigella Ag",
          product: "Shigella Antigen Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "S. typhi/paratyphi Ag",
          product: "Salmonella typhi/paratyphi Ag Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "Gastro Combo",
          product: "Rota/Adeno/Noro/Astro Combo Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "Rota/Adeno Combo",
          product: "Rota/Adeno Combo Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "RV Ag",
          product: "Rotavirus Rapid Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "Norovirus Ag",
          product: "Norovirus Antigen Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "HP/TF/FOB Combo",
          product: "H. pylori and FOB Combo Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "HEV IgM",
          product: "Hepatitis E Virus IgM Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "HAV IgG/IgM Combo",
          product: "Hepatitis A Virus IgG/IgM Combo Test",
          specimen: "Serum, Plasma",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "H. pylori Ag",
          product: "H. pylori Antigen Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "H. pylori Ab IgG",
          product: "H. pylori Antibody IgG Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "Giardia Lamblia Ag",
          product: "Giardia Lamblia Antigen Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "E. Histolytica Ag",
          product: "E. Histolytica Antigen Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "EHG Combo",
          product: "EHEC Combo Test (E. histolytica + Crypto + Giardia)",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "E. coli O157 Ag",
          product: "E. coli O157 Antigen Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "V. cholerae O1 Ag",
          product: "Vibrio cholerae O1/O139 Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "Crypto/Giardia Ag combo",
          product: "Crypto/Giardia Combo Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "Cryptosporidium Ag",
          product: "Cryptosporidium Antigen Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "C. Difficile Toxin A/B/GDH",
          product: "C. difficile Toxin A/B and GDH Combo Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "C. difficile GDH Ag",
          product: "C. difficile GDH Antigen Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "C. difficile A/B",
          product: "C. difficile Toxin A/B Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "Campy Ag",
          product: "Campylobacter Antigen Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "Astro Ag",
          product: "Astrovirus Antigen Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "Adeno Ag",
          product: "Adenovirus Antigen Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
      ],
    },
  },
  {
    id: "std",
    name: "G. Infectious Disease: Sexually Transmitted Disease and Prenatal Care",
    description: "Tests for STDs and prenatal infections",
    image:
      "/Infectious Disease_ Sexually Transmitted Disease and Prenatal Care.jpg",
    icon: Stethoscope,
    color: "from-pink-400 to-pink-600",
    bgColor: "bg-pink-50",
    tableData: {
      headers: [
        "Abbr.",
        "Product",
        "Specimen type",
        "Cut-Off/ Detection",
        "Kit Format",
        "Sepc.",
      ],
      rows: [
        {
          abbrev: "HBsAg",
          product: "HBsAg Rapid Test",
          specimen: "Serum, Plasma, Vaginal/Rectal Swabs, Swabs from Newborns",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "40T",
        },
        {
          abbrev: "Strep B Ag",
          product: "Group B Strep Antigen Test",
          specimen: "Vaginal or Rectal Swabs",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "40T",
        },
        {
          abbrev: "HSV-II IgG/IgM",
          product: "HSV-II IgG and IgM Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "40T",
        },
        {
          abbrev: "HSV-I IgG/IgM",
          product: "HSV-I IgG and IgM Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "40T",
        },
        {
          abbrev: "Rubella IgG/IgM",
          product: "Rubella IgG and IgM Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "40T",
        },
        {
          abbrev: "CMV IgG/IgM",
          product: "Cytomegalovirus IgG and IgM Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "40T",
        },
        {
          abbrev: "Toxo IgG/IgM",
          product: "Toxoplasmosis IgG and IgM Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "40T",
        },
        {
          abbrev: "TORCH IgG/IgM",
          product: "TORCH IgG and IgM Combo Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "40T",
        },
        {
          abbrev: "GC",
          product: "Gonorrhea Rapid Test",
          specimen: "Female Cervical Swab, Male Urethral Swab, or Urine",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "40T",
        },
        {
          abbrev: "CT",
          product: "Chlamydia Rapid Test",
          specimen: "Swab (Female Cervical, Male Urethral) or Urine",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "40T",
        },
      ],
    },
  },
  {
    id: "fertility",
    name: "I. Fertility Tests",
    description: "Fertility monitoring and pregnancy detection tests",
    image: "/Fertility Tests.jpg",
    icon: Heart,
    color: "from-rose-400 to-rose-600",
    bgColor: "bg-rose-50",
    tableData: {
      headers: [
        "Abbr.",
        "Product",
        "Specimen type",
        "Cut-Off/ Detection",
        "Kit Format",
        "Sepc.",
      ],
      rows: [
        {
          abbrev: "IGFBP-1 PROM",
          product:
            "Human Insulin-like Growth Factor Binding Protein 1 (IGFBP-1) PROM Test",
          specimen: "Vaginal Swab",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "40T",
        },
        {
          abbrev: "TSH",
          product: "Thyroid-Stimulating Hormone Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative/Semi-quantitative detection",
          format: "Cassette",
          spec: "40T",
        },
        {
          abbrev: "FSH",
          product: "Follicle-Stimulating Hormone Test",
          specimen: "Urine",
          detection: "Qualitative/Semi-quantitative detection",
          format: "Cassette",
          spec: "40T",
        },
        {
          abbrev: "LH Ovulation",
          product: "Luteinizing Hormone Ovulation Test",
          specimen: "Urine",
          detection: "Qualitative/Semi-quantitative detection",
          format: "Strip, Cassette, Midstream",
          spec: "40T",
        },
        {
          abbrev: "hCG/LH",
          product: "Digital Pregnancy and Ovulation Test",
          specimen: "Urine",
          detection: "Qualitative/Digital detection",
          format: "Digital Device",
          spec: "40T",
        },
        {
          abbrev: "hCG",
          product: "Human Chorionic Gonadotropin Test",
          specimen: "Urine or Serum",
          detection: "Qualitative/Semi-quantitative detection",
          format: "Strip, Cassette, Midstream",
          spec: "40T",
        },
        {
          abbrev: "hCG weekly",
          product: "hCG Weekly Pregnancy Test",
          specimen: "Urine",
          detection:
            "Qualitative/Semi-quantitative detection (with weekly progression)",
          format: "Midstream",
          spec: "40T",
        },
      ],
    },
  },
  {
    id: "cardiac",
    name: "J. Cardiac Markers",
    description: "Tests for cardiac biomarkers and heart conditions",
    image: "/Cardiac Markers.jpg",
    icon: Heart,
    color: "from-red-400 to-red-600",
    bgColor: "bg-red-50",
    tableData: {
      headers: [
        "Abbr.",
        "Product",
        "Specimen type",
        "Cut-Off/ Detection",
        "Kit Format",
        "Sepc.",
      ],
      rows: [
        {
          abbrev: "cTnI",
          product: "Troponin I Diagnostic Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "PCT",
          product: "Procalcitonin Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "NT-proBNP",
          product: "NT-proBNP Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "MI",
          product: "Myoglobin Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "CRP",
          product: "C-Reactive Protein Semi-Quantitative Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "D-Dimer",
          product: "D-Dimer Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
        {
          abbrev: "MI combo",
          product: "Cardiac Markers Combo Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette, Multi-Panel",
          spec: "",
        },
        {
          abbrev: "CK-MB",
          product: "CK-MB Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "",
        },
      ],
    },
  },
  {
    id: "tumor",
    name: "K. Tumor Markers",
    description: "Tests for cancer biomarkers and tumor markers",
    image: "/Tumor Markers.jpg",
    icon: Microscope,
    color: "from-indigo-400 to-indigo-600",
    bgColor: "bg-indigo-50",
    tableData: {
      headers: [
        "Abbr.",
        "Product",
        "Specimen type",
        "Cut-Off/ Detection",
        "Kit Format",
        "Sepc.",
      ],
      rows: [
        {
          abbrev: "LF",
          product: "Lactoferrin Rapid Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "TRF And FOB Combo",
          product: "Transferrin and Fecal Occult Blood Combo Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Multi-Panel",
          spec: "25T",
        },
        {
          abbrev: "TRF",
          product: "Transferrin Rapid Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "PSA",
          product: "Prostate Specific Antigen Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative/Semi-quantitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "Ferritin",
          product: "Ferritin Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative/Semi-quantitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "FOB",
          product: "Fecal Occult Blood Rapid Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette, Dipstick",
          spec: "25T",
        },
        {
          abbrev: "CPT",
          product: "Calprotectin Rapid Test",
          specimen: "Feces",
          detection: "Qualitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "CEA Ag",
          product: "Carcinoembryonic Antigen Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative/Semi-quantitative detection",
          format: "Cassette",
          spec: "25T",
        },
        {
          abbrev: "AFP",
          product: "Alpha-fetoprotein Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Qualitative/Semi-quantitative detection",
          format: "Cassette",
          spec: "25T",
        },
      ],
    },
  },
  {
    id: "allergy",
    name: "L. Allergy Tests",
    description: "Tests for various allergens and IgE detection",
    image: "/Allergy Tests.jpg",
    icon: AlertCircle,
    color: "from-amber-400 to-amber-600",
    bgColor: "bg-amber-50",
    tableData: {
      headers: [
        "Abbr.",
        "Product",
        "Specimen type",
        "Cut-Off/ Detection",
        "Kit Format",
      ],
      rows: [
        {
          abbrev: "Total IgE",
          product: "Total IgE Rapid Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette",
        },
        {
          abbrev: "slgE",
          product: "Mugwort Allergy Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette",
        },
        {
          abbrev: "IgE Type I",
          product: "Ragweed Allergy Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette",
        },
        {
          abbrev: "",
          product: "Oak White Allergy Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette",
        },
        {
          abbrev: "Alternaria",
          product: "Alternaria Alternate Allergy Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette",
        },
        {
          abbrev: "",
          product: "Aspergillus Fumigatus Allergy Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette",
        },
        {
          abbrev: "",
          product: "Timothy Allergy Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette",
        },
        {
          abbrev: "",
          product: "Dog Dander Allergy Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette",
        },
        {
          abbrev: "",
          product: "Cat Dander Allergy Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette",
        },
        {
          abbrev: "",
          product: "Shrimp Allergy Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette",
        },
        {
          abbrev: "",
          product: "Peanut Allergy Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette",
        },
        {
          abbrev: "Total IgE",
          product: "Milk Allergy Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette",
        },
        {
          abbrev: "slgE",
          product: "Egg White Allergy Test",
          specimen: "Whole Blood, Serum, or Plasma",
          detection: "Semi-quantitative detection",
          format: "Cassette",
        },
      ],
    },
  },
];
export const newproducts = [
  {
    name: "ELHODA TRADE",
    slug: "elhoda-trade",
    img: "ams-red.png",
    description:
      "ELHODA TRADE presents a comprehensive portfolio of high-quality clinical chemistry reagents manufactured in Egypt. Our reagents are meticulously designed and produced to support a wide range of diagnostic tests, enabling clinical laboratories worldwide to perform routine and specialized analysis with exceptional accuracy and reliability.",
    products: [
      {
        category: "Manual / Semi-Automatic Kits",
        models: [
          {
            category: "Clinical Chemistry Reagents",
            models: [
              {
                catalog: "CC-G001",
                model: "Glucose",
                img: "glucose-kit.png",
                specs: {
                  method: "Enzymatic (GOD-PAP)",
                  reagentForm: "Liquid Stable",
                  shelfLife: "24 Months",
                  analyticalPerformance:
                    "Engineered for high precision and linearity",
                  compatibility:
                    "Manual spectrophotometer and semi-automatic analyzers",
                  qualityStandards: "ISO 13485:2016 and CE Mark",
                },
                packaging: [
                  {
                    description: "Standard Kit",
                    code: "CC-G001-100",
                    contents: "R 2x100 ml, St 1x4ml",
                    tests: "100 Tests",
                  },
                  {
                    description: "Medium Kit",
                    code: "CC-G001-200",
                    contents: "R 4x100 ml, St 1x4ml",
                    tests: "200 Tests",
                  },
                  {
                    description: "Large Kit",
                    code: "CC-G001-500",
                    contents: "R 4x250 ml, St 1x10 ml",
                    tests: "500 Tests",
                  },
                ],
              },
              {
                catalog: "CC-C002",
                model: "Cholesterol",
                img: "cholesterol-kit.png",
                specs: {
                  method: "Enzymatic (CHOD-PAP)",
                  reagentForm: "Liquid Stable",
                  shelfLife: "18 Months",
                  analyticalPerformance:
                    "Engineered for high precision and linearity",
                  compatibility:
                    "Manual spectrophotometer and semi-automatic analyzers",
                  qualityStandards: "ISO 13485:2016 and CE Mark",
                },
                packaging: [
                  {
                    description: "Small Kit",
                    code: "CC-C002-50",
                    contents: "R 2x25 ml, St 1x3ml",
                    tests: "50 Tests",
                  },
                  {
                    description: "Medium Kit",
                    code: "CC-C002-100",
                    contents: "R 4x25 ml, St 1x3ml",
                    tests: "100 Tests",
                  },
                  {
                    description: "Large Kit",
                    code: "CC-C002-200",
                    contents: "R 4x50 ml, St 1x3ml",
                    tests: "200 Tests",
                  },
                  {
                    description: "Extra Large Kit",
                    code: "CC-C002-400",
                    contents: "R 4x100 ml, St 1x3ml",
                    tests: "400 Tests",
                  },
                ],
              },
              {
                catalog: "CC-T003",
                model: "Triglyceride",
                img: "triglyceride-kit.png",
                specs: {
                  method: "Enzymatic (GPO-PAP)",
                  reagentForm: "Liquid Stable",
                  shelfLife: "18 Months",
                  analyticalPerformance:
                    "Engineered for high precision and linearity",
                  compatibility:
                    "Manual spectrophotometer and semi-automatic analyzers",
                  qualityStandards: "ISO 13485:2016 and CE Mark",
                },
                packaging: [
                  {
                    description: "Small Kit",
                    code: "CC-T003-50",
                    contents: "R 2x25 ml, St 1x3ml",
                    tests: "50 Tests",
                  },
                  {
                    description: "Medium Kit",
                    code: "CC-T003-100",
                    contents: "R 4x25 ml, St 1x3ml",
                    tests: "100 Tests",
                  },
                  {
                    description: "Large Kit",
                    code: "CC-T003-200",
                    contents: "R 4x50 ml, St 1x3ml",
                    tests: "200 Tests",
                  },
                  {
                    description: "Extra Large Kit",
                    code: "CC-T003-400",
                    contents: "R 4x100 ml, St 1x3ml",
                    tests: "400 Tests",
                  },
                ],
              },
              {
                catalog: "CC-U004",
                model: "Uric Acid",
                img: "uric-acid-kit.png",
                specs: {
                  method: "Enzymatic (Uricase)",
                  reagentForm: "Liquid Stable",
                  shelfLife: "16 Months",
                  analyticalPerformance:
                    "Engineered for high precision and linearity",
                  compatibility:
                    "Manual spectrophotometer and semi-automatic analyzers",
                  qualityStandards: "ISO 13485:2016 and CE Mark",
                },
                packaging: [
                  {
                    description: "Small Kit",
                    code: "CC-U004-50",
                    contents: "R 2x25 ml, St 1x3ml",
                    tests: "50 Tests",
                  },
                  {
                    description: "Medium Kit",
                    code: "CC-U004-100",
                    contents: "R 4x25 ml, St 1x3ml",
                    tests: "100 Tests",
                  },
                  {
                    description: "Large Kit",
                    code: "CC-U004-200",
                    contents: "R 4x50 ml, St 1x3ml",
                    tests: "200 Tests",
                  },
                  {
                    description: "Extra Large Kit",
                    code: "CC-U004-400",
                    contents: "R 4x100 ml, St 1x3ml",
                    tests: "400 Tests",
                  },
                ],
              },
              {
                catalog: "CC-G005",
                model: "GOT (AST)",
                img: "got-kit.png",
                specs: {
                  method: "IFCC",
                  reagentForm: "Liquid Stable",
                  shelfLife: "18 Months",
                  analyticalPerformance:
                    "Engineered for high precision and linearity",
                  compatibility:
                    "Manual spectrophotometer and semi-automatic analyzers",
                  qualityStandards: "ISO 13485:2016 and CE Mark",
                },
                packaging: [
                  {
                    description: "Small Kit",
                    code: "CC-G005-100",
                    contents: "R1 4x20ml, R2 2x11ml",
                    tests: "100 Tests",
                  },
                  {
                    description: "Medium Kit",
                    code: "CC-G005-200",
                    contents: "R1 4x40ml, R2 4x10ml",
                    tests: "200 Tests",
                  },
                  {
                    description: "Large Kit",
                    code: "CC-G005-400",
                    contents: "R1 4x80ml, R2 4x20ml",
                    tests: "400 Tests",
                  },
                ],
              },
              {
                catalog: "CC-G006",
                model: "GPT (ALT)",
                img: "gpt-kit.png",
                specs: {
                  method: "IFCC",
                  reagentForm: "Liquid Stable",
                  shelfLife: "18 Months",
                  analyticalPerformance:
                    "Engineered for high precision and linearity",
                  compatibility:
                    "Manual spectrophotometer and semi-automatic analyzers",
                  qualityStandards: "ISO 13485:2016 and CE Mark",
                },
                packaging: [
                  {
                    description: "Small Kit",
                    code: "CC-G006-100",
                    contents: "R1 4x20ml, R2 2x11ml",
                    tests: "100 Tests",
                  },
                  {
                    description: "Medium Kit",
                    code: "CC-G006-200",
                    contents: "R1 4x40ml, R2 4x10ml",
                    tests: "200 Tests",
                  },
                  {
                    description: "Large Kit",
                    code: "CC-G006-400",
                    contents: "R1 4x80ml, R2 4x20ml",
                    tests: "400 Tests",
                  },
                ],
              },
            ],
          },
          {
            category: "Blood Grouping Reagents",
            models: [
              {
                catalog: "BG-A001",
                model: "Anti A",
                img: "anti-a.png",
                specs: {
                  method: "Slide/Tube Agglutination",
                  reagentForm: "Liquid Stable",
                  shelfLife: "22 Months",
                  analyticalPerformance: "Designed for blood typing",
                  compatibility: "Manual slide and tube methods",
                },
                packaging: [
                  {
                    description: "Standard Kit",
                    code: "BG-A001-200",
                    contents: "1 x 10 ml",
                    tests: "200 Tests",
                  },
                ],
              },
              {
                catalog: "BG-B002",
                model: "Anti B",
                img: "anti-b.png",
                specs: {
                  method: "Slide/Tube Agglutination",
                  reagentForm: "Liquid Stable",
                  shelfLife: "22 Months",
                  analyticalPerformance: "Designed for blood typing",
                  compatibility: "Manual slide and tube methods",
                },
                packaging: [
                  {
                    description: "Standard Kit",
                    code: "BG-B002-200",
                    contents: "1 x 10 ml",
                    tests: "200 Tests",
                  },
                ],
              },
              {
                catalog: "BG-D003",
                model: "Anti D",
                img: "anti-d.png",
                specs: {
                  method: "Slide/Tube Agglutination",
                  reagentForm: "Liquid Stable",
                  shelfLife: "22 Months",
                  analyticalPerformance: "Designed for Rh factor determination",
                  compatibility: "Manual slide and tube methods",
                },
                packaging: [
                  {
                    description: "Standard Kit",
                    code: "BG-D003-200",
                    contents: "1 x 10 ml",
                    tests: "200 Tests",
                  },
                ],
              },
            ],
          },
          {
            category: "Immunoturbidimetry Reagents",
            models: [
              {
                catalog: "IT-C001",
                model: "CRP Comp.",
                img: "crp-comp.png",
                specs: {
                  method: "Latex Agglutination",
                  reagentForm: "Liquid Stable",
                  shelfLife: "24 Months",
                  analyticalPerformance:
                    "Complete kit with positive and negative controls",
                  compatibility: "Semi-automatic analyzers and manual methods",
                },
                packaging: [
                  {
                    description: "Standard Kit",
                    code: "IT-C001-100",
                    contents: "L 1x5 ml, P 1x1 ml, N 1x1 ml",
                    tests: "100 Tests",
                  },
                ],
              },
              {
                catalog: "IT-C002",
                model: "CRP LO",
                img: "crp-lo.png",
                specs: {
                  method: "Latex Agglutination",
                  reagentForm: "Liquid Stable",
                  shelfLife: "24 Months",
                  analyticalPerformance: "Latex only kit",
                  compatibility: "Semi-automatic analyzers and manual methods",
                },
                packaging: [
                  {
                    description: "Standard Kit",
                    code: "IT-C002-100",
                    contents: "L 1x5 ml",
                    tests: "100 Tests",
                  },
                ],
              },
              {
                catalog: "IT-A003",
                model: "ASO Comp.",
                img: "aso-comp.png",
                specs: {
                  method: "Latex Agglutination",
                  reagentForm: "Liquid Stable",
                  shelfLife: "24 Months",
                  analyticalPerformance:
                    "Complete kit with positive and negative controls",
                  compatibility: "Semi-automatic analyzers and manual methods",
                },
                packaging: [
                  {
                    description: "Standard Kit",
                    code: "IT-A003-100",
                    contents: "L 1x5 ml, P 1x1 ml, N 1x1 ml",
                    tests: "100 Tests",
                  },
                ],
              },
              {
                catalog: "IT-R005",
                model: "RF Comp.",
                img: "rf-comp.png",
                specs: {
                  method: "Latex Agglutination",
                  reagentForm: "Liquid Stable",
                  shelfLife: "24 Months",
                  analyticalPerformance:
                    "Complete kit with positive and negative controls",
                  compatibility: "Semi-automatic analyzers and manual methods",
                },
                packaging: [
                  {
                    description: "Standard Kit",
                    code: "IT-R005-100",
                    contents: "L 1x5 ml, P 1x1 ml, N 1x1 ml",
                    tests: "100 Tests",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        category: "Full Automation Kits (Liquid Stable)",
        models: [
          {
            category: "Substrates & General Chemistries",
            models: [
              {
                catalog: "A-100",
                model: "Albumin",
                img: "albumin-auto.png",
                specs: {
                  reagentForm: "Liquid Stable",
                  shelfLife: "24 Months",
                  onBoardStability: "Extended stability on analyzer",
                  automationFocus: "Designed for high-throughput analyzers",
                  compatibility:
                    "Roche, Beckman Coulter, Abbott, Siemens, Mindray",
                  reagentVolume: "R1: 5×42 ml, R2: None",
                },
                packaging: [
                  {
                    description: "High Volume Kit",
                    code: "A-100-800",
                    contents: "5×42 ml",
                    tests: "800 Tests",
                    ulPerTest: "250 μl",
                  },
                ],
              },
              {
                catalog: "A-101",
                model: "Cholesterol",
                img: "cholesterol-auto.png",
                specs: {
                  reagentForm: "Liquid Stable",
                  shelfLife: "18 Months",
                  onBoardStability: "Extended stability on analyzer",
                  automationFocus: "Designed for high-throughput analyzers",
                  compatibility:
                    "Roche, Beckman Coulter, Abbott, Siemens, Mindray",
                  reagentVolume: "R1: 5×42 ml, R2: None",
                },
                packaging: [
                  {
                    description: "High Volume Kit",
                    code: "A-101-800",
                    contents: "5×42 ml",
                    tests: "800 Tests",
                    ulPerTest: "250 μl",
                  },
                ],
              },
              {
                catalog: "A-102",
                model: "Direct Bilirubin",
                img: "bilirubin-auto.png",
                specs: {
                  reagentForm: "Liquid Stable",
                  shelfLife: "24 Months",
                  onBoardStability: "Extended stability on analyzer",
                  automationFocus: "Designed for high-throughput analyzers",
                  compatibility:
                    "Roche, Beckman Coulter, Abbott, Siemens, Mindray",
                  reagentVolume: "R1: 4×42 ml, R2: 2×17 ml",
                },
                packaging: [
                  {
                    description: "High Volume Kit",
                    code: "A-102-800",
                    contents: "4×42 ml + 2×17 ml",
                    tests: "800 Tests",
                    ulPerTest: "240 μl (200+40)",
                  },
                ],
              },
              {
                catalog: "A-103",
                model: "Glucose",
                img: "glucose-auto.png",
                specs: {
                  reagentForm: "Liquid Stable",
                  shelfLife: "24 Months",
                  onBoardStability: "Extended stability on analyzer",
                  automationFocus: "Designed for high-throughput analyzers",
                  compatibility:
                    "Roche, Beckman Coulter, Abbott, Siemens, Mindray",
                  reagentVolume: "R1: 5×42 ml, R2: None",
                },
                packaging: [
                  {
                    description: "High Volume Kit",
                    code: "A-103-800",
                    contents: "5×42 ml",
                    tests: "800 Tests",
                    ulPerTest: "250 μl",
                  },
                ],
              },
              {
                catalog: "A-104",
                model: "HDL Cholesterol Direct (Large)",
                img: "hdl-large-auto.png",
                specs: {
                  reagentForm: "Liquid Stable",
                  shelfLife: "18 Months",
                  onBoardStability: "Extended stability on analyzer",
                  automationFocus: "Designed for high-throughput analyzers",
                  compatibility:
                    "Roche, Beckman Coulter, Abbott, Siemens, Mindray",
                  reagentVolume: "R1: 4×47 ml, R2: 4×16 ml",
                },
                packaging: [
                  {
                    description: "High Volume Kit",
                    code: "A-104-800",
                    contents: "4×47 ml + 4×16 ml",
                    tests: "800 Tests",
                    ulPerTest: "300 μl (225+75)",
                  },
                ],
              },
              {
                catalog: "A-107",
                model: "Triglycerides",
                img: "triglycerides-auto.png",
                specs: {
                  reagentForm: "Liquid Stable",
                  shelfLife: "18 Months",
                  onBoardStability: "Extended stability on analyzer",
                  automationFocus: "Designed for high-throughput analyzers",
                  compatibility:
                    "Roche, Beckman Coulter, Abbott, Siemens, Mindray",
                  reagentVolume: "R1: 5×42 ml, R2: None",
                },
                packaging: [
                  {
                    description: "High Volume Kit",
                    code: "A-107-800",
                    contents: "5×42 ml",
                    tests: "800 Tests",
                    ulPerTest: "250 μl",
                  },
                ],
              },
            ],
          },
          {
            category: "Enzyme Assays",
            models: [
              {
                catalog: "A-109",
                model: "ALT/GPT",
                img: "alt-auto.png",
                specs: {
                  reagentForm: "Liquid Stable",
                  shelfLife: "As per product specification",
                  onBoardStability: "Extended stability on analyzer",
                  automationFocus: "Designed for high-throughput analyzers",
                  compatibility:
                    "Roche, Beckman Coulter, Abbott, Siemens, Mindray",
                  reagentVolume: "R1: 4×42 ml, R2: 2×21 ml",
                },
                packaging: [
                  {
                    description: "High Volume Kit",
                    code: "A-109-800",
                    contents: "4×42 ml + 2×21 ml",
                    tests: "800 Tests",
                    ulPerTest: "250 μl (200+50)",
                  },
                ],
              },
              {
                catalog: "A-111",
                model: "AST/GOT",
                img: "ast-auto.png",
                specs: {
                  reagentForm: "Liquid Stable",
                  shelfLife: "As per product specification",
                  onBoardStability: "Extended stability on analyzer",
                  automationFocus: "Designed for high-throughput analyzers",
                  compatibility:
                    "Roche, Beckman Coulter, Abbott, Siemens, Mindray",
                  reagentVolume: "R1: 4×42 ml, R2: 2×21 ml",
                },
                packaging: [
                  {
                    description: "High Volume Kit",
                    code: "A-111-800",
                    contents: "4×42 ml + 2×21 ml",
                    tests: "800 Tests",
                    ulPerTest: "250 μl (200+50)",
                  },
                ],
              },
              {
                catalog: "A-110",
                model: "ALP",
                img: "alp-auto.png",
                specs: {
                  reagentForm: "Liquid Stable",
                  shelfLife: "As per product specification",
                  onBoardStability: "Extended stability on analyzer",
                  automationFocus: "Designed for high-throughput analyzers",
                  compatibility:
                    "Roche, Beckman Coulter, Abbott, Siemens, Mindray",
                  reagentVolume: "R1: 4×42 ml, R2: 2×21 ml",
                },
                packaging: [
                  {
                    description: "High Volume Kit",
                    code: "A-110-800",
                    contents: "4×42 ml + 2×21 ml",
                    tests: "800 Tests",
                    ulPerTest: "250 μl (200+50)",
                  },
                ],
              },
              {
                catalog: "A-112",
                model: "CK",
                img: "ck-auto.png",
                specs: {
                  reagentForm: "Liquid Stable",
                  shelfLife: "As per product specification",
                  onBoardStability: "Extended stability on analyzer",
                  automationFocus: "Designed for high-throughput analyzers",
                  compatibility:
                    "Roche, Beckman Coulter, Abbott, Siemens, Mindray",
                  reagentVolume: "R1: 4×42 ml, R2: 2×21 ml",
                },
                packaging: [
                  {
                    description: "High Volume Kit",
                    code: "A-112-800",
                    contents: "4×42 ml + 2×21 ml",
                    tests: "800 Tests",
                    ulPerTest: "250 μl (200+50)",
                  },
                ],
              },
              {
                catalog: "A-114",
                model: "LDH",
                img: "ldh-auto.png",
                specs: {
                  reagentForm: "Liquid Stable",
                  shelfLife: "As per product specification",
                  onBoardStability: "Extended stability on analyzer",
                  automationFocus: "Designed for high-throughput analyzers",
                  compatibility:
                    "Roche, Beckman Coulter, Abbott, Siemens, Mindray",
                  reagentVolume: "R1: 4×42 ml, R2: 2×21 ml",
                },
                packaging: [
                  {
                    description: "High Volume Kit",
                    code: "A-114-800",
                    contents: "4×42 ml + 2×21 ml",
                    tests: "800 Tests",
                    ulPerTest: "250 μl (200+50)",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        category: "Full Automation Biochemistry Analyzers",
        models: [
          {
            category: "CA-Series Analyzers",
            models: [
              {
                catalog: "CA-200",
                model: "CA-200 Automatic Chemistry Analyzer",
                img: "ca-200.jpg",
                specs: {
                  productType: "Automatic Chemistry Analyzer",
                  design: "Bench-top compact design",
                  throughput: "Constant speed of 200 tests/hour",
                  accessMode: "Random access",
                  reactionSystem: "48 reaction cuvettes",
                  reagentCapacity: "60 reagent positions",
                  sampleCapacity:
                    "30 sample positions (includes detergent, standard, QC, and STAT positions)",
                  handlingSystem:
                    "Durable ceramic syringes, 1 Sample & Reagent probe, 1 High-performance stirrer",
                  incubationSystem: "Air bath heating incubation system",
                  compatibility:
                    "Fully automated chemistry analyzer compatible with international brands like Roche, Beckman Coulter, Abbott, Siemens, and Mindray (for Elhoda reagents)",
                  integration:
                    "Integrates seamlessly with Elhoda Liquid Stable Full Automation Reagents",
                },
                packaging: [
                  {
                    description: "Complete System",
                    code: "CA-200-SYS",
                    contents:
                      "CA-200 Analyzer unit with all standard accessories, installation, and training package",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "NOCOTECH",
    slug: "nocotech",
    img: "oxy-pharm.png",
    description:
      "NOCOTECH specializes in automated airborne disinfection solutions for surfaces using advanced dry mist diffusion technology. Our hydrogen peroxide and silver-based disinfectants are designed for use with specialized diffusion devices to ensure comprehensive environmental decontamination.",
    products: [
      {
        category: "Automated Airborne Disinfection of Surfaces",
        models: [
          {
            category: "NOCOLYSE® Bio-Disinfectants for Surfaces",
            models: [
              {
                catalog: "4000.005",
                model: "NOCOLYSE 6% H₂O₂",
                img: "nocolyse-6.png",
                specs: {
                  productType: "BIO-disinfectant for surfaces",
                  composition:
                    "Stabilized hydrogen peroxide in solution 6% (60ml/l) and Silver 17 ppm",
                  compatibility:
                    "Used exclusively with NOCOTECH diffusion appliances (NOCOSPRAY or NOCOMAX)",
                  availableVersions:
                    "Neutral fragrance, Mint fragrance, or Nocodor fragrance (mix of essential oils destroying smells)",
                  shelfLifeClosed: "2 years from manufacturing date",
                  shelfLifeOpened: "2 months from opening date",
                  effectivenessStandard:
                    "Protocols for curative use conform to results obtained in laboratory tests conducted according to NF T 72 281 norm (November 2014)",
                },
                packaging: [
                  {
                    description: "Neutral",
                    code: "4000.005",
                    contents: "5 Litre Canister",
                  },
                ],
              },
              {
                catalog: "4010.005",
                model: "NOCOLYSE ONE SHOT 12% H₂O₂",
                img: "nocolyse-one-shot.png",
                specs: {
                  productType: "NOCOLYSE ONE SHOT BIO-disinfectant",
                  composition:
                    "Stabilized hydrogen peroxide in solution 12% (120ml/l) and Silver 17 ppm",
                  compatibility:
                    "Used exclusively with NOCOTECH diffusion appliances",
                  effectiveness:
                    "Enables surface disinfection treatments effective against bactericidal, fungicidal, virucidal, yeasticidal, tuberculocidal, and sporicidal activity",
                },
                packaging: [
                  {
                    description: "Neutral",
                    code: "4010.005",
                    contents: "5 Litre Canister",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "ELHODA IPC",
    slug: "elhoda-ipc",
    img: "parasure.png",
    description:
      "ELHODA IPC offers a comprehensive range of infection prevention and control products, including sterilization assurance systems, cleaning validation tools, and instrument reprocessing solutions. Our products are designed to meet international standards such as EN ISO and AAMI, ensuring reliability and safety in healthcare environments.",
    products: [
      {
        category: "Steam Sterilization Assurance Systems",
        models: [
          {
            category: "Parametric Assurance Systems",
            models: [
              {
                catalog: "PS 1575 / PS 1510 / PS 1520",
                model: "Autoclave Tape for Steam Sterilization",
                img: "autoclave-tape.png",
                specs: {
                  classification: "EN-ISO 11140-1 (Type 1 Process Indicator)",
                  intendedUse:
                    "Distinguishes processed from unprocessed items by visually confirming exposure to steam.",
                  substrateMaterial: "Medical Grade Crepe Paper",
                  indicatorChange:
                    "Permanent visual color change from White/Off-White to Brown",
                  operatingTemperature: "121°C to 134°C",
                  minimumExposure: "As per specific sterilization cycles",
                  storageConditions: "10°C to 30°C",
                  relativeHumidity: "30% to 70%",
                  shelfLife: "2 Years from Date of Manufacture",
                  traceability:
                    "Lot No. and Expiration Date printed on the core, Production Date on the outer carton.",
                  recordableInfo:
                    "Surface allows for writing with standard pen or ParaSure PIP marker for batch tracking.",
                  features:
                    "Excellent adhesion to various wraps (paper, linen, non-woven). Latex-free.",
                },
                packaging: [
                  {
                    description: "Steam Autoclave Tape 12 mm × 50 m",
                    code: "PS 1575",
                    contents: "1 Roll",
                    innerBoxQuantity: "64 rolls",
                  },
                  {
                    description: "Steam Autoclave Tape 18 mm × 50 m",
                    code: "PS 1510",
                    contents: "1 Roll",
                    innerBoxQuantity: "48 rolls",
                  },
                  {
                    description: "Steam Autoclave Tape 25 mm × 50 m",
                    code: "PS 1520",
                    contents: "1 Roll",
                    innerBoxQuantity: "36 rolls",
                  },
                ],
              },
              {
                catalog: "PS 1020 / PS 1030",
                model: "PARASURE® Bowie & Dick Test Systems",
                img: "steri-test.png",
                specs: {
                  classification: "EN-ISO 11140-1 (Type 2), EN ISO 11140-4",
                  coreFunction:
                    "Diagnoses air removal, wet steam, superheated steam, and presence of non-condensable gases.",
                  operatingTemperature: "134°C to 137°C",
                  time: "3.3 min - 3.5 min (minimum holding time)",
                  indicator:
                    "Both internal (diagnostic) and external (process indicator) included.",
                  substrate: "Silk Screen Printed, Lead-Free",
                  colorChange:
                    "Clear and accurate change from Pink to Black (Internal Indicator)",
                  features:
                    "Independently validated to mirror the performance of the original towel pack. Non-toxic, single-use, disposable.",
                },
                packaging: [
                  {
                    description:
                      "Daily Bowie & Dick Test Pack: Steam Penetration",
                    code: "PS 1020",
                    contents: "1 Box",
                    innerBoxQuantity: "Box of 30 Test Packs",
                  },
                  {
                    description: "A4 Format",
                    code: "PS 1030",
                    contents: "Single Sheet",
                    innerBoxQuantity: "Box of 50 Sheets",
                  },
                ],
              },
              {
                catalog: "PS 1100 / PS 1110",
                model:
                  "PARASURE® Type 4 Multivariable Chemical Indicator for Steam",
                img: "4-multivariable.png",
                specs: {
                  classification:
                    "ISO 11140-1 Part 1 Type 4 (Multi-Variable Indicator)",
                  compliance: "CE Marked, UDI Numbered, Patented Design",
                  application:
                    "For use in every tray, peel-pouch, or item during steam sterilization cycles.",
                  operatingRange: "121°C to 134°C",
                  monitoredParameters:
                    "Reacts to two or more critical parameters (Time, Temperature, and Saturated Steam).",
                  colorChange:
                    "Clear, accurate change from Pink (Unprocessed) to Black (Processed).",
                  failCriteria:
                    "Any remaining pink color on the indicator lines reflects a FAIL.",
                  material: "Laminated Strip",
                  safety:
                    "Non-Toxic formulation, a key advantage over many existing Type 4 indicators.",
                  storage:
                    "Store between 10°C - 38°C in the resealable bag provided.",
                  traceability:
                    "Unique identification code (LOT number) printed on each indicator strip and packaging label.",
                },
                packaging: [
                  {
                    description: "Type 4 Multivariable Indicator for Steam",
                    code: "PS 1100",
                    contents: "Single strip",
                    innerBoxQuantity:
                      "200 strips or 400 strips (Select upon ordering)",
                  },
                  {
                    description: "Type 4 Multi-Parameter Indicator",
                    code: "PS 1110",
                    contents: "Single strip",
                    innerBoxQuantity:
                      "200 strips or 400 strips (Select upon ordering)",
                  },
                ],
              },
              {
                catalog: "PS 1820",
                model:
                  "PARASURE® Type 4 Chemical Indicator for VHP / H2O2 / Plasma",
                img: "4-chemical-indicator.png",
                specs: {
                  classification:
                    "ISO 11140-1 Part 1 Type 4 (Multi-Variable Indicator)",
                  compliance: "CE Marked, UDI Numbered, Patented Design",
                  application:
                    "For use in every pack, peel-pouch, or tray processed in low-temperature VHP, H2O2, and Plasma sterilizers.",
                  monitoredParameters:
                    "Indicates exposure to two or more critical parameters of the VHP/H2O2/Plasma process.",
                  colorChange:
                    "Clear, accurate change from Red or orange (Unprocessed) to Yellow (Successfully Processed - Reference Color).",
                  substrateMaterial:
                    "Tyvek® (Ensures maximum penetration of the sterilant)",
                  interpretation:
                    "Easy to read and interpret: the indicator color changes to the reference color after a successful sterilization cycle.",
                  safety: "Non-Toxic, Single-Use Only.",
                  shelfLife: "3 Years from Date of Manufacture.",
                  storage:
                    "Store in its original packaging between 0°C and 40°C and max RH of 70%. Do not expose to direct sunlight or moisture.",
                  traceability:
                    "LOT number and expiration date available on the product label.",
                },
                packaging: [
                  {
                    description: "Type 4 Chemical Indicator for VHP/Plasma",
                    code: "PS 1820",
                    contents: "Single strip",
                    innerBoxQuantity: "Box of 200 pieces",
                  },
                ],
              },
              {
                catalog: "PS 1830 / PS 1830 L",
                model:
                  "PARASURE® Type 5 Integrating Chemical Indicators - Moving Line Integrator",
                img: "5-moving-line-integrator.png",
                specs: {
                  classification:
                    "ISO 11140-1 Part 1 Type 5 (Integrating Indicator)",
                  mechanism:
                    "A chemical pellet melts and travels through wicking paper.",
                  resultInterpretation:
                    "PASS (ACCEPT): The bar moves completely past the REJECT/FAIL area to the ACCEPT window. FAIL (REJECT): The bar remains in the REJECT/FAIL area.",
                  operatingRange: "121°C to 134°C",
                  compliance:
                    "CE Marked, UDI Numbered, Patented Design, Non-toxic.",
                  storage:
                    "Store between 10°C - 38°C in the resealable bag provided.",
                },
                packaging: [
                  {
                    description:
                      "Integrating Chemical Indicator Moving Line - Type 5",
                    code: "PS 1830 (Also available as PS 1830 L)",
                    contents: "Single strip",
                    innerBoxQuantity: "Box of 500 pieces",
                  },
                ],
              },
              {
                catalog: "PS 1840",
                model: "PARASURE® Type 5 Integrator Steam (Triangle Indicator)",
                img: null,
                specs: {
                  classification:
                    "EN ISO 11140-1 Type 5 (Integrating Indicator)",
                  monitoredParameters:
                    "Simultaneously monitors critical parameters: Time, Temperature, and Steam saturation.",
                  colorChange:
                    "Clear and abrupt color change from pink/unprocessed to Black.",
                  resultInterpretation:
                    "PASS: All additional triangles are now Black. FAIL: Only partial or no color change in the triangles.",
                  features:
                    "Non-toxic / Lead-free. Easy to interpret and record. For use in every tray or item.",
                },
                packaging: [
                  {
                    description: "Type 5 Integrator Steam",
                    code: "PS 1840",
                    contents: "Single strip",
                    innerBoxQuantity: "Bag of 250 Indicators",
                  },
                ],
              },
              {
                catalog: "PS 1110 / PS 1130 / PS 1140 / PS 1160",
                model: "PARASURE® Type 6 Emulating Indicator",
                img: "6-emulating-indicator.png",
                specs: {
                  classification: "EN ISO 11140-1 Type 6 (Emulating Indicator)",
                  compliance:
                    "CE Marked, Non-toxic / Lead-free, Easy to interpret and record.",
                  application:
                    "For use in every tray or item to confirm cycle-specific conditions were met.",
                  monitoredParameters:
                    "Monitors all three critical parameters: Time, Temperature, and Steam saturation.",
                  calibration:
                    "Specifically calibrated to individual cycle requirements: 3.5 minutes at 134°C and 15 minutes at 121°C",
                  colorChange:
                    "Clear and abrupt color change from Pale Pink (Unprocessed) to Teal or Darker (Successfully Processed).",
                  failCriteria:
                    "Evidence of original pink color on the large rectangle indicates a FAIL.",
                  storage:
                    "Store between 10°C - 38°C in the resealable bag provided. No special storage necessary post-exposure.",
                  traceability:
                    "Unique identification code (LOT number) printed on each indicator strip and packaging label.",
                },
                packaging: [
                  {
                    description:
                      "Type 6 Emulating Indicator - 3.5 minutes at 134°C",
                    code: "PS 1110",
                    contents: "Single strip",
                    innerBoxQuantity: "Box of 200 Indicators",
                  },
                  {
                    description:
                      "Type 6 Emulating Indicator - 5.3 minutes at 134°C",
                    code: "PS 1130",
                    contents: "Single strip",
                    innerBoxQuantity: "Available upon request",
                  },
                  {
                    description:
                      "Type 6 Emulating Indicator - 4.0 minutes at 134°C",
                    code: "PS 1140",
                    contents: "Single strip",
                    innerBoxQuantity: "Available upon request",
                  },
                  {
                    description:
                      "Type 6 Emulating Indicator - 7.0 minutes at 134°C",
                    code: "PS 1160",
                    contents: "Single strip",
                    innerBoxQuantity: "Available upon request",
                  },
                ],
              },
              {
                catalog: "PS 1400",
                model: "PARASURE® EN 867-5 Helix Device",
                img: "en-867-5-helix.png",
                specs: {
                  classification: "EN 867 Part 5 (Hollow Load Test Device)",
                  indicatorClassification:
                    "EN-ISO 11140-1 (Type 2 Specific Test Indicator)",
                  universalApplication:
                    "For daily testing in all Type B vacuum-assisted steam sterilizers (ISO 13060 compliance).",
                  operatingTemperature: "134°C / 132°C",
                  time: "3.5 min / 4 min (Cycle time validation)",
                  systemComposition:
                    "Combination of a 1.5 meter hollow lumen device (2 mm inner diameter) and a self-adhesive indicator.",
                  indicatorChange: "Clear visual change from Pink to Black.",
                  usability:
                    "Complete system (Device and 250 indicators). Easy to interpret.",
                  safety: "Non-toxic / Lead-free.",
                  storageConditions: "10°C - 30°C at 30% - 70% RH.",
                  recordableInformation:
                    "Pass/Fail result can be easily recorded.",
                },
                packaging: [
                  {
                    description: "EN 867-5 Helix Device",
                    code: "PS 1400",
                    contents: "Device and 250 Indicators",
                    innerBoxQuantity: "Single Unit",
                  },
                ],
              },
            ],
          },
          {
            category: "Biological Indicators",
            models: [
              {
                catalog: "PS 1900",
                model:
                  "PARASURE® Self-Contained Biological Indicators (SCBI) for Steam",
                img: "biological-indicator.png",
                specs: {
                  classification: "Conforms to EN ISO 11138",
                  sporeOrganism:
                    "Geobacillus stearothermophilus (ATCC 7953) at a population of 10^6",
                  medium:
                    "Sealed glass ampoule containing specialty-formulated soybean casein digest culture medium.",
                  colorIndicator:
                    "Turns from Purple to Yellow when spore growth is present (Sterilization failure).",
                  readoutTime:
                    "Produces final results within 24 hours via standard incubation.",
                  interpretation:
                    "Dramatic color change (Purple to Yellow) is easy to interpret. No color change indicates adequate sterilization.",
                  incubation:
                    "Requires incubation at an adjustable temperature unit offering 55°C to 60°C.",
                  safety: "Non-toxic.",
                  shelfLife:
                    "Store at room temperature. Do not desiccate. Do not use after the expiration date.",
                },
                packaging: [
                  {
                    description:
                      "Self-Contained Biological Indicators for Steam Sterilization",
                    code: "PS 1900",
                    contents: "10 boxes of 100 units",
                    tests: "Total 1000 indicators",
                  },
                ],
              },
              {
                catalog: "PS1930",
                model: "PARASURE PS1930 Incubator",
                img: "ps-1930.jpg",
                specs: {
                  usage:
                    "Incubation of Biological Indicators at 37°C±2°C or 60°C±2°C (Switchable temperatures for EO and Steam BIs).",
                  capacity:
                    "21 metal positions (0.9 cm diameter, 3.3 cm deep).",
                  safetyCompliance:
                    "Complies with Low Voltage Directive 2014/35/EU and EMC Directive 2014/30/EU.",
                  voltage: "100-240 V AC (Universal voltage range)",
                  power: "15 W (Average power: 8 W)",
                  shelfLife: "5 Years",
                  keyFeature:
                    "Designed for use only with Biological Indicators (not compatible with fluorescence readout BIs).",
                },
                packaging: [
                  {
                    description: "Incubator for Biological Indicators",
                    code: "PS1930",
                    contents: "Single Unit",
                    innerBoxQuantity: "N/A",
                  },
                ],
              },
              {
                catalog: "PS 1950 / PS 1960",
                model: "PARASURE® Superfast Biological Indicator System",
                img: "superfast.png",
                specs: [
                  {
                    productCode: "PS 1950",
                    name: "Superfast BI",
                    sterilizationProcess:
                      "Steam (132°C,134°C,135°C pre-vacuum and 121°C)",
                    readoutTime: "20 minutes",
                    indicatorOrganism: "Geobacillus Stearothermophilus",
                    classification: "Conforms to EN ISO 11138 - Parts 1 & 3",
                    keyFeature:
                      "Each BI has a barcode for reader traceability. No laboratory is required.",
                  },
                  {
                    productCode: "PS 1960",
                    name: "Superfast BI",
                    sterilizationProcess: "Vaporised Hydrogen Peroxide (VH2O2)",
                    readoutTime: "20 minutes",
                    indicatorOrganism: "Geobacillus Stearothermophilus",
                    classification: "Conforms to EN ISO 11138 - Parts 1 & 3",
                    keyFeature:
                      "Can be used in all VH2O2 sterilization cycles.",
                  },
                ],
                packaging: [
                  {
                    description: "Superfast BI for Steam",
                    code: "PS 1950",
                    contents: "Single Unit",
                    innerBoxQuantity: "N/A",
                  },
                  {
                    description: "Superfast BI for VHP",
                    code: "PS 1960",
                    contents: "Single Unit",
                    innerBoxQuantity: "N/A",
                  },
                ],
              },
              {
                catalog: "PS 1995",
                model: "Rapid Challenge Steam Test Pack",
                img: "rapid-challenge-steam.png",
                specs: {
                  components:
                    "Contains a 20 minute readout steam BI and a Class 5 Integrator chemical indicator.",
                  classification: "Conforms to EN ISO 11138 and ISO 11140.",
                  readoutTime: "20 minutes",
                  keyFeatures:
                    "Presents a resistant challenge equivalent to the AAMI 16-towel PCD. Integrator Type-5 gives a positive visual result when the line passes to the accept zone.",
                },
                packaging: [
                  {
                    description: "Rapid Challenge Steam Test Pack",
                    code: "PS 1995",
                    contents: "Single Test Pack",
                    innerBoxQuantity: "N/A",
                  },
                ],
              },
              {
                catalog: "PS 1940",
                model: "PARASURE® Rapid Readout Biological System",
                img: "readout-biological-system.png",
                specs: {
                  compatibility:
                    "Compatible with the six major sterilization BI types (Steam, VHP, EO, LTSF, etc.).",
                  readoutTime:
                    "Judgment Time: 4 - 240 minutes (Cycle-dependent).",
                  incubationSlots: "8 slots for simultaneous incubation.",
                  incubationTemperature:
                    "58°C±2°C and 36°C±1°C (Adjustable for different spore types).",
                  display: "7 inch TFF Touch Screen.",
                  ratedPower: "20 W",
                  connectivity: "LAN, USB, DC Input/Output.",
                  dimensions: "246 mm × 214 mm × 100 mm (Net Weight: 1 kg)",
                  system: "Closed system",
                },
                packaging: [
                  {
                    description: "Rapid Readout Biological System Reader",
                    code: "PS 1940",
                    contents: "Single Unit",
                    innerBoxQuantity: "N/A",
                  },
                ],
              },
              {
                catalog: "PS1970",
                model: "PARASURE® Mini Auto-reader System",
                img: "mini-auto-reader.png",
                specs: {
                  compatibility:
                    "Monitors Steam, VHP/H2O2, LTSF, and EO sterilization processes (requires compatible RRBI).",
                  readoutPrinciple:
                    "Spectrum analysis technology monitors fluorescence changes to judge spore survival.",
                  readoutTime:
                    "Provides positive readout results in 20 minutes (Steam/VHP models), 1 hour (LTSF), 3 hours (Steam models), and 4 hours (EO models).",
                  incubationTemperature:
                    "Adjustable temperature control: 58°C or 37°C (User-adjustable for specific indicator requirements).",
                  alarmSystem:
                    "Visual and Sound Alarm system (includes screen, light changing, and buzzer).",
                  externalFeatures:
                    "Includes a Printer, Scanner, and Digital Tube Display on the operation panel.",
                  connections:
                    "Ethernet Port and USB port for data transfer and communication.",
                },
                packaging: [
                  {
                    description: "Mini Auto-reader System",
                    code: "PS1970",
                    contents: "Single Unit",
                    innerBoxQuantity: "N/A",
                  },
                ],
              },
            ],
          },
          {
            category: "Protein Test Systems",
            models: [
              {
                catalog: "PS 1700 / PS 1710 / PS 1720 / PS 1730",
                model:
                  "PARASURE® Protein Test Kit & ParaScope Protein Test Kit",
                img: "protein-test-kit.png",
                specs: {
                  intendedPurpose:
                    "Rapid detection of residual protein residues on surfaces of washer/disinfectors, ultrasonic cleaners, endoscopes, and surgical instruments.",
                  conformsTo:
                    "Recommendations in EN ISO 15883 (Requirements for washer-disinfectors).",
                  methodology:
                    "Dye-binding solution used in clinical chemistry.",
                  sensitivity:
                    "Highly sensitive, able to detect protein residues to within 1μg (one microgram).",
                  resultTime:
                    "Clear and almost instantaneous result within 10 seconds (no incubation required).",
                  interpretation:
                    "Color Indicator: The protein test liquid will change to shades of Blue if protein residue is present. No color change (liquid remains brown/yellow) indicates protein residue has not been detected.",
                  positiveControl:
                    "Supplied to confirm the reagent's efficacy and provide a reference color for a highly positive reaction to protein (Bright Blue).",
                  frequencyOfUse:
                    "As required by local procedure and compliance standards (e.g., daily, weekly, or after maintenance).",
                  numberOfUses: "Single Use (one test per swab/vial).",
                  storage:
                    "Store at room temperature. If refrigerated, shelf life is extended from 6 months to 2 years.",
                  suppliedWith:
                    "Instructions for Use (I.F.U), Swabs (short or EndoSwabs), Reagent Vials, and Positive Control.",
                  endoscopeUse:
                    "For internal surfaces of endoscopes, the ParaScope kits with 2.5 meter swabs of various head sizes (1.9mm, 2.8mm, 3.7mm) must be used.",
                },
                packaging: [
                  {
                    description: "Protein Test Kit (Standard)",
                    code: "PS 1700",
                    contents:
                      "Box of 25 tests with 25 short swabs & 2 positive controls",
                  },
                  {
                    description: "ParaScope Protein Test Kit (1.9 mm Head)",
                    code: "PS 1710",
                    contents:
                      "Box of 25 tests with 25 EndoSwabs & 1 positive control",
                  },
                  {
                    description: "ParaScope Protein Test Kit (2.8 mm Head)",
                    code: "PS 1720",
                    contents:
                      "Box of 25 tests with 25 EndoSwabs & 1 positive control",
                  },
                  {
                    description: "ParaScope Protein Test Kit (3.7 mm Head)",
                    code: "PS 1730",
                    contents:
                      "Box of 25 tests with 25 EndoSwabs & 1 positive control",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        category: "Cleaning and Documentation Assurance Systems",
        models: [
          {
            category: "Cleaning Validation",
            models: [
              {
                catalog: "PS 1600",
                model: "PARASURE® CEI (Cleaning Efficacy Indicator)",
                img: "cleaning_vlidation.png",
                specs: {
                  classification: "Conforms to ISO 15883",
                  application:
                    "Monitoring cleaning efficiency of washer-disinfectors and ultrasonic machines.",
                  substrateMaterial:
                    "Special cleaning indicator made of stainless steel.",
                  testSoil:
                    "Contaminated with a quantitative measure of test soil simulation of human blood (blood and additives).",
                  usability:
                    "Routine monitor/validation tool, single-use, easy to use, and easy to read.",
                  shelfLife: "18 months.",
                },
                packaging: [
                  {
                    description: "ParaSure CEI (Cleaning Efficacy Indicator)",
                    code: "PS 1600",
                    contents: "Box of 50 indicators",
                    innerBoxQuantity: "N/A",
                  },
                ],
              },
              {
                catalog: "PS-2221",
                model: "PARASURE® ULTRASONIC CAVICHECK ULTRASONIC WASHER TEST",
                img: "ultrasonic-cavicheck.png",
                specs: {
                  productType: "Ultrasonic Washer Test (Performance Monitor)",
                  mechanism:
                    "Pre-prepared test showing immediate results via colour change.",
                  resultIndicators:
                    "Blue (FAIL/Negative result - Insufficient energy) to Yellow (PASS/Positive result - Sufficient energy).",
                  efficacyDetection:
                    "Detects sufficient energy for cavitation.",
                  standardPerformance:
                    "Average time for a colour change is 6 min @ 27kHz.",
                  warningIndicator:
                    "A slower change will indicate a weak spot.",
                  archiving: "Suitable for archiving",
                  instructionsForUse: "1 PCS IFU",
                },
                packaging: [
                  {
                    description: "ULTRASONIC CAVICHECK",
                    code: "PS-2221",
                    contents: "30 PCS Tests, 30 CS Archived Labels",
                    innerBoxQuantity: "N/A",
                  },
                ],
              },
            ],
          },
          {
            category: "Documentation Systems",
            models: [
              {
                catalog: "PS 1500 / PS 1530 / PS 1540",
                model: "PARASURE® Duplex 3 Line Documentation Label & Gun",
                img: "traceability.png",
                specs: {
                  classification: "Conforms to EN ISO 11140-1 Type 1",
                  operatingTemperature: "121°C - 134°C Steam",
                  indicator: "Clear color change from pink to brown for steam.",
                  dispensing:
                    "Yes, but can be used as part of a record system.",
                  safety: "Non-toxic, Lead free.",
                  adhesive: "Non-toxic/Lead free Adhesive.",
                  labelFunction:
                    "Duplex Label for effective sterilization process record keeping.",
                },
                packaging: [
                  {
                    description: "Duplex 3 Line Documentation Labels",
                    code: "PS 1500",
                    contents: "30 rolls of 400 labels/carton",
                    innerBoxQuantity: "N/A",
                  },
                  {
                    description: "3 Line Documentation Label Gun",
                    code: "PS 1530",
                    contents: "Single Unit",
                    innerBoxQuantity: "N/A",
                  },
                  {
                    description: "Ink Cartridge for Label Gun",
                    code: "PS 1540",
                    contents: "Single Unit",
                    innerBoxQuantity: "N/A",
                  },
                ],
              },
            ],
          },
          {
            category: "Disinfectants",
            models: [
              {
                catalog: "N/A",
                model: "PARACHLOR® Effervescent Disinfectant Tablets",
                img: "effervescent-disinfectant.png",
                specs: {
                  productType: "Effervescent Disinfectant Tablets",
                  activeIngredient: "Registered as US EPA.",
                  manufacturing:
                    "Manufactured in a Good Manufacturing Practice facility in conformance with European Standards.",
                  shelfLife: "Tablets: 3 years. Granules: 2 years.",
                  safetySustainability:
                    "100% biodegradable. pH same as human skin, will not burn or sting. Surface-friendly; will not corrode like bleach and will not leave residue like Quats.",
                  efficiency:
                    "The biocidal effectiveness is maintained until all the 'bound' chlorine is consumed.",
                  format:
                    "Available in 4 tablet sizes (5,17,25, and 87) and a 500 g granule tub.",
                },
                packaging: [
                  {
                    description: "PARACHLOR Tablets 1.7 concentration",
                    code: "N/A",
                    contents: "granule tub of 200 Tablets",
                    innerBoxQuantity: "N/A",
                  },
                  {
                    description: "PARACHLOR Tablets 2.5 concentration",
                    code: "N/A",
                    contents: "granule tub of 100 Tablets",
                    innerBoxQuantity: "N/A",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        category: "Instrument & Scope Reprocessing",
        models: [
          {
            category: "Detergents and Cleaners",
            models: [
              {
                catalog: "N/A",
                model: "Parazyme Neutral Enzymatic Detergent",
                img: null,
                specs: {
                  productType: "High-Performance Enzymatic Detergent",
                  primaryUse:
                    "Pre-treatment and cleaning of surgical instruments and medical devices prior to disinfection and sterilization.",
                  formulaPH: "Neutral pH",
                  instrumentCompatibility:
                    "Gentle on instruments and compatible with all types of materials.",
                  waterQuality:
                    "Effective in all water qualities (hard or soft).",
                  disinfectantCompatibility:
                    "Compatible with all high-level disinfectants (HLDs).",
                },
                packaging: [
                  {
                    description: "Parazyme Neutral Enzymatic Detergent",
                    code: "N/A",
                    contents: "Gallon of 5 Liters",
                    innerBoxQuantity: "N/A",
                  },
                ],
              },
              {
                catalog: "PS2300",
                model: "InstaClean Neutral Pre-Clean Kit",
                img: "pre-clean-kit.png",
                specs: {
                  productType:
                    "Ready-to-use Neutral, Non-Enzymatic Pre-Cleaning Kit",
                  systemComponents:
                    "Integrated pre-mixed neutral solution and Contoured Sponge.",
                  regulatoryStatus: "CE Marked",
                  unitOfMeasure:
                    "Box of 50 bags (Technical Specs) / Box of 25 bags (Order Details)",
                  volumePerPouch: "500 ml of pre-mixed neutral detergent.",
                  pHValue: "7.0 to 7.5 (Neutral pH)",
                  enzymeContent: "Non-enzymatic",
                  shelfLife: "2 years from date of manufacture",
                  toxicity: "Non-toxic",
                  numberOfUses: "Single use",
                },
                packaging: [
                  {
                    description: "InstaClean Neutral Pre-Clean Kit",
                    code: "PS2300",
                    contents: "Box of 25 bags.",
                    innerBoxQuantity: "N/A",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const annualEvents = [
  {
    slug: "africa-health-excon",
    type: "annual",
    title: "The Future of Sovereignty: AI & Integrated Solutions",
    subtitle: "Shaping a New Order for African Public Health",
    category: "Africa Health ExCon",
    date: "2025",
    excerpt: "In 2025, Elhoda International stood as a cornerstone of the 'Health Sovereignty' movement...",
    images: [
      "/africa-health-excon.jpg",
      "/africia-health-2022.JPG",
      "/africia-health-2024.jpg",
    ],
    overview: {
      eyebrow: "Event Overview",
      heading: "Shaping a New Order for African Public Health",
      intro: "In 2025, Elhoda International stood as a cornerstone of the 'Health Sovereignty' movement..."
    },
    highlights: [
      {
        title: "AI-Driven Diagnostics",
        text: "We debuted our latest AI-integrated laboratory software solutions..."
      }
    ]
  },
  {
    slug: "egy-health-international-congress-2025",
    type: "annual",
    title: "Strategic Leadership: Advancing National Health Sovereignty",
    subtitle: "Innovating for a Self-Sufficient Healthcare Future",
    category: "The 6th Egy Health International Congress",
    date: "2025",
    excerpt: "In its landmark 6th edition, Elhoda International reaffirms its position as a Platinum Sponsor...",
    images: [
      "/africa-health-excon.jpg",
      "/africia-health-2022.JPG",
      "/africia-health-2024.jpg",
    ],
    overview: {
      eyebrow: "Event Overview",
      heading: "Shaping a New Order for African Public Health",
      intro: "In its landmark 6th edition, Elhoda International reaffirms its position..."
    },
    highlights: [
      {
        title: "Manufacturing Excellence & Localization",
        text: "Showcasing expanded capabilities in high-precision medical consumables..."
      }
    ]
  },
  {
    slug: "CSR cumminty impact",
    type: "annual",
    title: "Sustainability of Hope: A Legacy of Giving",
    subtitle: "Consistency in Compassion",
    category: "CSR & Community Impact",
    date: "2025",
    excerpt: "As we enter 2025, Elhoda International's CSR mission has evolved into a sustainable ecosystem...",
    images: [
      "/africa-health-excon.jpg",
      "/africia-health-2022.JPG",
      "/africia-health-2024.jpg",
    ],
    overview: {
      eyebrow: "Event Overview",
      heading: "Shaping a New Order for African Public Health",
      intro: "As we enter 2025, Elhoda International's CSR mission has evolved..."
    },
    highlights: [
      {
        title: "Mother's Day Gala",
        text: "A day of empowerment featuring vocational success stories..."
      }
    ]
  },
  {
    slug: "Arab health",
    type: "annual",
    title: "Arab health | Dubai",
    subtitle: "Strengthening the Future of Healthcare through Global Collaboration",
    category: "Global Strategic Alliances at Arab Health",
    date: "2025",
    excerpt: "On the sidelines of Arab Health 2025, Elhoda International joined a distinguished assembly...",
    images: [
      "/africa-health-excon.jpg",
      "/africia-health-2022.JPG",
      "/africia-health-2024.jpg",
    ],
    overview: {
      eyebrow: "Event Overview",
      heading: "Shaping a New Order for African Public Health",
      intro: "On the sidelines of Arab Health 2025..."
    },
    highlights: [
      {
        title: "Strategic Integration",
        text: "Elhoda was recognized as a key private-sector partner..."
      }
    ]
  },
  {
    slug: "New year event",
    type: "annual",
    title: "Annual Gala | New Year Celebration",
    subtitle: "Excellence Through Partnership",
    category: "Elhoda Annual Gala: Honoring Excellence and Partnership",
    date: "2025",
    excerpt: "Elhoda International recently hosted its Annual New Year Celebration...",
    images: [
      "/africa-health-excon.jpg",
      "/africia-health-2022.JPG",
      "/africia-health-2024.jpg",
    ],
    overview: {
      eyebrow: "Event Overview",
      heading: "We extended our deepest gratitude to our VIP Customers and Strategic Partners.",
      intro: "Elhoda International recently hosted its Annual New Year Celebration..."
    },
    highlights: [
      {
        title: "Strategic Recognition",
        text: "Awards were presented to key institutions..."
      }
    ]
  }
];
export const oneTimeEvents = [
  {
    slug: "Arab yousef",
    type: "one-time",
    title: "Arab health | Dubai",
    subtitle: "Securing Medical Sovereignty through Local Manufacturing",
    category: "The Localization Protocol: A Milestone with the EHA",
    date: "2025",
    excerpt: "A transformative highlight of Arab Health 2025 was the official signing...",
    images: [
      "/africa-health-excon.jpg",
      "/africia-health-2022.JPG",
      "/africia-health-2024.jpg",
    ],
    overview: {
      eyebrow: "Event Overview",
      heading: "Shaping a New Order for African Public Health",
      intro: "A transformative highlight of Arab Health 2025 was the official signing..."
    },
    highlights: [
      {
        title: "Localizing Medical Industry",
        text: "The protocol focuses on the localization of medical supplies..."
      },
      {
        title: "Sustainable Supply Chains",
        text: "By producing essential lab consumables within Egypt..."
      },
      {
        title: "Quality Assurance",
        text: "All locally manufactured products under this protocol..."
      },
      {
        title: "Economic Impact",
        text: "This partnership not only enhances patient care..."
      }
    ]
  }
];
export const blogPosts = [
  {
    slug: "africa-health-excon",
    type: "annual",
    title: "The Future of Sovereignty: AI & Integrated Solutions",
    subtitle: "Shaping a New Order for African Public Health",
    category: "Africa Health ExCon",
    date: "2025 ",

    images: [
      "/africa-health-excon.jpg",
      "/africia-health-2022.JPG",
      "/africia-health-2024.jpg",
    ],

    overview: {
      eyebrow: "Event Overview",
      heading: "Shaping a New Order for African Public Health",
      intro:
        "In 2025, Elhoda International stood as a cornerstone of the 'Health Sovereignty' movement. Our participation focused on the integration of Artificial Intelligence (AI) and sustainable healthcare ecosystems to ensure that Africa’s health future is built from within.",
    },

    highlights: [
      {
        title: "AI-Driven Diagnostics",
        text: "We debuted our latest AI-integrated laboratory software solutions, aimed at providing predictive analytics and smarter resource management for African health ministries.",
      },
      {
        title: "Integrated Ecosystems",
        text: "Rather than just products, Elhoda presented 'Turnkey Solutions'—combining localized manufacturing, advanced logistics, and on-site technical training for local practitioners.",
      },
      {
        title: "Strategic Leadership",
        text: "As a veteran participant, Elhoda led discussions on intra-African trade, advocating for the removal of barriers to ensure medical supplies reach every corner of the continent.",
      },
    ],
  },

  {
    slug: "egy-health-international-congress-2025",
    type: "annual",
    title: "Strategic Leadership: Advancing National Health Sovereignty",
    subtitle: "Innovating for a Self-Sufficient Healthcare Future",
    category: "The 6th Egy Health International Congress",
    date: "2025 ",

    images: [
      "/africa-health-excon.jpg",
      "/africia-health-2022.JPG",
      "/africia-health-2024.jpg",
    ],

    overview: {
      eyebrow: "Event Overview",
      heading: "Shaping a New Order for African Public Health",
      intro:
        "In its landmark 6th edition, Elhoda International reaffirms its position as a Platinum Sponsor and a strategic pillar of the Egy Health International Congress. Our 2025 participation represents the culmination of a decade-long commitment to the Egyptian healthcare sector, moving beyond traditional distribution to lead the charge in industrial localization and AI-driven diagnostic excellence.",
    },

    highlights: [
      {
        title: "Manufacturing Excellence & Localization",
        text: "Showcasing expanded capabilities in high-precision medical consumables. By producing locally under ISO and CE standards, we are actively reducing import reliance and strengthening national health security.",
      },
      {
        title: "The AI Diagnostic Frontier",
        text: "Debuting Artificial Intelligence (AI) laboratory integration, featuring predictive analytics and automated ecosystems designed to optimize clinical throughput within the Universal Health Insurance (UHI) framework.",
      },
      {
        title: "Institutional Collaboration",
        text: "Serving as a high-level forum to deepen alliances with the UPA and EHA, ensuring that world-class medical technologies are accessible across all Egyptian governorates.",
      },
      {
        title: "Turnkey Healthcare Solutions",
        text: "Presenting 'Integrated Healthcare Ecosystems' that merge localized manufacturing, advanced logistics, and on-site technical training into a sustainable blueprint for modern hospital management.",
      },
    ],
  },

  {
    slug: "CSR cumminty impact",
    type: "annual",
    title: "Sustainability of Hope: A Legacy of Giving",
    subtitle: "Consistency in Compassion",
    category: "CSR & Community Impact",
    date: "2025",

    images: [
      "/africa-health-excon.jpg",
      "/africia-health-2022.JPG",
      "/africia-health-2024.jpg",
    ],

    overview: {
      eyebrow: "Event Overview",
      heading: "Shaping a New Order for African Public Health",
      intro:
        "As we enter 2025, Elhoda International’s CSR mission has evolved into a sustainable ecosystem of support. Our 2025 events with Baheya represent a 'Legacy of Giving,' ensuring that the annual milestones of Mother’s Day and Ramadan are permanent fixtures of hope.",
    },

    highlights: [
      {
        title: "Mother’s Day Gala",
        text: "A day of empowerment featuring vocational success stories from Baheya’s fighters, supported by Elhoda’s commitment to women’s health and social reintegration.",
      },
      {
        title: "The Ramadan Gathering",
        text: "Our signature Iftar event continues to grow, serving as a platform for survivors to share their stories of triumph with those currently in treatment.",
      },
      {
        title: "The Umrah Gift",
        text: "For the third consecutive year, the Umrah withdrawal remains the cornerstone of our spiritual support program. Elhoda views these trips not as a gift, but as a tribute to the unwavering faith of the Baheya fighters.",
      },
      {
        title: "National Vision",
        text: "This ongoing partnership aligns with Elhoda’s broader mission to support Egypt’s health sector through both medical technology and humanitarian advocacy.",
      },
    ],
  },

  {
    slug: "Arab health",
    type: "annual",
    title: "Arab health | Dubai",
    subtitle:
      "Strengthening the Future of Healthcare through Global Collaboration",
    category: "Global Strategic Alliances at Arab Health",
    date: "2025",

    images: [
      "/africa-health-excon.jpg",
      "/africia-health-2022.JPG",
      "/africia-health-2024.jpg",
    ],

    overview: {
      eyebrow: "Event Overview",
      heading: "Shaping a New Order for African Public Health",
      intro:
        "On the sidelines of Arab Health 2025—the Middle East’s premier healthcare exhibition—Elhoda International joined a distinguished assembly of global healthcare leaders. This event served as a high-profile platform for Elhoda to align its corporate vision with Egypt's national healthcare strategy under the patronage of the Egypt Healthcare Authority (EHA).",
    },

    highlights: [
      {
        title: "Strategic Integration",
        text: "Elhoda was recognized as a key private-sector partner in the presence of Dr. Ahmed El-Sobky, Chairman of the EHA. The focus was on fostering international partnerships that bring the latest medical innovations to the Egyptian and Arab markets.",
      },
      {
        title: "National Vision",
        text: "By participating in this global forum, Elhoda reaffirmed its commitment to Egypt’s Vision 2030, supporting the digital transformation and industrial modernization of the national healthcare system.",
      },
      {
        title: "Knowledge Exchange",
        text: "Our team engaged with international technology giants to explore the integration of AI and advanced diagnostics into our laboratory supply chain, ensuring Elhoda remains at the cutting edge of the medical sector.",
      },
    ],
  },

  {
    slug: "Arab health-2",
    type: "one-time",
    title: "Arab health | Dubai",
    subtitle: "Securing Medical Sovereignty through Local Manufacturing",
    category: "The Localization Protocol: A Milestone with the EHA",
    date: "2025",

    images: [
      "/africa-health-excon.jpg",
      "/africia-health-2022.JPG",
      "/africia-health-2024.jpg",
    ],

    overview: {
      eyebrow: "Event Overview",
      heading: "Shaping a New Order for African Public Health",
      intro:
        "A transformative highlight of Arab Health 2025 was the official signing of a Strategic Cooperation Protocol between Elhoda International and the Egypt Healthcare Authority (EHA). This landmark agreement represents a decisive step toward Egyptian health sovereignty and regional supply chain resilience.",
    },

    highlights: [
      {
        title: "Localizing Medical Industry",
        text: "The protocol focuses on the localization of medical supplies and laboratory consumables. Elhoda will lead efforts to manufacture high-quality medical tools locally, adhering to the highest international standards.",
      },
      {
        title: "Sustainable Supply Chains",
        text: "By producing essential lab consumables within Egypt, Elhoda and the EHA aim to ensure a continuous, sustainable supply for the Universal Health Insurance (UHI) system, reducing reliance on international imports.",
      },
      {
        title: "Quality Assurance",
        text: "All locally manufactured products under this protocol are designed to meet global benchmarks, supporting the EHA’s goal of providing world-class medical services to every Egyptian citizen.",
      },
      {
        title: "Economic Impact",
        text: "This partnership not only enhances patient care but also strengthens the national economy by creating local industrial expertise and high-tech manufacturing jobs.",
      },
    ],
  },

  {
    slug: "New year event",
    type: "annual",
    title: "Annual Gala | New Year Celebration",
    subtitle: "Excellence Through Partnership",
    category: "Elhoda Annual Gala: Honoring Excellence and Partnership",
    date: "2025",

    images: [
      "/africa-health-excon.jpg",
      "/africia-health-2022.JPG",
      "/africia-health-2024.jpg",
    ],

    overview: {
      eyebrow: "Event Overview",
      heading:
        "We extended our deepest gratitude to our VIP Customers and Strategic Partners.",
      intro:
        "Elhoda International recently hosted its Annual New Year Celebration, a prestigious evening dedicated to reflecting on our collective achievements and setting a bold trajectory for the coming year. The event served as a platform to recognize the two pillars of our success: our strategic partners and our high-performing talent.",
    },

    highlights: [
      {
        title: "Strategic Recognition",
        text: "Awards were presented to key institutions that have collaborated with us to elevate national healthcare standards and support the Universal Health Insurance (UHI) system.",
      },
      {
        title: "The Power of Trust",
        text: "We reaffirmed our commitment to providing these partners with the latest diagnostic innovations and locally manufactured medical solutions.",
      },
    ],
  },
];
export const machinery = [
  {
    name: "I-Sens System",
    img: "i-sens-machine.png",
    logo: "/i-sens.png",
    description:
      "i.sens lead the diagnostic market with a diverse product portfolio, ncluding electrolyte analyzers, blood gas analyzers, mmunochemistry analyzers, and anc immunoassay analyzers.",
  },
  {
    name: "Neo Medica Machine",
    img: "neo-medica-machine.png",
    logo: "/neomedica.png",
    description:
      "NeoMedica making continuous investments in key technologies, standards in the IVD field and are dedicated to provide innovative, smarter and safer user-friendly solutions.",
  },
  {
    name: "Assuretech Machine",
    img: "assure-tech-machine.png",
    logo: "/assuretech.png",
    description:
      "Assure Tech was established by senior experts of in-vitro diagnostics industry in 2008. As a high-tech biotechnology company, Assure Tech is specialized in research & development, production, sales of diagnostic reagents, POCT and biological materials.",
  },
  {
    name: "ACON",
    img: "acon-machine.png",
    logo: "/acon.png",
    description:
      "Acon making continuous investments in key technologies, products and standards in the IVD field and are dedicated to provide innovative, smarter and safer. user-friendlv solutions.",
  },
  {
    name: "DRAWRAY",
    img: "drawray-machine.png",
    logo: "/drawray.png",
    description:
      "Drawray utilizes three core IVD technology platforms-CLIA, FIA, and Rapid Test. Our product portfolio spans critical areas such as cardiac markers, thyroid function, autoimmunity, infectious diseases, and reproductive health.",
  },
  {
    name: "URIT",
    img: "urit-machine.png",
    logo: "/urit.png",
    description:
      "Urit is one of the first companies in China to bring IVD diagnostics to domestic patients' benefits since its establishment in 1984. Now it's a top leading global professional IVD supplier in China.",
  },
  {
    name: "Dymind",
    img: "dymind-machine.png",
    logo: "/dymind.png",
    description:
      "Dymind is an enterprise driven by innovation, the number of R&D staff accounts for over 40%, the annual R&D expenditure exceeds 20% of revenue we hold an increasing market share which steadily ranks second in the hematology market.",
  },
  {
    name: "Parasure",
    img: "parasure-machine.png",
    logo: "/parasure.png",
    description:
      "PARASURE Limited, a UK-based leader in sterility assurance, delivers innovative solutions that meet international standards and advance infection prevention worldwide.",
  },
  {
    name: "AMS",
    img: "ams-machine.png",
    logo: "/ams-blue.png",
    description:
      "AMS was founded in 2012 in Northern Ireland; the only part of the UK still within the European single market after Brexit. With a clear understanding that people & humanitarian values should be at the heart of our IVD Products, Manufacturing & Services.",
  },
  {
    name: "GHP",
    img: "ghp-machine.png",
    logo: "/ghp.png",
    description:
      "GHP a UK-based healthcare innovator, has partnered with ELHoda to develop a complete endoscopy reprocessing line that enhances patient safety and infection prevention.",
  },
  {
    name: "OxyPharm",
    img: "oxy-pharm-machine.png",
    logo: "/oxy-pharm.png",
    description:
      "Oxy Pharm Originally known across the world for its aerial surface disinfection (ASD) concept, the group is now able to provide the entire biocleaning chain with a wide range of solutions from cleaning to disinfection and pre-disinfection.",
  },
  {
    name: "Medntech",
    img: "medn-tech-machine.png",
    logo: "/medntech.png",
    description:
      "Medentech a global leader in chlorine-based disinfectant tablets, has partnered with El-Hoda to launch ParaChlor, an advanced chlorine tablet solution for the global market.",
  },
  {
    name: "Greiner",
    img: "greiner-machine.png",
    logo: "/greiner.png",
    description:
      "Greiner Bio-One GmbH is an original equipment manufacturer (OEM) and a long-term partner to the pharmaceutical industry. biotechnoloav. diagnostics and medical technology. The company manufactures small and large product series.",
  },
];
