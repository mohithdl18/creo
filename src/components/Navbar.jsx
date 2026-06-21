"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  { label: "[WORK]", href: "/work" },
  { label: "[SERVICES]", href: "#services" },
  { label: "[ABOUT]", href: "#about" },
  { label: "[WHY US]", href: "#why-us" },
  { label: "[CONTACT]", href: "https://wa.link/d6cus6" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showCursor, setShowCursor] = useState(false);
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-4 md:top-8 left-0 w-full z-[150] pointer-events-none">
        <div className="flex justify-center px-4 md:px-6">
          <div className="pointer-events-auto w-full max-w-[1200px] bg-white/10 backdrop-blur-md border border-white/10 px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">

            {/* Left Contact */}
            <a
              href="https://wa.link/d6cus6"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setShowCursor(true)}
              onMouseLeave={() => setShowCursor(false)}
              className={`hide-custom-cursor font-semibold tracking-[0.1em] md:tracking-[0.15em] text-xs md:text-sm transition-colors duration-300 ${isMenuOpen ? "text-black" : "text-[#d9d9d9]"
                }`}
            >
              SAY HI!
            </a>

            {/* Center Logo */}
            <Image
              src="/logo.png"
              alt="Creo Creators"
              width={260}
              height={80}
              className="h-7 md:h-10 w-auto object-contain"
              priority
            />

            {/* Right Menu */}
            <div className="flex items-center gap-2 md:gap-3">
              <span className={`hidden sm:block text-xs md:text-sm tracking-[0.15em] font-semibold transition-colors duration-300 ${isMenuOpen ? "text-black" : "text-[#d9d9d9]"
                }`}>
                {isMenuOpen ? "CLOSE" : "MENU"}
              </span>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-[160] w-6 h-6 grid grid-cols-2 grid-rows-2 gap-1"
                aria-label="Toggle menu"
              >
                {[
                  "rounded-br-md",
                  "rounded-bl-md",
                  "rounded-tr-md",
                  "rounded-tl-md",
                ].map((corner, i) => (
                  <span
                    key={i}
                    className={`
                      transition-all duration-300
${isMenuOpen ? "bg-black" : "bg-[#d9d9d9]"}
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
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-white z-[120] flex items-center justify-center overflow-hidden"
          >
            <span className="absolute select-none pointer-events-none text-[28vw] font-black text-black/[0.04] leading-none tracking-[-0.05em] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
              CREO
            </span>

            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

            <div className="flex flex-col pt-12 items-center justify-center gap-4 md:gap-7 px-4">
              {menuLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.label === "[CONTACT]" ? "_blank" : undefined
                  }
                  rel={
                    item.label === "[CONTACT]"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black text-[10vw] sm:text-[60px] md:text-[80px] font-bold tracking-[-0.05em] leading-none hover:text-[#FCB724] transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Hover Cursor for SAY HI */}
      <AnimatePresence>
        {showCursor && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: cursorPos.x,
              y: cursorPos.y,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              x: {
                type: "spring",
                stiffness: 250,
                damping: 25,
              },
              y: {
                type: "spring",
                stiffness: 250,
                damping: 25,
              },
              scale: {
                duration: 0.2,
              },
            }}
            className="fixed left-0 top-0 pointer-events-none z-[9999]"
            style={{
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            <div className="w-26 h-26 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold tracking-wide">
              SAY HI!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}