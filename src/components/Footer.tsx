"use client";
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] as const // 👈 Add "as const" here
      }
    }
  };

  return (
    <footer className="w-full border-t border-border/40 bg-background/80 backdrop-blur-2xl py-14 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[500px] -left-[300px] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/5 to-purple-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-400/5 to-rose-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] xl:grid-cols-[2fr_1fr_1fr_1fr] gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Section */}
          <motion.div 
            className="md:col-span-2 xl:col-span-1"
            variants={itemVariants}
          >
            <div className="flex items-start gap-4 mb-6">
              <motion.div 
                className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="font-bold text-white text-lg">W</span>
              </motion.div>
              <div>
                <motion.h2 
                  className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
                  whileHover={{ x: 5 }}
                >
                  Waleed Ahmad
                </motion.h2>
                <p className="text-muted-foreground mt-2 max-w-md">
                  Crafting elegant digital experiences with modern web technologies.
                </p>
              </div>
            </div>

            <motion.div 
              className="flex gap-3 mt-8"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Button 
                  asChild 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-background/80 backdrop-blur-sm border-border/40 hover:bg-primary/10 group"
                >
                  <a href="https://github.com/Waleed-Ahmad-dev" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Button 
                  asChild 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-background/80 backdrop-blur-sm border-border/40 hover:bg-primary/10 group"
                >
                  <a href="https://www.linkedin.com/in/waleed-ahmed2009" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Button 
                  asChild 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-background/80 backdrop-blur-sm border-border/40 hover:bg-primary/10 group"
                >
                  <a href="mailto:itswaleedqurshi@gmail.com">
                    <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              Navigation
              <span className="h-px flex-1 bg-border/40 ml-3" />
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Timeline', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-foreground flex items-center transition-all duration-300 group"
                  >
                    <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Theme Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              Preferences
              <span className="h-px flex-1 bg-border/40 ml-3" />
            </h3>
            
            <div className="bg-background border border-border/40 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-medium mb-3 flex items-center">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 w-2 h-2 rounded-full mr-2" />
                Theme
              </h4>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Switch between themes
                </span>
                <ThemeToggle />
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-blue-500/5 to-purple-600/10 border border-border/40 rounded-xl p-5 backdrop-blur-sm">
              <h4 className="font-medium mb-3">Get in touch</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Have a project in mind? Let's collaborate.
              </p>
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-purple-600/30 transition-all"
              >
                <Link href="#contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-border/20 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Waleed Ahmad. All rights reserved.
          </p>
          <div className="mt-3 md:mt-0">
            <p className="text-xs text-muted-foreground/60">
              Crafted with passion and Next.js
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;