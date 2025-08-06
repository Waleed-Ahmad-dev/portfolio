"use client";
import { motion } from 'framer-motion';

export const ContentSection = () => {
     return (
          <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.7, delay: 0.3 }}
          >
               <motion.h3 
                    className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E63] to-[#08D9D6]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
               >
                    Engineering Digital Solutions
               </motion.h3>

               <motion.div 
                    className="space-y-6 mb-10 text-[#EAEAEA]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
               >
                    <motion.p 
                         className="text-lg leading-relaxed"
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.6 }}
                    >
                         I'm <span className="font-bold text-white">Waleed Ahmad</span> a passionate backend-focused full-stack developer dedicated to building performant, scalable digital systems. I specialize in architecting robust server-side solutions and seamless frontend integrations that deliver excellent user experiences.
                    </motion.p>
                    <motion.p 
                         className="text-lg leading-relaxed"
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.7 }}
                    >
                         With hands-on experience deploying full-stack applications to production and a strong command over modern web technologies like <span className="text-[#61DAFB] font-medium">Node.js, Express, Next.js,</span> and <span className="text-[#8CC84B] font-medium">Django</span>, I bring a functional-first approach to clean, maintainable code. My journey includes impactful contributions during my internship, and I'm continually expanding my skillset by learning <span className="text-[#8CC84B] font-medium">GoLang, Machine Learning,</span> and <span className="text-[#8CC84B] font-medium">AI integrations</span>.
                    </motion.p>
                    <motion.p 
                         className="text-lg leading-relaxed"
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.8 }}
                    >
                         Whether it's optimizing APIs, scaling databases, or exploring the future of generative AI, I bring curiosity, precision, and a problem-solving mindset to every project.
                    </motion.p>
               </motion.div>
          </motion.div>
     );
};