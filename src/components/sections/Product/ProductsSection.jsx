import React, { useState, useEffect } from "react";
import { useInView } from "../../../hooks/useInView";
import { mockProducts } from "../../../data/constants";
import {
  Package,
  Ruler,
  Scale,
  Palette,
  Droplets,
  X,
  Search,
  Filter,
  Layers,
  Thermometer,
  Stethoscope,
  Activity,
  Heart,
  Beaker,
  Info,
  ShoppingCart,
  Check,
  ChevronRight,
  ChevronLeft,
  ArrowDown,
  ArrowUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(new Set());
  const [isAtTop, setIsAtTop] = useState(true);
  const handleBackToProducts = () => {
    navigate("/products");
  };

  const handleScrollAction = () => {
    window.scrollTo({
      top: isAtTop ? document.documentElement.scrollHeight : 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Extract unique categories from mockProducts
  const productCategories = [
    {
      id: "all-products",
      name: "All Products",
      icon: Package,
      description: "Browse all medical and surgical products",
      color: "from-red-500 to-red-600", // Changed from blue/cyan to red
      bgColor: "bg-gradient-to-r from-red-50 to-red-50", // Changed from blue/cyan to red
    },
    ...Array.from(new Set(mockProducts[0].products.map((p) => p.category))).map(
      (category, index) => ({
        id: `category-${index}`,
        name: category,
        icon: category.includes("Surgical")
          ? Stethoscope
          : category.includes("Medical")
            ? Heart
            : category.includes("Diagnostic")
              ? Activity
              : category.includes("Consumable")
                ? Package
                : category.includes("Equipment")
                  ? Thermometer
                  : category.includes("Lab")
                    ? Beaker
                    : category.includes("Disposable")
                      ? Layers
                      : Package,
        description: `${category} products`,
        color:
          index % 3 === 0
            ? "from-emerald-500 to-teal-600"
            : index % 3 === 1
              ? "from-amber-500 to-orange-600"
              : "from-indigo-500 to-purple-600",
        bgColor:
          index % 3 === 0
            ? "bg-gradient-to-r from-emerald-50 to-teal-50"
            : index % 3 === 1
              ? "bg-gradient-to-r from-amber-50 to-orange-50"
              : "bg-gradient-to-r from-indigo-50 to-purple-50",
      }),
    ),
  ];

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    // Filter products based on search and category
    let filtered = mockProducts[0].products;

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.code?.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (activeCategory && activeCategory.id !== "all-products") {
      filtered = filtered.filter(
        (product) => product.category === activeCategory.name,
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, activeCategory]);

  const mobileAnimationClasses = "opacity-100 translate-y-0";
  const desktopAnimationClasses = inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  const animationClasses = isMobile
    ? mobileAnimationClasses
    : desktopAnimationClasses;

  const handleProductClick = (product) => {
    navigate(`/product/${product.title}`, { state: { product } });
  };

  const clearSelection = () => {
    setSelectedProducts(new Set());
  };

  const getCasesPerPallet = (product) => {
    if (product.cases_per_pallet) {
      return product.cases_per_pallet;
    }
    if (
      product.sizes &&
      product.sizes.length > 0 &&
      product.sizes[0].cases_per_pallet
    ) {
      return product.sizes[0].cases_per_pallet;
    }
    return null;
  };

  const getCaseQuantity = (product) => {
    if (product.case_quantity) {
      return product.case_quantity;
    }
    if (
      product.sizes &&
      product.sizes.length > 0 &&
      product.sizes[0].case_quantity
    ) {
      return product.sizes[0].case_quantity;
    }
    return null;
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const clearFilters = () => {
    setActiveCategory(null);
    setSearchQuery("");
    clearSelection();
  };

  const renderSidebar = () => (
    <div className="bg-gradient-to-b from-white to-gray-50 rounded-2xl border border-gray-200 shadow-lg p-6 sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
          <p className="text-gray-600 text-sm">Filter by category</p>
        </div>
        <Filter className="w-6 h-6 text-gray-400" />
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E81729] focus:border-transparent"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Selected Products Count */}
      {selectedProducts.size > 0 && (
        <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-emerald-700">
              Selected Items:
            </span>
            <button
              onClick={clearSelection}
              className="text-sm bg-gradient-to-r from-red-50 to-red-100 text-red-600 hover:text-red-700 px-3 py-1 rounded-lg"
            >
              Clear All
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-600" />
            <span className="font-bold text-gray-900">
              {selectedProducts.size} products selected
            </span>
          </div>
        </div>
      )}

      {/* Active Filters */}
      {(activeCategory || searchQuery) && (
        <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-red-50 rounded-2xl border border-red-200 shadow-sm">
          {" "}
          {/* Changed from blue/cyan to red */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-red-700">
              {" "}
              {/* Changed from blue to red */}
              Active Filters:
            </span>
            <button
              onClick={clearFilters}
              className="text-sm bg-gradient-to-r from-red-50 to-red-100 text-red-600 hover:text-red-700 px-3 py-1 rounded-lg"
            >
              Clear All
            </button>
          </div>
          <div className="space-y-2">
            {activeCategory && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-900">
                  Category: {activeCategory.name}
                </span>
              </div>
            )}
            {searchQuery && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-900">
                  Search: "{searchQuery}"
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Category List */}
      <div className="space-y-3">
        {productCategories.map((category) => {
          const isActive = activeCategory?.id === category.id;
          return (
            <div
              key={category.id}
              className={`rounded-xl transition-all duration-300 ${
                isActive
                  ? `border-2 ${category.bgColor.replace("bg-gradient-to-r", "border")} ${category.bgColor}`
                  : "border border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <button
                onClick={() => handleCategoryClick(category)}
                className="w-full text-left p-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      category.bgColor
                    } shadow-md`}
                  >
                    <category.icon
                      className={`w-6 h-6 ${
                        isActive
                          ? "text-white"
                          : `text-gradient ${category.color.replace("from-", "text-").replace(" to-", "-")}`
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                  {isActive && (
                    <div className="w-2 h-2 bg-[#E81729] rounded-full animate-pulse" />
                  )}
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Product Count */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Showing</span>
          <span className="font-bold text-gray-900">
            {filteredProducts.length} of {mockProducts[0].products.length}{" "}
            products
          </span>
        </div>
      </div>
    </div>
  );

  const renderMobileMenu = () => (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden">
      <div
        className="absolute inset-0"
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div className="absolute left-0 right-0 bottom-0 top-20 bg-gradient-to-b from-white to-gray-50 rounded-t-3xl overflow-hidden shadow-2xl">
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
              <p className="text-gray-600 text-sm">
                Filter and search products
              </p>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-sm hover:shadow-md"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E81729] focus:border-transparent"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            {productCategories.map((category) => {
              const isActive = activeCategory?.id === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => {
                    handleCategoryClick(category);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left p-4 rounded-2xl transition-all ${
                    isActive
                      ? `border-2 ${category.bgColor.replace("bg-gradient-to-r", "border")} ${category.bgColor}`
                      : "border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        category.bgColor
                      } shadow-md`}
                    >
                      <category.icon
                        className={`w-6 h-6 ${
                          isActive
                            ? "text-white"
                            : `text-gradient ${category.color.replace("from-", "text-").replace(" to-", "-")}`
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 mb-1">
                        {category.name}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {category.description}
                      </p>
                    </div>
                    {isActive && (
                      <div className="w-2 h-2 bg-[#E81729] rounded-full animate-pulse" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center p-4 bg-gradient-to-r from-gray-900 to-black text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              Apply Filters
            </button>
            <button
              onClick={clearFilters}
              className="w-full text-center p-4 border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProductList = () => {
    if (filteredProducts.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 text-center border-2 border-dashed border-gray-200">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No Products Found
          </h3>
          <p className="text-gray-600 max-w-md">
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={clearFilters}
            className="mt-6 bg-gradient-to-r from-[#E81729] to-red-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition"
          >
            Clear All Filters
          </button>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {filteredProducts.map((product, index) => {
          const casesPerPallet = getCasesPerPallet(product);
          const caseQuantity = getCaseQuantity(product);
          const isSelected = selectedProducts.has(product.id || index);

          return (
            <div
              key={index}
              onClick={() => handleProductClick(product)}
              className={`group bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden ${
                isSelected
                  ? "border-2 border-[#E81729] ring-2 ring-[#E81729]/20"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Product Image - Responsive */}
                <div
                  className={`relative ${
                    isMobile
                      ? "h-48"
                      : isTablet
                        ? "md:w-2/5 h-56"
                        : "md:w-1/4 h-64"
                  } bg-gradient-to-br from-gray-50 to-white overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                    <img
                      src={`/${product.image}`}
                      alt={product.title}
                      className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 ${
                        isMobile ? "max-w-[80%]" : "max-w-[90%]"
                      }`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/400x300/222/FFF?text=${product.title.replace(/_/g, "+").substring(0, 20)}`;
                      }}
                    />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[#E81729] px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                      <Package className="w-3 h-3" />
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Details */}
                <div
                  className={`flex-1 p-4 md:p-6 ${
                    isTablet ? "md:w-3/5" : "md:w-3/4"
                  }`}
                >
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                          {product.title.replace(/_/g, " ")}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 md:gap-4">
                          <div className="bg-gray-50 rounded-lg px-3 py-1.5">
                            <p className="text-xs text-gray-500">Code</p>
                            <p className="text-sm font-semibold text-gray-900 font-mono">
                              {product.code ||
                                product.sizes?.[0]?.code ||
                                "N/A"}
                            </p>
                          </div>

                          {caseQuantity && (
                            <div className="bg-gray-50 rounded-lg px-3 py-1.5">
                              <p className="text-xs text-gray-500">Case Qty</p>
                              <p className="text-sm font-semibold text-gray-900">
                                {caseQuantity}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* View Details Button */}
                      <button className="mt-3 md:mt-0 md:ml-4 bg-gradient-to-r from-[#E81729] to-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold hover:shadow-md transition whitespace-nowrap">
                        View Details →
                      </button>
                    </div>

                    {/* Details Grid */}
                    <div className="flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                        {/* Cases per Pallet */}
                        {casesPerPallet && (
                          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-3 md:p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-gray-700 mb-1">
                                  Cases/Pallet
                                </p>
                                <p className="text-lg md:text-xl font-bold text-[#E81729]">
                                  {casesPerPallet.toLocaleString()}
                                </p>
                              </div>
                              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
                                <Palette className="w-4 h-4 md:w-5 md:h-5 text-[#E81729]" />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Sterile Status */}
                        {product.sterile && (
                          <div
                            className={`rounded-xl p-3 md:p-4 ${
                              product.sterile === "STERILE EO"
                                ? "bg-green-50 border border-green-100"
                                : "bg-gray-50"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-gray-500 mb-1">
                                  Sterile
                                </p>
                                <p
                                  className={`text-sm font-semibold ${
                                    product.sterile === "STERILE EO"
                                      ? "text-green-700"
                                      : "text-gray-700"
                                  }`}
                                >
                                  {product.sterile === "STERILE EO"
                                    ? "Yes (EO)"
                                    : "No"}
                                </p>
                              </div>
                              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
                                <Droplets
                                  className={`w-4 h-4 md:w-5 md:h-5 ${
                                    product.sterile === "STERILE EO"
                                      ? "text-green-600"
                                      : "text-gray-400"
                                  }`}
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Variants */}
                        {product.sizes && product.sizes.length > 0 && (
                          <div className="bg-red-50 rounded-xl p-3 md:p-4">
                            {" "}
                            {/* Changed from blue-50 to red-50 */}
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-gray-500 mb-1">
                                  Sizes
                                </p>
                                <p className="text-sm font-semibold text-red-700">
                                  {" "}
                                  {/* Changed from blue-700 to red-700 */}
                                  {product.sizes.length} variants
                                </p>
                              </div>
                              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
                                <Ruler className="w-4 h-4 md:w-5 md:h-5 text-red-600" />{" "}
                                {/* Changed from blue-600 to red-600 */}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Dimensions (if available) */}
                        {product.dimensions && (
                          <div className="bg-purple-50 rounded-xl p-3 md:p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-gray-500 mb-1">
                                  Dimensions
                                </p>
                                <p className="text-sm font-semibold text-purple-700">
                                  {product.dimensions}
                                </p>
                              </div>
                              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
                                <Scale className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Description (for mobile) */}
                        {isMobile && product.description && (
                          <div className="col-span-full bg-gray-50 rounded-xl p-3">
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {product.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Additional Info (Desktop) */}
                    {!isMobile && product.description && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-start gap-2">
                          <Info className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section
      id="products"
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50/30 overflow-hidden py-12 sm:py-16 md:py-20" // Changed from blue-50 to red-50
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />{" "}
        {/* Changed from blue-500 to red-500 */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />{" "}
        {/* Changed from cyan-500 to red-500 */}
      </div>

      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-1000 ${animationClasses}`}
      >
        <div className="mt-20 mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="text-gray-600">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-semibold text-gray-900">ELHODA Products</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-semibold text-gray-900">
              Medical Consumables
            </span>
          </nav>
        </div>
        {/* Hero Header */}
        <div className="mb-8 md:mb-12">
          <div className="bg-gradient-to-br from-gray-900 via-black to-red-900 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12">
            {" "}
            {/* Changed to red-900 */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                  <Package className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white">
                    Product Catalog
                  </span>
                </div>

                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-white">MEDICAL & </span>
                  <span className="text-transparent bg-gradient-to-r from-white to-red-500 bg-clip-text">
                    {" "}
                    {/* Changed from blue-500 to red-500 */}
                    SURGICAL SUPPLIES
                  </span>
                </h1>

                <p className="text-gray-300 text-lg max-w-3xl mb-8">
                  Browse our comprehensive range of high-quality medical and
                  surgical products. Each product is carefully selected and
                  manufactured to meet the highest standards.
                </p>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  <button
                    onClick={handleBackToProducts}
                    className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-white to-gray-100 text-gray-900 px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-bold hover:shadow-lg transition text-sm md:text-base shadow-md"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back to Products
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header Bar */}
        {isMobile && (
          <div className="flex items-center justify-between mb-6 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-gray-200">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 bg-gradient-to-r from-[#E81729] to-red-600 text-white rounded-xl shadow-md hover:shadow-lg transition"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Filter className="w-5 h-5" />
                )}
              </button>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {activeCategory ? activeCategory.name : "All Products"}
                </h2>
                <p className="text-sm text-gray-600">
                  {filteredProducts.length} products
                  {selectedProducts.size > 0 &&
                    ` • ${selectedProducts.size} selected`}
                </p>
              </div>
            </div>
            {selectedProducts.size > 0 && (
              <button
                onClick={clearSelection}
                className="text-sm bg-gradient-to-r from-red-50 to-red-100 text-red-600 hover:text-red-700 px-3 py-1.5 rounded-lg"
              >
                Clear
              </button>
            )}
          </div>
        )}

        {/* Mobile Menu */}
        {isMobile && isMobileMenuOpen && renderMobileMenu()}

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Sidebar for Desktop */}
          {!isMobile && <div className="lg:w-1/3">{renderSidebar()}</div>}

          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Title */}
            <div className="mb-8">
              <p className="text-[#E81729] font-bold uppercase mb-2 text-sm sm:text-base tracking-wider">
                {activeCategory
                  ? activeCategory.name.toUpperCase()
                  : "ALL PRODUCTS"}
              </p>
              <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-black">
                {activeCategory
                  ? `${activeCategory.name.replace(/_/g, " ")}`
                  : "FEATURED PRODUCTS"}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 gap-2">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of{" "}
                  {mockProducts[0].products.length} products
                  {selectedProducts.size > 0 && (
                    <span className="ml-2 text-emerald-600 font-medium">
                      • {selectedProducts.size} selected
                    </span>
                  )}
                </p>
                {selectedProducts.size > 0 && (
                  <button
                    onClick={clearSelection}
                    className="text-sm bg-gradient-to-r from-red-50 to-red-100 text-red-600 hover:text-red-700 px-4 py-2 rounded-lg"
                  >
                    Clear Selection
                  </button>
                )}
              </div>
            </div>

            {/* Product List */}
            <div className="relative">{renderProductList()}</div>
          </div>
        </div>
      </div>
      {/* Enhanced Scroll Button */}
      {(!isMobile || !isMobileMenuOpen) && (
        <button
          onClick={handleScrollAction}
          className={`fixed right-8 z-[60] p-4 bg-white/95 backdrop-blur-sm text-brand-black border border-gray-200/60 rounded-2xl shadow-2xl hover:bg-brand-red hover:text-white transition-all duration-300 group hover:shadow-brand-red/30 hover:scale-110 ${
            isMobile ? "bottom-24" : "bottom-8"
          }`}
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
      )}
      {/* Enhanced Mobile Bottom Navigation */}
      {isMobile && !isMobileMenuOpen && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-white/95 border-t border-gray-300 p-4 z-30 lg:hidden shadow-2xl backdrop-blur-lg">
          <div className="flex items-center justify-between px-4">
            {/* Clear button on left only when filters exist */}
            {activeCategory || searchQuery || selectedProducts.size > 0 ? (
              <button
                onClick={clearFilters}
                className="flex flex-col items-center gap-1 text-red-600 hover:text-red-700 transition" // Changed from blue to red
              >
                <div className="p-2 bg-gradient-to-r from-red-50 to-red-50 rounded-xl">
                  {" "}
                  {/* Changed from blue/cyan to red */}
                  <X className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium">Clear</span>
              </button>
            ) : (
              <div className="w-12"></div>
            )}

            {/* Filters button always in center */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex flex-col items-center gap-1 text-[#E81729] hover:text-red-700 transition"
            >
              <div className="p-2 bg-gradient-to-r from-red-50 to-red-100 rounded-xl">
                <Filter className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">Filters</span>
            </button>

            {/* Add to Cart button when products are selected */}
            {selectedProducts.size > 0 ? (
              <button
                onClick={() =>
                  console.log(
                    "Selected products:",
                    Array.from(selectedProducts),
                  )
                }
                className="flex flex-col items-center gap-1 text-emerald-600 hover:text-emerald-700 transition"
              >
                <div className="p-2 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium">
                  Add ({selectedProducts.size})
                </span>
              </button>
            ) : (
              <div className="w-12"></div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
