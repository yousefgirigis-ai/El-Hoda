import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Package,
  Ruler,
  Scale,
  Palette,
  Droplets,
  Box,
  Weight,
  Calendar,
  Layers,
} from "lucide-react";
import BackButton from "../components/BackButton";

const ProductDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50/30 pt-0 pb-28">
        <div className="text-center bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 max-w-md mx-6">
          <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Package className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The product you're looking for is not available or may have been
            moved.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="px-8 py-3 bg-gradient-to-r from-[#E81729] to-red-600 text-white rounded-xl hover:from-[#d01526] hover:to-red-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  const renderProductDetails = () => {
    const {
      title,
      image,
      category,
      description,
      code,
      shaft_material,
      tip_material,
      sterile,
      package: pkg,
      case_quantity,
      case_weight,
      cases_per_pallet,
      expiry_date,
      sizes,
      loops_internal_diameter,
      presentation,
      color,
      graduation,
      capacity_ml,
      dimensions,
      quantity,
      notes,
      aseptic,
    } = product;

    const getCategoryIcon = (categoryName) => {
      if (categoryName?.toLowerCase().includes("surgical"))
        return <Package className="w-5 h-5" />;
      if (categoryName?.toLowerCase().includes("instrument"))
        return <Ruler className="w-5 h-5" />;
      if (categoryName?.toLowerCase().includes("disposable"))
        return <Droplets className="w-5 h-5" />;
      return <Package className="w-5 h-5" />;
    };

    const getCategoryColor = (categoryName) => {
      if (categoryName?.toLowerCase().includes("surgical"))
        return "bg-blue-100 text-blue-700 border-blue-200";
      if (categoryName?.toLowerCase().includes("instrument"))
        return "bg-green-100 text-green-700 border-green-200";
      if (categoryName?.toLowerCase().includes("disposable"))
        return "bg-purple-100 text-purple-700 border-purple-200";
      return "bg-red-100 text-red-700 border-red-200";
    };

    return (
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-900 via-black to-red-900 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-2/5">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
                  <img
                    src={`/${image}`}
                    alt={title}
                    className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/600x600/EEE/555?text=${title.replace(
                        /_/g,
                        "+",
                      )}`;
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-3/5">
              {/* Category Badge */}
              <div
                className={`inline-flex items-center gap-2 ${getCategoryColor(category)} px-4 py-2 rounded-full text-sm font-bold mb-4 border`}
              >
                {getCategoryIcon(category)}
                {category || "Medical Product"}
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 capitalize">
                {title.replace(/_/g, " ")}
              </h1>

              {/* Product Code Highlight */}
              {code && (
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl mb-6">
                  <span className="text-white/80 text-sm font-semibold">
                    Product Code:
                  </span>
                  <span className="text-xl font-bold text-white font-mono bg-white/20 px-3 py-1 rounded-lg">
                    {code}
                  </span>
                </div>
              )}

              {/* Description */}
              {description && (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-6">
                  <p className="text-white/90 leading-relaxed text-lg">
                    {description}
                  </p>
                </div>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {case_quantity && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Box className="w-4 h-4 text-white" />
                      <span className="text-white/80 text-xs font-semibold">
                        Case Qty
                      </span>
                    </div>
                    <p className="text-white text-xl font-bold">
                      {case_quantity}
                    </p>
                  </div>
                )}

                {case_weight && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Weight className="w-4 h-4 text-white" />
                      <span className="text-white/80 text-xs font-semibold">
                        Case Weight
                      </span>
                    </div>
                    <p className="text-white text-xl font-bold">
                      {case_weight}
                    </p>
                  </div>
                )}

                {cases_per_pallet && (
                  <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Layers className="w-4 h-4 text-white" />
                      <span className="text-white/80 text-xs font-semibold">
                        Cases/Pallet
                      </span>
                    </div>
                    <p className="text-white text-2xl font-bold">
                      {cases_per_pallet.toLocaleString()}
                    </p>
                  </div>
                )}

                {expiry_date && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-white" />
                      <span className="text-white/80 text-xs font-semibold">
                        Expiry
                      </span>
                    </div>
                    <p className="text-white text-lg font-bold">
                      {expiry_date}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-50 rounded-full opacity-20 blur-3xl" />

          <div className="relative">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-[#E81729] to-red-600 rounded-xl">
                <Ruler className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Product Specifications
                </h2>
                <p className="text-gray-600">
                  Detailed technical specifications and features
                </p>
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Material Specifications */}
              {shaft_material && (
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Scale className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Shaft Material
                    </span>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">
                    {shaft_material}
                  </p>
                </div>
              )}

              {tip_material && (
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Scale className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Tip Material
                    </span>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">
                    {tip_material}
                  </p>
                </div>
              )}

              {/* Sterile & Aseptic */}
              {sterile && (
                <div
                  className={`rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow ${
                    sterile === "STERILE EO"
                      ? "bg-gradient-to-br from-green-50 to-white border-green-200"
                      : "bg-gradient-to-br from-gray-50 to-white border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg ${
                        sterile === "STERILE EO"
                          ? "bg-green-100"
                          : "bg-gray-100"
                      }`}
                    >
                      <Droplets
                        className={`w-5 h-5 ${
                          sterile === "STERILE EO"
                            ? "text-green-600"
                            : "text-gray-600"
                        }`}
                      />
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Sterile
                    </span>
                  </div>
                  <p
                    className={`text-lg font-semibold ${
                      sterile === "STERILE EO"
                        ? "text-green-700"
                        : "text-gray-700"
                    }`}
                  >
                    {sterile === "STERILE EO" ? "Sterile EO" : sterile}
                  </p>
                </div>
              )}

              {aseptic && (
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Droplets className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Aseptic
                    </span>
                  </div>
                  <p className="text-blue-700 text-lg font-semibold">Yes</p>
                </div>
              )}

              {/* Packaging */}
              {pkg && (
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Package className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Package
                    </span>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">{pkg}</p>
                </div>
              )}

              {/* Physical Properties */}
              {loops_internal_diameter && (
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Ruler className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Loops Internal Diameter
                    </span>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">
                    {loops_internal_diameter}
                  </p>
                </div>
              )}

              {presentation && (
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Package className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Presentation
                    </span>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">
                    {presentation}
                  </p>
                </div>
              )}

              {color && (
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Palette className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Color
                    </span>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold capitalize">
                    {color}
                  </p>
                </div>
              )}

              {graduation && (
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Ruler className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Graduation
                    </span>
                  </div>
                  <p className="text-blue-700 text-lg font-semibold">Yes</p>
                </div>
              )}

              {capacity_ml && (
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Droplets className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Capacity
                    </span>
                  </div>
                  <p className="text-blue-700 text-lg font-semibold">
                    {capacity_ml} ml
                  </p>
                </div>
              )}

              {dimensions && (
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Ruler className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Dimensions
                    </span>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">
                    {dimensions}
                  </p>
                </div>
              )}

              {quantity && (
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Package className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Quantity
                    </span>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">
                    {quantity}
                  </p>
                </div>
              )}
            </div>

            {/* Sizes Variants Section */}
            {sizes && sizes.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      Available Sizes & Variants
                    </h3>
                    <p className="text-gray-600">
                      Browse all available configurations
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                            Code
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                            Description
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                            Sterile
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                            Case Qty
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                            Case Weight
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                            Cases/Pallet
                          </th>
                          {/* Additional columns */}
                          {sizes.some((size) => size.capacity_ml) && (
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                              Capacity
                            </th>
                          )}
                          {sizes.some((size) => size.aseptic) && (
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                              Aseptic
                            </th>
                          )}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {sizes.map((size, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-50/50 transition-colors"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="font-mono font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg">
                                {size.code || "N/A"}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <p className="text-gray-700 font-medium">
                                {size.description ||
                                  size.size_description ||
                                  "N/A"}
                              </p>
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                                  size.sterile === "STERILE EO" ||
                                  size.sterile === "Yes"
                                    ? "bg-green-100 text-green-800"
                                    : size.sterile === "No"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {size.sterile === "STERILE EO"
                                  ? "Sterile EO"
                                  : size.sterile || "N/A"}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-gray-900 font-semibold">
                                {size.case_quantity || "N/A"}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-gray-900 font-semibold">
                                {size.case_weight || "N/A"}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              {size.cases_per_pallet ? (
                                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-red-100 to-red-50 text-red-800 rounded-full text-sm font-bold">
                                  {size.cases_per_pallet.toLocaleString()}
                                </span>
                              ) : (
                                "N/A"
                              )}
                            </td>
                            {/* Additional columns */}
                            {sizes.some((s) => s.capacity_ml) && (
                              <td className="px-6 py-4">
                                <span className="text-blue-700 font-semibold">
                                  {size.capacity_ml
                                    ? `${size.capacity_ml} ml`
                                    : "N/A"}
                                </span>
                              </td>
                            )}
                            {sizes.some((s) => s.aseptic) && (
                              <td className="px-6 py-4">
                                {size.aseptic ? (
                                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">
                                    Yes
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-bold">
                                    No
                                  </span>
                                )}
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Notes Section */}
            {notes && (
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <span className="text-yellow-800 font-bold">!</span>
                  </div>
                  <h4 className="text-lg font-bold text-yellow-900">
                    Important Notes
                  </h4>
                </div>
                <p className="text-yellow-800 leading-relaxed">{notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50/30 flex items-center justify-center py-28">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Back Button */}
        <div className="mt-6 mb-8">
          <Link to="/products/medical-consumables">
            <BackButton />
          </Link>
        </div>

        {/* Main Content */}
        <div className="relative">{renderProductDetails()}</div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
