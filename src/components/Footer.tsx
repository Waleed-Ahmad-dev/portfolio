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
  LucideIcon,
} from "lucide-react";
import { personalInfo as importedInfo } from "@/data/portfolio";

const defaultInfo = {
  name: "Waleed Ahmad",
  role: "Lead Backend Architect",
  tagline: "Engineering production-scale applications and distributed AI backends.",
  email: "itswaleedqureshi@gmail.com",
  location: "Pakistan",
  socials: {
    github: "https://github.com/Waleed-Ahmad-dev",
    linkedin: "https://linkedin.com/in/waleed-ahmed2009",
    instagram: "https://instagram.com/waleed.ahmad.dev",
  },
};

const personalInfo = importedInfo || defaultInfo;

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const { email, socials, name, location, role, tagline } = personalInfo;

  const iconMap: Record<string, LucideIcon> = {
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
      className="relative pt-20 pb-12 overflow-hidden bg-background border-t border-border"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="badge-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 mb-4 inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            OPEN FOR COLLABORATION &amp; CONTRACTS
          </span>

          <h2 className="text-4xl md:text-6xl font-mono font-extrabold tracking-tighter mb-4 text-foreground uppercase">
            INITIALIZE <span className="text-zinc-400 dark:text-zinc-500">CONNECTION</span>
          </h2>

          <p className="text-muted-foreground text-xs md:text-sm max-w-lg mx-auto leading-relaxed font-sans">
            Need a <strong className="text-foreground">{role}</strong>? {tagline}
          </p>
        </motion.div>

        {/* Email Copy Card */}
        <div className="max-w-md mx-auto mb-16">
          <div className="flex items-center gap-2 p-1.5 rounded-sm border border-zinc-300 dark:border-zinc-800 bg-card">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-xs border border-zinc-200 dark:border-zinc-800">
              <Mail size={15} className="text-zinc-500" />
              <input
                type="text"
                readOnly
                value={email}
                className="bg-transparent text-foreground w-full outline-none font-mono text-xs truncate"
              />
            </div>

            <button
              onClick={handleCopy}
              className="p-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xs text-foreground hover:border-foreground transition-colors"
              aria-label="Copy Email"
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <Check size={16} className="text-emerald-500" />
                ) : (
                  <Copy size={16} />
                )}
              </AnimatePresence>
            </button>

            <a
              href={`mailto:${email}`}
              className="px-4 py-2.5 bg-foreground text-background font-mono text-xs font-bold uppercase tracking-wider rounded-xs hover-tactile flex items-center gap-1"
            >
              <span>SEND</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-zinc-200 dark:border-zinc-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs">
          {/* Social Links */}
          <div className="flex items-center gap-2">
            {Object.entries(socials).map(([platform, url]) => {
              const IconComponent = iconMap[platform] || Globe;
              return (
                <a
                  key={platform}
                  href={url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-500 hover:text-foreground border border-zinc-200 dark:border-zinc-800 rounded-xs transition-colors"
                  aria-label={platform}
                >
                  <IconComponent size={16} />
                </a>
              );
            })}
          </div>

          <div className="text-muted-foreground text-[11px] flex flex-col items-center md:items-end gap-1">
            <p className="flex items-center gap-1.5 text-foreground font-bold">
              <Terminal size={14} className="text-emerald-500" />
              &copy; {new Date().getFullYear()} {name.toUpperCase()} (SHADOW SCRIPTER)
            </p>
            <div className="flex items-center gap-2 text-zinc-500">
              <span>{location.toUpperCase()}</span>
              <span>//</span>
              <span className="text-emerald-500">SYSTEM OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;