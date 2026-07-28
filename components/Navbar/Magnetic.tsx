"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  range?: number;
  strength?: number;
}

export default function Magnetic({ children, range = 35, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Distance from the center of the bounding box
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Check if pointer is within interaction range
    const distance = Math.sqrt(x * x + y * y);
    if (distance < range) {
      setPosition({ x: x * strength, y: y * strength });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
