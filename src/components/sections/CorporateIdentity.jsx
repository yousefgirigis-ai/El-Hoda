import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Building2, Target, BadgeCheck, Clock3 } from "lucide-react";

const CorporateIdentity = () => {
  const containerRef = useRef(null);
  const legalStatusRef = useRef(null);
  const operationalFocusRef = useRef(null);
  const qualityComplianceRef = useRef(null);
  const marketTenureRef = useRef(null);

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

  const cards = [
    {
      ref: legalStatusRef,
      title: "Legal Status",
      content: "Private Manufacturer and Supplier.",
      icon: Building2,
      gradient: "from-blue-500 to-cyan-600",
      accentColor: "#2563eb",
      bgGradient: "bg-gradient-to-br from-blue-50 to-cyan-50/30",
      borderColor: "border-blue-200/60",
    },
    {
      ref: operationalFocusRef,
      title: "Operational Focus",
      content:
        "Healthcare, Medical Devices, In Vitro Diagnostics (IVD), and Laboratory Supplies.",
      icon: Target,
      gradient: "from-red-500 to-rose-600",
      accentColor: "#e11d48",
      bgGradient: "bg-gradient-to-br from-rose-50 to-red-50/30",
      borderColor: "border-rose-200/60",
    },
    {
      ref: qualityComplianceRef,
      title: "Quality Compliance",
      content: (
        <>
          Strict adherence to international standards including{" "}
          <span className="relative inline-flex items-center gap-2 font-bold text-gray-900 px-3 py-1.5 bg-gradient-to-r from-gray-50 to-white rounded-lg group hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
            <span className="relative z-10">ISO 13485</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </span>{" "}
          and Good Manufacturing Practices (GMP).
        </>
      ),
      icon: BadgeCheck,
      gradient: "from-emerald-500 to-green-600",
      accentColor: "#059669",
      bgGradient: "bg-gradient-to-br from-emerald-50 to-green-50/30",
      borderColor: "border-emerald-200/60",
    },
    {
      ref: marketTenureRef,
      title: "Market Tenure",
      content:
        "Over two decades of specialized expertise in the medical device and supplies field.",
      icon: Clock3,
      gradient: "from-purple-500 to-pink-600",
      accentColor: "#9333ea",
      bgGradient: "bg-gradient-to-br from-purple-50 to-pink-50/30",
      borderColor: "border-purple-200/60",
    },
  ];

  return (
    <section ref={containerRef} className="pt-20 pb-5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Animated background elements */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-red-100/30 via-pink-50/20 to-transparent rounded-full blur-3xl opacity-70 animate-pulse-slow" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tr from-rose-100/25 via-transparent to-orange-100/20 rounded-full blur-3xl opacity-60 animate-pulse-slower" />

        {/* SECTION TITLE - EXACT SAME STYLE AS HeadquartersOperations */}
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/40 to-transparent blur-xl opacity-30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span className="text-black">CORPORATE</span>{" "}
            <motion.span
              className="inline-block mx-2 md:mx-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-transparent bg-gradient-to-r from-[#E81729] via-[#ff4757] to-[#ff6b81] bg-clip-text drop-shadow-[0_4px_12px_rgba(232,23,41,0.3)] bg-[length:200%_auto] animate-gradient-x">
                IDENTITY
              </span>
            </motion.span>{" "}
            <span className="text-black">&</span>{" "}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="relative">
                <span className="text-transparent bg-gradient-to-r from-[#ff6b81] via-[#ff4757] to-[#E81729] bg-clip-text drop-shadow-[0_4px_12px_rgba(232,23,41,0.3)] bg-[length:200%_auto] animate-gradient-x">
                  STRUCTURE
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

          <motion.div
            className="w-48 h-1 bg-gradient-to-r from-transparent via-[#E81729]/50 to-transparent mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 192, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.div>

        {/* CARDS GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative"
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
              <div
                className={`relative h-full ${card.bgGradient} backdrop-blur-sm border ${card.borderColor} rounded-2xl p-8 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-gray-200/50`}
              >
                <div
                  className="absolute top-0 left-8 right-8 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: card.accentColor }}
                />

                <motion.div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 overflow-hidden`}
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

                <motion.h3
                  className={`text-2xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent mb-4`}
                  variants={titleVariants}
                >
                  {card.title}
                </motion.h3>

                <motion.div
                  className="text-gray-700 leading-relaxed"
                  variants={contentVariants}
                >
                  {card.content}
                </motion.div>

                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: card.accentColor }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Add animation keyframes for gradient-x */}
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-pulse-slower {
          animation: pulse-slower 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default CorporateIdentity;
