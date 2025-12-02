"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Terminal, Github, ArrowRight, Command } from "lucide-react";
import { personalInfo, heroData } from "@/data/portfolio";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950">
      {/* --- Background Architecture --- */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-50" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* --- Terminal Status Badge --- */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-xl shadow-cyan-900/10 hover:border-cyan-500/30 transition-colors group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-slate-500 font-mono text-sm group-hover:text-cyan-400 transition-colors">
                <span className="text-cyan-600 mr-2">$</span>
                {heroData.status}
              </span>
              <span className="w-px h-4 bg-slate-800 mx-1" />
              <span className="text-slate-300 font-mono text-sm font-medium">
                {personalInfo.alias}
              </span>
            </div>
          </motion.div>

          {/* --- Main Heading --- */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-100 tracking-tighter leading-[1.1]">
              {heroData.heading.start}{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                {heroData.heading.highlight}
                {/* Glitch/Underline Effect */}
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-linear-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 blur-sm" />
              </span>
              <br />
              <span className="text-slate-300">{heroData.heading.end}</span>
            </h1>
          </motion.div>

          {/* --- Subheading --- */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-lg md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light">
              I&apos;m a{" "}
              <span className="text-cyan-100 font-medium border-b border-cyan-500/30 pb-0.5">
                {personalInfo.age}-year-old {personalInfo.role}
              </span>{" "}
              {heroData.subHeading.text}
            </p>
          </motion.div>

          {/* --- Action Buttons --- */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
            {/* Primary "Shimmer" Button */}
            <a
              href="#work"
              className="group relative inline-flex h-12 overflow-hidden rounded-md p-px focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#0f172a_50%,#06b6d4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-8 py-1 text-sm font-medium text-slate-50 backdrop-blur-3xl transition-all group-hover:bg-slate-900 group-hover:text-cyan-400">
                <Terminal className="mr-2 h-4 w-4" />
                {heroData.buttons.primary}
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
              </span>
            </a>

            {/* Secondary Button */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-slate-900/50 px-8 text-sm font-medium text-slate-300 shadow-sm hover:bg-slate-800 hover:text-white transition-colors gap-2 backdrop-blur-sm"
            >
              <Github size={18} />
              {heroData.buttons.secondary}
              <div className="ml-2 flex items-center gap-1 rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                <Command size={10} />
                <span>G</span>
              </div>
            </a>
          </motion.div>

          {/* --- Decor: Floating Code Block (Optional Visual) --- */}
          {/* This adds to the "Architect" vibe without cluttering text */}
          <motion.div
            variants={itemVariants}
            className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 opacity-20 hidden lg:block"
          >
            <div className="font-mono text-xs text-cyan-500/50 p-6 border border-cyan-500/10 rounded-xl bg-slate-950/50 backdrop-blur-sm">
              <p>class Architect extends Developer &#123;</p>
              <p className="pl-4">constructor() &#123;</p>
              <p className="pl-8">
                this.stack = [&apos;Next.js&apos;, &apos;Node&apos;];
              </p>
              <p className="pl-8">this.passion = &apos;Scalability&apos;;</p>
              <p className="pl-4">&#125;</p>
              <p>&#125;</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* --- Scroll Indicator --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
          System Ready
        </span>
        <div className="w-5 h-8 border-2 border-slate-800 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1 bg-cyan-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
