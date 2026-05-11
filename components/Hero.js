import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[580px] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute sm:max-w-[80vw] ml-auto inset-0 bg-cover bg-center animate-zoom"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,19,58,1)_20%,rgba(0,19,58,0.96)_25%,rgba(3,24,66,0.88)_45%,rgba(26,50,99,0.6)_90%,rgba(26,50,99,0.85)_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-7 sm:px-10 xl:px-0 pt-32 pb-10  lg:pt-20 lg:pb-20 w-full">
        <p className="text-lg uppercase tracking-[18%] text-[#BD911F] mb-[29px] animate-fade-up">
          Move Better. Feel Stronger. Live Without Pain.
        </p>

        <h1 className="cormorant text-4xl sm:text-5xl lg:text-[80px] leading-tight text-white mb-8 animate-fade-up delay-200">
          Physiotherapy
          <br />
          Clinic in <em className="italic text-[#C9A84C]">Oakville</em>,<br />
          Ontario
        </h1>

        <p className="text-[#919191] pe-1 text-lg max-w-[620px] mb-9 leading-[29.9px] animate-fade-up delay-500">
          At Speers Road Physiotherapy, we help you recover faster and get back
          to the life you love. Since last 25 years the clinic is Serving
          Oakville. Our registered physiotherapists in Oakville provide
          hands-on, one-on-one care — tailored to your condition, your goals,
          and your timeline.
        </p>

        <div className="flex items-center flex-wrap gap-[30px] animate-fade-up delay-700">
          <Link
            href="#book"
            className="bg-[#BD911F] hover:bg-[#b08a38] text-white text-xs font-bold uppercase tracking-widest px-10 sm:px-14 py-5 transition-colors"
          >
            Book an Appointment
          </Link>

          <Link
            href="#services"
            className="text-[#919191] text-sm underline underline-offset-8 uppercase tracking-widest transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
