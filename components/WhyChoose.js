import Image from "next/image";

const reasons = [
  {
    title: "One-on-One Attention",
    desc: "Every session is spent with your physiotherapist — not passed off to an assistant. You get focused, hands-on time that makes a real difference.",
  },
  {
    title: "Individualized Treatment Plans",
    desc: "No two patients are the same. We create customized plans that align with your condition, your goals, and your schedule.",
  },
  {
    title: "Experienced & Certified Team",
    desc: "Our physiotherapists are registered with the College of Physiotherapists of Ontario and bring years of clinical experience across a wide range of specialties.",
  },
  {
    title: "Convenient Location in Oakville",
    desc: "We're easy to find and easy to get to — right here in your community. If you've been searching for \"physiotherapy near me,\" we're likely just around the corner.",
  },
  {
    title: "Direct Billing to Insurance",
    desc: "We offer direct billing to most major insurance providers, making the process as seamless and stress-free as possible for you.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="grid grid-cols-1 lg:grid-cols-2 ">
      {/* Image side */}
      <div className="bg-[#00133A]">
        <Image
          width={720}
          height={881}
          className="w-full h-full object-cover"
          src={"/whyChoose.png"}
          alt="whyChoose"
        />
      </div>

      {/* Content side */}
      <div className="bg-[#00133A] px-12 py-20">
        <p className="text-[40px] cormorant italic   text-white ">Why Choose</p>
        <h2 className="cormorant text-[40px]  font-bold text-white  ">
          <span className="text-[#C9A84C]">SPEERS ROAD</span> Physiotherapy
        </h2>
        <div className="w-[75px] h-[1px] bg-[#D9AE3F] my-6 "></div>
        <p className="cormorant text-[#D9AE3F] text-[23px] italic   ">
          We know you have options when it comes to physio in Oakville. Here's
          what makes the difference when you choose us:
        </p>

        <div className="space-y-6 max-w-[538px] mt-7">
          {reasons.map((r) => (
            <div key={r.title}>
              <p className="text-base font-bold uppercase  text-white ">
                {r.title}
              </p>
              <p className="text-base text-[#919191] ">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
