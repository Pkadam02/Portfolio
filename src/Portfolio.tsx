import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Terminal,
  Cpu,
  GraduationCap,
  Award,
  ChevronRight,
  MapPin,
  Phone,
  ArrowUpRight,
  Sparkles,
  Bot,
  Send,
  Loader2
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "School ERP System",
    description: "Developed a complete ERP platform using Next.js with performance optimization and modern UI.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "ERP"],
  },
  {
    title: "Qloax",
    description: "Building an animation-rich, high-performance web experience using GSAP and Tailwind CSS.",
    tags: ["GSAP", "Tailwind CSS", "Animation", "Frontend"],
  },
  {
    title: "VR Business Solutions Website",
    description: "Built and deployed a corporate website from concept to production.",
    tags: ["Next.js", "TypeScript", "Corporate", "Deployment"],
  }
];

const EXPERIENCES: Experience[] = [
  {
    company: "VR Business Solutions Pvt. Ltd.",
    role: "Web Developer Intern",
    period: "2024 - Present",
    description: "Developed high-performance web applications using Next.js and TypeScript. Built and deployed the complete vr-bs.com website and currently leading frontend development for Qloax with GSAP-based animations and scalable UI components."
  },
  {
    company: "ValueDX",
    role: "Web Developer Intern",
    period: "2023 - 2024",
    description: "Developed a Learning Management System using Spring Boot, Thymeleaf, MySQL, and Spring Security. Optimized backend APIs and database performance."
  }
];

const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "GSAP"]
  },
  {
    title: "Backend",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["Java", "Spring Boot", "Spring Security", "Node.js", "Express.js", "REST APIs"]
  },
  {
    title: "AI & Intelligence",
    icon: <Sparkles className="w-5 h-5" />,
    skills: ["Gemini API", "OpenAI Integration", "Prompt Engineering", "RAG Systems", "AI Agents"]
  },
  {
    title: "Database",
    icon: <Database className="w-5 h-5" />,
    skills: ["MySQL", "MongoDB", "Spring Data JPA"]
  },
  {
    title: "Tools & Others",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["Git", "GitHub", "MVC Architecture", "Responsive Design"]
  }
];

const CERTIFICATIONS = [
  "Full Stack Java Developer – Advanto Software",
  "Data Analytics Job Simulation – Deloitte",
  "Angular – Udemy"
];

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// --- Components ---

const MagneticButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [-20, 0]);

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-8 px-8 py-4 bg-white/70 backdrop-blur-2xl border border-black/5 rounded-full shadow-2xl shadow-black/5"
    >
      <a href="#work" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">Work</a>
      <a href="#skills" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">Skills</a>
      <a href="#about" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">About</a>
      <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">Contact</a>
    </motion.nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col justify-center section-padding overflow-hidden">
      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-7xl mx-auto w-full z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] uppercase bg-black text-white rounded-full">
            Available for Hire
          </span>
          <h1 className="text-[12vw] md:text-[10vw] font-black tracking-tighter leading-[0.85] mb-12">
            PRATHMESH<br />
            <span className="text-zinc-200 inline-block hover:text-black transition-colors duration-700 cursor-default">KADAM</span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-3xl text-zinc-500 max-w-xl font-light leading-tight"
          >
            Crafting <span className="text-black font-medium italic">high-performance</span> digital experiences through full-stack engineering and intentional design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex gap-4"
          >
            <MagneticButton>
              <a href="https://github.com/pkdam2302" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all duration-500 font-bold text-sm uppercase tracking-widest">
                <Github className="w-4 h-4" /> Github
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://linkedin.com/in/prathmesh-k" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition-all duration-500 font-bold text-sm uppercase tracking-widest">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-zinc-200" />
      </div>
    </section>
  );
};

