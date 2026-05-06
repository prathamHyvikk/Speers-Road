"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-[#0F1E2E]  ">
        <div className="max-w-[1240px] mx-auto px-10 sm:px-0 py-4 flex justify-between items-center text-lg text-[#C9993A]  ">
          <span>
            <a
              href="tel:9053393233"
              className="hover:text-[#C9A84C] transition-colors font-semibold"
            >
              905-339-3233 <span className="text-white px-1 "> | </span>
            </a>

            <a
              href="mailto:info@speersroadphysiotherapy.com"
              className="hover:text-[#C9A84C] transition-colors font-semibold"
            >
              info@speersroadphysiotherapy.com
            </a>
          </span>
          <span>
            Mon - Thu: 9am - 6pm <span className="text-white px-1 "> | </span>{" "}
            Fri: 9am - 5pm <span className="text-white px-1 "> | </span> Sat -
            Sun: By Appointments
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-[1240px] mx-auto px-10 sm:px-0 py-[45px] flex items-center justify-between">
        <div>
          <Image
            className="max-w-[347px]"
            width={347}
            height={85}
            src={"/logo.png"}
            alt="logo"
          />
        </div>
        <div className="hidden md:flex items-center gap-9">
          {["Home", "Services", "About", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg  uppercase  text-[#1A3263] hover:text-[#C9A84C] transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#book"
            className="bg-[#C9A84C] hover:bg-[#b08a38] text-white text-lg  uppercase  px-6 py-2.5 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
