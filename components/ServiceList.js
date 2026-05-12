"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  HeartPulse,
  Activity,
  Target,
  ShieldCheck,
  Zap,
  Move,
  Layers,
  Footprints,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "osteopathy",
    title: "Osteopathy",
    icon: <HeartPulse className="w-5 h-5" />,
    image: "/ostropeathy.jpg",
    whatIs: [
      "Osteopathy is a branch of alternative medicine that treats your body as a single functioning unit. Osteopathy assesses and treats the movement restrictions in your body tissues that prevent you from being healthy and fit. It is unique because it focuses on the root cause of pain and dysfunction rather than simply masking symptoms. Osteopathy encourages the body to heal itself and rely less on medication.",
      "Osteopaths have a unique way of approaching and viewing the body. We look at the connections between all your body systems, such as the interaction of your muscles, bones and organs. We attempt to re-align your body to create a better environment for it to actually heal itself. Our priority is finding the root cause of your issue. The approach is a holistic one and a wide variety of conditions can be treated using our hands-on techniques.",
    ],
    about:
      "Our treatments are completely hands-on, individualized and focused on restoring balance to your entire body. The initial appointment lasts approximately one hour to allow enough time to assess and treat your unique case. The amount of time for subsequent treatments may vary depending on your needs.",
  },
  {
    id: "massage",
    title: "Massage Therapy",
    icon: <Layers className="w-5 h-5" />,
    image: "/massage.webp",
    whatIs: [
      "Massage therapy is the manipulation of the superficial & deep tissues of the human body in order to promote deep relaxation, release tension, stimulate blood circulation and treat musculoskeletal injuries. Massage is focused on restoring the muscular system in the body to optimal function and reducing muscular tension.",
    ],
    about:
      "It is usually recommended to have the skin around the area that you are receiving treatment for exposed to your comfort level. All of our Massage Therapists are extremely professional and are in good standing with the College of Massage Therapists of Ontario. However, if you feel uncomfortable exposing any areas of your body, speak with your Massage Therapist and they will find a way to work with you.",
  },
  {
    id: "dry-needling",
    title: "Dry Needling",
    icon: <Activity className="w-5 h-5" />,
    image: "/dryNeedle.jpg",
    whatIs: [
      "Dry needling physiotherapy involves inserting a needle (with no injection of fluid) through the skin into tight muscle bands. This technique triggers a reflexive relaxation of the muscle and restores blood flow to the area. The main goal of dry needling is to reduce pain by creating a relaxation effect in the muscle, controlling the inflammatory process, and modifying sensory stimulation of the nervous system.",

      "Dry needling helps to reduce pain, improve range of motion, improve muscle activation, and inhibit inflammation. It can be used as an effective treatment for many orthopedic disorders.",
    ],
    about:
      "<ul class='list-disc pl-5 '><li>Tendinopathy/bursitis</li><li>Lumbar disc herniation with or without sciatica</li><li>Headaches and migraines</li><li>Chronic pain</li>  <li>Plantar fasciitis</li>  <li>Whiplash and lumbar strains/sprains</li></ul>",
  },
  {
    id: "gunn-ims",
    title: "Gunn IMS",
    icon: <Zap className="w-5 h-5" />,
    image: "/gunn.jpg",
    whatIs: [
      "Gunn IMS was developed by Dr. Chan Gunn with the primary focus being to use dry needles to address tissue changes occurring in the body that can be responsible for chronic pain and other orthopedic issues. When tissues do not receive optimal communication from the nervous system they will exhibit dysfunction.",
    ],
    about:
      "Treatment is provided by directing a mono-filament needle into the areas of dysfunction with a muscle. The two most prominent effects are chemical and electrical changes that occur after needle insertion. Chemical changes within the muscle stimulate the body to heal itself, and electrical changes in the area will help the muscle return to normal function and provide feedback to the nervous system to create lasting changes in the body. The treatment revolves around identifying dysfunctional patterns common to pain and overuse syndromes and treating a central link common to the cluster of symptoms. This stimulus can be thought of as resetting, or “rebooting” the function of the nervous system in order to create longer-lasting changes in the distribution of load throughout the body and allowing a natural healing process to occur.",
  },
  {
    id: "acupuncture",
    title: "Acupuncture",
    icon: <Target className="w-5 h-5" />,
    image: "/acupuncture.jpg",
    whatIs: [
      "Acupuncture is based on traditional Chinese medicine and involves inserting dry needles along meridians (channels) of energy, thus restoring qi distribution (Chinese theory of vital energy), with the aim of treating a whole range of problems, including digestive, respiratory, endocrine, circulatory, urinary, and reproductive disorders, and other general disorders (fatigue, stress, anxiety, migraines, insomnia, etc.).",
    ],
    about:
      "Acupuncture is used to: relieve pain & soreness, improve function, encourage natural health & wellness.",
  },
  {
    id: "vestibular",
    title: "Vestibular Rehabilitation (Vertigo Treatment)",
    icon: <Move className="w-5 h-5" />,
    image: "/vestibular.jpg",
    whatIs: [
      "Vestibular Therapy is a form of therapy that primarily uses exercises to help treat problems associated with vestibular, or inner ear, disorders. Problems with these structures can lead to symptoms such as dizziness, nausea, tinnitus (ringing in the ears), light-headedness, and double-vision.",
    ],
    about:
      "Since each person’s conditions is slightly different, your Physiotherapist will create a specific exercise program that will help best treat your condition. While it might seem odd that exercises are used to treat problems associated with the inner area, these exercises are aimed at retraining balance and proprioception, which should help prevent falls.",
  },
  {
    id: "orthotics",
    title: "Custom Orthotics",
    icon: <Footprints className="w-5 h-5" />,
    image: "/orthotics.jpg",
    whatIs: [
      "Orthotics are insoles that support the structures of your feet while at rest and during movement. Any problems with any of these structures due to biomechanical issues can throw things into disarray and cause significant pain in the feet. Orthotics help correct these biomechanical abnormalities and allow your feet to move the way they should.",
    ],
    about:
      "A custom-made orthotic is made to specifically address your biomechanical issues and to correct your gait where needed.<br/>Check with your insurance company that it will still be covered if it is issued by a Physiotherapist.",
  },
  {
    id: "compression",
    title: "Medical Compression Stockings",
    icon: <ShieldCheck className="w-5 h-5" />,
    image: "/compression.jpg",
    whatIs: [
      "Medical gradient compression socks and stockings improve venous and lymphatic blood flow. Compression stockings are designed to deliver a controlled amount of pressure which is greatest at the ankle of the garment and gradually decreases towards the top of the stocking. This gradient promotes better venous blood flow which in turn helps to relieve and control edema (swelling), varicose veins, leg fatigue and other problematic leg conditions.",

      "People who have or are experiencing any of the conditions below can benefit from wearing gradient compression socks or stockings",
    ],
    about:
      "<ul class='list-disc pl-5 '><li>Pregnancy</li><li>Tired, aching, fatigued legs</li><li>Swollen feet, ankles, and legs</li><li>Mild to moderate swelling</li> <li>Stand or sit for long periods </li>  <li> Overweight </li></ul> <br/> Most insurance companies, through your Extended Health Benefits Coverage, will reimburse for medical compression socks and stocking expenses. A prescription must first be obtained from your doctor, in order to submit the cost of the compression therapy to your extended health benefits provider.",
  },
  {
    id: "concussion",
    title: "Concussion Treatment",
    icon: <Activity className="w-5 h-5" />,
    image: "/cuncussion.jpg",
    whatIs: [
      "A concussion can be simply defined as a disruption in neurological functioning following a significant impact to the head or elsewhere on the body. This causes a biochemical imbalance within brain cells as well as decreased blood flow and temporary energy deficits within the brain. Due to the injury the brain cannot function the way it normally does. Your ability to perform your normal activities with the same speed, reaction time, and precision as prior to the injury can be significantly altered.",
    ],
    about:
      "Studies have shown that any activity, both mental and physical, in the immediate days following concussion can delay the process of recovery and should be avoided until the athlete is completely symptom free. Return to work or sport following a concussion proceeds through a basic sequential process.  Your physiotherapist will specifically guide you regarding the amount of activity you should engage in and will closely monitor you for signs or symptoms to ensure the healing brain is ready for each progressive level of physical or cognitive activity.",
  },
  {
    id: "laser",
    title: "Low Intensity Laser Therapy (LILT)",
    icon: <Zap className="w-5 h-5" />,
    image: "/laser.jpg",
    whatIs: [
      "Therapeutic laser can be used to safely treat orthopedic injuries and control pain. Low level laser therapy is very safe and there is evidence to support that it provides a pain-numbing effect on nerves, as well as positive metabolic effects in healing cells. It is able to penetrate deeply into body tissues to reach areas that cannot be stimulated by other modalities.",
    ],
    about: "",
  },
];

