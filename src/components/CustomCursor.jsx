"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target.closest(".hide-custom-cursor");
      setHidden(!!target);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: position.x,
        top: position.y,
        opacity: hidden ? 0 : 1,
      }}
    />
  );
}