"use client";
import { motion } from 'framer-motion';

// Pre-calculate animation delays to avoid runtime calculations
const ANIMATION_DELAYS = {
     container: 0.3,
     h3: 0.4,
     div: 0.5,
     p: [0.6, 0.7, 0.8]
};

// Single variant definition for all children elements
const childVariants = {
     hidden: { opacity: 0, y: 10 },
     visible: { opacity: 1, y: 0 }
};

export const ContentSection = () => {
     return (
          <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.7, delay: ANIMATION_DELAYS.container }}
          >
               {/* Header with optimized animation */}
               <motion.h3 
                    className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E63] to-[#08D9D6]"
                    variants={childVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: ANIMATION_DELAYS.h3 }}
               >
                    Engineering Digital Solutions
               </motion.h3>

               {/* Container div with single animation */}
               <div className="space-y-6 mb-10 text-[#EAEAEA]">
                    {/* Paragraphs with optimized staggered animations */}
                    <motion.p 
                         className="text-lg leading-relaxed"
                         variants={childVariants}
                         initial="hidden"
                         animate="visible"
                         transition={{ delay: ANIMATION_DELAYS.p[0] }}
                    >
                         I'm <span className="font-bold text-white">Waleed Ahmad</span> a passionate backend-focused full-stack developer dedicated to building performant, scalable digital systems. I specialize in architecting robust server-side solutions and seamless frontend integrations that deliver excellent user experiences.
                    </motion.p>

                    <motion.p 
                         className="text-lg leading-relaxed"
                         variants={childVariants}
                         initial="hidden"
                         animate="visible"
                         transition={{ delay: ANIMATION_DELAYS.p[1] }}
                    >
                         With hands-on experience deploying full-stack applications to production and a strong command over modern web technologies like <span className="text-[#61DAFB] font-medium">Node.js, Express, Next.js,</span> and <span className="text-[#8CC84B] font-medium">Django</span>, I bring a functional-first approach to clean, maintainable code. My journey includes impactful contributions during my internship, and I'm continually expanding my skillset by learning <span className="text-[#8CC84B] font-medium">GoLang, Machine Learning,</span> and <span className="text-[#8CC84B] font-medium">AI integrations</span>.
                    </motion.p>

                    <motion.p 
                         className="text-lg leading-relaxed"
                         variants={childVariants}
                         initial="hidden"
                         animate="visible"
                         transition={{ delay: ANIMATION_DELAYS.p[2] }}
                    >
                         Whether it's optimizing APIs, scaling databases, or exploring the future of generative AI, I bring curiosity, precision, and a problem-solving mindset to every project.
                    </motion.p>
               </div>
          </motion.div>
     );
};