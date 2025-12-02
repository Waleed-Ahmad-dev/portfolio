/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Code2,
  Database,
  Cpu,
  ExternalLink,
  Github,
  Mail,
  ChevronDown,
  Layers,
  Zap,
  LayoutTemplate,
} from "lucide-react";

// --- DATA ---

const experience = [
  {
    company: "Premier Choice International",
    role: "Full Stack Intern",
    period: "Oct 2025 – Present",
    desc: "Leading development of a proprietary CMS (Node.js/React/PostgreSQL) and internal tooling for enterprise real estate asset management.",
  },
  {
    company: "Firefly Tech Solutions",
    role: "Software Development Intern",
    period: "Jan 2025 – June 2025",
    desc: "Focused on web application debugging, feature implementation, and optimization of legacy codebases.",
  },
  {
    company: "The Odin Project",
    role: "Self-Taught Developer",
    period: "2023",
    desc: "Completed rigorous full-stack curriculum at age 14 while balancing O-Levels, building the foundation for professional work.",
  },
];

const featuredProjects = [
  {
    title: "Premier Choice CMS",
    cat: "Enterprise System",
    tech: ["Node.js", "React", "PostgreSQL"],
    desc: "A custom real estate asset management system built to handle complex data relationships and automated workflows.",
    link: "https://cms.premierchoiceint.online",
    github: null,
  },
  {
    title: "Quranic Transformation",
    cat: "LMS Platform",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    desc: "A holistic learning management system designed for religious education with progress tracking and multimedia support.",
    link: "https://quranic-transformation.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/Quranic-Transformation",
  },
  {
    title: "AI Attorney",
    cat: "Mobile Backend",
    tech: ["Node.js", "Express", "AI Integration"],
    desc: "Secure backend infrastructure for an AI-powered legal assistance mobile application.",
    link: "https://www.aiattorney.com.pk/",
    github: null,
  },
  {
    title: "Writer's Haven",
    cat: "Productivity Tool",
    tech: ["Next.js", "Tailwind", "Local Storage"],
    desc: "A specialized writing environment for authors to draft books and poems with distraction-free UI.",
    link: "https://notes-app-six-green.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/notes_app",
  },
];

const playground = [
  {
    name: "Xora",
    type: "SaaS UI Demo",
    link: "https://xora-shadow-scripter.netlify.app/",
  },
  {
    name: "Yoom",
    type: "Video Conf UI",
    link: "https://yoom-eight-eta.vercel.app",
  },
  {
    name: "Shadow Cart",
    type: "E-commerce Logic",
    link: "https://shadow-store-ten.vercel.app",
  },
  {
    name: "The Arcade",
    type: "Game Collection",
    link: "https://waleed-ahmad-dev.github.io/Whack-a-Mole/",
  },
];

const skills = {
  frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Three.js",
    "Framer Motion",
  ],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Prisma"],
  tools: ["Docker", "AWS", "Git", "Linux (Arch/Ubuntu)", "GitHub Actions"],
};

