"use client";

import React from "react";
import { Mail, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-20 px-6 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-t from-blue-900/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold font-mono text-slate-100 mb-6">
          Ready to initiate?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Whether you have an enterprise idea or need a backend architect, my
          terminal is open.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="mailto:itswaleedqureshi@gmail.com"
            className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)]"
          >
            <Mail size={20} />
            itswaleedqureshi@gmail.com
          </a>
          <a
            href="https://github.com/Waleed-Ahmad-dev"
            target="_blank"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Github size={20} />
            github.com/Waleed-Ahmad-dev
          </a>
        </div>

        <div className="pt-8 border-t border-slate-800 text-slate-600 text-sm font-mono flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            &copy; {new Date().getFullYear()} Waleed Ahmad. All systems nominal.
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Remote Ready: Pakistan
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
