import React, { useState, useEffect } from "react";
import { useInView } from "../../hooks/useInView";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { newproducts } from "../../data/constants";

const ProductsSlider = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());
    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileAnimationClasses = "opacity-100 translate-y-0";
  const desktopAnimationClasses = inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  const animationClasses = isMobile
    ? mobileAnimationClasses
    : desktopAnimationClasses;

  const handleCompanyClick = (company) => {
    navigate(`/company/${company.slug}`, { state: { company } });
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % newproducts.length;
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (activeIndex - 1 + newproducts.length) % newproducts.length;
    setActiveIndex(prevIndex);
  };



  return (
    <section
      id="companies"
      ref={ref}
      className="py-12 sm:py-16 md:py-20 relative z-10 bg-transparent"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-1000 ${animationClasses}`}
      >
        {/* Title + Arrows */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10">
          <div>
            <p className="text-[#E81729] font-bold uppercase mb-2 text-sm sm:text-base">
              OUR PARTNERS
            </p>
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-black">
              BRANDS & PRODUCTS
            </h2>
          </div>
          {!isMobile && (
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <button
                onClick={handlePrev}
                className="p-2 sm:p-3 border-2 border-[#E81729] rounded-full text-[#E81729] hover:bg-[#E81729] hover:text-white transition-colors shadow-md transform hover:scale-110 duration-300 bg-white"
              >
                <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 sm:p-3 border-2 border-[#E81729] rounded-full text-[#E81729] hover:bg-[#E81729] hover:text-white transition-colors shadow-md transform hover:scale-110 duration-300 bg-white"
              >
                <ArrowRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          )}
        </div>

        {/* Company Cards */}
        <div className="relative">
          <div className="mx-auto max-w-4xl">
            <div
              onClick={() => handleCompanyClick(newproducts[activeIndex])}
              className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 cursor-pointer transition-all duration-300 ${
                isMobile
                  ? "active:scale-95"
                  : "hover:shadow-2xl hover:-translate-y-2"
              }`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-6">
                <div className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center bg-gray-50 rounded-xl p-4">
                  <img
                    src={`/${newproducts[activeIndex].img}`}
                    alt={newproducts[activeIndex].name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/400x400/222/FFF?text=${newproducts[
                        activeIndex
                      ].name.replace(/\s/g, "+")}`;
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                    {newproducts[activeIndex].name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {newproducts[activeIndex].description}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-[#E81729] font-semibold border-2 border-[#E81729] px-6 py-3 rounded-full hover:bg-[#E81729] hover:text-white transition-colors">
                  Explore {newproducts[activeIndex].name} Products
                  <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </div>
        </div>
        {isMobile && (
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 border-2 border-[#E81729] rounded-full text-[#E81729] hover:bg-[#E81729] hover:text-white transition-colors shadow-md transform hover:scale-110 duration-300 bg-white"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 border-2 border-[#E81729] rounded-full text-[#E81729] hover:bg-[#E81729] hover:text-white transition-colors shadow-md transform hover:scale-110 duration-300 bg-white"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSlider;
