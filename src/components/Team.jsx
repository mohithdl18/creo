"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Team() {
  return (
    <section id="team" className="relative w-full bg-black py-12 md:py-16 overflow-hidden">
      <div className="px-5 md:px-[80px]">
        <div className="flex items-start gap-4 md:gap-10">

          <div className="shrink-0 pt-4">
            <span className="text-[#e2e3e5] uppercase text-xs md:text-sm tracking-wide">(Team)</span>
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-6 md:gap-8 items-start">

              {/* Left Text */}
              <div>
                <h1 className={`${montserrat.className} text-[#e2e3e5] text-[11vw] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[0.92] tracking-[-0.06em] font-semibold`}>
                  A few Humans,
                  <br />mostly
                </h1>
                <p className="mt-6 md:mt-8 text-[#9A9A9A] text-[14px] md:text-[15px] leading-relaxed max-w-[320px]">
                  Behind every campaign, strategy and creative idea is a team obsessed with making brands impossible to ignore.
                </p>
              </div>

              {/* Right Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden" style={{ transform: "translateZ(0)" }}>
                <Image
                  src="/noteam.jpeg"
                  alt="Team"
                  fill priority quality={100} sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover"
                  style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}