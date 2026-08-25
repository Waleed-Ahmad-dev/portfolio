"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import PlaygroundMatrix from "./PlaygroundMatrix";
import {
  featuredProjects as importedProjects,
  playground as importedPlayground,
  ProjectItem,
} from "@/data/portfolio";

const defaultFeatured: ProjectItem[] = [
  {
    title: "Premier Choice CMS",
    category: "Enterprise Architecture",
    status: "In Production",
    tech: ["Node.js", "React", "PostgreSQL", "Docker"],
    desc: "A monolithic content management system engineered for real estate asset management. Handles complex inventory logic, sales data, and automated workflows.",
    link: "https://cms.premierchoiceint.online",
    github: null,
  },
  {
    title: "SaleMate",
    category: "Retail Tech",
    status: "In Development",
    tech: ["Node.js", "TypeScript", "Prisma", "React Native"],
    desc: "A production-scale sales management app featuring real-time inventory and cross-platform sync.",
    link: null,
    github: null,
  },
];

const featuredProjects = importedProjects || defaultFeatured;
const playground = importedPlayground || [];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Featured Projects Section */}
        <div className="mb-24">
          <SectionHeader
            title="FEATURED_DEPLOYMENTS"
            subtitle="Enterprise backend systems, CMS platforms, and core microservices."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {featuredProjects.map((project: ProjectItem, index: number) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Playground Matrix Section */}
        <div className="pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <PlaygroundMatrix items={playground} />
        </div>
      </div>
    </section>
  );
};

export default Projects;