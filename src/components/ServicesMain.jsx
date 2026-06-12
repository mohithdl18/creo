"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  { id: "01", title: "Social Media Marketing", bg: "#333333", box: "#404040", text: "#E2E3E5", video: "/s1.mp4" },
  { id: "02", title: "Google Ads", bg: "#d5ccc7", box: "#E6DDD8", text: "#000000", video: "/s2.mp4" },
  { id: "03", title: "Meta Ad Campaigns", bg: "#a9a29c", box: "#BCB4AE", text: "#000000", video: "/s1.mp4" },
  { id: "04", title: "Photo & Video Production", bg: "#28262b", box: "#343238", text: "#E2E3E5", video: "/s2.mp4" },

  // Add your new services here
  { id: "05", title: "Branding & Design", bg: "#d5ccc7", box: "#E6DDD8", text: "#000000", video: "/s1.mp4" },
  { id: "06", title: "Website Development", bg: "#333333", box: "#404040", text: "#E2E3E5", video: "/s2.mp4" },
  { id: "07", title: "Website Maintenance", bg: "#a9a29c", box: "#BCB4AE", text: "#000000", video: "/s1.mp4" },
];

export default function ServicesMain() {
  const [activeCard, setActiveCard] = useState(null);

  const marqueeServices = [...services, ...services];

  return (
    <section id="services" className="w-full bg-black py-24 overflow-hidden">
      <div className="px-[80px]">
        <div className="flex items-start gap-10">
          <div className="shrink-0 pt-3">
            <span className="text-[#e2e3e5] uppercase text-sm tracking-wide">
              (Services)
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-[#e2e3e5] text-[82px] leading-[0.92] tracking-[-0.06em] font-medium max-w-[1400px]">
              THE THINGS WE'RE REALLY GOOD AT
            </h1>

            <div className="mt-12 overflow-hidden">
              <motion.div
                className="flex gap-[1px] w-max"
                animate={{
                  x: ["0%", "-50%"],
                }}
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
                        height: isHovered ? 520 : 400,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative overflow-hidden shrink-0 w-[280px]"
                      style={{
                        backgroundColor: service.bg,
                      }}
                    >
                      <video
                        src={service.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      <div
                        className="absolute inset-0 z-10 transition-opacity duration-300"
                        style={{
                          backgroundColor: service.bg,
                          opacity: isHovered ? 0.2 : 0.4,
                        }}
                      />

                      <span
                        className="absolute top-5 left-5 text-[22px] font-medium z-20"
                        style={{
                          color: service.text,
                        }}
                      >
                        {service.id}
                      </span>

                      <div
                        className="absolute bottom-0 left-0 w-full h-[78px] flex items-center px-6 z-20"
                        style={{
                          backgroundColor: service.box,
                          color: service.text,
                        }}
                      >
                        <h3 className="text-[24px] md:text-[18px] font-medium tracking-[-0.03em]">
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