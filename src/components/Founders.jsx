"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const teamCards = [
  {
    image: "/f1.jpeg",
    title: "Vishnu Gokul",
    description: "Co-Founder & Head of Operations",
    note: "Behind every great idea is a lot of unseen work. That's usually where you'll find me.",
    linkedin: "https://www.linkedin.com/in/vishnugokul/",
  },
  {
    image: "/f2.jpeg",
    title: "Bhavana Basavaraju",
    description: "Co-Founder & Head of Strategy",
    note: "Behind every memorable brand is a simple truth. I enjoy helping people find it.",
    linkedin: "https://www.linkedin.com/in/bhavana-basavaraju-113742268/",
  },
  {
    image: "/f3.jpeg",
    title: "Suhas M B",
    description: "Co-Founder & Head of Production",
    note: "Every great piece of work starts as a rough idea. I enjoy being part of the journey that shapes it.",
    linkedin: "https://www.linkedin.com/in/suhas-m-b-a29b06212/",
  },
];

export default function Founders() {
  return (
    <section id="founders" className="relative w-full bg-black py-12 md:py-16 overflow-hidden">
      <div className="px-5 md:px-[80px]">
        <div className="flex items-start gap-4 md:gap-10">

          <div className="shrink-0 pt-4">
            <span className="text-[#e2e3e5] uppercase text-xs md:text-sm tracking-wide">(Founders)</span>
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-8 items-start">

              {/* Left Text */}
              <div>
                <h1 className={`${montserrat.className} text-[#e2e3e5] text-[11vw] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[0.92] tracking-[-0.06em] font-semibold`}>
                  The First
                  <br />Three Dots
                </h1>
                <p className="mt-6 md:mt-8 text-[#9A9A9A] text-[14px] md:text-[15px] leading-relaxed max-w-[320px]">
                  Before the company had a name, it had three curious minds chasing the same vision. The first three dots that connected into everything you see today.
                </p>
              </div>

              {/* Founder Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {teamCards.map((card, index) => (
                  <div key={index} className="flex flex-col">

                    {/* Flip Card */}
                    <div className="group relative aspect-[3/4] [perspective:1200px]">
                      <div className="relative h-full w-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                        {/* Front */}
                        <div className="absolute inset-0 overflow-hidden bg-[#e2e3e5] [backface-visibility:hidden]">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill priority quality={100} sizes="(max-width: 640px) 100vw, 33vw"
                            className="object-cover"
                            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                          />
                        </div>

                        {/* Back */}
                        <div className="absolute inset-0 bg-[#FCB724] p-4 md:p-5 flex flex-col justify-between text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
                          <div>
                            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] mb-3 md:mb-4">Founder's Note</p>
                            <p className="text-sm leading-relaxed">{card.note}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-base md:text-lg">{card.title}</h4>
                              <p className="text-xs opacity-70">Creo Creators</p>
                            </div>
                            <a
                              href={card.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 md:w-10 md:h-10 bg-black text-white flex items-center justify-center hover:scale-110 transition-transform"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.7c0-1.84-.03-4.2-2.56-4.2-2.57 0-2.97 2-2.97 4.07V24h-5V8z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Text */}
                    <div className="mt-3">
                      <h3 className={`${montserrat.className} text-[#e2e3e5] text-[16px] md:text-[18px] font-medium leading-tight`}>{card.title}</h3>
                      <p className="text-[#9A9A9A] text-sm mt-1 leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}