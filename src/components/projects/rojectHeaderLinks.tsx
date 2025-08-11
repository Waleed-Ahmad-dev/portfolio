'use client';
import { motion } from 'framer-motion';
import { Github, Monitor } from 'lucide-react';

interface ProjectHeaderLinksProps {
     github: string;
     live: string;
}

export const ProjectHeaderLinks = ({ github, live }: ProjectHeaderLinksProps) => (
     <div className="flex space-x-1">
          {github && (
               <motion.a 
                    href={github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="p-1.5 rounded-full hover:bg-muted"
               >
                    <Github className="w-4 h-4 text-muted-foreground" />
               </motion.a>
          )}
          {live && (
               <motion.a 
                    href={live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="p-1.5 rounded-full hover:bg-muted"
               >
                    <Monitor className="w-4 h-4 text-muted-foreground" />
               </motion.a>
          )}
     </div>
);