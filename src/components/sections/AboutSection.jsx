/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-self-compare */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "../../hooks/useInView";
import { slider } from "../../data/constants";
import { Beaker, TestTube, Microscope, Droplets, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import QuoteSection from "./QuoteSection";
import IntroAnimation from "./IntroAnimation";
import IntegratedServices from "./IntegratedServices";
import CoreValues1 from "./CoreValuesOverview";
import ServicesSection from "./ServicesSection";

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hasAnimated, setHasAnimated] = React.useState(true);
  const [, setCurrent] = useState(0);
  const [, setSelectedPartner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const loadedImagesRef = useRef(new Set());
  const imageElementsRef = useRef([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (inView) {
      setHasAnimated(true);
    } else {
      const timeout = setTimeout(() => {
        setHasAnimated(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [inView]);

  const titleAnimation = hasAnimated
    ? "opacity-100 translate-y-0"
    : "opacity-0 -translate-y-8";

  const textAnimation = hasAnimated
    ? "opacity-100 translate-x-0"
    : "opacity-0 -translate-x-8";

  const imageAnimation = hasAnimated
    ? "opacity-100 translate-x-0 scale-100"
    : "opacity-0 translate-x-8 scale-95";

  const cardAnimation = hasAnimated
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";


  const productLines = [
    {
      id: 1,
      title: "Laboratory & Hospital Consumables",
      description: "High-quality disposable medical supplies",
      icon: Beaker,
      gradient: "from-[#E81729] to-[#FF4D5A]",
      color: "bg-gradient-to-r from-[#E81729] to-[#FF4D5A]",
      delay: 100,
    },
    {
      id: 2,
      title: "Rapid Diagnostic Test kits",
      description: "Quick and accurate diagnostic solutions",
      icon: TestTube,
      gradient: "from-[#E81729] to-[#FF4D5A]",
      color: "bg-gradient-to-r from-[#E81729] to-[#FF4D5A]",
      delay: 200,
    },
    {
      id: 3,
      title: "Clinical Chemistry Analyzers & Reagents",
      description: "Advanced laboratory analysis systems",
      icon: Microscope,
      gradient: "from-[#E81729] to-[#FF4D5A]",
      color: "bg-gradient-to-r from-[#E81729] to-[#FF4D5A]",
      delay: 300,
    },
    {
      id: 4,
      title: "Hematology Solutions",
      description: "Comprehensive blood analysis products",
      icon: Droplets,
      gradient: "from-[#E81729] to-[#FF4D5A]",
      color: "bg-gradient-to-r from-[#E81729] to-[#FF4D5A]",
      delay: 400,
    },
    {
      id: 5,
      title: "Infection Prevention & Control",
      description: "Sterilization and protection products",
      icon: Shield,
      gradient: "from-[#E81729] to-[#FF4D5A]",
      color: "bg-gradient-to-r from-[#E81729] to-[#FF4D5A]",
      delay: 500,
    },
  ];


  const getItemsPerSlide = useCallback(() => {
    if (typeof window === "undefined") return 3; 
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  const [itemsPerSlide, setItemsPerSlide] = useState(3); 

  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };

    
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMounted, getItemsPerSlide]);

  const slides = [];
  for (let i = 0; i < slider.length; i += itemsPerSlide) {
    slides.push(slider.slice(i, i + itemsPerSlide));
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPartner(null);
    document.body.style.overflow = "auto";
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isModalOpen]);

  const handleItemInteraction = (itemId) => {
    if (typeof window === "undefined") return;

    if (window.innerWidth < 768) {
      setActiveItem(activeItem === itemId ? null : itemId);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleClickOutside = (e) => {
      if (
        window.innerWidth < 768 &&
        activeItem &&
        !e.target.closest(".product-line-item")
      ) {
        setActiveItem(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeItem]);

  const isMobile =
    isMounted && typeof window !== "undefined" && window.innerWidth < 768;
  const [loadedCount, setLoadedCount] = useState(0);
  const updateLoadedCount = useCallback(() => {
    setLoadedCount(loadedImagesRef.current.size);
  }, []);
  useEffect(() => {
    imageElementsRef.current = imageElementsRef.current.slice(0, 12);
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-12 md:py-24 relative z-10 bg-[#E1E8F0] min-h-[50vh]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* TITLE WITH GRADIENT TEXT */}
        <div
          className={`transition-all duration-700 delay-100 ease-out ${titleAnimation}`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E81729]/10 to-[#0A2647]/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 rounded-full bg-[#E81729] animate-pulse"></div>
            <p className="text-[#E81729] font-bold uppercase text-sm sm:text-base tracking-wider">
              About Elhoda
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 mb-8 sm:mb-16 leading-tight">
            BUILDING{" "}
            <span className="bg-gradient-to-r from-[#E81729] to-[#FF4D5A] bg-clip-text text-transparent">
              TRUST
            </span>{" "}
            THROUGH INNOVATION AND{" "}
            <span className="bg-gradient-to-r from-[#0A2647] to-[#1E3A8A] bg-clip-text text-transparent">
              PARTNERSHIPS
            </span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 md:gap-24 items-stretch">
          <div
            className={`lg:w-1/2 w-full transition-all duration-1000 ease-out ${imageAnimation} order-1 lg:order-1`}
          >
            <div className="relative h-72 sm:h-96 md:h-[500px] lg:h-full rounded-3xl sm:rounded-[2rem] overflow-hidden group shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img
                src="gad2.jpg"
                alt="EL HODA"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                key="main-image" 
              />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[220%] transition-transform duration-700"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent lg:hidden"></div>
            </div>
          </div>
          <div
            className={`lg:w-1/2 w-full transition-all duration-1000 delay-300 ease-out ${textAnimation} order-2 lg:order-2`}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between border border-gray-200 group transition-all duration-500">
              <div className="relative">
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#E81729] rounded-tl-lg"></div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#0A2647] rounded-br-lg"></div>

                <div className="text-base sm:text-lg text-gray-800 leading-relaxed space-y-6 sm:space-y-8">
                  <p className="group-hover:translate-x-1 transition-transform duration-300">
                    EL HODA is a premier Egyptian company serving the healthcare
                    sector for over two decades. Established in 2004, we have
                    positioned ourselves as a dynamic and rapidly expanding
                    leader within the medical industry, leveraging more than 20
                    years of experience.
                  </p>

                  <p className="group-hover:translate-x-1 transition-transform duration-300 delay-100">
                    Our strategy has been built upon cultivating strong,
                    long-term strategic international partnerships, initially
                    specializing in the distribution and supply of high-quality
                    laboratory essentials.
                  </p>

                  <p className="group-hover:translate-x-1 transition-transform duration-300 delay-200">
                    Demonstrating a robust commitment to operational excellence
                    and local industrial capabilities, we successfully expanded
                    into advanced local manufacturing in 2020. Our
                    state-of-the-art factory focuses on essential core product
                    lines critical to clinical and hospital settings:
                  </p>
                  <div className="mt-6 space-y-3">
                    {productLines.map((item) => {
                      const isActiveOnMobile = activeItem === item.id;
                      const isHoveredOnDesktop = hoveredItem === item.id;
                      const isActive = isMobile
                        ? isActiveOnMobile
                        : isHoveredOnDesktop;

                      return (
                        <div
                          key={item.id}
                          onMouseEnter={() =>
                            !isMobile && setHoveredItem(item.id)
                          }
                          onMouseLeave={() => !isMobile && setHoveredItem(null)}
                          onClick={() => handleItemInteraction(item.id)}
                          onTouchStart={() => handleItemInteraction(item.id)}
                          onTouchEnd={(e) => e.preventDefault()}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              handleItemInteraction(item.id);
                              e.preventDefault();
                            }
                          }}
                          tabIndex={0}
                          role="button"
                          aria-expanded={isActiveOnMobile}
                          aria-label={`${item.title}. ${isActiveOnMobile ? "Expanded" : "Collapsed"}. Click to ${isActiveOnMobile ? "collapse" : "expand"}`}
                          className={`product-line-item relative bg-white rounded-xl border transition-all duration-300 ${
                            isActive
                              ? "border-transparent shadow-lg scale-[1.02]"
                              : "border-gray-200 hover:border-transparent"
                          } ${
                            hasAnimated
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 translate-x-4"
                          }`}
                          style={{
                            transitionDelay: `${item.delay}ms`,
                            transitionProperty: "all",
                          }}
                        >
                          {/* Animated background gradient */}
                          <div
                            className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.gradient} ${
                              isActive ? "opacity-10" : "opacity-0"
                            } transition-opacity duration-300`}
                          ></div>

                          {/* Glow effect */}
                          <div
                            className={`absolute -inset-0.5 rounded-xl blur opacity-0 transition-opacity duration-300 ${item.color} ${
                              isActive ? "opacity-20" : ""
                            }`}
                          ></div>

                          <div className="relative z-10 flex items-start gap-4 p-4">
                            {/* Animated Icon Container */}
                            <div
                              className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                isActive
                                  ? `${item.color} text-white shadow-lg scale-110`
                                  : "bg-gray-50 text-gray-600"
                              }`}
                            >
                              <item.icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1">
                                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                                    {item.title}
                                  </h3>

                                  {/* Description */}
                                  <p
                                    className={`mt-1 text-xs sm:text-sm text-gray-600 transition-all duration-300 ${
                                      !isMobile
                                        ? "opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1"
                                        : isActive
                                          ? "opacity-100 max-h-20 mt-2"
                                          : "opacity-0 max-h-0 overflow-hidden"
                                    }`}
                                  >
                                    {item.description}
                                  </p>

                                  {/* Mobile-only indicator */}
                                  {isMobile && (
                                    <div className="flex items-center justify-between mt-2">
                                      <span className="text-xs text-gray-500">
                                        {isActive
                                          ? "Tap to collapse"
                                          : "Tap for details"}
                                      </span>
                                      <span
                                        className={`transition-transform duration-300 ${
                                          isActive ? "rotate-180" : ""
                                        }`}
                                      >
                                        ▼
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              {/* Animated Progress Bar */}
                              <div className="mt-3">
                                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full rounded-full ${item.color} transition-all duration-500 ease-out ${
                                      isActive ? "w-full" : "w-0"
                                    }`}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {isMobile && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-xs text-blue-800 flex items-center gap-2">
                        <span className="text-blue-500">💡</span>
                        Tap on any product line above to see details
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {/* CTA Button */}
              <div className="mt-8 sm:mt-10 md:mt-12">
                <Link
                  to="/about/overview"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#E81729] to-[#FF4D5A] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] w-full text-center overflow-hidden"
                >
                  <span className="relative z-10 text-sm sm:text-base">
                    Explore Our Corporate Profile
                  </span>
                  <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A2647] to-[#1E3A8A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>

                <p className="text-xs sm:text-sm text-gray-600 mt-3 text-center animate-pulse">
                  Discover our strategy, values, partnerships, and growth
                  journey
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ================= QUALITY & STRATEGY ================= */}
        <div className="mt-20 sm:mt-24 md:mt-32 mb-16 sm:mb-20 md:mb-24">
          <div
            className={`transition-all duration-1000 delay-500 ease-out ${cardAnimation}`}
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
                OUR{" "}
                <span className="bg-gradient-to-r from-[#E81729] to-[#FF4D5A] bg-clip-text text-transparent">
                  FACTORY
                </span>
              </h2>

              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#E81729] to-[#0A2647] mx-auto rounded-full mb-6 sm:mb-8"></div>

              <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg px-4 sm:px-0">
                Our dedication to ensuring product reliability and safety is
                paramount, underpinned by strict adherence to the
                internationally recognized ISO 13485 standards and robust Good
                Manufacturing Practice (GMP) principles.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {Array.from({ length: 12 }, (_, i) => {
                const index = i + 1;

                return (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-gray-100 min-h-[200px] sm:min-h-[256px] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={`/factory${index}.jpg`}
                      alt={`Factory ${index}`}
                      className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105 opacity-100"
                      loading="lazy"
                      decoding="async"
                      ref={(el) => {
                        if (el && !loadedImagesRef.current.has(index)) {
                          if (el.complete) {
                            loadedImagesRef.current.add(index);
                            updateLoadedCount();
                          } else {
                            el.onload = () => {
                              loadedImagesRef.current.add(index);
                              updateLoadedCount();
                            };
                          }
                        }
                      }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      importance={index <= 3 ? "high" : "low"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                );
              })}
            </div>
            {loadedCount < 12 && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Loading factory images... {loadedCount} of 12
                </p>
                <div className="w-full max-w-md mx-auto h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                  <div
                    className="h-full bg-gradient-to-r from-[#E81729] to-[#0A2647] transition-all duration-300"
                    style={{
                      width: `${(loadedCount / 12) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <ServicesSection />
      <IntroAnimation />
      <QuoteSection />
      <CoreValues1 />
      <IntegratedServices />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        /* Prevent text selection on mobile taps */
        .product-line-item {
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }

        /* Better touch feedback */
        @media (max-width: 768px) {
          .product-line-item:active {
            transform: scale(0.98);
          }
        }

        /* FIX: Ensure images maintain aspect ratio */
        img {
          content-visibility: auto;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
