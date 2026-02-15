import React from "react";
import { TestTube, ChevronDown, ChevronUp } from "lucide-react";
import { ReagentsTable } from ".";

const UniversalReagents = ({ universalReagents, openUniversalBrand, setOpenUniversalBrand }) => {
  return (
    <div className="relative z-10 mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Universal Reagents</h2>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
        <p className="text-blue-800 leading-relaxed">
          {universalReagents.description}
        </p>
        {universalReagents.compatibilityNote && (
          <div className="mt-3 p-3 bg-blue-100 rounded-lg">
            <p className="text-blue-700 text-sm">
              <strong>Note:</strong> {universalReagents.compatibilityNote}
            </p>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {universalReagents.brands?.map((brand, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-2xl bg-white shadow-md"
          >
            {/* Brand Header */}
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left"
              onClick={() =>
                setOpenUniversalBrand(openUniversalBrand === idx ? null : idx)
              }
            >
              <div className="flex items-center gap-3">
                <TestTube className="text-blue-600" />
                <div>
                  <span className="text-xl font-bold text-gray-900 block">
                    {brand.brand}
                  </span>
                  <span className="text-sm text-gray-600">
                    Compatible with: {brand.models}
                  </span>
                </div>
              </div>

              {openUniversalBrand === idx ? (
                <ChevronUp size={22} className="text-blue-600" />
              ) : (
                <ChevronDown size={22} className="text-gray-500" />
              )}
            </button>

            {/* Brand Content */}
            {openUniversalBrand === idx && (
              <div className="px-6 pb-6 animate-fadeIn">
                <ReagentsTable reagents={brand.reagents} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversalReagents;