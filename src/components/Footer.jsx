"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebookF, FaYoutube, FaGoogle, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  return (
    <footer className="w-full bg-[#e7e7e7] text-black px-6 md:px-10 py-10 overflow-hidden">
      <div className="flex flex-col justify-between min-h-[380px]">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-[42px] md:text-[52px] font-extrabold tracking-[-0.04em] leading-none">
              BENGALURU, <span className="text-[#FCB724]">IND</span>
            </h2>

            <div className="mt-4 text-[24px] leading-[1.3] font-medium">
              <a
                href="mailto:admin@creocreators.in"
                className="hover:text-[#FCB724] transition-colors duration-300"
                onClick={() => {
                  navigator.clipboard.writeText("admin@creocreators.in");
                }}
              >
                <p>admin@creocreators.in</p>
              </a>
              <a
                href="tel:+919148386949"
                className="hover:text-[#FCB724] transition-colors duration-300"
                onClick={() => {
                  navigator.clipboard.writeText("+91 91483 86949");
                }}
              >
                <p>+91 91483 86949</p>
              </a>
            </div>

            <div className="flex gap-8 mt-6">
              <a
                href="https://share.google/xrBIl9ZdVL073EZOz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:scale-110 transition-transform duration-300"
              >
                <FaGoogle size={36} />
              </a>
              <a
                href="https://www.instagram.com/creocreators_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram size={36} />
              </a>

              <a
                href="https://www.facebook.com/creoindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:scale-110 transition-transform duration-300"
              >
                <FaFacebookF size={36} />
              </a>

              <a
                href="https://www.youtube.com/@Creocreators-ev2mv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:scale-110 transition-transform duration-300"
              >
                <FaYoutube size={36} />
              </a>

              <a
                href="https://www.linkedin.com/company/creo-creators/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:scale-110 transition-transform duration-300"
              >
                <FaLinkedin size={36} />
              </a>
            </div>
          </div>

          <a
            href="https://wa.link/d6cus6"
            target="_blank"
            rel="noopener noreferrer"
            className="group block cursor-none"
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
            onMouseMove={(e) =>
              setCursorPos({
                x: e.clientX,
                y: e.clientY,
              })
            }
          >
            <div className="flex items-end justify-between mt-6 flex-wrap gap-8">
              {/* Circular spinning text */}
              <div className="relative w-[150px] h-[150px]">
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
                    />
                  </defs>

                  <text
                    fill="black"
                    fontSize="32"
                    fontWeight="500"
                    letterSpacing="2"
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      tell us about your project *
                    </textPath>
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/footer-icon.png"
                    alt="icon"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>

              <div className="flex-1 flex justify-end">
                <h1 className="text-[70px] sm:text-[90px] md:text-[140px] lg:text-[200px] font-bold leading-none tracking-[-0.06em] whitespace-nowrap group-hover:text-[#FCB724] transition-colors duration-500">
                  creo creators

                  <span
                    className="material-symbols-outlined inline-block ml-2 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300"
                    style={{ fontSize: "100px", fontWeight: 800 }}
                  >
                    north_east
                  </span>
                </h1>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-8">
          <p className="text-[18px] font-medium">
            All rights reserved @2026
          </p>
        </div>
      </div>

      {/* Premium Agency Cursor */}
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
            <div className="w-32 h-32 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold tracking-wide">
              Click to Start
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}