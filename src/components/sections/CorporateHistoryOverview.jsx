import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import OverviewSectionTitle from "./OverviewSectionTitle";

const CorporateHistory = () => {
  // Refs for each timeline item
  const containerRef = useRef(null);
  const item2004Ref = useRef(null);
  const item2004_2020Ref = useRef(null);
  const item2020Ref = useRef(null);
  const item2022Ref = useRef(null);
  const itemRecentRef = useRef(null);
  const item2026Ref = useRef(null);

  // Check if items are in view
  const is2004InView = useInView(item2004Ref, { once: true, amount: 0.3 });
  const is2004_2020InView = useInView(item2004_2020Ref, {
    once: true,
    amount: 0.3,
  });
  const is2020InView = useInView(item2020Ref, { once: true, amount: 0.3 });
  const is2022InView = useInView(item2022Ref, { once: true, amount: 0.3 });
  const isRecentInView = useInView(itemRecentRef, { once: true, amount: 0.3 });
  const is2026InView = useInView(item2026Ref, { once: true, amount: 0.3 });

  // Animation variants
  const timelineItemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const timelineDotVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const lineVariants = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const logoVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const cardContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={containerRef}
      className="pt-32 pb-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION TITLE */}
        <OverviewSectionTitle
          className="mb-20"
          titleStart="CORPORATE"
          titleAccent="HISTORY"
          titleEnd="& KEY MILESTONES"
          subtitle="Corporate Milestones: Charting Our Growth"
        />

        {/* THE ROADMAP CONTAINER */}
        <div className="relative">
          {/* Animated Central Path Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-100 hidden md:block overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              className="w-full h-full bg-gradient-to-b from-[#E81729] via-[#E81729] to-gray-200 opacity-20"
              variants={lineVariants}
            />
          </motion.div>

          <div className="space-y-12">
            {/* 2004 - Foundation */}
            <motion.div
              className="relative flex flex-col md:flex-row items-center justify-between w-full group"
              ref={item2004Ref}
              variants={timelineItemVariants}
              initial="hidden"
              animate={is2004InView ? "visible" : "hidden"}
            >
              <div className="md:w-5/12 mb-8 md:mb-0">
                <motion.div
                  className="p-8 bg-white border-t-4 border-[#E81729] shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  variants={cardContentVariants}
                  initial="hidden"
                  animate={is2004InView ? "visible" : "hidden"}
                >
                  <motion.span
                    className="text-[#E81729] font-black text-2xl block"
                    variants={textItemVariants}
                  >
                    2004
                  </motion.span>
                  <motion.h3
                    className="text-xl font-bold text-black mt-2"
                    variants={textItemVariants}
                  >
                    Foundation & Market Entry Formally
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mt-3 leading-relaxed"
                    variants={textItemVariants}
                  >
                    Established and commenced operations, specializing in the
                    import and distribution of advanced laboratory consumables,
                    including chemistry analyzers and blood collection systems.
                  </motion.p>
                </motion.div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                <motion.div
                  className="w-8 h-8 rounded-full bg-white border-4 border-[#E81729] z-10 shadow-[0_0_15px_rgba(232,23,41,0.4)]"
                  variants={timelineDotVariants}
                  initial="hidden"
                  animate={is2004InView ? "visible" : "hidden"}
                />
              </div>
              <div className="md:w-5/12 hidden md:block"></div>
            </motion.div>

            {/* 2004 – 2020 - Agencies */}
            <motion.div
              className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full group"
              ref={item2004_2020Ref}
              variants={timelineItemVariants}
              initial="hidden"
              animate={is2004_2020InView ? "visible" : "hidden"}
            >
              <div className="md:w-5/12 mb-8 md:mb-0">
                <motion.div
                  className="p-8 bg-gray-50 border-t-4 border-black shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  variants={cardContentVariants}
                  initial="hidden"
                  animate={is2004_2020InView ? "visible" : "hidden"}
                >
                  <motion.span
                    className="text-black font-black text-2xl block"
                    variants={textItemVariants}
                  >
                    2004 – 2020
                  </motion.span>
                  <motion.h3
                    className="text-xl font-bold text-black mt-2"
                    variants={textItemVariants}
                  >
                    Strategic Agency Expansion
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mt-3 leading-relaxed mb-4"
                    variants={textItemVariants}
                  >
                    Secured exclusive representation agreements with leading
                    global manufacturers, establishing a strong reputation for
                    product quality. Key agencies obtained include:
                  </motion.p>

                  <motion.div
                    className="space-y-3 mb-6"
                    variants={cardContentVariants}
                  >
                    {[
                      {
                        company: "Greiner (Austria)",
                        desc: "Blood collection tubes.",
                      },
                      {
                        company: "i-SENS (Korea)",
                        desc: "Glucose meters and test strips.",
                      },
                      {
                        company: "Neomedica (Serbia)",
                        desc: "Chemistry analyzers and reagents.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start"
                        variants={textItemVariants}
                        custom={index}
                      >
                        <div className="min-w-2 h-2 rounded-full bg-[#E81729] mt-1.5 mr-3"></div>
                        <p className="text-gray-600">
                          <strong className="text-black">
                            {item.company}:
                          </strong>{" "}
                          {item.desc}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="flex flex-wrap gap-6 items-center">
                    {[
                      { name: "GREINER", country: "Austria" },
                      { name: "i-SENS", country: "Korea" },
                      { name: "NEOMEDICA", country: "Serbia" },
                    ].map((logo, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col items-center"
                        variants={logoVariants}
                        initial="hidden"
                        animate={is2004_2020InView ? "visible" : "hidden"}
                        custom={index}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="h-10 w-24 bg-white border border-gray-200 rounded flex items-center justify-center grayscale hover:grayscale-0 transition-all p-1 shadow-md hover:shadow-lg duration-300">
                          <span className="text-[10px] font-bold">
                            {logo.name}
                          </span>
                        </div>
                        <span className="text-[10px] mt-1 text-gray-500">
                          {logo.country}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                <motion.div
                  className="w-8 h-8 rounded-full bg-white border-4 border-black z-10"
                  variants={timelineDotVariants}
                  initial="hidden"
                  animate={is2004_2020InView ? "visible" : "hidden"}
                />
              </div>
              <div className="md:w-5/12 hidden md:block"></div>
            </motion.div>

            {/* 2020 - Manufacturing */}
            <motion.div
              className="relative flex flex-col md:flex-row items-center justify-between w-full group"
              ref={item2020Ref}
              variants={timelineItemVariants}
              initial="hidden"
              animate={is2020InView ? "visible" : "hidden"}
            >
              <div className="md:w-5/12 mb-8 md:mb-0">
                <motion.div
                  className="p-8 bg-white border-t-4 border-[#E81729] shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  variants={cardContentVariants}
                  initial="hidden"
                  animate={is2020InView ? "visible" : "hidden"}
                >
                  <motion.span
                    className="text-[#E81729] font-black text-2xl block"
                    variants={textItemVariants}
                  >
                    2020
                  </motion.span>
                  <motion.h3
                    className="text-xl font-bold text-black mt-2"
                    variants={textItemVariants}
                  >
                    Vertical Integration & Local Manufacturing Launch
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mt-3 leading-relaxed"
                    variants={textItemVariants}
                  >
                    Achieved a pivotal strategic milestone by expanding into
                    local manufacturing. This established facility focuses on
                    high-volume production of medical plastic consumables (e.g.,
                    Petri dishes, swabs, urine containers) to ensure superior
                    supply chain control and cost efficiency.
                  </motion.p>
                </motion.div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                <motion.div
                  className="w-8 h-8 rounded-full bg-white border-4 border-[#E81729] z-10 shadow-[0_0_15px_rgba(232,23,41,0.4)]"
                  variants={timelineDotVariants}
                  initial="hidden"
                  animate={is2020InView ? "visible" : "hidden"}
                />
              </div>
              <div className="md:w-5/12 hidden md:block"></div>
            </motion.div>

            {/* 2022 - Diversification */}
            <motion.div
              className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full group"
              ref={item2022Ref}
              variants={timelineItemVariants}
              initial="hidden"
              animate={is2022InView ? "visible" : "hidden"}
            >
              <div className="md:w-5/12 mb-8 md:mb-0">
                <motion.div
                  className="p-8 bg-gray-50 border-t-4 border-black shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  variants={cardContentVariants}
                  initial="hidden"
                  animate={is2022InView ? "visible" : "hidden"}
                >
                  <motion.span
                    className="text-black font-black text-2xl block"
                    variants={textItemVariants}
                  >
                    2022
                  </motion.span>
                  <motion.h3
                    className="text-xl font-bold text-black mt-2"
                    variants={textItemVariants}
                  >
                    Portfolio Diversification
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mt-3 leading-relaxed"
                    variants={textItemVariants}
                  >
                    Aggressively diversified the product line with the local
                    manufacturing of rapid diagnostic tests (e.g.,
                    drug-of-abuse, pregnancy test cards) and the introduction of{" "}
                    {}
                    <span className="font-semibold text-black">
                      sterilization products through a UK partnership.
                    </span>
                  </motion.p>
                </motion.div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                <motion.div
                  className="w-8 h-8 rounded-full bg-white border-4 border-black z-10"
                  variants={timelineDotVariants}
                  initial="hidden"
                  animate={is2022InView ? "visible" : "hidden"}
                />
              </div>
              <div className="md:w-5/12 hidden md:block"></div>
            </motion.div>

            {/* Recent - Reagents */}
            <motion.div
              className="relative flex flex-col md:flex-row items-center justify-between w-full group"
              ref={itemRecentRef}
              variants={timelineItemVariants}
              initial="hidden"
              animate={isRecentInView ? "visible" : "hidden"}
            >
              <div className="md:w-5/12 mb-8 md:mb-0">
                <motion.div
                  className="p-8 bg-white border-t-4 border-[#E81729] shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  variants={cardContentVariants}
                  initial="hidden"
                  animate={isRecentInView ? "visible" : "hidden"}
                >
                  <motion.span
                    className="text-[#E81729] font-black text-lg block"
                    variants={textItemVariants}
                  >
                    RECENT
                  </motion.span>
                  <motion.h3
                    className="text-xl font-bold text-black mt-1"
                    variants={textItemVariants}
                  >
                    Analyzer and Reagent Manufacturing
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mt-3 leading-relaxed"
                    variants={textItemVariants}
                  >
                    Successfully developed internal capability for the local
                    production of Chemistry Analyzers and Reagents, completing
                    the vertical integration across core laboratory product
                    systems.
                  </motion.p>
                </motion.div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                <motion.div
                  className="w-8 h-8 rounded-full bg-white border-4 border-[#E81729] z-10 shadow-[0_0_15px_rgba(232,23,41,0.4)]"
                  variants={timelineDotVariants}
                  initial="hidden"
                  animate={isRecentInView ? "visible" : "hidden"}
                />
              </div>
              <div className="md:w-5/12 hidden md:block"></div>
            </motion.div>

            {/* 2026 - Expansion */}
            <motion.div
              className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full group"
              ref={item2026Ref}
              variants={timelineItemVariants}
              initial="hidden"
              animate={is2026InView ? "visible" : "hidden"}
            >
              <div className="md:w-5/12 mb-8 md:mb-0">
                <motion.div
                  className="p-8 bg-black text-white shadow-2xl rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl border-b-4 border-[#E81729]"
                  variants={cardContentVariants}
                  initial="hidden"
                  animate={is2026InView ? "visible" : "hidden"}
                >
                  <motion.span
                    className="text-[#E81729] font-black text-2xl block"
                    variants={textItemVariants}
                  >
                    2026
                  </motion.span>
                  <motion.h3
                    className="text-xl font-bold mt-2"
                    variants={textItemVariants}
                  >
                    Regional Expansion (Middle East & Africa)
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 mt-3 leading-relaxed"
                    variants={textItemVariants}
                  >
                    Committing to our regional vision, the company is preparing
                    to launch direct sales and distribution operations across
                    the Middle East and Africa regions, marking a new chapter in
                    geographical market penetration.
                  </motion.p>
                </motion.div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                <motion.div
                  className="w-10 h-10 rounded-full bg-[#E81729] z-10 border-4 border-white animate-pulse"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    is2026InView
                      ? {
                          scale: 1,
                          opacity: 1,
                          rotate: 360,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    rotate: {
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                    scale: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    },
                  }}
                />
              </div>
              <div className="md:w-5/12 hidden md:block"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateHistory;
