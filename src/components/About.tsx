"use client";
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Cpu } from 'lucide-react';
import Image from 'next/image';
import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTypescript } from 'react-icons/si';

const techStack = [
     { name: 'HTML5', color: 'bg-[#FF2E63]', textColor: 'text-white', shadow: 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]', icon: <SiHtml5 className="text-white" /> },
     { name: 'CSS3', color: 'bg-[#08D9D6]', textColor: 'text-black', shadow: 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]', icon: <SiCss3 className="text-black" /> },
     { name: 'JavaScript', color: 'bg-[#FFD166]', textColor: 'text-[#333]', shadow: '', icon: <SiJavascript className="text-[#333]" /> },
     { name: 'TypeScript', color: 'bg-[#6A67CE]', textColor: 'text-white', shadow: 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]', icon: <SiTypescript className="text-white" /> },
     { name: 'React', color: 'bg-[#61DAFB]', textColor: 'text-[#333]', shadow: '', icon: <SiReact className="text-[#333]" /> },
     { name: 'Next.js', color: 'bg-gradient-to-r from-[#000000] to-[#8A2BE2]', textColor: 'text-white', shadow: 'drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]', icon: <SiNextdotjs className="text-white" /> },
     { name: 'Node.js', color: 'bg-[#8CC84B]', textColor: 'text-white', shadow: 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]', icon: <SiNodedotjs className="text-white" /> },
     { name: 'Python', color: 'bg-[#3776AB]', textColor: 'text-white', shadow: 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]', icon: <SiPython className="text-white" /> },
];

