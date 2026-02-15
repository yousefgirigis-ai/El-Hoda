import React, { useEffect, useState } from "react";
import { Shield } from "lucide-react";

const AboutSection = ({ partner }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto px-6 mb-20">
      {/* Background Decoration */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-40 animate-pulse-slow" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse-slow" />

      <div className="relative z-10">
        {/* Animated Badge */}
        <div
          className={`flex justify-center mb-8 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-orange-50 text-red-700 px-6 py-3 rounded-2xl text-base font-semibold border border-red-200/60 shadow-lg shadow-red-100/50 backdrop-blur-sm">
            <div className="relative">
              <Shield size={20} className="text-red-600" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
            </div>
            <span className="bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-transparent">
              Trusted Medical Partner
            </span>
            <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Main Heading */}
        <div
          className={`text-center mb-12 transform transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              {partner.name}
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-red-300 rounded-full" />
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-red-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-red-300 rounded-full" />
          </div>
        </div>

        {/* Description */}
        <div
          className={`transform transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-100 shadow-2xl shadow-red-100/30 relative overflow-hidden text-center">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -translate-y-16 translate-x-16 opacity-60" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-full translate-y-12 -translate-x-12 opacity-40" />

            <p className="text-gray-800 leading-relaxed text-lg md:text-xl font-light tracking-wide relative z-10 mx-auto">
              {partner.description}
            </p>

            {/* Feature Icons */}
            {/* <div className="flex justify-center gap-8 mt-8 pt-8 border-t border-gray-100/50">
              {[...]} 
            </div> */}
          </div>
        </div>

        {/* Stats Bar (Optional) */}
        {/* <div className={`grid grid-cols-3 gap-6 mt-12 transform ...`} /> */}
      </div>
    </div>
  );
};

export default AboutSection;
