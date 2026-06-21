"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Social Media Marketing",
    bg: "#333333",
    box: "#404040",
    text: "#E2E3E5",
    image: "/s1.png",
  },
  {
    id: "02",
    title: "Google Ads",
    bg: "#d5ccc7",
    box: "#E6DDD8",
    text: "#000000",
    image: "/s2.png",
  },
  {
    id: "03",
    title: "Meta Ad Campaigns",
    bg: "#a9a29c",
    box: "#BCB4AE",
    text: "#000000",
    image: "/s3.png",
  },
  {
    id: "04",
    title: "Photo & Video Production",
    bg: "#28262b",
    box: "#343238",
    text: "#E2E3E5",
    image: "/s4.png",
  },
  {
    id: "05",
    title: "Branding & Design",
    bg: "#d5ccc7",
    box: "#E6DDD8",
    text: "#000000",
    image: "/s5.png",
  },
  {
    id: "06",
    title: "Website Development",
    bg: "#333333",
    box: "#404040",
    text: "#E2E3E5",
    image: "/s6.png",
  },
  {
    id: "07",
    title: "Website Maintenance",
    bg: "#a9a29c",
    box: "#BCB4AE",
    text: "#000000",
    image: "/s7.png",
  },
];

export default function ServicesMain() {
  const [activeCard, setActiveCard] = useState(null);

  const marqueeServices = [...services, ...services];

  return (
    <section
      id="services"
      className="w-full bg-black py-16 md:py-24 overflow-hidden"
    >
      <div className="px-5 md:px-[80px]">
        <div className="flex items-start gap-4 md:gap-10">
          <div className="shrink-0 pt-3">
            <span className="text-[#e2e3e5] uppercase text-xs md:text-sm tracking-wide">
              (Services)
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-[#e2e3e5] text-[8vw] sm:text-[48px] md:text-[65px] lg:text-[82px] leading-[0.92] tracking-[-0.06em] font-medium max-w-[1400px]">
              THE THINGS WE'RE REALLY GOOD AT
            </h1>

            <div className="mt-8 md:mt-12 overflow-hidden">
              <motion.div
                className="flex gap-[1px] w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 35,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {marqueeServices.map((service, index) => {
                  const isHovered = activeCard === index;

                  return (
                    <motion.div
                      key={`${service.id}-${index}`}
                      onMouseEnter={() => setActiveCard(index)}
                      onMouseLeave={() => setActiveCard(null)}
                      initial={false}
                      animate={{
                        width: 280,
                        height: isHovered ? 373 : 280, // 1:1 -> 3:4
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative overflow-hidden shrink-0"
                      style={{
                        backgroundColor: service.bg,
                      }}
                    >
                      {/* Image appears only on hover */}
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        priority
                        className={`absolute inset-0 object-cover transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                          }`}
                      />

                      {/* Color overlay */}
                      <div
                        className="absolute inset-0 z-10 transition-opacity duration-300"
                        style={{
                          backgroundColor: service.bg,
                          opacity: isHovered ? 0.2 : 1,
                        }}
                      />

                      {/* Service Number */}
                      <span
                        className={`absolute top-4 left-4 text-[18px] md:text-[22px] font-medium z-20 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"
                          }`}
                        style={{ color: service.text }}
                      >
                        {service.id}
                      </span>

                      {/* Bottom Label */}
                      <div
                        className="absolute bottom-0 left-0 w-full h-[65px] md:h-[78px] flex items-center px-4 md:px-6 z-20"
                        style={{
                          backgroundColor: service.box,
                          color: service.text,
                        }}
                      >
                        <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium tracking-[-0.03em]">
                          {service.title}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}