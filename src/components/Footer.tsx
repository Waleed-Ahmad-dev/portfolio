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
    <footer
      id="contact"
      className="relative pt-32 pb-12 overflow-hidden bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-mono font-medium mb-8 uppercase tracking-widest bg-zinc-50 dark:bg-zinc-900/50">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black dark:bg-white"></span>
            </span>
            Open for Collaboration
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-black dark:text-white">
            Initialize <br className="md:hidden" />
            <span className="text-zinc-400 dark:text-zinc-600">Connection</span>
          </h2>

          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed">
            Need a{" "}
            <span className="text-black dark:text-white font-medium border-b border-black dark:border-white pb-0.5">
              {role}
            </span>
            ? <br className="hidden md:block" />
            <span className="opacity-80">{tagline}</span>
          </p>
        </motion.div>

        {/* --- Action Card (Minimalist) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="relative max-w-lg mx-auto mb-24"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            {/* Email Input */}
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 focus-within:border-black dark:focus-within:border-white transition-colors group">
              <Mail
                className="text-zinc-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors"
                size={18}
                strokeWidth={1.5}
              />
              <input
                type="text"
                readOnly
                value={email}
                className="bg-transparent text-black dark:text-white w-full outline-none font-mono text-sm placeholder:text-zinc-400 truncate"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-2 w-full sm:w-auto">
              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="flex-1 sm:flex-none w-12 h-12 flex items-center justify-center bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
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
                      <Check size={18} strokeWidth={1.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Copy size={18} strokeWidth={1.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Send Button */}
              <a
                href={`mailto:${email}`}
                className="flex-1 sm:flex-none px-6 h-12 bg-black dark:bg-white text-white dark:text-black font-medium rounded-xl flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
              >
                Send
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* --- Footer Bottom --- */}
        <div className="border-t border-zinc-100 dark:border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
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
                  className="p-2 text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                  aria-label={platform}
                >
                  <IconComponent size={20} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>

          {/* Copyright & Location */}
          <div className="text-zinc-400 text-sm font-mono flex flex-col items-center md:items-end gap-2">
            <p className="flex items-center gap-2">
              <Terminal size={14} strokeWidth={1.5} />
              <span>
                &copy; {new Date().getFullYear()} {name}
              </span>
            </p>
            <div className="flex items-center gap-3 text-xs opacity-60">
              <span>{location}</span>
              <span className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
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