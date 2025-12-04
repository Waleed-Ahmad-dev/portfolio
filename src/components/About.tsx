"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Code2, Layers, Zap, Terminal, Cpu, Activity } from "lucide-react";
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
    <section id="about" className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

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
            <div className="h-full relative overflow-hidden rounded-3xl border border-white/5 bg-background/40 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_var(--color-primary)] group">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary/80 shadow-[0_0_8px_var(--color-secondary)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                  <Terminal size={12} />
                  <span>user@shadow-scripter:~</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-8 space-y-6 font-mono text-sm md:text-base leading-relaxed text-muted-foreground relative">
                {/* Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] opacity-20" />

                <p>
                  <span className="text-primary mr-2">➜</span>
                  {aboutText.p1.main}{" "}
                  <span className="text-foreground font-bold bg-primary/10 px-1 rounded">
                    {aboutText.p1.age}
                  </span>
                  , architecting{" "}
                  <span className="text-primary font-bold shadow-[0_0_10px_var(--color-primary)] shadow-primary/20">
                    {aboutText.p1.highlight}
                  </span>{" "}
                  {aboutText.p1.end}
                </p>

                <p>
                  <span className="text-secondary mr-2">➜</span>
                  Currently an O-Levels student & Lead Developer Intern. My
                  sweet spot is{" "}
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-secondary/10 text-secondary font-bold border border-secondary/20">
                    <Activity size={12} /> Backend
                  </span>{" "}
                  — designing scalable APIs and managing databases — but I
                  execute with precision on the Frontend.
                </p>

                <p className="opacity-80 border-l-2 border-white/10 pl-4 italic">
                  &quot;{aboutText.p3}&quot;
                </p>

                {/* Blinking Cursor */}
                <div className="mt-4">
                  <span className="text-primary">➜</span>{" "}
                  <span className="inline-block w-2.5 h-5 bg-primary/50 animate-pulse align-middle ml-1" />
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
              className="glass-panel p-6 rounded-3xl relative overflow-hidden group border-primary/20"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                    <Code2 size={24} />
                  </div>
                  <span className="text-[10px] font-mono border border-primary/20 rounded px-2 py-0.5 text-primary/70">
                    SYS_TIME
                  </span>
                </div>
                <div className="text-4xl font-black text-foreground tracking-tighter">
                  {aboutStats.experienceYears}
                </div>
                <div className="text-sm text-muted-foreground mt-1 font-medium group-hover:text-primary transition-colors">
                  Years Experience
                </div>
              </div>
            </motion.div>

            {/* Card 2: Projects (Secondary/Red Theme) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-panel p-6 rounded-3xl relative overflow-hidden group border-secondary/20"
            >
              <div className="absolute inset-0 bg-linear-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary group-hover:scale-110 transition-transform duration-300">
                    <Layers size={24} />
                  </div>
                  <span className="text-[10px] font-mono border border-secondary/20 rounded px-2 py-0.5 text-secondary/70">
                    DEPLOYED
                  </span>
                </div>
                <div className="text-4xl font-black text-foreground tracking-tighter">
                  {aboutStats.projectsCompleted}
                </div>
                <div className="text-sm text-muted-foreground mt-1 font-medium group-hover:text-secondary transition-colors">
                  Projects Shipped
                </div>
              </div>
            </motion.div>

            {/* Card 3: Full Stack (Gradient Theme) */}
            <motion.div
              variants={cardVariants}
              className="col-span-2 glass-panel p-6 rounded-3xl relative overflow-hidden group border-white/10"
            >
              {/* Dynamic Gradient Background on Hover */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-5 relative z-10">
                <div className="p-4 bg-white/5 rounded-2xl text-foreground group-hover:text-primary transition-colors border border-white/5">
                  <Cpu size={32} />
                </div>

                <div className="flex-1">
                  <div className="text-xl font-bold text-foreground flex items-center gap-2">
                    Full Stack Architect
                    <Zap
                      size={16}
                      className="text-yellow-400 fill-yellow-400 animate-pulse"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 font-mono">
                    {aboutStats.stackSub}
                  </div>
                </div>

                <div className="hidden sm:block">
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-6 rounded-full ${
                          i === 3 ? "bg-secondary" : "bg-primary"
                        } opacity-${i * 30}`}
                      />
                    ))}
                  </div>
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