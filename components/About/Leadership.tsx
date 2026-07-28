"use client";

import React from "react";
import { motion } from "framer-motion";
import { useApp } from "../Background/AppContext";
import { portfolioData } from "@/data/portfolioData";
import { Users, FileCode, CheckSquare, Layers, Compass } from "lucide-react";

export default function Leadership() {
  const { t } = useApp();
  const { leadership } = portfolioData;

  const leadershipIcons = [
    <Users key="0" className="text-[#a2440a] w-5 h-5" />,
    <FileCode key="1" className="text-[#a2440a] w-5 h-5" />,
    <Layers key="2" className="text-[#a2440a] w-5 h-5" />,
    <CheckSquare key="3" className="text-[#a2440a] w-5 h-5" />,
  ];

  return (
    <section id="leadership" className="relative py-24 bg-transparent border-t border-[#16130f]/15 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="pill-badge text-[#d97e06] border-[#d97e06]/30 bg-[#d97e06]/10">
            {t("leadership.title")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#16130f] uppercase tracking-tight">
            Team Leadership & Agile Culture<span className="text-[#d97e06]">.</span>
          </h2>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <i className="paper-shadow paper-clip" />
              <div className="paper-card paper-cream paper-clip p-8 rounded-xl flex gap-6 items-start relative shadow-2xl">
                <span className="tape-strip" />

                <div className="p-3.5 rounded-lg bg-black/5 shrink-0">
                  {leadershipIcons[index] || <Compass className="text-[#a2440a] w-5 h-5" />}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[#16130f] font-extrabold text-lg tracking-tight uppercase">
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

        {/* Mandate Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 relative"
        >
          <i className="paper-shadow paper-clip" />
          <div className="paper-card paper-kraft paper-clip p-8 rounded-xl relative flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <span className="tape-strip" />
            <div className="flex flex-col gap-1 text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-[#a2440a] font-mono font-black">CURRENT MANDATE</span>
              <p className="text-[#16130f] font-bold text-sm tracking-tight">
                Leading the frontend refactor of QLOAX SaaS products, reducing overall deployment size and onboarding interns.
              </p>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 border border-black/10 bg-black/5 rounded-full text-xs font-mono text-[#16130f] font-bold whitespace-nowrap">
              <span>Methodology</span>
              <span className="w-2 h-2 rounded-full bg-green-600" />
              <span>AGILE / SCRUM</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
