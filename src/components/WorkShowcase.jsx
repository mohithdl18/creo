"use client";

import { useRef, useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const cards = [
  { title: "Blanc",       subtitle: "Creative Direction & Branding",  video: "/vid1.mp4" },
  { title: "Air Jordans", subtitle: "Motion & Visual Identity",        video: "/vid2.mp4" },
  { title: "Madhu Silks", subtitle: "Digital Experience Design",       video: "/vid3.mp4" },
];

export default function WorkShowcase() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const videoRefs = useRef([]);

  const playAudio  = (i) => { const v = videoRefs.current[i]; if (v) { v.muted = false; v.volume = 1; } };
  const stopAudio  = (i) => { const v = videoRefs.current[i]; if (v) v.muted = true; setHoveredCard(null); };

  return (
    <section id="work" className="w-full bg-black py-16 md:py-24">
      <div className="px-5 md:px-[80px]">

        {/* Heading */}
        <div className="flex items-start gap-4 md:gap-10 mb-12 md:mb-20">
          <div className="pt-2 md:pt-4 shrink-0">
            <span className="text-[#e2e3e5] text-xs md:text-sm tracking-[-0.03em]">(OUR WORK)</span>
          </div>
          <div className="flex-1">
            <h1 className={`${montserrat.className} text-[#e2e3e5] text-[36px] sm:text-[52px] md:text-[72px] lg:text-[92px] leading-[0.92] tracking-[-0.06em] font-medium`}>
              Projects that left a mark.
            </h1>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {cards.map((item, index) => (
            <div
              key={item.title}
              className="group"
              onMouseMove={(e) => { setCursorX(e.clientX); setCursorY(e.clientY); setHoveredCard(index); }}
              onMouseDown={() => playAudio(index)}
              onMouseUp={() => stopAudio(index)}
              onMouseLeave={() => stopAudio(index)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.video}
                  autoPlay muted loop playsInline disablePictureInPicture
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {hoveredCard === index && (
                  <div
                    className="fixed z-[200] pointer-events-none hidden md:block"
                    style={{ left: `${cursorX}px`, top: `${cursorY}px`, transform: "translate(-50%, -50%)" }}
                  >
                    <div className="bg-[#e2e3e5] text-black font-bold text-xs px-4 py-2 rounded-full whitespace-nowrap tracking-wide">
                      Hold for Audio
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-[#e2e3e5] px-4 md:px-5 py-3 md:py-4 transition-colors duration-300 group-hover:bg-white">
                <h3 className="text-black text-2xl md:text-4xl font-bold tracking-[-0.03em] leading-none">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2 tracking-[-0.01em] leading-snug font-light">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}