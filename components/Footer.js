"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#00133A] pt-14 md:pt-16 pb-8 px-7 sm:px-10  lg:px-10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        {/*  Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-12 border-b border-white/10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sm:col-span-2"
          >
            <div>
              <Image
                className="w-[190px] sm:w-[240px] md:w-[300px] lg:w-[392px] h-auto"
                width={392}
                height={96}
                src="/footLogo.png"
                alt="logo"
                quality={100}
                unoptimized
              />
            </div>

            <p className="text-sm sm:text-[15px] text-[#919191] leading-7 tracking-[0.05em] max-w-[508px] mt-8 md:mt-12 pr-0 md:pr-8">
              Speers Road Physiotherapy is a leading physiotherapy clinic in
              Oakville, Ontario, offering a full range of services including
              physiotherapy care, Gunn IMS, dry needling, vestibular
              rehabilitation, MVA rehabilitation, and custom orthotics. Our
              registered physiotherapists serve patients across Oakville and
              surrounding communities. If you're looking for the best
              physiotherapist in Oakville — we're here and ready to help.
            </p>
          </motion.div>

          {/*  Links */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <p className="text-sm sm:text-[15px] font-semibold uppercase tracking-[0.18em] text-[#BD911F] mb-6 md:mb-7">
              Quick Links
            </p>

            <nav className="flex flex-col gap-4 md:gap-5">
              {[
                "Home",
                "Our Services",
                "About Maikal",
                "Blog",
                "Contact Us",
              ].map((link, i) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.08,
                  }}
                >
                  <Link
                    href="#"
                    className="text-base sm:text-lg lg:text-[19px] text-[#919191] hover:text-white tracking-[0.05em] transition-colors w-fit block"
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <p className="text-sm sm:text-[15px] font-semibold uppercase tracking-[0.18em] text-[#BD911F] mb-6 md:mb-7">
              Contact
            </p>

            <div className="text-base sm:text-lg lg:text-[19px] text-[#919191] tracking-[0.05em] transition-colors space-y-4 md:space-y-5 break-words">
              <p>905-339-2323</p>

              <p>Fax: 289-837-2000</p>

              <a
                href="mailto:info@speersroadphysiotherapy.com"
                className="hover:text-white/80 transition-colors block"
              >
                info@speersroadphysiotherapy.com
              </a>

              <p className="mt-3">
                1060 Speers Road, Unit 120
                <br />
                Oakville, ON
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 md:pt-12 flex flex-col lg:flex-row justify-between items-center gap-5 text-sm sm:text-base lg:text-xl text-[#919191] tracking-[0.05em] text-center lg:text-left"
        >
          <span>© 2026 Speers Road Physiotherapy. All Rights Reserved.</span>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="hover:text-white/60 transition-colors underline underline-offset-4"
            >
              Privacy Policy
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="hover:text-white/60 transition-colors underline underline-offset-4"
            >
              Terms & Conditions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
