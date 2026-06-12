"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
    { label: " [WORK]", href: "#work" },
    { label: " [SERVICES]", href: "#services" },
    { label: " [ABOUT]", href: "#about" },
    { label: " [WHY US]", href: "#why-us" },
    { label: " [CONTACT]", href: "https://wa.link/d6cus6" },
];

export default function Nav2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Floating Navigation */}
            {/* Floating Navigation */}
            <nav className="fixed top-8 left-0 w-full z-[150] pointer-events-none">
                <div className="flex justify-center px-6">

                    <div className="pointer-events-auto w-full max-w-[1200px] bg-white/10 backdrop-blur-md border border-white/10 px-6 md:px-8 py-4 flex items-center justify-between">

                        {/* Left Contact */}
                        <a
                            href="https://wa.link/d6cus6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#d9d9d9] font-semibold tracking-[0.15em] text-md"
                        >
                            SAY HI!
                        </a>

                        {/* Center Logo */}
                        <Image
                            src="/logo.png"
                            alt="Creo Creators"
                            width={260}
                            height={80}
                            className="h-10 w-auto object-contain"
                            priority
                        />

                        {/* Right Menu */}
                        <div className="flex items-center gap-3">
                            <span className="text-[#d9d9d9] text-md tracking-[0.15em] font-semibold">
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

                    </div>

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

                        {/* Menu Links */}
                        <div className="flex flex-col pt-12 items-center justify-center gap-7">
                            {menuLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target={
                                        item.label === " [CONTACT]"
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        item.label === " [CONTACT]"
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-black text-[80px] font-bold tracking-[-0.05em] leading-none hover:text-[#FCB724] transition-colors duration-300"
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