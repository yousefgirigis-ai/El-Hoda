import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUp,
  ArrowDown,
  ChevronRight,
  X,
  Menu,
  ChevronDown,
  ChevronLeft,
  Info,
  FileText,
  Table,
  Home,
  Grid,
  Package,
} from "lucide-react";
import { rapidTestCategories } from "../../../data/constants";

const RapidTestProductsTable = () => {
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [viewMode, setViewMode] = useState("table"); // "table" or "cards"

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      // On mobile, default to cards view
      if (mobile && viewMode === "table") {
        setViewMode("cards");
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [viewMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToHome = () => {
    navigate("/");
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

  const handleCategoryClick = (category) => {
    if (activeCategory?.id === category.id) {
      toggleCategory(category.id);
    } else {
      setActiveCategory(category);
      setExpandedCategories([category.id]);
    }
  };

  const handleViewTable = () => {
    setIsMobileMenuOpen(false);
  };

  const renderTableAsCards = (tableData, categoryName) => {
    const { rows } = tableData;

    return (
      <div className="space-y-4">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Product Name */}
            {(row.product || row.abbrev) && (
              <div className="mb-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {row.product || row.abbrev}
                  </h4>
                  {categoryName.includes("Fertility") && row.specimen && (
                    <span className="text-xs bg-red-100 text-red-800 px-3 py-1 rounded-full">
                      {" "}
                      {/* Changed from blue to red */}
                      {row.specimen}
                    </span>
                  )}
                </div>
                {row.abbrev && row.abbrev !== row.product && (
                  <p className="text-sm text-gray-600 mt-1">{row.abbrev}</p>
                )}
              </div>
            )}

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Panel Configuration */}
              {row.panel && (
                <div>
                  <p className="text-xs text-gray-500 uppercase">Panel</p>
                  <p className="font-medium text-gray-900">{row.panel}</p>
                </div>
              )}

              {/* Analyte List */}
              {row.analytes && (
                <div className="col-span-2">
                  <p className="text-xs text-gray-500 uppercase">
                    Analyte List
                  </p>
                  <p className="font-medium text-gray-900">{row.analytes}</p>
                </div>
              )}

              {/* Specimen Type */}
              {row.specimen && !categoryName.includes("Fertility") && (
                <div>
                  <p className="text-xs text-gray-500 uppercase">Specimen</p>
                  <p className="font-medium text-gray-900">{row.specimen}</p>
                </div>
              )}

              {/* Cut-Off / Detection */}
              {(row.cutoff || row.detection) && (
                <div>
                  <p className="text-xs text-gray-500 uppercase">
                    {categoryName.includes("Cardiac") ? "Cut-Off" : "Detection"}
                  </p>
                  <p className="font-medium text-gray-900">
                    {row.cutoff || row.detection}
                  </p>
                </div>
              )}

              {/* Kit Format */}
              {row.format && (
                <div>
                  <p className="text-xs text-gray-500 uppercase">Format</p>
                  <p className="font-medium text-gray-900">{row.format}</p>
                </div>
              )}

              {/* Spec */}
              {row.spec && (
                <div>
                  <p className="text-xs text-gray-500 uppercase">Spec</p>
                  <p className="font-medium text-gray-900">{row.spec}</p>
                </div>
              )}
            </div>

            {/* Special Notes */}
            {categoryName.includes("Drugs of Abuse") && row.panel && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Panel: </span>
                  {row.panel}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderTable = (category) => {
    if (!category || !category.tableData) return null;

    const { headers, rows } = category.tableData;
    const categoryImage =
      category.image ||
      rows.find((row) => !row.isHeader && row.image)?.image ||
      "";

    if (isMobile && viewMode === "cards") {
      return (
        <div className="space-y-6">
          {/* Mobile Back Button */}
          <button
            onClick={() => setActiveCategory(null)}
            className="flex items-center gap-2 text-red-600 font-medium p-3 bg-red-50 rounded-lg w-full" // Changed from blue to red
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Categories
          </button>

          {/* Category Header */}
          <div className={`rounded-xl p-4 mb-6 ${category.bgColor}`}>
            {categoryImage && (
              <div className="mb-4">
                <img
                  src={encodeURI(categoryImage)}
                  alt={`${category.name} category`}
                  className="w-full h-40 object-contain bg-white/70 rounded-xl border border-gray-200 cursor-zoom-in"
                  loading="lazy"
                  onClick={() =>
                    setImagePreview({
                      src: encodeURI(categoryImage),
                      alt: `${category.name} category`,
                    })
                  }
                />
              </div>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-white/50">
                <category.icon className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {category.name}
                </h2>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-gray-500" />
                <span className="text-xs text-gray-600">
                  {rows.length} products
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Grid className="w-4 h-4 text-gray-500" />
                <span className="text-xs text-gray-600">Cards View</span>
              </div>
            </div>
          </div>
          {/* Cards Content */}
          {renderTableAsCards(category.tableData, category.name)}
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* Mobile Back Button */}
        {isMobile && (
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className="flex items-center gap-2 text-red-600 font-medium p-3 bg-red-50 rounded-lg w-full" // Changed from blue to red
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Categories
            </button>

            {/* View Mode Toggle for Mobile */}
            <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-2">
              <span className="text-sm font-medium text-gray-700">
                View Mode:
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("cards")}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    viewMode === "cards"
                      ? "bg-red-600 text-white" // Changed from blue to red
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Cards
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    viewMode === "table"
                      ? "bg-red-600 text-white" // Changed from blue to red
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Table
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Category Header */}
        <div className={`rounded-xl p-4 md:p-6 mb-6 ${category.bgColor}`}>
          {categoryImage && (
            <div className="mb-4">
              <img
                src={encodeURI(categoryImage)}
                alt={`${category.name} category`}
                className="w-full h-44 md:h-52 object-contain bg-white/70 rounded-xl border border-gray-200 cursor-zoom-in"
                loading="lazy"
                onClick={() =>
                  setImagePreview({
                    src: encodeURI(categoryImage),
                    alt: `${category.name} category`,
                  })
                }
              />
            </div>
          )}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 md:p-3 rounded-lg bg-white/50">
              <category.icon className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {category.name}
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                {category.description}
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
              <span className="text-xs md:text-sm text-gray-600">
                {rows.length} products
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Table className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
              <span className="text-xs md:text-sm text-gray-600">
                Table View
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Table Warning */}
        {isMobile && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex items-center gap-2 text-yellow-800 text-sm">
              <Info className="w-4 h-4 flex-shrink-0" />
              <span>Swipe horizontally to view full table</span>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {headers.map((header, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider border-r border-gray-300 last:border-r-0 whitespace-nowrap"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={`hover:bg-gray-50 transition-colors ${rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                    >
                      {headers.map((header, colIndex) => {
                        let cellContent = "";

                        // Map header to row property
                        switch (header) {
                          case "Abbr.":
                            cellContent = row.abbrev || "";
                            break;
                          case "Product":
                            // For allergy category, always show product name
                            if (category.id === "allergy") {
                              cellContent = row.product || "";
                            } else {
                              cellContent = row.abbrev || row.product || "";
                            }
                            break;
                          case "Panel Configuration":
                            cellContent = row.panel || "";
                            break;
                          case "Analyte List":
                            cellContent = row.analytes || "";
                            break;
                          case "Specimen Type":
                          case "Specimen type":
                            cellContent = row.specimen || "";
                            break;
                          case "Cut-Off Concentration":
                          case "Cut-Off / Detection":
                          case "Cut-Off/ Detection":
                            cellContent = row.cutoff || row.detection || "";
                            break;
                          case "Kit Format":
                            cellContent = row.format || "";
                            break;
                          case "Spec.":
                          case "Sepc.":
                            cellContent = row.spec || "";
                            break;
                          default:
                            cellContent =
                              row[
                                header.toLowerCase().replace(/[^a-z]/g, "")
                              ] || "";
                        }

                        return (
                          <td
                            key={colIndex}
                            className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200 last:border-r-0 whitespace-nowrap"
                          >
                            {cellContent}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleBackToProducts = () => {
    navigate("/products");
  };
  const renderEmptyState = () => (
    <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 md:p-8 text-center">
      <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-red-100 to-red-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
        {" "}
        {/* Changed from blue/cyan to red */}
        <Table className="w-8 h-8 md:w-12 md:h-12 text-red-600" />{" "}
        {/* Changed from blue-500 to red-600 */}
      </div>

      <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
        No Category Selected
      </h2>

      <p className="text-gray-600 max-w-md mb-6 md:mb-8 text-sm md:text-lg">
        Please select a category from the sidebar to view the product table.
        Browse through our comprehensive range of rapid test products organized
        in tabular format.
      </p>

      {isMobile && (
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="w-full max-w-sm bg-gradient-to-r from-red-600 to-red-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition" // Changed from blue/cyan to red
        >
          <div className="flex items-center justify-center gap-3">
            <Menu className="w-5 h-5" />
            Browse All Categories
          </div>
        </button>
      )}

      {!isMobile && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-lg w-full">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-5 h-5 text-red-600" />{" "}
            {/* Changed from blue-500 to red-600 */}
            <h3 className="font-semibold text-gray-900">
              How to browse products:
            </h3>
          </div>

          <ol className="space-y-3 text-left">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-sm font-bold">
                {" "}
                {/* Changed from blue to red */}1
              </div>
              <span className="text-gray-700">
                Click on any category in the sidebar to expand it
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-sm font-bold">
                {" "}
                {/* Changed from blue to red */}2
              </div>
              <span className="text-gray-700">
                View the product table with detailed specifications
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-sm font-bold">
                {" "}
                {/* Changed from blue to red */}3
              </div>
              <span className="text-gray-700">
                Scroll through the table to see all products
              </span>
            </li>
          </ol>
        </div>
      )}
    </div>
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50/30 overflow-hidden">
      {" "}
      {/* Changed from blue-50 to red-50 */}
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />{" "}
        {/* Changed from blue-500 to red-500 */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />{" "}
        {/* Changed from cyan-500 to red-500 */}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-8">
        {/* Mobile Header Bar */}
        {isMobile && (
          <div className="flex items-center justify-between mb-6 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
            <button
              onClick={handleBackToHome}
              className="flex items-center gap-2 text-[#E81729] font-medium"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </button>
            <div className="flex items-center gap-3">
              {activeCategory && (
                <span className="text-sm font-medium text-gray-700 truncate max-w-[150px]">
                  {activeCategory.name.split(". ")[1] || activeCategory.name}
                </span>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 bg-gradient-to-r from-red-600 to-red-600 text-white rounded-lg" // Changed from blue/cyan to red
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        )}

        {/* Breadcrumb for Desktop */}
        {!isMobile && (
          <div className="mt-10 mb-6 md:mb-8">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <button
                onClick={handleBackToHome}
                className="hover:text-[#E81729] transition-colors"
              >
                Home
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="font-medium text-gray-900">
                IVD & Rapid Test Kits
              </span>
              {activeCategory && (
                <>
                  <ChevronRight className="w-4 h-4" />
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="hover:text-red-600 transition-colors" // Changed from blue to red
                  >
                    {activeCategory.name.split(". ")[1] || activeCategory.name}
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
        <div className="mt-20 mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="text-gray-600">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-semibold text-gray-900">ELHODA Products</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-semibold text-gray-900">Rapid Test</span>
          </nav>
        </div>
        {/* Hero */}
        <div className="mb-8 md:mb-12">
          <div className="bg-gradient-to-br from-gray-900 via-black to-red-900 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12">
            {" "}
            {/* Changed to red-900 */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
                  <FileText className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  <span className="text-xs md:text-sm font-semibold text-white">
                    Tabular Product Catalog
                  </span>
                </div>

                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                  <span className="text-white">IVD & </span>
                  <span className="text-transparent bg-gradient-to-r from-white to-red-500 bg-clip-text">
                    {" "}
                    {/* Changed from blue-500 to red-500 */}
                    RAPID TEST KITS
                  </span>
                </h1>

                <p className="text-gray-300 text-sm md:text-lg max-w-3xl mb-6 md:mb-8">
                  Complete product catalog organized in tabular format for easy
                  reference. Browse through drugs of abuse tests, infectious
                  disease tests, fertility tests, cardiac markers, tumor
                  markers, and more.
                </p>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  <button
                    onClick={handleBackToProducts}
                    className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-white to-gray-100 text-gray-900 px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-bold hover:shadow-lg transition text-sm md:text-base shadow-md"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back to Products
                  </button>
                  {!isMobile && (
                    <button
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="lg:hidden inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition shadow-md"
                    >
                      <Menu className="w-5 h-5" />
                      Browse Categories
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay - STAYS OPEN when selecting categories */}
        {isMobile && isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
            <div
              className="absolute inset-0"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute left-0 right-0 bottom-0 top-20 bg-white rounded-t-3xl overflow-hidden">
              <div className="p-6 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Categories
                  </h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Current Selection Info */}
                {activeCategory && (
                  <div className="mb-6 p-3 bg-red-50 rounded-lg">
                    {" "}
                    {/* Changed from blue-50 to red-50 */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">
                          Selected Category:
                        </p>
                        <p className="font-medium text-gray-900">
                          {activeCategory.name.split(". ")[1] ||
                            activeCategory.name}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setActiveCategory(null);
                          setExpandedCategories([]);
                        }}
                        className="text-sm text-red-600 hover:text-red-700"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {rapidTestCategories.map((category) => {
                    const isExpanded = expandedCategories.includes(category.id);
                    const isActive = activeCategory?.id === category.id;

                    return (
                      <div
                        key={category.id}
                        className={`rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-red-50 to-red-50 border-2 border-red-300 shadow-md" // Changed from blue/cyan to red
                            : "hover:bg-gray-50 border border-gray-100 hover:border-gray-200"
                        }`}
                      >
                        <button
                          onClick={() => handleCategoryClick(category)}
                          className="w-full text-left p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center ${category.bgColor}`}
                            >
                              <category.icon
                                className={`w-5 h-5 ${
                                  isActive ? "text-red-700" : "text-gray-700" // Changed from blue to red
                                }`}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">
                                {category.name.split(". ")[1] || category.name}
                              </h3>
                              <p className="text-xs text-gray-600 line-clamp-2">
                                {category.description}
                              </p>
                            </div>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform flex-shrink-0 ${
                                isExpanded ? "rotate-180" : ""
                              } ${
                                isActive ? "text-red-600" : "text-gray-400" // Changed from blue to red
                              }`}
                            />
                          </div>
                        </button>

                        {/* Expanded content */}
                        {isExpanded && isActive && (
                          <div className="px-4 pb-4">
                            <div className="mt-3 text-sm text-gray-700">
                              <div className="flex items-center gap-2 mb-2">
                                <Table className="w-4 h-4 text-red-600" />{" "}
                                {/* Changed from blue-500 to red-600 */}
                                <span className="font-medium">
                                  {category.tableData.rows.length} products
                                </span>
                              </div>
                              <div className="space-y-2 mt-3">
                                <button
                                  onClick={handleViewTable}
                                  className="w-full bg-gradient-to-r from-red-600 to-red-600 text-white py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition" // Changed from blue/cyan to red
                                >
                                  View Table
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-center p-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition"
                  >
                    Close Menu
                  </button>
                  {activeCategory && (
                    <button
                      onClick={() => {
                        setActiveCategory(null);
                        setExpandedCategories([]);
                      }}
                      className="w-full text-center p-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition"
                    >
                      Clear Selection
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Sidebar for Desktop */}
          <div className="hidden lg:block lg:w-1/3">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
              </div>

              {/* Current Selection Info */}
              {activeCategory && (
                <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-red-50 rounded-xl border border-red-200">
                  {" "}
                  {/* Changed from blue/cyan to red */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-red-700">
                      {" "}
                      {/* Changed from blue to red */}
                      Current Selection:
                    </span>
                    <button
                      onClick={() => {
                        setActiveCategory(null);
                        setExpandedCategories([]);
                      }}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Clear
                    </button>
                  </div>
                  <p className="text-gray-900 font-medium">
                    {activeCategory.name.split(". ")[1] || activeCategory.name}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                {rapidTestCategories.map((category) => {
                  const isExpanded = expandedCategories.includes(category.id);
                  const isActive = activeCategory?.id === category.id;

                  return (
                    <div
                      key={category.id}
                      className={`rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-red-50 to-red-50 border-2 border-red-300 shadow-md" // Changed from blue/cyan to red
                          : "hover:bg-gray-50 border border-gray-100 hover:border-gray-200"
                      }`}
                    >
                      <button
                        onClick={() => handleCategoryClick(category)}
                        className="w-full text-left p-4"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.bgColor}`}
                          >
                            <category.icon
                              className={`w-6 h-6 ${
                                isActive ? "text-red-700" : "text-gray-700" // Changed from blue to red
                              }`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">
                              {category.name.split(". ")[1] || category.name}
                            </h3>
                            <p className="text-xs text-gray-600 line-clamp-2">
                              {category.description}
                            </p>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform flex-shrink-0 ${
                              isExpanded ? "rotate-180" : ""
                            } ${isActive ? "text-red-600" : "text-gray-400"}`} // Changed from blue to red
                          />
                        </div>
                      </button>

                      {/* Expanded content */}
                      {isExpanded && isActive && (
                        <div className="px-4 pb-4">
                          <div className="mt-3 text-sm text-gray-700">
                            <div className="flex items-center gap-2 mb-2">
                              <Table className="w-4 h-4 text-red-600" />{" "}
                              {/* Changed from blue-500 to red-600 */}
                              <span className="font-medium">
                                {category.tableData.rows.length} products
                              </span>
                            </div>
                            <p className="text-xs text-gray-600">
                              Scroll down to view the complete table
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Clear Selection Button */}
              {activeCategory && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setActiveCategory(null);
                      setExpandedCategories([]);
                    }}
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
            {activeCategory ? renderTable(activeCategory) : renderEmptyState()}
          </div>
        </div>
      </div>
      {imagePreview && (
        <div
          className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setImagePreview(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setImagePreview(null)}
            className="absolute top-6 right-6 p-2 bg-white/90 rounded-xl shadow-lg hover:bg-white transition"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5 text-gray-800" />
          </button>
          <img
            src={imagePreview.src}
            alt={imagePreview.alt}
            className="max-h-[85vh] max-w-[90vw] object-contain bg-white rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      {/* Scroll Button - Adjusted for mobile bottom navigation */}
      {(!isMobile || !isMobileMenuOpen) && (
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={handleScrollAction}
            className={`fixed ${
              isMobile ? "bottom-20" : "bottom-8"
            } right-8 z-40 p-4 bg-white/95 backdrop-blur-sm text-brand-black border border-gray-200/60 rounded-2xl shadow-2xl hover:bg-brand-red hover:text-white transition-all duration-300 group hover:shadow-brand-red/30 hover:scale-110`}
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
      )}
      {/* Mobile Bottom Navigation */}
      {isMobile && !isMobileMenuOpen && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-30 lg:hidden">
          <div className="flex items-center justify-around">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex flex-col items-center gap-1 text-red-600" // Changed from blue to red
            >
              <Menu className="w-5 h-5" />
              <span className="text-xs font-medium">
                {activeCategory ? "Change" : "Categories"}
              </span>
            </button>
            <button
              onClick={handleBackToHome}
              className="flex flex-col items-center gap-1 text-gray-600"
            >
              <Home className="w-5 h-5" />
              <span className="text-xs font-medium">Home</span>
            </button>
            {activeCategory && (
              <button
                onClick={() => {
                  setActiveCategory(null);
                  setExpandedCategories([]);
                }}
                className="flex flex-col items-center gap-1 text-gray-600"
              >
                <X className="w-5 h-5" />
                <span className="text-xs font-medium">Clear</span>
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default RapidTestProductsTable;
