"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "../Background/AppContext";
import { portfolioData } from "@/data/portfolioData";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Magnetic from "../Navbar/Magnetic";

export default function Testimonials() {
  const { t } = useApp();
  const { testimonials } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVars = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
    }),
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-transparent border-t border-[#16130f]/15 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="pill-badge text-[#d97e06] border-[#d97e06]/30 bg-[#d97e06]/10">
            {t("testimonials.title")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#16130f] uppercase tracking-tight">
            Client & Peer Endorsements<span className="text-[#d97e06]">.</span>
          </h2>
        </div>

        {/* Testimonials Slider Body */}
        <div className="max-w-4xl mx-auto relative min-h-[300px] flex flex-col justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVars}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative"
            >
              <i className="paper-shadow paper-clip" />
              <div className="paper-card paper-kraft paper-clip p-8 md:p-12 rounded-xl flex flex-col md:flex-row gap-8 items-start relative overflow-hidden shadow-2xl">
                <span className="tape-strip" />
                <Quote className="absolute right-8 top-8 w-20 h-20 text-[#16130f]/10 pointer-events-none" />

                {/* Avatar Ring */}
                <div className="flex flex-col items-center gap-3 shrink-0 mx-auto md:mx-0">
                  <div className="w-16 h-16 rounded-full border-2 border-[#a2440a] bg-black/10 flex items-center justify-center text-[#a2440a] font-extrabold text-lg font-mono">
                    {activeTestimonial.name.split(" ").map(w => w[0]).join("")}
                  </div>
                  
                  <span className="text-[10px] font-mono text-[#a2440a] uppercase tracking-widest font-black">
                    VERIFIED PEER
                  </span>
                </div>

                {/* Testimony Content */}
                <div className="flex flex-col gap-4 text-center md:text-left">
                  <p className="text-[#16130f] italic text-sm md:text-base leading-relaxed font-semibold">
                    "{activeTestimonial.content}"
                  </p>
                  
                  <div className="mt-2">
                    <h4 className="text-[#16130f] font-extrabold text-base tracking-wide uppercase">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-[#a2440a] text-[10px] font-mono tracking-wider uppercase mt-0.5 font-bold">
                      {activeTestimonial.role} &bull; {activeTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8 px-2">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "bg-[#d97e06] w-6" : "bg-[#16130f]/20"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Magnetic range={15} strength={0.35}>
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-[#16130f]/20 bg-white/40 text-[#16130f] hover:text-[#d97e06] hover:border-[#d97e06] transition-colors"
                  title="Previous Testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
              </Magnetic>

              <Magnetic range={15} strength={0.35}>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-[#16130f]/20 bg-white/40 text-[#16130f] hover:text-[#d97e06] hover:border-[#d97e06] transition-colors"
                  title="Next Testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </Magnetic>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
