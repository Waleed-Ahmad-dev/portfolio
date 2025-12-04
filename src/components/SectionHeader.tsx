"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, className }: SectionHeaderProps) => {
  return (
    <div className={`mb-16 relative ${className}`}>
      {/* Container for Animation Staggering */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Title Row */}
        <div className="flex items-center gap-4 mb-4">
          {/* Decorative Icon - Electric Spark */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: -180 },
              visible: { opacity: 1, scale: 1, rotate: 0 },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary relative overflow-hidden group shadow-[0_0_15px_-5px_var(--color-primary)]"
          >
            <div className="absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Sparkles size={24} className="relative z-10" />
          </motion.div>

          {/* Main Title */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl md:text-5xl font-black text-foreground tracking-tighter"
          >
            {title}
            {/* The 'Electric Dot' Accent */}
            <span className="text-secondary inline-block animate-pulse">.</span>
          </motion.h2>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-muted-foreground font-medium text-lg md:text-xl max-w-2xl ml-[60px] leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Animated Gradient Divider */}
        <div className="relative mt-8 ml-2 overflow-hidden">
          <motion.div
            className="h-[2px] w-full bg-linear-to-r from-primary via-purple-500 to-transparent origin-left"
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: {
                scaleX: 1,
                opacity: 1,
                transition: { duration: 1.2, ease: "circOut", delay: 0.2 },
              },
            }}
          />
          {/* Glowing Head of the line */}
          <motion.div
            className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-1 bg-primary blur-sm"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 0.6,
                x: 0,
                transition: { duration: 1.2, delay: 0.2 },
              },
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionHeader;