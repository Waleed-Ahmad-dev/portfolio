"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Gamepad2,
  Layout,
  Cpu,
  ShoppingCart,
  Calculator,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { featuredProjects, playground } from "@/data/portfolio";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

// --- Helper to get icons for playground items ---
const getPlaygroundIcon = (type: string) => {
  if (type.includes("Game")) return <Gamepad2 size={16} />;
  if (type.includes("SaaS") || type.includes("UI")) return <Layout size={16} />;
  if (type.includes("Commerce")) return <ShoppingCart size={16} />;
  if (type.includes("Tool") || type.includes("Utility"))
    return <Calculator size={16} />;
  return <Cpu size={16} />;
};

const Projects = () => {
  return (
    <section id="work" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* --- Featured Projects Section --- */}
        <div className="mb-24">
          <SectionHeader
            title="Featured Deployments"
            subtitle="Enterprise solutions & complex architectures."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* --- The Playground Divider --- */}
        <div className="relative mb-16">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-slate-800" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-slate-950 px-4 text-sm text-slate-500 font-mono flex items-center gap-2">
              <Sparkles size={14} className="text-cyan-500" />
              EXPERIMENTAL_ZONE
              <Sparkles size={14} className="text-cyan-500" />
            </span>
          </div>
        </div>

        {/* --- Playground Section --- */}
        <div className="space-y-8">
          {/* Terminal-style Header */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
              <Terminal className="text-cyan-500" size={20} />
            </div>
            <h3 className="text-2xl font-mono font-bold text-slate-200 tracking-tight">
              <span className="text-cyan-500 mr-2">$</span>
              ls ./playground
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {playground.map((item, i) => (
              <motion.a
                key={i}
                variants={itemVariants}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group relative p-4 bg-slate-900/40 border border-slate-800 rounded-xl hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* Header: Icon & Name */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2 text-slate-300 group-hover:text-cyan-400 transition-colors font-bold text-sm">
                    {getPlaygroundIcon(item.type)}
                    {item.name}
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-slate-600 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 mb-3 line-clamp-2 grow">
                  {item.desc}
                </p>

                {/* Footer: Tech Badge */}
                <div className="mt-auto pt-3 border-t border-slate-800/50 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-cyan-500/80 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-900/50">
                    {item.type}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;