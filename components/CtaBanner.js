"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section id="book" className="bg-[#BD911F] py-[75px] px-10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        {/* Left  */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h2 className="cormorant text-3xl lg:text-[52px] text-white">
            Ready to begin your{" "}
            <em className="italic text-[#051941]">recovery journey?</em>
          </h2>

          <p className="text-[#FFFFFFB0] text-base mt-4 max-w-[662px]">
            Don't let pain hold you back any longer. Book your appointment at
            our Oakville physiotherapy clinic today and take the first step
            toward lasting relief and recovery. New patients are welcome, and
            same-week appointments are often available.
          </p>
        </motion.div>

        {/* Right  */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-5 shrink-0"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="block bg-white text-[#BD911F] text-sm uppercase tracking-[18%] px-12 py-[10px] transition-colors text-center"
          >
            <Link href="#">Book an Appointment</Link>
          </motion.div>

          <div className="flex justify-between gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              href="tel:9053392323"
              className="text-[#051941] text-sm uppercase tracking-[11%] underline underline-offset-4 transition-colors block"
            >
              Call Us Today
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              href="https://maps.google.com"
              className="text-[#051941] text-sm uppercase tracking-[11%] underline underline-offset-4 transition-colors block"
            >
              Get Directions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
