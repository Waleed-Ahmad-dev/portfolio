"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-mono font-bold text-lg text-slate-100 tracking-tighter">
          <span className="text-cyan-400">&lt;</span>
          Shadow_Scripter
          <span className="text-cyan-400">/&gt;</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-mono text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            _about
          </a>
          <a href="#work" className="hover:text-cyan-400 transition-colors">
            _work
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            _stack
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            _contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
