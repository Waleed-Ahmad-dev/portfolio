"use client";

import React from "react";
import { Code2, Layers, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { aboutText, aboutStats } from "@/data/portfolio"; // Adjust path as needed

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-slate-900/30 border-y border-slate-800/50"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* --- Text Content --- */}
        <div>
          <SectionHeader title="About Me" />
          <div className="space-y-4 text-slate-400 leading-relaxed font-inter">
            {/* Paragraph 1: Rich text with highlights */}
            <p>
              {aboutText.p1.main}{" "}
              <strong className="text-slate-200">{aboutText.p1.age}</strong>,
              completing{" "}
              <span className="text-cyan-400">{aboutText.p1.highlight}</span>{" "}
              {aboutText.p1.end}
            </p>

            {/* Paragraph 2 */}
            <p>
              Currently, I’m an O-Levels student and a Lead Developer intern. My
              sweet spot is the{" "}
              <strong className="text-slate-200">Backend</strong>
              —designing scalable APIs and managing databases—but I’m equally
              dangerous on the Frontend.
            </p>

            {/* Paragraph 3 */}
            <p>{aboutText.p3}</p>
          </div>
        </div>

        {/* --- Stats Grid --- */}
        <div className="grid grid-cols-2 gap-4">
          {/* Experience Card */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors group">
            <Code2
              className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform"
              size={32}
            />
            <div className="text-3xl font-bold text-slate-100 font-mono">
              {aboutStats.experienceYears}
            </div>
            <div className="text-sm text-slate-500">Years Experience</div>
          </div>

          {/* Projects Card (Dynamic Number) */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors group">
            <Layers
              className="text-blue-500 mb-3 group-hover:scale-110 transition-transform"
              size={32}
            />
            <div className="text-3xl font-bold text-slate-100 font-mono">
              {aboutStats.projectsCompleted}
            </div>
            <div className="text-sm text-slate-500">Projects Shipped</div>
          </div>

          {/* Capability Card */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 col-span-2 hover:border-yellow-500/30 transition-colors group">
            <Zap
              className="text-yellow-400 mb-3 group-hover:scale-110 transition-transform"
              size={32}
            />
            <div className="text-xl font-bold text-slate-100 font-mono">
              {aboutStats.stackStatus}
            </div>
            <div className="text-sm text-slate-500">{aboutStats.stackSub}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;