"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: string;
  duration?: number;
}

export default function Counter({ value, duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Parse numeric parts (e.g., "1.9" from "1.9+", "20" from "20+")
  const numericPart = value.replace(/[^0-9.]/g, "");
  const target = parseFloat(numericPart) || 0;
  const isFloat = numericPart.includes(".");
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    const startVal = 0;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const currentVal = startVal + progress * (target - startVal);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [target, duration, isInView]);

  return (
    <span ref={ref} className="font-bold tabular-nums font-mono">
      {isFloat ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}
