import Image from "next/image";

const testimonials = [
  {
    text: "After months of back pain, I finally found a physiotherapy clinic in Oakville that actually listened. The team here is exceptional — I'm back to doing everything I love.",
    author: "Sarah M.",
    location: "Lower Back Pain",
  },
  {
    text: "The Gunn IMS treatment changed everything for my shoulder. The physiotherapist was knowledgeable, thorough, and genuinely cared about my progress. Best physio in Oakville, hands down",
    author: "James R.",
    location: "MVA",
  },
  {
    text: "I had vertigo for weeks and didn't know what to do. Their vestibular rehab program was incredible. I feel like myself again — can't thank them enough",
    author: "Priya K.",
    location: "Knee Pain",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-[117px] pb-[165px] px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-sm  uppercase tracking-[18%] text-[#BD911F] mb-3">
              Patient Stories
            </p>
            <h2 className="cormorant text-4xl lg:text-[56px]  text-[#051941] leading-tight ">
              What Our <em className="italic text-[#A9821C]">Patients</em>
              <br />
              Are Saying
            </h2>
          </div>
          <a
            href="#reviews"
            className="text-sm uppercase tracking-[11%] text-[#D9AE3F] border-b border-[#C9A84C] pb-0.5 hidden md:block"
          >
            Read More Reviews
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              className="bg-white border-[0.6px] border-[#D9AE3F4D]  p-8 flex flex-col justify-between "
              key={t.author}
            >
              <div className=" flex">
                <div className="shrink-0">
                  <Image src="/quote.png" alt="Quote" width={24} height={24} />
                </div>
                <div className="">
                  <p className="cormorant text-base text-[#555555] pt-3  italic mb-9">
                    {t.text}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs  uppercase tracking-[7%] text-[#BD911F]">
                  {t.author}
                </p>
                <p className="text-[10px]  uppercase tracking-[7%] text-[#919191]">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
