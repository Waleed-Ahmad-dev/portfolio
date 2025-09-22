'use client';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { Github, Monitor } from 'lucide-react';

interface ProjectHeaderLinksProps {
     github: string;
     live: string;
}

// Pre-defined motion configuration objects to avoid re-creating on every render
const motionConfig = {
     whileHover: { y: -2 },
     className: "p-1.5 rounded-full hover:bg-muted"
};

// Memoize component to prevent unnecessary re-renders
export const ProjectHeaderLinks = memo(({ github, live }: ProjectHeaderLinksProps) => (
     <div className="flex space-x-1">
          {github && (
               <motion.a 
                    href={github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    {...motionConfig}  // Spread pre-defined config
               >
                    <Github className="w-4 h-4 text-muted-foreground" />
               </motion.a>
          )}
          {live && (
               <motion.a 
                    href={live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    {...motionConfig}  // Re-use same config
               >
                    <Monitor className="w-4 h-4 text-muted-foreground" />
               </motion.a>
          )}
     </div>
));

ProjectHeaderLinks.displayName = 'ProjectHeaderLinks'; // Add display name for debugging