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
    <footer id="contact" className="relative pt-32 pb-12 overflow-hidden">
      {/* --- Ambient Background Effects --- */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] z-0" />

      {/* Bottom Glows */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold mb-8 uppercase tracking-wider shadow-[0_0_10px_rgba(var(--primary),0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Open for Collaboration
          </div>

          {/* Main Title with Gradient */}
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-foreground">
            Initialize{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-purple-500 to-secondary animate-pulse-glow">
              Connection
            </span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto text-lg md:text-xl leading-relaxed">
            Need a{" "}
            <span className="text-foreground font-semibold border-b border-primary/30">
              {role}
            </span>
            ? <br className="hidden md:block" />
            {tagline}
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
          <div className="absolute -inset-0.5 bg-linear-to-r from-primary via-purple-500 to-secondary rounded-2xl opacity-30 group-hover:opacity-70 blur transition duration-500" />

          <div className="relative glass-panel p-2 rounded-2xl bg-background/80">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              {/* Email Input */}
              <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-white/5 bg-black/20 focus-within:border-primary/50 transition-colors">
                <Mail className="text-muted-foreground shrink-0" size={20} />
                <input
                  type="text"
                  readOnly
                  value={email}
                  className="bg-transparent text-foreground w-full outline-none font-mono text-sm placeholder:text-muted-foreground/50 truncate"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopy}
                  className="flex-1 sm:flex-none px-4 py-3 bg-white/5 hover:bg-white/10 text-foreground rounded-xl transition-all border border-white/5 hover:border-white/10 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
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
                        <Check size={18} className="text-green-400" />
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
                          className="group-hover/btn:text-primary transition-colors"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                <a
                  href={`mailto:${email}`}
                  className="flex-1 sm:flex-none px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Send
                  <ArrowUpRight size={18} />
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
                  className="p-3 bg-white/5 rounded-xl border border-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_0_15px_-5px_var(--color-primary)] hover:scale-110 transition-all duration-300 group"
                  aria-label={platform}
                >
                  <IconComponent
                    size={20}
                    className="group-hover:stroke-primary transition-colors"
                  />
                </a>
              );
            })}
          </div>

          {/* Copyright & Location */}
          <div className="text-muted-foreground text-sm font-mono flex flex-col items-center md:items-end gap-2">
            <p className="flex items-center gap-2">
              <Terminal size={14} className="text-secondary" />
              <span>
                &copy; {new Date().getFullYear()} {name}
              </span>
            </p>
            <div className="flex items-center gap-3 text-xs opacity-60">
              <span>{location}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <div className="flex items-center gap-1.5 text-green-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                Systems Normal
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;