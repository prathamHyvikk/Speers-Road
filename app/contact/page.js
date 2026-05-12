"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import HeroCommon from "../../components/HeroCommon";
import MapContact from "../../components/MapContact";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    setIsSubmitting(true);
    console.log("Form Data:", data);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      reset();
    }, 1500);
  };

  return (
    <div className="bg-[#FAF8F3] min-h-screen font-['Jost'] text-[#1E2D40] selection:bg-[#C9A84C]/20">
      {/*HERO HEADER*/}
      <HeroCommon
        bgImage="/contactUS.jpg"
        firstWhiteTitle="Contact "
        yelloTitle={"Our Clinic"}
        info={
          "We’re your local physiotherapy in Oakville. Give us a call today, we are ready to assist you!"
        }
        cunsultBtn={false}
      />

      {/*MAIN CONTENT */}
      <section className="max-w-[1240px] mx-auto px-7 sm:px-10 mt-10 sm:mt-16 pb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-7 bg-white rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.05)] p-8 md:p-14 border border-[#1E2D40]/5"
          >
            <div className="mb-10">
              <h2 className="cormorant text-3xl md:text-4xl text-[#1E2D40] font-semibold mb-2">
                Send us a Message
              </h2>
              <div className="w-12 h-1 bg-[#C9A84C]" />
            </div>

            <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1E2D40]/40 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={`w-full bg-[#FAF8F3] border-b-2 ${errors.name ? "border-red-400" : "border-[#1E2D40]/5"} focus:border-[#C9A84C] outline-none px-5 py-4 transition-all duration-300 text-[#1E2D40]`}
                    {...register("name", {
                      required: "Full Name is required",
                      pattern: {
                        value: /^[A-Za-z\s]+$/i,
                        message: "Letters only",
                      },
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-500 mt-1 text-sm tracking-tighter">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1E2D40]/40 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className={`w-full bg-[#FAF8F3] border-b-2 ${errors.email ? "border-red-400" : "border-[#1E2D40]/5"} focus:border-[#C9A84C] outline-none px-5 py-4 transition-all duration-300 text-[#1E2D40]`}
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1 text-sm tracking-tighter">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#1E2D40]/40 ml-1">
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className={`w-full bg-[#FAF8F3] border-b-2 ${errors.phone ? "border-red-400" : "border-[#1E2D40]/5"} focus:border-[#C9A84C] outline-none px-5 py-4 transition-all duration-300 text-[#1E2D40]`}
                  {...register("phone", {
                    minLength: {
                      value: 10,
                      message: "Phone number must be 10 digits",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 mt-1 text-sm tracking-tighter">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#1E2D40]/40 ml-1">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your condition or inquiry..."
                  className={`w-full bg-[#FAF8F3] border-b-2 ${errors.message ? "border-red-400" : "border-[#1E2D40]/5"} focus:border-[#C9A84C] outline-none px-5 py-4 transition-all duration-300 text-[#1E2D40] resize-none`}
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="text-red-500 mt-1 text-sm tracking-tighter">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1E2D40] hover:bg-[#BD911F] text-white py-5 rounded-sm text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-500 shadow-xl flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className=" w-3 h-3 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Request
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* RIGHT */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#00133A] text-white p-5 sm:p-10 rounded-[2rem] relative overflow-hidden"
            >
              <h3 className="cormorant text-3xl mb-8 italic text-[#C9A84C]">
                Clinical Information
              </h3>

              <div className="space-y-8">
                <div className="flex gap-5 group">
                  <div className="shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-white transition-all">
                    <MapPin className=" w-3 h-3 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1">
                      Oakville Location
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      1060 Speers Road, Unit 120 Oakville, <br /> Ontario L6L
                      2X4
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-white transition-all">
                    <Phone className=" w-3 h-3 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1">
                      Call Us
                    </p>
                    <a
                      href="tel:7867568434"
                      className="text-base text-white font-medium hover:text-[#C9A84C] transition-colors"
                    >
                      Phone: (905) 339-3233
                    </a>
                    <br />
                    <a
                      href="tel:2898372003"
                      className="text-base text-white font-medium hover:text-[#C9A84C] transition-colors"
                    >
                      Fax: (289) 837-2003
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-white transition-all">
                    <Mail className=" w-3 h-3 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1">
                      Email Us
                    </p>
                    <a
                      href="mailto:info@speersroadphysiotherapy.com"
                      className="text-white/80 hover:text-[#C9A84C] text-xs min-[500px]:text-base transition-colors underline underline-offset-4"
                    >
                      info@speersroadphysiotherapy.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white border border-[#1E2D40]/5 p-8 rounded-[2rem] shadow-lg shadow-[#1E2D40]/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className=" w-3 h-3 sm:w-5 sm:h-5 text-[#C9A84C]" />
                <h4 className="font-bold text-sm uppercase tracking-widest">
                  Clinic Hours
                </h4>
              </div>
              <div className="space-y-3">
                {[
                  { day: "Mon - Thu", hours: "9:00 AM - 6:00 PM" },
                  { day: "Friday", hours: "9:00 AM - 5:00 PM" },
                  { day: "Saturday", hours: "8:00 AM - 2:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-sm border-b border-[#FAF8F3] pb-1 last:border-0"
                  >
                    <span className="text-[#1E2D40]/40 text-base ">
                      {item.day}
                    </span>
                    <span className="font-bold text-[#1E2D40]">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*MAP SECTION*/}
      <MapContact />
    </div>
  );
};

export default ContactUs;
