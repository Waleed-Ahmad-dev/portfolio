"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutTemplate, Database, Cpu } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { skills } from "../data/portfolio";

const Skills = () => {
  return (
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
  );
};

export default Skills;
