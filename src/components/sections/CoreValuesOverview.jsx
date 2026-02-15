import React, { useState } from "react";

const CoreValues1 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const values = [
    {
      tabTitle: "Integrity",
      title: "Integrity & Transparency",
      quote:
        "We conduct all business operations, from manufacturing to distribution, with unwavering honesty and ethical clarity.",
      description:
        "Transparency is paramount in our pricing, quality assurance, and compliance reporting, cultivating enduring trust with all stakeholders.",
      points: [
        "Ethical business conduct",
        "Transparent pricing",
        "Quality assurance clarity",
        "Regulatory compliance",
      ],
      bgImage: "/_DSC8612.jpg",
    },
    {
      tabTitle: "Innovation",
      title: "Excellence & Innovation",
      quote:
        "We are driven by a commitment to operational excellence in every facet of our business.",
      description:
        "Through continuous investment in R & D and advanced technology localization, we deliver cutting-edge, high-performing solutions that consistently set market standards.",
      points: [
        "Operational excellence",
        "Continuous R & D investment",
        "Advanced technology localization",
        "Market-leading solutions",
      ],
      bgImage: "/_DSC8579.jpg",
    },
    {
      tabTitle: "Respect",
      title: "Respect, Unity, & Equality",
      quote:
        "Our ethos is built on the foundational principles of profound respect and equality.",
      description:
        "We believe advancing healthcare hinges on the strength of every relationship—fostering a unified environment where professionalism and mutual respect drive every interaction.",
      points: [
        "Professional respect",
        "Equality in partnerships",
        "Unified work culture",
        "Mutual trust",
      ],
      bgImage: "/respect.jpg",
    },
    {
      tabTitle: "Reliability",
      title: "Reliability & Partnership",
      quote:
        "We prioritize the cultivation of strong, long-term strategic relationships with both our global suppliers and regional clients.",
      description:
        "Our reliability is ensured through a robust, integrated supply chain, making us a dependable partner in critical healthcare environments.",
      points: [
        "Long-term partnerships",
        "Global supplier relations",
        "Integrated supply chain",
        "Dependable delivery",
      ],
      bgImage: "/factory12.jpg",
    },
  ];

  const activeValue = values[activeTab];

  return (
    <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 bg-[#E1E8F0]">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
          <span className="text-gray-900">EL HODA </span>
          <span className="bg-gradient-to-r from-[#E81729] to-[#FF4D5A] bg-clip-text text-transparent">
            CORE VALUES
          </span>
        </h2>

        <p className="text-gray-700 max-w-3xl text-lg leading-relaxed font-medium">
          The foundation of El Hoda&apos;s success is anchored in a set of Core
          Values that define our ethos, guide our operations, and reflect our
          commitment to the global healthcare community.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-0 border-b border-gray-300 bg-white rounded-t-xl">
        {values.map((val, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
              activeTab === idx
                ? "text-black"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {val.tabTitle}
            {activeTab === idx && (
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#E81729] rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative overflow-hidden rounded-b-xl min-h-[450px] transition-all duration-500">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url(${activeValue.bgImage})`,
          }}
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />

        {/* Content */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-16 items-center h-full">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-white/20 text-white backdrop-blur-sm">
              Foundation & Ethos
            </div>
            <h3 className="text-2xl md:text-3xl font-bold leading-[1.15] text-white">
              "{activeValue.quote} {activeValue.description}"
            </h3>

            <div className="flex items-center gap-5 pt-2">
              <div>
                <p className="font-extrabold text-lg tracking-tight text-white">
                  El Hoda Group
                </p>
                <p className="text-sm font-medium text-white/80">
                  Commitment to Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues1;
