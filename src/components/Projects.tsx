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

// --- Minimalist Animation Variants ---
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
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

// --- Helper to get icons for playground items ---
const getPlaygroundIcon = (type: string) => {
  const t = type.toLowerCase();
  const props = { size: 18, strokeWidth: 1.5 };

  if (t.includes("game")) return <Gamepad2 {...props} />;
  if (t.includes("saas") || t.includes("ui") || t.includes("component"))
    return <Layout {...props} />;
  if (t.includes("commerce")) return <ShoppingCart {...props} />;
  if (t.includes("tool") || t.includes("algo"))
    return <Calculator {...props} />;
  return <Cpu {...props} />;
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-12 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
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
            className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-24"
          >
            {featuredProjects.map((project: any, index: number) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </div>

        {/* --- Minimalist Divider --- */}
        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 mb-24" />

        {/* --- Playground Section --- */}
        <div className="space-y-16">
          {/* Minimal Terminal Header */}
          <div className="flex flex-col md:flex-row md:items-baseline gap-4">
            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white tracking-tight flex items-center gap-3">
              <Terminal size={24} strokeWidth={1.5} />
              <span className="font-mono">./playground</span>
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-mono border-l border-zinc-200 dark:border-zinc-800 pl-4">
              Experimental components and micro-interactions.
            </p>
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
                className="group relative flex flex-col h-full p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-none hover:-translate-y-1"
              >
                {/* Header: Icon & Name */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2 bg-white dark:bg-black rounded-md border border-zinc-200 dark:border-zinc-800 text-black dark:text-white group-hover:scale-105 transition-transform">
                    {getPlaygroundIcon(item.type)}
                  </div>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors"
                  />
                </div>

                {/* Name */}
                <h4 className="text-lg font-bold text-black dark:text-white mb-2 tracking-tight">
                  {item.name}
                </h4>

                {/* Description */}
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 grow leading-relaxed">
                  {item.desc}
                </p>

                {/* Footer: Type Badge */}
                <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] font-mono font-medium text-zinc-400 uppercase tracking-widest group-hover:text-black dark:group-hover:text-white transition-colors">
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