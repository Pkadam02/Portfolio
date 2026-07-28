"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Theme = "dark" | "light";
export type Language = "en" | "de";

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.hire": "Hire Me",
    "hero.projects": "View Projects",
    "hero.tagline": "Building Digital Products that Scale.",
    "hero.subtitle": "Full Stack Developer | Team Lead | React Native Developer | Spring Boot Engineer | SaaS Builder",
    "about.title": "About Me",
    "about.journey": "My Journey",
    "about.education": "Education",
    "about.skills": "Skills & Expertise",
    "services.title": "Services Offered",
    "projects.title": "Featured Projects",
    "experience.title": "Professional Timeline",
    "leadership.title": "Leadership & Collaboration",
    "testimonials.title": "What People Say",
    "blogs.title": "Latest Articles",
    "contact.title": "Let's Build Something Together",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.message": "Your Message",
    "footer.rights": "All rights reserved.",
  },
  de: {
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.services": "Leistungen",
    "nav.projects": "Projekte",
    "nav.experience": "Erfahrung",
    "nav.contact": "Kontakt",
    "hero.hire": "Mich anheuern",
    "hero.projects": "Projekte ansehen",
    "hero.tagline": "Digitale Produkte bauen, die skalieren.",
    "hero.subtitle": "Full-Stack-Entwickler | Teamleiter | React-Native-Entwickler | Spring-Boot-Ingenieur | SaaS-Builder",
    "about.title": "Über Mich",
    "about.journey": "Mein Weg",
    "about.education": "Ausbildung",
    "about.skills": "Fähigkeiten & Expertise",
    "services.title": "Dienstleistungen",
    "projects.title": "Ausgewählte Projekte",
    "experience.title": "Beruflicher Werdegang",
    "leadership.title": "Führung & Zusammenarbeit",
    "testimonials.title": "Kundenstimmen",
    "blogs.title": "Neueste Artikel",
    "contact.title": "Lassen Sie uns etwas Großes bauen",
    "contact.send": "Nachricht Senden",
    "contact.sending": "Wird gesendet...",
    "contact.name": "Ihr Name",
    "contact.email": "Ihre E-Mail",
    "contact.message": "Ihre Nachricht",
    "footer.rights": "Alle Rechte vorbehalten.",
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read cached values or default to system preference
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    }

    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "de" : "en";
    setLanguage(nextLang);
    localStorage.setItem("lang", nextLang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  // Prevent hydration flash
  if (!mounted) {
    return <div className="min-h-screen bg-[#f2eeeb]" />;
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, toggleLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
