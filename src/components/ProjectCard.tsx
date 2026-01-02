/* eslint-disable react-hooks/static-components */
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
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
  // Determine icon based on category
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className="group h-full"
    >
      <div className="flex flex-col h-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 md:p-8 transition-all duration-300 hover:border-black dark:hover:border-white hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-none focus-within:border-black dark:focus-within:border-white focus-within:shadow-lg focus-within:shadow-zinc-200/50 dark:focus-within:shadow-none">
        {/* --- Card Header --- */}
        <div className="flex justify-between items-start mb-8">
          {/* Category Badge */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-md text-black dark:text-white">
              <CategoryIcon size={16} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
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
                className="text-zinc-400 hover:text-black dark:hover:text-white focus:text-black dark:focus:text-white transition-colors duration-200"
                aria-label="View Source Code (opens in new tab)"
              >
                <Github size={18} strokeWidth={1.5} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-black dark:hover:text-white focus:text-black dark:focus:text-white transition-colors duration-200"
                aria-label="View Live Project (opens in new tab)"
              >
                <ExternalLink size={18} strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>

        {/* --- Card Body --- */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-3 tracking-tight">
            {project.title}
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
            {project.desc}
          </p>

          {/* Tech Stack */}
          <div className="pt-6 border-t border-zinc-100 dark:border-zinc-900 mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-[10px] font-mono border border-zinc-200 dark:border-zinc-800 rounded text-zinc-500 dark:text-zinc-400 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 transition-colors duration-300"
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