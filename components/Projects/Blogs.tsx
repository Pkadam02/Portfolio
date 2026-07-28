"use client";

import React from "react";
import { motion } from "framer-motion";
import { useApp } from "../Background/AppContext";
import { portfolioData } from "@/data/portfolioData";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Magnetic from "../Navbar/Magnetic";

export default function Blogs() {
  const { t } = useApp();
  const { blogs } = portfolioData;

  return (
    <section id="blogs" className="relative py-24 bg-transparent border-t border-[#16130f]/15 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="pill-badge text-[#d97e06] border-[#d97e06]/30 bg-[#d97e06]/10">
            {t("blogs.title")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#16130f] uppercase tracking-tight">
            Engineering Insights & Articles<span className="text-[#d97e06]">.</span>
          </h2>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <i className="paper-shadow paper-clip" />
              <div className="paper-card paper-cream paper-clip p-6 rounded-xl flex flex-col justify-between h-[380px] relative shadow-2xl">
                <span className="tape-strip" />

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#a2440a] font-bold">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {blog.readTime}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {blog.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono bg-black/5 px-2 py-0.5 rounded text-[#16130f] font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-[#16130f] font-extrabold text-lg mt-3 group-hover:text-[#a2440a] transition-colors leading-tight uppercase">
                    {blog.title}
                  </h3>
                  <p className="text-[#16130f]/75 text-xs leading-relaxed mt-2 line-clamp-3 font-medium">
                    {blog.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#16130f]/15 pt-4 mt-auto">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#a2440a] font-extrabold">
                    Read Article &rarr;
                  </span>
                  
                  <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-[#16130f] group-hover:bg-[#d97e06] group-hover:text-white transition-all duration-300">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Inline Article CTA */}
        <div className="flex justify-center mt-16">
          <Magnetic range={25} strength={0.3}>
            <a
              href="#contact"
              className="text-xs font-mono uppercase tracking-[0.2em] px-6 py-3 border border-[#16130f]/20 hover:border-[#d97e06] hover:text-[#d97e06] transition-colors rounded-full text-[#16130f] font-bold bg-white/40"
            >
              Request Custom Technical Content
            </a>
          </Magnetic>
        </div>

      </div>
    </section>
  );
}
