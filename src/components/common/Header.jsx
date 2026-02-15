/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ChevronRight,
  List,
  ExternalLink,
} from "lucide-react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import {
  navLinks,
  serviceLinks,
  aboutLinks,
  partnerLinks,
  productsLinks,
  eventsLinks,
} from "../../data/constants";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobilePartnersOpen, setIsMobilePartnersOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isMobileEventsOpen, setIsMobileEventsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isSectionsOpen, setIsSectionsOpen] = useState(false);

  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const partnersRef = useRef(null);
  const productsRef = useRef(null);
  const eventsRef = useRef(null);
  const sectionsRef = useRef(null);
  const mobileServicesRef = useRef(null);
  const mobileAboutRef = useRef(null);
  const mobilePartnersRef = useRef(null);
  const mobileProductsRef = useRef(null);
  const mobileEventsRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const scrollPos = useScrollPosition();

  const scrolledClass =
    scrollPos > 50
      ? "shadow-xl py-2 sm:py-3 backdrop-blur-md bg-white"
      : "py-3 sm:py-4 backdrop-blur-md bg-white";

  /* Close dropdowns when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setIsAboutOpen(false);
      }
      if (partnersRef.current && !partnersRef.current.contains(event.target)) {
        setIsPartnersOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
      if (eventsRef.current && !eventsRef.current.contains(event.target)) {
        setIsEventsOpen(false);
      }
      if (sectionsRef.current && !sectionsRef.current.contains(event.target)) {
        setIsSectionsOpen(false);
      }
      if (
        mobileServicesRef.current &&
        !mobileServicesRef.current.contains(event.target)
      ) {
        setIsMobileServicesOpen(false);
      }
      if (
        mobileAboutRef.current &&
        !mobileAboutRef.current.contains(event.target)
      ) {
        setIsMobileAboutOpen(false);
      }
      if (
        mobilePartnersRef.current &&
        !mobilePartnersRef.current.contains(event.target)
      ) {
        setIsMobilePartnersOpen(false);
      }
      if (
        mobileProductsRef.current &&
        !mobileProductsRef.current.contains(event.target)
      ) {
        setIsMobileProductsOpen(false);
      }
      if (
        mobileEventsRef.current &&
        !mobileEventsRef.current.contains(event.target)
      ) {
        setIsMobileEventsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Handle desktop services click */
  const handleServicesClick = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
    setIsAboutOpen(false);
    setIsPartnersOpen(false);
    setIsProductsOpen(false);
  };

  /* Experts image click */
  const handleExpertsImageClick = () => {
    if (showPopup) return;

    setShowPopup(true);

    timeoutRef.current = setTimeout(() => {
      setShowPopup(false);
      navigate("/about/overview");
    }, 2000);
  };

  /* Handle desktop about click */
  const handleAboutClick = (e) => {
    e.preventDefault();
    setIsAboutOpen(!isAboutOpen);
    setIsServicesOpen(false);
    setIsPartnersOpen(false);
    setIsProductsOpen(false);
  };

  /* Handle desktop partners click */
  const handlePartnersClick = (e) => {
    e.preventDefault();
    setIsPartnersOpen(!isPartnersOpen);
    setIsServicesOpen(false);
    setIsAboutOpen(false);
    setIsProductsOpen(false);
  };

  /* Handle desktop products click */
  const handleProductsClick = (e) => {
    e.preventDefault();
    setIsProductsOpen(!isProductsOpen);
    setIsServicesOpen(false);
    setIsAboutOpen(false);
    setIsPartnersOpen(false);
    setIsEventsOpen(false);
  };

  /* Handle desktop events click */
  const handleEventsClick = (e) => {
    e.preventDefault();
    setIsEventsOpen(!isEventsOpen);
    setIsServicesOpen(false);
    setIsAboutOpen(false);
    setIsPartnersOpen(false);
    setIsProductsOpen(false);
  };

  /* Handle mobile services click */
  const handleMobileServicesClick = (e) => {
    e.preventDefault();
    setIsMobileServicesOpen(!isMobileServicesOpen);
    setIsMobileAboutOpen(false);
    setIsMobilePartnersOpen(false);
    setIsMobileProductsOpen(false);
  };

  /* Handle mobile about click */
  const handleMobileAboutClick = (e) => {
    e.preventDefault();
    setIsMobileAboutOpen(!isMobileAboutOpen);
    setIsMobileServicesOpen(false);
    setIsMobilePartnersOpen(false);
    setIsMobileProductsOpen(false);
  };

  /* Handle mobile partners click */
  const handleMobilePartnersClick = (e) => {
    e.preventDefault();
    setIsMobilePartnersOpen(!isMobilePartnersOpen);
    setIsMobileServicesOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileProductsOpen(false);
  };

  /* Handle mobile products click */
  const handleMobileProductsClick = (e) => {
    e.preventDefault();
    setIsMobileProductsOpen(!isMobileProductsOpen);
    setIsMobileServicesOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobilePartnersOpen(false);
    setIsMobileEventsOpen(false);
  };

  /* Handle mobile events click */
  const handleMobileEventsClick = (e) => {
    e.preventDefault();
    setIsMobileEventsOpen(!isMobileEventsOpen);
    setIsMobileServicesOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobilePartnersOpen(false);
    setIsMobileProductsOpen(false);
  };

  const handleNavigation = (href, isMobile = false) => {
    if (isMobile) setIsOpen(false);

    // Handle section navigation
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");

      // Always navigate to home with state
      navigate("/", {
        state: { scrollTo: sectionId },
      });

      // Close dropdowns
      setIsServicesOpen(false);
      setIsAboutOpen(false);
      setIsPartnersOpen(false);
      setIsProductsOpen(false);
      setIsEventsOpen(false);
      setIsSectionsOpen(false);
      return;
    }

    // Normal route navigation
    navigate(href);

    if (!isMobile) {
      setIsServicesOpen(false);
      setIsAboutOpen(false);
      setIsPartnersOpen(false);
      setIsProductsOpen(false);
      setIsEventsOpen(false);
      setIsSectionsOpen(false);
    }
  };


  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 mx-4 max-w-md animate-fade-in">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Explore Our Corporate Profile
              </h3>

              <p className="text-gray-600 mb-5">
                Taking you to our company overview...
              </p>

              {/* Progress bar */}
              <div className="w-full h-1 bg-gray-200 rounded overflow-hidden">
                <div className="h-full bg-[#d71920] animate-progress" />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 rounded-b-xl px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-300 ${scrolledClass}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex items-center bg-white rounded-lg p-2 z-10">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/logo.png"
                alt="ELHODA Logo"
                className="h-16 sm:h-20 md:h-20 w-auto"
              />
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium relative">
            {navLinks.map((link) => {
              if (link.name === "Our Services") {
                return (
                  <div key={link.name} className="relative" ref={servicesRef}>
                    <button
                      onClick={handleServicesClick}
                      className={`flex items-center font-semibold transition-colors ${
                        isServicesOpen
                          ? "text-[#d71920]"
                          : "text-gray-700 hover:text-[#d71920]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Services Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in">
                        <div className="p-2">
                          {serviceLinks.map((service) => (
                            <a
                              key={service.name}
                              href={service.path}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(service.path);
                              }}
                              className="flex flex-col p-3 rounded-lg hover:bg-red-50 transition-all duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-800 text-sm group-hover:text-[#d71920]">
                                  {service.name}
                                </span>
                                <div className="h-2 w-2 rounded-full bg-[#d71920] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "About Us") {
                return (
                  <div key={link.name} className="relative" ref={aboutRef}>
                    <button
                      onClick={handleAboutClick}
                      className={`flex items-center font-semibold transition-colors ${
                        isAboutOpen
                          ? "text-[#d71920]"
                          : "text-gray-700 hover:text-[#d71920]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-200 ${
                          isAboutOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isAboutOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in z-50">
                        <div className="p-2">
                          {aboutLinks.map((about) => (
                            <a
                              key={about.name}
                              href={about.path}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(about.path);
                              }}
                              className="flex flex-col p-3 rounded-lg hover:bg-red-50 transition-all duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-800 text-sm group-hover:text-[#d71920]">
                                  {about.name}
                                </span>
                                <div className="h-2 w-2 rounded-full bg-[#d71920] opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "Partners") {
                return (
                  <div key={link.name} className="relative" ref={partnersRef}>
                    <button
                      onClick={handlePartnersClick}
                      className={`flex items-center font-semibold transition-colors ${
                        isPartnersOpen
                          ? "text-[#d71920]"
                          : "text-gray-700 hover:text-[#d71920]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-200 ${
                          isPartnersOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isPartnersOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in z-50">
                        <div className="p-2">
                          {partnerLinks.map((partner) => (
                            <a
                              key={partner.name}
                              href={partner.path}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(partner.path);
                              }}
                              className="flex flex-col p-3 rounded-lg hover:bg-red-50 transition-all duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-800 text-sm group-hover:text-[#d71920]">
                                  {partner.name}
                                </span>
                                <div className="h-2 w-2 rounded-full bg-[#d71920] opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "Products") {
                return (
                  <div key={link.name} className="relative" ref={productsRef}>
                    <button
                      onClick={handleProductsClick}
                      className={`flex items-center font-semibold transition-colors ${
                        isProductsOpen
                          ? "text-[#d71920]"
                          : "text-gray-700 hover:text-[#d71920]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-200 ${
                          isProductsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isProductsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in z-50">
                        <div className="p-2">
                          {productsLinks.map((product) => (
                            <a
                              key={product.name}
                              href={product.path}
                              target={product.target || "_self"}
                              rel={
                                product.target === "_blank"
                                  ? "noopener noreferrer"
                                  : ""
                              }
                              onClick={(e) => {
                                if (
                                  !product.target ||
                                  product.target === "_self"
                                ) {
                                  e.preventDefault();
                                  handleNavigation(product.path);
                                }
                              }}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-red-50 transition-all duration-200 group"
                            >
                              <span className="font-semibold text-gray-800 text-sm group-hover:text-[#d71920]">
                                {product.name}
                              </span>
                              {product.target === "_blank" && (
                                <ExternalLink
                                  size={14}
                                  className="text-gray-400 group-hover:text-[#d71920]"
                                />
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "Events") {
                return (
                  <div key={link.name} className="relative" ref={eventsRef}>
                    <button
                      onClick={handleEventsClick}
                      className={`flex items-center font-semibold transition-colors ${
                        isEventsOpen
                          ? "text-[#d71920]"
                          : "text-gray-700 hover:text-[#d71920]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-200 ${
                          isEventsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isEventsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in z-50">
                        <div className="p-2">
                          {eventsLinks.map((eventLink) => (
                            <a
                              key={eventLink.name}
                              href={eventLink.path}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(eventLink.path);
                              }}
                              className="flex flex-col p-3 rounded-lg hover:bg-red-50 transition-all duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-800 text-sm group-hover:text-[#d71920]">
                                  {eventLink.name}
                                </span>
                                <div className="h-2 w-2 rounded-full bg-[#d71920] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Regular nav links (Home, Events, Contact Us, etc.)
              return (
                <button
                  key={link.name}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.href);
                  }}
                  className="font-semibold text-gray-700 hover:text-[#d71920] transition-colors"
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-10">
            {/* Phone */}
            <div className="hidden lg:flex flex-col text-sm font-semibold">
              <span className="text-[#d71920] text-xs">Let's Talk</span>
              <div className="flex items-center">
                <Phone size={16} className="text-[#d71920] mr-2" />
                <span>+2 20228581555</span>
              </div>
            </div>

            {/* Experts Image */}
            <div className="relative group hidden lg:block">
              <img
                src="/yearsexperts.png"
                alt="Experts"
                onClick={handleExpertsImageClick}
                className="w-[100px] h-[100px] object-contain cursor-pointer hover:scale-110 transition"
              />

              <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition">
                Explore Our History
              </div>
            </div>

            {/* Mobile menu */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-xl z-40">
            {navLinks.map((link) => {
              if (link.name === "Our Services") {
                return (
                  <div key={link.name} ref={mobileServicesRef}>
                    <button
                      onClick={handleMobileServicesClick}
                      className="relative w-full py-3 text-gray-700 hover:bg-gray-50 font-medium border-b border-gray-100"
                    >
                      <span className="block text-center">{link.name}</span>
                      <ChevronRight
                        size={16}
                        className={`absolute right-6 top-1/2 -translate-y-1/2 transition-transform duration-200 ${
                          isMobileServicesOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Services Dropdown */}
                    {isMobileServicesOpen && (
                      <div className="bg-gray-50 border-t border-gray-100 animate-fade-in">
                        {serviceLinks.map((service) => (
                          <button
                            key={service.name}
                            onClick={() => handleNavigation(service.path, true)}
                            className="block w-full text-left py-3 pl-10 text-gray-600 hover:bg-gray-100 hover:text-[#d71920] text-sm border-b border-gray-100 last:border-b-0"
                          >
                            <div className="font-medium flex items-center justify-between">
                              {service.name}
                              <div className="h-2 w-2 rounded-full bg-[#d71920] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "About Us") {
                return (
                  <div key={link.name} ref={mobileAboutRef}>
                    <button
                      onClick={handleMobileAboutClick}
                      className="relative w-full py-3 text-gray-700 hover:bg-gray-50 font-medium border-b border-gray-100"
                    >
                      <span className="block text-center">{link.name}</span>
                      <ChevronRight
                        size={16}
                        className={`absolute right-6 top-1/2 -translate-y-1/2 transition-transform duration-200 ${
                          isMobileAboutOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {isMobileAboutOpen && (
                      <div className="bg-gray-50 border-t border-gray-100 animate-fade-in">
                        {aboutLinks.map((about) => (
                          <button
                            key={about.name}
                            onClick={() => handleNavigation(about.path, true)}
                            className="block w-full text-left py-3 pl-10 text-gray-600 hover:bg-gray-100 hover:text-[#d71920] text-sm border-b border-gray-100 last:border-b-0"
                          >
                            {about.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "Partners") {
                return (
                  <div key={link.name} ref={mobilePartnersRef}>
                    <button
                      onClick={handleMobilePartnersClick}
                      className="relative w-full py-3 text-gray-700 hover:bg-gray-50 font-medium border-b border-gray-100"
                    >
                      <span className="block text-center">{link.name}</span>
                      <ChevronRight
                        size={16}
                        className={`absolute right-6 top-1/2 -translate-y-1/2 transition-transform duration-200 ${
                          isMobilePartnersOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {isMobilePartnersOpen && (
                      <div className="bg-gray-50 border-t border-gray-100 animate-fade-in">
                        {partnerLinks.map((partner) => (
                          <button
                            key={partner.name}
                            onClick={() => handleNavigation(partner.path, true)}
                            className="block w-full text-left py-3 pl-10 text-gray-600 hover:bg-gray-100 hover:text-[#d71920] text-sm border-b border-gray-100 last:border-b-0"
                          >
                            {partner.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "Products") {
                return (
                  <div key={link.name} ref={mobileProductsRef}>
                    <button
                      onClick={handleMobileProductsClick}
                      className="relative w-full py-3 text-gray-700 hover:bg-gray-50 font-medium border-b border-gray-100"
                    >
                      <span className="block text-center">{link.name}</span>
                      <ChevronRight
                        size={16}
                        className={`absolute right-6 top-1/2 -translate-y-1/2 transition-transform duration-200 ${
                          isMobileProductsOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {isMobileProductsOpen && (
                      <div className="bg-gray-50 border-t border-gray-100 animate-fade-in">
                        {productsLinks.map((product) => (
                          <button
                            key={product.name}
                            onClick={() => {
                              if (product.target === "_blank") {
                                window.open(product.path, "_blank");
                              } else {
                                handleNavigation(product.path, true);
                              }
                            }}
                            className="flex items-center justify-between w-full text-left py-3 pl-10 text-gray-600 hover:bg-gray-100 hover:text-[#d71920] text-sm border-b border-gray-100 last:border-b-0"
                          >
                            <span className="font-medium">{product.name}</span>
                            {product.target === "_blank" && (
                              <ExternalLink
                                size={12}
                                className="mr-4 text-gray-400"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "Events") {
                return (
                  <div key={link.name} ref={mobileEventsRef}>
                    <button
                      onClick={handleMobileEventsClick}
                      className="relative w-full py-3 text-gray-700 hover:bg-gray-50 font-medium border-b border-gray-100"
                    >
                      <span className="block text-center">{link.name}</span>
                      <ChevronRight
                        size={16}
                        className={`absolute right-6 top-1/2 -translate-y-1/2 transition-transform duration-200 ${
                          isMobileEventsOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {isMobileEventsOpen && (
                      <div className="bg-gray-50 border-t border-gray-100 animate-fade-in">
                        {eventsLinks.map((eventLink) => (
                          <button
                            key={eventLink.name}
                            onClick={() =>
                              handleNavigation(eventLink.path, true)
                            }
                            className="block w-full text-left py-3 pl-10 text-gray-600 hover:bg-gray-100 hover:text-[#d71920] text-sm border-b border-gray-100 last:border-b-0"
                          >
                            {eventLink.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Regular mobile nav links
              return (
                <button
                  key={link.name}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.href, true);
                  }}
                  className="block w-full text-center py-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                >
                  {link.name}
                </button>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
