"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useApp } from "../Background/AppContext";
import { portfolioData } from "@/data/portfolioData";
import { Award, Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";

export default function About() {
  const { t } = useApp();
  const { education, certifications } = portfolioData;
  const { name } = portfolioData.personalInfo;

  const timelineEvents = [
    {
      year: "2020",
      title: "Academic Genesis",
      description: "Enrolled in Bachelor of Engineering in Computer Engineering at RMD Sinhgad School of Engineering. Discovered a passion for scalable systems and full-stack software development.",
    },
    {
      year: "2024",
      title: "Engineering Graduate",
      description: "Graduated with a CGPA of 7.77 (First Class with Distinction). Earned industry certifications in Full Stack Java Development, Angular, and Node.js.",
    },
    {
      year: "2025 (Jun)",
      title: "ValueDX - Full Stack Intern",
      description: "Built scalable LMS platform, optimized backend SQL queries, resulting in 35% latency reduction, and applied clean architectural patterns.",
    },
    {
      year: "2025 (Oct)",
      title: "QLOAX - Team Lead",
      description: "Promoted to Team Lead & Full Stack Developer. Tasked with managing 6-8 interns, establishing frontend architecture, and delivering high-performance SaaS solutions.",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-transparent border-t border-[#16130f]/15 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="pill-badge text-[#d97e06] border-[#d97e06]/30 bg-[#d97e06]/10">
            {t("nav.about")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#16130f] uppercase tracking-tight">
            Architecting the Future<span className="text-[#d97e06]">.</span>
          </h2>
        </div>

        {/* Narrative & Profile Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Profile Photo Frame */}
          <motion.div
            className="lg:col-span-4 relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <i className="paper-shadow paper-clip" />
            <div className="paper-card paper-cream paper-clip p-4 rounded-xl relative shadow-2xl">
              <span className="tape-strip" />
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-[#16130f]/20">
                <Image
                  src="/images/profile.png"
                  alt={name}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  priority
                />
              </div>
              <span className="text-[10px] font-mono text-[#a2440a] font-bold block text-center mt-3 uppercase tracking-widest">
                PRATHMESH KADAM &bull; TEAM LEAD
              </span>
            </div>
          </motion.div>

          {/* Biography and Leadership Paper Note */}
          <motion.div
            className="lg:col-span-8 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#a2440a] uppercase font-bold">
              <Briefcase size={14} />
              <span>Current Status</span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#16130f] tracking-tight uppercase">
              Team Lead & Full Stack Developer @ QLOAX
            </h3>
            
            <p className="text-[#16130f]/80 leading-relaxed text-sm sm:text-base font-medium">
              I specialize in bridging the gap between design vision and highly scalable technology architectures. Currently, I lead a team of 6–8 engineers delivering modern corporate and SaaS platforms. I focus heavily on frontend architecture patterns, reusable component designs, state management correctness, and Spring Boot REST APIs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="relative">
                <i className="paper-shadow paper-clip" />
                <div className="paper-card paper-cream paper-clip p-6 rounded-xl relative shadow-xl">
                  <span className="tape-strip" />
                  <h4 className="text-[#16130f] font-extrabold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d97e06]" />
                    Mentoring & Leadership
                  </h4>
                  <p className="text-[#16130f]/75 text-xs leading-relaxed font-medium">
                    Delegating milestones, performing strict code reviews, and hosting design sprint reviews to groom future engineers.
                  </p>
                </div>
              </div>

              <div className="relative">
                <i className="paper-shadow paper-clip" />
                <div className="paper-card paper-kraft paper-clip p-6 rounded-xl relative shadow-xl">
                  <span className="tape-strip" />
                  <h4 className="text-[#16130f] font-extrabold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#a2440a]" />
                    Clean Code Philosophy
                  </h4>
                  <p className="text-[#16130f]/75 text-xs leading-relaxed font-medium">
                    Applying DRY principles, separation of concerns, strict type safety with TypeScript, and layered Spring Boot Security.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline, Education & Certifications Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Vertical Timeline */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <h3 className="text-lg uppercase tracking-[0.2em] text-[#16130f]/70 font-bold mb-2 flex items-center gap-2 font-mono">
              <Calendar size={16} className="text-[#d97e06]" />
              {t("about.journey")}
            </h3>

            <div className="relative border-l border-[#16130f]/20 pl-6 ml-3 flex flex-col gap-8">
              {timelineEvents.map((evt, idx) => (
                <motion.div
                  key={idx}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#f2eeeb] border-2 border-[#16130f]/40 group-hover:border-[#d97e06] transition-colors duration-300" />
                  
                  <span className="text-xs font-mono font-bold text-[#a2440a] tracking-wider mb-1 block">
                    {evt.year}
                  </span>
                  
                  <h4 className="text-[#16130f] font-bold text-base mb-1 tracking-tight uppercase">
                    {evt.title}
                  </h4>
                  
                  <p className="text-[#16130f]/70 text-xs leading-relaxed max-w-md font-medium">
                    {evt.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h3 className="text-lg uppercase tracking-[0.2em] text-[#16130f]/70 font-bold flex items-center gap-2 font-mono">
                <GraduationCap size={16} className="text-[#d97e06]" />
                {t("about.education")}
              </h3>

              <div className="flex flex-col gap-6">
                {education.map((edu, idx) => {
                  const paperClass = idx === 0 ? "paper-cream" : "paper-kraft";
                  return (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="relative"
                    >
                      <i className="paper-shadow paper-clip" />
                      <div className={`paper-card ${paperClass} paper-clip p-6 rounded-xl relative shadow-xl`}>
                        <span className="tape-strip" />
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h4 className="text-[#16130f] font-extrabold text-sm tracking-tight uppercase">
                            {edu.institution}
                          </h4>
                          <span className="text-[10px] font-mono bg-black/10 px-2 py-0.5 rounded text-[#16130f] font-bold whitespace-nowrap">
                            {edu.period}
                          </span>
                        </div>
                        
                        <p className="text-xs text-[#16130f]/80 font-medium mb-1">{edu.degree}</p>
                        <p className="text-[11px] font-mono text-[#a2440a] font-extrabold">{edu.grade}</p>
                        
                        <div className="flex items-center gap-1 text-[10px] text-[#16130f]/60 mt-2 font-mono">
                          <MapPin size={10} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg uppercase tracking-[0.2em] text-[#16130f]/70 font-bold flex items-center gap-2 font-mono">
                <Award size={16} className="text-[#d97e06]" />
                Certifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className="relative"
                  >
                    <i className="paper-shadow paper-clip" />
                    <div className="paper-card paper-ink paper-clip p-4 rounded-lg relative shadow-xl">
                      <span className="text-white font-bold text-xs tracking-tight mb-1 block">
                        {cert.name}
                      </span>
                      <span className="text-[10px] text-white/50 uppercase tracking-wider font-mono font-bold">
                        {cert.issuer}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
