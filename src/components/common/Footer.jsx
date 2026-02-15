/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback, useMemo } from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Phone,
  ChevronUp,
  Download,
  MapPin,
  Mail,
  Globe,
  Building,
  Factory,
  MessageCircle,
} from "lucide-react";

// Constants
const COMPANY_INFO = {
  name: "Elhoda Trade",
  email: "ELHODA@ELHODATRADE.COM",
  phoneBase: "+2 2022858155",
  year: new Date().getFullYear(),
  tagline: "Innovation • Quality • Sustainability",
};

const LOCATIONS = {
  headquarters: {
    title: "Headquarters",
    address:
      "28 Food & Pharmaceutical Region, Zone C, Badr Industrial City, Cairo, Egypt.",
    icon: Building,
  },
  manufacturing: {
    title: "Manufacturing Facilities",
    address:
      "Plots 28, 29 & 30 – Food & Pharmaceutical Region, Zone C, Badr Industrial City.",
    icon: Factory,
  },
};

const PHONE_NUMBERS = [
  { digit: "5", full: "+220228581555" },
  { digit: "6", full: "+220228581556" },
  { digit: "7", full: "+20228581557" },
  { digit: "8", full: "+20228581558" },
  { digit: "9", full: "+220228581559" },
];

const SOCIAL_LINKS = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/ElhodaTradeEg/",
    color: "hover:bg-blue-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/elhoda/",
    color: "hover:bg-blue-700",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/elhodatradeeg/",
    color: "hover:bg-pink-600",
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

