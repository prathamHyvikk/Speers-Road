"use client";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

export default function ServiceHero() {
  return (
    <section className="relative text-white min-h-[580px] flex items-center overflow-hidden">
      <div
        className="absolute w-full lg:max-w-[70vw] ml-auto inset-0 bg-cover bg-center animate-zoom opacity-30 lg:opacity-100 transition-transform duration-[10s] py-20 "
        style={{
          backgroundImage: "url('/serviceHero2.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,19,58,1)_20%,rgba(0,19,58,0.96)_25%,rgba(3,24,66,0.88)_45%,rgba(26,50,99,0.6)_90%,rgba(26,50,99,0.85)_100%)]" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-7 sm:px-10 xl:px-0 w-full pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="cormorant text-5xl md:text-8xl leading-tight  mb-8 max-w-4xl"
        >
          Our <span className="text-[#C9A84C] italic">Physiotherapy </span>{" "}
          <br />
          Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-[#919191] text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Serving Oakville, ON, and the surrounding areas for over 23 years
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-8"
        >
          <a
            href="#contact"
            className="bg-[#BD911F] hover:bg-[#C9A84C] text-white px-12 py-5 font-bold uppercase text-[11px] tracking-[0.2em] transition-all hover:shadow-[0_10px_30px_rgba(189,145,31,0.2)]"
          >
            Book Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
