import React from "react";
import { useNavigate } from "react-router-dom";
import {
  WrenchScrewdriverIcon,
  CpuChipIcon,
  CogIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const TechnicalEngineeringServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: WrenchScrewdriverIcon,
      title: "Installation and Commissioning",
      description:
        "Professional, on-site installation and rigorous testing of all new systems to guarantee immediate operational readiness and optimal performance.",
      color: "from-blue-600 to-cyan-500",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      delay: 0.1,
    },
    {
      icon: CogIcon,
      title: "Preventive and Corrective Maintenance (PM/CM)",
      description:
        "We offer structured Preventive Maintenance programs to maximize performance and minimize downtime. Our Corrective Maintenance service provides rapid response for technical issues, supported by outstanding internal service capabilities.",
      color: "from-emerald-600 to-green-500",
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
      delay: 0.2,
    },
    {
      icon: CpuChipIcon,
      title: "Strategic Spare Parts Management",
      description:
        "We maintain a dedicated, strategic inventory of spare parts for all supported instruments, enabling quick repairs and significantly reducing service turn-around time, a critical advantage in regional supply chains.",
      color: "from-purple-600 to-indigo-500",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      delay: 0.3,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 min-h-screen bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-[70vh] py-20 sm:py-28 overflow-hidden"
        style={{
          backgroundImage: "url('/factory9.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Background Elements removed */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Navigation - Updated to match */}
          <div className="mt-4 mb-5 flex items-center text-sm text-white font-medium">
            <span>Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Services</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="whitespace-nowrap">
              Technical & Engineering Services
            </span>
          </div>
          
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center mb-12"
          >
            <motion.button
              onClick={() => navigate("/")}
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center text-white hover:text-gray-200 font-medium transition-all duration-300 mr-8 backdrop-blur-sm bg-white/20 px-4 py-2 rounded-lg"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </motion.button>
          </motion.div>

          {/* Hero Content - Updated to match */}
          <div className="text-center">
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 bg-[#FF6B6B] rounded-full mr-3"
              />
              <span className="text-white font-semibold text-sm uppercase tracking-wider">
                Core Service
              </span>
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight -mt-2 sm:-mt-4"
            >
              <span className="text-white">Technical & </span>
              <motion.span
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-transparent bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-[length:200%_auto] bg-clip-text"
              >
                Engineering Services
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Our specialized engineering team delivers critical, rapid-response
              support across all distributed and localized equipment, ensuring
              maximum longevity and reliable operation across the region.
            </motion.p>
          </div>
        </div>

        {/* Animated Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-16 text-white transform rotate-180"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-current"
              initial={{ pathLength: 0, opacity: 0.5 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 -mt-8">
        
        {/* Services Grid with Enhanced Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: service.delay, duration: 0.6 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2" />
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100">
                {/* Animated Icon Container */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl ${service.bgColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <div className={`relative w-12 h-12 ${service.iconColor}`}>
                    <service.icon className="w-full h-full" />
                    <motion.div
                      className={`absolute inset-0 rounded-full ${service.bgColor} opacity-50`}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  {service.description}
                </p>

                {/* Animated Border Bottom */}
                <motion.div
                  className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechnicalEngineeringServices;
