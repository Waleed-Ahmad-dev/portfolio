'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from './types';
import { ProjectHeaderLinks } from './rojectHeaderLinks';
import { ProjectFooterLinks } from './ProjectFooterLinks';


interface ProjectCardProps {
     project: Project;
     index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => (
     <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          whileHover={{ y: -10 }}
          className="group"
     >
          <Card className="h-full flex flex-col border border-muted-foreground/20 bg-background/70 backdrop-blur-sm group-hover:border-muted-foreground/40 transition-all duration-300 overflow-hidden">
               <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/10 backdrop-blur-sm"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                         <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center">
                              <div className="text-white font-bold text-xl">
                                   {project.title.charAt(0)}
                              </div>
                         </div>
                    </div>

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

                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-600 to-purple-600 rounded-bl-full"></div>
               </div>

               <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                         <CardTitle className="text-xl font-semibold tracking-tight group-hover:text-blue-500 transition-colors">
                              {project.title}
                         </CardTitle>
                         <ProjectHeaderLinks github={project.github} live={project.live} />
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
                    <ProjectFooterLinks github={project.github} live={project.live} />
               </CardFooter>
          </Card>
     </motion.div>
);