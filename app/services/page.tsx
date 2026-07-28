import React from "react";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Professional Services Offered",
  description: "Check out my services in Full Stack Development, SaaS creation, REST APIs tuning, and mobile UX layouts.",
};

export default function ServicesPage() {
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
      
      <Services />
      <Skills />
    </div>
  );
}
