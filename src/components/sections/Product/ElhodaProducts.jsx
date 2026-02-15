import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp, ArrowDown, ChevronRight, Sparkles } from "lucide-react";

// Product navigation links
export const productsLinks = [
  { name: "In Vitro Diagnostics (IVD)", path: "/products/ivd" },
  { name: "Rapid Test", path: "/rapid/test/products" },
  { name: "IPC Solutions", path: "/products/ipc" },
  { name: "Medical Consumables", path: "/medical-consumables" },
];

const ElhodaProducts = () => {
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = React.useState(true);
  const [hoveredCard, setHoveredCard] = React.useState(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleNavigateToCategory = (path) => {
    navigate(path);
  };

  const handleScrollAction = () => {
    window.scrollTo({
      top: isAtTop ? document.documentElement.scrollHeight : 0,
      behavior: "smooth",
    });
  };

  // Product categories data - simplified for UI
  const productCategories = [
    {
      id: 1,
      name: "Rapid Tests",
      description: "Point-of-care diagnostic solutions",
      items: [
        "COVID-19 Tests",
        "Influenza A/B",
        "Streptococcus A",
        "Mononucleosis",
        "HCG Pregnancy",
      ],
      color: "from-red-500 to-red-700", // Enhanced red gradient
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
      icon: "⚡",
      features: [
        "Fast Results",
        "Easy to Use",
        "High Accuracy",
        "Point-of-Care",
      ],
      link: "/products/rapid-test",
    },
    {
      id: 2,
      name: "In Vitro Diagnostics (IVD)",
      description: "Comprehensive diagnostic solutions",
      items: [
        "Clinical Chemistry",
        "Hematology",
        "Immunoassays",
        "Coagulation",
      ],
      color: "from-red-500 to-red-600", // Changed from blue to red
      bgColor: "bg-red-50", // Changed from blue-50 to red-50
      borderColor: "border-red-100", // Changed from blue-100 to red-100
      icon: "🧪",
      features: [
        "Automated Systems",
        "High Throughput",
        "Precision",
        "Reliability",
      ],
      link: "/products/ivd",
    },
    {
      id: 3,
      name: "IPC Solutions",
      description: "Infection Prevention & Control",
      items: ["Sterilization", "Disinfection", "Cleaning", "Monitoring"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
      icon: "🦠",
      features: ["Hospital Grade", "Compliance", "Safety", "Documentation"],
      link: "/products/ipc",
    },
    {
      id: 4,
      name: "Medical Consumables",
      description: "Essential medical supplies",
      items: ["Disposables", "PPE", "Catheters", "Wound Care"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      icon: "🩺",
      features: ["Sterile", "Single-Use", "Quality", "Variety"],
      link: "/products/medical-consumables",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-red-50/20 overflow-hidden">
      {" "}
      {/* Changed to red-50 */}
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />{" "}
        {/* Changed to red-500 */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />{" "}
        {/* Changed to red-500 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-red-500/10 rounded-full blur-3xl" />{" "}
        {/* Changed to red */}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-12">
        {/* Breadcrumb Navigation - Non-clickable path */}
        <div className="mt-20 mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="text-gray-600">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-semibold text-gray-900">ELHODA Products</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="mb-16 md:mb-24">
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-red-900 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16">
            {" "}
            {/* Changed to red-900 */}
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-red-500/20 to-transparent rounded-full -translate-y-32 translate-x-32" />{" "}
            {/* Changed to red-500 */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-500/20 to-transparent rounded-full translate-y-32 -translate-x-32" />{" "}
            {/* Changed to red-500 */}
            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10">
                  {" "}
                  {/* Changed to red */}
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white">
                    Comprehensive Healthcare Solutions
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-white">ELHODA </span>
                  <span className="text-transparent bg-gradient-to-r from-white via-red-200 to-red-300 bg-clip-text">
                    {" "}
                    {/* Changed to red gradient */}
                    PRODUCTS
                  </span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
                  Leading provider of diagnostic solutions, infection control
                  systems, and medical supplies trusted by healthcare facilities
                  worldwide.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleBackToHome}
                    className="inline-flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                  >
                    ← Back to Home
                  </button>
                </div>
              </div>

              {/* Category Preview Cards */}
              <div className="flex-1 grid grid-cols-2 gap-4 max-w-lg">
                {productCategories.map((category, i) => (
                  <div
                    key={i}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    onClick={() => handleNavigateToCategory(category.link)}
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-white font-bold text-base mb-1">
                      {category.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories Grid */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Product Categories
            </h2>
            <div className="text-sm text-gray-500">
              {productCategories.length} comprehensive categories
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={category.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-3xl p-1 transition-all duration-500 ${
                  hoveredCard === index
                    ? "bg-gradient-to-br " + category.color
                    : "bg-gradient-to-br from-gray-100 to-gray-50"
                }`}
              >
                <div
                  className={`relative bg-white rounded-[1.25rem] p-6 h-full overflow-hidden transition-all duration-300 ${
                    hoveredCard === index ? "shadow-2xl" : "shadow-md"
                  }`}
                >
                  {/* Category Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-2xl">{category.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {category.name}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <button
                      onClick={() => handleNavigateToCategory(category.link)}
                      className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                    >
                      View Products
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Hover Effect Overlay */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50 pointer-events-none" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Floating Scroll Button */}
        <div className="flex flex-col items-center justify-center gap-8 mt-20 pb-16">
          <button
            onClick={handleScrollAction}
            className="fixed bottom-8 right-8 z-50 p-4 bg-white/95 backdrop-blur-sm text-brand-black border border-gray-200/60 rounded-2xl shadow-2xl hover:bg-brand-red hover:text-white transition-all duration-300 group hover:shadow-brand-red/30 hover:scale-110"
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
    </section>
  );
};

export default ElhodaProducts;
