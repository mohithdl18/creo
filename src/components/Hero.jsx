"use client";

import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const videoRef = useRef(null);

  const languages = [
    "creo",
    "क्रियो",
    "ಕ್ರಿಯೋ",
    "க்ரியோ",
    "ക്രിയോ",
    "క్రియో",
    "ક્રિયો",
    "ਕ੍ਰਿਓ",
    "ক্রিও",
    "ক্ৰিঅ",
  ];

  const [currentWord, setCurrentWord] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % languages.length);
        setVisible(true);
      }, 120);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  };

  const playAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
    }
  };

  const stopAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        stopAudio();
      }}
      onMouseDown={playAudio}
      onMouseUp={stopAudio}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Hero.mp4" type="video/mp4" />
      </video>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10" />

      {/* Cursor Tooltip */}
      {isHovering && (
        <div
          className="fixed z-[200] pointer-events-none"
          style={{
            left: `${cursorX}px`,
            top: `${cursorY}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="bg-[#E2E3E5] text-black font-bold text-xs px-4 py-2 rounded-full whitespace-nowrap tracking-wide">
            Hold for Audio
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-[#E2E3E5]/70 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#E2E3E5] rounded-full mt-2 animate-scrollDown" />
        </div>
      </div>

      {/* Multi-language CREO */}
      <div className="absolute bottom-10 left-10 z-20 leading-none">
        <h1
          className={`text-[#E2E3E5] text-[220px] md:text-[180px] font-bold leading-none transition-opacity duration-75 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {languages[currentWord]}
        </h1>
      </div>
    </section>
  );
}