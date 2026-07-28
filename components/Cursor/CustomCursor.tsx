"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Outer ring spring configuration (smooth lag)
  const ringX = useSpring(cursorX, { damping: 30, stiffness: 200 });
  const ringY = useSpring(cursorY, { damping: 30, stiffness: 200 });

  // Inner dot (faster tracking)
  const dotX = useSpring(cursorX, { damping: 15, stiffness: 400 });
  const dotY = useSpring(cursorY, { damping: 15, stiffness: 400 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".interactive") ||
        window.getComputedStyle(target).cursor === "pointer";
        
      setHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", checkHover);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, hidden]);

  if (hidden) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#FF3B30] pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.5 : 1,
          borderColor: hovered ? "#FF3B30" : "rgba(255, 59, 48, 0.6)",
          backgroundColor: hovered ? "rgba(255, 59, 48, 0.15)" : "rgba(255, 59, 48, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FF3B30] pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicked ? 1.5 : hovered ? 0.5 : 1,
        }}
      />
    </>
  );
}
