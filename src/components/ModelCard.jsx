import React, { useState } from "react";
import { Beaker, Package, Droplets, Eye, EyeOff } from "lucide-react";
import { ReagentsTable } from "./tableRenderers/index.jsx";
import HighlightText from "./HighlightText.jsx";

const ModelCard = ({ model, partner, searchTerm }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("specs");

  const hasSpecs = model.specs && Object.keys(model.specs).length > 0;
  const hasPackaging = model.packaging && model.packaging.length > 0;
  const hasReagents = model.reagents && model.reagents.length > 0;
  const hasItems = model.items && model.items.length > 0;

  // Count total data sections available
  const dataSectionsCount = [
    hasSpecs,
    hasPackaging,
    hasReagents,
    hasItems,
  ].filter(Boolean).length;

  // Prevent scroll when toggling details
  const handleToggleDetails = () => {
    const scrollY = window.scrollY;
    setShowDetails(!showDetails);
    setTimeout(() => {
      window.scrollTo(0, scrollY);
    }, 0);
  };
  console.log("model", model.img);
  return (
    <div className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
      {/* Model Header - Always Visible */}
      <div className="p-6">
        <div className="flex items-start gap-6">
          {/* Product Image */}
          <div className="relative flex-shrink-0">
            <img
              src={`/${model.img}`}
              alt={model.model}
              className="w-32 h-24 object-contain bg-white rounded-lg p-3 shadow border hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.src = `https://placehold.co/200x150/EEE/555?text=${encodeURIComponent(
                  model.model || "Product"
                )}`;
              }}
            />
            {model.catalog && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-mono px-2 py-1 rounded-md shadow-sm">
                <HighlightText text={model.catalog} searchTerm={searchTerm} />
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-gray-900 truncate">
                  <HighlightText text={model.model} searchTerm={searchTerm} />
                </h3>
                {model.catalog && model.model !== model.catalog && (
                  <p className="text-sm text-gray-600 font-mono mt-1">
                    Catalog:{" "}
                    <HighlightText
                      text={model.catalog}
                      searchTerm={searchTerm}
                    />
                  </p>
                )}
              </div>

              {/* Toggle Button */}
              {dataSectionsCount > 0 && (
                <button
                  onClick={handleToggleDetails}
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex-shrink-0"
                >
                  {showDetails ? (
                    <>
                      <EyeOff size={16} />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <Eye size={16} />
                      Show Details
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Quick Stats */}
            {dataSectionsCount > 0 && (
              <div className="flex flex-wrap gap-4 mt-4">
                {hasSpecs && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
                    <Beaker size={14} />
                    <span>Specifications</span>
                  </div>
                )}
                {hasPackaging && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-green-50 px-3 py-1 rounded-full">
                    <Package size={14} />
                    <span>Packaging</span>
                  </div>
                )}
                {(hasReagents || hasItems) && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-purple-50 px-3 py-1 rounded-full">
                    <Droplets size={14} />
                    <span>Reagents</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Expandable Details Section */}
      {showDetails && dataSectionsCount > 0 && (
        <div className="border-t border-gray-100 bg-gray-50/50">
          {/* Tab Navigation - Only show if multiple sections */}
          {dataSectionsCount > 1 && (
            <div className="flex border-b border-gray-200 bg-white">
              {hasSpecs && (
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
                    activeTab === "specs"
                      ? "border-red-500 text-red-600 bg-red-50/50"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Beaker size={16} />
                  Specifications
                </button>
              )}
              {hasPackaging && (
                <button
                  onClick={() => setActiveTab("packaging")}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
                    activeTab === "packaging"
                      ? "border-red-500 text-red-600 bg-red-50/50"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Package size={16} />
                  Packaging
                </button>
              )}
              {(hasReagents || hasItems) && (
                <button
                  onClick={() => setActiveTab("reagents")}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
                    activeTab === "reagents"
                      ? "border-red-500 text-red-600 bg-red-50/50"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Droplets size={16} />
                  Reagents
                </button>
              )}
            </div>
          )}

          {/* Content Area */}
          <div className="p-6">
            {/* If only one section, show it directly without tabs */}
            {dataSectionsCount === 1 ? (
              <>
                {hasSpecs && (
                  <SpecsContent specs={model.specs} searchTerm={searchTerm} />
                )}
                {hasPackaging && (
                  <PackagingContent
                    packaging={model.packaging}
                    searchTerm={searchTerm}
                  />
                )}
                {(hasReagents || hasItems) && (
                  <ReagentsContent
                    reagents={hasReagents ? model.reagents : model.items}
                    searchTerm={searchTerm}
                  />
                )}
              </>
            ) : (
              /* Multiple sections - show active tab */
              <>
                {activeTab === "specs" && hasSpecs && (
                  <SpecsContent specs={model.specs} searchTerm={searchTerm} />
                )}
                {activeTab === "packaging" && hasPackaging && (
                  <PackagingContent
                    packaging={model.packaging}
                    searchTerm={searchTerm}
                  />
                )}
                {activeTab === "reagents" && (hasReagents || hasItems) && (
                  <ReagentsContent
                    reagents={hasReagents ? model.reagents : model.items}
                    searchTerm={searchTerm}
                  />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Sub-components for better organization
const SpecsContent = ({ specs, searchTerm }) => (
  <div>
    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
      <Beaker size={18} />
      Technical Specifications
    </h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.entries(specs).map(([key, val], i) => (
        <div
          key={i}
          className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm"
        >
          <div className="text-sm font-semibold text-gray-900 capitalize mb-2">
            <HighlightText
              text={key.replace(/([A-Z])/g, " $1").trim()}
              searchTerm={searchTerm}
            />
          </div>
          <div className="text-sm text-gray-700">
            <HighlightText
              text={Array.isArray(val) ? val.join(", ") : String(val)}
              searchTerm={searchTerm}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const PackagingContent = ({ packaging, searchTerm }) => (
  <div>
    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
      <Package size={18} />
      Packaging Information
    </h4>
    <ReagentsTable reagents={packaging} searchTerm={searchTerm} />
  </div>
);

const ReagentsContent = ({ reagents, searchTerm }) => (
  <div>
    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
      <Droplets size={18} />
      Compatible Reagents
    </h4>
    <ReagentsTable reagents={reagents} searchTerm={searchTerm} />
  </div>
);

export default ModelCard;
