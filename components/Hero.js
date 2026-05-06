import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[580px] flex items-center overflow-hidden">
      <div
        className="absolute max-w-[80vw] ml-auto inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,8,20,0.98)_0%,rgba(0,8,20,0.95)_20%,rgba(1,19,58,0.85)_55%,rgba(26,50,99,0.5)_75%,rgba(26,50,99,0.2)_100%)]" />
      <div className="relative z-10 max-w-[1240px] mx-auto px-10 sm:px-0 py-20 w-full">
        <p className="text-lg  uppercase tracking-[18%] text-[#BD911F] mb-[29px]">
          Move Better. Feel Stronger. Live Without Pain.
        </p>
        <h1 className="cormorant text-5xl lg:text-[80px] leading-tight  text-white   mb-8">
          Physiotherapy
          <br />
          Clinic in <em className="italic text-[#C9A84C]">Oakville</em>,<br />
          Ontario
        </h1>
        <p className="text-[#919191] pe-1 text-lg max-w-[620px] mb-9 leading-[29.9px]">
          At Speers Road Physiotherapy, we help you recover faster and get back
          to the life you love. With 25+ years of experience, our registered
          physiotherapists in Oakville provide hands-on, one-on-one care —
          tailored to your condition, your goals, and your timeline.
        </p>
        <div className="flex items-center flex-wrap gap-4">
          <Link
            href="#book"
            className="bg-[#BD911F] hover:bg-[#b08a38] text-white text-xs font-bold uppercase tracking-widest px-14 py-5 transition-colors"
          >
            Book an Appointment
          </Link>
          <Link
            href="#services"
            className="text-[#919191]  text-sm underline underline-offset-8   uppercase tracking-widest  transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
