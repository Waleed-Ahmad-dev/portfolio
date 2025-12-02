"use client";

import React from "react";
import { Terminal, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { featuredProjects, playground } from "../data/portfolio";

const Projects = () => {
  return (
    <section id="work" className="py-20 px-6 max-w-6xl mx-auto">
      <SectionHeader
        title="Featured Deployments"
        subtitle="Enterprise solutions and complex applications."
      />

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* The Playground */}
      <div className="border-t border-slate-800 pt-16">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="text-slate-500" />
          <h3 className="text-2xl font-mono font-bold text-slate-200">
            The Playground
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {playground.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="group block p-4 bg-slate-900/30 border border-slate-800 rounded-lg hover:bg-slate-800/50 transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">
                  {item.name}
                </div>
                <ExternalLink
                  size={14}
                  className="text-slate-600 group-hover:text-cyan-400"
                />
              </div>
              <div className="text-xs text-slate-500 font-mono">
                {item.type}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
