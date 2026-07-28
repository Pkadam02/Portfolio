"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Design", "Develop", "Mentorship", "Architecture", "Optimization", "Scale"];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(wordInterval);
          setTimeout(() => {
            setIsComplete(true);
            document.body.style.overflow = "";
          }, 500);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(wordInterval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#f4f1ea] text-[#16130f] flex flex-col justify-between p-10 md:p-20 overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Header */}
          <div className="flex justify-between items-center text-xs tracking-[0.2em] text-[#16130f]/60 font-mono font-bold uppercase">
            <span>Prathmesh Kadam</span>
            <span>Portfolio 2026</span>
          </div>

          {/* Morphing Word */}
          <div className="flex flex-col justify-center items-start h-[40vh]">
            <span className="text-[#16130f]/40 text-lg uppercase tracking-[0.3em] mb-4 font-mono font-bold">Focus</span>
            <div className="h-16 md:h-24 overflow-hidden relative w-full">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={words[wordIndex]}
                  className="text-4xl md:text-7xl font-black tracking-tight text-[#16130f] flex items-center uppercase"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  {words[wordIndex]}
                  <span className="text-[#d97e06] ml-1">.</span>
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>

          {/* Footer with progress percentage */}
          <div className="flex justify-between items-end border-t border-[#16130f]/15 pt-10">
            <div className="flex flex-col gap-2">
              <div className="h-[3px] bg-[#d97e06] transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
              <span className="text-xs text-[#16130f]/60 tracking-wider font-mono font-bold">LOADING SYSTEM</span>
            </div>
            <div className="text-7xl md:text-9xl font-black text-[#16130f] leading-none font-mono tracking-tighter tabular-nums">
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
