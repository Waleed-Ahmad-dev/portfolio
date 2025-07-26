// components/Footer.tsx
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';

const Footer = () => {
     const currentYear = new Date().getFullYear();

     return (
          <footer className="w-full border-t border-border bg-background/50 backdrop-blur-sm py-10">
                    <div className="container mx-auto px-4">
                         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                              <div className="md:col-span-2">
                                   <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-10 h-10 rounded-lg" />
                                        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                                             Waleed Ahmad
                                        </span>
                                   </div>
                                   <p className="text-muted-foreground max-w-md">
                                        Full-stack developer passionate about creating modern, responsive web applications with React, Next.js, and the latest web technologies.
                                   </p>
                              </div>

                              <div>
                                   <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                                   <ul className="space-y-2">
                                        <li>
                                             <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                                                  Home
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                                                  About
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                                                  Projects
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">
                                                  Timeline
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                                                  Contact
                                             </Link>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h3 className="text-lg font-semibold mb-4">Connect</h3>
                                   <div className="flex flex-wrap gap-3 mb-6">
                                   <Button asChild variant="outline" size="icon" className="rounded-full">
                                        <a href="https://github.com/Waleed-Ahmad-dev" target="_blank" rel="noopener noreferrer">
                                             <Github className="w-4 h-4" />
                                             <span className="sr-only">GitHub</span>
                                        </a>
                                   </Button>
                                   <Button asChild variant="outline" size="icon" className="rounded-full">
                                        <a href="https://www.linkedin.com/in/waleed-ahmed2009" target="_blank" rel="noopener noreferrer">
                                             <Linkedin className="w-4 h-4" />
                                             <span className="sr-only">LinkedIn</span>
                                        </a>
                                   </Button>
                                   <Button asChild variant="outline" size="icon" className="rounded-full">
                                        <a href="mailto:itswaleedqurshi@gmail.com">
                                             <Mail className="w-4 h-4" />
                                             <span className="sr-only">Email</span>
                                        </a>
                                   </Button>
                              </div>
                              <div className="mb-4">
                                   <h4 className="font-medium mb-2">Theme</h4>
                                   <ThemeToggle />
                              </div>
                         </div>
                    </div>

                    <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                         <p className="text-muted-foreground text-sm">
                              © {currentYear} Waleed Ahmad. All rights reserved.
                         </p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;