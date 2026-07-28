import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/components/Background/AppContext";
import SmoothScroll from "@/components/Background/SmoothScroll";
import Preloader from "@/components/Loader/Preloader";
import CustomCursor from "@/components/Cursor/CustomCursor";
import BackgroundBlobs from "@/components/Background/BackgroundBlobs";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Prathmesh Kadam | Full Stack Developer & Team Lead",
    template: "%s | Prathmesh Kadam",
  },
  description:
    "Full Stack Developer, Team Lead, and SaaS Builder. Specialized in building scalable web architectures using Spring Boot, React Native, Next.js, and clean software architecture.",
  keywords: [
    "Prathmesh Kadam",
    "Full Stack Developer",
    "Team Lead",
    "React Native Developer",
    "Spring Boot Engineer",
    "SaaS Builder",
    "Next.js Developer",
    "Software Architecture",
    "Pune",
    "QLOAX",
  ],
  authors: [{ name: "Prathmesh Kadam", url: "https://linkedin.com/in/prathmesh-kadam" }],
  creator: "Prathmesh Kadam",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/pkdam2302",
    title: "Prathmesh Kadam | Full Stack Developer & Team Lead",
    description:
      "Building high-performance digital products that scale. Managing engineering pipelines, microservices, and client layouts.",
    siteName: "Prathmesh Kadam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prathmesh Kadam | Full Stack Developer & Team Lead",
    description: "Building digital products that scale using Next.js, React Native, and Spring Boot.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative bg-[#f2eeeb] text-[#16130f] selection:bg-[#d97e06] selection:text-white overflow-x-hidden">
        <AppProvider>
          {/* Custom count preloader */}
          <Preloader />
          
          {/* Custom magnetic pointer cursor */}
          <CustomCursor />
          
          {/* Crumpled paper canvas & hand-drawn vector doodles */}
          <BackgroundBlobs />
          
          {/* Lenis Scroll Smooth physics */}
          <SmoothScroll>
            <Navbar />
            <main className="flex-grow flex flex-col w-full relative z-10 bg-transparent">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </AppProvider>
      </body>
    </html>
  );
}