const ExperienceSection = () => (
  <section id="work" className="section-padding bg-white relative">
    <div className="max-w-7xl mx-auto">
      <motion.div
        {...fadeInUp}
        className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-black/5 pb-12"
      >
        <h2 className="text-7xl font-black tracking-tighter">JOURNEY</h2>
        <p className="text-zinc-400 font-mono text-xs uppercase tracking-[0.2em] mt-4 md:mt-0">Professional Milestones</p>
      </motion.div>

      <div className="space-y-32">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-[1fr_2fr] gap-16 group"
          >
            <div className="relative">
              <div className="sticky top-32">
                <span className="text-xs font-black tracking-[0.3em] text-zinc-300 mb-4 block uppercase">{exp.period}</span>
                <h3 className="text-4xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-500">{exp.company}</h3>
                <p className="text-zinc-500 text-xl font-light italic">{exp.role}</p>
              </div>
            </div>
            <div className="relative pt-2">
              <p className="text-2xl text-zinc-600 leading-[1.4] font-light">
                {exp.description}
              </p>
              <div className="mt-12 h-px w-full bg-black/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-zinc-50">
    <div className="max-w-7xl mx-auto">
      <motion.div
        {...fadeInUp}
        className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-black/5 pb-12"
      >
        <h2 className="text-7xl font-black tracking-tighter">ARSENAL</h2>
        <p className="text-zinc-400 font-mono text-xs uppercase tracking-[0.2em] mt-4 md:mt-0">Technical Capabilities</p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {SKILLS.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={{
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 }
            }}
            className="p-10 bg-white border border-black/5 rounded-[2.5rem] hover:shadow-2xl hover:shadow-black/5 transition-all duration-700 group"
          >
            <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-black group-hover:text-white transition-all duration-500">
              {cat.icon}
            </div>
            <h3 className="text-lg font-black mb-8 uppercase tracking-widest">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="px-3 py-1.5 bg-zinc-50 text-zinc-500 text-[10px] font-bold uppercase tracking-widest rounded-lg group-hover:bg-zinc-100 group-hover:text-black transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const AIAssistant = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hi! I'm Prathmesh's AI assistant. Ask me anything about his skills, experience, or projects!" }
  ]);
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [{
              text: `You are an AI assistant for Prathmesh Kadam's portfolio. 
              Prathmesh is a Full Stack Developer from Pune. 
              Skills: ${SKILLS.flatMap(s => s.skills).join(", ")}.
              Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company}`).join(", ")}.
              Projects: ${PROJECTS.map(p => p.title).join(", ")}.
              Education: BE in Computer Engineering from RMD Sinhgad (2024).
              
              Answer the following user question professionally and concisely as if you are his representative.
              Question: ${userMsg}`
            }]
          }
        ]
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. Feel free to reach out to Prathmesh directly!";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Oops! Something went wrong. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-white rounded-[2rem] shadow-2xl border border-black/5 flex flex-col overflow-hidden"
          >
            <div className="p-6 bg-black text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="w-5 h-5" />
                <span className="font-bold text-sm tracking-widest uppercase">AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                <ChevronRight className="w-5 h-5 rotate-90" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-zinc-100 text-zinc-800 rounded-tl-none'
                    }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-100 p-4 rounded-2xl rounded-tl-none">
                    <Loader2 className="w-4 h-4 animate-spin text-zinc-400" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-black/5 bg-zinc-50">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Prathmesh..."
                  className="w-full pl-4 pr-12 py-3 bg-white border border-black/5 rounded-xl text-sm focus:outline-none focus:border-black transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black text-white rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MagneticButton>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-black text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
        >
          <Sparkles className={`w-6 h-6 group-hover:rotate-12 transition-transform ${isOpen ? 'hidden' : 'block'}`} />
          <span className={`${isOpen ? 'block' : 'hidden'} font-bold text-xl`}>×</span>
        </button>
      </MagneticButton>
    </div>
  );
};

const ProjectsSection = () => (
  <section className="section-padding bg-black text-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <motion.div
        {...fadeInUp}
        className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-white/10 pb-12"
      >
        <h2 className="text-7xl font-black tracking-tighter">WORKS</h2>
        <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em] mt-4 md:mt-0">Selected Projects</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative grid md:grid-cols-2 gap-12 p-12 border border-white/10 rounded-[3rem] bg-zinc-900/30 hover:bg-zinc-900 transition-all duration-700 items-center"
          >
            <div>
              <div className="flex gap-3 mb-8">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] border border-white/10 rounded-full text-zinc-500">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-5xl font-bold mb-6 tracking-tight group-hover:text-blue-400 transition-colors duration-500">{project.title}</h3>
              <p className="text-xl text-zinc-400 font-light leading-relaxed mb-10">{project.description}</p>
              <MagneticButton className="inline-block">
                <a href="#" className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </a>
              </MagneticButton>
            </div>
            <div className="relative aspect-square md:aspect-video bg-zinc-800 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-black text-4xl uppercase tracking-tighter opacity-20 group-hover:scale-110 transition-transform duration-1000">
                {project.title}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const EducationAndCerts = () => (
  <section id="about" className="section-padding bg-white">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32">
      <motion.div {...fadeInUp}>
        <div className="flex items-center gap-6 mb-16">
          <div className="w-16 h-16 bg-zinc-50 rounded-3xl flex items-center justify-center">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h2 className="text-5xl font-black tracking-tighter">ACADEMIA</h2>
        </div>
        <div className="p-12 border border-black/5 rounded-[3rem] bg-zinc-50 group hover:bg-black hover:text-white transition-all duration-700">
          <h3 className="text-2xl font-bold mb-4">Bachelor of Engineering</h3>
          <p className="text-zinc-500 group-hover:text-zinc-400 text-lg mb-8 font-light italic">Computer Engineering</p>
          <p className="text-zinc-600 group-hover:text-zinc-300 mb-8 leading-relaxed">
            RMD Sinhgad School of Engineering, Pune. Focused on software architecture, algorithms, and full-stack systems.
          </p>
          <div className="flex justify-between items-center pt-8 border-t border-black/5 group-hover:border-white/10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Class of 2024</span>
            <span className="px-5 py-2 bg-black text-white group-hover:bg-white group-hover:text-black text-[10px] font-black rounded-full transition-colors">CGPA: 7.77/10</span>
          </div>
        </div>
      </motion.div>

      <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
        <div className="flex items-center gap-6 mb-16">
          <div className="w-16 h-16 bg-zinc-50 rounded-3xl flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-5xl font-black tracking-tighter">HONORS</h2>
        </div>
        <div className="space-y-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 10 }}
              className="flex items-center justify-between p-8 border border-black/5 rounded-[2rem] hover:bg-zinc-50 transition-all group"
            >
              <span className="font-bold text-lg tracking-tight">{cert}</span>
              <ChevronRight className="w-5 h-5 text-zinc-300 group-hover:text-black transition-colors" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="section-padding bg-zinc-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-[15vw] md:text-[12vw] font-black tracking-tighter leading-none mb-16">
          HELLO<span className="text-zinc-200">.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-32">
        {[
          { icon: <Mail className="w-6 h-6" />, label: "Email", value: "kprathmesh2302@gmail.com", link: "mailto:kprathmesh2302@gmail.com", color: "text-blue-500" },
          { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Pune, Maharashtra", color: "text-red-500" },
          { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+91 7218937256", link: "tel:+917218937256", color: "text-green-500" }
        ].map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            whileHover={{ y: -10 }}
            className="p-12 bg-white rounded-[3rem] border border-black/5 flex flex-col items-center group"
          >
            <div className={`mb-8 p-4 bg-zinc-50 rounded-2xl group-hover:scale-110 transition-transform duration-500 ${item.color}`}>
              {item.icon}
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-2">{item.label}</p>
            <p className="font-bold text-lg tracking-tight">{item.value}</p>
          </motion.a>
        ))}
      </div>

      <footer className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">© 2024 PRATHMESH KADAM</p>
        <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
          <a href="https://github.com/pkdam2302" className="hover:text-black transition-colors">Github</a>
          <a href="https://linkedin.com/in/prathmesh-k" className="hover:text-black transition-colors">Linkedin</a>
        </div>
      </footer>
    </div>

    {/* Background Text */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[30vw] font-black text-black/[0.02] whitespace-nowrap pointer-events-none uppercase tracking-tighter">
      PRATHMESH KADAM
    </div>
  </section>
);

export default function Portfolio() {
  return (
    <div className="bg-white selection:bg-black selection:text-white">
      <div className="grain-overlay" />
      <Navbar />
      <Hero />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationAndCerts />
      <ContactSection />
      <AIAssistant />
    </div>
  );
}
