"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "One-on-One Attention",
    desc: "Every session is spent with your physiotherapist — not passed off to an assistant. You get focused, hands-on time that makes a real difference.",
  },
  {
    title: "Individualized Treatment Plans",
    desc: "No two patients are the same. We create customized plans that align with your condition, your goals, and your schedule.",
  },
  {
    title: "Experienced & Certified Team",
    desc: "Our physiotherapists are registered with the College of Physiotherapists of Ontario and bring years of clinical experience across a wide range of specialties.",
  },
  {
    title: "Convenient Location in Oakville",
    desc: "We're easy to find and easy to get to — right here in your community. If you've been searching for \"physiotherapy near me,\" we're likely just around the corner.",
  },
  {
    title: "Direct Billing to Insurance",
    desc: "We offer direct billing to most major insurance providers, making the process as seamless and stress-free as possible for you.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className=" overflow-hidden">
      {/* <section
      id="why"
      className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
    > */}
      {/* Image side */}
      {/* <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        <Image
          width={720}
          height={881}
          className="w-full h-full object-cover"
          src={"/whyChoose.png"}
          alt="whyChoose"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#BD911F] via-[#BD911F]/0 to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 flex justify-between items-center pl-8 pr-9 pb-[26px]"
        >
          <div>
            <p className="text-xs sm:text-base text-white tracking-[18%] uppercase sm:leading-[32px]">
              Meet Your Physiotherapist
            </p>

            <p className="cormorant text-[#051941] text-2xl sm:text-[54px]">
              Maikal{" "}
              <span className="italic text-xl sm:text-[40px] font-light">
                Patel
              </span>
            </p>
          </div>

          <div>
            <p className="text-[10px] text-white tracking-[18%] uppercase leading-[20px]">
              Experience
            </p>

            <p className="cormorant text-[#051941] text-[21px] sm:text-[34px]">
              25+ Years
            </p>
          </div>
        </motion.div>
      </motion.div> */}

      {/* Content side */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-[#00133A]  px-7 sm:px-12 py-10 sm:py-20"
      >
        {/* Heading */}
        <div className="max-w-[1240px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-4xl sm:text-[40px] cormorant italic text-white">
              Why Choose
            </p>

            <h2 className="cormorant text-4xl sm:text-[40px] font-bold text-white">
              <span className="text-[#C9A84C]">SPEERS ROAD</span> Physiotherapy
            </h2>

            <div className="w-[75px] h-[1px] bg-[#D9AE3F] my-6"></div>

            <p className="cormorant text-[#D9AE3F] text-[23px] italic font-medium ">
              We know you have options when it comes to physio in Oakville.
              Here's what makes the difference when you choose us:
            </p>
          </motion.div>

          {/* Reasons */}
          <div className="space-y-6 mt-7">
            <div className="flex flex-wrap justify-center gap-5 mt-8">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.25 },
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 hover:border-[#C9A84C]/40 w-full sm:w-[calc(50%-20px)] xl:w-[calc(33.33%-20px)]"
                >
                  <div className="relative z-10 flex flex-col gap-4">
                    {/* Number */}
                    <div className="flex items-center gap-3">
                      <div className="shrink-0 hidden sm:block ">
                        <div className="w-11 h-11 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] text-sm font-semibold">
                          0{i + 1}
                        </div>
                      </div>
                      <p className="text-sm sm:text-base font-semibold uppercase tracking-wide text-white">
                        {r.title}
                      </p>
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-sm sm:text-[15px] leading-7 text-[#919191] mt-2">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