// Sub-components for better organization
const ContactInfo = ({
  icon: Icon,
  title,
  description,
  href,
  onClick,
  isButton = false,
}) => {
  const Content = () => (
    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900/30 to-gray-800/20 rounded-xl hover:from-gray-800/40 hover:to-gray-700/30 transition-all duration-200 group border border-gray-800/50 hover:border-gray-700/50">
      <div className="p-3 bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-lg group-hover:from-red-900/30 group-hover:to-red-800/20 shadow-inner">
        <Icon size={20} className="text-[#E81729]" />
      </div>
      <div className="text-left">
        {title && <p className="text-gray-400 text-sm mb-1">{title}</p>}
        <p className="text-white font-medium group-hover:text-[#E81729] transition-colors">
          {description}
        </p>
      </div>
    </div>
  );

  if (isButton) {
    return (
      <button onClick={onClick} className="w-full text-left">
        <Content />
      </button>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Content />
    </a>
  );
};

const PhoneDropdown = ({ isOpen, onClose, phoneNumbers }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed lg:absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-auto lg:left-auto lg:translate-x-0 lg:translate-y-0 lg:relative lg:mt-2 w-[90vw] max-w-md lg:w-[120%] xl:w-[140%] 2xl:w-[160%] lg:max-w-2xl bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
        <div className="px-6 py-4 bg-gradient-to-r from-gray-800/90 to-gray-900/90 text-base text-gray-300 font-medium border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-900/20 rounded-lg">
              <Phone size={20} className="text-[#E81729]" />
            </div>
            <div>
              <div className="text-white font-medium">Select a Phone Line</div>
              <div className="text-gray-400 text-xs mt-1">
                Available customer service lines
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          {phoneNumbers.map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone.full}`}
              className="flex justify-between items-center px-5 py-4 hover:bg-gray-800/50 transition-all duration-200 border-b border-gray-800/30 last:border-b-0 group hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-[#E81729]/20 group-hover:to-red-900/10 transition-all duration-300 shadow-md group-hover:shadow-red-900/20">
                  <span className="text-gray-300 group-hover:text-[#E81729] font-bold text-lg">
                    {phone.digit}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white group-hover:text-[#E81729] transition-colors text-lg font-medium">
                    {COMPANY_INFO.phoneBase}
                    <span className="text-[#E81729] font-bold ml-1">
                      {phone.digit}
                    </span>
                  </span>
                  <span className="text-gray-500 text-sm mt-1">
                    Line {phone.digit} • Direct connection
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-xs px-3 py-1.5 bg-gray-800/50 rounded-lg text-gray-400 group-hover:bg-[#E81729] group-hover:text-white transition-all">
                  Tap to Call
                </span>
                <div className="p-2 bg-gray-800/30 rounded-lg group-hover:bg-[#E81729] transition-colors">
                  <Phone
                    size={16}
                    className="text-gray-400 group-hover:text-white"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="px-6 py-3 bg-gradient-to-r from-gray-900/80 to-gray-950/80 border-t border-gray-800 text-xs text-gray-500">
          <div className="flex items-center justify-between">
            <span>All lines available 24/7</span>
            <span className="text-[#E81729]/70">• Quick Connect •</span>
          </div>
        </div>
      </div>
    </>
  );
};

const LocationCard = ({ location }) => {
  const { title, address, icon: Icon } = location;

  return (
    <div className="group flex items-start gap-4 p-4 bg-gradient-to-r from-gray-900/20 to-transparent rounded-xl hover:from-gray-800/30 hover:to-gray-900/10 transition-all duration-200 border border-transparent hover:border-gray-800/30">
      <div className="p-2.5 bg-gray-900/50 rounded-lg group-hover:bg-[#E81729]/10 transition-colors">
        <Icon size={18} className="text-gray-400 group-hover:text-[#E81729]" />
      </div>
      <div>
        <p className="text-gray-300 font-medium mb-2 group-hover:text-white transition-colors">
          {title}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">{address}</p>
      </div>
    </div>
  );
};

const SocialCard = ({ social }) => {
  const { icon: Icon, label, href, color } = social;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex flex-col items-center p-4 bg-gradient-to-b from-gray-900/30 to-gray-950/30 rounded-xl hover:from-gray-800/50 hover:to-gray-900/50 transition-all duration-200 group border border-gray-800/50 hover:border-gray-700/50"
      aria-label={`Follow us on ${label}`}
    >
      <div
        className={`p-3 bg-gray-900 rounded-full mb-2 ${color} transition-colors duration-300`}
      >
        <Icon size={20} className="text-gray-300 group-hover:text-white" />
      </div>
      <span className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors">
        {label}
      </span>
    </a>
  );
};

const Footer = () => {
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);

  const handlePhoneToggle = useCallback(() => {
    setIsPhoneDropdownOpen((prev) => !prev);
  }, []);

  const handleClosePhoneDropdown = useCallback(() => {
    setIsPhoneDropdownOpen(false);
  }, []);

  const handlePortfolioDownload = useCallback(() => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1gyUoa4E5rFeiuPnv1Bm-kW3imSWvz-cp",
      "_blank",
    );
  }, []);

  const sectionClasses = {
    header: "text-white font-semibold text-xl mb-4 flex items-center gap-3",
    description: "text-gray-400 leading-relaxed text-sm",
    card: "bg-gradient-to-r from-gray-900/30 to-gray-800/20 rounded-xl hover:from-gray-800/40 hover:to-gray-700/30 transition-all duration-200",
  };

  const memoizedLocations = useMemo(() => Object.values(LOCATIONS), []);
  const memoizedSocialLinks = useMemo(() => SOCIAL_LINKS, []);
  const memoizedLegalLinks = useMemo(() => LEGAL_LINKS, []);

  return (
    <footer className="bg-gradient-to-b from-black to-gray-950 text-brand-light pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* TOP SECTION: MAIN CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* LOCATION SECTION */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-lg shadow-inner">
                <MapPin className="text-[#E81729]" size={22} />
              </div>
              <h3 className={sectionClasses.header}>Our Locations</h3>
            </div>

            <div className="space-y-4">
              {memoizedLocations.map((location, index) => (
                <LocationCard key={index} location={location} />
              ))}
            </div>

            {/* Map */}
            <div className="pt-2">
              <a
                href="https://www.google.com/maps?q=30.12421417236328,31.7601318359375&z=17"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-xl border border-gray-800 group-hover:border-[#E81729] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-900/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
                  <iframe
                    title="Elhoda Location"
                    src="https://www.google.com/maps?q=30.12421417236328,31.7601318359375&z=17&output=embed"
                    className="w-full h-48"
                    loading="lazy"
                    aria-label="Google Maps location of Elhoda Trade"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg group-hover:bg-[#E81729]/80 transition-colors">
                    <Globe size={16} />
                    <span className="text-sm font-medium">
                      View on Google Maps
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* CONTACT SECTION */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                  <div className="p-2.5 bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-lg shadow-inner">
                    <MessageCircle className="text-[#E81729]" size={22} />
                  </div>

                </div>
                <h3 className={sectionClasses.header}>Get in Touch</h3>
              </div>

              {/* Phone Dropdown */}
              <div className="space-y-3">
                <p className="text-gray-400 text-sm">Phone Numbers</p>
                <div className="relative">
                  <button
                    onClick={handlePhoneToggle}
                    className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-r from-gray-900/40 to-gray-800/30 rounded-xl border border-gray-800 hover:from-gray-800/50 hover:to-gray-700/40 hover:border-gray-700 transition-all duration-200 group shadow-lg hover:shadow-xl"
                    aria-expanded={isPhoneDropdownOpen}
                    aria-haspopup="true"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-lg group-hover:from-red-900/30 group-hover:to-red-800/20 shadow-inner">
                        <Phone size={20} className="text-[#E81729]" />
                      </div>
                      <div className="text-left">
                        <div className="text-white font-medium text-base">
                          {COMPANY_INFO.phoneBase}
                          <span className="text-[#E81729] ml-1 font-bold">
                            X
                          </span>
                        </div>
                        <div className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                          <span>Click to select line</span>
                          <ChevronUp
                            size={12}
                            className={`transition-transform duration-300 ${
                              isPhoneDropdownOpen ? "rotate-0" : "rotate-180"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-[#E81729]/20 transition-colors">
                      <ChevronUp
                        size={18}
                        className={`transition-transform duration-300 ${
                          isPhoneDropdownOpen ? "rotate-0" : "rotate-180"
                        } text-gray-400 group-hover:text-[#E81729]`}
                      />
                    </div>
                  </button>

                  <PhoneDropdown
                    isOpen={isPhoneDropdownOpen}
                    onClose={handleClosePhoneDropdown}
                    phoneNumbers={PHONE_NUMBERS}
                  />
                </div>
                <p className="text-xs text-gray-600 pt-2 pl-1">
                  Multiple lines available for your convenience
                </p>
              </div>
            </div>
          </div>

          {/* CONNECT & SOCIAL SECTION */}
          <div className="lg:col-span-4 space-y-8">
            {/* Email */}
            <div>
              <ContactInfo
                icon={Mail}
                title="Email Address"
                description={COMPANY_INFO.email}
                href={`mailto:${COMPANY_INFO.email}`}
              />
            </div>
            {/* Stay Connected */}
            <div>
              <h3 className={sectionClasses.header}>
                <MessageCircle className="text-[#E81729]" size={22} />
                Stay Connected
              </h3>
              <p className={sectionClasses.description}>
                Stay updated with the latest innovations, sustainability
                initiatives, and product updates from Elhoda Trade. Join our
                community for exclusive insights and industry news.
              </p>
            </div>

            {/* Download Portfolio */}
            <div>
              <button
                onClick={handlePortfolioDownload}
                className="w-full bg-gradient-to-r from-[#E81729] via-red-600 to-[#E81729] bg-size-200 text-white px-6 py-4 rounded-xl text-sm hover:bg-pos-100 transition-all duration-500 flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl hover:shadow-red-900/20"
              >
                <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Download size={20} className="group-hover:animate-bounce" />
                </div>
                <span className="font-semibold">Download Portfolio (PDF)</span>
              </button>
              <p className="text-gray-600 text-xs text-center mt-3">
                Company profile, products, and capabilities
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className={sectionClasses.header}>
                <MessageCircle className="text-[#E81729]" size={22} />
                Follow Us
              </h3>
              <div className="flex gap-3">
                {memoizedSocialLinks.map((social, index) => (
                  <SocialCard key={index} social={social} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-900"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-black text-gray-600 text-sm">
              {COMPANY_INFO.tagline}
            </span>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT & LINKS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {COMPANY_INFO.year}{" "}
              <span className="text-white font-medium">
                {COMPANY_INFO.name}
              </span>
              . All Rights Reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Pioneering excellence in trade and manufacturing
            </p>
          </div>

          <div className="flex items-center gap-6">
            {memoizedLegalLinks.map((link, index) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-[#E81729] text-sm transition-colors duration-200 hover:underline decoration-[#E81729]/30"
                >
                  {link.label}
                </a>
                {index < memoizedLegalLinks.length - 1 && (
                  <div className="w-px h-4 bg-gradient-to-b from-gray-800 to-transparent" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .bg-size-200 {
          background-size: 200% 100%;
        }

        .bg-pos-100 {
          background-position: 100% 0;
        }

        .bg-gradient-to-br {
          background-image: linear-gradient(
            to bottom right,
            var(--tw-gradient-stops)
          );
        }
      `}</style>
    </footer>
  );
};

export default Footer;
