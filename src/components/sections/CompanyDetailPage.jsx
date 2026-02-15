import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Package,
  TestTube,
  Microscope,
  Droplets,
  Shield,
  Settings,
  FlaskRound,
  Beaker,
  ImageOff,
  FileText,
  Layers,
  Package2,
  QrCode,
} from "lucide-react";


const CompanyDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const company = location.state?.company;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [imageError, setImageError] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Check if product has image
  const hasImage = (product) => {
    return (
      product?.img &&
      typeof product.img === "string" &&
      product.img.trim() !== ""
    );
  };

  // Reset image error state when changing products
  useEffect(() => {
    if (selectedProduct) {
      setImageError((prev) => ({ ...prev, [selectedProduct.catalog]: false }));
    }
  }, [selectedProduct]);

  // Helper function for image URLs with fallback
  const getImageUrl = (imgPath, fallbackText) => {
    if (!imgPath) {
      const text = fallbackText
        ? encodeURIComponent(fallbackText.replace(/\s/g, "+"))
        : "Image";
      return `https://placehold.co/400x400/EEE/555?text=${text}`;
    }
    return `/${imgPath}`;
  };

  // Function to flatten nested models
  const getFlattenedModels = (category) => {
    if (!category || !category.models) return [];

    const flattened = [];
    category.models.forEach((item) => {
      // Check if this item has nested models (like in NOCOTECH)
      if (item.models && Array.isArray(item.models)) {
        // Add all nested models
        flattened.push(...item.models);
      } else {
        // Add the item itself
        flattened.push(item);
      }
    });
    return flattened;
  };

  // Function to check if specs is an array of objects (like Superfast BI)
  const isArraySpecs = (specs) => {
    return (
      Array.isArray(specs) && specs.every((item) => typeof item === "object")
    );
  };

  if (!company) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-28">
        <div className="text-center bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 max-w-md mx-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Company Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The company you're looking for is not available.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-gradient-to-r from-[#E81729] to-red-600 text-white rounded-xl hover:from-[#d01526] hover:to-red-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (categoryName) => {
    const name = categoryName?.toLowerCase() || "";
    if (name.includes("manual") || name.includes("semi"))
      return <TestTube className="text-blue-600" />;
    if (name.includes("automation"))
      return <Settings className="text-green-600" />;
    if (name.includes("immuno"))
      return <Microscope className="text-purple-600" />;
    if (name.includes("blood")) return <Droplets className="text-red-600" />;
    if (name.includes("disinfection"))
      return <Shield className="text-orange-600" />;
    if (name.includes("chemistry"))
      return <FlaskRound className="text-indigo-600" />;
    if (name.includes("analyzer")) return <Beaker className="text-cyan-600" />;
    if (name.includes("sterilization"))
      return <Shield className="text-red-600" />;
    if (name.includes("cleaning"))
      return <Microscope className="text-blue-600" />;
    if (name.includes("biological"))
      return <FlaskRound className="text-green-600" />;
    if (name.includes("protein"))
      return <FileText className="text-purple-600" />;
    if (name.includes("param")) return <QrCode className="text-orange-600" />;
    if (name.includes("test")) return <FileText className="text-indigo-600" />;
    if (name.includes("system")) return <Package2 className="text-gray-600" />;
    if (name.includes("indicator")) return <Layers className="text-blue-600" />;
    if (name.includes("pack")) return <Package2 className="text-brown-600" />;
    return <Package className="text-gray-600" />;
  };

  // Product Detail View
  if (selectedProduct) {
    const productHasImage = hasImage(selectedProduct);
    const showImageError = imageError[selectedProduct.catalog];
    const specsIsArray = isArraySpecs(selectedProduct.specs);

    return (
      <div className="min-h-screen bg-gradient-to-br pt-0 pb-28">
        <div className="max-w-6xl mx-auto px-6 mt-8">
          <button
            onClick={() => setSelectedProduct(null)}
            className="
      group
      flex items-center gap-2
      px-4 py-2
      rounded-lg
      bg-[#E81729]
      text-white
      font-medium
      shadow-sm
      hover:bg-red-700
      transition-all
      mb-6
    "
          >
            <span className="transition-transform group-hover:-translate-x-0.5">
              ←
            </span>
            Back
          </button>
        </div>

        <div className="max-w-6xl mx-auto mt-4 px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            {/* Product Header */}
            <div
              className={`flex flex-col ${
                productHasImage ? "md:flex-row gap-8" : ""
              } mb-8`}
            >
              {productHasImage && (
                <div className="w-full md:w-1/3">
                  <div className="w-full h-64 md:h-80 flex items-center justify-center bg-gray-50 rounded-xl p-4">
                    {showImageError ? (
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <ImageOff className="w-16 h-16 mb-3" />
                        <p className="text-sm">Image not available</p>
                      </div>
                    ) : (
                      <img
                        src={getImageUrl(
                          selectedProduct.img,
                          selectedProduct.model
                        )}
                        alt={selectedProduct.model || "Product"}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          setImageError((prev) => ({
                            ...prev,
                            [selectedProduct.catalog]: true,
                          }));
                        }}
                        onLoad={() =>
                          setImageError((prev) => ({
                            ...prev,
                            [selectedProduct.catalog]: false,
                          }))
                        }
                      />
                    )}
                  </div>
                </div>
              )}
              <div className={productHasImage ? "flex-1" : "w-full"}>
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {getCategoryIcon(selectedCategory?.category)}
                  {selectedCategory?.category}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  {selectedProduct.model}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Catalog: {selectedProduct.catalog}
                  </div>
                </div>
                {selectedProduct.specs?.method && !specsIsArray && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <p className="text-blue-800">
                      <strong>Method:</strong> {selectedProduct.specs.method}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Specifications */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Specifications
              </h2>

              {specsIsArray ? (
                // Render array specs (like Superfast BI)
                <div className="space-y-6">
                  {selectedProduct.specs.map((specItem, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {specItem.name || `Variant ${index + 1}`}
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(specItem).map(([key, value]) => {
                          if (key === "name") return null; // Skip name as it's already displayed
                          return (
                            <div
                              key={key}
                              className="bg-white rounded-lg p-4 border border-gray-100"
                            >
                              <span className="block text-sm font-semibold text-gray-600 mb-1 capitalize">
                                {key
                                  .replace(/([A-Z])/g, " $1")
                                  .replace(/_/g, " ")
                                  .trim()}
                              </span>
                              <span className="text-gray-900 font-medium">
                                {Array.isArray(value) ? (
                                  <ul className="space-y-1">
                                    {value.map((item, i) => (
                                      <li key={i} className="text-sm">
                                        {typeof item === "object"
                                          ? Object.entries(item).map(
                                              ([k, v]) => (
                                                <div key={k}>
                                                  <span className="font-medium">
                                                    {k}:
                                                  </span>{" "}
                                                  {v}
                                                </div>
                                              )
                                            )
                                          : item}
                                      </li>
                                    ))}
                                  </ul>
                                ) : typeof value === "object" ? (
                                  <ul className="space-y-1">
                                    {Object.entries(value).map(([k, v]) => (
                                      <li key={k} className="text-sm">
                                        <span className="font-medium">
                                          {k}:
                                        </span>{" "}
                                        {v}
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  value
                                )}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Render regular object specs
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProduct.specs &&
                    Object.entries(selectedProduct.specs).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                        >
                          <span className="block text-sm font-semibold text-gray-600 mb-1 capitalize">
                            {key.replace(/_/g, " ")}
                          </span>
                          <span className="text-gray-900 font-medium">
                            {Array.isArray(value) ? (
                              <ul className="space-y-1">
                                {value.map((item, i) => (
                                  <li key={i} className="text-sm">
                                    {typeof item === "object"
                                      ? Object.entries(item).map(([k, v]) => (
                                          <div key={k}>
                                            <span className="font-medium">
                                              {k}:
                                            </span>{" "}
                                            {v}
                                          </div>
                                        ))
                                      : item}
                                  </li>
                                ))}
                              </ul>
                            ) : typeof value === "object" ? (
                              <ul className="space-y-1">
                                {Object.entries(value).map(([k, v]) => (
                                  <li key={k} className="text-sm">
                                    <span className="font-medium">{k}:</span>{" "}
                                    {v}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              value
                            )}
                          </span>
                        </div>
                      )
                    )}
                </div>
              )}

              {/* Packaging */}
              {selectedProduct.packaging && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Packaging
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left p-3 font-semibold text-gray-700 border-b">
                            Description
                          </th>
                          <th className="text-left p-3 font-semibold text-gray-700 border-b">
                            Code
                          </th>
                          <th className="text-left p-3 font-semibold text-gray-700 border-b">
                            Contents
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedProduct.packaging.map((pack, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-3">{pack.description}</td>
                            <td className="p-3 font-medium">{pack.code}</td>
                            <td className="p-3">{pack.contents}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Category Products View
  if (selectedCategory) {
    const flattenedModels = getFlattenedModels(selectedCategory);

    return (
      <div className="min-h-screen bg-gradient-to-br pt-0 pb-28">
        <div className="max-w-6xl mx-auto px-6 mt-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className="
      group
      flex items-center gap-2
      px-4 py-2
      rounded-lg
      bg-[#E81729]
      text-white
      font-medium
      shadow-sm
      hover:bg-red-700
      transition-all
      mb-6
    "
          >
            <span className="transition-transform group-hover:-translate-x-0.5">
              ←
            </span>
            Back to Categories
          </button>
        </div>

        <div className="max-w-6xl mx-auto mt-4 px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              {getCategoryIcon(selectedCategory.category)}
              <h1 className="text-3xl font-bold text-gray-900">
                {selectedCategory.category}
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flattenedModels.map((product, index) => {
                const productHasImage = hasImage(product);
                const showImageError = imageError[product.catalog];
                const specsIsArray = isArraySpecs(product.specs);

                return (
                  <div
                    key={index}
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer hover:shadow-lg hover:border-[#E81729] transition-all duration-300"
                  >
                    {productHasImage ? (
                      <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-lg mb-4 p-4">
                        {showImageError ? (
                          <div className="flex flex-col items-center justify-center text-gray-400">
                            <ImageOff className="w-12 h-12 mb-2" />
                            <p className="text-xs">No image</p>
                          </div>
                        ) : (
                          <img
                            src={getImageUrl(product.img, product.model)}
                            alt={product.model || "Product"}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.onerror = null;
                              setImageError((prev) => ({
                                ...prev,
                                [product.catalog]: true,
                              }));
                            }}
                            onLoad={() =>
                              setImageError((prev) => ({
                                ...prev,
                                [product.catalog]: false,
                              }))
                            }
                          />
                        )}
                      </div>
                    ) : (
                      <div className="w-full h-48 flex flex-col items-center justify-center bg-gray-50 rounded-lg mb-4 p-4 text-gray-400">
                        <ImageOff className="w-12 h-12 mb-2" />
                        <p className="text-xs">No image available</p>
                      </div>
                    )}

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
                      {product.model}
                    </h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-600">Catalog:</span>
                      <span className="text-sm font-medium bg-gray-100 px-2 py-1 rounded">
                        {product.catalog}
                      </span>
                    </div>
                    {product.specs?.method && !specsIsArray && (
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600">Method:</span>
                        <span className="text-xs font-medium text-blue-600">
                          {product.specs.method}
                        </span>
                      </div>
                    )}
                    {specsIsArray && (
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600">Variants:</span>
                        <span className="text-xs font-medium text-green-600">
                          {product.specs.length} variants
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Details</span>
                      <span className="text-[#E81729] text-sm font-medium">
                        View →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Company View
  const companyHasImage = hasImage(company);
  const showCompanyImageError = imageError.company;

  return (
    <div className="min-h-screen bg-gradient-to-br  pt-0 pb-28">
      {/* Back Button */}

      <div className="max-w-6xl mx-auto px-6 mt-8">
        <button
          onClick={() => navigate(-1)}
          className="
      group
      flex items-center gap-2
      px-4 py-2
      rounded-lg
      bg-[#E81729]
      text-white
      font-medium
      shadow-sm
      hover:bg-red-700
      transition-all
      mb-6
    "
        >
          <span className="transition-transform group-hover:-translate-x-0.5">
            ←
          </span>
          Back to Products
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-10 px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          {/* Company Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            {companyHasImage && (
              <div className="w-64 h-64 flex items-center justify-center bg-gray-50 rounded-2xl p-6">
                {showCompanyImageError ? (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <ImageOff className="w-20 h-20 mb-4" />
                    <p className="text-sm">Logo not available</p>
                  </div>
                ) : (
                  <img
                    src={getImageUrl(company.img, company.name)}
                    alt={company.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      setImageError((prev) => ({ ...prev, company: true }));
                    }}
                    onLoad={() =>
                      setImageError((prev) => ({ ...prev, company: false }))
                    }
                  />
                )}
              </div>
            )}
            <div className={companyHasImage ? "flex-1" : "w-full"}>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {company.name}
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg">
                {company.description}
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="bg-gradient-to-r from-[#E81729] to-red-600 text-white px-6 py-3 rounded-full">
                  <span className="font-semibold">
                    {company.products.length} Product Categories
                  </span>
                </div>
                <div className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full">
                  <span className="font-semibold">
                    {company.products.reduce(
                      (total, cat) => total + getFlattenedModels(cat).length,
                      0
                    )}{" "}
                    Total Products
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Product Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {company.products.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 cursor-pointer hover:border-[#E81729] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-red-50 transition-colors">
                      {getCategoryIcon(category.category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {category.category}
                      </h3>
                      <p className="text-gray-600">
                        {getFlattenedModels(category).length} products
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Click to explore
                    </span>
                    <span className="text-[#E81729] font-medium group-hover:translate-x-2 transition-transform">
                      View Products →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailPage;
