"use client";
import { ChevronRight } from "lucide-react";
import React from "react";

const MapContact = () => {
  return (
    <>
      <section className="pb-24 px-7 sm:px-10">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="cormorant leading-tight text-[#1E2D40] text-3xl sm:text-4xl text-center mb-6 ">
            WHERE TO <span className="italic text-[#C9A84C]">FIND US</span> IN
            OAKVILLE
          </h2>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.400246026386!2d-79.70365799999999!3d43.431356099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5db02a8fffff%3A0x6eb8adbbffb55742!2s1060%20Speers%20Rd%20%23213B%2C%20Oakville%2C%20ON%20L6L%202X4!5e0!3m2!1sen!2sca!4v1778587184843!5m2!1sen!2sca"
              width="100%"
              height="500"
              style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapContact;
