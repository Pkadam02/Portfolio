"use client";

import React from "react";
import { motion } from "framer-motion";
import { useApp } from "../Background/AppContext";
import { portfolioData } from "@/data/portfolioData";
import Magnetic from "../Navbar/Magnetic";
import { Mail, Phone, ArrowUp } from "lucide-react";

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

export default function Footer() {
  const { t } = useApp();
  const { name, github, linkedin, email, phone, resumeUrl } = portfolioData.personalInfo;

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-transparent pt-12 overflow-hidden z-10 border-t border-[#16130f]/15">
      <div className="pt-8 pb-12">
        {/* Ellusion Signature Marquee Headline */}
        <div className="marquee-container border-b border-[#16130f]/15 pb-12 mb-12 select-none">
          <div className="marquee-content font-black text-4xl sm:text-6xl md:text-8xl tracking-tighter uppercase text-[#16130f]/20 whitespace-nowrap">
            <span>DREAMS ARE DRAWN FIRST — WE WERE ALL THAT KID ONCE &bull;</span>
            <span>DREAMS ARE DRAWN FIRST — WE WERE ALL THAT KID ONCE &bull;</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Left Side: Brand Mark & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest text-[#16130f]">
              <span className="w-2 h-2 rounded-full bg-[#d97e06]" />
              <span className="text-[#16130f] font-black uppercase tracking-wider">
                PRATHMESH KADAM
              </span>
            </div>
            <p className="text-xs font-mono text-[#16130f]/60 tracking-wider font-bold">
              &copy; {currentYear} {name}. {t("footer.rights")}
            </p>
          </div>

          {/* Center: Social handles */}
          <div className="flex items-center gap-4">
            <Magnetic range={25} strength={0.35}>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#16130f]/20 hover:border-[#d97e06] text-[#16130f]/70 hover:text-[#d97e06] bg-white/40 transition-colors duration-300"
                title="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>
            </Magnetic>
            <Magnetic range={25} strength={0.35}>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#16130f]/20 hover:border-[#d97e06] text-[#16130f]/70 hover:text-[#d97e06] bg-white/40 transition-colors duration-300"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
              </a>
            </Magnetic>
            <Magnetic range={25} strength={0.35}>
              <a
                href={`mailto:${email}`}
                className="p-3 rounded-full border border-[#16130f]/20 hover:border-[#d97e06] text-[#16130f]/70 hover:text-[#d97e06] bg-white/40 transition-colors duration-300"
                title="Send Email"
              >
                <Mail size={16} />
              </a>
            </Magnetic>
            <Magnetic range={25} strength={0.35}>
              <a
                href={`tel:${phone}`}
                className="p-3 rounded-full border border-[#16130f]/20 hover:border-[#d97e06] text-[#16130f]/70 hover:text-[#d97e06] bg-white/40 transition-colors duration-300"
                title="Call Me"
              >
                <Phone size={16} />
              </a>
            </Magnetic>
          </div>

          {/* Right Side: Back to top and Resume */}
          <div className="flex items-center gap-4">
            <Magnetic range={25} strength={0.25}>
              <a
                href={resumeUrl}
                download
                className="text-xs font-mono uppercase tracking-[0.15em] px-5 py-2.5 border border-[#16130f]/20 hover:border-[#d97e06] bg-white/40 text-[#16130f] font-bold transition-all duration-300 rounded-full"
              >
                [CV &rarr;]
              </a>
            </Magnetic>
            
            <Magnetic range={25} strength={0.35}>
              <button
                onClick={handleBackToTop}
                className="p-3 rounded-full border border-[#16130f]/20 text-[#16130f] bg-white/60 hover:bg-[#d97e06] hover:text-white transition-all duration-300 cursor-pointer shadow-md"
                title="Back to Top"
              >
                <ArrowUp size={15} />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  );
}
