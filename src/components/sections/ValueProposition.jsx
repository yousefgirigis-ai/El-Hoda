import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ValueProposition = () => {
  // Refs for each section
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  // Check if sections are in view
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.2 });

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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const numberVariants = {
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

  // Value proposition cards data
  const valueCards = [
    {
      id: 1,
      title: "Supply Chain Resilience & Cost Efficiency",
      description: `We reduce reliance on lengthy, costly international logistics by achieving regional self-sufficiency through vertical integration. By locally manufacturing critical IVD reagents, consumables, and Infection Prevention and Control (IPC) products, we guarantee supply stability, faster access, and significantly lower operational expenses for our clients.`,
      gradient: "from-black to-[#E81729]",
      numberGradient: "from-black to-[#E81729]",
      highlights: [
        "regional self-sufficiency",
        "vertical integration",
        "supply stability, faster access",
        "operational expenses",
      ],
    },
    {
      id: 2,
      title: "Uncompromising Quality & Compliance",
      description: `We assure partners of world-class quality without the premium import cost. Our operations, from R&D to final product assembly, are rigorously compliant with ISO 13485 and Good Manufacturing Practice (GMP). This adherence to global standards provides absolute assurance that all products are safe, reliable, and meet verifiable performance benchmarks.`,
      gradient: "from-[#E81729] to-black",
      numberGradient: "from-[#E81729] to-black",
      highlights: ["ISO 13485", "Good Manufacturing Practice (GMP)"],
    },
    {
      id: 3,
      title: "Integrated Portfolio & Streamlined Procurement",
      description: `Customers benefit from a single, trusted source for comprehensive solutions. We seamlessly integrate essential, locally manufactured consumables with advanced, internationally distributed diagnostic systems (e.g., analyzers and specialized devices). This integrated offering simplifies procurement, technical support, and training, resulting in operational streamlining for hospitals and laboratories.`,
      gradient: "from-black to-[#E81729]",
      numberGradient: "from-black to-[#E81729]",
      highlights: ["single, trusted source", "operational streamlining"],
    },
    {
      id: 4,
      title: "Commitment to Regional Healthcare Value",
      description: `Our strategic focus is on delivering high-value products —solutions that are high-quality, low-cost, and easy-to-use. By enhancing diagnostic accuracy and efficiency, El Hoda directly supports healthcare providers in making quality patient care more accessible across the region, fulfilling our dedication to improving public health outcomes.`,
      gradient: "from-[#E81729] to-black",
      numberGradient: "from-[#E81729] to-black",
      highlights: [
        "high-value products",
        "quality patient care more accessible",
      ],
    },
  ];

  return (
    <section
      ref={containerRef}
      className="pt-10 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* ENHANCED HEADER SECTION */}
        <motion.div
          ref={headerRef}
          className="max-w-5xl mb-20 relative"
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#E81729]/10 to-black/5 rounded-full blur-xl"
            variants={scaleIn}
          />

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 relative"
            variants={staggerContainer}
          >
            <motion.span
              className="bg-gradient-to-r from-black to-gray-900 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              EL HODA
            </motion.span>{" "}
            <motion.span
              className="bg-gradient-to-r from-[#E81729] to-[#B31020] bg-clip-text text-transparent"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              VALUE PROPOSITION
            </motion.span>
          </motion.h2>

          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            variants={fadeInLeft}
          >
            <div className="w-12 h-1 bg-gradient-to-r from-black to-[#E81729] rounded-full" />
            <span className="text-[#E81729] font-bold text-lg tracking-wide">
              THE EL HODA ADVANTAGE
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-[#E81729] to-black rounded-full" />
          </motion.div>

          <motion.div
            className="text-gray-800 leading-relaxed text-lg bg-gradient-to-r from-white to-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm group"
            variants={fadeInUp}
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
            El Hoda's core mission is to solve the fundamental healthcare
            challenge in the Middle East and Africa: ensuring{" "}
            <span className="font-bold text-[#E81729] bg-gradient-to-r from-[#E81729]/10 to-transparent px-1 rounded">
              consistent, rapid access to world-class, cost-effective diagnostic
              and prevention solutions.
            </span>
            <br />
            <br />
            Our Value Proposition is defined by the strategic nexus of localized
            manufacturing and global distribution, offering clients four
            distinct advantages:
          </motion.div>
        </motion.div>

        {/* ENHANCED VALUE CARDS */}
        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl"
          variants={staggerContainer}
          initial="hidden"
          animate={isCardsInView ? "visible" : "hidden"}
          viewport={{ once: true }}
        >
          {valueCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="group relative"
              variants={cardItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card background glow */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-2xl blur opacity-10`}
                initial={{ opacity: 0.1 }}
                animate={{ opacity: 0.1 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.5 }}
              />

              {/* Main card container */}
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full"
                  variants={shimmerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />

                {/* Card header with number */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="relative"
                    variants={numberVariants}
                    initial="hidden"
                    animate={isCardsInView ? "visible" : "hidden"}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${card.numberGradient} rounded-lg blur-md opacity-20`}
                      animate={{
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.span
                      className={`relative text-white text-3xl font-bold bg-gradient-to-br ${card.numberGradient} p-3 rounded-lg shadow`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {String(card.id).padStart(2, "0")}
                    </motion.span>
                  </motion.div>

                  <motion.h4
                    className="text-xl font-bold text-gray-900 group-hover:text-[#E81729] transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {card.title}
                  </motion.h4>
                </div>

                {/* Card content */}
                <motion.p
                  className="text-gray-700 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {card.description.split(/(?=\s)/).map((word, wordIndex) => {
                    const isHighlighted = card.highlights.some((highlight) =>
                      word.includes(highlight),
                    );

                    if (isHighlighted) {
                      return (
                        <span
                          key={wordIndex}
                          className="font-semibold text-[#E81729] animate-pulse-slow"
                          style={{ animationDelay: `${wordIndex * 50}ms` }}
                        >
                          {word}
                        </span>
                      );
                    }
                    return word;
                  })}
                </motion.p>

                {/* Animated underline */}
                <motion.div
                  className={`mt-6 h-0.5 bg-gradient-to-r ${card.gradient} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Section */}
        <motion.div
          className="max-w-5xl mx-auto mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative group">
            <motion.div
              className="absolute -inset-3 bg-gradient-to-r from-[#E81729]/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
