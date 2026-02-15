import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const IntegratedServices = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const serviceSections = [
    {
      id: 1,
      number: "01",
      title: "Quality Management & Compliance Assurance",
      description:
        "Quality is the foundational principle of the EL HODA Industrial Complex. We extend our commitment to the highest international standards across all localized and proprietary product lines, mitigating risk and ensuring product integrity for our clients.",
      items: [
        {
          title: "Manufacturing Quality Systems",
          description:
            "Our entire production process, for both localized reagents and medical consumables, is rigorously governed by adherence to ISO 13485 standards and Good Manufacturing Practice (GMP). This ensures all products meet verifiable global benchmarks for safety and accuracy.",
          details: [
            "ISO 13485 certified processes",
            "GMP compliance across all facilities",
            "Continuous quality monitoring",
            "Documented validation protocols",
          ],
          color: "red",
        },
        {
          title: "Supplier Quality Assurance (SQA)",
          description:
            "We maintain stringent quality oversight for all raw materials and components, ensuring the integrity of both localized and distributed equipment.",
          details: [
            "Vendor qualification programs",
            "Material certification tracking",
            "Batch-to-batch consistency",
            "Raw material testing protocols",
          ],
          color: "red",
        },
        {
          title: "Regulatory Support",
          description:
            "We provide expert guidance to clients in navigating complex local and international regulatory requirements for IVD devices and laboratory standards, facilitating seamless quality system integration.",
          details: [
            "Local regulatory compliance",
            "International standards alignment",
            "Documentation assistance",
            "Audit preparation support",
          ],
          color: "red",
        },
      ],
    },
    {
      id: 2,
      number: "02",
      title: "Technical & Engineering Services",
      description:
        "Our specialized engineering team delivers critical, rapid-response support across all distributed and localized equipment, ensuring maximum longevity and reliable operation across the region.",
      items: [
        {
          title: "Installation and Commissioning",
          description:
            "Professional, on-site installation and rigorous testing of all new systems to guarantee immediate operational readiness and optimal performance.",
          details: [
            "Site preparation assessment",
            "Equipment calibration",
            "Performance validation",
            "User handover training",
          ],
          color: "black",
        },
        {
          title: "Preventive and Corrective Maintenance (PM/CM)",
          description:
            "We offer structured Preventive Maintenance programs to maximize performance and minimize downtime. Our Corrective Maintenance service provides rapid response for technical issues, supported by outstanding internal service capabilities.",
          details: [
            "Scheduled maintenance plans",
            "24/7 emergency support",
            "Remote diagnostics",
            "Performance optimization",
          ],
          color: "red",
        },
        {
          title: "Strategic Spare Parts Management",
          description:
            "We maintain a dedicated, strategic inventory of spare parts for all supported instruments, enabling quick repairs and significantly reducing service turn-around time, a critical advantage in regional supply chains.",
          details: [
            "Local parts inventory",
            "Emergency parts dispatch",
            "Parts life cycle management",
            "Warranty tracking",
          ],
          color: "black",
        },
      ],
    },
    {
      id: 3,
      number: "03",
      title: "Application Support and Training",
      description:
        "We empower our clients' personnel with the knowledge necessary to utilize all products effectively and safely, directly enhancing overall diagnostic accuracy and efficiency.",
      items: [
        {
          title: "Comprehensive User Training",
          description:
            "Specialized training sessions cover the operation, daily maintenance, and quality control procedures for all diagnostic systems.",
          details: [
            "On-site training programs",
            "Virtual training sessions",
            "Certification courses",
            "Ongoing skill assessment",
          ],
          color: "red",
        },
        {
          title: "Application and Workflow Optimization",
          description:
            "Focused training ensures the optimal use of diagnostic reagents, rapid tests, and consumables to achieve accurate clinical results. We also provide expert consultation to help laboratories optimize their diagnostic workflows, from sample collection to final reporting.",
          details: [
            "Process mapping",
            "Efficiency analysis",
            "Error reduction strategies",
            "Throughput optimization",
          ],
          color: "black",
        },
        {
          title: "Infection Prevention & Control (IPC) Protocols",
          description:
            "We provide training and consultation on the application of sterilization protocols and the effective use of IPC products, ensuring full compliance with international safety and health standards.",
          details: [
            "IPC protocol development",
            "Compliance monitoring",
            "Risk assessment",
            "Safety audit preparation",
          ],
          color: "red",
        },
      ],
    },
  ];

  return (
    <div className="relative py-12 md:py-24 bg-[#E1E8F0] overflow-hidden">
      {/* Background Gradients - Mobile Optimized */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#E81729]/5 via-transparent to-black/5 rounded-full blur-2xl md:blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tl from-[#E81729]/5 via-transparent to-black/5 rounded-full blur-2xl md:blur-3xl translate-x-1/4 md:translate-x-1/3 translate-y-1/4 md:translate-y-1/3"></div>

      {/* Floating particles - Reduced count for mobile */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#E81729]/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
            }}
            animate={{
              y: [null, -15, 0],
              x: [null, 5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header - Mobile Optimized */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="max-w-5xl mx-auto mb-12 md:mb-20 relative"
        >
          {/* Animated background circle - Mobile sized */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#E81729]/20 to-black/10 rounded-full blur-lg md:blur-xl"
          ></motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 md:mb-6 relative text-center px-2">
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-black inline-block"
            >
              INTEGRATED SERVICES & {" "}
            </motion.span>
            <motion.span
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[#E81729] inline-block"
            >
              {" "} QUALITY MANAGEMENT
            </motion.span>
          </h2>

          {/* Animated divider - Mobile Optimized */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.6, duration: 1 }}
            className="inline-flex items-center gap-1 md:gap-2 mb-4 md:mb-6 justify-center w-full px-4"
          >
            <motion.div
              animate={{
                width: ["8px", "32px", "8px"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-0.5 md:h-1 bg-gradient-to-r from-black to-[#E81729] rounded-full"
            ></motion.div>
            <span className="text-[#E81729] font-bold text-sm md:text-lg tracking-tight md:tracking-wide text-center px-2">
              COMPREHENSIVE SUPPORT LIFECYCLE
            </span>
            <motion.div
              animate={{
                width: ["8px", "32px", "8px"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1,
              }}
              className="h-0.5 md:h-1 bg-gradient-to-r from-[#E81729] to-black rounded-full"
            ></motion.div>
          </motion.div>

          {/* Description - Mobile Optimized */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-800 text-sm md:text-base leading-relaxed bg-white p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden group text-center mx-2"
          >
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E81729]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            <span className="relative">
              EL HODA Trade & Supplies provides{" "}
              <span className="font-semibold text-[#E81729] bg-gradient-to-r from-[#E81729]/10 to-transparent px-1 rounded">
                comprehensive support that spans the entire product
                lifecycle—from stringent manufacturing quality assurance to
                exceptional after-sales service. 
              </span>
              <br />
              <br className="hidden md:block" />
              Our integrated approach is designed to guarantee regulatory
              compliance, maximize equipment uptime, and ensure optimal
              operational performance for our partners.
            </span>
          </motion.p>
        </motion.div>

        {/* Service Sections */}
        <div className="space-y-4 md:space-y-8 px-2">
          {serviceSections.map((section, sectionIndex) => (
            <ServiceSection
              key={section.id}
              {...section}
              index={sectionIndex}
              isExpanded={expandedIndex === sectionIndex}
              onToggle={() =>
                setExpandedIndex(
                  expandedIndex === sectionIndex ? null : sectionIndex,
                )
              }
            />
          ))}
        </div>

        {/* Stats Bar - Mobile Optimized */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.8 }}
          className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 px-2"
        >
          {[
            {
              label: "Quality Standards",
              value: "ISO 13485",
              color: "text-[#E81729]",
            },
            {
              label: "Client Satisfaction",
              value: "99.8%",
              color: "text-black",
            },
            { label: "Response Time", value: "< 24h", color: "text-[#E81729]" },
            { label: "Training Programs", value: "50+", color: "text-black" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 shadow-md md:shadow-lg border border-gray-200"
            >
              <div className={`text-xl md:text-2xl lg:text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-700 text-xs md:text-sm lg:text-base mt-1 md:mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

/* ================= Service Section ================= */
const ServiceSection = ({
  number,
  title,
  description,
  items,
  index,
  isExpanded,
  onToggle,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative max-w-6xl mx-auto"
    >
      {/* Animated connecting line - Mobile hidden */}
      <motion.div
        initial={{ height: 0 }}
        animate={inView ? { height: "30px" } : { height: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute -top-8 left-6 md:left-10 w-0.5 bg-gradient-to-b from-transparent via-[#E81729] to-transparent hidden md:block"
      />

      {/* Section Card */}
      <motion.div
        whileHover={{ scale: 1.002 }}
        whileTap={{ scale: 0.995 }}
        className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border border-gray-200 overflow-hidden cursor-pointer group active:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        {/* Header - Mobile Optimized */}
        <div className="p-4 md:p-6 lg:p-8 flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex items-start gap-4 md:gap-6 w-full">
            {/* Number badge - Mobile Optimized */}
            <motion.div
              animate={isExpanded ? { rotate: 180 } : { rotate: 0 }}
              className="relative flex-shrink-0"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  number === "02"
                    ? "from-black to-[#E81729]"
                    : "from-[#E81729] to-black"
                } rounded-md md:rounded-lg blur-md opacity-30`}
              ></div>

              <span
                className={`relative text-white text-lg md:text-xl font-bold bg-gradient-to-br ${
                  number === "02"
                    ? "from-black to-[#E81729]"
                    : "from-[#E81729] to-black"
                } p-2 md:p-3 rounded-md md:rounded-lg shadow-md hover:scale-105 transition-transform duration-300 block w-10 h-10 md:w-14 md:h-14 flex items-center justify-center`}
              >
                {number}
              </span>
            </motion.div>

            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-2 md:mb-3 group-hover:text-gray-800 transition-colors line-clamp-2">
                {title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                {description}
              </p>
            </div>
          </div>

          {/* Expand/collapse icon - Mobile Optimized */}
          <motion.div
            animate={isExpanded ? { rotate: 180 } : { rotate: 0 }}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#E81729]/10 transition-colors self-end md:self-start flex-shrink-0"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-[#E81729] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>

        {/* Expanded Content - Mobile Optimized */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-gray-200 pt-4 md:pt-6 lg:pt-8 pb-4 md:pb-6 lg:pb-8 px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {items.map((item, itemIndex) => (
                    <ExpandedServiceCard
                      key={itemIndex}
                      {...item}
                      itemIndex={itemIndex}
                      sectionIndex={index}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

/* ================= Expanded Service Card ================= */
const ExpandedServiceCard = ({
  title,
  description,
  details,
  color,
  itemIndex,
  sectionIndex,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "-20px 0px",
  });

  const isRed = color === "red";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className="group relative h-full"
    >
      {/* Gradient background - Mobile reduced blur */}
      <div
        className={`absolute -inset-0.5 md:-inset-1 bg-gradient-to-r ${
          isRed ? "from-[#E81729] to-black" : "from-black to-[#E81729]"
        } rounded-lg md:rounded-xl blur opacity-5 md:opacity-10 group-hover:opacity-15 md:group-hover:opacity-20 transition-all duration-300`}
      ></div>

      {/* Main card */}
      <div className="relative bg-white rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Animated indicator - Mobile simplified */}
        <motion.div
          animate={
            inView
              ? {
                  height: ["0%", "100%", "0%"],
                  top: ["100%", "0%", "0%"],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className={`absolute left-0 w-0.5 md:w-1 ${
            isRed ? "bg-[#E81729]" : "bg-black"
          } rounded-full hidden md:block`}
        ></motion.div>

        {/* Title section - Mobile Optimized */}
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={`w-2 h-6 md:w-3 md:h-8 bg-gradient-to-b ${
              isRed ? "from-[#E81729] to-[#B31020]" : "from-black to-gray-800"
            } rounded-full flex-shrink-0`}
          ></motion.div>
          <h4 className="text-base md:text-lg lg:text-xl font-semibold text-black group-hover:text-gray-900 transition-colors duration-300 line-clamp-2">
            {title}
          </h4>
        </div>

        {/* Description - Mobile Optimized */}
        <motion.p
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          className="text-gray-800 text-sm md:text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300 flex-grow mb-4 md:mb-6 line-clamp-3 md:line-clamp-4"
        >
          {description}
        </motion.p>

        {/* Details List - Mobile Optimized */}
        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
          {details.map((detail, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: sectionIndex * 0.1 + itemIndex * 0.05 + idx * 0.03,
              }}
              className="flex items-start gap-2 md:gap-3"
            >
              <div
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full flex-shrink-0 mt-1 md:mt-0.5 ${
                  isRed ? "bg-[#E81729]" : "bg-black"
                }`}
              ></div>
              <span className="text-gray-700 text-xs md:text-sm">{detail}</span>
            </motion.div>
          ))}
        </div>

        {/* Learn More Button - Mobile Optimized */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          className="mt-auto pt-3 md:pt-4 border-t border-gray-200 text-[#E81729] font-medium flex items-center gap-1 md:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm md:text-base"
        >
          Learn more
          <span className="transform group-hover:translate-x-0.5 md:group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntegratedServices;