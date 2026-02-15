import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getCategoryIcon } from "../utils/iconUtils";
import CategoryContent from "./CategoryContent";
import HighlightText from "./HighlightText";

const ProductCategory = ({
  category,
  isOpen,
  onToggle,
  partner,
  viewMode,
  searchTerm,
}) => {
  const productCount = category.models?.length || 0;

  // Prevent default behavior that might cause scrolling
  const handleToggle = (e) => {
    e.preventDefault();
    onToggle();
  };

  return (
    <div className="border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
      {/* Category Header */}
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors rounded-2xl"
        onClick={handleToggle}
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-red-50 rounded-xl">
            {getCategoryIcon(category.category)}
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <HighlightText text={category.category} searchTerm={searchTerm} />
              {productCount > 0 && (
                <span className="bg-red-100 text-red-700 text-sm font-medium px-2 py-1 rounded-full">
                  {productCount}
                </span>
              )}
            </h3>
            {category.description && (
              <p className="text-gray-600 text-sm mt-1 line-clamp-1">
                <HighlightText
                  text={category.description}
                  searchTerm={searchTerm}
                />
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isOpen && productCount > 0 && (
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              View {productCount} product{productCount !== 1 ? "s" : ""}
            </span>
          )}
          {isOpen ? (
            <ChevronUp size={22} className="text-red-600" />
          ) : (
            <ChevronDown size={22} className="text-gray-500" />
          )}
        </div>
      </button>

      {/* Category Content */}
      {isOpen && (
        <div className="px-6 pb-6 border-t border-gray-100">
          {/* Category description */}
          {category.description && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm whitespace-pre-line">
                <HighlightText
                  text={category.description}
                  searchTerm={searchTerm}
                />
              </p>
            </div>
          )}

          <CategoryContent
            category={category}
            partner={partner}
            searchTerm={searchTerm}
          />
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
