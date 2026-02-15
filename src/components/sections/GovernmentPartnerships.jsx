import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Landmark,
  Handshake,
  Target,
  HeartPulse,
  Search,
  Stethoscope,
} from "lucide-react";

const GovernmentPartnerships = () => {
  // Refs for each section
  const containerRef = useRef(null);
  const mainCardRef = useRef(null);
  const strategicPartnerRef = useRef(null);
  const localEmpowermentRef = useRef(null);
  const contributionsRef = useRef(null);
  const initiativesRef = useRef(null);
  const closingStatementRef = useRef(null);

  // Check if sections are in view
  const isMainCardInView = useInView(mainCardRef, { once: true, amount: 0.2 });
  const isStrategicPartnerInView = useInView(strategicPartnerRef, {
    once: true,
    amount: 0.3,
  });
  const isLocalEmpowermentInView = useInView(localEmpowermentRef, {
    once: true,
    amount: 0.3,
  });
  const isContributionsInView = useInView(contributionsRef, {
    once: true,
    amount: 0.3,
  });
  const isInitiativesInView = useInView(initiativesRef, {
    once: true,
    amount: 0.3,
  });
  const isClosingStatementInView = useInView(closingStatementRef, {
    once: true,
    amount: 0.3,
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const shimmerVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  // Data arrays
  const mainPoints = [
    {
      ref: strategicPartnerRef,
      id: 1,
      content:
        "El Hoda serves as a dedicated strategic partner to the Egyptian government, supporting its national health mandate to modernize healthcare delivery and ensure equitable access to high-quality services for all citizens.",
      icon: Landmark,
      gradient: "from-blue-50 to-white",
      accentColor: "blue",
    },
    {
      ref: localEmpowermentRef,
      id: 2,
      content:
        "Our commitment to local empowerment and public health stewardship is demonstrated through our active participation in key national health programs, directly contributing to the nation's goals of systemic improvement.",
      icon: Handshake,
      gradient: "from-emerald-50 to-white",
      accentColor: "emerald",
    },
    {
      ref: contributionsRef,
      id: 3,
      content:
        "El Hoda is proud to contribute diagnostic and prevention solutions across high-priority governmental initiatives, including:",
      icon: Target,
      gradient: "from-red-50 to-white",
      accentColor: "red",
      highlight: true,
    },
  ];

  const initiatives = [
    {
      title: "National Initiatives for Non-Communicable Diseases (NCDs)",
      text: "Supporting large-scale screening and continuous monitoring efforts to reduce the burden of chronic illnesses.",
      icon: HeartPulse,
      iconClass: "text-red-600",
      gradient: "from-red-100 to-rose-50",
      border: "border-red-200/50",
    },
    {
      title:
        "Programs for Early Detection and Management of Chronic Conditions",
      text: "Providing essential tools for the timely diagnosis and intervention of diseases like chronic kidney failure.",
      icon: Search,
      iconClass: "text-blue-600",
      gradient: "from-blue-100 to-cyan-50",
      border: "border-blue-200/50",
    },
    {
      title: "Strategic Campaigns to Enhance Maternal and Fetal Health",
      text: "Delivering reliable diagnostic support to improve outcomes for mothers and newborns across the country.",
      icon: Stethoscope,
      iconClass: "text-emerald-600",
      gradient: "from-emerald-100 to-green-50",
      border: "border-emerald-200/50",
    },
  ];

  const accentIconClass = {
    blue: "text-blue-700",
    emerald: "text-emerald-700",
    red: "text-red-700",
  };

  return (
    <section
      ref={containerRef}
      className="pt-10 pb-5 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background gradient */}
        <motion.div
          className="absolute -top-32 -right-32 w-[800px] h-[800px] bg-gradient-to-bl from-[#E81729]/10 via-pink-100/5 to-transparent rounded-full blur-3xl opacity-40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* MAIN CARD */}
        <motion.div
          ref={mainCardRef}
          className="relative group mb-24"
          initial="hidden"
          animate={isMainCardInView ? "visible" : "hidden"}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          {/* Background effects */}
          <motion.div
            className="absolute -inset-6 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10 blur-3xl opacity-0 group-hover:opacity-50 transition-all duration-1000"
            initial={{ opacity: 0 }}
            animate={{ opacity: isMainCardInView ? 0.5 : 0 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-br from-red-400/20 to-transparent rounded-full blur-2xl animate-pulse-slow" />
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-gradient-to-tr from-blue-400/15 to-transparent rounded-full blur-2xl animate-pulse-slower" />

          {/* Main content container */}
          <motion.div
            className="relative bg-gradient-to-br from-white via-white/95 to-gray-50/90 backdrop-blur-md border border-gray-200/60 rounded-3xl p-10 md:p-12 shadow-2xl shadow-red-500/5 overflow-hidden"
            variants={fadeInScale}
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-24 h-24">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E81729]/60 rounded-tl-lg" />
              <div className="absolute top-0 left-0 w-3 h-3 bg-[#E81729]/30 blur-sm" />
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24">
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E81729]/60 rounded-br-lg" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#E81729]/30 blur-sm" />
            </div>

            {/* Background circles */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#E81729]/20 rounded-full" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 border border-[#E81729]/20 rounded-full" />
            </div>

            {/* Animated dots */}
            <motion.div
              className="absolute bottom-8 left-10 w-1.5 h-1.5 bg-blue-500 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute top-12 left-20 w-1 h-1 bg-emerald-500 rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.8 }}
            />

            {/* Header section */}
            <motion.div className="relative mb-16" variants={staggerContainer}>
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
                {/* Icon */}
                <motion.div
                  className="relative flex-shrink-0"
                  variants={iconVariants}
                >
                  <div className="relative w-20 h-20">
                    <motion.div
                      className="absolute inset-0 border-2 border-[#E81729]/20 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#E81729] rounded-full -translate-x-1/2 -translate-y-1" />
                    </motion.div>

                    <div className="absolute inset-4 bg-gradient-to-br from-[#E81729] to-[#ff6b6b] rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-[#E81729]/40 to-transparent rounded-full blur-md" />
                  </div>
                </motion.div>

                {/* Title section */}
                <motion.div className="flex-1" variants={staggerContainer}>
                  <motion.div
                    className="inline-flex items-center gap-4 mb-6"
                    variants={cardItem}
                  >
                    <div className="w-16 h-1 bg-gradient-to-r from-[#E81729] to-transparent rounded-full" />
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#E81729] bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
                      Strategic Partnership
                    </span>
                    <div className="w-16 h-1 bg-gradient-to-l from-[#E81729] to-transparent rounded-full" />
                  </motion.div>

                  <motion.h3
                    className="text-4xl md:text-5xl font-bold mb-6"
                    variants={staggerContainer}
                  >
                    <motion.span
                      className="text-gray-900 drop-shadow-sm"
                      variants={cardItem}
                    >
                      Government &{" "}
                    </motion.span>
                    <motion.span
                      className="relative inline-block"
                      variants={cardItem}
                    >
                      <span className="relative z-10 text-transparent bg-gradient-to-r from-[#E81729] via-[#ff4757] to-[#E81729] bg-clip-text bg-[length:200%_auto] animate-gradient-x">
                        Public Health
                      </span>
                      <motion.div
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E81729] to-transparent"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "100%", opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </motion.span>
                    <br />
                    <motion.span
                      className="text-gray-900 drop-shadow-sm"
                      variants={cardItem}
                    >
                      Initiatives
                    </motion.span>
                  </motion.h3>

                  <motion.p
                    className="text-lg text-gray-600 max-w-3xl leading-relaxed"
                    variants={cardItem}
                  >
                    Driving national healthcare transformation through strategic
                    collaboration and innovative solutions
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Main points */}
            <motion.div
              className="relative space-y-8 mb-16"
              variants={staggerContainer}
            >
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent -translate-y-1/2 hidden md:block" />

              {mainPoints.map((item, index) => (
                <motion.div
                  key={item.id}
                  ref={item.ref}
                  className={`relative group/card ${
                    item.highlight ? "md:col-span-2" : ""
                  }`}
                  variants={cardItem}
                  initial="hidden"
                  animate={
                    (index === 0 && isStrategicPartnerInView) ||
                    (index === 1 && isLocalEmpowermentInView) ||
                    (index === 2 && isContributionsInView)
                      ? "visible"
                      : "hidden"
                  }
                  viewport={{ once: true }}
                >
                  {/* Connecting line */}
                  {index < 2 && (
                    <div className="absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-gray-300/50 to-transparent hidden md:block" />
                  )}

                  {/* Card */}
                  <div
                    className={`relative bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-gray-200/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover/card:border-${item.accentColor}-400/30 overflow-hidden`}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover/card:opacity-100 -translate-x-full"
                      variants={shimmerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />

                    {/* Accent corner */}
                    <div
                      className={`absolute top-0 right-0 w-16 h-16 opacity-10 group-hover/card:opacity-20 transition-opacity duration-500`}
                    >
                      <div
                        className={`absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-${item.accentColor}-500 rounded-tr-lg`}
                      />
                    </div>

                    <div className="relative flex items-start gap-6">
                      {/* Icon */}
                      <motion.div
                        className="flex-shrink-0"
                        variants={iconVariants}
                        initial="hidden"
                        animate={
                          (index === 0 && isStrategicPartnerInView) ||
                          (index === 1 && isLocalEmpowermentInView) ||
                          (index === 2 && isContributionsInView)
                            ? "visible"
                            : "hidden"
                        }
                      >
                        <div
                          className={`relative w-14 h-14 bg-gradient-to-br from-${item.accentColor}-100 to-white rounded-xl flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-500`}
                        >
                          <item.icon
                            className={`w-7 h-7 ${accentIconClass[item.accentColor] || "text-gray-700"} z-10 relative`}
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-br from-${item.accentColor}-400/20 to-transparent rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`}
                          />
                        </div>
                        {item.highlight && (
                          <div className="absolute -top-2 -right-2">
                            <span className="relative flex h-3 w-3">
                              <span
                                className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${item.accentColor}-400 opacity-75`}
                              />
                              <span
                                className={`relative inline-flex rounded-full h-3 w-3 bg-${item.accentColor}-500`}
                              />
                            </span>
                          </div>
                        )}
                      </motion.div>

                      {/* Content */}
                      <motion.div
                        className="flex-1"
                        variants={cardItem}
                        initial="hidden"
                        animate={
                          (index === 0 && isStrategicPartnerInView) ||
                          (index === 1 && isLocalEmpowermentInView) ||
                          (index === 2 && isContributionsInView)
                            ? "visible"
                            : "hidden"
                        }
                      >
                        <p
                          className={`text-xl leading-relaxed ${
                            item.highlight
                              ? "font-semibold text-gray-900"
                              : "text-gray-800"
                          } group-hover/card:text-gray-900 transition-colors duration-300`}
                        >
                          {item.content}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Initiatives grid */}
            <motion.div
              ref={initiativesRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={isInitiativesInView ? "visible" : "hidden"}
              viewport={{ once: true }}
            >
              {initiatives.map((item, i) => (
                <motion.div
                  key={i}
                  className={`group relative bg-gradient-to-br ${item.gradient} ${item.border} border-2 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3`}
                  variants={cardItem}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full"
                    variants={shimmerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />

                  {/* Icon and line */}
                  <div className="relative flex items-center gap-5 mb-6">
                    <div className="transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      <item.icon className={`w-12 h-12 ${item.iconClass}`} />
                    </div>
                    <div className="flex-1 h-1.5 bg-gradient-to-r from-[#E81729]/30 via-[#E81729] to-transparent rounded-full group-hover:w-full transition-all duration-700" />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#E81729] transition-colors duration-500">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-500">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CLOSING STATEMENT */}
        <motion.div
          ref={closingStatementRef}
          className="relative group"
          variants={fadeInUp}
          initial="hidden"
          animate={isClosingStatementInView ? "visible" : "hidden"}
          viewport={{ once: true }}
        >
          {/* Background glow */}
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-red-900/20 via-black/20 to-red-900/20 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: isClosingStatementInView ? 0.3 : 0 }}
            transition={{ duration: 1 }}
          />

          {/* Main container */}
          <motion.div
            className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden"
            variants={fadeInScale}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              variants={shimmerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            {/* Text content */}
            <motion.p
              className="text-xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto relative z-10"
              variants={staggerContainer}
            >
              This continuous collaboration{" "}
              <motion.span
                className="relative inline-block"
                variants={cardItem}
              >
                <span className="relative z-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-red-400 animate-gradient-x">
                  underscores our role
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-400/50 to-transparent rounded-full" />
              </motion.span>{" "}
              in advancing the public health landscape and facilitating the
              government's transition toward a{" "}
              <motion.span
                className="relative inline-block"
                variants={cardItem}
              >
                <span className="relative z-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-gradient-x">
                  more resilient and efficient healthcare system
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400/50 to-transparent rounded-full" />
              </motion.span>
              .
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernmentPartnerships;
