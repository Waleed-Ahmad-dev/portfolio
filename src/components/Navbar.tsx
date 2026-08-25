"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ArrowUpRight, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navbarData as importedData, NavLink } from "@/data/portfolio";

const defaultData = {
  logoText: "Shadow Scripter",
  links: [
    { id: "about", label: "About", link: "#about" },
    { id: "work", label: "Work", link: "#work" },
    { id: "skills", label: "Stack", link: "#skills" },
    { id: "projects", label: "Projects", link: "#projects" },
    { id: "contact", label: "Contact", link: "#contact" },
  ],
};

const navbarData = importedData || defaultData;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b",
          scrolled
            ? "glass-industrial border-zinc-300 dark:border-zinc-800/80 py-3 shadow-sm"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / System Mark */}
          <a
            href="#"
            className="flex items-center gap-3 group relative z-50"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Back to top"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-sm bg-black dark:bg-white text-white dark:text-black font-mono font-bold text-xs transition-transform group-hover:scale-95">
              <Terminal size={15} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-xs tracking-tight text-black dark:text-white group-hover:opacity-80 transition-opacity">
                {navbarData.logoText.toUpperCase()}
              </span>
              <span className="font-mono text-[9px] text-zinc-500 dark:text-zinc-400 tracking-widest uppercase flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                SYS // ACTIVE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100/90 dark:bg-zinc-900/80 p-1 rounded-md border border-zinc-300 dark:border-zinc-800">
            {navbarData.links.map((item: NavLink) => (
              <a
                key={item.id}
                href={item.link}
                onMouseEnter={() => setHoveredLink(item.id)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-colors rounded-sm focus:outline-none"
              >
                <span
                  className={cn(
                    "relative z-10 transition-colors duration-150",
                    hoveredLink === item.id
                      ? "text-black dark:text-white font-semibold"
                      : "text-zinc-600 dark:text-zinc-400"
                  )}
                >
                  {item.label}
                </span>

                {hoveredLink === item.id && (
                  <motion.span
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-sm z-0 border border-zinc-300 dark:border-zinc-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider bg-black dark:bg-white text-white dark:text-black rounded-sm hover-tactile"
            >
              <span>INITIATE_CONTACT</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-black dark:text-white border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 rounded-sm relative z-50"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl md:hidden flex flex-col pt-28 px-6 pb-10"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest pb-6 border-b border-zinc-800">
              <Cpu size={14} /> SYSTEM NAVIGATION // INDEX
            </div>

            <nav className="flex flex-col gap-4 mt-6">
              {navbarData.links.map((item: NavLink, index: number) => (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-2xl font-mono font-bold text-zinc-300 hover:text-white py-3 border-b border-zinc-900 tracking-tight"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-zinc-600 font-normal">
                      0{index + 1}
                    </span>
                    {item.label}
                  </span>
                  <ArrowUpRight size={20} className="text-zinc-600" />
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-mono font-bold text-sm uppercase tracking-wider rounded-sm active:scale-95 transition-transform"
              >
                <span>INITIATE_CONTACT</span>
                <ArrowUpRight size={18} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;