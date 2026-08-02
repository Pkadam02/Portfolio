import React from "react";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import ProcessSequence from "@/components/Hero/ProcessSequence";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Methodology from "@/components/Services/Methodology";
import Services from "@/components/Services/Services";
import Experience from "@/components/Experience/Experience";
import Leadership from "@/components/About/Leadership";
import Testimonials from "@/components/Testimonials/Testimonials";
import Blogs from "@/components/Projects/Blogs";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div className="w-full flex flex-col relative z-10 overflow-hidden bg-transparent">
      {/* 1. Ellusion Hero Headline Block */}
      <Hero />

      {/* 2. Selected Works & Case Study Mockupss */}
      <Projects />

      {/* 3. From Draft To Production Step Sequence */}
      <ProcessSequence />

      {/* 4. Biography & Academic Credentials */}
      <About />

      {/* 5. Three Pillars & Orbit Tech Directory */}
      <Skills />

      {/* 6. Process Methodology (01 DRAFT, 02 CODE, 03 SCALE) */}
      <Methodology />

      {/* 7. Capabilities & Workshop Services */}
      <Services />

      {/* 8. Work History & Career Milestones */}
      <Experience />

      {/* 9. Leadership & Mentorship Metrics */}
      <Leadership />

      {/* 10. Peer Endorsements Slider */}
      <Testimonials />

      {/* 11. Engineering Insights & Write-ups */}
      <Blogs />

      {/* 12. Electronic Dispatch Contact & Calendly Sync */}
      <Contact />
    </div>
  );
}
