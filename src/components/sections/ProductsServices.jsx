import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import OverviewSectionTitle from "./OverviewSectionTitle";

const ProductsServices = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const manufacturingRef = useRef(null);
  const platformsRef = useRef(null);
  const ipcDivisionRef = useRef(null);
  const ipcPartnersRef = useRef(null);
  const distributionRef = useRef(null);
  const coreDiagnosticRef = useRef(null);
  const advancedDiagnosticRef = useRef(null);
  const corePartnersRef = useRef(null);
  const advancedPartnersRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isIntroInView = useInView(introRef, { once: true, amount: 0.3 });
  const isManufacturingInView = useInView(manufacturingRef, {
    once: true,
    amount: 0.3,
  });
  const isPlatformsInView = useInView(platformsRef, {
    once: true,
    amount: 0.2,
  });
  const isIpcDivisionInView = useInView(ipcDivisionRef, {
    once: true,
    amount: 0.3,
  });
  const isIpcPartnersInView = useInView(ipcPartnersRef, {
    once: true,
    amount: 0.2,
  });
  const isDistributionInView = useInView(distributionRef, {
    once: true,
    amount: 0.3,
  });
  const isCoreDiagnosticInView = useInView(coreDiagnosticRef, {
    once: true,
    amount: 0.3,
  });
  const isAdvancedDiagnosticInView = useInView(advancedDiagnosticRef, {
    once: true,
    amount: 0.3,
  });
  const isCorePartnersInView = useInView(corePartnersRef, {
    once: true,
    amount: 0.2,
  });
  const isAdvancedPartnersInView = useInView(advancedPartnersRef, {
    once: true,
    amount: 0.2,
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

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const growWidth = {
    hidden: { width: 0 },
    visible: {
      width: "12rem",
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  // Platform data
  const manufacturingPlatforms = [
    {
      title: "In-Vitro Diagnostics (IVD)",
      subtitle: "Localized Manufacturing & Assembly",
      description:
        "Leveraging ISO 13485 and GMP certified facilities for high-quality local manufacturing and assembly of core IVD platforms.",
      partnership:
        "Local assembly and production of URIT analyzers, AMS clinical chemistry reagents, and Neomedica hematology systems through strategic collaborations.",
      gradient: "from-blue-500 to-purple-600",
      hoverColor: "blue",
      logo: "/logo.png",
    },
    {
      title: "Medical Consumables (Disposables)",
      subtitle: "Proprietary Manufacturing",
      description:
        "High-quality plastic laboratory products including Petri dishes, swabs, alcohol pads, urine containers, and tourniquets.",
      partnership:
        "Proprietary local manufacturing competing with premium imported products, ensuring quality and cost-effectiveness.",
      gradient: "from-green-500 to-teal-600",
      hoverColor: "green",
      logo: "/logo.png",
    },
    {
      title: "POCT (Point-of-Care Testing)",
      subtitle: "Local Production & Branding",
      description:
        "POCT analyzers, reagents, and rapid test kits including pregnancy and drug-of-abuse tests.",
      partnership:
        "Local production of POCT reagents under the Elhoda-Diasure brand, providing accessible testing solutions.",
      gradient: "from-orange-500 to-red-600",
      hoverColor: "orange",
      logo: "/dia-sure-blue.png",
    },
    {
      title: "IPC Products",
      subtitle: "Complete Manufacturing Solution",
      description:
        "Comprehensive Infection Prevention & Control manufacturing by EL HODA (excluding equipment), ensuring complete supply chain control.",
      partnership: "",
      gradient: "from-purple-500 to-indigo-600",
      hoverColor: "purple",
      logo: null,
      isText: true,
    },
  ];

  const ipcPartners = [
    {
      name: "ParaSure Limited",
      location: "United Kingdom",
      description:
        "Production of sterility assurance solutions including ParaSure Rapid Readout Biological System, Autoclave Tape, and Type 4 Chemical Indicator.",
      gradient: "from-blue-500 to-purple-600",
      hoverColor: "blue",
      logo: "/parasure.png",
    },
    {
      name: "Medentech",
      location: "Global",
      description:
        "Manufacturing of ParaChlor, an advanced chlorine-based disinfectant tablet for healthcare environments.",
      gradient: "from-green-500 to-teal-600",
      hoverColor: "green",
      logo: "/medntech.png",
    },
    {
      name: "Oxy Pharm",
      location: "France",
      description:
        "Comprehensive biocleaning solutions specializing in ASD technology. Key products: NOCOSPRAY, NOCLYSE, NOCOMACE EASY, NOCOCINELLE.",
      gradient: "from-orange-500 to-red-600",
      hoverColor: "orange",
      logo: "/oxy-pharm.png",
    },
    {
      name: "GHP",
      location: "United Kingdom",
      description:
        "Complete endoscopy reprocessing line enhancing patient safety. Portfolio includes InstaClean and ParaZyme solutions.",
      gradient: "from-purple-500 to-indigo-600",
      hoverColor: "purple",
      logo: "/ghp.png",
    },
  ];

  const corePartners = [
    {
      name: "Greiner Bio-One GmbH",
      location: "Austria",
      description:
        "Global leader in biotechnology, diagnostics, and medical devices. Key products: Blood collection tubes and systems (Vacuette).",
      gradient: "from-red-500 to-orange-600",
      hoverColor: "red",
      logo: "/greiner.png",
    },
    {
      name: "i-SENS",
      location: "Korea",
      description:
        "Market leader in point-of-care systems using whole blood. Key products: CARESENS S FIT and CARESENS AIR (Continuous Blood Glucose Monitoring).",
      gradient: "from-blue-500 to-indigo-600",
      hoverColor: "blue",
      logo: "/i-sens.png",
    },
    {
      name: "NeoMedica",
      location: "Serbia",
      description:
        "Innovative, user-friendly IVD solutions. Distribution of hematology systems: PHOENIX NCC-51 AL and PHOENIX NCC-3300.",
      gradient: "from-purple-500 to-pink-600",
      hoverColor: "purple",
      logo: "/neomedica.png",
      note: "Distribution of Analyzers only",
    },
    {
      name: "AMS",
      location: "Northern Ireland",
      description:
        "Specialized research services supporting advanced diagnostic development and innovation.",
      gradient: "from-cyan-500 to-blue-600",
      hoverColor: "cyan",
      logo: "/ams-blue.png",
    },
    {
      name: "ACON",
      location: "International",
      description:
        "Innovative, smarter, and safer user-friendly IVD solutions. Key products: Mission Hemoglobin HB and Expert Urine Analyzers.",
      gradient: "from-green-500 to-emerald-600",
      hoverColor: "green",
      logo: "/acon.png",
    },
  ];

  const advancedPartners = [
    {
      name: "DieSure",
      location: "International",
      description:
        "Exclusive distribution of clinical chemistry products in Egypt, ensuring highly localized supply of IVD solutions.",
      gradient: "from-red-600 to-rose-700",
      hoverColor: "red",
      logo: "/dia-sure-red.png",
      note: "Clinical Chemistry Products",
    },
    {
      name: "DYMIND",
      location: "International",
      description:
        "Innovation-driven enterprise, ranking second in hematology market. Key systems: DH33, DF55, CA1200, DH800, DH76.",
      gradient: "from-blue-600 to-indigo-700",
      hoverColor: "blue",
      logo: "/dymind.png",
    },
    {
      name: "DRAWRAY",
      location: "International",
      description:
        "Utilizes advanced platforms (CLIA, FIA, Rapid Test) for critical applications. Key product: iSTAR 500 Chemiluminescence Immunoassay Analyzer.",
      gradient: "from-violet-600 to-purple-700",
      hoverColor: "violet",
      logo: "/drawray.png",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="pt-10 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* SECTION TITLE */}
        <motion.div
          ref={headerRef}
          className="max-w-5xl mb-16 relative"
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#E81729]/10 to-black/5 rounded-full blur-xl"
            variants={scaleIn}
          />

          <OverviewSectionTitle
            className="mb-6"
            align="left"
            titleStart="PRODUCTS AND"
            titleAccent="SERVICES"
            subtitle="Strategic Healthcare Solutions"
          />
        </motion.div>

        {/* INTRO */}
        <motion.div
          ref={introRef}
          className="text-gray-800 leading-relaxed text-lg bg-gradient-to-r from-white to-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mb-20 group"
          variants={fadeInUp}
          initial="hidden"
          animate={isIntroInView ? "visible" : "hidden"}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full"
            variants={shimmerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          EL HODA Trade & Supplies provides a meticulously structured portfolio
          of medical and diagnostic solutions, serving both the{" "}
          <span className="font-bold text-[#E81729] bg-gradient-to-r from-[#E81729]/10 to-transparent px-1 rounded">
            Governmental and Private Sectors
          </span>
          . Our offerings strategically combine advanced proprietary
          manufacturing with exclusive, high-value distribution partnerships,
          ensuring market access to cutting-edge global healthcare technology.
        </motion.div>

        {/* ================= 5.1 ================= */}
        <motion.div
          ref={manufacturingRef}
          className="max-w-5xl mb-16 relative"
          initial="hidden"
          animate={isManufacturingInView ? "visible" : "hidden"}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold mb-6 relative"
            variants={fadeInLeft}
          >
            <span className="bg-gradient-to-r from-black to-[#E81729] bg-clip-text text-transparent">
              5.1 Integrated Manufacturing & Core IVD Platforms
            </span>
          </motion.h3>

          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            variants={fadeInLeft}
            transition={{ delay: 0.1 }}
          >
            <div className="w-8 h-1 bg-gradient-to-r from-black to-[#E81729] rounded-full" />
            <span className="text-gray-600 font-semibold text-md tracking-wide">
              VERTICAL INTEGRATION EXCELLENCE
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-[#E81729] to-black rounded-full" />
          </motion.div>

          <motion.div
            className="text-gray-800 leading-relaxed bg-gradient-to-r from-white to-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mb-12 group"
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full"
              variants={shimmerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            Our commitment to quality is underscored by our vertically
            integrated manufacturing capabilities. The EL HODA Industrial
            Complex specializes in the{" "}
            <span className="font-bold text-[#E81729] bg-gradient-to-r from-[#E81729]/10 to-transparent px-1 rounded">
              R&D, production, and sale
            </span>{" "}
            of essential diagnostic and disposable products. This facility not
            only produces our proprietary product lines but also serves as a
            trusted manufacturer for{" "}
            <span className="font-bold text-[#E81729] bg-gradient-to-r from-[#E81729]/10 to-transparent px-1 rounded">
              international brands.
            </span>
          </motion.div>
        </motion.div>

        {/* MANUFACTURING PLATFORMS CARDS */}
        <motion.div
          ref={platformsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate={isPlatformsInView ? "visible" : "hidden"}
          viewport={{ once: true }}
        >
          {manufacturingPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardItem}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${platform.gradient} rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                whileHover={{ opacity: 0.2 }}
              />

              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full"
                  variants={shimmerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-lg">
                    {platform.isText ? (
                      <div className="w-16 h-16 flex items-center justify-center font-bold text-gray-700 text-2xl">
                        IPC
                      </div>
                    ) : (
                      <motion.img
                        src={platform.logo}
                        alt={platform.title}
                        className="w-16 h-16 object-contain bg-white p-2 rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {platform.title}
                    </h4>
                    <p className="text-sm text-gray-500">{platform.subtitle}</p>
                  </div>
                </div>

                {platform.description && (
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {platform.description}
                  </p>
                )}

                {platform.partnership && (
                  <div
                    className={`bg-${platform.hoverColor}-50 p-4 rounded-xl`}
                  >
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      {platform.title.includes("Medical")
                        ? "Local Manufacturing Excellence"
                        : platform.title.includes("POCT")
                          ? "Assure Tech Partnership"
                          : "Partnerships & Manufacturing"}
                    </p>
                    <p className="text-sm text-gray-700">
                      {platform.partnership}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= 5.1.2 ================= */}
        <motion.div
          ref={ipcDivisionRef}
          className="max-w-5xl mb-16 relative"
          initial="hidden"
          animate={isIpcDivisionInView ? "visible" : "hidden"}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold mb-6 relative"
            variants={fadeInLeft}
          >
            <span className="bg-gradient-to-r from-black to-[#E81729] bg-clip-text text-transparent">
              Infection Prevention & Sterility Assurance (IPC Division)
            </span>
          </motion.h3>

          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            variants={fadeInLeft}
            transition={{ delay: 0.1 }}
          >
            <div className="w-8 h-1 bg-gradient-to-r from-black to-[#E81729] rounded-full" />
            <span className="text-gray-600 font-semibold text-md tracking-wide">
              GLOBAL PARTNERSHIPS, LOCAL PRODUCTION
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-[#E81729] to-black rounded-full" />
          </motion.div>

          <motion.div
            className="text-gray-800 leading-relaxed bg-gradient-to-r from-white to-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mb-12 group"
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full"
              variants={shimmerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            EL HODA launched its dedicated IPC Division in partnership with
            international players, reinforcing its commitment to localization
            within the EL HODA Industrial Complex.
          </motion.div>
        </motion.div>

        {/* IPC PARTNERS CARDS */}
        <motion.div
          ref={ipcPartnersRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate={isIpcPartnersInView ? "visible" : "hidden"}
          viewport={{ once: true }}
        >
          {ipcPartners.map((partner, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardItem}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${partner.gradient} rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                whileHover={{ opacity: 0.2 }}
              />

              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full"
                  variants={shimmerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />

                <div className="flex items-center gap-4 mb-6">
                  <motion.img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-20 h-20 object-contain"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {partner.name}
                    </h4>
                    <p className="text-sm text-gray-500">{partner.location}</p>
                  </div>
                </div>

                <div className={`bg-${partner.hoverColor}-50 p-4 rounded-xl`}>
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    {partner.name.includes("ParaSure")
                      ? "Localized Manufacturing"
                      : partner.name.includes("Medentech")
                        ? "Advanced Disinfectant Production"
                        : partner.name.includes("Oxy")
                          ? "Aerial Surface Disinfection"
                          : "Endoscopy Reprocessing"}
                  </p>
                  <p className="text-sm text-gray-700">{partner.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= 5.2 ================= */}
        <motion.div
          ref={distributionRef}
          className="max-w-5xl mb-16 relative"
          initial="hidden"
          animate={isDistributionInView ? "visible" : "hidden"}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold mb-6 relative"
            variants={fadeInLeft}
          >
            <span className="bg-gradient-to-r from-black to-[#E81729] bg-clip-text text-transparent">
              5.2 Strategic International Distribution and Partnerships
            </span>
          </motion.h3>

          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            variants={fadeInLeft}
            transition={{ delay: 0.1 }}
          >
            <div className="w-8 h-1 bg-gradient-to-r from-black to-[#E81729] rounded-full" />
            <span className="text-gray-600 font-semibold text-md tracking-wide">
              GLOBAL LEADERS, REGIONAL ACCESS
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-[#E81729] to-black rounded-full" />
          </motion.div>

          <motion.div
            className="text-gray-800 leading-relaxed bg-gradient-to-r from-white to-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mb-12 group"
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full"
              variants={shimmerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            EL HODA is the exclusive partner for international market leaders,
            ensuring reliable supply and technical support across specialized
            medical fields.
          </motion.div>

          {/* Section A Header */}
          <motion.div
            ref={coreDiagnosticRef}
            className="mb-8"
            initial="hidden"
            animate={isCoreDiagnosticInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              A. Core Diagnostic Systems Distribution
            </h4>
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-[#E81729] to-black rounded-full"
              variants={growWidth}
              initial="hidden"
              animate={isCoreDiagnosticInView ? "visible" : "hidden"}
            />
          </motion.div>
        </motion.div>

        {/* CORE DIAGNOSTIC PARTNERS CARDS */}
        <motion.div
          ref={corePartnersRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate={isCorePartnersInView ? "visible" : "hidden"}
          viewport={{ once: true }}
        >
          {corePartners.map((partner, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardItem}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${partner.gradient} rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                whileHover={{ opacity: 0.2 }}
              />

              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full"
                  variants={shimmerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />

                <div className="flex items-center gap-4 mb-6">
                  <motion.img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-20 h-20 object-contain"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {partner.name}
                    </h4>
                    <p className="text-sm text-gray-500">{partner.location}</p>
                  </div>
                </div>

                <div className={`bg-${partner.hoverColor}-50 p-4 rounded-xl`}>
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    {partner.name.includes("Greiner")
                      ? "Biotechnology & Diagnostics Leader"
                      : partner.name.includes("i-SENS")
                        ? "Point-of-Care Systems Leader"
                        : partner.name.includes("NeoMedica")
                          ? "Innovative IVD Solutions"
                          : partner.name.includes("AMS")
                            ? "Research Services"
                            : "User-Friendly IVD Solutions"}
                  </p>
                  <p className="text-sm text-gray-700">{partner.description}</p>

                  {partner.note && (
                    <motion.div
                      className="mt-3 p-2 bg-white rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-xs font-semibold text-gray-700">
                        Scope:{" "}
                        <span className="text-[#E81729]">{partner.note}</span>
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section B Header */}
        <motion.div
          ref={advancedDiagnosticRef}
          className="max-w-5xl mb-8"
          initial="hidden"
          animate={isAdvancedDiagnosticInView ? "visible" : "hidden"}
          variants={fadeInLeft}
        >
          <h4 className="text-2xl font-bold text-gray-900 mb-4">
            B. Advanced Diagnostic Systems
          </h4>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-[#E81729] to-black rounded-full"
            variants={growWidth}
            initial="hidden"
            animate={isAdvancedDiagnosticInView ? "visible" : "hidden"}
          />
          <motion.p
            className="text-gray-600 mt-2"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Clinical Chemistry and Hematology Specialists
          </motion.p>
        </motion.div>

        {/* ADVANCED DIAGNOSTIC CARDS */}
        <motion.div
          ref={advancedPartnersRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate={isAdvancedPartnersInView ? "visible" : "hidden"}
          viewport={{ once: true }}
        >
          {advancedPartners.map((partner, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardItem}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${partner.gradient} rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                whileHover={{ opacity: 0.2 }}
              />

              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full"
                  variants={shimmerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />

                <div className="flex items-center gap-4 mb-6">
                  <motion.img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-20 h-20 object-contain"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {partner.name}
                    </h4>
                    <p className="text-sm text-gray-500">{partner.location}</p>
                  </div>
                </div>

                <div className={`bg-${partner.hoverColor}-50 p-4 rounded-xl`}>
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    {partner.name.includes("DieSure")
                      ? "Clinical Chemistry Distribution"
                      : partner.name.includes("DYMIND")
                        ? "Hematology Innovation"
                        : "Core IVD Technology Platforms"}
                  </p>
                  <p className="text-sm text-gray-700">{partner.description}</p>

                  {partner.note && (
                    <motion.div
                      className="mt-3 p-2 bg-white rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-xs font-semibold text-gray-700">
                        Focus:{" "}
                        <span className="text-[#E81729]">{partner.note}</span>
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsServices;
