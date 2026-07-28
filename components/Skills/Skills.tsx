"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "../Background/AppContext";
import { portfolioData } from "@/data/portfolioData";
import { Cpu, Database, Layout, Smartphone, Cloud, PenTool, ArrowUpRight } from "lucide-react";

export default function Skills() {
  const { t } = useApp();
  const { techStack, pillars } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<keyof typeof techStack>("Frontend");

  const categoryIcons = {
    Frontend: <Layout className="text-[#d97e06] w-4 h-4" />,
    Backend: <Cpu className="text-[#d97e06] w-4 h-4" />,
    Mobile: <Smartphone className="text-[#d97e06] w-4 h-4" />,
    Database: <Database className="text-[#d97e06] w-4 h-4" />,
    Cloud: <Cloud className="text-[#d97e06] w-4 h-4" />,
    Tools: <PenTool className="text-[#d97e06] w-4 h-4" />,
  };

  const categories = Object.keys(techStack) as Array<keyof typeof techStack>;

  const orbitNodes = [
    { name: "React", track: 1, angle: 0 },
    { name: "Next.js", track: 1, angle: 120 },
    { name: "TypeScript", track: 1, angle: 240 },
    { name: "Spring Boot", track: 2, angle: 45 },
    { name: "Java", track: 2, angle: 135 },
    { name: "Microservices", track: 2, angle: 225 },
    { name: "REST APIs", track: 2, angle: 315 },
    { name: "React Native", track: 3, angle: 15 },
    { name: "MySQL", track: 3, angle: 105 },
    { name: "Supabase", track: 3, angle: 195 },
    { name: "Git", track: 3, angle: 285 },
  ];

  return (
    <section id="services" className="relative py-24 bg-transparent border-t border-[#16130f]/15 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Ellusion 3 Core Pillars */}
        <div className="mb-24 flex flex-col gap-12">
          <div className="flex flex-col items-start gap-2">
            <span className="pill-badge text-[#d97e06] border-[#d97e06]/30 bg-[#d97e06]/10">
              THE THREE PILLARS OF CRAFT
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#16130f] uppercase tracking-tight">
              Designed In One Language<span className="text-[#d97e06]">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const paperStyle = idx === 1 ? "paper-kraft" : "paper-cream";
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  <i className="paper-shadow paper-clip" />
                  <div className={`paper-card ${paperStyle} paper-clip p-8 rounded-xl flex flex-col justify-between h-[290px] relative shadow-xl`}>
                    <span className="tape-strip" />

                    <span className="text-2xl font-mono text-[#a2440a] font-extrabold">
                      {pillar.number} /
                    </span>

                    <div className="flex flex-col gap-2 mt-auto">
                      <h3 className="text-[#16130f] font-extrabold text-xl uppercase tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-[#16130f]/75 text-xs leading-relaxed font-medium">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Orbit Visualization & Directory Section */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="pill-badge">TECH ECOSYSTEM</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#16130f] uppercase tracking-tight">
            Orbital Tech Directory<span className="text-[#d97e06]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Satellite Visual */}
          <div className="lg:col-span-6 flex justify-center items-center h-[350px] md:h-[450px] relative overflow-hidden select-none">
            <div className="absolute z-20 w-20 h-20 rounded-full bg-[#16130f] border-2 border-[#d97e06] flex flex-col justify-center items-center text-center shadow-xl">
              <span className="text-[10px] font-mono uppercase text-[#d97e06] tracking-wider leading-none font-bold">CORE</span>
              <span className="text-[#f4f1ea] font-extrabold text-sm leading-none font-mono">STACK</span>
            </div>

            <div className="absolute w-[180px] h-[180px] rounded-full border border-[#16130f]/20 animate-[spin_15s_linear_infinite]">
              {orbitNodes.filter(n => n.track === 1).map((node, i) => (
                <div
                  key={i}
                  className="absolute w-8 h-8 rounded-full bg-[#16130f] border border-white/20 flex items-center justify-center -ml-4 -mt-4 text-[9px] font-mono font-bold text-white shadow-md"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `rotate(${node.angle}deg) translate(90px) rotate(-${node.angle}deg)`,
                  }}
                >
                  {node.name.slice(0, 2)}
                </div>
              ))}
            </div>

            <div className="absolute w-[280px] h-[280px] rounded-full border border-[#16130f]/20 animate-[spin_25s_linear_infinite_reverse]">
              {orbitNodes.filter(n => n.track === 2).map((node, i) => (
                <div
                  key={i}
                  className="absolute w-8 h-8 rounded-full bg-[#16130f] border border-white/20 flex items-center justify-center -ml-4 -mt-4 text-[9px] font-mono font-bold text-white shadow-md"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `rotate(${node.angle}deg) translate(140px) rotate(-${node.angle}deg)`,
                  }}
                >
                  {node.name.slice(0, 2)}
                </div>
              ))}
            </div>

            <div className="absolute w-[380px] h-[380px] rounded-full border border-[#16130f]/20 animate-[spin_40s_linear_infinite]">
              {orbitNodes.filter(n => n.track === 3).map((node, i) => (
                <div
                  key={i}
                  className="absolute w-8 h-8 rounded-full bg-[#16130f] border border-white/20 flex items-center justify-center -ml-4 -mt-4 text-[9px] font-mono font-bold text-white shadow-md"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `rotate(${node.angle}deg) translate(190px) rotate(-${node.angle}deg)`,
                  }}
                >
                  {node.name.slice(0, 2)}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Tech Directory listing */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-wrap gap-2 border-b border-[#16130f]/15 pb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full border transition-all duration-300 font-bold ${
                    activeCategory === cat
                      ? "border-[#d97e06] bg-[#d97e06]/10 text-[#16130f]"
                      : "border-[#16130f]/15 bg-white/40 text-[#16130f]/60 hover:text-[#16130f]"
                  }`}
                >
                  {categoryIcons[cat]}
                  <span>{cat}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {techStack[activeCategory].map((tech, idx) => (
                    <div
                      key={idx}
                      className="glass-panel p-5 rounded-xl flex items-center justify-between group border border-[#16130f]/15 bg-white/60 hover:border-[#d97e06] transition-colors"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-[#16130f] font-bold text-sm tracking-tight group-hover:text-[#d97e06] transition-colors">
                          {tech.name}
                        </span>
                        <span className="text-[10px] font-mono text-[#16130f]/50 tracking-wider font-bold">
                          {activeCategory} LAYER
                        </span>
                      </div>
                      <ArrowUpRight size={14} className="text-[#16130f]/40 group-hover:text-[#d97e06] transition-colors" />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
