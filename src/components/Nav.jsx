"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  { label: " [WORK]", href: "#work" },
  { label: " [SERVICES]", href: "#services" },
  { label: " [ABOUT]", href: "#about" },
  { label: " [WHY US]", href: "#why-us" },
  { label: " [CONTACT]", href: "https://wa.link/d6cus6" }, // Replace with actual link
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`
          isolate fixed top-5 left-1/2 -translate-x-1/2 z-[150]
          w-[60%] max-w-[1250px] rounded-xl px-8 py-3
          transition-colors duration-300
          ${isMenuOpen
            ? "bg-black/80 backdrop-blur-md"
            : "bg-white/20 backdrop-blur-md"
          }
        `}
      >
        <div className="flex items-center justify-between relative">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Creo Creators"
              width={260}
              height={80}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>

          {/* <div className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/landscape-logo.png"
              alt="Creo"
              width={160}
              height={40}
              className="h-10 object-contain"
            />
          </div> */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-[60] w-8 h-8 grid grid-cols-2 grid-rows-2 gap-1"
            aria-label="Toggle menu"
          >
            {[
              "rounded-br-lg",
              "rounded-bl-lg",
              "rounded-tr-lg",
              "rounded-tl-lg",
            ].map((corner, i) => (
              <span
                key={i}
                className={`
                  transition-all duration-300 bg-[#d9d9d9]
                  ${isMenuOpen
                    ? "rounded-full bg-[#111] " +
                    (i % 2 === 0 ? "rotate-45" : "-rotate-45")
                    : corner
                  }
                `}
              />
            ))}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{
              duration: 0.55,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 bg-white z-[120] flex items-center justify-center overflow-hidden"
          >
            {/* Background Text */}
            <span className="absolute select-none pointer-events-none text-[28vw] font-black text-black/[0.04] leading-none tracking-[-0.05em] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
              CREO
            </span>

            {/* Top Fade */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

            {/* Menu Grid */}
            {/* Menu */}
            <div className="flex flex-col pt-12 items-center justify-center gap-7">
              {menuLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "CONTACT" ? "_blank" : undefined}
                  rel={item.label === "CONTACT" ? "noopener noreferrer" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black text-[80px] font-bold tracking-[-0.05em] leading-none hover:text-[#ff3c00] transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}