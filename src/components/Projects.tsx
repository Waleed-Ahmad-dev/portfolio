'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github, Monitor } from 'lucide-react';

const projects = [
     {
          title: "Stop Watch React",
          description: "A sleek stopwatch application built with React showcasing precise timing functionality and intuitive controls.",
          tags: ["React", "JavaScript"],
          github: "https://github.com/Shadow-Scripter/stop-watch-react",
          live: "https://stop-watch-react-eight.vercel.app/",
     },
     {
          title: "Apple Vision Pro Clone",
          description: "High-fidelity clone of the Apple Vision Pro page with pixel-perfect design implementation.",
          tags: ["HTML", "CSS", "JavaScript"],
          github: "https://github.com/Shadow-Scripter/Apple-clone",
          live: "https://shadow-scripter.github.io/Apple-clone/",
     },
     {
          title: "Digital Clock",
          description: "Elegant digital clock with real-time updates and customizable themes.",
          tags: ["React", "CSS"],
          github: "https://github.com/Shadow-Scripter/digital-clock-react",
          live: "https://digital-clock-react-ochre.vercel.app/",
     },
     {
          title: "TaskFlow - Todo List",
          description: "Minimalist task management application with drag-and-drop organization.",
          tags: ["React", "JavaScript"],
          github: "https://github.com/Shadow-Scripter/to-do-list-react",
          live: "https://to-do-list-react-sandy.vercel.app/",
     },
     {
          title: "Portfolio Website",
          description: "Modern portfolio built with Next.js and Tailwind CSS featuring smooth animations.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/Shadow-Sripter/portfolio-next",
          live: "https://your-portfolio.com",
     },
     {
          title: "Weather Dashboard",
          description: "Real-time weather application with location detection and forecast visualization.",
          tags: ["React", "API Integration"],
          github: "https://github.com/Shadow-Scripter/weather-app",
          live: "https://weather-app-example.com",
     },
];

const Projects = () => {
     return (
          <section id="projects" className="relative py-24 overflow-hidden">
               {/* Decorative elements */}
               <div className="absolute top-0 left-0 w-full h-full z-0">
                    <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-0 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
               </div>

               <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: "-100px" }}
                         transition={{ duration: 0.8 }}
                         className="text-center mb-20"
                    >
                         <motion.div
                              initial={{ scale: 0.8 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="inline-block mb-4"
                         >
                              <Badge variant="secondary" className="rounded-full py-1.5 px-4 border border-muted-foreground/30 bg-background/80 backdrop-blur-sm">
                                   <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
                                        My Work
                                   </span>
                              </Badge>
                         </motion.div>

                         <motion.h2 
                              className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                         >
                              Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
                         </motion.h2>

                         <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "140px" }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                              className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                         />

                         <motion.p
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                              className="mt-6 text-muted-foreground max-w-2xl mx-auto"
                         >
                              A curated selection of my latest work showcasing modern design principles, clean code, and user-focused experiences.
                         </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {projects.map((project, index) => (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, y: 50 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true, margin: "-100px" }}
                                   transition={{ duration: 0.6, delay: index * 0.15 }}
                                   whileHover={{ y: -10 }}
                                   className="group"
                              >
                                   <Card className="h-full flex flex-col border border-muted-foreground/20 bg-background/70 backdrop-blur-sm group-hover:border-muted-foreground/40 transition-all duration-300 overflow-hidden">
                                        {/* Project Image/Icon Placeholder */}
                                        <div className="relative aspect-video overflow-hidden">
                                             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/10 backdrop-blur-sm"></div>
                                             <div className="absolute inset-0 flex items-center justify-center">
                                                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center">
                                                       <div className="text-white font-bold text-xl">
                                                            {project.title.charAt(0)}
                                                       </div>
                                                  </div>
                                             </div>

                                             {/* Hover effect */}
                                             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                  <motion.div 
                                                       initial={{ opacity: 0, y: 10 }}
                                                       whileHover={{ opacity: 1, y: 0 }}
                                                       className="text-white"
                                                  >
                                                       <Button variant="secondary" size="sm" className="mr-2 backdrop-blur-sm">
                                                            View Details
                                                       </Button>
                                                  </motion.div>
                                             </div>

                                             {/* Corner accent */}
                                             <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-600 to-purple-600 rounded-bl-full"></div>
                                        </div>

                                        <CardHeader className="pb-3">
                                             <div className="flex justify-between items-start">
                                                  <CardTitle className="text-xl font-semibold tracking-tight group-hover:text-blue-500 transition-colors">
                                                       {project.title}
                                                  </CardTitle>
                                                  <div className="flex space-x-1">
                                                       <motion.a 
                                                            href={project.github} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            whileHover={{ y: -2 }}
                                                            className="p-1.5 rounded-full hover:bg-muted"
                                                       >
                                                            <Github className="w-4 h-4 text-muted-foreground" />
                                                       </motion.a>
                                                       <motion.a 
                                                            href={project.live} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            whileHover={{ y: -2 }}
                                                            className="p-1.5 rounded-full hover:bg-muted"
                                                       >
                                                            <Monitor className="w-4 h-4 text-muted-foreground" />
                                                       </motion.a>
                                                  </div>
                                             </div>
                                        </CardHeader>

                                        <CardContent className="pb-4 flex-1">
                                             <CardDescription className="text-muted-foreground mb-4">
                                                  {project.description}
                                             </CardDescription>

                                             <div className="flex flex-wrap gap-2">
                                                  {project.tags.map((tag, tagIndex) => (
                                                       <motion.div
                                                            key={tagIndex}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.5 + (tagIndex * 0.1) }}
                                                       >
                                                            <Badge 
                                                                 variant="outline" 
                                                                 className="rounded-full border-muted-foreground/20 bg-background/60 backdrop-blur-sm py-1.5 px-3 font-normal"
                                                            >
                                                                 {tag}
                                                            </Badge>
                                                       </motion.div>
                                                  ))}
                                             </div>
                                        </CardContent>

                                        <CardFooter className="pt-0">
                                             <div className="flex gap-3 w-full">
                                                  <Button 
                                                       asChild 
                                                       variant="outline" 
                                                       className="flex-1 backdrop-blur-sm border-muted-foreground/20 hover:bg-muted/50"
                                                  >
                                                       <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                            <Github className="mr-2 h-4 w-4" /> Code
                                                       </a>
                                                  </Button>
                                                  <Button 
                                                       asChild 
                                                       className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all"
                                                  >
                                                       <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                            <Monitor className="mr-2 h-4 w-4" /> Live Demo
                                                       </a>
                                                  </Button>
                                             </div>
                                        </CardFooter>
                                   </Card>
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default Projects;