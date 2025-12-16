"use client";

import { motion, Variants } from "framer-motion";
import {
  Github,
  ArrowRight,
  Command,
  Terminal,
} from "lucide-react";
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

// --- Minimalist Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0], // "Silky" cubic-bezier
    },
  },
};

const floatVariants: Variants = {
  float: {
    y: [0, -10, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 bg-white dark:bg-black overflow-hidden pt-20">
      {/* --- Architectural Grid Background (Subtle) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute left-12 top-0 bottom-0 w-px bg-black dark:bg-white" />
        <div className="absolute right-12 top-0 bottom-0 w-px bg-black dark:bg-white" />
        <div className="absolute top-32 left-0 right-0 h-px bg-black dark:bg-white" />
      </div>

      <div className="max-w-screen-2xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* --- Left Column: Typography --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* --- Status Badge --- */}
          <motion.div
            variants={itemVariants}
            className="mb-10 flex justify-start"
          >
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black transition-all">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-20"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white"></span>
              </span>
              <span className="text-zinc-600 dark:text-zinc-400 font-mono text-xs uppercase tracking-widest">
                {heroData.status}
              </span>
              <span className="w-px h-3 bg-zinc-200 dark:bg-zinc-800 mx-1" />
              <span className="text-black dark:text-white font-mono text-xs font-semibold">
                {personalInfo.alias}
              </span>
            </div>
          </motion.div>

          {/* --- Main Heading --- */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-black dark:text-white tracking-tighter leading-[0.9] -ml-1">
              {heroData.heading.start}
              <br />
              <span className="text-zinc-400 dark:text-zinc-600 font-medium tracking-tight">
                {heroData.heading.highlight}
              </span>
              <br />
              {heroData.heading.end}
            </h1>
          </motion.div>

          {/* --- Subheading --- */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed border-l border-zinc-200 dark:border-zinc-800 pl-6">
              I&apos;m a{" "}
              <span className="text-black dark:text-white font-medium">
                {personalInfo.age}-year-old {personalInfo.role}
              </span>{" "}
              {heroData.subHeading.text}
            </p>
          </motion.div>

          {/* --- Action Buttons --- */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            {/* Primary Button: Solid Black */}
            <a
              href="#work"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-lg bg-black dark:bg-white px-8 font-medium text-white dark:text-black transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[1.02]"
            >
              <span className="flex items-center gap-3">
                {heroData.buttons.primary}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>

            {/* Secondary Button: Outline */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent px-8 font-medium text-black dark:text-white transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 gap-3"
            >
              <Github size={18} strokeWidth={1.5} />
              {heroData.buttons.secondary}
              <div className="ml-2 hidden md:flex items-center gap-1 rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-[10px] font-mono text-zinc-500">
                <Command size={10} />
                <span>J</span>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* --- Right Column: Minimalist Code Panel --- */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:block relative"
        >
          <motion.div
            variants={floatVariants}
            animate="float"
            className="relative z-10"
          >
            {/* Matte Card Container */}
            <div className="relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-1 shadow-2xl shadow-zinc-200/50 dark:shadow-black/50 backdrop-blur-sm">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-black rounded-t-lg border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>
                <div className="text-[10px] text-zinc-400 font-mono flex items-center gap-2">
                  <Terminal size={10} />
                  architect.ts
                </div>
              </div>

              {/* Code Content */}
              <div className="p-8 font-mono text-sm leading-7 bg-white dark:bg-black rounded-b-lg">
                <div className="grid grid-cols-[24px_1fr] gap-4">
                  {/* Line Numbers */}
                  <div className="text-zinc-300 dark:text-zinc-700 text-right select-none space-y-0">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>

                  {/* Syntax Highlighting (Monochrome) */}
                  <div className="text-zinc-800 dark:text-zinc-200 space-y-0">
                    <div>
                      <span className="font-bold text-black dark:text-white">
                        class
                      </span>{" "}
                      <span>Architect</span>{" "}
                      <span className="text-zinc-400">extends</span>{" "}
                      <span>Developer</span> {"{"}
                    </div>
                    <div className="pl-4">
                      <span className="font-bold text-black dark:text-white">
                        constructor
                      </span>
                      () {"{"}
                    </div>
                    <div className="pl-8">
                      <span className="text-zinc-500">this</span>.name ={" "}
                      <span className="text-zinc-400">
                        &apos;{personalInfo.alias}&apos;
                      </span>
                      ;
                    </div>
                    <div className="pl-8">
                      <span className="text-zinc-500">this</span>.stack = [
                      <span className="text-zinc-400">&apos;Next.js&apos;</span>
                      ,{" "}
                      <span className="text-zinc-400">
                        &apos;Tailwind&apos;
                      </span>
                      ];
                    </div>
                    <div className="pl-8">
                      <span className="text-zinc-500">this</span>.focus ={" "}
                      <span className="text-zinc-400">
                        &apos;Minimalism&apos;
                      </span>
                      ;
                    </div>
                    <div className="pl-4">{"}"}</div>
                    <div className="pl-4 pt-1">
                      <span className="font-bold text-black dark:text-white">
                        deploy
                      </span>
                      () {"{"}
                    </div>
                    <div className="pl-8">
                      <span className="text-zinc-400">return</span>{" "}
                      <span className="font-bold text-black dark:text-white">
                        Infinity
                      </span>
                      ;
                    </div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle shadow underneath instead of glow */}
            <div className="absolute top-10 left-10 -right-10 -bottom-10 z-[-1] border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* --- Scroll Indicator --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-4"
      >
        <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800 overflow-hidden relative">
          <motion.div
            animate={{ y: [-48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-black dark:bg-white"
          />
        </div>
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest writing-mode-vertical">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;