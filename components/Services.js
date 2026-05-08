"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    name: "Physiotherapy Care",
    desc: "From back pain and sports injuries to post-surgical recovery, our registered physiotherapists create personalized treatment plans that deliver real, lasting results.",
  },
  {
    num: "02",
    name: "Gunn IMS ",
    suffixName: "(Intramuscular Stimulation)",
    desc: "A specialized needle technique that targets the root cause of chronic pain and nerve-related muscle tightness — effective when other treatments haven't worked.",
  },
  {
    num: "03",
    name: "Dry Needling",
    desc: "Precise needle therapy that releases stubborn muscle trigger points, relieves tension, and restores pain-free movement — often with noticeable results from the first session.",
  },
  {
    num: "04",
    name: "Vestibular Rehabilitation",
    suffixName: "(Vertigo Treatment)",
    desc: "Specialized rehab for vertigo, BPPV, and balance disorders — helping you regain stability and confidence in your daily movement.",
  },
  {
    num: "05",
    name: "Motor Vehicle Accidents ",
    suffixName: "(MVA) Rehabilitation",
    desc: "Comprehensive recovery care for whiplash and collision-related injuries, with direct insurance billing support to keep your focus on healing.",
  },
  {
    num: "06",
    name: "Custom Orthotics",
    desc: "Prescription foot orthotics designed from a full biomechanical assessment — reducing pain and improving alignment for lasting everyday comfort.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-10 sm:py-20 px-7 sm:px-10 bg-[#FAF8F3] overflow-hidden"
    >
      <div className="max-w-[1086px] mx-auto">
        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[18%] text-[#BD911F] mb-3">
            What We Offer
          </p>

          <h2 className="cormorant text-4xl sm:text-5xl md:text-[56px] text-[#1E2D40] leading-tight mb-10 sm:mb-[72px]">
            Our{" "}
            <em className="italic text-[#C9A84C]">Physiotherapy Services</em>
            <br />
            in Oakville
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-200">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className={`p-8 bg-white hover:bg-[#F8F7F4] transition-colors duration-300 ${
                i % 3 !== 2 ? "lg:border-r" : ""
              }  border-b border-gray-200`}
            >
              <p className="text-[27px] cormorant text-[#D9AE3F]">{s.num}</p>

              <h3 className="cormorant text-[22px] text-[#051941] mt-5">
                {s.name}{" "}
              </h3>

              <div
                className="cormorant text-[#051941] text-[15px] mb-5"
                dangerouslySetInnerHTML={{ __html: s.suffixName || "" }}
              ></div>

              <p className="text-sm text-[#919191] leading-5">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="bg-[#051941] hover:bg-[#083284] text-white text-sm font-semibold uppercase tracking-[12%] px-[52px] py-4 transition-colors inline-block"
          >
            View All Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
