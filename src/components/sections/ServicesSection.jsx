import React from "react";
import { useInView } from "../../hooks/useInView";
import { services, servicesOverview } from "../../data/constants";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const navigate = useNavigate();

  // Logo icons for each service
  const serviceIcons = [
    {
      icon: ShieldCheckIcon,
      bgGradient: "from-red-500 to-pink-500",
      textColor: "text-white",
    },
    {
      icon: WrenchScrewdriverIcon,
      bgGradient: "from-gray-800 to-gray-900",
      textColor: "text-white",
    },
    {
      icon: AcademicCapIcon,
      bgGradient: "from-blue-500 to-cyan-500",
      textColor: "text-white",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 lg:py-28 relative z-10 bg-[#E1E8F0] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div
            className={`transition-all duration-1000 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-red-50 to-pink-50 rounded-full mb-4 border border-red-100"
            >
              <motion.span
                animate={inView ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="w-2 h-2 bg-gradient-to-r from-[#E81729] to-red-500 rounded-full mr-2"
              />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E81729] to-red-500 font-semibold text-sm uppercase tracking-wider">
                OUR SERVICES
              </span>
            </motion.span>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6"
            >
              {servicesOverview.title.split(" ").map((word, index, array) => {
                const isGradientWord = index === array.length - 1; 
                return (
                  <span key={index}>
                    {isGradientWord ? (
                      <span className="bg-gradient-to-r from-[#E81729] to-[#FF4D5A] bg-clip-text text-transparent">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                    {index < array.length - 1 && " "}
                  </span>
                );
              })}
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              {servicesOverview.description}
            </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[index].icon;

            return (
              <motion.div
                key={service.id}
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="relative group"
              >
                {/* Card Container */}
                <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/70">
                  {/* Card Top Gradient */}
                  <div
                    className="h-2 w-full"
                    style={{
                      background: `linear-gradient(90deg, ${service.color}, ${service.color}80)`,
                    }}
                  />

                  {/* Icon Container */}
                  <div className="p-8 pb-0">
                    <div className="relative">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${serviceIcons[index].bgGradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500`}
                      >
                        <IconComponent
                          className={`w-10 h-10 ${serviceIcons[index].textColor}`}
                        />
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 pt-6">
                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-base">
                      {service.shortDescription}
                    </p>

                    {/* Learn More Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate(service.path)}
                      className="w-full"
                    >
                      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-300 group-hover:border-red-200 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E81729] to-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                        <div className="relative z-10 flex items-center justify-center px-6 py-4">
                          <span className="text-[#E81729] font-semibold group-hover:text-white transition-colors duration-300">
                            Explore Service
                          </span>
                          <svg
                            className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Company Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesOverview.stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#E81729] to-red-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-700 font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600">{stat.description}</div>

                {/* Animated underline */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
