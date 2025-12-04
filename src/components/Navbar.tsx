/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Sparkles, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
// Import data with fallback
import { navbarData as importedData } from "@/data/portfolio";

// --- Fallback Data ---
const defaultData = {
  logoText: "Shadow Scripter",
  links: [
    { id: "about", label: "System", link: "#about" },
    { id: "work", label: "Logs", link: "#work" },
    { id: "skills", label: "Stack", link: "#skills" },
    { id: "projects", label: "Deployments", link: "#projects" },
  ],
};

const navbarData = importedData || defaultData;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Handle scroll effect for glassmorphism toggle
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg shadow-black/5"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* --- Logo (Electric Terminal Vibe) --- */}
          <a
            href="#"
            className="flex items-center gap-2 group relative z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to Top"
          >
            <div className="relative p-2 rounded-xl bg-white/5 border border-white/10 overflow-hidden group-hover:border-primary/50 transition-colors duration-300">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
              <Terminal
                size={20}
                className="relative z-10 text-primary group-hover:text-white transition-colors"
              />
            </div>
            <div className="font-mono font-bold text-lg text-foreground tracking-tighter flex items-center">
              <span className="text-primary mr-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                ./
              </span>
              {navbarData.logoText}
              <span className="animate-pulse text-primary ml-1">_</span>
            </div>
          </a>

          {/* --- Desktop Navigation --- */}
          <div className="hidden md:flex items-center gap-1 bg-black/20 backdrop-blur-sm p-1.5 rounded-full border border-white/5">
            {navbarData.links.map((item: any) => (
              <a
                key={item.id}
                href={item.link}
                onMouseEnter={() => setHoveredLink(item.id)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-5 py-2 text-sm font-medium transition-colors rounded-full"
              >
                {/* Text Content */}
                <span
                  className={cn(
                    "relative z-10 transition-colors duration-200",
                    hoveredLink === item.id
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </span>

                {/* Gliding Pill Animation */}
                {hoveredLink === item.id && (
                  <motion.span
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-primary rounded-full z-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* --- CTA & Mobile Toggle --- */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 text-xs font-bold font-mono text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles size={14} />
              _HIRE_ME
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors relative z-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden flex flex-col justify-center px-8"
          >
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

            <nav className="flex flex-col gap-6 relative z-10">
              {navbarData.links.map((item: any, index: number) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="group flex items-center justify-between text-3xl font-black text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-primary transition-all duration-300" />
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-[0_0_20px_rgba(var(--primary),0.3)]"
              >
                <Sparkles size={18} />
                INITIALIZE_PROJECT
              </motion.a>
            </nav>

            {/* Decoration Line */}
            <div className="absolute left-8 bottom-12 w-12 h-1 bg-linear-to-r from-primary to-secondary rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;