/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Terminal,
  Gamepad2,
  Layout,
  Cpu,
  ShoppingCart,
  Calculator,
  ArrowUpRight,
  FlaskConical,
  Zap,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
// Import data with fallbacks
import {
  featuredProjects as importedProjects,
  playground as importedPlayground,
} from "@/data/portfolio";

// --- Fallback Data ---
const defaultFeatured = [
  {
    title: "Project Nexus",
    category: "Full Stack System",
    tech: ["Next.js 16", "PostgreSQL", "Redis"],
    desc: "A high-performance dashboard for managing IoT device clusters with real-time analytics.",
    link: "#",
    github: "#",
  },
  {
    title: "Neon Commerce",
    category: "E-Commerce",
    tech: ["Shopify", "React", "Tailwind"],
    desc: "Headless e-commerce storefront with fluid page transitions and optimized checkout flow.",
    link: "#",
    github: "#",
  },
];

const defaultPlayground = [
  {
    name: "Glassmorphism UI",
    type: "UI Component",
    link: "#",
    desc: "Experimental glass card effects.",
  },
  {
    name: "Pixel Physics",
    type: "Game Engine",
    link: "#",
    desc: "Canvas-based physics simulation.",
  },
  {
    name: "Sort Visualizer",
    type: "Algorithm",
    link: "#",
    desc: "Visualizing bubble sort in real-time.",
  },
  {
    name: "CSS Art",
    type: "Design",
    link: "#",
    desc: "Pure CSS character illustration.",
  },
];

const featuredProjects = importedProjects || defaultFeatured;
const playground = importedPlayground || defaultPlayground;

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, type: "spring", stiffness: 50 },
  },
};

// --- Helper to get icons for playground items ---
const getPlaygroundIcon = (type: string) => {
  const t = type.toLowerCase();
  if (t.includes("game")) return <Gamepad2 size={18} />;
  if (t.includes("saas") || t.includes("ui") || t.includes("component"))
    return <Layout size={18} />;
  if (t.includes("commerce")) return <ShoppingCart size={18} />;
  if (t.includes("tool") || t.includes("algo")) return <Calculator size={18} />;
  return <Cpu size={18} />;
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-4 md:px-8 relative overflow-hidden"
    >
      {/* --- Ambient Background (Blue Vibe) --- */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Featured Projects Section --- */}
        <div className="mb-32">
          <SectionHeader
            title="Featured Deployments"
            subtitle="Enterprise solutions & complex system architectures."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-20"
          >
            {featuredProjects.map((project: any, index: number) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </div>

        {/* --- The "Laser" Divider (Yellow Beam) --- */}
        <div className="relative mb-24">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full h-px bg-linear-to-r from-transparent via-secondary/50 to-transparent shadow-[0_0_10px_var(--color-secondary)]" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0B1121] px-6 py-1.5 text-xs font-bold font-mono text-secondary flex items-center gap-3 border border-secondary/30 rounded-full shadow-[0_0_20px_rgba(var(--secondary),0.15)]">
              <Zap size={14} className="fill-secondary animate-pulse" />
              EXPERIMENTAL_ZONE
              <FlaskConical size={14} className="text-blue-400" />
            </span>
          </div>
        </div>

        {/* --- Playground Section --- */}
        <div className="space-y-12">
          {/* Terminal-style Header */}
          <div className="flex items-center gap-4 pl-4 border-l-2 border-primary/50">
            <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
              <Terminal className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-mono font-bold text-white tracking-tight flex items-center gap-3">
              <span className="text-primary select-none">$</span>
              ls ./playground
              <span className="w-2.5 h-6 bg-secondary animate-pulse ml-1 shadow-[0_0_10px_var(--color-secondary)]" />
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {playground.map((item: any, i: number) => (
              <motion.a
                key={i}
                variants={itemVariants}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group relative glass-panel p-6 rounded-3xl border-white/5 bg-[#0B1121]/60 hover:border-secondary/40 transition-all duration-300 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(var(--secondary),0.15)]"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

                {/* Header: Icon & Name */}
                <div className="relative z-10 flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3 text-blue-200/70 group-hover:text-white transition-colors font-bold text-sm">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 group-hover:bg-secondary/10 group-hover:border-secondary/20 transition-colors">
                      <span className="text-blue-300 group-hover:text-secondary transition-colors">
                        {getPlaygroundIcon(item.type)}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-blue-200/30 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 group-hover:text-secondary"
                  />
                </div>

                {/* Name */}
                <h4 className="relative z-10 text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  {item.name}
                </h4>

                {/* Description */}
                <p className="relative z-10 text-xs text-blue-200/50 mb-6 line-clamp-2 grow font-medium leading-relaxed">
                  {item.desc}
                </p>

                {/* Footer: Tech Badge */}
                <div className="relative z-10 mt-auto pt-4 border-t border-white/5 flex justify-between items-center group-hover:border-white/10">
                  <span className="text-[10px] font-mono font-bold text-secondary bg-secondary/5 px-2.5 py-1 rounded-md border border-secondary/10 group-hover:bg-secondary/10 transition-colors uppercase tracking-wider">
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