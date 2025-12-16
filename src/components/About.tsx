/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Layers, Zap, Terminal, Cpu, Database } from "lucide-react";
import SectionHeader from "./SectionHeader";
import {
  aboutText as importedText,
  aboutStats as importedStats,
} from "@/data/portfolio";

// --- Data Logic Preserved ---
const defaultText = {
  p1: {
    main: "I am",
    age: "16 years old",
    highlight: "Next.js Architecture",
    end: "enthusiast.",
  },
  p3: "Building high-performance web applications with a focus on speed, scalability, and electric aesthetics.",
};

const defaultStats = {
  stackStatus: "System Online",
  experienceYears: "2+",
  projectsCompleted: "15+",
  stackSub: "React / Next.js / Node",
};

const aboutText = importedText || defaultText;
const aboutStats = importedStats || defaultStats;

// --- Minimalist Animation Variants ---
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

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-12 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="System Analysis"
          subtitle="Who is behind the code?"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start mt-24"
        >
          {/* --- Left Column: Minimalist Terminal --- */}
          <motion.div variants={cardVariants} className="h-full">
            <div className="h-full relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all duration-500 hover:border-zinc-400 dark:hover:border-zinc-600">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
                {/* Window Controls: Grayscale & Minimal */}
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <Terminal size={10} className="stroke-zinc-500" />
                  <span>bash</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-8 space-y-8 font-mono text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  <span className="text-zinc-300 dark:text-zinc-600 mr-3">
                    01
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200">
                    {aboutText.p1.main}
                  </span>{" "}
                  <span className="inline-block px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs font-semibold text-black dark:text-white mx-1">
                    {aboutText.p1.age}
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200">
                    , architecting
                  </span>{" "}
                  <span className="font-semibold text-black dark:text-white border-b border-black dark:border-white pb-0.5">
                    {aboutText.p1.highlight}
                  </span>{" "}
                  <span className="text-zinc-800 dark:text-zinc-200">
                    {aboutText.p1.end}
                  </span>
                </p>

                <p>
                  <span className="text-zinc-300 dark:text-zinc-600 mr-3">
                    02
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200">
                    Currently an O-Levels student & Lead Developer Intern. My
                    sweet spot is
                  </span>{" "}
                  <span className="inline-flex items-center gap-1.5 text-black dark:text-white font-semibold">
                    <Database size={12} strokeWidth={2} /> Backend
                  </span>{" "}
                  <span className="text-zinc-800 dark:text-zinc-200">
                    — designing scalable APIs and managing databases — but I
                    execute with precision on the Frontend.
                  </span>
                </p>

                <p className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 italic text-zinc-500">
                  <span className="text-zinc-300 dark:text-zinc-600 not-italic font-mono text-xs block mb-2">
                    // Philosophy
                  </span>
                  &quot;{aboutText.p3}&quot;
                </p>

                {/* Static Cursor */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-zinc-300 dark:text-zinc-600">04</span>
                  <span className="text-green-500">➜</span>
                  <span className="w-2 h-4 bg-zinc-900 dark:bg-zinc-100 animate-pulse block" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Right Column: Architectural Grid --- */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-6"
          >
            {/* Card 1: Experience */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-xl transition-all duration-300 hover:border-black dark:hover:border-white group"
            >
              <div className="flex justify-between items-start mb-6">
                <Code2
                  size={24}
                  strokeWidth={1.5}
                  className="text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors"
                />
                <span className="text-[10px] font-mono border border-zinc-100 dark:border-zinc-800 rounded px-2 py-1 text-zinc-400">
                  SYS_TIME
                </span>
              </div>
              <div className="text-5xl font-light text-black dark:text-white tracking-tight mb-2">
                {aboutStats.experienceYears}
              </div>
              <div className="text-sm text-zinc-500 font-medium">
                Years Experience
              </div>
            </motion.div>

            {/* Card 2: Projects */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-xl transition-all duration-300 hover:border-black dark:hover:border-white group"
            >
              <div className="flex justify-between items-start mb-6">
                <Layers
                  size={24}
                  strokeWidth={1.5}
                  className="text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors"
                />
                <span className="text-[10px] font-mono border border-zinc-100 dark:border-zinc-800 rounded px-2 py-1 text-zinc-400">
                  DEPLOYED
                </span>
              </div>
              <div className="text-5xl font-light text-black dark:text-white tracking-tight mb-2">
                {aboutStats.projectsCompleted}
              </div>
              <div className="text-sm text-zinc-500 font-medium">
                Projects Shipped
              </div>
            </motion.div>

            {/* Card 3: Full Stack */}
            <motion.div
              variants={cardVariants}
              className="col-span-2 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-8 rounded-xl transition-all duration-300 hover:border-black dark:hover:border-white group"
            >
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white dark:bg-black rounded-lg border border-zinc-200 dark:border-zinc-800 text-black dark:text-white group-hover:scale-105 transition-transform duration-300">
                  <Cpu size={32} strokeWidth={1} />
                </div>

                <div className="flex-1">
                  <div className="text-xl font-medium text-black dark:text-white flex items-center gap-3">
                    Full Stack Architect
                    <Zap size={16} className="text-zinc-400 fill-zinc-400" />
                  </div>
                  <div className="text-sm text-zinc-500 mt-2 font-mono tracking-tight">
                    {aboutStats.stackSub}
                  </div>
                </div>

                {/* Minimalist Indicators */}
                <div className="hidden sm:flex gap-2">
                  <div className="w-1 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
                  <div className="w-1 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                  <div className="w-1 h-8 bg-black dark:bg-white rounded-full" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;