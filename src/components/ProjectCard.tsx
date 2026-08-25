import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ArrowUpRight,
  Code,
  Layers,
  Database,
  Terminal,
} from "lucide-react";
import { ProjectItem } from "@/data/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const renderCategoryIcon = (category: string) => {
  const lower = category.toLowerCase();
  const Icon = lower.includes("full")
    ? Layers
    : lower.includes("back")
    ? Database
    : lower.includes("system")
    ? Terminal
    : Code;
  return <Icon size={14} strokeWidth={2} />;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const techStack = Array.isArray(project.tech)
    ? project.tech
    : [project.tech];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: index * 0.05,
        duration: 0.4,
      }}
      className="group h-full"
    >
      <div className="flex flex-col h-full bg-card border border-zinc-300 dark:border-zinc-800 rounded-sm p-6 md:p-8 hover-tactile justify-between">
        {/* Card Header Bar */}
        <div>
          <div className="flex justify-between items-start pb-4 mb-6 border-b border-zinc-200 dark:border-zinc-800/80">
            {/* Category & Status */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="p-2 bg-foreground text-background rounded-xs">
                {renderCategoryIcon(project.category)}
              </div>
              <span className="badge-mono">{project.category}</span>
              {project.status && (
                <span className="badge-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                  {project.status.toUpperCase()}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-zinc-500 hover:text-foreground border border-zinc-200 dark:border-zinc-800 rounded-xs transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github size={15} />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-zinc-500 hover:text-foreground border border-zinc-200 dark:border-zinc-800 rounded-xs transition-colors"
                  aria-label="Live Demo"
                >
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>

          {/* Project Title & Description */}
          <h3 className="font-mono text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6 font-sans">
            {project.desc}
          </p>
        </div>

        {/* Tech Badges Footer */}
        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;