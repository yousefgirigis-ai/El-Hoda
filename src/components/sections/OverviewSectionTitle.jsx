import React from "react";
import { motion } from "framer-motion";

const OverviewSectionTitle = ({
  titleStart,
  titleAccent,
  titleEnd = "",
  subtitle,
  className = "",
  align = "center",
}) => {
  const isLeft = align === "left";

  return (
    <motion.div
      className={`${isLeft ? "text-left" : "text-center"} ${className}`}
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
        <motion.span
          className="text-black"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {titleStart}
        </motion.span>{" "}
        <motion.span
          className="text-[#E81729]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {titleAccent}
        </motion.span>{" "}
        {titleEnd ? (
          <motion.span
            className="text-black"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {titleEnd}
          </motion.span>
        ) : null}
      </h2>

      <motion.div
        className={`h-1.5 bg-[#E81729] rounded-full mb-6 ${isLeft ? "" : "mx-auto"}`}
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 96, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35 }}
      />

      {subtitle ? (
        <motion.p
          className="text-gray-600 text-lg font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
};

export default OverviewSectionTitle;
