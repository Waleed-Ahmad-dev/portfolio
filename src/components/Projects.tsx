// components/Projects.tsx
'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const projects = [
     {
          title: "Stop Watch React",
          description: "Stop-watch-react is a user-friendly stopwatch application built with React. This project demonstrates the use of React state management and component lifecycle methods.",
          tags: ["React", "JavaScript"],
          github: "https://github.com/Shadow-Scripter/stop-watch-react",
          live: "https://stop-watch-react-eight.vercel.app/",
     },
     {
          title: "Apple Clone",
          description: "Apple-clone is a detailed replica of the Apple Vision Pro page from the Apple website. This project highlights my ability to create high-fidelity clones with precise layout and design.",
          tags: ["HTML", "CSS", "JavaScript"],
          github: "https://github.com/Shadow-Scripter/Apple-clone",
          live: "https://shadow-scripter.github.io/Apple-clone/",
     },
     {
          title: "Digital Clock",
          description: "A digital clock application built with React, showcasing responsive UI design and React hooks.",
          tags: ["React", "CSS"],
          github: "https://github.com/Shadow-Scripter/digital-clock-react",
          live: "https://digital-clock-react-ochre.vercel.app/",
     },
     {
          title: "To Do List React",
          description: "A to-do list application to manage tasks, built using React.",
          tags: ["React", "JavaScript"],
          github: "https://github.com/Shadow-Scripter/to-do-list-react",
          live: "https://to-do-list-react-sandy.vercel.app/",
     },
     {
          title: "Portfolio Website",
          description: "This modern portfolio built with Next.js, Tailwind CSS, and Shadcn UI.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/Shadow-Scripter/portfolio-next",
          live: "https://your-portfolio.com",
     },
     {
          title: "Weather App",
          description: "A weather application that fetches real-time data from a weather API.",
          tags: ["React", "API Integration"],
          github: "https://github.com/Shadow-Scripter/weather-app",
          live: "https://weather-app-example.com",
     },
];

const Projects = () => {
     return (
          <section id="projects" className="py-20">
               <div className="container mx-auto px-4">
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5 }}
                         className="text-center mb-16"
                    >
                         <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                         <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {projects.map((project, index) => (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, y: 30 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ duration: 0.5, delay: index * 0.1 }}
                              >
                                   <Card className="h-full flex flex-col border border-border bg-background/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                             <CardTitle>{project.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-1">
                                             <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-muted to-background flex items-center justify-center">
                                                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 w-full h-full absolute inset-0" />
                                                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                                                       {project.title.split(' ')[0]}
                                                  </div>
                                             </div>
                                             <CardDescription className="mb-4">{project.description}</CardDescription>
                                             <div className="flex flex-wrap gap-2">
                                                  {project.tags.map((tag, tagIndex) => (
                                                       <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                                                  ))}
                                             </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                             <Button asChild variant="secondary">
                                                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                       GitHub
                                                  </a>
                                             </Button>
                                             <Button asChild>
                                                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                       Live Demo <ArrowUpRight className="ml-2 w-4 h-4" />
                                                  </a>
                                             </Button>
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