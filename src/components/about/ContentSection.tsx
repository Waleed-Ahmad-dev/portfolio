"use client";
import { motion, cubicBezier } from 'framer-motion';  // Add cubicBezier to the import
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

export const ContentSection = () => {
     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.2
               }
          }
     };

     const itemVariants = {
          hidden: { opacity: 0, y: 30 },
          visible: {
               opacity: 1,
               y: 0,
               transition: {
                    duration: 0.6,
                    ease: cubicBezier(0.16, 1, 0.3, 1)  // Use cubicBezier here
               }
          }
     };

     return (
          <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               className="space-y-6"
          >
               <motion.div variants={itemVariants}>
                    <Card className="bg-slate-900/80 backdrop-blur-xl border-slate-700/50 rounded-2xl shadow-2xl">
                         <CardContent className="p-8">
                              <motion.h2 
                                   className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6"
                                   variants={itemVariants}
                              >
                                   Crafting Digital Excellence
                              </motion.h2>

                              <div className="space-y-4 text-slate-300">
                                   <motion.p 
                                        className="text-lg leading-relaxed"
                                        variants={itemVariants}
                                   >
                                        I'm <span className="font-semibold text-cyan-300">Waleed Ahmad</span>, a passionate backend-focused full-stack developer dedicated to building performant, scalable digital systems. I specialize in architecting robust server-side solutions and seamless frontend integrations that deliver exceptional user experiences.
                                   </motion.p>

                                   <motion.p 
                                        className="text-lg leading-relaxed"
                                        variants={itemVariants}
                                   >
                                        With hands-on experience deploying full-stack applications to production and a strong command over modern web technologies like <span className="text-cyan-300 font-medium">Node.js</span>, <span className="text-cyan-300 font-medium">Express</span>, <span className="text-cyan-300 font-medium">Next.js</span>, and <span className="text-purple-300 font-medium">Django</span>, I bring a functional-first approach to clean, maintainable code.
                                   </motion.p>

                                   <motion.p 
                                        className="text-lg leading-relaxed"
                                        variants={itemVariants}
                                   >
                                        Currently expanding my expertise in <span className="text-purple-300 font-medium">GoLang</span>, <span className="text-purple-300 font-medium">Machine Learning</span>, and <span className="text-purple-300 font-medium">AI integrations</span>, I'm constantly pushing the boundaries of what's possible in web development.
                                   </motion.p>
                              </div>
                         </CardContent>
                    </Card>
               </motion.div>

               {/* Action Buttons */}
               <motion.div 
                    className="flex flex-wrap gap-4"
                    variants={itemVariants}
               >
                    <a href="/My_Resume.pdf" download="Sufyan_Ghaffar_Resume.pdf">
                         <Button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 border-0 shadow-lg transition-all duration-300">
                              <Download className="w-4 h-4 mr-2" />
                              Download Resume
                         </Button>
                    </a>

                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300">
                         <Mail className="w-4 h-4 mr-2" />
                         <a href='#contact'>
                              Contact Me
                         </a>
                    </Button>

                    <div className="flex gap-2 ml-auto">
                         <Button variant="ghost" size="icon" className="text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300">
                              <Github className="w-5 h-5" />
                         </Button>
                         <Button variant="ghost" size="icon" className="text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300">
                              <Linkedin className="w-5 h-5" />
                         </Button>
                    </div>
               </motion.div>
          </motion.div>
     );
};