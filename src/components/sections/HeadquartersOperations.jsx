import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Building2, MapPin, Factory } from "lucide-react";

const HeadquartersOperations = () => {
  // Refs for each card item
  const containerRef = useRef(null);
  const strategyRef = useRef(null);
  const headquartersRef = useRef(null);
  const manufacturingRef = useRef(null);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -90,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  // Card data with enhanced styling
  const cards = [
    {
      ref: strategyRef,
      title: "Operational Strategy",
      content:
        "El Hoda's operations are strategically centralized to maximize efficiency and quality control.",
      icon: Building2,
      gradient: "from-blue-600 to-indigo-700",
      accentColor: "#2563eb",
      bgGradient: "bg-gradient-to-br from-blue-50 to-indigo-50/30",
      borderColor: "border-blue-200/60",
    },
    {
      ref: headquartersRef,
      title: "Corporate Headquarters",
      content:
        "28 Food & Pharmaceutical Region, Zone C, Badr Industrial City, Cairo, Egypt.",
      icon: MapPin,
      gradient: "from-rose-600 to-red-700",
      accentColor: "#e11d48",
      bgGradient: "bg-gradient-to-br from-rose-50 to-red-50/30",
      borderColor: "border-rose-200/60",
    },
    {
      ref: manufacturingRef,
      title: "Manufacturing Facilities",
      content:
        "Three dedicated factories located at plots 28, 29, and 30 within the Food & Pharmaceutical Region, Zone C, Badr Industrial City, Cairo, Egypt, housing advanced local manufacturing capabilities.",
      icon: Factory,
      gradient: "from-emerald-600 to-green-700",
      accentColor: "#059669",
      bgGradient: "bg-gradient-to-br from-emerald-50 to-green-50/30",
      borderColor: "border-emerald-200/60",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-5 md:py-32 bg-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cpath d="M0 0h60v60H0z"/%3E%3Cpath d="M30 30a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="%23f1f5f9" fill-opacity="0.4"/%3E%3C/g%3E%3C/svg%3E\')',
        }}
      />

      {/* Accent decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* SECTION HEADER - Enhanced */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 mb-8"
            variants={titleVariants}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-600 tracking-wider">
              CORPORATE INFRASTRUCTURE
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span className="text-black">HEADQUARTERS</span>{" "}
            <motion.span
              className="inline-block mx-2 md:mx-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-transparent bg-gradient-to-r from-[#E81729] via-[#ff4757] to-[#ff6b81] bg-clip-text drop-shadow-[0_4px_12px_rgba(232,23,41,0.3)] bg-[length:200%_auto] animate-gradient-x">
                &
              </span>
            </motion.span>{" "}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="relative">
                <span className="text-transparent bg-gradient-to-r from-[#ff6b81] via-[#ff4757] to-[#E81729] bg-clip-text drop-shadow-[0_4px_12px_rgba(232,23,41,0.3)] bg-[length:200%_auto] animate-gradient-x">
                  OPERATIONS
                </span>
                <motion.div
                  className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E81729] to-transparent"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>
            </motion.span>
          </h2>

          <motion.div className="max-w-2xl mx-auto" variants={contentVariants}>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8" />
            <p className="text-lg text-gray-600 leading-relaxed">
              Strategic integration of corporate governance with manufacturing
              excellence
            </p>
          </motion.div>
        </motion.div>

        {/* ENHANCED CARDS GRID */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mxOperational Strategy-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              ref={card.ref}
              className="group relative"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              {/* Card container with enhanced styling */}
              <div
                className={`relative h-full ${card.bgGradient} backdrop-blur-sm border ${card.borderColor} rounded-2xl p-8 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-gray-200/50`}
              >
                {/* Accent indicator */}
                <div
                  className="absolute top-0 left-8 right-8 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: card.accentColor }}
                />

                {/* Icon with enhanced design */}
                <motion.div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-2xl mb-6 overflow-hidden`}
                  variants={iconVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <div className="relative z-10">
                    <card.icon className="w-7 h-7 text-white" />
                  </div>
                </motion.div>

                {/* Title with gradient */}
                <motion.h3
                  className={`text-2xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent mb-4`}
                  variants={titleVariants}
                >
                  {card.title}
                </motion.h3>

                {/* Content with improved typography */}
                <motion.p
                  className="text-gray-700 leading-relaxed"
                  variants={contentVariants}
                >
                  {card.content}
                </motion.p>

                {/* Corner accent */}
                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: card.accentColor }}
                />
              </div>

              {/* Floating shadow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeadquartersOperations;
