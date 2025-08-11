'use client';

import { projects } from "./projects/data";
import { BackgroundDecorations } from "./projects/Decorations";
import { ProjectCard } from "./projects/ProjectCard";
import { SectionHeader } from "./projects/SectionHeader";


export const ProjectsSection = () => (
     <section id="projects" className="relative py-24 overflow-hidden">
          <BackgroundDecorations />

          <div className="container mx-auto px-4 relative z-10">
               <SectionHeader
                    badgeText="My Work"
                    title={<>Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span></>}
                    description="A curated selection of my latest work showcasing modern design principles, clean code, and user-focused experiences."
               />

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                         <ProjectCard key={index} project={project} index={index} />
                    ))}
               </div>
          </div>
     </section>
);