// --- COMPONENTS ---

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-mono font-bold text-slate-100 flex items-center gap-3"
    >
      <span className="text-cyan-400">#</span> {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-slate-400 mt-2 font-inter max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
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
          {project.cat}
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

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-inter selection:bg-cyan-900 selection:text-white overflow-x-hidden">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-lg text-slate-100 tracking-tighter">
            <span className="text-cyan-400">&lt;</span>
            Shadow_Scripter
            <span className="text-cyan-400">/&gt;</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-mono text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              _about
            </a>
            <a href="#work" className="hover:text-cyan-400 transition-colors">
              _work
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              _stack
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors"
            >
              _contact
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
        {/* Background Glows */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-sm font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            System Online: Waleed Ahmad
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight mb-6 font-mono">
            Code in the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
              Shadows.
            </span>
            <br />
            Brilliance on the Screen.
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
            I&apos;m a{" "}
            <span className="text-slate-200 font-semibold">
              16-year-old Full-Stack Architect
            </span>{" "}
            building enterprise-grade systems while others are still learning
            the basics. O-Levels Student by day, Lead Developer by night.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-md transition-colors flex items-center gap-2"
            >
              <Terminal size={18} />
              View Projects
            </a>
            <a
              href="https://github.com/Waleed-Ahmad-dev"
              target="_blank"
              className="px-6 py-3 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 rounded-md transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs font-mono">Scroll to initialize</span>
          <ChevronDown className="animate-bounce" size={16} />
        </motion.div>
      </section>

      {/* --- ABOUT & STATS --- */}
      <section
        id="about"
        className="py-20 px-6 bg-slate-900/30 border-y border-slate-800/50"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader title="About Me" />
            <div className="space-y-4 text-slate-400 leading-relaxed font-inter">
              <p>
                I started coding seriously at{" "}
                <strong className="text-slate-200">14</strong>, completing{" "}
                <span className="text-cyan-400">The Odin Project</span> while
                balancing school. Now, at 16, I’m not just writing code; I’m
                shipping products.
              </p>
              <p>
                Currently, I’m an O-Levels student and a Lead Developer intern.
                My sweet spot is the{" "}
                <strong className="text-slate-200">Backend</strong>—designing
                scalable APIs and managing databases—but I’m equally dangerous
                on the Frontend.
              </p>
              <p>
                Whether it’s building a custom CMS for a real estate giant or
                developing an LMS, I build software that solves real problems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <Code2 className="text-cyan-400 mb-3" size={32} />
              <div className="text-3xl font-bold text-slate-100 font-mono">
                2+
              </div>
              <div className="text-sm text-slate-500">Years Experience</div>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <Layers className="text-blue-500 mb-3" size={32} />
              <div className="text-3xl font-bold text-slate-100 font-mono">
                15+
              </div>
              <div className="text-sm text-slate-500">Projects Shipped</div>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 col-span-2">
              <Zap className="text-yellow-400 mb-3" size={32} />
              <div className="text-xl font-bold text-slate-100 font-mono">
                Full Stack Capable
              </div>
              <div className="text-sm text-slate-500">
                From DB Design to UI Animations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WORK EXPERIENCE --- */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey so far."
        />

        <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-cyan-500 ring-4 ring-slate-950" />

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                <span className="text-cyan-400 font-mono text-sm">
                  @ {exp.company}
                </span>
              </div>

              <span className="inline-block px-2 py-1 bg-slate-900 border border-slate-800 text-xs text-slate-500 rounded mb-4 font-mono">
                {exp.period}
              </span>

              <p className="text-slate-400 max-w-2xl">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SKILLS --- */}
      <section id="skills" className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Technical Arsenal" />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-950 p-6 rounded-xl border border-slate-800 border-t-4 border-t-cyan-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <LayoutTemplate className="text-cyan-500" />
                <h3 className="text-lg font-bold font-mono">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-900 text-slate-400 text-sm rounded border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-950 p-6 rounded-xl border border-slate-800 border-t-4 border-t-blue-600"
            >
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-blue-600" />
                <h3 className="text-lg font-bold font-mono">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-900 text-slate-400 text-sm rounded border border-slate-800 hover:text-blue-400 hover:border-blue-600/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* DevOps */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-950 p-6 rounded-xl border border-slate-800 border-t-4 border-t-purple-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-purple-500" />
                <h3 className="text-lg font-bold font-mono">DevOps & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-900 text-slate-400 text-sm rounded border border-slate-800 hover:text-purple-400 hover:border-purple-500/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
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

      {/* --- FOOTER / CONTACT --- */}
      <footer
        id="contact"
        className="py-20 px-6 bg-slate-950 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-t from-blue-900/10 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold font-mono text-slate-100 mb-6">
            Ready to initiate?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Whether you have an enterprise idea or need a backend architect, my
            terminal is open.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="mailto:itswaleedqureshi@gmail.com"
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)]"
            >
              <Mail size={20} />
              itswaleedqureshi@gmail.com
            </a>
            <a
              href="https://github.com/Waleed-Ahmad-dev"
              target="_blank"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Github size={20} />
              github.com/Waleed-Ahmad-dev
            </a>
          </div>

          <div className="pt-8 border-t border-slate-800 text-slate-600 text-sm font-mono flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              &copy; {new Date().getFullYear()} Waleed Ahmad. All systems
              nominal.
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Remote Ready: Pakistan
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}