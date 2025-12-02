"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Layers, Zap, Terminal, Cpu } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { aboutText, aboutStats } from "@/data/portfolio"; // Adjust path

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
    transition: { type: "spring", stiffness: 50 },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden bg-slate-950/50"
    >
      {/* Background Decor - Subtle Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-900/50 to-transparent" />
      <div className="absolute -top-[200px] -right-[200px] w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader title="System Status" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mt-12"
        >
          {/* --- Left Column: Narrative --- */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm group hover:border-slate-700 transition-colors">
              {/* Decorative Terminal Dots */}
              <div className="flex gap-2 mb-4 opacity-50">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>

              <div className="space-y-4 text-slate-400 leading-relaxed font-inter text-lg">
                <p>
                  {aboutText.p1.main}{" "}
                  <span className="text-slate-100 font-semibold border-b border-cyan-500/30">
                    {aboutText.p1.age}
                  </span>
                  , completing{" "}
                  <span className="text-cyan-400 font-medium">
                    {aboutText.p1.highlight}
                  </span>{" "}
                  {aboutText.p1.end}
                </p>

                <p>
                  Currently, I’m an O-Levels student and a Lead Developer
                  intern. My sweet spot is the{" "}
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-sm font-mono border border-blue-500/20">
                    <Terminal size={12} /> Backend
                  </span>{" "}
                  —designing scalable APIs and managing databases—but I’m
                  equally dangerous on the Frontend.
                </p>

                <p className="text-slate-400/90">{aboutText.p3}</p>
              </div>
            </div>

            {/* Quote / Tagline Area */}
            <div className="flex items-center gap-4 text-sm text-slate-500 font-mono pl-2">
              <span className="w-12 h-px bg-slate-800" />
              <span>{aboutStats.stackStatus}</span>
            </div>
          </motion.div>

          {/* --- Right Column: Stats Bento Grid --- */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {/* Card 1: Experience */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-linear-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors shadow-lg hover:shadow-cyan-500/10 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  <Code2 size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                  SYS_TIME
                </span>
              </div>
              <div className="text-4xl font-bold text-slate-100 font-mono tracking-tighter">
                {aboutStats.experienceYears}
              </div>
              <div className="text-sm text-slate-400 mt-1 font-medium">
                Years Experience
              </div>
            </motion.div>

            {/* Card 2: Projects */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-linear-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 group-hover:bg-blue-500/20 transition-colors">
                  <Layers size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 group-hover:text-blue-400 transition-colors">
                  DEPLOYED
                </span>
              </div>
              <div className="text-4xl font-bold text-slate-100 font-mono tracking-tighter">
                {aboutStats.projectsCompleted}
              </div>
              <div className="text-sm text-slate-400 mt-1 font-medium">
                Projects Shipped
              </div>
            </motion.div>

            {/* Card 3: Stack Capability (Full Width) */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="col-span-2 bg-linear-to-r from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-colors group relative overflow-hidden"
            >
              {/* Background gradient splash */}
              <div className="absolute right-0 top-0 w-32 h-full bg-linear-to-l from-purple-500/5 to-transparent" />

              <div className="flex items-center gap-4 relative z-10">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                  <Cpu size={28} />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-100">
                    Full Stack Architect
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {aboutStats.stackSub}
                  </div>
                </div>
                <Zap
                  className="ml-auto text-slate-700 group-hover:text-yellow-400 transition-colors"
                  size={20}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
