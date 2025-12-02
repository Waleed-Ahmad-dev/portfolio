"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, ArrowUpRight } from "lucide-react";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative flex flex-col h-full bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* --- Card Header --- */}
      <div className="relative z-10 p-6 pb-0 flex justify-between items-start">
        {/* Folder Icon / Category */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-cyan-500/30 group-hover:bg-cyan-950/20 transition-colors">
            <Folder size={20} className="text-cyan-500" />
          </div>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="View Source"
            >
              <Github size={20} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
              aria-label="View Live Project"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* --- Card Content --- */}
      <div className="relative z-10 p-6 grow flex flex-col">
        {/* Title with Arrow Interaction */}
        <h3 className="text-xl font-bold text-slate-100 mb-3 font-mono flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
          <ArrowUpRight
            size={16}
            className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
          />
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 grow">
          {project.desc}
        </p>

        {/* --- Card Footer: Tech Stack --- */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[11px] font-medium font-mono rounded-md bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-200/80 group-hover:border-cyan-500/20 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;