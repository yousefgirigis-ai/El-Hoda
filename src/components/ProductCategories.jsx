/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from "react";
import { Search, Filter,  X } from "lucide-react";
import ProductCategory from "./ProductCategory";

const ProductCategories = ({
  products,
  openCategory,
  setOpenCategory,
  partner,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("list");
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) {
      return products;
    }
    const searchLower = searchTerm.toLowerCase().trim();
    return products.filter((category) => {
      if (
        category.category.toLowerCase().includes(searchLower) ||
        (category.description &&
          category.description.toLowerCase().includes(searchLower))
      ) {
        return true;
      }

      // Search in models
      if (category.models) {
        const matchingModels = category.models.filter((model) => {
          // Search in basic model info
          if (
            (model.model && model.model.toLowerCase().includes(searchLower)) ||
            (model.catalog &&
              model.catalog.toLowerCase().includes(searchLower)) ||
            (model.name && model.name.toLowerCase().includes(searchLower))
          ) {
            return true;
          }

          // Search in specifications
          if (model.specs) {
            const specsMatch = Object.entries(model.specs).some(
              ([key, value]) => {
                const keyMatch = key.toLowerCase().includes(searchLower);
                const valueMatch = String(value)
                  .toLowerCase()
                  .includes(searchLower);
                return keyMatch || valueMatch;
              }
            );
            if (specsMatch) return true;
          }

          // Search in packaging
          if (model.packaging) {
            const packagingMatch = model.packaging.some((item) =>
              Object.values(item).some((value) =>
                String(value).toLowerCase().includes(searchLower)
              )
            );
            if (packagingMatch) return true;
          }

          // Search in reagents
          if (model.reagents) {
            const reagentsMatch = model.reagents.some((reagent) =>
              Object.values(reagent).some((value) =>
                String(value).toLowerCase().includes(searchLower)
              )
            );
            if (reagentsMatch) return true;
          }

          // Search in items
          if (model.items) {
            const itemsMatch = model.items.some((item) =>
              Object.values(item).some((value) =>
                String(value).toLowerCase().includes(searchLower)
              )
            );
            if (itemsMatch) return true;
          }

          return false;
        });

        return matchingModels.length > 0;
      }

      return false;
    });
  }, [searchTerm, products]);

  // Count total matching products across all categories
  const totalMatchingProducts = useMemo(() => {
    return filteredCategories.reduce((total, category) => {
      return total + (category.models?.length || 0);
    }, 0);
  }, [filteredCategories]);

  const clearSearch = () => {
    setSearchTerm("");
  };

  // Prevent page scroll when opening categories
  const handleCategoryToggle = (index) => {
    // Store current scroll position
    const scrollY = window.scrollY;

    setOpenCategory(openCategory === index ? null : index);

    // Restore scroll position after state update
    setTimeout(() => {
      window.scrollTo(0, scrollY);
    }, 0);
  };

  return (
    <div className="relative z-10 mb-12">
      {/* Header with Search and Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Product Line
          </h2>
          <p className="text-gray-600">
            Explore {products.length} product categories from {partner.name}
          </p>
        </div>

        {/* Search and View Controls */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Enhanced Search Bar */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search products, specifications, reagents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 w-full lg:w-80 transition-all duration-200"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Search Results Info */}
      {searchTerm && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-1">
                Search Results
              </h3>
              <p className="text-blue-700">
                Found{" "}
                <span className="font-bold">{filteredCategories.length}</span>{" "}
                categories and{" "}
                <span className="font-bold">{totalMatchingProducts}</span>{" "}
                products matching "
                <span className="font-semibold bg-blue-100 px-1 rounded">
                  {searchTerm}
                </span>
                "
              </p>
            </div>
            <button
              onClick={clearSearch}
              className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 text-sm font-medium bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-all"
            >
              <X size={16} />
              Clear search
            </button>
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="space-y-6">
        {filteredCategories.map((category, idx) => (
          <ProductCategory
            key={idx}
            category={category}
            isOpen={openCategory === idx}
            onToggle={() => handleCategoryToggle(idx)}
            partner={partner}
            viewMode={viewMode}
            searchTerm={searchTerm}
          />
        ))}
      </div>

      {/* Enhanced Empty State */}
      {filteredCategories.length === 0 && searchTerm && (
        <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter size={32} className="text-gray-400" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-3">
            No products found
          </h3>
          <p className="text-gray-500 max-w-md mx-auto mb-6">
            We couldn't find any products matching "
            <span className="font-semibold text-gray-700">{searchTerm}</span>"
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={clearSearch}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
            >
              Clear Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategories;