const About = () => {
     return (
          <section id="about" className="py-20 bg-gradient-to-br from-[#0A0E17] via-[#0C1120] to-[#0A0E17]">
               <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: "-100px" }}
                         transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                         className="text-center mb-16"
                    >
                         <motion.h2 
                              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF2E63] to-[#08D9D6]"
                              whileHover={{ 
                                   scale: 1.03,
                                   textShadow: "0 0 15px rgba(255, 46, 99, 0.5)"
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                         >
                              Crafting Digital Excellence
                         </motion.h2>
                         <motion.div 
                              className="w-32 h-1.5 bg-gradient-to-r from-[#FF2E63] to-[#08D9D6] mx-auto rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: "8rem" }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3, duration: 0.8 }}
                         />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                         <motion.div
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.7, delay: 0.2 }}
                              className="flex justify-center"
                         >
                              <div className="relative group">
                                   <motion.div 
                                        className="absolute -inset-3 bg-gradient-to-r from-[#FF2E63] to-[#08D9D6] rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"
                                        animate={{ 
                                             rotate: [0, 3, 0, -3, 0],
                                        }}
                                        transition={{ 
                                             duration: 6,
                                             repeat: Infinity,
                                             ease: "easeInOut"
                                        }}
                                   />
                                   <div className="relative bg-gradient-to-br from-[#121B2B] to-[#0A0E17] border border-[#1E2A40] rounded-2xl p-1 overflow-hidden">
                                        <div className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden">
                                             <div className="absolute inset-0 bg-gradient-to-br from-[#FF2E63]/10 to-[#08D9D6]/10 z-10" />
                                             <div className="absolute inset-4 border-2 border-dashed border-[#08D9D6]/30 rounded-full animate-pulse" />

                                             <motion.div 
                                                  className="relative w-full h-full flex items-center justify-center"
                                                  initial={{ opacity: 0, scale: 0.8 }}
                                                  animate={{ opacity: 1, scale: 1 }}
                                                  transition={{ delay: 0.5 }}
                                             >
                                                  <Image
                                                       src="/profile.jpg" // Replace with your actual image path
                                                       alt="Waleed Ahmad"
                                                       width={280}
                                                       height={280}
                                                       className="object-cover w-full h-full rounded-xl"
                                                  />
                                             </motion.div>
                                        </div>
                                   </div>
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, x: 30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.7, delay: 0.3 }}
                         >
                              <motion.h3 
                                   className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E63] to-[#08D9D6]"
                                   whileHover={{ x: 5 }}
                                   transition={{ type: "spring", stiffness: 300 }}
                              >
                                   Engineering Digital Solutions
                              </motion.h3>
                              <motion.div 
                                   className="space-y-5 mb-8 text-[#EAEAEA]"
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   transition={{ delay: 0.6 }}
                              >
                                   <motion.p 
                                        className="text-lg leading-relaxed p-3 rounded-xl"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 }}
                                        whileHover={{ 
                                             x: 5,
                                             background: "linear-gradient(90deg, #0A0E17, #1E2A40, #0A0E17)",
                                             backgroundSize: "200% 100%",
                                             backgroundPosition: "100% 0",
                                             transition: { duration: 0.5 }
                                        }}
                                   >
                                        <span className="font-bold text-white">Waleed Ahmad</span> - A dedicated full-stack developer specializing in modern web architecture. I architect performant solutions that bridge user experience with technical excellence.
                                   </motion.p>
                                   <motion.p 
                                        className="text-lg leading-relaxed p-3 rounded-xl"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 }}
                                        whileHover={{ 
                                             x: 5,
                                             background: "linear-gradient(90deg, #0A0E17, #1E2A40, #0A0E17)",
                                             backgroundSize: "200% 100%",
                                             backgroundPosition: "100% 0",
                                             transition: { duration: 0.5 }
                                        }}
                                   >
                                        My expertise spans <span className="text-[#61DAFB] font-medium">React ecosystems</span> to <span className="text-[#8CC84B] font-medium">server-side implementations</span>, with a focus on creating seamless, scalable applications that deliver exceptional user experiences.
                                   </motion.p>
                                   <motion.p 
                                        className="text-lg leading-relaxed p-3 rounded-xl"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.9 }}
                                        whileHover={{ 
                                             x: 5,
                                             background: "linear-gradient(90deg, #0A0E17, #1E2A40, #0A0E17)",
                                             backgroundSize: "200% 100%",
                                             backgroundPosition: "100% 0",
                                             transition: { duration: 0.5 }
                                        }}
                                   >
                                        Currently advancing my education while maintaining professional development standards, I've completed <span className="font-bold text-white">The Odin Project</span> and continually enhance my skills through cutting-edge project work.
                                   </motion.p>
                              </motion.div>
                              <div>
                                   <motion.h4 
                                        className="text-2xl font-bold mb-4 text-white flex items-center gap-3"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                   >
                                        <motion.div
                                             animate={{ rotate: [0, 15, 0, -15, 0] }}
                                             transition={{ duration: 2, repeat: Infinity }}
                                        >
                                             <Cpu className="text-[#08D9D6]" />
                                        </motion.div>
                                        Technical Expertise
                                   </motion.h4>
                                   <div className="flex flex-wrap gap-3">
                                        {techStack.map((tech, index) => (
                                             <motion.div
                                                  key={index}
                                                  initial={{ opacity: 0, y: 20 }}
                                                  whileInView={{ opacity: 1, y: 0 }}
                                                  viewport={{ once: true }}
                                                  transition={{ delay: 1.1 + index * 0.1 }}
                                                  whileHover={{ 
                                                       y: -7,
                                                       scale: 1.1,
                                                       transition: { type: "spring", stiffness: 400 }
                                                  }}
                                             >
                                                  <Badge 
                                                       className={`${tech.color} ${tech.textColor} ${tech.shadow} px-4 py-2.5 font-bold flex items-center gap-2 rounded-lg group transition-all relative overflow-hidden`}
                                                  >
                                                       <motion.span
                                                            whileHover={{ rotate: 15 }}
                                                            transition={{ type: "spring" }}
                                                       >
                                                            {tech.icon}
                                                       </motion.span>
                                                       {tech.name}
                                                       <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none -rotate-45 w-full h-[200%] translate-y-[-50%] translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                                                  </Badge>
                                             </motion.div>
                                        ))}
                                   </div>
                              </div>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
};

export default About;