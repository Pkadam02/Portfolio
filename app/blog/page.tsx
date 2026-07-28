import React from "react";
import Blogs from "@/components/Projects/Blogs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Engineering Insights Blog",
  description: "Read technical write-ups on scaling Next.js, configuring Spring Security microservices, and mobile app UI optimization.",
};

export default function BlogPage() {
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
      
      <Blogs />
    </div>
  );
}
