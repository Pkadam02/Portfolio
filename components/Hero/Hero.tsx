"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useApp } from "../Background/AppContext";
import { portfolioData } from "@/data/portfolioData";
import Magnetic from "../Navbar/Magnetic";
import Counter from "./Counter";
import { FileText } from "lucide-react";

function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const roles = [
  "Full Stack Developer",
  "Team Lead @ QLOAX",
  "React Native Developer",
  "Spring Boot Engineer",
  "SaaS Builder"
];

export default function Hero() {
  const { t } = useApp();
  const { name, tagline, subtitle, statement, github, linkedin, resumeUrl } = portfolioData.personalInfo;
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeRole = roles[currentRoleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => activeRole.slice(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-transparent flex flex-col justify-between overflow-hidden pt-28 pb-12 z-10"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 z-10 flex-grow flex flex-col justify-center gap-8">
        
        {/* Serial Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="pill-badge border-[#d97e06]/40 text-[#a2440a] bg-[#d97e06]/10 font-mono font-bold">
            ELLUSION BRAND FILM &bull; 01 ARCHITECTURE
          </span>
          <span className="text-xs font-mono text-[#16130f]/60 uppercase tracking-widest font-bold hidden sm:inline-block">
            PUNE, INDIA
          </span>
        </motion.div>

        {/* Paper-Cut Cream Headline Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl"
        >
          <i className="paper-shadow paper-clip" />
          <div className="paper-card paper-cream paper-clip p-8 sm:p-12 rounded-xl relative shadow-2xl">
            <span className="tape-strip" />
            <span className="tape-strip-right" />

            <span className="font-mono text-xs text-[#a2440a] font-extrabold tracking-widest uppercase block mb-2">
              PRATHMESH KADAM &bull; 2026
            </span>

            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-[#16130f] uppercase leading-[0.92]">
              Code Begins <br />
              <span className="text-[#d97e06]">On Paper.</span>
            </h1>

            <p className="text-lg sm:text-2xl font-bold text-[#16130f]/85 tracking-tight mt-4 max-w-3xl">
              {subtitle}
            </p>

            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-[#16130f]/15">
              <div className="h-7 flex items-center font-mono text-xs sm:text-sm text-[#16130f]/75 font-bold">
                <span>Specializing as&nbsp;</span>
                <span className="text-[#16130f] font-black border-r-2 border-[#d97e06] pr-1">
                  {currentText}
                </span>
              </div>

              <p className="text-[#16130f]/75 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
                {statement}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap items-center gap-4 mt-2"
        >
          <Magnetic range={25} strength={0.25}>
            <a
              href="#projects"
              className="flex items-center gap-2 text-xs uppercase font-mono tracking-[0.2em] px-7 py-4 rounded-full bg-[#16130f] text-white font-extrabold shadow-xl hover:bg-[#d97e06] transition-all duration-300"
            >
              <span>[Explore Work &rarr;]</span>
            </a>
          </Magnetic>

          <Magnetic range={25} strength={0.25}>
            <a
              href={resumeUrl}
              download
              className="flex items-center gap-2 text-xs uppercase font-mono tracking-[0.2em] px-6 py-4 rounded-full border border-[#16130f]/20 text-[#16130f] font-bold hover:border-[#16130f] transition-colors duration-300 bg-white/40"
            >
              <FileText size={14} />
              <span>Resume PDF</span>
            </a>
          </Magnetic>

          <div className="flex items-center gap-4 border-l border-[#16130f]/15 pl-6 h-8">
            <Magnetic range={20} strength={0.3}>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16130f]/60 hover:text-[#16130f] transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
            </Magnetic>

            <Magnetic range={20} strength={0.3}>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16130f]/60 hover:text-[#d97e06] transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
            </Magnetic>
          </div>
        </motion.div>

      </div>

      {/* Footer Metrics Strip */}
      <div className="w-full border-t border-[#16130f]/15 pt-8 mt-12 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {portfolioData.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
              className="flex flex-col gap-0.5 border-l border-[#d97e06] pl-4"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-[#16130f] font-mono tracking-tight">
                <Counter value={stat.value} />
              </div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-[#16130f]/60 font-extrabold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
