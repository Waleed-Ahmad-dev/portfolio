"use client";
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const techStack = [
     { name: 'HTML5', color: 'bg-[#E44D26]' },
     { name: 'CSS3', color: 'bg-[#264DE4]' },
     { name: 'JavaScript', color: 'bg-[#F0DB4F] text-foreground' },
     { name: 'TypeScript', color: 'bg-[#3178C6]' },
     { name: 'React', color: 'bg-[#61DAFB] text-foreground' },
     { name: 'Next.js', color: 'bg-foreground text-background' },
     { name: 'Node.js', color: 'bg-[#68A063]' },
     { name: 'Python', color: 'bg-[#3776AB]' },
     { name: 'MongoDB', color: 'bg-[#47A248]' },
     { name: 'PostgreSQL', color: 'bg-[#336791]' },
];

const About = () => {
     return (
          <section id="about" className="py-20 bg-muted/50">
               <div className="container mx-auto px-4">
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5 }}
                         className="text-center mb-16"
                    >
                         <h2 className="text-3xl md:text-4xl font-bold mb-4">
                              About Me
                         </h2>
                         <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                         <motion.div
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="flex justify-center"
                         >
                              <div className="relative">
                                   <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30" />
                                        <div className="relative bg-background border border-border rounded-2xl p-1">
                                             <div className="bg-gradient-to-br from-background to-muted rounded-xl w-64 h-64 md:w-72 md:h-72 overflow-hidden flex items-center justify-center">
                                             <div className="bg-gray-200 border-2 border-dashed rounded-xl w-56 h-56" />
                                        </div>
                                   </div>
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, x: 30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                         >
                              <h3 className="text-2xl font-bold mb-6">
                                   Hello Everyone,
                              </h3>
                              <p className="text-lg mb-8">
                                   I'm <span className="font-bold">Waleed Ahmad</span>, a full-stack developer proficient in 
                                   HTML, CSS, JavaScript, React, Next.js, TypeScript, Node.js, Express.js, 
                                   MongoDB, PostgreSQL, MySQL, Prisma, Python, Django, and Flask. 
                                   Currently, I'm studying in O levels and have completed the 
                                   Odin Project.
                              </p>
                              <div>
                                   <h4 className="text-xl font-bold mb-4">
                                        My Tech Stack
                                   </h4>
                                   <div className="flex flex-wrap gap-3">
                                        {techStack.map((tech, index) => (
                                             <Badge 
                                                  key={index}
                                                  className={`${tech.color} px-4 py-1.5 text-white font-medium`}
                                             >
                                                  {tech.name}
                                             </Badge>
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