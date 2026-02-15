import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CorporateCitizenship = () => {
  // Refs for each section
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const awardsSectionRef = useRef(null);
  const strategicCardRef = useRef(null);
  const csrSectionRef = useRef(null);
  const sportsCardRef = useRef(null);
  const philanthropicCardRef = useRef(null);

  // Check if sections are in view
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isAwardsSectionInView = useInView(awardsSectionRef, {
    once: true,
    amount: 0.2,
  });
  const isStrategicCardInView = useInView(strategicCardRef, {
    once: true,
    amount: 0.2,
  });
  const isCsrSectionInView = useInView(csrSectionRef, {
    once: true,
    amount: 0.2,
  });
  const isSportsCardInView = useInView(sportsCardRef, {
    once: true,
    amount: 0.3,
  });
  const isPhilanthropicCardInView = useInView(philanthropicCardRef, {
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

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
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
      width: "8rem",
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="pt-20 md:pt-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* ANIMATED HEADER */}
        <motion.div
          ref={headerRef}
          className="relative mb-10 md:mb-16"
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute -left-2 md:-left-6 top-1/2 transform -translate-y-1/2 w-9 h-9 md:w-12 md:h-12"
            variants={scaleIn}
          >
            <motion.div
              className="w-full h-full bg-gradient-to-r from-[#E81729] to-red-600 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                className="w-4 h-4 md:w-6 md:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
              </svg>
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 md:mb-4 ml-10 md:ml-16 leading-tight"
            variants={staggerContainer}
          >
            <motion.span className="text-gray-900" variants={fadeInUp}>
              CORPORATE CITIZENSHIP &
            </motion.span>{" "}
            <motion.span
              className="text-[#E81729]"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              EXTERNAL VALIDATION
            </motion.span>
          </motion.h2>

          <motion.div
            className="h-1 w-24 md:w-32 bg-gradient-to-r from-[#E81729] to-red-500 ml-10 md:ml-16 rounded-full"
            variants={growWidth}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
          />
        </motion.div>

        {/* AWARDS & RECOGNITION SECTION */}
        <motion.div
          ref={awardsSectionRef}
          className="mb-12 md:mb-20"
          initial="hidden"
          animate={isAwardsSectionInView ? "visible" : "hidden"}
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8"
            variants={cardItem}
          >
            <motion.div
              className="p-2.5 md:p-3 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl shadow-lg"
              variants={scaleIn}
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 15l4.243-4.243-1.415-1.414L12 12.172l-2.828-2.829-1.415 1.414zM5 22h14v2H5v-2zm7-20a7 7 0 017 7h-2a5 5 0 00-10 0H5a7 7 0 017-7z" />
              </svg>
            </motion.div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-gray-900"
              variants={fadeInLeft}
            >
              Awards & Recognition
            </motion.h3>
          </motion.div>

          {/* STRATEGIC ENGAGEMENT CARD */}
          <motion.div
            ref={strategicCardRef}
            className="mb-10 md:mb-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-1 border border-gray-100 group"
            variants={fadeInUp}
            initial="hidden"
            animate={isStrategicCardInView ? "visible" : "hidden"}
            viewport={{ once: true }}
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

            <motion.div
              className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6"
              variants={staggerContainer}
            >
              <motion.div className="flex-shrink-0" variants={scaleIn}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
              </motion.div>

              <motion.div className="flex-grow" variants={staggerContainer}>
                <motion.h3
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
                  variants={cardItem}
                >
                  Elhoda International: Strategic Engagement and Corporate
                  Citizenship
                  <motion.span
                    className="block text-base md:text-lg font-medium text-gray-600 mt-2"
                    variants={cardItem}
                  >
                    Industry Engagement & Events
                  </motion.span>
                </motion.h3>

                <motion.p
                  className="text-sm md:text-base text-gray-700 mb-5 md:mb-6 leading-relaxed"
                  variants={cardItem}
                >
                  Elhoda International is a dedicated leader in the healthcare
                  sector, focused on delivering high-quality solutions and
                  fostering robust professional engagement across the Middle
                  East and Africa. Our commitment extends beyond commercial
                  success to encompass active industry participation and vital
                  corporate social responsibility.
                </motion.p>

                {/* GLOBAL SCOPE SECTION */}
                <motion.div
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 md:p-6 mb-6 md:mb-8 border-l-4 border-blue-500"
                  variants={cardItem}
                >
                  <motion.h4
                    className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3"
                    variants={cardItem}
                  >
                    <motion.svg
                      className="w-5 h-5 md:w-6 md:h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </motion.svg>
                    Strategic Industry Engagement & Global Market Scope
                  </motion.h4>

                  <motion.div
                    className="grid md:grid-cols-2 gap-4 md:gap-6"
                    variants={staggerContainer}
                  >
                    <motion.div variants={cardItem}>
                      <p className="text-gray-700 mb-4">
                        Elhoda International strategically engages with the
                        healthcare ecosystem across the Middle East and Africa,
                        underscoring our expansive market reach and commitment
                        to industry leadership.
                      </p>
                      <p className="text-gray-700">
                        Our active participation in premier international and
                        regional events is crucial for forging pivotal
                        partnerships, facilitating knowledge exchange, and
                        staying ahead of market trends and medical advancements.
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-white rounded-lg p-3 md:p-4 shadow-inner"
                      variants={scaleIn}
                    >
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm md:text-base">
                        <svg
                          className="w-5 h-5 text-[#E81729]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                        </svg>
                        Key Industry Platforms
                      </h5>
                      <ul className="space-y-2.5 md:space-y-3">
                        {[
                          {
                            title: "Africa Health ExCon",
                            description:
                              "Targeting the vast, dynamic African market",
                          },
                          {
                            title: "Arab Health (Dubai)",
                            description: "GCC & Middle East leadership",
                          },
                          {
                            title: "EgyHealth",
                            description:
                              "Foundational Egyptian market presence",
                          },
                        ].map((platform, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center gap-2.5 md:gap-3 group md:hover:translate-x-2 transition-transform text-sm md:text-base"
                            variants={cardItem}
                          >
                            <div className="w-2 h-2 bg-[#E81729] rounded-full"></div>
                            <span>
                              <strong className="text-gray-900">
                                {platform.title}:
                              </strong>{" "}
                              {platform.description}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* GOVERNMENT COLLABORATION */}
                <motion.div
                  className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 md:p-6 border border-gray-200"
                  variants={cardItem}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <motion.div
                      className="flex-shrink-0 p-2.5 md:p-3 bg-gradient-to-br from-green-100 to-emerald-50 rounded-lg"
                      variants={scaleIn}
                    >
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-green-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                    </motion.div>
                    <motion.p
                      className="text-sm md:text-base text-gray-700 italic"
                      variants={fadeInRight}
                    >
                      We actively collaborate with governmental bodies on
                      critical national initiatives, including working in
                      cooperation with the General Authority for Healthcare on
                      behalf of the Egyptian Cabinet/Council of Ministers. This
                      strategic involvement solidifies our role as a trusted
                      partner in regional healthcare development.
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CSR SECTION */}
          <motion.div
            ref={csrSectionRef}
            className="bg-gradient-to-br from-white to-rose-50 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-1 border border-rose-100 group"
            variants={fadeInUp}
            initial="hidden"
            animate={isCsrSectionInView ? "visible" : "hidden"}
            viewport={{ once: true }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full"
              variants={shimmerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            <motion.div
              className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8"
              variants={cardItem}
            >
              <motion.div
                className="p-2.5 md:p-3 bg-gradient-to-br from-rose-100 to-pink-50 rounded-xl shadow-lg"
                variants={scaleIn}
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-rose-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-gray-900"
                variants={fadeInLeft}
              >
                Corporate Social Responsibility (CSR)
              </motion.h3>
            </motion.div>

            <motion.p
              className="text-sm md:text-base text-gray-700 mb-7 md:mb-10 leading-relaxed"
              variants={cardItem}
            >
              Elhoda International is actively engaged in initiatives that
              promote community health, fitness, and social support. Our CSR
              activities demonstrate our commitment to well-being beyond our
              core business.
            </motion.p>

            <motion.div className="space-y-5 md:space-y-8" variants={staggerContainer}>
              {/* SPORTS PROMOTION CARD */}
              <motion.div
                ref={sportsCardRef}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-white to-red-50 p-4 md:p-6 shadow-lg border border-red-100 hover:shadow-xl transition-all duration-500"
                variants={fadeInUp}
                initial="hidden"
                animate={isSportsCardInView ? "visible" : "hidden"}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <svg
                    className="w-full h-full text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 30"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>

                <motion.div
                  className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6"
                  variants={staggerContainer}
                >
                  <motion.div className="flex-shrink-0" variants={scaleIn}>
                    <motion.div
                      className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-[#E81729] rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-7 h-8 md:w-10 md:h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 30"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </motion.div>
                  </motion.div>

                  <motion.div className="flex-grow" variants={staggerContainer}>
                    <motion.h4
                      className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2 md:gap-3"
                      variants={cardItem}
                    >
                      <span className="p-1.5 md:p-2 bg-red-100 rounded-lg">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 9v-3c0-1.1-.9-2-2-2h-4c-.55 0-1 .45-1 1s.45 1 1 1h4v3h-2.85l-.38.78c-.2.4-.62.64-1.07.64H9.3c-.45 0-.87-.24-1.07-.64L7.85 9H5v11h14V9h-1zm-6 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                        </svg>
                      </span>
                      Promoting Health Through Sport
                    </motion.h4>
                    <motion.p className="text-sm md:text-base text-gray-700" variants={cardItem}>
                      Elhoda champions physical fitness and teamwork. We were
                      proud champions of the high-profile{" "}
                      <span className="font-bold text-red-700 bg-red-50 px-2 py-0.5 md:py-1 rounded">
                        "100 Million Healthy Lives Football Championship,"
                      </span>{" "}
                      an event endorsed by senior governmental figures,
                      including H.E. Dr. Khaled Abdel Ghaffar, Vice-President of
                      the Council of Ministers and Minister of Health. Our
                      participation underscores the importance of a healthy,
                      active workforce.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* PHILANTHROPIC SUPPORT CARD */}
              <motion.div
                ref={philanthropicCardRef}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-white to-purple-50 p-4 md:p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-500"
                variants={fadeInUp}
                initial="hidden"
                animate={isPhilanthropicCardInView ? "visible" : "hidden"}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <svg
                    className="w-full h-full text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                  </svg>
                </div>

                <motion.div
                  className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6"
                  variants={staggerContainer}
                >
                  <motion.div className="flex-shrink-0" variants={scaleIn}>
                    <motion.div
                      className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-7 h-7 md:w-10 md:h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                      </svg>
                    </motion.div>
                  </motion.div>

                  <motion.div className="flex-grow" variants={staggerContainer}>
                    <motion.h4
                      className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2 md:gap-3"
                      variants={cardItem}
                    >
                      <span className="p-1.5 md:p-2 bg-purple-100 rounded-lg">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </span>
                      Community and Philanthropic Support
                    </motion.h4>
                    <motion.p className="text-sm md:text-base text-gray-700" variants={cardItem}>
                      Elhoda International provides consistent support to
                      critical social causes. We are a key contributor to the{" "}
                      <span className="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 md:py-1 rounded">
                        Baheya Foundation,
                      </span>{" "}
                      assisting its mission through philanthropic support across
                      various levels.
                    </motion.p>

                    <motion.div
                      className="mt-5 md:mt-6 flex items-start md:items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg shadow-inner"
                      variants={cardItem}
                    >
                      <div className="p-1.5 md:p-2 bg-purple-100 rounded-lg">
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                        </svg>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 italic">
                        Supporting breast cancer awareness, early detection, and
                        treatment initiatives across Egypt
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateCitizenship;
