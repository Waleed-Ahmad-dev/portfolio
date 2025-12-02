"use client";

import React from "react";
import { navbarData } from "@/data/portfolio"; // Adjust path if needed

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Dynamic Logo */}
        <div className="font-mono font-bold text-lg text-slate-100 tracking-tighter cursor-pointer">
          <span className="text-cyan-400">&lt;</span>
          {navbarData.logoText}
          <span className="text-cyan-400">/&gt;</span>
        </div>

        {/* Dynamic Links */}
        <div className="hidden md:flex gap-8 text-sm font-mono text-slate-400">
          {navbarData.links.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;