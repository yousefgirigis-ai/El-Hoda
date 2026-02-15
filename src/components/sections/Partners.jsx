/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useInView } from "../../hooks/useInView";
import { useNavigate } from "react-router-dom";
import { ArrowUp, ArrowDown, Download } from "lucide-react";

import LaboratoryDiagnostics from "./partners/LaboratoryDiagnostics";
import ClinicalChemistryHematology from "./partners/ClinicalChemistryHematology";
import InfectionControlResearch from "./partners/InfectionControlResearch";

const Partners = () => {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const [setAnimated] = React.useState(false);
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeTab, setActiveTab] = useState("laboratory");

  useEffect(() => {
    if (inView) setAnimated(true);
  }, [inView]);

  const handleBackToAbout = () => {
    navigate("/", { state: { scrollTo: "about" } });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollAction = () => {
    if (isAtTop) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const tabs = [
    { id: "laboratory", label: "Laboratory & Diagnostics" },
    { id: "clinical", label: "Clinical Chemistry & Hematology" },
    { id: "infection", label: "Infection Control & Research" },
  ];

  return (
    <section ref={ref} className="relative py-2 md:py-2 bg-white">
      {/* Hero Header Section */}
      <div className="relative mb-16">
        <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-[#E81729]/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-gradient-to-tr from-rose-100/20 to-transparent rounded-full blur-3xl animate-pulse-slower" />

        <div className="relative overflow-hidden rounded-3xl border border-gray-200/60 shadow-2xl shadow-red-500/10">
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-[#E81729] to-transparent z-20" />

          {/* Header Content */}
          <div className="relative bg-gradient-to-r from-black via-[#1a0b0b] to-[#E81729] py-12 px-6 md:py-16 md:px-10 z-30">
            <div className="max-w-7xl mx-auto">
              {/* Title Section */}
              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="text-white">OUR</span>{" "}
                  <span className="text-transparent bg-gradient-to-r from-white via-red-200 to-[#E81729] bg-clip-text">
                    PARTNERS
                  </span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-white to-[#E81729] mx-auto rounded-full mb-6" />
                <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  We work closely with trusted partners who share our commitment
                  to quality, innovation, and excellence. Through these
                  strategic collaborations, we are able to expand our
                  capabilities, deliver reliable solutions, and create added
                  value for our customers.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Back Button */}
                <button
                  onClick={handleBackToAbout}
                  className="group relative inline-flex items-center justify-center gap-3 bg-white text-[#E81729] px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:text-white w-full sm:w-auto text-center overflow-hidden"
                >
                  <span className="relative z-10 group-hover:-translate-x-2 transition-transform duration-300">
                    ←
                  </span>
                  <span className="relative z-10">Back to About</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A2647] to-[#1E3A8A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>

                {/* Download Button */}
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/uc?export=download&id=1gyUoa4E5rFeiuPnv1Bm-kW3imSWvz-cp",
                      "_blank",
                    )
                  }
                  className="group relative inline-flex items-center justify-center gap-3 bg-white text-[#E81729] px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:text-white w-full sm:w-auto text-center overflow-hidden"
                >
                  <span className="relative z-10">Download Portfolio</span>
                  <Download
                    size={20}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-y-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A2647] to-[#1E3A8A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
        {/* Floating gradient orbs */}
        <div className="absolute top-32 left-4 w-96 h-96 bg-gradient-to-br from-red-200/20 via-pink-100/10 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-32 right-4 w-80 h-80 bg-gradient-to-tr from-rose-100/15 via-transparent to-blue-100/10 rounded-full blur-3xl animate-float-slower" />

        {/* Tabs Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#E81729] to-red-600 text-white shadow-xl scale-105"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:shadow-lg"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-20">
          {activeTab === "laboratory" && <LaboratoryDiagnostics />}
          {activeTab === "clinical" && <ClinicalChemistryHematology />}
          {activeTab === "infection" && <InfectionControlResearch />}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-center gap-8">
        <button
          onClick={handleScrollAction}
          className="fixed bottom-8 right-8 z-50 p-4 bg-white text-black border border-gray-200 rounded-2xl shadow-2xl hover:bg-[#E81729] hover:text-white transition-all duration-300 group"
          aria-label={isAtTop ? "Scroll down" : "Scroll to top"}
        >
          {isAtTop ? (
            <ArrowDown
              size={24}
              className="group-hover:translate-y-1 transition-transform"
            />
          ) : (
            <ArrowUp
              size={24}
              className="group-hover:-translate-y-1 transition-transform"
            />
          )}
        </button>
      </div>
    </section>
  );
};

export default Partners;
