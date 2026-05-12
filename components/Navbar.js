"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  // Prevent body scroll when sidebar open
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const pathname = usePathname();
  return (
    <>
      <nav className="fixed lg:relative top-0 left-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
        {/* Top bar */}
        <div className="bg-[#0F1E2E] hidden lg:block">
          <div className="max-w-[1240px]  mx-auto px-6 xl:px-0 py-4 flex justify-between items-center text-sm xl:text-lg text-[#C9993A]">
            <span className="flex items-center flex-wrap">
              <a
                href="tel:9053393233"
                className="hover:text-[#C9A84C] transition-colors font-semibold"
              >
                905-339-3233
              </a>

              <span className="text-white px-2">|</span>

              <a
                href="mailto:info@speersroadphysiotherapy.com"
                className="hover:text-[#C9A84C] transition-colors font-semibold"
              >
                info@speersroadphysiotherapy.com
              </a>
            </span>

            <span>
              Mon - Thu: 9am - 6pm
              <span className="text-white px-2">|</span>
              Fri: 9am - 5pm
              <span className="text-white px-2">|</span>
              Sat - Sun: By Appointments
            </span>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 xl:px-0 py-5 lg:py-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              className="w-[220px] sm:w-[260px] lg:w-[347px]"
              width={347}
              height={85}
              src="/logo.png"
              alt="logo"
              quality={100}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-9">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={`${item.link}`}
                className={`text-base xl:text-lg uppercase ${pathname === item.link ? "text-[#C9A84C]" : "text-[#1A3263]"} hover:text-[#C9A84C] transition-colors`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#book"
              className="bg-[#C9A84C] hover:bg-[#b08a38] text-white text-base xl:text-lg uppercase px-6 py-3 transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpenMenu(true)}
            className="lg:hidden text-[#1A3263]"
          >
            <Menu size={34} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpenMenu(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          openMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl transition-transform duration-500 ease-in-out ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b">
          <Image
            width={180}
            height={50}
            src="/logo.png"
            alt="logo"
            className="w-[170px]"
          />

          <button onClick={() => setOpenMenu(false)} className="text-[#1A3263]">
            <X size={30} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col p-6 gap-2">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={`${item.link}`}
              onClick={() => setOpenMenu(false)}
              className={`text-lg uppercase ${pathname === item.link ? "text-[#C9A84C]" : "text-[#1A3263]"} hover:text-[#C9A84C] transition-colors border-b border-gray-100 pb-3`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="#book"
            onClick={() => setOpenMenu(false)}
            className="bg-[#C9A84C] hover:bg-[#b08a38] text-white text-center text-lg uppercase px-6 py-3 transition-all duration-300 mt-4"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Contact Info */}
        <div className="absolute bottom-0 left-0 w-full border-t p-5 bg-gray-50">
          <a
            href="tel:9053393233"
            className="block text-[#1A3263] font-medium mb-2"
          >
            905-339-3233
          </a>

          <a
            href="mailto:info@speersroadphysiotherapy.com"
            className="block text-[#1A3263] text-base break-all"
          >
            info@speersroadphysiotherapy.com
          </a>

          <div className="text-[#1A3263] text-base mt-2">
            Mon - Thu: 9am - 6pm
            <br />
            Fri: 9am - 5pm
            <br />
            Sat - Sun: By Appointments
          </div>
        </div>
      </div>
    </>
  );
}
