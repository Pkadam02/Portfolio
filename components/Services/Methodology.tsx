"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import Magnetic from "../Navbar/Magnetic";

export default function Methodology() {
  const { methodology } = portfolioData;

  return (
    <section className="relative py-24 bg-transparent border-t border-[#16130f]/15 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="pill-badge text-[#d97e06] border-[#d97e06]/30 bg-[#d97e06]/10">
            OUR METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#16130f] uppercase tracking-tight">
            We Turn Ideas Into Tangible Work<span className="text-[#d97e06]">.</span>
          </h2>
          <p className="text-[#16130f]/60 text-sm font-mono tracking-wider uppercase mt-1 font-bold">
            Every job starts on paper.
          </p>
        </div>

        {/* 01 DRAW, 02 MAKE, 03 GROW style paper cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methodology.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <i className="paper-shadow paper-clip" />
              <div className="paper-card paper-kraft paper-clip p-8 rounded-xl flex flex-col justify-between h-[320px] relative shadow-xl">
                <span className="tape-strip" />

                <div className="flex justify-between items-start">
                  <span className="text-3xl font-mono text-[#a2440a] font-black">
                    - {item.number}
                  </span>
                  <span className="text-xs font-mono text-[#16130f]/60 uppercase tracking-widest font-bold">
                    {item.subtitle}
                  </span>
                </div>

                <div className="flex flex-col gap-2 mt-auto">
                  <h3 className="text-[#16130f] font-extrabold text-2xl uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#16130f]/75 text-xs leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workshop Navigation Bar */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-[#16130f]/15 pt-8">
          <div className="text-xs font-mono text-[#16130f]/60 uppercase tracking-widest font-bold">
            Enter the developer workshop studio
          </div>

          <div className="flex items-center gap-4">
            <Magnetic range={20} strength={0.3}>
              <a
                href="#services-grid"
                className="flex items-center gap-2 text-xs uppercase font-mono tracking-[0.15em] px-6 py-3 rounded-full border border-[#16130f]/20 text-[#16130f] font-bold hover:border-[#d97e06] hover:text-[#d97e06] transition-colors bg-white/40"
              >
                <span>[Enter Workshop &rarr;]</span>
              </a>
            </Magnetic>
          </div>
        </div>

      </div>
    </section>
  );
}
