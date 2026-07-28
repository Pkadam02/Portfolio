"use client";

import React from "react";

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Crumpled Paper Creases & Fold Highlights */}
      <div 
        className="absolute inset-0 opacity-80 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.015' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.9  0 0 0 0 0.88  0 0 0 0 0.84  0 0 0 0.15 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "600px 600px"
        }}
      />

      {/* Crease Diagonal Gradients (Simulating Fold Paper Lines) */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-black/10" />
      
      {/* ========================================================
         HAND-DRAWN DOODLES (Top Left: Sun & Stars)
         ======================================================== */}
      <svg className="absolute top-6 left-6 w-32 md:w-48 h-32 md:h-48 text-[#16130f]/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {/* Smiling Sun */}
        <circle cx="40" cy="40" r="18" />
        <path d="M 33 36 Q 35 34 37 36" />
        <path d="M 43 36 Q 45 34 47 36" />
        <path d="M 34 44 Q 40 50 46 44" />
        {/* Sun Rays */}
        <line x1="40" y1="14" x2="40" y2="8" />
        <line x1="40" y1="66" x2="40" y2="72" />
        <line x1="14" y1="40" x2="8" y2="40" />
        <line x1="66" y1="40" x2="72" y2="40" />
        <line x1="21" y1="21" x2="16" y2="16" />
        <line x1="59" y1="59" x2="64" y2="64" />
        <line x1="21" y1="59" x2="16" y2="64" />
        <line x1="59" y1="21" x2="64" y2="16" />
        {/* Star */}
        <path d="M 80 20 L 82 25 L 87 26 L 83 29 L 84 34 L 80 31 L 76 34 L 77 29 L 73 26 L 78 25 Z" />
      </svg>

      {/* ========================================================
         HAND-DRAWN DOODLES (Top Right: Paper Airplane & Dashed Flight Path)
         ======================================================== */}
      <svg className="absolute top-8 right-8 w-44 md:w-64 h-32 md:h-44 text-[#16130f]/20" viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Paper Plane */}
        <path d="M 110 20 L 150 10 L 130 50 L 115 35 L 110 20 Z" />
        <path d="M 150 10 L 115 35 L 125 38 Z" />
        <line x1="130" y1="50" x2="125" y2="38" />
        {/* Dashed Trajectory */}
        <path d="M 20 65 Q 60 75 80 50 T 110 25" strokeDasharray="4 4" stroke="#d97e06" strokeWidth="2.5" />
        {/* Loop Spiral */}
        <circle cx="85" cy="45" r="5" strokeDasharray="3 3" stroke="#d97e06" />
        {/* Star */}
        <path d="M 25 25 L 27 30 L 32 31 L 28 34 L 29 39 L 25 36 L 21 39 L 22 34 L 18 31 L 23 30 Z" />
      </svg>

      {/* ========================================================
         HAND-DRAWN DOODLES (Bottom Left: Launching Rocket & Stars)
         ======================================================== */}
      <svg className="absolute bottom-12 left-8 w-36 md:w-52 h-44 md:h-64 text-[#16130f]/20" viewBox="0 0 120 160" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {/* Rocket Body */}
        <path d="M 40 30 Q 60 10 80 30 L 80 90 Q 60 100 40 90 Z" />
        <circle cx="60" cy="55" r="10" />
        {/* Fins */}
        <path d="M 40 70 L 20 100 L 40 90" />
        <path d="M 80 70 L 100 100 L 80 90" />
        {/* Smoke Clouds */}
        <path d="M 45 100 Q 30 120 40 140 Q 55 150 60 130 Q 70 150 85 135 Q 90 115 75 100" />
        {/* Little Star */}
        <path d="M 15 40 L 17 45 L 22 46 L 18 49 L 19 54 L 15 51 L 11 54 L 12 49 L 8 46 L 13 45 Z" />
      </svg>

      {/* ========================================================
         HAND-DRAWN DOODLES (Bottom Right: Basketball Hoop & Ball)
         ======================================================== */}
      <svg className="absolute bottom-10 right-6 w-40 md:w-60 h-44 md:h-64 text-[#16130f]/20" viewBox="0 0 140 160" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {/* Backboard */}
        <rect x="70" y="30" width="60" height="45" rx="3" />
        <rect x="85" y="45" width="30" height="20" />
        {/* Rim & Net */}
        <line x1="60" y1="75" x2="85" y2="75" strokeWidth="3" />
        <path d="M 62 75 L 67 110 L 78 110 L 83 75" />
        <line x1="64" y1="87" x2="81" y2="87" />
        <line x1="66" y1="99" x2="79" y2="99" />
        {/* Pole */}
        <line x1="125" y1="75" x2="125" y2="150" strokeWidth="4" />
        <line x1="115" y1="150" x2="135" y2="150" strokeWidth="3" />
        {/* Basketball */}
        <circle cx="35" cy="95" r="14" />
        <path d="M 21 95 L 49 95" />
        <path d="M 35 81 L 35 109" />
        <path d="M 24 86 Q 35 95 24 104" />
        <path d="M 46 86 Q 35 95 46 104" />
        {/* Motion Lines */}
        <path d="M 12 90 Q 5 95 12 100" />
        <path d="M 8 85 Q 0 95 8 105" />
      </svg>

    </div>
  );
}
