/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
// Import data with fallback
import { navbarData as importedData } from "@/data/portfolio";

// --- Fallback Data ---
const defaultData = {
  logoText: "Shadow Scripter",
  links: [
    { id: "about", label: "About", link: "#about" },
    { id: "work", label: "Work", link: "#work" },
    { id: "skills", label: "Stack", link: "#skills" },
    { id: "projects", label: "Projects", link: "#projects" },
  ],
};

const navbarData = importedData || defaultData;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Handle scroll effect for matte glass toggle
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
          "fixed top-0 w-full z-100 transition-all duration-300",
          scrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* --- Logo (Minimalist) --- */}
          <a
            href="#"
            className="flex items-center gap-2 group relative z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to Top"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded bg-black dark:bg-white text-white dark:text-black transition-transform group-hover:scale-90">
              <Terminal size={16} strokeWidth={2} />
            </div>
            <span className="font-mono font-bold text-sm tracking-tight text-black dark:text-white group-hover:opacity-70 transition-opacity">
              {navbarData.logoText}
            </span>
          </a>

          {/* --- Desktop Navigation --- */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900/50 p-1 rounded-full border border-zinc-200 dark:border-zinc-800">
            {navbarData.links.map((item: any) => (
              <a
                key={item.id}
                href={item.link}
                onMouseEnter={() => setHoveredLink(item.id)}
                onMouseLeave={() => setHoveredLink(null)}
                onFocus={() => setHoveredLink(item.id)}
                onBlur={() => setHoveredLink(null)}
                className="relative px-5 py-2 text-xs font-medium transition-colors rounded-full focus:outline-none"
              >
                {/* Text Content */}
                <span
                  className={cn(
                    "relative z-10 transition-colors duration-200",
                    hoveredLink === item.id
                      ? "text-black dark:text-white"
                      : "text-zinc-500 dark:text-zinc-400"
                  )}
                >
                  {item.label}
                </span>

                {/* Gliding Pill Animation (Subtle Zinc) */}
                {hoveredLink === item.id && (
                  <motion.span
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white dark:bg-black rounded-full z-0 shadow-sm border border-zinc-200 dark:border-zinc-700"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* --- CTA & Mobile Toggle --- */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA - Solid Black/White */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-all active:scale-95"
            >
              Hire Me
              <ArrowRight size={14} />
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md transition-colors relative z-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} strokeWidth={1.5} />
              ) : (
                <Menu size={24} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white dark:bg-black md:hidden flex flex-col pt-32 px-6"
          >
            <nav className="flex flex-col gap-6">
              {navbarData.links.map((item: any, index: number) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="group flex items-center justify-between text-3xl font-bold text-zinc-400 hover:text-black dark:hover:text-white transition-colors tracking-tight border-b border-zinc-100 dark:border-zinc-900 pb-4"
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    size={24}
                    className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 flex items-center justify-center gap-2 w-full py-5 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded-xl active:scale-95 transition-transform"
              >
                Start Project
                <ArrowRight size={20} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;