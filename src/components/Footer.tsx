/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Copy,
  Check,
  Terminal,
  Globe,
  ArrowUpRight,
  Zap,
} from "lucide-react";
// Import your data object
import { personalInfo as importedInfo } from "@/data/portfolio";

// --- Fallback Data for Safety ---
const defaultInfo = {
  name: "Waleed Ahmad",
  role: "Full Stack Architect",
  tagline: "Building digital experiences that matter.",
  email: "waleed@example.com",
  location: "Islamabad, Pakistan",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
};

const personalInfo = importedInfo || defaultInfo;

const Footer = () => {
  const [copied, setCopied] = useState(false);

  // 1. Destructure data
  const { email, socials, name, location, role, tagline } = personalInfo;

  // 2. Map keys to Icons
  const iconMap: any = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="relative pt-32 pb-12 overflow-hidden border-t border-white/5"
    >
      {/* --- Ambient Background Effects (Strict Blue/Yellow) --- */}
      <div className="absolute inset-0 bg-[#0B1121] z-0" />

      {/* Bottom Glows */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-blue-200 text-xs font-mono font-bold mb-8 uppercase tracking-wider shadow-[0_0_15px_rgba(var(--primary),0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Open for Collaboration
          </div>

          {/* Main Title with Gradient */}
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white">
            Initialize{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-blue-400 to-secondary animate-pulse-glow">
              Connection
            </span>
          </h2>

          <p className="text-blue-200/60 max-w-xl mx-auto text-lg md:text-xl leading-relaxed">
            Need a{" "}
            <span className="text-white font-semibold border-b border-secondary/50 pb-0.5">
              {role}
            </span>
            ? <br className="hidden md:block" />
            <span className="text-blue-200/80">{tagline}</span>
          </p>
        </motion.div>

        {/* --- Action Card (Glassmorphism) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="relative max-w-xl mx-auto mb-24 group"
        >
          {/* Animated Gradient Border Layer */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-primary via-blue-500 to-secondary rounded-3xl opacity-30 group-hover:opacity-60 blur transition duration-500" />

          <div className="relative glass-panel p-2 rounded-3xl bg-[#0B1121]/90 backdrop-blur-xl border border-white/10">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              {/* Email Input */}
              <div className="flex-1 w-full flex items-center gap-3 px-4 py-4 rounded-2xl border border-white/5 bg-black/40 focus-within:border-primary/50 transition-colors group/input">
                <Mail
                  className="text-blue-400 shrink-0 group-focus-within/input:text-secondary transition-colors"
                  size={20}
                />
                <input
                  type="text"
                  readOnly
                  value={email}
                  className="bg-transparent text-blue-100 w-full outline-none font-mono text-sm placeholder:text-blue-200/30 truncate"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopy}
                  className="flex-1 sm:flex-none px-4 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all border border-white/5 hover:border-white/20 flex items-center justify-center gap-2 group/btn relative overflow-hidden active:scale-95"
                  aria-label="Copy Email"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Check size={18} className="text-secondary" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Copy
                          size={18}
                          className="text-blue-300 group-hover/btn:text-white transition-colors"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                <a
                  href={`mailto:${email}`}
                  className="flex-1 sm:flex-none px-8 py-4 bg-secondary hover:bg-yellow-400 text-black font-bold rounded-2xl transition-all shadow-[0_0_20px_-5px_rgba(var(--secondary),0.4)] hover:shadow-[0_0_30px_-5px_rgba(var(--secondary),0.6)] flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Send
                  <ArrowUpRight size={18} className="stroke-2" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Footer Bottom --- */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {Object.entries(socials).map(([platform, url]) => {
              const IconComponent = iconMap[platform] || Globe;
              return (
                <a
                  key={platform}
                  href={url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl border border-white/5 text-blue-200/60 hover:text-white hover:bg-white/10 hover:border-secondary/30 hover:shadow-[0_0_15px_-5px_var(--color-secondary)] hover:-translate-y-1 transition-all duration-300 group"
                  aria-label={platform}
                >
                  <IconComponent
                    size={20}
                    className="group-hover:stroke-secondary transition-colors"
                  />
                </a>
              );
            })}
          </div>

          {/* Copyright & Location */}
          <div className="text-blue-200/40 text-sm font-mono flex flex-col items-center md:items-end gap-2">
            <p className="flex items-center gap-2">
              <Terminal size={14} className="text-primary" />
              <span>
                &copy; {new Date().getFullYear()} {name}
              </span>
            </p>
            <div className="flex items-center gap-3 text-xs opacity-60">
              <span>{location}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <div className="flex items-center gap-1.5 text-secondary">
                <Zap size={10} className="fill-secondary" />
                System Online
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;