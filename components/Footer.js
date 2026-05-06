import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#00133A] pt-16 pb-8 px-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2">
            <div>
              <Image
                className="max-w-[392px]"
                width={392}
                height={96}
                src={"/footLogo.png"}
                alt="logo"
              />
            </div>
            <p className="text-sm text-[#919191] leading-[24px] tracking-[7%] max-w-[508px] pr-8 mt-12">
              Speers Road Physiotherapy is a leading physiotherapy clinic in
              Oakville, Ontario, offering a full range of services including
              physiotherapy care, Gunn IMS, dry needling, vestibular
              rehabilitation, MVA rehabilitation, and custom orthotics. Our
              registered physiotherapists serve patients across Oakville and
              surrounding communities. If you're looking for the best
              physiotherapist in Oakville — we're here and ready to help.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[15px] font-semibold uppercase tracking-[18%] text-[#BD911F] mb-7">
              Quick Links
            </p>
            <nav className="flex flex-col gap-5">
              {[
                "Home",
                "Our Services",
                "About Maikal",
                "Blog",
                "Contact Us",
              ].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-[19px] text-[#919191] hover:text-white tracking-[7%] transition-colors w-fit"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[15px] font-semibold uppercase tracking-[18%] text-[#BD911F] mb-7">
              Contact
            </p>
            <div className="text-[19px] text-[#919191]  tracking-[7%] transition-colors w-fit space-y-5 ">
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xl text-[#919191] tracking-[7%]">
          <span>© 2026 Speers Road Physiotherapy. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-white/60 transition-colors underline underline-offset-4 "
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white/60 transition-colors underline underline-offset-4 "
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
