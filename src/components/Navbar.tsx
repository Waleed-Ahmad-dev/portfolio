"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { navbarData } from "@/data/portfolio";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-slate-800/50 py-3"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* --- Logo --- */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
              <Terminal size={18} className="text-cyan-400" />
            </div>
            <div className="font-mono font-bold text-lg text-slate-100 tracking-tighter">
              <span className="text-cyan-500 mr-0.5">&lt;</span>
              {navbarData.logoText}
              <span className="text-cyan-500 ml-0.5">/&gt;</span>
            </div>
          </a>

          {/* --- Desktop Navigation --- */}
          <div className="hidden md:flex items-center gap-1">
            {navbarData.links.map((item) => (
              <a
                key={item.id}
                href={item.link}
                onMouseEnter={() => setHoveredLink(item.id)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2 text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {/* The "Gliding Pill" Background Animation */}
                {hoveredLink === item.id && (
                  <motion.span
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-slate-800/50 rounded-md -z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.label}
              </a>
            ))}

            {/* CTA Button (Optional: Resume or Contact) */}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 text-xs font-bold font-mono text-slate-950 bg-cyan-500 rounded hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
              _HIRE_ME
            </a>
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950 pt-24 px-6 md:hidden flex flex-col items-center gap-8"
          >
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none opacity-20" />

            {navbarData.links.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-mono font-bold text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </motion.a>
            ))}

            {/* Mobile Footer Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto mb-10 flex flex-col items-center gap-4"
            >
              <div className="w-12 h-px bg-slate-800" />
              <a
                href="mailto:itswaleedqureshi@gmail.com"
                className="text-slate-500 font-mono text-sm"
              >
                itswaleedqureshi@gmail.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;