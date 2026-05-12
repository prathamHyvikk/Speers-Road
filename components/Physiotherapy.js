"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, UserRound, Info, Calendar } from "lucide-react";

export default function Physiotherapy() {
  const treatments = [
    "Strains & Sprains",
    "Whiplash",
    "Pre & Post Surgical Rehabilitation",
    "Rheumatic Conditions",
    "Rotator cuff injury",
    "Sciatica",
    "Chronic Pain",
    "Tendonitis",
    "Tennis/golfers elbow",
    "Bursitis",
    "Postural Dysfunction",
    "TMJ disorder",
    "Carpal tunnel Syndrome",
    "Bell’s and Facial Palsy",
  ];

  return (
    <div className="bg-[#00133A] text-white selection:bg-[#C9A84C]/30 font-['Jost']">
      {/* --- WHAT IS PHYSIOTHERAPY SECTION --- */}
      <section className="py-10 bg-[#FAF8F3] sm:py-20 px-7 sm:px-10">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C9A84C]">
                  Clinical Definition
                </span>
              </div>

              <h2 className="cormorant text-[#1E2D40] text-4xl sm:text-6xl mb-8 leading-[1.1] ">
                What is{" "}
                <span className="italic text-[#C9A84C]">Physiotherapy</span>{" "}
                Care?
              </h2>

              <div className="space-y-6 text-[#1E2D40] text-lg leading-relaxed font-light max-w-xl">
                <p>
                  Physiotherapy care is used to help people affected by injury,
                  illness, or disability through movement, exercise, manual
                  therapy, and education.
                </p>
                <p className="border-l-2 border-[#BD911F] bg-white pl-6 py-2 ">
                  We use{" "}
                  <span className="text-[#C9A84C]">advanced techniques</span>{" "}
                  along with evidence-based care. The utilization of these
                  skills allows our physiotherapists to assess, treat, and
                  prevent a wide range of health conditions and movement
                  disorders.
                </p>
                <p>
                  Our Physiotherapists combine “hands-on” manual therapy
                  techniques, electro-therapeutic modalities, and exercise
                  programs to treat various conditions including but not limited
                  to:
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden rounded-2xl group"
            >
              <img
                src="https://i.pinimg.com/736x/5a/e5/f2/5ae5f2f4d3c0bac7bafc5622d5020806.jpg"
                alt="Physiotherapy specialist"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00133A] via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TREATMENTS  --- */}
      <section className="py-10 sm:py-16 bg-[#BD911F] border-y border-white/5">
        <div className="max-w-[1086px] mx-auto px-7 sm:px-0">
          <div className="mb-5 ">
            <h3 className="cormorant text-4xl md:text-6xl mb-4 ">
              Physiotherapy{" "}
              <span className="text-[#1E2D40] italic">Treatments</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 group py-3 border-b border-white/15 hover:border-white/50 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <CheckCircle2 className="w-4 h-4 text-white opacity-70 group-hover:opacity-100" />
                </div>
                <span className="text-[#FFFFFFB5] text-lg group-hover:text-white leading-relaxed">
                  {treatment}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SESSION & PREP SECTION --- */}
      <section className="py-10 sm:py-20 px-7 sm:px-10">
        <div className="max-w-[1086px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div></div>
            <div></div>
            {/* Session Steps */}
            <div className="lg:col-span-8">
              <h4 className="cormorant text-4xl sm:text-[40px] mb-12 ">
                A typical physiotherapy{" "}
                <span className="italic text-[#C9A84C]">
                  session may include:
                </span>
              </h4>

              <div className="space-y-12">
                {[
                  {
                    title: "Assessment & Diagnosis",
                    desc: "A full assessment and diagnosis of the patient’s specific condition(s) using clinical protocols.",
                    icon: <UserRound className="w-6 h-6" />,
                  },
                  {
                    title: "Personalized Planning",
                    desc: "Developing a treatment or prevention plan that accounts for your lifestyle, daily activities, and general health.",
                    icon: <Calendar className="w-6 h-6" />,
                  },
                  {
                    title: "Specialized Prescription",
                    desc: "The prescription of braces and exercise as required.We recommend loose-fitting clothing so it is easier to expose the area that our physiotherapist will be evaluating and treating such as a tank top for a shoulder injury, or a pair of shorts in the case of a knee problem.",
                    icon: <Info className="w-6 h-6" />,
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="flex gap-8 relative"
                  >
                    {i !== 2 && (
                      <div className="absolute top-14 left-7 w-[1px] h-12 bg-white/10" />
                    )}
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#C9A84C] bg-white/[0.02] flex-shrink-0 shadow-lg shadow-black/50">
                      {step.icon}
                    </div>
                    <div>
                      <h5 className="text-white font-semibold text-sm uppercase tracking-[0.2em] mb-3">
                        {step.title}
                      </h5>
                      <p className="text-[#919191] leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;700;900&display=swap");
      `}</style>
    </div>
  );
}