export default function ServiceList() {
  const [activeService, setActiveService] = useState(services[0]);
  const handleClick = (service) => {
    setActiveService(service);

    const section = document.getElementById("dynamic-content");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-[#FAF8F3] min-h-screen text-[#1E2D40]  selection:bg-[#C9A84C]/20">
      <section className="pt-10 sm:pt-20 pb-10 sm:pb-20 px-7 sm:px-10 ">
        <div className="max-w-[1240px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-[10px] tracking-[0.3em] font-bold uppercase rounded-full mb-6"
          >
            Clinical Excellence
          </motion.div>
          <h2 className="cormorant leading-tight text-[#1E2D40] text-4xl sm:text-7xl mb-6 ">
            Explore Our{" "}
            <span className="italic text-[#C9A84C]">Therapeutic</span> Services
          </h2>
        </div>
      </section>

      {/*  Services */}
      <section className="max-w-[1440px] mx-auto px-7 sm:px-10 pb-10 sm:pb-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* LEFT */}
          <div className="lg:col-span-3 space-y-3  overflow-y-auto pr-4 custom-scrollbar-light">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleClick(service)}
                className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                  activeService.id === service.id
                    ? "bg-white shadow-[0_20px_50px_rgba(30,45,64,0.08)] border-transparent translate-x-3"
                    : "bg-transparent border border-[#1E2D40]/5 hover:bg-white hover:border-transparent hover:shadow-lg"
                }`}
              >
                {activeService.id === service.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C9A84C]" />
                )}
                <div className="flex flex-col items-start">
                  <span
                    className={`text-[10px] uppercase tracking-[0.15em] font-bold mb-1 transition-colors ${activeService.id === service.id ? "text-[#C9A84C]" : "text-[#1E2D40]/30"}`}
                  >
                    Service {services.indexOf(service) + 1}
                  </span>
                  <span
                    className={` tracking-wide text-base md:text-lg text-start transition-colors ${activeService.id === service.id ? "text-[#1E2D40]" : "text-[#1E2D40]/60"}`}
                  >
                    {service.title}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all ${activeService.id === service.id ? "bg-[#C9A84C] text-white" : "bg-[#1E2D40]/5 text-[#1E2D40]/20 group-hover:bg-[#C9A84C]/10 group-hover:text-[#C9A84C]"}`}
                >
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${activeService.id === service.id ? "rotate-90" : ""}`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div id="dynamic-content" className="lg:col-span-9 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="bg-white  rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-[#1E2D40]/5 overflow-hidden flex flex-col"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image Side */}
                  <div className="relative h-[400px] md:h-auto overflow-hidden">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full  object-cover transition-transform duration-[2s] hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E2D40] via-transparent to-transparent md:bg-gradient-to-r" />
                  </div>

                  {/* Text Side */}
                  <div className="p-10 md:p-16 flex flex-col justify-center bg-white">
                    <div className="mb-10">
                      <h3 className="cormorant text-start text-3xl md:text-5xl mb-4 text-[#1E2D40] italic ">
                        {activeService.title}
                      </h3>
                      <div className="w-16 h-1 bg-[#C9A84C]/30" />
                    </div>

                    <div className="mb-10 space-y-4">
                      <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.25em] font-bold">
                        What is it?
                      </p>
                      <div className="text-[#1E2D40]/70 text-base leading-relaxed font-light space-y-4">
                        {activeService.whatIs.map((item, index) => (
                          <p key={index}>{item}</p>
                        ))}
                      </div>
                    </div>

                    {activeService.about && (
                      <div className="mb-12 px-4 py-6 sm:p-8 bg-[#FAF8F3] rounded-2xl border border-[#1E2D40]/5">
                        <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.25em] font-bold mb-4">
                          About Treatment
                        </p>
                        <div
                          className="text-[#1E2D40]/80 text-sm leading-relaxed italic"
                          dangerouslySetInnerHTML={{
                            __html: activeService.about,
                          }}
                        />
                      </div>
                    )}

                    <button className="mt-auto">
                      <Link
                        href="/contact"
                        className="w-full sm:w-auto text-nowrap bg-[#1E2D40] hover:bg-[#BD911F] text-white px-10 py-5 rounded-sm text-[11px]  uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-2xl active:scale-95"
                      >
                        Book an Appointment
                      </Link>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
