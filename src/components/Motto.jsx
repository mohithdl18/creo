"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const assets = [
  {
    src: "/b1.png",
    position: "top-[5%] left-[2%]",
    size: 220,
    duration: 11,
  },
  {
    src: "/b2.png",
    position: "top-[8%] right-[2%]",
    size: 180,
    duration: 9,
  },
  {
    src: "/b3.png",
    position: "top-[32%] left-[14%]",
    size: 220,
    duration: 13,
  },
  {
    src: "/b4.png",
    position: "top-[10%] right-[18%]",
    size: 260,
    duration: 10,
  },
  {
    src: "/b5.png",
    position: "bottom-[2%] left-[5%]",
    size: 250,
    duration: 12,
  },
  {
    src: "/b6.png",
    position: "bottom-[24%] right-[2%]",
    size: 230,
    duration: 14,
  },
  {
    src: "/b7.png",
    position: "bottom-[5%] left-[32%]",
    size: 200,
    duration: 9,
  },
  {
    src: "/b8.png",
    position: "bottom-[1%] right-[14%]",
    size: 280,
    duration: 15,
  },
];

export default function Motto() {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden px-[30px] md:px-[80px]">

      {/* Floating Assets */}
      {assets.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} pointer-events-none`}
          animate={{
            y: [0, -18, 10, -8, 0],
            x: [0, 8, -8, 4, 0],
            rotate: [-3, 2, -2, 3, -3],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={item.src}
            alt=""
            width={item.size}
            height={item.size}
            className="opacity-80"
          />
        </motion.div>
      ))}

      {/* Near-text assets */}
      <motion.div
        className="absolute left-[22%] top-[45%] pointer-events-none"
        animate={{
          y: [0, -12, 0, 12, 0],
          rotate: [-4, 4, -4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* <Image
          src="/b2.png"
          alt=""
          width={70}
          height={70}
          className="opacity-60"
        /> */}
      </motion.div>

      <motion.div
        className="absolute right-[22%] top-[42%] pointer-events-none"
        animate={{
          y: [0, 12, -12, 0],
          rotate: [3, -3, 3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* <Image
          src="/b5.png"
          alt=""
          width={80}
          height={80}
          className="opacity-60"
        /> */}
      </motion.div>

      {/* Main Text */}
      <div
        className={`${montserrat.className} relative z-10 text-center leading-[0.9] tracking-[-0.06em]`}
      >
        <h1 className="text-[#e2e3e5] text-5xl uppercase sm:text-6xl md:text-7xl lg:text-[120px] font-bold">
          Your Vision.
        </h1>

        <h2 className="text-[#7a7a7a] text-3xl uppercase sm:text-4xl md:text-5xl lg:text-[50px] font-medium my-6">
          is
        </h2>

        <h1 className="text-[#e2e3e5] text-5xl uppercase sm:text-6xl md:text-7xl lg:text-[120px] font-bold">
          Our Mission.
        </h1>
      </div>
    </section>
  );
}