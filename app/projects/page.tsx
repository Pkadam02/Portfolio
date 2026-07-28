import React from "react";
import Projects from "@/components/Projects/Projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Case Studies & Projects Portfolio",
  description: "Explore my interactive mock browser dashboards, open-source projects, SaaS products, and ERP systems.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full bg-[#16130f] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-white/50 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Back to Dashboard</span>
        </Link>
      </div>
      
      <Projects />
    </div>
  );
}
