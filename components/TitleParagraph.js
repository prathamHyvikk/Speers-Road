"use client";

import React from "react";
import { motion } from "framer-motion";

const TitleParagraph = ({ title = "Heading", content = [] }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-[1240px] mx-auto  md:px-8 py-5 "
    >
      <div className="mb-5">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#1E2D40] tracking-tight leading-tight">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="space-y-5">
        {content.map((paragraph, index) => (
          <p
            key={index}
            className="text-[#6F6F6F] text-[17px] md:text-[19px] leading-[1.9] break-words"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default TitleParagraph;
