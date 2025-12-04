"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Code,
  Layers,
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
  // Determine icon based on category (just for extra flavor)
  const CategoryIcon = project.category.toLowerCase().includes("full")
    ? Layers
    : Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
      className="group relative flex flex-col h-full rounded-3xl transition-all duration-300"
    >
      {/* --- Animated Border Gradient (The "Electric" Edge) --- */}
      <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-primary via-purple-500 to-secondary opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

      {/* --- Main Card Content (Glassmorphism) --- */}
      <div className="relative h-full flex flex-col bg-background/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl z-10 group-hover:border-transparent transition-colors">
        {/* Ambient Inner Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* --- Card Header --- */}
        <div className="relative z-10 p-6 pb-2 flex justify-between items-start">
          {/* Category Badge */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-300">
              <CategoryIcon
                size={18}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </div>
            <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest border border-white/5 px-2 py-1 rounded bg-black/20">
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
                className="p-2 text-muted-foreground hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
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
                className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300 hover:scale-110"
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
          <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors flex items-center gap-2">
            {project.title}
            <ArrowUpRight
              size={18}
              className="text-secondary opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
            />
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 grow line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {project.desc}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-auto pt-4 border-t border-white/5">
            {/* Tech Label */}
            <div className="text-[10px] font-mono text-muted-foreground/50 mb-2 uppercase">
              Tech Stack
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11px] font-medium font-mono rounded-md bg-white/5 border border-white/5 text-muted-foreground group-hover:text-foreground group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300 hover:scale-105 cursor-default"
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