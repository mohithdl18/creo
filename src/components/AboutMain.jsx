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
      style={{
        color: "#000000",
        backgroundColor: "#FCB724",
      }}
    >
      {words[index]}
    </span>
  );
};

export default function AboutMain() {
  return (
    <section id="about" className="relative w-full bg-black py-16 overflow-hidden">
      <div className="px-[80px]">
        <div className="flex items-start gap-10">
          <div className="shrink-0 pt-4">
            <span className="text-[#e2e3e5] uppercase text-sm tracking-wide">
              (About)
            </span>
          </div>

          <div className="flex-1 relative">
            {/* Floating Faces */}

            <motion.div
              className="absolute top-20 left-[-11%] z-10"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/face1.png"
                alt="Team Member"
                width={180}
                height={180}
                className="drop-shadow-2xl select-none"
              />
            </motion.div>

            <motion.div
              className="absolute top-[-20px] right-[5%] z-10"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -6, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/face2.png"
                alt="Team Member"
                width={180}
                height={180}
                className="drop-shadow-2xl select-none"
              />
            </motion.div>

            <motion.div
              className="absolute top-[250px] left-[40%] z-10"
              animate={{
                x: [0, 10, 0],
                y: [0, -12, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/face3.png"
                alt="Team Member"
                width={180}
                height={180}
                className="drop-shadow-2xl select-none"
              />
            </motion.div>

            {/* Main Content */}

            <div>
              <h1 className="text-[#e2e3e5] text-[100px] leading-[0.92] tracking-[-0.06em] font-semibold">
                Built through <AnimatedWord />.
              </h1>
            </div>

            <p className="mt-10 text-[#e2e3e5] text-[30px] font-light leading-[1.02] tracking-[-0.03em] max-w-[1200px]">
              Helping brands tell better stories, create better content, and get better results. How? A mix of AI, creativity, strategy, production, marketing expertise, and occasionally staring at a screen until a great idea appears. Then spending another hour making it even better.
            </p>

            <div className="grid grid-cols-4 gap-8 mt-16">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 flex flex-col justify-between h-[200px] shadow-lg hover:border-white/20 transition-all">
                <p className="text-[#e2e3e5] text-[56px] font-bold">50+</p>
                <p className="text-[#a0a1a3] text-[12px] uppercase tracking-wide text-left leading-tight">
                  Brands Worked With
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 flex flex-col justify-between h-[200px] shadow-lg hover:border-white/20 transition-all">
                <p className="text-[#e2e3e5] text-[56px] font-bold">4.2x</p>
                <p className="text-[#a0a1a3] text-[12px] uppercase tracking-wide text-left leading-tight">
                  Avg. ROAS Delivered
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 flex flex-col justify-between h-[200px] shadow-lg hover:border-white/20 transition-all">
                <p className="text-[#e2e3e5] text-[56px] font-bold">₹2Cr+</p>
                <p className="text-[#a0a1a3] text-[12px] uppercase tracking-wide text-left leading-tight">
                  Ad Spend Managed
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 flex flex-col justify-between h-[200px] shadow-lg hover:border-white/20 transition-all">
                <p className="text-[#e2e3e5] text-[56px] font-bold">180%</p>
                <p className="text-[#a0a1a3] text-[12px] uppercase tracking-wide text-left leading-tight">
                  Avg. Follower Growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}