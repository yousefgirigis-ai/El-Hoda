import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp, ArrowDown, ChevronRight, Sparkles } from "lucide-react";

import { partners } from "../../../data/constants";

const ClinicalChemistryHematology = () => {
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = React.useState(true);
  const [hoveredCard, setHoveredCard] = React.useState(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToPartners = () => {
    navigate("/#partners");
  };

  const handleScrollAction = () => {
    window.scrollTo({
      top: isAtTop ? document.documentElement.scrollHeight : 0,
      behavior: "smooth",
    });
  };

  // Filter clinical chemistry & hematology partners
  const clinicalPartners = partners.filter((partner) =>
    ["NeoMedica", "Dymind", "Drawray", "URIT"].includes(partner.name),
  );
  // Map EXACT requested content
  const mappedPartners = clinicalPartners.map((partner) => {
    let title = "";
    let description = "";

    switch (partner.name) {
      case "NeoMedica":
        title = "Leader in IVD Analytical Systems";
        description =
          "Distributing innovative, user-friendly analyzers to enhance precision and procedural efficiency in the modern clinical field.";
        break;

      case "Dymind":
        title = "Innovation-Driven Hematology Specialist";
        description =
          "A top-ranked global enterprise delivering cutting-edge blood analysis and AI-integrated hematology technology to clinical laboratories.";
        break;

      case "Drawray":
        title = "Expert in Integrated IVD Platforms";
        description =
          "Utilizing core CLIA and FIA technologies to power advanced diagnostic systems like the iSTAR 500 Immunoassay Analyzer.";
        break;

      case "URIT":
        title = "Partner in Diagnostic Manufacturing";
        description =
          "Strengthening regional healthcare through the localized assembly and production of high-standard medical and diagnostic solutions.";
        break;

      default:
        break;
    }

    return {
      name: partner.name,
      title,
      description,
      img: partner.img,
      slug: partner.slug,
    };
  });

  // Hematology Analyzers Data
  const hematologyAnalyzers = [
    {
      category: "3-DIFF HEMATOLOGY ANALYZERS",
      models: [
        { name: "PHOENIX NCC-3300" },
        { name: "PHOENIX NCC-2310" },
        { name: "PHOENIX NCC-30 VET" },
      ],
    },
    {
      category: "5-DIFF HEMATOLOGY ANALYZERS",
      models: [], // You can add specific models here if needed
    },
    {
      category: "REAGENTS, CALIBRATORS AND CONTROLS",
      models: [], // You can add specific products here if needed
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb/Path */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <button
              onClick={() => navigate("/")}
              className="hover:text-[#E81729] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <button
              onClick={handleBackToPartners}
              className="hover:text-[#E81729] transition-colors"
            >
              Partners
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-gray-900">
              Clinical Chemistry & Hematology
            </span>
          </nav>
        </div>

        {/* Hero */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 rounded-3xl shadow-2xl p-10 lg:p-16">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white">
                    Clinical Diagnostics Excellence Partners
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">CLINICAL CHEMISTRY & </span>
                  <span className="text-transparent bg-gradient-to-r from-white to-blue-500 bg-clip-text">
                    HEMATOLOGY
                  </span>
                </h1>

                <p className="text-gray-300 text-lg max-w-3xl mb-10">
                  Specialists in analytical systems, hematology technology, and
                  integrated diagnostic platforms
                </p>

                <button
                  onClick={handleBackToPartners}
                  className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
                >
                  ← Back to All Partners
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-4">
                {mappedPartners.map((p, i) => (
                  <div
                    key={i}
                    className="bg-white/10 border border-white/10 rounded-xl p-4 flex items-center justify-center"
                  >
                    {/* Display partner logo image with white background */}
                    <div className="w-16 h-16 relative flex items-center justify-center bg-white rounded-lg p-2">
                      <img
                        src={`/${p.img}`}
                        alt={p.name}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `<div class="text-gray-900 text-sm font-medium">${p.name}</div>`;
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partner Cards - 2 per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mappedPartners.map((partner, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-white rounded-2xl border p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                hoveredCard === index
                  ? "border-blue-500/40 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              <div className="flex justify-between mb-6">
                <div className="flex gap-4">
                  {/* Partner logo with white background */}
                  <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center p-2 shadow-sm">
                    <div className="w-12 h-12 relative flex items-center justify-center">
                      <img
                        src={`/${partner.img}`}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {partner.name}
                      </h3>
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-br ${partner.color}`}
                      />
                    </div>
                    <p className="text-sm text-gray-500">{partner.category}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {partner.expertise}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {partner.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hematology Analyzers Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Hematology Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cutting-edge hematology analyzers and reagents for precise blood
              analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hematologyAnalyzers.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold">
                      {category.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.models.length > 0 ? (
                    category.models.map((model, modelIndex) => (
                      <div
                        key={modelIndex}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-colors"
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {model.name}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            Hematology Analyzer
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-500">
                        Contact for product details
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Interested in Hematology Solutions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get detailed specifications, pricing, and technical support for
                our complete range of hematology analyzers and reagents.
              </p>
              <button className="inline-flex items-center gap-2 bg-[#E81729] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#d01526] transition-colors">
                Request Quote
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={handleScrollAction}
        className="fixed bottom-8 right-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 z-50"
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

export default ClinicalChemistryHematology;
