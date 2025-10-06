"use client";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { techStack } from './data';
import { Cpu, Code2, Database, Palette } from 'lucide-react';

const categories = [
     { icon: Code2, name: "Frontend", color: "text-cyan-400" },
     { icon: Cpu, name: "Backend", color: "text-purple-400" },
     { icon: Database, name: "Database", color: "text-green-400" },
     { icon: Palette, name: "Tools", color: "text-orange-400" }
];

export const TechStackSection = () => {
     return (
          <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="space-y-8"
          >
               <div className="text-center">
                    <motion.h2 
                         className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.2 }}
                    >
                         Technical Arsenal
                    </motion.h2>
                    <motion.p 
                         className="text-xl text-slate-400 max-w-2xl mx-auto"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.3 }}
                    >
                         Mastery across the modern development stack
                    </motion.p>
               </div>

               {/* Category Cards */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                         <motion.div
                              key={category.name}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 + 0.4 }}
                         >
                              <Card className="bg-slate-900/80 backdrop-blur-xl border-slate-700/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group hover:border-cyan-500/30">
                                   <CardHeader className="pb-3">
                                        <CardTitle className="flex items-center gap-3 text-slate-300 group-hover:text-cyan-300 transition-colors duration-300">
                                             <category.icon className={`w-6 h-6 ${category.color}`} />
                                             {category.name}
                                        </CardTitle>
                                   </CardHeader>
                                   <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                             {techStack.slice(index * 4, (index + 1) * 4).map((tech) => (
                                                  <Badge 
                                                       key={tech.name}
                                                       variant="secondary"
                                                       className="bg-slate-800/50 text-slate-300 border-slate-600/50 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300 cursor-pointer"
                                                  >
                                                       {tech.name}
                                                  </Badge>
                                             ))}
                                        </div>
                                   </CardContent>
                              </Card>
                         </motion.div>
                    ))}
               </div>

               {/* All Technologies Grid */}
               <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
               >
                    <Card className="bg-slate-900/80 backdrop-blur-xl border-slate-700/50 rounded-2xl shadow-2xl">
                         <CardContent className="p-8">
                              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                   {techStack.map((tech, index) => (
                                        <motion.div
                                             key={tech.name}
                                             initial={{ opacity: 0, scale: 0.8 }}
                                             whileInView={{ opacity: 1, scale: 1 }}
                                             whileHover={{ 
                                                  scale: 1.1, 
                                                  y: -5,
                                                  transition: { type: "spring", stiffness: 400 }
                                             }}
                                             transition={{ delay: index * 0.05 + 0.8 }}
                                             className="flex flex-col items-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group cursor-pointer"
                                        >
                                             <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                                  {tech.icon}
                                             </div>
                                             <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-300 transition-colors duration-300">
                                                  {tech.name}
                                             </span>
                                        </motion.div>
                                   ))}
                              </div>
                         </CardContent>
                    </Card>
               </motion.div>
          </motion.div>
     );
};