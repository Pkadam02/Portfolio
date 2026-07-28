import React from "react";
import About from "@/components/About/About";
import Leadership from "@/components/About/Leadership";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "About Me & Leadership",
  description: "Learn more about my professional journey, education history, credentials, and mentoring approach.",
};

export default function AboutPage() {
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
      
      <About />
      <Leadership />
    </div>
  );
}
