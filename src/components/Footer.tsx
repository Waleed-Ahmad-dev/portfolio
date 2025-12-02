"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Terminal,
} from "lucide-react";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "itswaleedqureshi@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Waleed-Ahmad-dev",
      label: "GitHub",
    },
    { icon: Linkedin, href: "#", label: "LinkedIn" }, // Add your LinkedIn URL
    // { icon: Twitter, href: "#", label: "Twitter" }, // Optional
  ];

  return (
    <footer
      id="contact"
      className="relative bg-slate-950 pt-24 pb-12 overflow-hidden"
    >
      {/* --- Background Effects --- */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            OPEN FOR COLLABORATION
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight mb-4">
            Initialize <span className="text-cyan-400">Connection</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Whether you have an enterprise idea or need a backend architect, my
            terminal is always open for new inputs.
          </p>
        </motion.div>

        {/* --- Main Action Card --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-2 max-w-lg mx-auto mb-16 shadow-2xl shadow-cyan-900/10"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2">
            {/* Email Display */}
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <Mail className="text-slate-400" size={20} />
              <input
                type="text"
                readOnly
                value={email}
                className="bg-transparent text-slate-200 w-full outline-none font-mono text-sm"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-2 w-full sm:w-auto">
              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="flex-1 sm:flex-none px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2 group"
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
                        className="group-hover:text-cyan-400 transition-colors"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Mailto Button */}
              <a
                href={`mailto:${email}`}
                className="flex-1 sm:flex-none px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 flex items-center justify-center gap-2"
              >
                Send
                <Terminal size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* --- Footer Bottom --- */}
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright & Status */}
          <div className="text-slate-500 text-sm font-mono flex flex-col items-center md:items-end gap-1">
            <p>
              &copy; {new Date().getFullYear()} Waleed Ahmad. All systems
              nominal.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span>Rawalpindi, PK</span>
              <span className="text-slate-700">|</span>
              <span>UTC+5</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;