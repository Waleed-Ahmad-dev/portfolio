"use client";

import { motion, Variants } from "framer-motion";
import { Github, ArrowRight, Command, Sparkles, Terminal } from "lucide-react";
import {
  personalInfo as importedInfo,
  heroData as importedHero,
} from "@/data/portfolio";

// --- Fallback Data ---
const defaultInfo = {
  alias: "Shadow Scripter",
  age: "16",
  role: "Full Stack Architect",
  socials: { github: "#" },
};
const defaultHero = {
  status: "Available for Hire",
  heading: {
    start: "Building",
    highlight: "Digital Reality",
    end: "for the web.",
  },
  subHeading: {
    text: "focusing on performance, scalability, and electric user experiences.",
  },
  buttons: { primary: "View Projects", secondary: "Github" },
};

const personalInfo = importedInfo || defaultInfo;
const heroData = importedHero || defaultHero;

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

const floatVariants: Variants = {
  float: {
    y: [0, -20, 0],
    rotate: [0, 1, -1, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-8 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* --- Background Architecture --- */}
      {/* Primary Glow (Blue) */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen opacity-50 animate-pulse-glow" />
      {/* Secondary Glow (Yellow) */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10 mix-blend-screen opacity-30" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* --- Left Column: Content --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* --- Terminal Status Badge --- */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-start"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0B1121]/80 border border-primary/20 backdrop-blur-md shadow-[0_0_20px_-10px_var(--color-primary)] hover:border-secondary/50 transition-all group cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary shadow-[0_0_10px_var(--color-secondary)]"></span>
              </span>
              <span className="text-blue-200/80 font-mono text-sm group-hover:text-white transition-colors">
                <span className="text-secondary mr-2 font-bold">$</span>
                {heroData.status}
              </span>
              <span className="w-px h-4 bg-white/10 mx-1" />
              <span className="text-primary font-mono text-xs font-bold uppercase tracking-wider opacity-90">
                {personalInfo.alias}
              </span>
            </div>
          </motion.div>

          {/* --- Main Heading --- */}
          <motion.div variants={itemVariants} className="mb-8 relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.95]">
              {heroData.heading.start}
              <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-400 to-secondary animate-gradient-x pb-2">
                {heroData.heading.highlight}
                {/* Electric Underline (Yellow) */}
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-80"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              <span className="text-blue-200/40">
                {heroData.heading.end}
              </span>
            </h1>
          </motion.div>

          {/* --- Subheading --- */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-lg md:text-2xl text-blue-200/60 max-w-xl leading-relaxed">
              I&apos;m a{" "}
              <span className="text-white font-semibold border-b-2 border-primary/50 hover:border-secondary transition-colors">
                {personalInfo.age}-year-old {personalInfo.role}
              </span>{" "}
              {heroData.subHeading.text}
            </p>
          </motion.div>

          {/* --- Action Buttons --- */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            {/* Primary Button - High Voltage Blue/Yellow */}
            <a
              href="#work"
              className="group relative inline-flex h-12 overflow-hidden rounded-xl p-[2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-secondary)_0%,var(--color-primary)_50%,var(--color-secondary)_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#0B1121] px-8 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-[#0B1121]/80 group-hover:text-secondary gap-2">
                {heroData.buttons.primary}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            {/* Secondary Button - Glass */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 text-sm font-medium text-blue-200 shadow-sm hover:bg-white/10 hover:text-secondary hover:border-secondary/30 transition-all gap-2 backdrop-blur-md group"
            >
              <Github
                size={18}
                className="group-hover:rotate-12 transition-transform"
              />
              {heroData.buttons.secondary}
              <div className="ml-2 flex items-center gap-1 rounded bg-white/5 px-1.5 py-0.5 text-[10px] font-mono text-blue-200/50 group-hover:text-secondary border border-white/5 group-hover:border-secondary/20">
                <Command size={10} />
                <span>J</span>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* --- Right Column: Holographic Code Visual --- */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:block relative"
        >
          <motion.div
            variants={floatVariants}
            animate="float"
            className="relative z-10"
          >
            {/* Glass Panel Container */}
            <div className="glass-panel p-1 rounded-2xl border-white/10 bg-[#0B1121]/80 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-primary/20">
              {/* Terminal Top Bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-t-xl border-b border-white/5">
                {/* Custom Window Controls (Blue/Yellow/Gray) */}
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <div className="w-3 h-3 rounded-full bg-slate-600" />
                </div>
                <div className="text-xs text-blue-200/50 font-mono ml-2 flex items-center gap-2">
                  <Terminal size={12} />
                  architect.ts
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden rounded-b-xl relative bg-[#050a14]">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent pointer-events-none" />

                {/* Line Numbers & Code */}
                <div className="grid grid-cols-[20px_1fr] gap-4">
                  <div className="text-blue-200/20 text-right select-none space-y-1">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                  <div className="text-blue-100 space-y-1">
                    <div>
                      <span className="text-primary font-bold">class</span>{" "}
                      <span className="text-white">Architect</span>{" "}
                      <span className="text-primary font-bold">extends</span>{" "}
                      <span className="text-white">Developer</span> {"{"}
                    </div>
                    <div className="pl-4">
                      <span className="text-primary font-bold">constructor</span>(){" "}
                      {"{"}
                    </div>
                    <div className="pl-8">
                      <span className="text-white">this</span>.name ={" "}
                      <span className="text-secondary">
                        &apos;{personalInfo.alias}&apos;
                      </span>
                      ;
                    </div>
                    <div className="pl-8">
                      <span className="text-white">this</span>.stack = [
                      <span className="text-secondary">&apos;Next.js&apos;</span>,{" "}
                      <span className="text-secondary">&apos;Tailwind&apos;</span>];
                    </div>
                    <div className="pl-8">
                      <span className="text-white">this</span>.vibe ={" "}
                      <span className="text-secondary">&apos;Electric&apos;</span>;
                    </div>
                    <div className="pl-4">{"}"}</div>
                    <div className="pl-4">
                      <span className="text-blue-300">shipCode</span>() {"{"}
                    </div>
                    <div className="pl-8">
                      <span className="text-primary font-bold">return</span>{" "}
                      <span className="text-secondary font-bold">Infinity</span>;
                    </div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Glow Behind Code */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-r from-primary/30 to-secondary/10 blur-[100px] -z-10 rounded-full" />
        </motion.div>
      </div>

      {/* --- Scroll Indicator --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-mono text-blue-200/60 uppercase tracking-[0.2em] animate-pulse">
            Scroll to Initialize
          </span>
          <Sparkles size={12} className="text-secondary mb-1" />
        </div>
        <div className="w-[2px] h-16 bg-linear-to-b from-transparent via-primary/50 to-transparent rounded-full overflow-hidden">
          <motion.div
            animate={{ y: [-20, 20] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-secondary blur-[2px]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;