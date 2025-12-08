/* eslint-disable react-hooks/static-components */
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Code,
  Layers,
  Database,
  Terminal,
} from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    tech: string[];
    desc: string;
    link: string | null;
    github: string | null;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  // Determine icon based on category for visual flavor
  // Maps specific keywords to Lucide Icons
  const getCategoryIcon = (cat: string) => {
    const lower = cat.toLowerCase();
    if (lower.includes("full")) return Layers;
    if (lower.includes("back")) return Database;
    if (lower.includes("system")) return Terminal;
    return Code;
  };

  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
      className="group relative flex flex-col h-full rounded-3xl transition-all duration-300"
    >
      {/* --- Animated Border Gradient (Blue -> Yellow) --- */}
      <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-primary via-blue-500 to-secondary opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

      {/* --- Main Card Content (Midnight Glass) --- */}
      <div className="relative h-full flex flex-col bg-[#0B1121]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl z-10 group-hover:border-white/5 transition-colors">
        {/* Ambient Inner Glow (Yellow Accent) */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* --- Card Header --- */}
        <div className="relative z-10 p-6 pb-2 flex justify-between items-start">
          {/* Category Badge */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors duration-300">
              <CategoryIcon
                size={18}
                className="text-primary group-hover:text-blue-100 transition-colors"
              />
            </div>
            <span className="text-[10px] font-mono font-bold text-blue-200/60 uppercase tracking-widest border border-white/5 px-2 py-1 rounded bg-black/40">
              {project.category}
            </span>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-blue-200/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="View Source Code"
              >
                <Github size={18} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-blue-200/60 hover:text-secondary hover:bg-secondary/10 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="View Live Project"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* --- Card Body --- */}
        <div className="relative z-10 p-6 grow flex flex-col">
          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-secondary transition-colors duration-300 flex items-center gap-2">
            {project.title}
            <ArrowUpRight
              size={18}
              className="text-secondary opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 stroke-[3px]"
            />
          </h3>

          {/* Description */}
          <p className="text-blue-200/60 text-sm leading-relaxed mb-8 grow line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {project.desc}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-auto pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
            {/* Tech Label */}
            <div className="text-[10px] font-mono text-blue-200/40 mb-3 uppercase flex items-center gap-2">
              <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              Tech Stack
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11px] font-medium font-mono rounded-md bg-white/5 border border-white/5 text-blue-200/60 group-hover:text-secondary group-hover:border-secondary/30 group-hover:bg-secondary/5 transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;