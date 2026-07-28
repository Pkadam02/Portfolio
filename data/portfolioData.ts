export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  metrics: string[];
  github?: string;
  live?: string;
  image: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  grade: string;
  location: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  number: string;
}

export interface Blog {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  slug: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Prathmesh Kadam",
    tagline: "Code begins on paper.",
    subtitle: "We architect, build and scale digital products.",
    statement: "Full Stack Developer & Team Lead told through clean architecture, Spring Boot REST APIs, and React Native mobile products — designed, engineered and scaled by hand.",
    phone: "+91 7218937256",
    email: "kprathmesh2302@gmail.com",
    location: "Pune, Maharashtra, India",
    github: "https://github.com/pkdam2302",
    linkedin: "https://linkedin.com/in/prathmesh-kadam",
    resumeUrl: "/docs/resume.pdf",
    calendlyUrl: "https://calendly.com/kprathmesh2302/30min",
  },
  stats: [
    { value: "1.9+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "100%", label: "On-Time Delivery" },
    { value: "95+", label: "Lighthouse Score" },
  ],
  pillars: [
    {
      number: "01",
      title: "Every piece of your system",
      description: "Database schemas, Spring Boot REST APIs, JWT authentication — designed in one clean architecture, in one technical language.",
    },
    {
      number: "02",
      title: "From draft to working product",
      description: "Next.js web platforms & React Native mobile apps — fast, scalable, entirely yours.",
    },
    {
      number: "03",
      title: "Your stack speaks every day",
      description: "We guide what it builds and how it scales — code reviews, intern mentoring, CI/CD growth.",
    },
  ],
  processSteps: [
    {
      step: "1",
      title: "The Architecture Blueprint",
      description: "System models, microservices, and database ERDs emerge on paper before a single line of code is written.",
    },
    {
      step: "2",
      title: "Core Stack Construction",
      description: "Spring Boot microservices & Next.js App Router frontends unfold with strict type safety.",
    },
    {
      step: "3",
      title: "Mobile & UI Interface",
      description: "React Native mobile components & smooth GSAP web animations come alive.",
    },
    {
      step: "4",
      title: "Production & Scale",
      description: "Deployed to AWS/Vercel with 95+ Lighthouse performance scores, role-based access, and automated CI/CD.",
    },
  ],
  methodology: [
    {
      number: "01",
      title: "DRAFT",
      subtitle: "Architecture & Design",
      description: "System design, JPA database models, and API blueprints engineered first on paper to eliminate latency bottlenecks.",
    },
    {
      number: "02",
      title: "CODE",
      subtitle: "Engineering & Craft",
      description: "Clean TypeScript frontends, microservices, and cross-platform mobile apps built using strict DRY & SOLID principles.",
    },
    {
      number: "03",
      title: "SCALE",
      subtitle: "Deployment & Mentorship",
      description: "Optimizing queries by 35%, leading 6–8 intern developers, automated CI/CD releases, and achieving 95+ Lighthouse scores.",
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "RMD Sinhgad School of Engineering",
      degree: "Bachelor of Engineering in Computer Engineering",
      period: "2020 - 2024",
      grade: "CGPA: 7.77 (First Class with Distinction)",
      location: "Pune, India",
    },
    {
      id: "edu-2",
      institution: "Modern College of Arts, Science and Commerce",
      degree: "12th PCM",
      period: "2018 - 2020",
      grade: "61.38% (First Class)",
      location: "Pune, India",
    },
  ] as Education[],
  certifications: [
    { name: "Full Stack Java Developer", issuer: "Advanto Software" },
    { name: "Software Engineering Job Simulation", issuer: "Skyscanner & JPMorgan Chase" },
    { name: "Data Analytics Job Simulation", issuer: "Deloitte Australia" },
    { name: "Frontend Developer (React) Certificate", issuer: "HackerRank" },
    { name: "Angular and NodeJS – The MEAN Stack Certificate", issuer: "Udemy" },
  ] as Certification[],
  experiences: [
    {
      id: "exp-1",
      company: "QLOAX",
      role: "Team Lead & Full Stack Developer",
      period: "Oct 2025 - Present",
      location: "Pune, India",
      highlights: [
        "Leading a team of 6–8 interns handling mentoring, task delegation, project delivery, and code reviews.",
        "Managing frontend architecture and full-stack development using Next.js, Spring Boot, and scalable development practices.",
        "Developed and deployed SaaS and corporate platforms achieving 95+ Lighthouse scores across SEO, accessibility, and performance.",
        "Built reusable UI component libraries reducing frontend development effort by 40%.",
        "Integrated RESTful APIs, JWT Authentication, scalable backend systems, and CI/CD deployment pipelines.",
        "Improved application performance and loading speed using optimized rendering and frontend state management.",
        "Developed responsive mobile application features and optimized APK performance for smooth navigation.",
        "Implemented GSAP-based animations and interactive UI improving user engagement and UX quality."
      ]
    },
    {
      id: "exp-2",
      company: "ValueDX",
      role: "Full Stack Developer Intern",
      period: "Jun 2025 - Sep 2025",
      location: "Pune, India",
      highlights: [
        "Built scalable LMS platform using Spring Boot, React.js, MySQL, and JWT-based authentication.",
        "Optimized MySQL queries reducing backend response latency by 35%.",
        "Designed modular JPA models and RESTful APIs for instructors, assessments, and admin workflows.",
        "Applied clean architecture principles improving maintainability and scalability.",
        "Worked in Agile environments using Git-based version control and collaborative workflows.",
        "Implemented secure role-based access control and optimized authentication workflows using Spring Security and JWT.",
        "Collaborated with frontend and backend teams to integrate scalable APIs and improve overall system performance.",
        "Participated in debugging, testing, and deployment processes ensuring stable and production-ready application releases."
      ]
    }
  ] as Experience[],
  techStack: {
    Frontend: [
      { name: "React.js", icon: "React" },
      { name: "Next.js", icon: "Nextjs" },
      { name: "TypeScript", icon: "TypeScript" },
      { name: "Tailwind CSS", icon: "Tailwind" },
      { name: "HTML5/CSS3", icon: "Html" },
      { name: "Angular (Basics)", icon: "Angular" },
    ],
    Backend: [
      { name: "Spring Boot", icon: "SpringBoot" },
      { name: "Spring Security", icon: "SpringSecurity" },
      { name: "Java", icon: "Java" },
      { name: "REST APIs", icon: "RestApi" },
      { name: "Microservices", icon: "Microservices" },
      { name: "JWT", icon: "Jwt" },
    ],
    Mobile: [
      { name: "React Native", icon: "ReactNative" },
      { name: "Expo", icon: "Expo" },
      { name: "Android APK Build", icon: "Android" },
      { name: "Mobile UI Optimization", icon: "MobileUI" },
    ],
    Database: [
      { name: "MySQL", icon: "MySql" },
      { name: "PostgreSQL", icon: "PostgreSql" },
      { name: "MongoDB", icon: "MongoDb" },
      { name: "Supabase", icon: "Supabase" },
    ],
    Cloud: [
      { name: "Vercel", icon: "Vercel" },
      { name: "Render", icon: "Render" },
      { name: "CI/CD Pipelines", icon: "Cicd" },
    ],
    Tools: [
      { name: "Git & GitHub", icon: "Git" },
      { name: "Postman", icon: "Postman" },
      { name: "Jira", icon: "Jira" },
      { name: "VS Code", icon: "VsCode" },
      { name: "IntelliJ IDEA", icon: "Intellij" },
    ],
  },
  services: [
    {
      id: "srv-1",
      number: "01",
      title: "Full Stack Development",
      description: "End-to-end robust applications built using Next.js and Spring Boot. Seamless integration between dynamic frontends and robust microservices.",
      iconName: "Cpu",
    },
    {
      id: "srv-2",
      number: "02",
      title: "Web Applications",
      description: "Premium, SEO-optimized, highly responsive web platforms with modern animations and seamless user experiences.",
      iconName: "Globe",
    },
    {
      id: "srv-3",
      number: "03",
      title: "Mobile Applications",
      description: "Cross-platform mobile apps built with React Native and Expo, featuring smooth performance and offline-first capabilities.",
      iconName: "Smartphone",
    },
    {
      id: "srv-4",
      number: "04",
      title: "UI & UX Engineering",
      description: "Interactive pixel-perfect interfaces designed for user engagement using advanced animations (GSAP, Framer Motion, 3D Fiber).",
      iconName: "Palette",
    },
    {
      id: "srv-5",
      number: "05",
      title: "API & Microservices",
      description: "Scalable RESTful microservices, secure role-based JWT authentication, and optimized database schema designs.",
      iconName: "Server",
    },
    {
      id: "srv-6",
      number: "06",
      title: "SaaS Product Craft",
      description: "Production-ready Software-as-a-Service applications with subscription management, secure storage, and multi-tenant architectures.",
      iconName: "Database",
    },
    {
      id: "srv-7",
      number: "07",
      title: "Performance Optimization",
      description: "Speed audits, bundle splitting, query optimization (MySQL 35% latency reduction), and achieving 95+ Lighthouse scores.",
      iconName: "Zap",
    },
    {
      id: "srv-8",
      number: "08",
      title: "Cloud & CI/CD Pipelines",
      description: "Deploying code securely to AWS, Vercel, or Render, configured with automated test suites and continuous deployment pipelines.",
      iconName: "Cloud",
    },
  ] as Service[],
  projects: [
    {
      id: "proj-1",
      title: "Enterprise School ERP Platform",
      category: "WEB · ERP PLATFORM",
      description: "A full-scale comprehensive ERP platform covering admissions, attendance, fee collection, timetables, and student information management. Built for scale with MERN, Supabase authentication, and secure document storage.",
      tech: ["Next.js", "Express.js", "Node.js", "MongoDB", "Supabase", "Tailwind CSS"],
      metrics: ["Role-Based Access Control", "95+ Lighthouse Score", "Optimized Query Perf"],
      github: "https://github.com/yashqloax-ux/ERP",
      live: "https://school-erp-fe.onrender.com/login",
      image: "/images/project-erp.jpg",
    },
    {
      id: "proj-2",
      title: "QLOAX SaaS Platform",
      category: "WEB · SAAS PRODUCT",
      description: "A corporate SaaS platform developed with Next.js, featuring reusable UI component libraries, premium GSAP animations, interactive dashboards, and optimized state management for a seamless across-device experience.",
      tech: ["Next.js", "TypeScript", "GSAP", "Framer Motion", "Tailwind CSS"],
      metrics: ["40% UI Dev Reduction", "Fluid GSAP Timelines", "Multi-tenant Dashboard"],
      live: "https://www.qloax.com/",
      image: "/images/project-qloax.jpg",
    },
    {
      id: "proj-3",
      title: "VRBS Corporate Website",
      category: "WEB · CORPORATE SITE",
      description: "An SEO-optimized corporate platform featuring immersive responsive design, optimized server-side rendering, and high performance, scoring 95+ across all Lighthouse categories.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      metrics: ["95+ Lighthouse Score", "100% SEO Optimized", "Sub-second Page Load"],
      live: "https://vr-bs.com/",
      image: "/images/project-vrbs.jpg",
    },
    {
      id: "proj-4",
      title: "Full Stack Yoga Booking Platform",
      category: "FULL STACK · BOOKING",
      description: "A comprehensive booking and client management platform, including inquiry management, testimonial moderation, and dynamic scheduler. Powered by a Spring Boot backend API and a React frontend.",
      tech: ["React.js", "Spring Boot", "MySQL", "Spring Security", "Bootstrap"],
      metrics: ["Secure Spring Security", "35% Query Latency Cut", "Responsive Calendar View"],
      github: "https://github.com/pkdam2302",
      image: "/images/project-yoga.jpg",
    },
  ] as Project[],
  leadership: [
    {
      title: "Managing & Mentoring Interns",
      description: "Currently managing a team of 6–8 interns, handling daily standups, task allocation, code reviews, and personal mentoring to ensure professional growth and high-quality deliverables.",
    },
    {
      title: "Code Reviews & Best Practices",
      description: "Instilling Clean Architecture, DRY principles, type-safety, and secure coding practices. Streamlining git workflows to ensure stable, release-ready branches.",
    },
    {
      title: "System Architecture Design",
      description: "Designing modular REST APIs, microservices, and database models using Spring Boot (JPA) and Next.js App Router for maintainability and scalability.",
    },
    {
      title: "Agile & Project Ownership",
      description: "Driving sprint planning, coordinating task delivery, bridging technical requirements with business needs, and leading direct client meetings.",
    },
  ],
  testimonials: [
    {
      id: "test-1",
      name: "Yash Sharma",
      role: "Product Owner",
      company: "QLOAX",
      content: "Prathmesh is an exceptional Team Lead. He structured our frontend architecture from the ground up, reducing UI development overhead by 40% while driving the intern team to deliver on-time, high-performance web products.",
      avatar: "/images/avatar-yash.jpg",
    },
    {
      id: "test-2",
      name: "Siddharth Mehta",
      role: "Lead Architect",
      company: "ValueDX",
      content: "Prathmesh's depth of knowledge in Spring Boot and database query tuning was crucial for our LMS platform. He optimized our query performance by 35% and showed excellent adherence to clean architectural patterns.",
      avatar: "/images/avatar-siddharth.jpg",
    },
    {
      id: "test-3",
      name: "Anjali Deshmukh",
      role: "Frontend Engineer Intern",
      company: "QLOAX",
      content: "Mentored by Prathmesh, I learned how to structure scalable React projects, implement state management correctly, and apply advanced GSAP animations. He is an outstanding mentor who always makes time for his team.",
      avatar: "/images/avatar-anjali.jpg",
    },
  ] as Testimonial[],
  blogs: [
    {
      id: "blog-1",
      title: "How We Scaled Next.js to 95+ Lighthouse Score",
      date: "May 12, 2026",
      readTime: "6 min read",
      summary: "A deep dive into server components, code splitting, dynamic imports for 3D canvases, and styling tricks that unlocked stellar performance.",
      slug: "scale-nextjs-lighthouse",
      tags: ["Next.js", "Performance", "SEO"],
    },
    {
      id: "blog-2",
      title: "Spring Boot Microservices Security with JWT & Spring Security",
      date: "April 08, 2026",
      readTime: "8 min read",
      summary: "A step-by-step guide to configuring secure role-based access control, token expiration, refresh tokens, and defensive database models.",
      slug: "spring-boot-security-jwt",
      tags: ["Spring Boot", "Security", "Java"],
    },
    {
      id: "blog-3",
      title: "Creating High Performance Mobile UI in React Native & Expo",
      date: "March 15, 2026",
      readTime: "5 min read",
      summary: "Practical advice on profiling APKs, optimizing render cycles, handling flat list virtualization, and setting up smooth gesture animations.",
      slug: "react-native-ui-optimization",
      tags: ["React Native", "Expo", "Mobile"],
    },
  ] as Blog[],
};
