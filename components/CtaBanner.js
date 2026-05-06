import Link from "next/link";

export default function CtaBanner() {
  return (
    <section id="book" className="bg-[#BD911F] py-[75px] px-10">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div>
          <h2 className="cormorant text-3xl lg:text-[52px] text-white ">
            Ready to begin your{" "}
            <em className="italic text-[#051941]">recovery journey?</em>
          </h2>
          <p className="text-[#FFFFFFB0] text-base mt-4 max-w-[662px] ">
            Don't let pain hold you back any longer. Book your appointment at
            our Oakville physiotherapy clinic today and take the first step
            toward lasting relief and recovery. New patients are welcome, and
            same-week appointments are often available.
          </p>
        </div>
        <div className="flex flex-col gap-5 shrink-0">
          <div className="block bg-white  text-[#BD911F] text-sm  uppercase tracking-[18%] px-12 py-[10px] transition-colors text-center ">
            <Link href="#" className="">
              Book an Appointment
            </Link>
          </div>

          <div className="flex justify-between gap-4">
            <a
              href="tel:9053392323"
              className=" text-[#051941]  text-sm uppercase tracking-[11%] underline underline-offset-4  transition-colors block"
            >
              Call Us Today
            </a>
            <a
              href="https://maps.google.com"
              className=" text-[#051941]  text-sm uppercase tracking-[11%] underline underline-offset-4  transition-colors block"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
