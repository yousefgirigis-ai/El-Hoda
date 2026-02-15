/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useInView } from "../../hooks/useInView";
import { useNavigate } from "react-router-dom";
import { ArrowUp, ArrowDown, Download, ChevronRight } from "lucide-react";

import CorporateHistory from "./CorporateHistoryOverview";
import CorporateIdentity from "./CorporateIdentity";
import HeadquartersOperations from "./HeadquartersOperations";
import GovernmentPartnerships from "./GovernmentPartnerships";
import CorporateCitizenship from "./CorporateCitizenship";
import ProductsServices from "./ProductsServices";
import ValueProposition from "./ValueProposition";

const AboutOverview = () => {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const [setAnimated] = React.useState(false);
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = useState(true);

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

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Main Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-white to-rose-50">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.15]" />

        {/* Animated Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-brand-red/10 via-pink-100/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tr from-rose-100/20 via-transparent to-blue-100/10 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-red/5 via-transparent to-transparent" />

        {/* Subtle Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 py-2 md:py-2">
        {/* Hero Header Section */}
        <div className="relative mb-16 px-4">
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-brand-red/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-gradient-to-tr from-rose-100/20 to-transparent rounded-full blur-3xl animate-pulse-slower" />

          <div className="relative overflow-hidden rounded-3xl border border-gray-200/60 shadow-2xl shadow-brand-red/10">
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-brand-red to-transparent z-20" />

            {/* Header Content */}
            <div className="relative bg-gradient-to-r from-brand-black via-[#1a0b0b] to-brand-red py-12 px-6 md:py-16 md:px-10 z-30">
              <div className="max-w-7xl mx-auto">
                {/* Title Section */}
                <div className="text-center mb-10 mt-20">
                  <div className="mt-10 mb-6 flex items-center text-sm text-white font-medium">
                    <span>Home</span>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span>Services</span>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="whitespace-nowrap">
                      Company Overview
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    <span className="text-white">COMPANY</span>{" "}
                    <span className="text-transparent bg-gradient-to-r from-white via-red-200 to-brand-red bg-clip-text">
                      OVERVIEW
                    </span>
                  </h1>
                  <div className="w-32 h-1 bg-gradient-to-r from-white to-brand-red mx-auto rounded-full mb-6" />
                  <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Comprehensive overview of EL HODA's strategic positioning,
                    manufacturing capabilities, and commitment to healthcare
                    excellence across the Middle East and Africa
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  {/* Back Button */}
                  <button
                    onClick={handleBackToAbout}
                    className="group relative inline-flex items-center justify-center gap-3 bg-white text-brand-red px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:text-white w-full sm:w-auto text-center overflow-hidden"
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
                    className="group relative inline-flex items-center justify-center gap-3 bg-white text-brand-red px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:text-white w-full sm:w-auto text-center overflow-hidden"
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
          {/* Content Gradient Orbs */}
          <div className="absolute top-32 left-4 w-96 h-96 bg-gradient-to-br from-brand-red/10 via-pink-100/5 to-transparent rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-32 right-4 w-80 h-80 bg-gradient-to-tr from-rose-100/10 via-transparent to-blue-100/5 rounded-full blur-3xl animate-float-slower" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-100/5 via-transparent to-purple-100/5 rounded-full blur-3xl animate-float-medium" />

          {/* ================= Corporate History & Key Milestones ================= */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-white/60 shadow-xl p-6 md:p-8 mb-16">
            <CorporateHistory />
          </div>

          {/* Spacing between components */}
          <div className="my-16 md:my-20">
            {/* ================= CORPORATE IDENTITY ================= */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-white/60 shadow-xl p-6 md:p-8">
              <CorporateIdentity />
            </div>
          </div>

          {/* Spacing between components */}
          <div className="my-16 md:my-20">
            {/* ================= HEADQUARTERS & OPERATIONS ================= */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-white/60 shadow-xl p-6 md:p-8">
              <HeadquartersOperations />
            </div>
          </div>

          {/* Spacing between components */}
          <div className="my-16 md:my-20">
            {/* ================= GOVERNMENT PARTNERSHIPS ================= */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-white/60 shadow-xl p-6 md:p-8">
              <GovernmentPartnerships />
            </div>
          </div>

          {/* Spacing between components */}
          <div className="my-16 md:my-20">
            {/* ======= Corporate Citizenship & External Validation ======= */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-white/60 shadow-xl p-6 md:p-8">
              <CorporateCitizenship />
            </div>
          </div>

          {/* Spacing between components */}
          <div className="my-16 md:my-20">
            {/* =================================== SECTION : Products and Services ==================================== */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-white/60 shadow-xl p-6 md:p-8">
              <ProductsServices />
            </div>
          </div>

          {/* Spacing between components */}
          <div className="my-16 md:my-20">
            {/* ================= EL HODA VALUE PROPOSITION ================= */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-white/60 shadow-xl p-6 md:p-8">
              <ValueProposition />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center justify-center gap-8 mt-20 pb-16">
          <button
            onClick={handleScrollAction}
            className="fixed bottom-8 right-8 z-50 p-4 bg-white/95 backdrop-blur-sm text-brand-black border border-gray-200/60 rounded-2xl shadow-2xl hover:bg-brand-red hover:text-white transition-all duration-300 group hover:shadow-brand-red/30 hover:scale-110"
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
      </div>
    </section>
  );
};

export default AboutOverview;
