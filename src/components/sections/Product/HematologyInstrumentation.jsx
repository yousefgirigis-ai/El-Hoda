import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUp,
  ArrowDown,
  ChevronRight,
  X,
  Menu,
  ChevronDown,
  Info,
  Cpu,
  Zap,
  Settings,
  Activity,
  Microscope,
  Wifi,
  Shield,
  Droplets,
  Users,
  Headphones,
  CheckCircle,
} from "lucide-react";

const HematologyInstrumentation = () => {
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeInstrument, setActiveInstrument] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle URL parameters for direct category/instrument navigation
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("category");
    const instrumentId = params.get("instrument");

    if (categoryId) {
      // Expand the specified category
      if (!expandedCategories.includes(categoryId)) {
        setExpandedCategories((prev) => [...prev, categoryId]);
      }

      // Find and set the instrument if specified
      if (instrumentId) {
        const category = instrumentCategories.find(
          (cat) => cat.id === categoryId,
        );
        if (category) {
          const instrument = category.instruments.find(
            (inst) => inst.id === instrumentId,
          );
          if (instrument) {
            setActiveInstrument(instrument);
            setActiveTab("overview");
          }
        }
      }
    }
  }, []);

  const handleBackToHome = () => {
    navigate("/products/ivd");
  };

  const handleScrollAction = () => {
    window.scrollTo({
      top: isAtTop ? document.documentElement.scrollHeight : 0,
      behavior: "smooth",
    });
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  const handleInstrumentClick = (instrument) => {
    if (activeInstrument?.id === instrument.id) {
      toggleCategory(instrument.id);
    } else {
      setActiveInstrument(instrument);
      setExpandedCategories([instrument.category]);
      setActiveTab("overview");

      // Update URL without page reload
      const url = new URL(window.location);
      url.searchParams.set("category", instrument.category);
      url.searchParams.set("instrument", instrument.id);
      window.history.pushState({}, "", url);
    }
    setIsMobileMenuOpen(false);

    // Scroll to top of content on mobile
    if (window.innerWidth < 1024) {
      document
        .querySelector(".lg\\:w-2\\/3")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCategoryClick = (categoryId) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories((prev) => prev.filter((id) => id !== categoryId));
      if (activeInstrument?.category === categoryId) {
        setActiveInstrument(null);
      }
    } else {
      setExpandedCategories((prev) => [...prev, categoryId]);
    }

    // Update URL for category
    const url = new URL(window.location);
    url.searchParams.set("category", categoryId);
    url.searchParams.delete("instrument");
    window.history.pushState({}, "", url);
  };

  const clearSelection = () => {
    setActiveInstrument(null);
    setActiveTab("overview");

    // Clear URL parameters
    const url = new URL(window.location);
    url.searchParams.delete("category");
    url.searchParams.delete("instrument");
    window.history.pushState({}, "", url);
  };

  // Hematology Instruments Categories
  const instrumentCategories = [
    {
      id: "3-diff",
      name: "1) 3-diff Hematology Analyzers",
      description: "Compact analyzers for basic CBC with 3-part differential",
      icon: Cpu,
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      instruments: [
        {
          id: "bh-70p",
          name: "BH-70P Automated Hematology Analyzer",
          model: "BH-70P",
          category: "3-diff",
          image: "bh-70p.jpg",
          overview:
            "The BH-70P is a high-performance, compact 3-part differential analyzer designed for efficiency and precision in the laboratory. By utilizing a double-chamber system, it achieves a high throughput while maintaining a low footprint and cost-effective reagent consumption.",
          features: [
            "High Efficiency: Delivers up to 72 tests per hour using a double-chamber design.",
            "Cost-Effective: Operates on a streamlined 2-reagent system (Diluent and Lyse) to minimize overhead.",
            "Intuitive Interface: Features a large 10.4-inch color touchscreen for easy navigation and workflow management.",
            "Massive Storage: Internal memory holds up to 1,000,000 results, including full histograms.",
            "Advanced Connectivity: Full LIS/HIS integration via HL7 protocol and 6 USB ports for external peripherals.",
            "Reliable Technology: Uses proven Electrical Impedance and Photoelectric Colorimetry for clinical accuracy.",
          ],
          reagentSystem: [
            "Open System: Offers flexibility in reagent sourcing.",
            "Minimal Consumables: Only requires Diluent and Lyse, reducing the complexity of inventory.",
            "Certified Quality: Fully compliant with CE Mark, ISO 9001, and ISO 13485 standards.",
          ],
          support: [
            "Elhoda Service: Includes professional installation, user training, and nationwide technical support.",
          ],
          specifications: {
            measurementPrinciples: {
              "WBC/RBC/PLT": "Electrical Impedance",
              HGB: "Photoelectric Colorimetry",
            },
            throughput: "Up to 72 tests per hour",
            parameters: {
              WBC: ["WBC", "LYM#", "MID#", "GRAN#", "LYM%", "MID%", "GRAN%"],
              RBC: [
                "RBC",
                "HGB",
                "HCT",
                "MCV",
                "MCH",
                "MCHC",
                "RDW-CV",
                "RDW-SD",
              ],
              PLT: ["PLT", "MPV", "PDW-SD", "PDW-CV", "PCT", "P-LCR", "P-LCC"],
            },
            histograms: 3,
            sampleVolume: {
              "Whole Blood": "8.5 µL",
              "Pre-diluted": "20 µL",
            },
            apertureDiameter: "WBC: 100 µm",
            dataManagement: {
              storage: "1,000,000 results",
              qcModes: ["L-J", "X", "X-R", "X-B"],
            },
            display: '10.4" TFT Touchscreen (800 × 600)',
            interfaces: ["RS232", "6 × USB ports", "HL7 protocol support"],
            physicalSpecs: "Size: 380 × 305 × 395 mm",
            power: "AC 100–240V; Built-in 57 mm thermal printer",
          },
        },
      ],
    },
    {
      id: "5-diff",
      name: "2) 5-diff Hematology Analyzers",
      description:
        "Advanced analyzers for comprehensive CBC with 5-part differential",
      icon: Activity,
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      instruments: [
        {
          id: "bh-5160",
          name: "BH-5160 Automated Hematology Analyzer (5-Part Diff)",
          model: "BH-5160",
          category: "5-diff",
          image:
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
          overview:
            "The BH-5160 represents a significant step up in diagnostic capability for medium-to-high workload laboratories. Unlike standard 3-part systems, the BH-5160 provides a true 5-part differential, precisely separating white blood cells into Neutrophils, Lymphocytes, Monocytes, Eosinophils, and Basophils. It combines advanced laser flow cytometry with a compact bench-top design to deliver clinical accuracy with optimized operating costs.",
          features: [
            "Precision WBC Differentiation: Utilizes Laser Flow Cytometry to provide accurate separation of all five leukocyte types.",
            "Advanced Graphics: Offers 2D and 3D scattergrams for more detailed WBC classification compared to simple histograms.",
            "Operational Efficiency: Designed for continuous laboratory operation with high-speed processing and a large color touchscreen.",
            "Smart Design: Compact footprint with a front-access design for easy maintenance and an intelligent alarm system for real-time monitoring.",
            "Seamless Integration: Fully compatible with LIS/HIS environments using the HL7 protocol, featuring LAN and USB connectivity.",
            "Economic Performance: Optimized for low reagent consumption and compatible with open reagent systems.",
          ],
          reagentSystem: [
            "Reagent Flexibility: Supports an open reagent system with dedicated consumables for maximum stability.",
          ],
          support: [
            "Reliability: Includes real-time system monitoring and comprehensive preventive maintenance programs.",
            "Elhoda Support: Professional installation, comprehensive user training, and nationwide technical service coverage.",
          ],
          specifications: {
            measurementPrinciples: {
              "WBC Diff": "Laser Flow Cytometry",
              "RBC/PLT": "Electrical Impedance",
              HGB: "Colorimetric Method",
            },
            parameters: {
              WBC: ["WBC", "LYM#%", "MON#%", "NEU#%", "EOS#%", "BAS#%"],
              RBC: [
                "RBC",
                "HGB",
                "HCT",
                "MCV",
                "MCH",
                "MCHC",
                "RDW-CV",
                "RDW-SD",
              ],
              PLT: ["PLT", "MPV", "PDW", "PCT", "P-LCR"],
            },
            graphics: "3 Histograms (WBC/RBC/PLT) + 2D/3D Scattergrams",
            sampleModes: ["Whole blood", "Pre-diluted modes supported"],
            dataManagement:
              "Large internal memory for results, histograms, and scattergrams",
            display: "Large color touchscreen interface",
            connectivity: [
              "USB",
              "LAN (Ethernet)",
              "RS232",
              "LIS/HIS (HL7) compatible",
            ],
            qualityControl:
              "Multi-level QC, Levey-Jennings charts, Auto/Manual calibration",
            compliance: ["CE Mark", "ISO 9001", "ISO 13485"],
          },
        },
        {
          id: "ph-51ncc",
          name: "PH-51NCC (BH-5390) Advanced Automated Hematology Analyzer",
          model: "PH-51NCC / BH-5390",
          category: "5-diff",
          image:
            "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80",
          overview:
            "The PH-51NCC (BH-5390) is a sophisticated 5-part differential analyzer engineered for laboratories that prioritize high analytical precision and intelligent automation. Utilizing advanced laser flow cytometry and an optimized fluidics architecture, it delivers rapid, high-stability CBC + DIFF results. Its design balances a high-throughput workload with a compact, bench-top footprint, making it a reliable centerpiece for medium-to-high volume clinical settings.",
          features: [
            "Precision Cytometry: Employs Multi-angle Laser Scatter to ensure precise leukocyte classification.",
            "Intelligent Workflow: Features a high-capacity internal memory and a large color touchscreen with intuitive software.",
            "High-Volume Reliability: Designed for continuous routine operation with stable optical systems and robust fluidics.",
            "Total Connectivity: Full LIS/HIS integration via HL7 protocol across multiple interfaces (LAN, USB, RS232).",
            "Smart Maintenance: Equipped with an intelligent alarm diagnostic system and a front-access design.",
          ],
          reagentSystem: [
            "Economic Operation: Optimized fluidics lead to exceptionally low reagent consumption per test.",
            "Open System: Supports dedicated open-system reagents, providing procurement flexibility.",
          ],
          support: [
            "Elhoda Support: Professional installation, comprehensive user training, and nationwide technical service coverage.",
          ],
          specifications: {
            measurementPrinciples: {
              "WBC Differential": "Laser Flow Cytometry",
              "RBC/PLT": "Electrical Impedance",
              HGB: "Colorimetric Method",
            },
            parameters:
              "Complete CBC + 5-Part DIFF including advanced platelet indices",
            graphics:
              "3 Histograms (WBC/RBC/PLT) + Multi-angle Scattergrams for WBC differentiation",
            sampleHandling: "Supports Whole Blood and Pre-diluted modes",
            dataStorage:
              "High-capacity internal memory with full graphical records",
            display: "Large color touchscreen interface",
            connectivity: [
              "USB",
              "LAN (Ethernet)",
              "RS232",
              "LIS compatible (HL7 Protocol)",
            ],
            qualityControl:
              "Multi-level QC programs with Levey-Jennings charts; Auto/Manual calibration",
            hardwareDesign:
              "Compact benchtop analyzer with built-in or external printer support",
            compliance: ["CE Mark", "ISO 9001", "ISO 13485"],
          },
        },
      ],
    },
    {
      id: "6-diff",
      name: "3) 6-diff Hematology Analyzers",
      description:
        "Premium analyzers with advanced parameters and body fluid analysis",
      icon: Microscope,
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      instruments: [
        {
          id: "bh-6810",
          name: "BH-6180 Advanced Hematology Analyzer (6-Part Differential)",
          model: "BH-6180",
          category: "6-diff",
          image:
            "https://images.unsplash.com/photo-1559757175-80eb53394e0a?auto=format&fit=crop&w=800&q=80",
          overview:
            "The BH-6180 is a flagship-tier diagnostic platform designed for high-volume hospitals and reference laboratories. While it provides a 'True 5-Part Differential,' it is categorized as a 6-part capable system due to its ability to report IMG (#,%) (Immature Granulocytes) and RET (Reticulocytes), offering a much deeper clinical insight into bone marrow activity and infection markers than standard analyzers. It combines advanced laser flow cytometry with high-end visualization tools, including 3D stereograms, to provide superior diagnostic confidence.",
          features: [
            "Advanced Parameter Suite: Provides 37 reportable parameters including Reticulocytes (RET), Immature Platelet Fraction (IPF), and Nucleated Red Blood Cells (NRBC).",
            "Body Fluid Analysis: Includes a dedicated mode for testing Body Fluids (WBC-BF, RBC-BF, etc.), essential for specialized clinical diagnostics.",
            "3D Visualization: Utilizes 3D Stereograms alongside 2D scattergrams to visualize cell populations from multiple angles for better abnormality detection.",
            "Research Depth: Offers 50 research parameters, providing data on cell morphology and platelet clumps for complex clinical studies.",
            "High Throughput: Engineered for high-speed, continuous processing to handle heavy daily workloads.",
          ],
          reagentSystem: [
            "Optimized Consumables: Uses dedicated URIT hematology reagents with an open-system option.",
            "Continuous Monitoring: The system performs constant self-diagnostics and includes an intelligent alarm system.",
            "Comprehensive QC: Features multi-level QC programs, Levey-Jennings charts, and both automatic and manual calibration.",
          ],
          support: [
            "Elhoda Support: Professional installation, comprehensive user training, and nationwide technical service coverage.",
          ],
          specifications: {
            measurementPrinciples: {
              "WBC/DIFF/RET": "Laser Flow Cytometry",
              "RBC/PLT": "Electrical Impedance",
              HGB: "Colorimetric Method",
            },
            reportableParameters:
              "37 Total: Includes WBC Diff, NRBC, RET (HFR, MFR, LFR), IRF, IPF, RHE, and Immature Granulocytes (IMG)",
            researchParameters:
              "50 Total: Includes HPC, HFC, NLR, PLR, and specialized cell morphology indices",
            bodyFluidMode:
              "7 Reportable parameters (WBC-BF, RBC-BF, MN, PMN, etc.)",
            graphics:
              "3 Histograms + 5 Scattergrams + 3 specialized 3D Stereograms",
            dataStorage:
              "Ultra-high capacity memory for patient results, histograms, and scattergrams",
            connectivity:
              "Full LIS/HIS integration (HL7); LAN, USB, and RS232 interfaces",
            operation: "Large color touchscreen with an intuitive, modern UI",
            configuration: "Large bench-top or floor-standing configuration",
          },
        },
      ],
    },
  ];

  const renderInstrumentDetails = (instrument) => {
    if (!instrument) return null;

    const tabs = [
      { id: "overview", label: "Overview", icon: Info },
      { id: "features", label: "Key Features", icon: Zap },
      { id: "specs", label: "Technical Specs", icon: Settings },
      { id: "reagents", label: "Reagent System", icon: Droplets },
      { id: "support", label: "Support", icon: Headphones },
    ];

    const renderTabContent = () => {
      switch (activeTab) {
        case "overview":
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Overview
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {instrument.overview}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-red-50 p-4 rounded-xl">
                  <div className="text-red-600 font-bold text-lg">Category</div>
                  <div className="text-gray-900 font-medium">
                    {instrument.category.toUpperCase()} Analyzer
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="text-green-600 font-bold text-lg">Model</div>
                  <div className="text-gray-900 font-medium">
                    {instrument.model}
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="text-purple-600 font-bold text-lg">Type</div>
                  <div className="text-gray-900 font-medium">
                    {instrument.category === "3-diff"
                      ? "3-Part Differential"
                      : instrument.category === "5-diff"
                        ? "5-Part Differential"
                        : "6-Part Differential"}
                  </div>
                </div>
              </div>
            </div>
          );

        case "features":
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Key Features & Advanced Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {instrument.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-red-300 transition-colors"
                  >
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          );

        case "specs":
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technical Specifications
              </h3>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-6">
                <div className="space-y-6">
                  {Object.entries(instrument.specifications).map(
                    ([key, value]) => {
                      if (typeof value === "object" && !Array.isArray(value)) {
                        return (
                          <div
                            key={key}
                            className="border-b border-gray-200 pb-4 last:border-0"
                          >
                            <h4 className="font-semibold text-gray-900 mb-2 capitalize text-lg">
                              {key}
                            </h4>
                            <div className="space-y-2">
                              {Object.entries(value).map(
                                ([subKey, subValue]) => (
                                  <div
                                    key={subKey}
                                    className="flex justify-between py-2 hover:bg-gray-50 px-2 rounded"
                                  >
                                    <span className="text-gray-600 font-medium">
                                      {subKey}:
                                    </span>
                                    <span className="font-medium text-gray-900">
                                      {subValue}
                                    </span>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        );
                      } else if (Array.isArray(value)) {
                        return (
                          <div
                            key={key}
                            className="border-b border-gray-200 pb-4 last:border-0"
                          >
                            <h4 className="font-semibold text-gray-900 mb-2 capitalize text-lg">
                              {key}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {value.map((item, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:border-red-400 hover:bg-red-50 transition-colors"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={key}
                            className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-0 py-2 hover:bg-gray-50 px-2 rounded"
                          >
                            <span className="font-semibold text-gray-900 capitalize text-lg">
                              {key}:
                            </span>
                            <span className="text-gray-700 text-right font-medium">
                              {value}
                            </span>
                          </div>
                        );
                      }
                    },
                  )}
                </div>
              </div>
            </div>
          );

        case "reagents":
          return instrument.reagentSystem &&
            instrument.reagentSystem.length > 0 ? (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reagent System & Quality Management
              </h3>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-emerald-200 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {instrument.reagentSystem.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white/80 rounded-xl border border-emerald-100 hover:border-emerald-300 transition-colors"
                    >
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Droplets className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No Reagent Information Available
              </h3>
              <p className="text-gray-600">
                Reagent system details are not available for this instrument.
              </p>
            </div>
          );

        case "support":
          return instrument.support && instrument.support.length > 0 ? (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Service & Support
              </h3>
              <div className="bg-gradient-to-br from-red-50 to-red-50 rounded-xl border border-red-200 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {instrument.support.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white/80 rounded-xl border border-red-100 hover:border-red-300 transition-colors"
                    >
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Headphones className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  Compliance & Global Support
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 border border-gray-200">
                      <Users className="w-6 h-6 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Professional Training
                    </h4>
                    <p className="text-sm text-gray-600">
                      Comprehensive user training and certification
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 border border-gray-200">
                      <Wifi className="w-6 h-6 text-green-500" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      24/7 Technical Support
                    </h4>
                    <p className="text-sm text-gray-600">
                      Nationwide service coverage with rapid response
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 border border-gray-200">
                      <Shield className="w-6 h-6 text-purple-500" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Quality Certified
                    </h4>
                    <p className="text-sm text-gray-600">
                      CE Mark, ISO 9001, ISO 13485 compliant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No Support Information Available
              </h3>
              <p className="text-gray-600">
                Support details are not available for this instrument.
              </p>
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header with Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={instrument.image}
            alt={instrument.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                {instrument.model}
              </div>
              <div className="px-3 py-1 bg-red-600/80 backdrop-blur-sm rounded-full text-sm font-medium">
                {instrument.category} Analyzer
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {instrument.name}
            </h2>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap
                    ${
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 bg-red-50/50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">{renderTabContent()}</div>
      </div>
    );
  };

  const renderEmptyState = () => (
    <div className="flex flex-col items-center justify-center min-h-[500px] bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 text-center border border-gray-200">
      <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-100 rounded-full flex items-center justify-center mb-6">
        <Cpu className="w-12 h-12 text-red-600" />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Welcome to Hematology Instrumentation
      </h2>

      <p className="text-lg text-gray-600 max-w-md mb-8">
        Select an instrument from the sidebar to view detailed specifications,
        features, and technical data. Browse through our comprehensive range of
        hematology analyzers.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-lg w-full">
        <div className="flex items-center gap-3 mb-4">
          <Info className="w-5 h-5 text-red-600" />
          <h3 className="font-semibold text-gray-900">Browse by Category:</h3>
        </div>

        <ol className="space-y-4 text-left">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              1
            </div>
            <div>
              <div className="font-medium text-gray-900">
                3-Part Differential
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Basic CBC analyzers for routine testing
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              2
            </div>
            <div>
              <div className="font-medium text-gray-900">
                5-Part Differential
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Advanced analyzers with complete WBC differentiation
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              3
            </div>
            <div>
              <div className="font-medium text-gray-900">
                6-Part Differential
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Premium analyzers with extended parameters and body fluid
                analysis
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb/Path */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <button
              onClick={handleBackToHome}
              className="hover:text-[#E81729] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-gray-900">
              Hematology Instrumentation
            </span>
          </nav>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-gray-900 via-black to-red-900 rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                  <Cpu className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white">
                    Hematology Analyzers Catalog
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-white">HEMATOLOGY </span>
                  <span className="text-transparent bg-gradient-to-r from-white to-red-500 bg-clip-text">
                    INSTRUMENTATION
                  </span>
                </h1>

                <p className="text-gray-300 text-lg max-w-3xl mb-8">
                  Complete range of hematology analyzers from 3-part to 6-part
                  differential systems. Featuring advanced technologies for
                  accurate and efficient blood analysis in clinical
                  laboratories.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleBackToHome}
                    className="inline-flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
                  >
                    ← Back to IVD
                  </button>
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden inline-flex items-center gap-3 bg-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition"
                  >
                    <Menu className="w-5 h-5" />
                    Browse Analyzers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div
            className={`lg:w-1/3 ${isMobileMenuOpen ? "block" : "hidden lg:block"}`}
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Analyzer Categories
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                {instrumentCategories.map((category) => {
                  const isExpanded = expandedCategories.includes(category.id);
                  const isActiveCategory =
                    activeInstrument?.category === category.id;
                  return (
                    <div
                      key={category.id}
                      className={`rounded-xl transition-all duration-300 ${
                        isActiveCategory
                          ? "bg-gradient-to-r from-red-50 to-red-50 border-2 border-red-300 shadow-md"
                          : "hover:bg-gray-50 border border-gray-100 hover:border-gray-200"
                      }`}
                    >
                      {/* Category Header */}
                      <button
                        onClick={() => handleCategoryClick(category.id)}
                        className="w-full p-4"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.bgColor}`}
                          >
                            <category.icon
                              className={`w-6 h-6 ${isActiveCategory ? "text-red-700" : "text-gray-700"}`}
                            />
                          </div>
                          <div className="flex-1 min-w-0 text-left">
                            <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">
                              {category.name.includes(") ")
                                ? category.name.split(") ")[1]
                                : category.name}
                            </h3>
                            <p className="text-xs text-gray-600 line-clamp-2">
                              {category.description}
                            </p>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              isExpanded
                                ? "rotate-180 text-red-600"
                                : "text-gray-400"
                            }`}
                          />
                        </div>
                      </button>

                      {/* Instruments List */}
                      {isExpanded && (
                        <div className="px-4 pb-4 space-y-2">
                          {category.instruments.map((instrument) => {
                            const isActive =
                              activeInstrument?.id === instrument.id;
                            return (
                              <button
                                key={instrument.id}
                                onClick={() =>
                                  handleInstrumentClick(instrument)
                                }
                                className={`
                                  w-full text-left p-3 rounded-lg transition-colors flex items-center justify-between
                                  ${
                                    isActive
                                      ? "bg-red-100 border border-red-200 text-red-700"
                                      : "hover:bg-gray-100 border border-gray-100 text-gray-700"
                                  }
                                `}
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`w-2 h-2 rounded-full ${isActive ? "bg-red-500" : "bg-gray-300"}`}
                                  />
                                  <span
                                    className={`font-medium ${isActive ? "text-red-700" : "text-gray-700"}`}
                                  >
                                    {instrument.model}
                                  </span>
                                </div>
                                {isActive && (
                                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Clear Selection Button */}
              {activeInstrument && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={clearSelection}
                    className="w-full text-center p-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors text-base"
                  >
                    Clear Selection
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-2/3">
            {activeInstrument
              ? renderInstrumentDetails(activeInstrument)
              : renderEmptyState()}
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={handleScrollAction}
        className="fixed bottom-8 right-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 z-40"
        aria-label={isAtTop ? "Scroll down" : "Scroll to top"}
      >
        {isAtTop ? (
          <ArrowDown className="w-5 h-5 text-gray-700" />
        ) : (
          <ArrowUp className="w-5 h-5 text-gray-700" />
        )}
      </button>
    </section>
  );
};

export default HematologyInstrumentation;
