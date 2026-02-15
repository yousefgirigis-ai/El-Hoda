import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const QualityManagementCompliance = () => {
  const navigate = useNavigate();
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Manufacturing Quality Systems",
      description:
        "Our entire production process, for both localized reagents and medical consumables, is rigorously governed by adherence to ISO 13485 standards and Good Manufacturing Practice (GMP). This ensures all products meet verifiable global benchmarks for safety and accuracy.",
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      delay: 0.1,
    },
    {
      icon: CheckCircleIcon,
      title: "Supplier Quality Assurance (SQA)",
      description:
        "We maintain stringent quality oversight for all raw materials and components, ensuring the integrity of both localized and distributed equipment.",
      color: "from-emerald-500 to-green-500",
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
      delay: 0.2,
    },
    {
      icon: DocumentCheckIcon,
      title: "Regulatory Support",
      description:
        "We provide expert guidance to clients in navigating complex local and international regulatory requirements for IVD devices and laboratory standards, facilitating seamless quality system integration.",
      color: "from-purple-500 to-indigo-500",
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
          backgroundImage: "url('/factory11.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Navigation */}
          <div className="mt-4 mb-5 flex items-center text-sm text-white font-medium">
            <span>Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Services</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="whitespace-nowrap">
              Quality Management & Compliance Assurance
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

          {/* Hero Content */}
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
              <span className="text-white">Quality Management & </span>
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
                Compliance Assurance
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Quality is the foundational principle of the EL HODA Industrial
              Complex. We extend our commitment to the highest international
              standards across all localized and proprietary product lines,
              mitigating risk and ensuring product integrity for our clients.
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
        {/* Features Grid with Enhanced Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: feature.delay, duration: 0.6 }}
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
                  className={`w-20 h-20 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <div className={`relative w-12 h-12 ${feature.iconColor}`}>
                    <feature.icon className="w-full h-full" />
                    <motion.div
                      className={`absolute inset-0 rounded-full ${feature.bgColor} opacity-50`}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  {feature.description}
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

export default QualityManagementCompliance;