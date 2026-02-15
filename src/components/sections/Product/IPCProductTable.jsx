import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUp,
  ArrowDown,
  ChevronRight,
  X,
  Menu,
  ChevronDown,
  Info,
  Table,
  Package,
  List,
  Shield,
  Tag,
  TestTube,
  Layers,
  Target,
  Zap,
  Monitor,
  Smartphone,
  Droplets,
  Printer,
  Waves,
  Droplet,
  Thermometer,
  FlaskConical,
  TrendingUp,
  Cpu,
  ChevronLeft,
  Home,
  Folder,
  Grid,
} from "lucide-react";
import { ipcCategories } from "../../../data/constants";

const IPCProductsTable = () => {
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [expandedSubcategories, setExpandedSubcategories] = useState([]);
  const [, setExpandedTables] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [viewMode, setViewMode] = useState("table");
  const [expandedSpecRows, setExpandedSpecRows] = useState({});

  // Color schemes for different categories - UPDATED IDs
  const colorSchemes = {
    "parametric-assurance-systems": {
      // Updated ID
      gradient: "from-red-400 to-red-600",
      light: "bg-red-100",
      border: "border-red-300",
      text: "text-red-800",
      icon: "text-red-700",
    },
    "steam-biological-indicators": {
      // Updated ID
      gradient: "from-green-500 to-emerald-600",
      light: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      icon: "text-green-600",
    },
    "steam-sterilization": {
      gradient: "from-red-500 to-red-600",
      light: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
      icon: "text-red-600",
    },
    "cleaning-documentation": {
      gradient: "from-purple-500 to-violet-600",
      light: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
      icon: "text-purple-600",
    },
    "instrument-reprocessing": {
      gradient: "from-amber-500 to-orange-600",
      light: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-700",
      icon: "text-amber-600",
    },
    default: {
      gradient: "from-gray-500 to-gray-600",
      light: "bg-gray-50",
      border: "border-gray-200",
      text: "text-gray-700",
      icon: "text-gray-600",
    },
  };

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
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

  const handleBackToProducts = () => {
    navigate("/products");
  };

  const handleScrollAction = () => {
    window.scrollTo({
      top: isAtTop ? document.documentElement.scrollHeight : 0,
      behavior: "smooth",
    });
  };

  const preservePageScroll = (updateFn) => {
    const pageTop = window.scrollY;
    updateFn();
    requestAnimationFrame(() => {
      window.scrollTo({ top: pageTop, behavior: "auto" });
    });
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => {
      const isOpen = prev.includes(categoryId);
      if (isOpen) {
        setExpandedSubcategories((prevSub) =>
          prevSub.filter((key) => !key.startsWith(`${categoryId}::`)),
        );
        return prev.filter((id) => id !== categoryId);
      }
      return [...prev, categoryId];
    });
    if (!expandedCategories.includes(categoryId)) {
      setActiveSubcategory(null);
    }
  };

  const handleCategoryClick = (category) => {
    preservePageScroll(() => {
      if (activeCategory?.id === category.id) {
        toggleCategory(category.id);
      } else {
        setActiveCategory(category);
        setActiveSubcategory(null);
        // Always expand this category when clicking on it
        if (!expandedCategories.includes(category.id)) {
          setExpandedCategories((prev) => [...prev, category.id]);
        }
        setExpandedTables({});
      }
    });
  };

  const handleSubcategoryClick = (category, subcategory, event) => {
    if (event) {
      event.stopPropagation();
    }

    preservePageScroll(() => {
      const subcategoryKey = `${category.id}::${subcategory.id}`;
      setActiveCategory(category);
      setActiveSubcategory(subcategory);
      setExpandedSubcategories((prev) =>
        prev.includes(subcategoryKey) ? prev : [...prev, subcategoryKey],
      );

      // Ensure the parent category is expanded - FIXED LOGIC
      if (!expandedCategories.includes(category.id)) {
        setExpandedCategories((prev) => [...prev, category.id]);
      } else {
        // If already expanded, ensure it stays expanded
        setExpandedCategories((prev) => {
          if (!prev.includes(category.id)) {
            return [...prev, category.id];
          }
          return prev;
        });
      }

      if (isMobile) {
        setIsMobileMenuOpen(false);
      }
      setExpandedTables({});
    });
  };

  const handleProductClick = (category, subcategory, product, event) => {
    if (event) {
      event.stopPropagation();
    }

    preservePageScroll(() => {
      const subcategoryKey = `${category.id}::${subcategory.id}`;
      setActiveCategory(category);
      setActiveSubcategory(product);
      setExpandedSubcategories((prev) =>
        prev.includes(subcategoryKey) ? prev : [...prev, subcategoryKey],
      );

      // Ensure the parent category is expanded
      if (!expandedCategories.includes(category.id)) {
        setExpandedCategories((prev) => [...prev, category.id]);
      }

      if (isMobile) {
        setIsMobileMenuOpen(false);
      }
      setExpandedTables({});
    });
  };

  const getCategoryColors = (categoryId) => {
    return colorSchemes[categoryId] || colorSchemes.default;
  };

  // Enhanced product icons
  const productIcons = {
    "autoclave-tape": Tag,
    "bowie-dick-test": TestTube,
    "type-4-steam": Layers,
    "type-5-integrating": TrendingUp,
    "type-6-emulating": Target,
    "helix-device": Cpu,
    "scbi-steam": FlaskConical,
    "ps1930-incubator": Thermometer,
    "superfast-bi-system": Zap,
    "rapid-readout-system": Monitor,
    "mini-autoreader": Smartphone,
    "protein-test-kit": TestTube,
    cei: Droplets,
    "duplex-label-system": Printer,
    "ultrasonic-cavicheck": Waves,
    "parachlor-tablets": Shield,
    "parazyme-detergent": Droplet,
    "instaclean-kit": Package,
  };

  // Function to render packaging table
  const renderPackagingTable = (packagingData, colors) => {
    if (
      !packagingData ||
      !packagingData.rows ||
      packagingData.rows.length === 0
    ) {
      return null;
    }

    return (
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Package className={`w-5 h-5 ${colors.icon}`} />
          Packaging Information
        </h3>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full divide-y divide-gray-200">
            <thead className={`${colors.light}`}>
              <tr>
                {packagingData.headers.map((header, index) => (
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
              {packagingData.rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`hover:bg-gray-50 transition-colors ${
                    rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  {packagingData.headers.map((header, colIndex) => {
                    // Handle different header formats
                    const headerKey = header
                      .toLowerCase()
                      .replace(/[^a-z]/g, "");
                    let cellContent = "";

                    if (headerKey === "productcode" && row.code) {
                      cellContent = row.code;
                    } else if (
                      headerKey === "productdescription" &&
                      row.description
                    ) {
                      cellContent = row.description;
                    } else if (
                      headerKey === "packagecontents" &&
                      row.contents
                    ) {
                      cellContent = row.contents;
                    } else if (
                      headerKey === "innerboxquantity" &&
                      row.quantity
                    ) {
                      cellContent = row.quantity;
                    } else if (
                      headerKey === "calibrationcycle" &&
                      row.calibration
                    ) {
                      cellContent = row.calibration;
                    } else if (row[headerKey]) {
                      cellContent = row[headerKey];
                    } else {
                      // Try to find the value by direct property access
                      const key = Object.keys(row).find((key) =>
                        key.toLowerCase().includes(headerKey.slice(0, 3)),
                      );
                      cellContent = key ? row[key] : "";
                    }

                    return (
                      <td
                        key={colIndex}
                        className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200 last:border-r-0 whitespace-normal break-words align-top"
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
    );
  };

  // Function to render packaging as cards
  const renderPackagingCards = (packagingData, colors) => {
    if (
      !packagingData ||
      !packagingData.rows ||
      packagingData.rows.length === 0
    ) {
      return null;
    }

    return (
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Package className={`w-5 h-5 ${colors.icon}`} />
          Packaging Information
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {packagingData.rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Product Code/Description Header */}
              {(row.code || row.description) && (
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    {row.code && (
                      <h4 className="font-bold text-gray-900 text-lg">
                        {row.code}
                      </h4>
                    )}
                    {row.quantity && (
                      <span className="text-xs bg-red-100 text-red-800 px-3 py-1 rounded-full">
                        Qty: {row.quantity}
                      </span>
                    )}
                  </div>
                  {row.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {row.description}
                    </p>
                  )}
                </div>
              )}

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Package Contents */}
                {row.contents && (
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500 uppercase">Contents</p>
                    <p className="font-medium text-gray-900">{row.contents}</p>
                  </div>
                )}

                {/* Inner Box Quantity */}
                {row.innerQuantity && (
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Inner Box</p>
                    <p className="font-medium text-gray-900">
                      {row.innerQuantity}
                    </p>
                  </div>
                )}

                {/* Calibration Cycle */}
                {row.calibration && (
                  <div>
                    <p className="text-xs text-gray-500 uppercase">
                      Calibration
                    </p>
                    <p className="font-medium text-gray-900">
                      {row.calibration}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Function to render specifications as cards
  const renderSpecificationsCards = (specifications, colors) => {
    if (
      !specifications ||
      !specifications.rows ||
      specifications.rows.length === 0
    ) {
      return null;
    }

    return (
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Table className={`w-5 h-5 ${colors.icon}`} />
          Technical Specifications
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {specifications.rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {row.image && (
                <div className="mb-3 bg-gray-50 rounded-lg p-3 flex justify-center">
                  <img
                    src={row.image}
                    alt={row.name || row.code || "Specification"}
                    className="max-h-28 object-contain"
                  />
                </div>
              )}

              <div className="space-y-2">
                {specifications.headers.map((header, headerIndex) => {
                  const headerKey = header.toLowerCase().replace(/[^a-z]/g, "");
                  let cellContent = "";

                  if (headerKey === "productcode" && row.code) {
                    cellContent = row.code;
                  } else if (headerKey === "name" && row.name) {
                    cellContent = row.name;
                  } else if (
                    headerKey === "sterilizationprocess" &&
                    row.process
                  ) {
                    cellContent = row.process;
                  } else if (headerKey === "readouttime" && row.readout) {
                    cellContent = row.readout;
                  } else if (headerKey === "keyfeature" && row.feature) {
                    cellContent = row.feature;
                  } else if (row[headerKey]) {
                    cellContent = row[headerKey];
                  } else {
                    const key = Object.keys(row).find((key) =>
                      key.toLowerCase().includes(headerKey.slice(0, 3)),
                    );
                    cellContent = key ? row[key] : "";
                  }

                  if (!cellContent) return null;

                  return (
                    <div
                      key={headerIndex}
                      className="bg-gray-50 rounded-lg p-3 border border-gray-100"
                    >
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        {header}
                      </p>
                      <p className="text-gray-800 whitespace-pre-line text-sm">
                        {cellContent}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const getSpecCellContent = (row, header) => {
    const headerKey = header.toLowerCase().replace(/[^a-z]/g, "");

    if (headerKey === "productcode" && row.code) return row.code;
    if (headerKey === "name" && row.name) return row.name;
    if (headerKey === "sterilizationprocess" && row.process) return row.process;
    if (headerKey === "readouttime" && row.readout) return row.readout;
    if (headerKey === "keyfeature" && row.feature) return row.feature;
    if (row[headerKey]) return row[headerKey];

    const key = Object.keys(row).find((key) =>
      key.toLowerCase().includes(headerKey.slice(0, 3)),
    );
    return key ? row[key] : "";
  };

  const renderSpecificationsDropdown = (product, colors) => {
    const rows = product?.specifications?.rows || [];
    if (rows.length === 0) return null;

    return (
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Table className={`w-5 h-5 ${colors.icon}`} />
          Technical Specifications
        </h3>
        <div className="space-y-3">
          {rows.map((row, rowIndex) => {
            const rowKey = `${product.id}-${rowIndex}`;
            const isOpen = expandedSpecRows[rowKey] ?? false;

            return (
              <div
                key={rowKey}
                className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpandedSpecRows((prev) => ({
                      ...prev,
                      [rowKey]: !(prev[rowKey] ?? false),
                    }))
                  }
                  className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-md">
                      {row.code || `Item ${rowIndex + 1}`}
                    </span>
                    <span className="font-semibold text-gray-900">
                      {row.name || "Specification"}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 border-t border-gray-100">
                    {row.image && (
                      <div className="mt-4 mb-4 bg-gray-50 rounded-lg p-4 flex justify-center">
                        <img
                          src={row.image}
                          alt={row.name || row.code || "Product"}
                          className="h-36 md:h-44 w-auto object-contain"
                        />
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.specifications.headers.map((header, headerIndex) => {
                        const value = getSpecCellContent(row, header);
                        if (!value) return null;

                        return (
                          <div
                            key={headerIndex}
                            className="bg-gray-50 rounded-lg p-3 border border-gray-100"
                          >
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                              {header}
                            </p>
                            <p className="text-sm text-gray-900 whitespace-pre-line">
                              {value}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderProduct = (product) => {
    const colors = getCategoryColors(activeCategory?.id || product.id);
    const ProductIcon = productIcons[product.id] || Package;

    return (
      <div key={product.id} className="space-y-6 md:space-y-8">
        {/* Product Header */}
        <div
          className={`rounded-2xl p-4 md:p-6 mb-6 ${colors.light} border ${colors.border} shadow-lg`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`p-3 rounded-xl bg-gradient-to-r ${colors.gradient} shadow-md`}
            >
              <ProductIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                {product.description}
              </p>
            </div>
          </div>

          {/* Product Image (if available) */}
          {product.image && (
            <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-white p-6 flex items-center justify-center">
                <div className="relative w-full h-48 md:h-64 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain cursor-zoom-in"
                    onClick={() =>
                      setImagePreview({
                        src: product.image,
                        alt: product.name,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {/* Features Section */}
          {product.features && product.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className={`w-5 h-5 ${colors.icon}`} />
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${colors.border} bg-white/70`}
                  >
                    <div className="flex items-start gap-2">
                      <div className={`p-1 rounded ${colors.light}`}>
                        <ChevronRight className={`w-4 h-4 ${colors.icon}`} />
                      </div>
                      <p className="text-sm text-gray-700">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specifications Section - Updated for mobile */}
          {product.specifications &&
            (product.id === "superfast-bi-system" ? (
              renderSpecificationsDropdown(product, colors)
            ) : isMobile && viewMode === "cards" ? (
              renderSpecificationsCards(product.specifications, colors)
            ) : (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Table className={`w-5 h-5 ${colors.icon}`} />
                  Technical Specifications
                </h3>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className={`${colors.light}`}>
                      <tr>
                        {product.specifications.headers.map((header, index) => (
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
                      {product.specifications.rows.map((row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className={`hover:bg-gray-50 transition-colors ${
                            rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                          }`}
                        >
                          {product.specifications.headers.map((header, colIndex) => {
                              const cellContent = getSpecCellContent(row, header);

                              return (
                                <td
                                  key={colIndex}
                                  className={`px-4 py-3 text-sm text-gray-900 border-r border-gray-200 last:border-r-0 ${
                                    colIndex === 0 ? "font-medium" : ""
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    {colIndex === 0 && row.image && (
                                      <img
                                        src={row.image}
                                        alt={row.name || row.code || "Product"}
                                        className="w-10 h-10 object-contain rounded bg-white border border-gray-200 p-1"
                                      />
                                    )}
                                    <span className="whitespace-pre-line">
                                      {cellContent}
                                    </span>
                                  </div>
                                </td>
                              );
                            },
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

          {/* Packaging Information - Updated for mobile */}
          {product.packaging &&
            (isMobile && viewMode === "cards"
              ? renderPackagingCards(product.packaging, colors)
              : renderPackagingTable(product.packaging, colors))}
        </div>
      </div>
    );
  };

  const renderTable = () => {
    if (!activeCategory) return renderEmptyState();

    // Handle main category view
    if (activeCategory && !activeSubcategory) {
      const colors = getCategoryColors(activeCategory.id);

      return (
        <div className="space-y-6 md:space-y-8">
          <div
            className={`rounded-2xl p-4 md:p-6 mb-6 ${colors.light} border ${colors.border} shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${colors.gradient} shadow-md`}
              >
                <activeCategory.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {activeCategory.name}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {activeCategory.description}
                </p>
              </div>
            </div>

            <div className="bg-white/70 rounded-xl p-4 border border-white/50 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Info className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
                <p className="text-sm text-gray-600">
                  Select a subcategory to view detailed product information
                </p>
              </div>
              {isMobile && (
                <div className="space-y-2">
                  <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${colors.gradient} text-white px-4 py-3 rounded-xl font-bold hover:shadow-lg transition`}
                  >
                    <Menu className="w-5 h-5" />
                    Browse Subcategories
                  </button>
                  {activeCategory.subcategories &&
                    activeCategory.subcategories.length > 0 && (
                      <div className="text-center">
                        <p className="text-sm text-gray-600">
                          {activeCategory.subcategories.length} subcategories
                          available
                        </p>
                      </div>
                    )}
                </div>
              )}
            </div>

            {/* Display product categories in desktop view */}
            {!isMobile && activeCategory.subcategories && (
              <div className="mt-6 grid grid-cols-1 gap-4">
                {activeCategory.subcategories.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={(e) =>
                      handleSubcategoryClick(activeCategory, subcategory, e)
                    }
                    className={`bg-gradient-to-r from-white to-gray-50 border-2 ${colors.border} rounded-2xl p-6 text-left transition-all hover:shadow-lg hover:translate-y-[-2px] active:scale-[0.98]`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className={`p-3 rounded-xl ${colors.light} shadow-sm`}
                      >
                        <subcategory.icon
                          className={`w-6 h-6 ${colors.icon}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">
                          {subcategory.name.split(". ")[1] || subcategory.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {subcategory.description}
                        </p>
                      </div>
                      <ChevronRight className={`w-5 h-5 ${colors.icon}`} />
                    </div>
                    {subcategory.subcategories && (
                      <div className="mt-3">
                        <p className="text-xs text-gray-500 mb-2">
                          Contains {subcategory.subcategories.length} products
                        </p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {renderEmptyState(true)}
        </div>
      );
    }

    // Handle subcategory view
    if (activeSubcategory && activeSubcategory.type !== "product") {
      const colors = getCategoryColors(activeCategory.id);

      return (
        <div className="space-y-6 md:space-y-8">
          {isMobile && (
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setActiveSubcategory(null)}
                className={`flex items-center gap-2 ${colors.text} font-medium p-3 ${colors.light} rounded-xl w-full border ${colors.border}`}
              >
                <ChevronLeft className="w-4 h-4" />
                Back to{" "}
                {activeCategory.name.split(". ")[1] || activeCategory.name}
              </button>
            </div>
          )}

          {/* Mobile Table Warning */}
          {isMobile && viewMode === "table" && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="flex items-center gap-2 text-yellow-800 text-sm">
                <Info className="w-4 h-4 flex-shrink-0" />
                <span>Swipe horizontally to view full table</span>
              </div>
            </div>
          )}

          <div className="hidden md:block bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 mb-6 shadow-sm">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <button
                onClick={() => setActiveSubcategory(null)}
                className={`hover:${colors.text} transition-colors`}
              >
                {activeCategory.name}
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="font-medium text-gray-900">
                {activeSubcategory.name}
              </span>
            </nav>
          </div>

          <div
            className={`rounded-2xl p-4 md:p-6 mb-6 ${colors.light} border ${colors.border} shadow-sm`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 md:p-3 rounded-lg bg-white/50 shadow-sm">
                <activeSubcategory.icon
                  className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`}
                />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {activeSubcategory.name}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {activeSubcategory.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <List className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
                <span className="text-xs md:text-sm text-gray-600">
                  {activeSubcategory.subcategories?.length || 0} products
                </span>
              </div>
              {isMobile && (
                <div className="flex items-center gap-2">
                  {viewMode === "cards" ? (
                    <Grid className="w-4 h-4 text-gray-500" />
                  ) : (
                    <Table className="w-4 h-4 text-gray-500" />
                  )}
                  <span className="text-xs text-gray-600">
                    {viewMode === "cards" ? "Cards View" : "Table View"}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Display products - UPDATED FOR MOBILE CARD VIEW */}
          {isMobile && viewMode === "cards" ? (
            <div className="space-y-4">
              {activeSubcategory.subcategories?.map((product) => {
                const productColors = getCategoryColors(product.id);
                const ProductIcon = productIcons[product.id] || Package;

                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Product Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-xl ${productColors.light} shadow-sm`}
                        >
                          <ProductIcon
                            className={`w-5 h-5 ${productColors.icon}`}
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-base">
                            {product.name.split(". ")[1] || product.name}
                          </h3>
                          <p className="text-xs text-gray-600">
                            {product.description}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={(e) =>
                          handleProductClick(
                            activeCategory,
                            activeSubcategory,
                            product,
                            e,
                          )
                        }
                        className={`p-2 ${productColors.light} rounded-lg`}
                      >
                        <ChevronRight
                          className={`w-4 h-4 ${productColors.icon}`}
                        />
                      </button>
                    </div>

                    {/* Features Preview */}
                    {product.features && product.features.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-xs text-gray-500 mb-2">
                          Key Features:
                        </p>
                        <ul className="space-y-1">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div
                                className={`p-0.5 rounded ${productColors.light}`}
                              >
                                <ChevronRight
                                  className={`w-3 h-3 ${productColors.icon}`}
                                />
                              </div>
                              <span className="text-xs text-gray-600 line-clamp-2">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                        {product.features.length > 2 && (
                          <p className="text-xs text-gray-500 mt-1">
                            +{product.features.length - 2} more features
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* Original table view for desktop or mobile table mode */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeSubcategory.subcategories?.map((product) => {
                const productColors = getCategoryColors(product.id);
                const ProductIcon = productIcons[product.id] || Package;

                return (
                  <button
                    key={product.id}
                    onClick={(e) =>
                      handleProductClick(
                        activeCategory,
                        activeSubcategory,
                        product,
                        e,
                      )
                    }
                    className={`bg-gradient-to-r from-white to-gray-50 border-2 ${productColors.border} rounded-2xl p-6 text-left transition-all hover:shadow-lg hover:translate-y-[-2px] active:scale-[0.98]`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className={`p-3 rounded-xl ${productColors.light} shadow-sm`}
                      >
                        <ProductIcon
                          className={`w-6 h-6 ${productColors.icon}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">
                          {product.name.split(". ")[1] || product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {product.description}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 ${productColors.icon}`}
                      />
                    </div>
                    {product.features && (
                      <div className="mt-3">
                        <p className="text-xs text-gray-500 mb-2">
                          Key highlights:
                        </p>
                        <ul className="space-y-1">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div
                                className={`p-0.5 rounded ${productColors.light}`}
                              >
                                <ChevronRight
                                  className={`w-3 h-3 ${productColors.icon}`}
                                />
                              </div>
                              <span className="text-xs text-gray-600 line-clamp-2">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    // Handle individual product view
    if (activeSubcategory && activeSubcategory.type === "product") {
      return renderProduct(activeSubcategory);
    }

    return renderEmptyState();
  };

  const renderEmptyState = (categorySelected = false) => (
    <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 md:p-8 text-center border-2 border-dashed border-gray-200">
      <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-red-100 to-red-100 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg">
        <Shield className="w-8 h-8 md:w-12 md:h-12 text-red-600" />
      </div>

      <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
        {categorySelected ? "Select a Product" : "Explore IPC Products"}
      </h2>

      <p className="text-gray-600 max-w-md mb-6 md:mb-8 text-sm md:text-lg">
        {categorySelected
          ? "Please select a product from the sidebar to view detailed specifications."
          : "Select a category to browse our comprehensive range of Infection Prevention and Control products."}
      </p>

      {isMobile && !categorySelected && (
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="w-full max-w-sm bg-gradient-to-r from-red-600 to-red-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition shadow-md"
        >
          <div className="flex items-center justify-center gap-3">
            <Menu className="w-5 h-5" />
            Browse All Categories
          </div>
        </button>
      )}
    </div>
  );

  const renderSidebarSubcategories = (category) => {
    if (!expandedCategories.includes(category.id)) return null;
    const colors = getCategoryColors(category.id);

    return (
      <div className="mt-2 space-y-2" onClick={(e) => e.stopPropagation()}>
        {category.subcategories?.map((subcategory) => {
          const subcategoryKey = `${category.id}::${subcategory.id}`;
          const hasActiveChild = subcategory.subcategories?.some(
            (product) => product.id === activeSubcategory?.id,
          );
          const isSubActive =
            activeSubcategory?.id === subcategory.id || hasActiveChild;
          const isSubExpanded =
            expandedSubcategories.includes(subcategoryKey) || isSubActive;

          return (
            <div key={subcategory.id}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (isSubExpanded) {
                    setExpandedSubcategories((prev) =>
                      prev.filter((key) => key !== subcategoryKey),
                    );
                    if (activeSubcategory?.id === subcategory.id) {
                      setActiveSubcategory(null);
                    }
                  } else {
                    handleSubcategoryClick(category, subcategory, e);
                  }
                }}
                className={`w-full text-left p-3 rounded-xl transition-all ${
                  isSubActive
                    ? `bg-gradient-to-r ${colors.light} border-l-4 ${colors.border} shadow-sm`
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center ${subcategory.bgColor} shadow-sm`}
                    >
                      <subcategory.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm md:text-base">
                        {subcategory.name.split(". ")[1] || subcategory.name}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-1">
                        {subcategory.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform flex-shrink-0 ${isSubActive ? colors.icon : "text-gray-400"}`}
                  />
                </div>
              </button>

              {/* Render products for this subcategory */}
              {isSubExpanded && subcategory.subcategories?.length > 0 && (
                <div className="ml-8 mt-2 space-y-2 border-l-2 border-gray-200 pl-3">
                  {subcategory.subcategories.map((product) => {
                    const isProductActive =
                      activeSubcategory?.id === product.id;
                    const productColors = getCategoryColors(product.id);
                    const ProductIcon = productIcons[product.id] || Package;

                    return (
                      <button
                        key={product.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick(category, subcategory, product, e);
                        }}
                        className={`w-full text-left p-2 rounded-lg transition-all ${
                          isProductActive
                            ? `bg-gradient-to-r ${productColors.light} border-l-2 ${productColors.border}`
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-6 h-6 rounded-lg flex items-center justify-center ${productColors.light}`}
                          >
                            <ProductIcon
                              className={`w-3 h-3 ${productColors.icon}`}
                            />
                          </div>
                          <span
                            className={`text-xs ${isProductActive ? "font-medium" : ""} text-gray-900`}
                          >
                            {product.name.split(". ")[1] || product.name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const getBreadcrumbPath = () => {
    const paths = [{ name: "Products", path: "/products" }];

    if (activeCategory) {
      paths.push({
        name: activeCategory.name,
        path: `/products/${activeCategory.id}`,
      });
    }

    if (activeSubcategory) {
      paths.push({
        name: activeSubcategory.name.split(". ")[1] || activeSubcategory.name,
        path: `/products/${activeCategory.id}/${activeSubcategory.id}`,
      });
    }

    return paths;
  };

  const breadcrumbPaths = getBreadcrumbPath();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50/30 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Mobile Header Bar */}
        {isMobile && (
          <div className="flex items-center justify-between mb-6 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-gray-200">
            <button
              onClick={handleBackToProducts}
              className="flex items-center gap-2 text-[#E81729] font-medium hover:text-[#c01525] transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Products</span>
            </button>
            <div className="flex items-center gap-3">
              {activeCategory && (
                <span className="text-sm font-medium text-gray-700 truncate max-w-[150px]">
                  {activeCategory.name.split(". ")[1] || activeCategory.name}
                </span>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 bg-gradient-to-r from-red-600 to-red-600 text-white rounded-xl shadow-md hover:shadow-lg transition"
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

        {/* Enhanced Breadcrumb for Desktop */}
        {!isMobile && (
          <div className="mb-6 md:mb-8">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-200">
              {breadcrumbPaths.map((item, index) => (
                <React.Fragment key={item.path}>
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  )}
                  {index === breadcrumbPaths.length - 1 ? (
                    <span className="font-bold text-gray-900 px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg">
                      {item.name}
                    </span>
                  ) : (
                    <button
                      onClick={() => {
                        if (item.path === "/products") {
                          handleBackToProducts();
                        } else if (
                          item.path.includes(activeCategory?.id) &&
                          activeSubcategory
                        ) {
                          setActiveSubcategory(null);
                        }
                      }}
                      className="hover:text-red-600 transition-colors px-3 py-1 hover:bg-red-50 rounded-lg"
                    >
                      {item.name}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        )}
        <div className="mt-20 mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="text-gray-600">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-semibold text-gray-900">ELHODA Products</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-semibold text-gray-900">IPC PRODUCTS</span>
          </nav>
        </div>
        {/* Enhanced Hero */}
        <div className="mt-10 mb-8 md:mb-12">
          <div className="bg-gradient-to-br from-gray-900 via-black to-red-900 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
                    <Shield className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    <span className="text-xs md:text-sm font-semibold text-white">
                      Infection Prevention & Control
                    </span>
                  </div>

                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                    <span className="text-transparent bg-gradient-to-r from-white via-red-200 to-red-300 bg-clip-text">
                      IPC PRODUCTS &
                    </span>
                    <br />
                    <span className="text-transparent bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text">
                      STERILIZATION ASSURANCE
                    </span>
                  </h1>

                  <p className="text-gray-300 text-sm md:text-lg max-w-3xl mb-6 md:mb-8 bg-black/20 backdrop-blur-sm p-4 rounded-xl">
                    Complete range of Infection Prevention and Control products
                    including sterilization assurance systems, cleaning efficacy
                    indicators, and instrument reprocessing solutions.
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

                <div className="hidden lg:flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full blur-xl" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shield className="w-32 h-32 text-white/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobile && isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden">
            <div
              className="absolute inset-0"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute left-0 right-0 bottom-0 top-20 bg-gradient-to-b from-white to-gray-50 rounded-t-3xl overflow-hidden shadow-2xl">
              <div className="p-6 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      IPC Categories
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Browse our IPC product catalog
                    </p>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-sm hover:shadow-md"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </button>
                </div>

                {activeCategory && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-red-50 rounded-2xl border border-red-200 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-red-600 font-medium">
                          Selected Category:
                        </p>
                        <p className="font-bold text-gray-900">
                          {activeCategory.name.split(". ")[1] ||
                            activeCategory.name}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setActiveCategory(null);
                          setActiveSubcategory(null);
                          setExpandedCategories([]);
                          setExpandedSubcategories([]);
                        }}
                        className="text-sm bg-gradient-to-r from-red-50 to-red-100 text-red-600 hover:text-red-700 px-3 py-1 rounded-lg"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {ipcCategories.map((category) => {
                    const isExpanded = expandedCategories.includes(category.id);
                    const isActive = activeCategory?.id === category.id;
                    const colors = getCategoryColors(category.id);

                    return (
                      <div
                        key={category.id}
                        className={`rounded-2xl transition-all duration-300 shadow-sm ${
                          isActive
                            ? `border-2 ${colors.border} ${colors.light}`
                            : "border border-gray-200 hover:border-gray-300 hover:shadow-md"
                        }`}
                      >
                        <button
                          onClick={() => handleCategoryClick(category)}
                          className="w-full text-left p-4"
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.bgColor} shadow-sm`}
                            >
                              <category.icon
                                className={`w-6 h-6 ${
                                  isActive ? colors.icon : "text-gray-700"
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
                              className={`w-5 h-5 transition-transform flex-shrink-0 ${
                                isExpanded ? "rotate-180" : ""
                              } ${isActive ? colors.icon : "text-gray-400"}`}
                            />
                          </div>
                        </button>

                        {isExpanded && (
                          <div
                            className="px-4 pb-4"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="border-t border-gray-200 mt-3 pt-3">
                              <h4 className="text-sm font-medium text-gray-700 mb-3">
                                Subcategories
                              </h4>
                              <div className="space-y-2">
                                {category.subcategories?.map((subcategory) => (
                                  <button
                                    key={subcategory.id}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleSubcategoryClick(
                                        category,
                                        subcategory,
                                        e,
                                      );
                                    }}
                                    className={`w-full text-left p-3 rounded-xl transition-colors ${
                                      activeSubcategory?.id === subcategory.id
                                        ? `bg-gradient-to-r ${colors.light} border-l-4 ${colors.border}`
                                        : "hover:bg-gray-50"
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                          subcategory.bgColor || "bg-gray-100"
                                        } shadow-sm`}
                                      >
                                        <subcategory.icon className="w-5 h-5 text-gray-700" />
                                      </div>
                                      <div className="text-left flex-1">
                                        <h5 className="font-medium text-gray-900 text-sm">
                                          {subcategory.name.split(". ")[1] ||
                                            subcategory.name}
                                        </h5>
                                        <p className="text-xs text-gray-500">
                                          {subcategory.description}
                                        </p>
                                      </div>
                                      <ChevronRight className="w-4 h-4 text-gray-400" />
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-center p-4 bg-gradient-to-r from-gray-900 to-black text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition"
                  >
                    Close Menu
                  </button>
                  {(activeCategory || activeSubcategory) && (
                    <button
                      onClick={() => {
                        setActiveCategory(null);
                        setActiveSubcategory(null);
                        setExpandedCategories([]);
                        setExpandedSubcategories([]);
                        setExpandedTables({});
                      }}
                      className="w-full text-center p-4 border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition"
                    >
                      Clear All Selections
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content with Enhanced Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          <div className="hidden lg:block lg:w-1/3">
            <div className="bg-gradient-to-b from-white to-gray-50 rounded-2xl border border-gray-200 shadow-lg p-6 sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    IPC Categories
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Browse product catalog
                  </p>
                </div>
                <Folder className="w-6 h-6 text-gray-400" />
              </div>

              {(activeCategory || activeSubcategory) && (
                <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-red-50 rounded-2xl border border-red-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-red-700">
                      Current Selection:
                    </span>
                    <button
                      onClick={() => {
                        setActiveCategory(null);
                        setActiveSubcategory(null);
                        setExpandedCategories([]);
                        setExpandedSubcategories([]);
                        setExpandedTables({});
                      }}
                      className="text-sm bg-gradient-to-r from-red-50 to-red-100 text-red-600 hover:text-red-700 px-3 py-1 rounded-lg"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="space-y-1">
                    {activeCategory && (
                      <p className="text-gray-900 font-bold">
                        {activeCategory.name.split(". ")[1] ||
                          activeCategory.name}
                      </p>
                    )}
                    {activeSubcategory && (
                      <p className="text-gray-700 text-sm">
                        →{" "}
                        {activeSubcategory.name.split(". ")[1] ||
                          activeSubcategory.name}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {ipcCategories.map((category) => {
                  const isExpanded = expandedCategories.includes(category.id);
                  const isActive = activeCategory?.id === category.id;
                  const colors = getCategoryColors(category.id);

                  return (
                    <div
                      key={category.id}
                      className={`rounded-2xl transition-all duration-300 shadow-sm ${
                        isActive
                          ? `border-2 ${colors.border} ${colors.light}`
                          : "border border-gray-200 hover:border-gray-300 hover:shadow-md"
                      }`}
                    >
                      <button
                        onClick={() => handleCategoryClick(category)}
                        className="w-full text-left p-4"
                        onMouseDown={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-14 h-14 rounded-xl flex items-center justify-center ${category.bgColor} shadow-md`}
                          >
                            <category.icon
                              className={`w-7 h-7 ${
                                isActive ? colors.icon : "text-gray-700"
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
                            } ${isActive ? colors.icon : "text-gray-400"}`}
                          />
                        </div>
                      </button>

                      {renderSidebarSubcategories(category)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">{renderTable()}</div>
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
          <div className="flex items-center justify-around">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex flex-col items-center gap-1 text-red-600 hover:text-red-700 transition"
            >
              <div className="p-2 bg-gradient-to-r from-red-50 to-red-50 rounded-xl">
                <Menu className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">Categories</span>
            </button>
            <button
              onClick={handleBackToProducts}
              className="flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900 transition"
            >
              <div className="p-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                <Home className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">Products</span>
            </button>

            {(activeCategory || activeSubcategory) && (
              <button
                onClick={() => {
                  setActiveCategory(null);
                  setActiveSubcategory(null);
                  setExpandedCategories([]);
                  setExpandedSubcategories([]);
                  setExpandedTables({});
                }}
                className="flex flex-col items-center gap-1 text-rose-600 hover:text-rose-700 transition"
              >
                <div className="p-2 bg-gradient-to-r from-rose-50 to-red-50 rounded-xl">
                  <X className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium">Clear</span>
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default IPCProductsTable;
