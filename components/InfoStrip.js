"use client";

import { motion } from "framer-motion";

export default function InfoStrip() {
  return (
    <div className="bg-[#00133A] overflow-hidden py-10 sm:py-0">
      <div className="max-w-[1175px] mx-auto px-7 sm:px-10 grid grid-cols-1 md:grid-cols-3">
        {/* Column 1 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="py-5 px-0 sm:py-12 sm:px-2"
        >
          <p className="text-[15px] uppercase tracking-[18%] text-[#BD911F] mb-[26px]">
            Hours of Operation
          </p>

          <div>
            <div className="mb-[26px]">
              <p className="text-white text-[22px] tracking-[7%] mb-2">
                Monday – Thursday
              </p>

              <p className="text-[#919191] text-[19px] tracking-[7%]">
                9:00 AM – 8:00 PM
              </p>
            </div>

            <div className="mb-[26px]">
              <p className="text-white text-[22px] tracking-[7%] mb-2">
                Friday
              </p>

              <p className="text-[#919191] text-[19px] tracking-[7%]">
                9:00 AM – 5:00 PM
              </p>
            </div>

            <div className="mb-[26px]">
              <p className="text-white text-[22px] tracking-[7%] mb-2">
                Saturday - Sunday
              </p>

              <p className="text-[#919191] text-[19px] tracking-[7%]">
                By Appointments
              </p>
            </div>
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="py-5 px-0 sm:py-12 sm:px-2"
        >
          <p className="text-[15px] uppercase tracking-[18%] text-[#BD911F] mb-[26px]">
            Our Location
          </p>

          <div className="text-sm text-gray-500">
            <div className="mb-[26px]">
              <p className="text-white text-[22px] tracking-[7%] leading-loose mb-2">
                Oakville Health Centre
              </p>

              <p className="text-[#919191] text-[19px] leading-tight tracking-[7%]">
                1060 Speers Road, Unit 120 Oakville, Ontario
              </p>
            </div>

            <a
              href="tel:9053393233"
              className="text-[#C9A84C] text-[22px] tracking-[7%]"
            >
              905-339-3233
            </a>
          </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="py-5 px-0 sm:py-12 sm:px-2"
        >
          <p className="text-[15px] uppercase tracking-[18%] text-[#BD911F] mb-[26px]">
            Insurance & Billing
          </p>

          <div className="text-sm text-gray-500">
            <div className="mb-[26px]">
              <p className="text-white text-[22px] leading-loose tracking-[7%] mb-2">
                Direct Billing Available
              </p>

              <p className="text-[#919191] text-[19px] leading-tight tracking-[7%] mb-[26px]">
                We direct bill extended health care plans for your convenience.
              </p>

              <p className="text-[#919191] text-[19px] leading-tight tracking-[7%]">
                We accept MVA (motor vehicle accident) and WSIB cases.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
