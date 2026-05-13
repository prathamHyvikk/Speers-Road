"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const TitlePoints = ({ title = "", subInfo = "", points = [] }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-[1240px] mx-auto px-0 md:px-8 py-8"
    >
      <div className="">
        {/* Small Heading */}
        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-medium text-[#1E2D40] tracking-tight">
            {title}
          </h4>

          <p className="mt-3 text-[#777777] text-[16px] md:text-[17px] leading-relaxed max-w-4xl">
            {subInfo}
          </p>
        </div>

        {/* Points */}
        <div className="">
          <ul className="space-y-4 pl-5">
            {points.map((point, index) => (
              <li
                key={index}
                className="text-[#6F6F6F] break-words text-[17px] md:text-[19px] leading-[1.6] marker:text-[#C9A84C] list-disc"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default TitlePoints;
