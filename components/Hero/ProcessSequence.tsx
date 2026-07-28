"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { FileCode, Layers, Smartphone, Rocket } from "lucide-react";

export default function ProcessSequence() {
  const { processSteps } = portfolioData;

  const stepIcons = [
    <FileCode key="1" className="text-[#a2440a] w-5 h-5" />,
    <Layers key="2" className="text-[#a2440a] w-5 h-5" />,
    <Smartphone key="3" className="text-[#a2440a] w-5 h-5" />,
    <Rocket key="4" className="text-[#a2440a] w-5 h-5" />,
  ];

  return (
    <section className="relative py-24 bg-transparent border-t border-[#16130f]/15 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="pill-badge text-[#d97e06] border-[#d97e06]/30 bg-[#d97e06]/10">
            FROM DRAFT TO PRODUCTION
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#16130f] uppercase tracking-tight">
            How An Idea Becomes Real<span className="text-[#d97e06]">.</span>
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((stepItem, idx) => {
            const paperClass = idx % 2 === 0 ? "paper-kraft" : "paper-cream";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <i className="paper-shadow paper-clip" />
                <div className={`paper-card ${paperClass} paper-clip p-7 rounded-xl flex flex-col justify-between h-[300px] relative shadow-xl`}>
                  <span className="tape-strip" />
                  
                  {/* Step Header */}
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono text-[#a2440a] font-black tracking-widest">
                      STEP 0{stepItem.step}
                    </span>
                    <div className="p-2.5 rounded-lg bg-black/5 border border-black/10">
                      {stepIcons[idx]}
                    </div>
                  </div>

                  {/* Step Description */}
                  <div className="flex flex-col gap-2 mt-auto">
                    <h3 className="text-[#16130f] font-extrabold text-lg uppercase tracking-tight">
                      {stepItem.title}
                    </h3>
                    <p className="text-[#16130f]/75 text-xs leading-relaxed font-medium">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
