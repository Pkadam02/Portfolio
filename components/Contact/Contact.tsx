"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "../Background/AppContext";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle, AlertCircle } from "lucide-react";
import Magnetic from "../Navbar/Magnetic";
import confetti from "canvas-confetti";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { t } = useApp();
  const { phone, email, location, calendlyUrl } = portfolioData.personalInfo;
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showCalendly, setShowCalendly] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: data.name,
              from_email: data.email,
              message: data.message,
              to_name: "Prathmesh Kadam",
            },
          }),
        });

        if (!response.ok) throw new Error("Email submission failed");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1200));
        console.log("Mock Contact Form Submitted:", data);
      }

      setSubmitStatus("success");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#d97e06", "#f4f1ea", "#16130f"],
      });
      reset();
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-transparent border-t border-[#16130f]/15 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="pill-badge text-[#d97e06] border-[#d97e06]/30 bg-[#d97e06]/10">
            {t("nav.contact")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#16130f] uppercase tracking-tight">
            Initiate Conversation<span className="text-[#d97e06]">.</span>
          </h2>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Directory & Calendly */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Quick Contact List Note */}
            <div className="relative">
              <i className="paper-shadow paper-clip" />
              <div className="paper-card paper-cream paper-clip p-8 rounded-xl flex flex-col gap-6 relative shadow-2xl">
                <span className="tape-strip" />
                <h3 className="text-[#16130f] font-extrabold text-lg uppercase tracking-tight">
                  Contact Directory
                </h3>

                <div className="flex flex-col gap-5">
                  <a href={`mailto:${email}`} className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-3 rounded-lg bg-black/5 text-[#a2440a]">
                      <Mail size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-[#a2440a] uppercase tracking-widest font-bold">Email</span>
                      <span className="text-xs text-[#16130f] font-bold">
                        {email}
                      </span>
                    </div>
                  </a>

                  <a href={`tel:${phone}`} className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-3 rounded-lg bg-black/5 text-[#a2440a]">
                      <Phone size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-[#a2440a] uppercase tracking-widest font-bold">Phone</span>
                      <span className="text-xs text-[#16130f] font-bold">
                        {phone}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-black/5 text-[#a2440a]">
                      <MapPin size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-[#a2440a] uppercase tracking-widest font-bold">Base Location</span>
                      <span className="text-xs text-[#16130f] font-bold">
                        {location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendly Booking Card */}
            <div className="relative">
              <i className="paper-shadow paper-clip" />
              <div className="paper-card paper-kraft paper-clip p-8 rounded-xl flex flex-col gap-4 relative shadow-xl">
                <span className="tape-strip" />
                <h3 className="text-[#16130f] font-extrabold text-base uppercase tracking-tight">
                  Instant Scheduler
                </h3>
                <p className="text-[#16130f]/75 text-xs leading-relaxed font-medium">
                  Skip the back-and-forth emails. Book a 30-minute introductory meeting directly on my calendar.
                </p>
                
                <Magnetic range={25} strength={0.25}>
                  <button
                    onClick={() => setShowCalendly(false)}
                    className="flex items-center justify-center gap-2 text-xs uppercase font-mono tracking-[0.2em] w-full py-3.5 rounded-full bg-[#16130f] text-white font-bold hover:bg-[#d97e06] transition-colors"
                  >
                    <Calendar size={14} />
                    <span>Schedule Sync</span>
                  </button>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7">
            <div className="relative">
              <i className="paper-shadow paper-clip" />
              <div className="paper-card paper-cream paper-clip p-8 md:p-10 rounded-xl relative shadow-2xl">
                <span className="tape-strip" />
                <h3 className="text-[#16130f] font-extrabold text-lg uppercase tracking-tight mb-8">
                  Send Electronic Dispatch
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-mono text-[#a2440a] uppercase tracking-widest font-black">
                      {t("contact.name")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "Name must be at least 2 characters" },
                      })}
                      placeholder="Jane Doe"
                      className="w-full bg-black/5 border border-[#16130f]/20 rounded-lg px-4 py-3 text-xs text-[#16130f] placeholder-[#16130f]/40 font-semibold focus:border-[#a2440a] focus:outline-none transition-colors"
                    />
                    {errors.name && (
                      <span className="text-red-600 text-[10px] font-mono flex items-center gap-1 mt-1 font-bold">
                        <AlertCircle size={10} />
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-mono text-[#a2440a] uppercase tracking-widest font-black">
                      {t("contact.email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="jane@company.com"
                      className="w-full bg-black/5 border border-[#16130f]/20 rounded-lg px-4 py-3 text-xs text-[#16130f] placeholder-[#16130f]/40 font-semibold focus:border-[#a2440a] focus:outline-none transition-colors"
                    />
                    {errors.email && (
                      <span className="text-red-600 text-[10px] font-mono flex items-center gap-1 mt-1 font-bold">
                        <AlertCircle size={10} />
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-mono text-[#a2440a] uppercase tracking-widest font-black">
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message", {
                        required: "Message is required",
                        minLength: { value: 10, message: "Message must be at least 10 characters" },
                      })}
                      placeholder="Let's build a performance dashboard..."
                      className="w-full bg-black/5 border border-[#16130f]/20 rounded-lg px-4 py-3 text-xs text-[#16130f] placeholder-[#16130f]/40 font-semibold focus:border-[#a2440a] focus:outline-none transition-colors resize-none"
                    />
                    {errors.message && (
                      <span className="text-red-600 text-[10px] font-mono flex items-center gap-1 mt-1 font-bold">
                        <AlertCircle size={10} />
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  {/* Status Box */}
                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="p-4 rounded bg-green-500/15 border border-green-700/30 text-green-800 text-xs font-mono font-bold flex items-center gap-2"
                      >
                        <CheckCircle size={14} />
                        <span>Electronic message dispatched! I will connect shortly.</span>
                      </motion.div>
                    )}
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="p-4 rounded bg-red-500/15 border border-red-700/30 text-red-800 text-xs font-mono font-bold flex items-center gap-2"
                      >
                        <AlertCircle size={14} />
                        <span>Failed to dispatch. Please email me directly.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <Magnetic range={30} strength={0.2}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 text-xs uppercase font-mono tracking-[0.2em] w-full py-4 rounded-full bg-[#16130f] text-white hover:bg-[#d97e06] font-bold transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg"
                    >
                      <Send size={12} />
                      <span>{isSubmitting ? t("contact.sending") : t("contact.send")}</span>
                    </button>
                  </Magnetic>
                </form>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
