"use client";

import React from "react";
import { Code2, Layers, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
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
              Currently, I’m an O-Levels student and a Lead Developer intern. My
              sweet spot is the{" "}
              <strong className="text-slate-200">Backend</strong>—designing
              scalable APIs and managing databases—but I’m equally dangerous on
              the Frontend.
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
  );
};

export default About;
