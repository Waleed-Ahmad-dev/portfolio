"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Layers, Zap, Terminal, Cpu, Database } from "lucide-react";
import SectionHeader from "./SectionHeader";
// Importing data with fallback to ensure component works standalone if needed
import {
  aboutText as importedText,
  aboutStats as importedStats,
} from "@/data/portfolio";

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

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 15 },
  },
};

const About = () => {
  return (
    <section id="about" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Ambience - Strict Blue/Yellow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="System Analysis"
          subtitle="Who is behind the code?"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mt-16"
        >
          {/* --- Left Column: Holographic Terminal --- */}
          <motion.div variants={cardVariants} className="h-full">
            <div className="h-full relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1121]/80 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_var(--color-primary)] group">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                {/* Custom Window Controls (Strict Theme: Blue/Yellow/Gray) */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/80 shadow-[0_0_8px_var(--color-primary)]" />
                  <div className="w-3 h-3 rounded-full bg-secondary/80 shadow-[0_0_8px_var(--color-secondary)]" />
                  <div className="w-3 h-3 rounded-full bg-slate-600/50" />
                </div>
                <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                  <Terminal size={12} className="text-primary" />
                  <span className="opacity-70">user@shadow-scripter:~</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-8 space-y-6 font-mono text-sm md:text-base leading-relaxed text-muted-foreground relative">
                {/* Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_50%)] bg-size-[100%_4px] opacity-10" />

                <p>
                  <span className="text-secondary mr-2 font-bold">➜</span>
                  <span className="text-blue-200">
                    {aboutText.p1.main}
                  </span>{" "}
                  <span className="text-secondary font-bold bg-secondary/10 px-1.5 py-0.5 rounded border border-secondary/20">
                    {aboutText.p1.age}
                  </span>
                  <span className="text-blue-200">, architecting</span>{" "}
                  <span className="text-primary font-bold decoration-wavy underline decoration-primary/50 underline-offset-4">
                    {aboutText.p1.highlight}
                  </span>{" "}
                  <span className="text-blue-200">{aboutText.p1.end}</span>
                </p>

                <p>
                  <span className="text-primary mr-2 font-bold">➜</span>
                  <span className="text-blue-200">
                    Currently an O-Levels student & Lead Developer Intern. My
                    sweet spot is
                  </span>{" "}
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-primary/10 text-primary font-bold border border-primary/20">
                    <Database size={12} /> Backend
                  </span>{" "}
                  <span className="text-blue-200">
                    — designing scalable APIs and managing databases — but I
                    execute with precision on the Frontend.
                  </span>
                </p>

                <p className="opacity-80 border-l-2 border-secondary/50 pl-4 italic text-secondary/90">
                  &quot;{aboutText.p3}&quot;
                </p>

                {/* Blinking Cursor */}
                <div className="mt-4 flex items-center">
                  <span className="text-secondary mr-2">➜</span>
                  <span className="w-2.5 h-5 bg-primary/80 animate-pulse block" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Right Column: High-Energy Bento Grid --- */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4 auto-rows-min"
          >
            {/* Card 1: Experience (Primary/Blue Theme) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-background/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl relative overflow-hidden group hover:border-primary/40 transition-colors"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300 ring-1 ring-primary/20">
                    <Code2 size={24} />
                  </div>
                  <span className="text-[10px] font-mono border border-primary/20 rounded px-2 py-0.5 text-primary bg-primary/5">
                    SYS_TIME
                  </span>
                </div>
                <div className="text-4xl font-black text-white tracking-tighter">
                  {aboutStats.experienceYears}
                </div>
                <div className="text-sm text-blue-200/60 mt-1 font-medium group-hover:text-primary transition-colors">
                  Years Experience
                </div>
              </div>
            </motion.div>

            {/* Card 2: Projects (Secondary/Yellow Theme) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-background/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl relative overflow-hidden group hover:border-secondary/40 transition-colors"
            >
              <div className="absolute inset-0 bg-linear-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary group-hover:scale-110 transition-transform duration-300 ring-1 ring-secondary/20">
                    <Layers size={24} />
                  </div>
                  <span className="text-[10px] font-mono border border-secondary/20 rounded px-2 py-0.5 text-secondary bg-secondary/5">
                    DEPLOYED
                  </span>
                </div>
                <div className="text-4xl font-black text-white tracking-tighter">
                  {aboutStats.projectsCompleted}
                </div>
                <div className="text-sm text-blue-200/60 mt-1 font-medium group-hover:text-secondary transition-colors">
                  Projects Shipped
                </div>
              </div>
            </motion.div>

            {/* Card 3: Full Stack (Gradient Theme) */}
            <motion.div
              variants={cardVariants}
              className="col-span-2 bg-background/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-colors"
            >
              {/* Dynamic Gradient Background on Hover */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-5 relative z-10">
                <div className="p-4 bg-white/5 rounded-2xl text-foreground group-hover:text-secondary transition-colors border border-white/5 shadow-inner">
                  <Cpu size={32} />
                </div>

                <div className="flex-1">
                  <div className="text-xl font-bold text-white flex items-center gap-2">
                    Full Stack Architect
                    <Zap
                      size={18}
                      className="text-secondary fill-secondary animate-pulse"
                    />
                  </div>
                  <div className="text-sm text-blue-200/60 mt-1 font-mono">
                    {aboutStats.stackSub}
                  </div>
                </div>

                {/* Tech Stack Indicators */}
                <div className="hidden sm:flex gap-1.5">
                  <div className="w-1.5 h-8 rounded-full bg-primary/40" />
                  <div className="w-1.5 h-8 rounded-full bg-primary/70" />
                  <div className="w-1.5 h-8 rounded-full bg-primary" />
                  <div className="w-1.5 h-8 rounded-full bg-secondary" />
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
