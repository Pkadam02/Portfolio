"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "../Background/AppContext";
import { portfolioData, Experience } from "@/data/portfolioData";
import { ChevronDown, ChevronUp, MapPin, Calendar } from "lucide-react";

interface ExperienceCardProps {
  exp: Experience;
  index: number;
}

function ExperienceCard({ exp, index }: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative group"
    >
      <i className="paper-shadow paper-clip" />
      <div className="paper-card paper-kraft paper-clip p-0 rounded-xl relative overflow-hidden shadow-2xl">
        <span className="tape-strip" />

        {/* Header */}
        <div
          onClick={() => setExpanded(!expanded)}
          className="p-6 sm:p-8 flex justify-between items-center cursor-pointer select-none"
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#a2440a] text-[10px] font-mono tracking-wider uppercase font-extrabold">
              <span className="flex items-center gap-1">
                <Calendar size={11} />
                {exp.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={11} />
                {exp.location}
              </span>
            </div>

            <h3 className="text-[#16130f] font-extrabold text-xl sm:text-2xl tracking-tight uppercase mt-1">
              {exp.role}
            </h3>
            
            <div className="text-[#16130f]/80 font-bold text-xs tracking-wider uppercase flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#a2440a]" />
              {exp.company}
            </div>
          </div>

          <div className="p-2.5 rounded-full bg-black/10 text-[#16130f]">
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>

        {/* Expanded Bullet Points */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-[#16130f]/15 bg-black/5"
            >
              <div className="p-6 sm:p-8 flex flex-col gap-4">
                <span className="text-[10px] font-mono text-[#a2440a] uppercase tracking-widest block mb-1 font-bold">
                  Key Accomplishments & Deliverables
                </span>
                
                <ul className="flex flex-col gap-3">
                  {exp.highlights.map((bullet, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex gap-3 text-xs text-[#16130f]/85 font-medium leading-relaxed items-start"
                    >
                      <span className="text-[#a2440a] font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const { t } = useApp();
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="relative py-24 bg-transparent border-t border-[#16130f]/15 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="pill-badge text-[#d97e06] border-[#d97e06]/30 bg-[#d97e06]/10">
            {t("experience.title")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#16130f] uppercase tracking-tight">
            Work History & Milestones<span className="text-[#d97e06]">.</span>
          </h2>
        </div>

        {/* Experience Cards Stack */}
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
