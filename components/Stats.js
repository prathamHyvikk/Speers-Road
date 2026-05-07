"use client";

import { useEffect, useState } from "react";

const stats = [
  { num: "25+", label: "Years of Excellence" },
  { num: "5000+", label: "Patients Treated" },
  { num: "8+", label: "Specialist Services" },
  { num: "7", label: "Days a Week" },
];

function CountUp({ value }) {
  const hasPlus = value.includes("+");
  const target = parseInt(value.replace("+", ""));
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
      {count}
      {hasPlus && "+"}
    </>
  );
}

export default function Stats() {
  return (
    <div className="bg-[#051941] border-t-[1px] border-[#919191]">
      <div className="max-w-[1240px] mx-auto px-10 sm:px-0 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`text-center py-5 px-4 ${
              i < 3 ? "border-r-[1px] border-[#919191]" : ""
            }`}
          >
            <div className="text-[53px] cormorant font-bold text-[#C9A84C] leading-none mb-2">
              <CountUp value={s.num} />
            </div>

            <div className="text-base uppercase tracking-[20%] text-[#919191]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
