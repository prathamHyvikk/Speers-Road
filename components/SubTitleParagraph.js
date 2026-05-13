"use client";

import React from "react";
import { motion } from "framer-motion";

const SubTitleParagraph = ({
  title = "Heading",
  content = [],
  titleWeight = "font-semibold",
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-[1240px] mx-auto  md:px-8 py-3"
    >
      {/* Sub Title */}
      <div className="mb-3">
        <h4
          className={`text-xl md:text-2xl  text-[#1E2D40] ${titleWeight} tracking-tight`}
        >
          {title}
        </h4>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {content.map((paragraph, index) => (
          <p
            key={index}
            className="text-[#6F6F6F] text-[16px] md:text-[17px] leading-[1.8] break-words"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default SubTitleParagraph;
