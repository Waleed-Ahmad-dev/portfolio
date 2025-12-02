"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Github, ChevronDown } from "lucide-react";
// Import the data
import { personalInfo, heroData } from "@/data/portfolio";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
      {/* Background Glows */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Dynamic Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-sm font-mono mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          {heroData.status}: {personalInfo.name}
        </div>

        {/* Dynamic Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight mb-6 font-mono">
          {heroData.heading.start}{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
            {heroData.heading.highlight}
          </span>
          <br />
          {heroData.heading.end}
        </h1>

        {/* Dynamic Subheading with Dynamic Age/Role */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
          I&apos;m a{" "}
          <span className="text-slate-200 font-semibold">
            {personalInfo.age}-year-old {personalInfo.role}
          </span>{" "}
          {heroData.subHeading.text}
        </p>

        {/* Dynamic Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#work"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-md transition-colors flex items-center gap-2"
          >
            <Terminal size={18} />
            {heroData.buttons.primary}
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 rounded-md transition-colors flex items-center gap-2"
          >
            <Github size={18} />
            {heroData.buttons.secondary}
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-mono">Scroll to initialize</span>
        <ChevronDown className="animate-bounce" size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;