"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "../Background/AppContext";
import { portfolioData, Service } from "@/data/portfolioData";
import * as Icons from "lucide-react";
import confetti from "canvas-confetti";

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const LucideIcon = (Icons as any)[service.iconName] || Icons.Cpu;
  const paperClass = index % 2 === 0 ? "paper-cream" : "paper-kraft";

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="relative group"
    >
      <i className="paper-shadow paper-clip" />
      <div className={`paper-card ${paperClass} paper-clip p-8 rounded-xl flex flex-col justify-between h-[270px] relative shadow-2xl`}>
        <span className="tape-strip" />

        {/* Top Bar: Icon & Index Indicator */}
        <div className="flex justify-between items-start z-10">
          <div className="p-3 rounded-xl bg-black/5 text-[#a2440a] font-bold">
            <LucideIcon size={20} />
          </div>
          <span className="text-xs font-mono text-[#a2440a] uppercase tracking-widest font-black">
            {service.number} /
          </span>
        </div>

        {/* Body: Title and description */}
        <div className="flex flex-col gap-2 mt-auto z-10">
          <h3 className="text-[#16130f] font-extrabold text-base uppercase tracking-tight group-hover:text-[#a2440a] transition-colors">
            {service.title}
          </h3>
          <p className="text-[#16130f]/75 text-xs leading-relaxed font-medium">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { t } = useApp();
  const { services } = portfolioData;
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey((prev) => prev + 1);
  };

  const handleCrumpleDay = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.8 },
      colors: ["#d97e06", "#f4f1ea", "#16130f", "#a2440a"],
    });
  };

  return (
    <section id="services-grid" className="relative py-24 bg-transparent border-t border-[#16130f]/15 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ========================================================
           ELLUSION "CREATIVITY FOR NEXT GENERATIONS" SLOGAN SHEET
           ======================================================== */}
        <div className="mb-20 relative max-w-4xl mx-auto text-center select-none">
          <i className="paper-shadow paper-clip" />
          <div className="paper-card paper-cream paper-clip p-8 md:p-12 rounded-2xl relative shadow-2xl flex flex-col items-center">
            <span className="tape-strip" />
            <span className="tape-strip-right" />

            {/* Replay Button */}
            <button
              type="button"
              onClick={handleReplay}
              className="absolute top-4 right-6 text-[10px] font-mono tracking-widest text-[#a2440a] uppercase font-bold hover:text-[#16130f] transition-colors cursor-pointer"
            >
              ↺ REPLAY
            </button>

            <div key={replayKey} className="flex flex-col items-center gap-1 mt-2">
              
              {/* 1. "Creativity" (Hand-written, Orange, Slanted) */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono font-bold text-4xl sm:text-6xl md:text-7xl text-[#f5a524] -rotate-3 leading-none tracking-tight block -mb-3"
              >
                Creativity
              </motion.span>

              {/* 2. "technology" (Bold Ink, Underlined Scribble) */}
              <div className="relative inline-block my-2">
                <span className="font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#16130f] lowercase tracking-tight">
                  technology
                </span>
                
                {/* SVG Underline Scribble */}
                <svg className="absolute -left-4 -right-4 -bottom-3 w-[calc(100%+32px)] h-6 overflow-visible pointer-events-none" viewBox="0 0 360 40" preserveAspectRatio="none">
                  <motion.path
                    d="M -10 14 C 60 8, 150 12, 240 16 S 350 16, 372 12 C 350 24, 250 26, 160 24 S 30 26, -8 30 C 40 36, 150 34, 250 34 S 352 30, 366 36"
                    fill="none"
                    stroke="#f5a524"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </svg>
              </div>

              {/* 3. "for next generations" */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="font-mono text-sm sm:text-lg font-bold text-[#16130f]/75 tracking-wider uppercase mt-4"
              >
                for next generations
              </motion.span>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="pill-badge text-[#d97e06] border-[#d97e06]/30 bg-[#d97e06]/10">
            {t("services.title")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#16130f] uppercase tracking-tight">
            Capabilities & Execution<span className="text-[#d97e06]">.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* ========================================================
           ELLUSION WORKSHOP PAPER CARDS GRID (Brand, Workshop, Connect, Follow)
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Card 1: Brand */}
          <div className="relative">
            <i className="paper-shadow paper-clip" />
            <div className="paper-card paper-cream paper-clip p-7 rounded-xl flex flex-col justify-between h-[280px] relative shadow-xl">
              <span className="tape-strip" />
              <span className="text-[10px] font-mono text-[#a2440a] font-extrabold uppercase tracking-widest block mb-2">
                BRAND
              </span>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#f5a524]" />
                <h3 className="font-extrabold text-xl text-[#16130f] uppercase">
                  PK <em className="not-italic text-[#d97e06]">STUDIO</em>
                </h3>
              </div>
              <p className="text-xs text-[#16130f]/75 font-medium leading-relaxed mt-auto">
                We turn complex full-stack ideas into tangible working products.
              </p>
            </div>
          </div>

          {/* Card 2: Workshop Steps */}
          <div className="relative">
            <i className="paper-shadow paper-clip" />
            <div className="paper-card paper-kraft paper-clip p-7 rounded-xl flex flex-col justify-between h-[280px] relative shadow-xl">
              <span className="tape-strip" />
              <span className="text-[10px] font-mono text-[#a2440a] font-extrabold uppercase tracking-widest block mb-1">
                WORKSHOP
              </span>
              <p className="font-extrabold text-sm text-[#16130f]">Every job starts on paper.</p>
              
              <ul className="flex flex-col gap-1 my-2 font-mono text-xs font-bold text-[#16130f]">
                <li><span className="text-[#a2440a]">01</span> DRAW</li>
                <li><span className="text-[#a2440a]">02</span> MAKE</li>
                <li><span className="text-[#a2440a]">03</span> GROW</li>
              </ul>

              <div className="flex flex-col gap-1 mt-auto text-xs font-mono font-bold text-[#16130f]">
                <a href="#contact" className="hover:text-[#a2440a] transition-colors">
                  enter the workshop &rarr;
                </a>
                <a href="#about" className="hover:text-[#a2440a] transition-colors text-[11px] opacity-75">
                  go backstage &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Connect */}
          <div className="relative">
            <i className="paper-shadow paper-clip" />
            <div className="paper-card paper-cream paper-clip p-7 rounded-xl flex flex-col justify-between h-[280px] relative shadow-xl">
              <span className="tape-strip" />
              <span className="text-[10px] font-mono text-[#a2440a] font-extrabold uppercase tracking-widest block mb-2">
                CONNECT
              </span>
              <a href="mailto:prathmeshkadam@qloax.com" className="font-extrabold text-sm text-[#16130f] hover:text-[#d97e06] transition-colors break-all">
                prathmeshkadam@qloax.com
              </a>
              <span className="text-[11px] font-mono text-[#16130f]/60 font-bold block mt-2 uppercase">
                QLOAX STUDIO &bull; PUNE, INDIA
              </span>
              <span className="text-xs font-mono text-[#a2440a] font-black tracking-wider uppercase mt-auto block">
                &bull; OPEN FOR NEW PROJECTS
              </span>
            </div>
          </div>

          {/* Card 4: Follow */}
          <div className="relative">
            <i className="paper-shadow paper-clip" />
            <div className="paper-card paper-ink paper-clip p-7 rounded-xl flex flex-col justify-between h-[280px] relative shadow-xl">
              <span className="tape-strip" />
              <span className="text-[10px] font-mono text-[#f5a524] font-black uppercase tracking-widest block mb-2">
                FOLLOW
              </span>
              <div className="flex flex-col gap-3 font-mono text-xs font-bold text-white mt-2">
                <a href="https://github.com/pkdam2302" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5a524] transition-colors">
                  GitHub Profile &rarr;
                </a>
                <a href="https://linkedin.com/in/prathmesh-kadam" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5a524] transition-colors">
                  LinkedIn Network &rarr;
                </a>
              </div>
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest mt-auto block">
                &copy; 2026 PRATHMESH KADAM
              </span>
            </div>
          </div>

        </div>

        {/* ========================================================
           "CRUMPLE THE DAY" INTERACTIVE RITUAL BUTTON
           ======================================================== */}
        <div className="flex justify-center pt-8">
          <button
            type="button"
            onClick={handleCrumpleDay}
            className="crd-note-hover relative inline-flex items-center gap-3 px-6 py-3.5 bg-[#f1e6d0] text-[#16130f] font-mono font-bold text-sm rounded-lg shadow-xl hover:rotate-0 transition-transform duration-300 -rotate-2 cursor-pointer border border-[#16130f]/15"
          >
            {/* Paper Ball Icon */}
            <svg className="crd-ball w-6 h-6 shrink-0" viewBox="0 0 34 34" fill="none" stroke="#16130f" strokeWidth="1.8" strokeLinecap="round">
              <path d="M17 4 C 9 3, 4 9, 5 16 C 3 22, 9 30, 16 29 C 24 31, 30 24, 29 17 C 31 9, 24 3, 17 4 Z M 8 12 C 12 10, 20 9, 25 12 M 7 20 C 13 17, 22 18, 27 21 M 12 6 C 11 12, 12 22, 14 28 M 21 5 C 23 12, 23 21, 20 28" />
            </svg>
            
            <span className="font-mono text-base tracking-wide font-black">
              crumple the day
            </span>

            {/* Scribble Arrow */}
            <svg className="w-8 h-4 shrink-0" viewBox="0 0 46 22" fill="none" stroke="#a2440a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 18 C 14 16, 26 12, 40 6 M 33 4 L 41 5 L 38 12" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
