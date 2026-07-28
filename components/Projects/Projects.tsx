"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useApp } from "../Background/AppContext";
import { portfolioData, Project } from "@/data/portfolioData";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Magnetic from "../Navbar/Magnetic";

function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const rX = -((y - height / 2) / (height / 2)) * 6;
    const rY = ((x - width / 2) / (width / 2)) * 6;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setHovering(false);
  };

  const paperClass = index % 2 === 0 ? "paper-cream" : "paper-kraft";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        scale: hovering ? 1.01 : 1,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative group"
    >
      <i className="paper-shadow paper-clip" />
      <div className={`paper-card ${paperClass} paper-clip p-6 sm:p-8 rounded-xl flex flex-col gap-6 relative shadow-2xl`}>
        <span className="tape-strip" />

        {/* Paper Cut Wireframe Mockup */}
        <div 
          style={{ transform: "translateZ(25px)" }}
          className="relative w-full aspect-video rounded-lg bg-[#16130f] overflow-hidden border border-[#16130f]/20 flex items-center justify-center"
        >
          <div className="absolute top-0 left-0 w-full h-7 bg-[#1b1712] flex items-center px-4 gap-1.5 border-b border-white/10 z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
            <div className="w-1/2 h-3.5 rounded bg-white/5 mx-auto text-[8px] flex items-center justify-center text-white/40 font-mono tracking-wider overflow-hidden text-ellipsis whitespace-nowrap">
              {project.live || "github.com/pkdam2302"}
            </div>
          </div>

          <div className="w-full h-full pt-7 px-6 flex flex-col justify-center gap-3 select-none opacity-40 group-hover:opacity-85 transition-opacity duration-500">
            <div className="h-4 w-1/3 rounded bg-gradient-to-r from-[#d97e06] to-transparent" />
            <div className="grid grid-cols-3 gap-3">
              <div className="h-10 rounded border border-white/10 bg-white/[0.02]" />
              <div className="h-10 rounded border border-white/10 bg-white/[0.02]" />
              <div className="h-10 rounded border border-white/10 bg-white/[0.02]" />
            </div>
            <div className="h-12 rounded border border-white/10 bg-white/[0.02]" />
          </div>

          <span className="absolute bottom-3 right-3 text-[9px] font-mono tracking-widest uppercase bg-[#d97e06]/15 text-[#a2440a] px-2.5 py-1 rounded-full border border-[#a2440a]/30 font-extrabold">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div 
          style={{ transform: "translateZ(10px)" }}
          className="flex flex-col gap-4 flex-grow"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-[#16130f] font-extrabold text-2xl uppercase tracking-tight group-hover:text-[#a2440a] transition-colors">
              {project.title} &rarr;
            </h3>
          </div>

          <p className="text-[#16130f]/80 text-xs leading-relaxed font-medium flex-grow">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-2 py-1">
            {project.metrics.map((metric, idx) => (
              <span 
                key={idx} 
                className="text-[9px] font-mono text-[#a2440a] bg-black/5 border border-[#a2440a]/30 px-2.5 py-0.5 rounded-full font-bold"
              >
                ✓ {metric}
              </span>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-mono text-[#16130f]/60 bg-black/5 px-2.5 py-1 rounded font-semibold"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links CTAs */}
          <div className="flex items-center justify-between border-t border-[#16130f]/15 pt-4 mt-auto">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-mono text-[#16130f]/60 hover:text-[#16130f] font-semibold transition-colors"
              >
                <GithubIcon size={13} />
                <span>View Source</span>
              </a>
            ) : (
              <span className="text-[10px] font-mono text-[#16130f]/40 italic font-semibold">Proprietary Qloax Code</span>
            )}

            {project.live && (
              <Magnetic range={15} strength={0.3}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] font-mono text-[#a2440a] hover:text-[#16130f] transition-colors uppercase tracking-wider font-extrabold"
                >
                  <span>[Visit Site &rarr;]</span>
                </a>
              </Magnetic>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useApp();
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-24 bg-transparent border-t border-[#16130f]/15 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="pill-badge text-[#d97e06] border-[#d97e06]/30 bg-[#d97e06]/10">
            CREATIVITY FOR NEXT GENERATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#16130f] uppercase tracking-tight">
            Selected Works & Products<span className="text-[#d97e06]">.</span>
          </h2>
        </div>

        {/* Projects Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
