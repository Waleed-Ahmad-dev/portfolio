"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { experience } from "@/data/portfolio";

const Experience = () => {
  return (
    <section id="work" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute left-0 top-0 w-px h-full bg-linear-to-b from-transparent via-cyan-900 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Career Log"
          subtitle="Building systems, one role at a time."
        />

        <div className="relative mt-16 space-y-12">
          {/* Timeline Line - Glowing Circuit Effect */}
          <div className="absolute left-4 top-4 bottom-4 w-px bg-slate-800">
            <div className="absolute inset-0 bg-linear-to-b from-cyan-500/20 via-blue-500/20 to-transparent w-full" />
          </div>

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-12 md:pl-16 group"
            >
              {/* Timeline Node - Glowing Dot */}
              <div className="absolute left-0 top-1 w-9 h-9 bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center z-10 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                <Briefcase
                  size={14}
                  className="text-slate-400 group-hover:text-cyan-400 transition-colors"
                />
              </div>

              {/* Card Container */}
              <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 p-6 rounded-2xl hover:bg-slate-900/60 hover:border-cyan-500/30 transition-all duration-300">
                {/* Header: Role & Company */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 leading-tight group-hover:text-cyan-50 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-400 font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>

                  {/* Date Badge */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/50 px-3 py-1.5 rounded-full border border-slate-800/50">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                {/* Description List */}
                <ul className="space-y-3">
                  {/* Handling exp.desc as an array properly */}
                  {Array.isArray(exp.desc) ? (
                    exp.desc.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed group/item hover:text-slate-300 transition-colors"
                      >
                        <ChevronRight
                          size={16}
                          className="mt-0.5 shrink-0 text-slate-600 group-hover/item:text-cyan-500 transition-colors"
                        />
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    // Fallback if data is just a string
                    <p className="text-slate-400 text-sm">{exp.desc}</p>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;