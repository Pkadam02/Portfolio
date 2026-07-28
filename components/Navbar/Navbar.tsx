"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "../Background/AppContext";
import Magnetic from "./Magnetic";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const { language, toggleLanguage, t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "[film]", href: "#home" },
    { name: "[work]", href: "#projects" },
    { name: "[studio]", href: "#services" },
    { name: "[timeline]", href: "#experience" },
    { name: "[contact]", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center pt-6 px-6 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-6 px-6 py-3 rounded-full border transition-all duration-500 shadow-lg ${
            scrolled
              ? "bg-[#f4f1ea]/90 backdrop-blur-md border-[#16130f]/20 shadow-md"
              : "bg-[#f4f1ea]/70 backdrop-blur-sm border-[#16130f]/15"
          }`}
        >
          {/* Logo Mark */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d97e06] group-hover:scale-125 transition-transform" />
            <span className="font-mono text-xs font-black tracking-widest text-[#16130f] uppercase">
              PK&bull;STUDIO
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1 text-xs font-mono text-[#16130f]/70 hover:text-[#d97e06] font-bold transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Controls: Language Switcher & Talk Trigger */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-[11px] font-mono text-[#16130f]/80 hover:text-[#d97e06] font-extrabold uppercase px-2.5 py-1 rounded-full border border-[#16130f]/15 transition-colors cursor-pointer"
            >
              <Globe size={11} />
              <span>[{language.toUpperCase()}]</span>
            </button>

            <Magnetic range={20} strength={0.3}>
              <a
                href="#contact"
                className="text-xs uppercase font-mono tracking-wider px-4 py-2 rounded-full bg-[#16130f] text-[#f4f1ea] hover:bg-[#d97e06] transition-colors font-bold"
              >
                [Let's Talk &rarr;]
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#16130f] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#f4f1ea] px-8 pt-28 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-black text-[#16130f] uppercase tracking-tight hover:text-[#d97e06] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 border-t border-[#16130f]/15 pt-6">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-sm font-mono text-[#16130f] font-bold uppercase"
              >
                <Globe size={14} />
                <span>Switch Language to [{language === "en" ? "German" : "English"}]</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 rounded-full bg-[#16130f] text-white font-mono text-sm font-bold uppercase tracking-widest"
              >
                [Let's Talk &rarr;]
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
