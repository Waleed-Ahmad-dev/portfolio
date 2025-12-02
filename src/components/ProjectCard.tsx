"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

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

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-300"
  >
    <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="p-6 relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="bg-cyan-950/30 text-cyan-400 px-3 py-1 rounded-full text-xs font-mono border border-cyan-900">
          {project.category}
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-100 mb-2 font-mono group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>

      <p className="text-slate-400 text-sm mb-6 grow font-inter leading-relaxed">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t: string) => (
          <span key={t} className="text-xs text-slate-500 font-mono">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
