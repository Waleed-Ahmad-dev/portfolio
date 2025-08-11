'use client';
import { Button } from '@/components/ui/button';
import { Github, Monitor } from 'lucide-react';

interface ProjectFooterLinksProps {
     github: string;
     live: string;
}

export const ProjectFooterLinks = ({ github, live }: ProjectFooterLinksProps) => (
     <div className="flex gap-3 w-full">
          {github && (
               <Button 
                    asChild 
                    variant="outline" 
                    className="flex-1 backdrop-blur-sm border-muted-foreground/20 hover:bg-muted/50"
               >
                    <a href={github} target="_blank" rel="noopener noreferrer">
                         <Github className="mr-2 h-4 w-4" /> Code
                    </a>
               </Button>
          )}
          {live && (
               <Button 
                    asChild 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all"
               >
                    <a href={live} target="_blank" rel="noopener noreferrer">
                         <Monitor className="mr-2 h-4 w-4" /> Live Demo
                    </a>
               </Button>
          )}
     </div>
);