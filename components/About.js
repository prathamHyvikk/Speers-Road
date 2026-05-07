"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 px-10 bg-[#BD911F] overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[634px] text-white mb-7"
        >
          <p className="text-[52px] cormorant">
            Oakville&apos;s Physiotherapy Clinic
            <span className="text-[#1E2D40] italic"> That Puts You </span>
            First{" "}
          </p>
        </motion.div>

        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[#FFFFFFB5] text-2xl leading-relaxed mb-4"
        >
          At Speers Road Physiotherapy, we believe that great care goes beyond
          just treating symptoms. Located conveniently in the heart of Oakville,
          Ontario, our clinic brings together a dedicated team of registered
          physiotherapists, IMS-certified practitioners, and rehabilitation
          specialists — all focused on one goal: your recovery.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-[#FFFFFFB5] text-2xl leading-relaxed"
        >
          We take time to understand your condition, your lifestyle, and your
          goals. From your very first visit, you&apos;ll experience hands-on,
          one-on-one care tailored specifically to you. That&apos;s what makes
          us one of the most trusted physiotherapy clinics in Oakville
        </motion.p>
      </div>
    </section>
  );
}
