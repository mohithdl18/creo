"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedWord = () => {
  const words = ["Creativity", "Strategy", "Consistency"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="inline-block px-2 py-1 transition-all duration-300"
      style={{ color: "#000000", backgroundColor: "#FCB724" }}
    >
      {words[index]}
    </span>
  );
};

export default function AboutMain() {
  return (
    <section id="about" className="relative w-full bg-black py-12 md:py-16 overflow-hidden">
      <div className="px-5 md:px-[80px]">
        <div className="flex items-start gap-4 md:gap-10">

          <div className="shrink-0 pt-4">
            <span className="text-[#e2e3e5] uppercase text-xs md:text-sm tracking-wide">(About)</span>
          </div>

          <div className="flex-1 relative">
            {/* Floating Faces — desktop only */}
            <motion.div
              className="absolute top-20 left-[-11%] z-10 hidden lg:block"
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/face1.png" alt="Team Member" width={180} height={180} className="drop-shadow-2xl select-none" />
            </motion.div>

            <motion.div
              className="absolute top-[-20px] right-[5%] z-10 hidden lg:block"
              animate={{ y: [0, 20, 0], rotate: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/face2.png" alt="Team Member" width={180} height={180} className="drop-shadow-2xl select-none" />
            </motion.div>

            <motion.div
              className="absolute top-[250px] left-[40%] z-10 hidden lg:block"
              animate={{ x: [0, 10, 0], y: [0, -12, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/face3.png" alt="Team Member" width={180} height={180} className="drop-shadow-2xl select-none" />
            </motion.div>

            {/* Main Heading */}
            <div>
              <h1 className="text-[#e2e3e5] text-[11vw] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[0.92] tracking-[-0.06em] font-semibold">
                Built through <AnimatedWord />.
              </h1>
            </div>

            <p className="mt-6 md:mt-10 text-[#e2e3e5] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-light leading-[1.2] md:leading-[1.02] tracking-[-0.03em] max-w-[1200px]">
              Helping brands tell better stories, create better content, and get better results. How? A mix of AI, creativity, strategy, production, marketing expertise, and occasionally staring at a screen until a great idea appears. Then spending another hour making it even better.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16">
              {[
                { value: "50+",  label: "Brands Worked With" },
                { value: "4.2x", label: "Avg. ROAS Delivered" },
                { value: "₹2Cr+", label: "Ad Spend Managed" },
                { value: "180%", label: "Avg. Follower Growth" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-md p-4 md:p-6 rounded-lg border border-white/10 flex flex-col justify-between h-[140px] md:h-[200px] shadow-lg hover:border-white/20 transition-all"
                >
                  <p className="text-[#e2e3e5] text-[36px] md:text-[56px] font-bold">{stat.value}</p>
                  <p className="text-[#a0a1a3] text-[10px] md:text-[12px] uppercase tracking-wide text-left leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}