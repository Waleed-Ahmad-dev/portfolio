'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { 
     Sheet, 
     SheetContent, 
     SheetTrigger, 
     SheetClose 
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
     { name: 'Home', href: '#home' },
     { name: 'About', href: '#about' },
     { name: 'Projects', href: '#projects' },
     { name: 'Timeline', href: '#timeline' },
     { name: 'Contact', href: '#contact' },
];

const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [scrolled, setScrolled] = useState(false);
     const { theme, setTheme } = useTheme();
     const pathname = usePathname();

     useEffect(() => {
          const handleScroll = () => {
               setScrolled(window.scrollY > 20);
          };

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
     const closeMenu = () => setIsMenuOpen(false);

     return (
          <header 
               className={cn(
                    'fixed top-0 left-0 z-50 w-full transition-all duration-500',
                    scrolled 
                         ? 'bg-background/90 backdrop-blur-lg border-b border-border/30 shadow-sm py-1' 
                         : 'bg-transparent py-3'
               )}
          >
               <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Animated Logo */}
                    <Link 
                         href="/" 
                         className="flex items-center gap-2 group"
                         aria-label="Home"
                    >
                         <motion.div 
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                              className="bg-gradient-to-br from-blue-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/20 transition-shadow"
                         >
                              <motion.span 
                                   className="font-bold text-white text-lg"
                                   whileHover={{ rotate: 10 }}
                                   transition={{ duration: 0.3 }}
                              >
                                   W
                              </motion.span>
                         </motion.div>
                         <motion.span 
                              className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 hidden sm:block"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                         >
                              Waleed Ahmad
                         </motion.span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2">
                         <ul className="flex gap-1">
                              {navLinks.map((link, index) => (
                                   <motion.li 
                                        key={link.name}
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                   >
                                        <Button 
                                             asChild
                                             variant="ghost"
                                             className={cn(
                                                  'font-medium px-4 py-2 rounded-lg transition-all',
                                                  'hover:bg-accent/50 hover:text-primary',
                                                  'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                                                  pathname === link.href 
                                                       ? 'text-primary bg-accent/20' 
                                                       : 'text-foreground/80'
                                             )}
                                        >
                                             <Link href={link.href}>
                                                  {link.name}
                                                  {pathname === link.href && (
                                                       <motion.div
                                                            layoutId="activeIndicator"
                                                            className="absolute bottom-1 left-1/4 w-1/2 h-0.5 bg-primary rounded-full"
                                                            initial={false}
                                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                                       />
                                                  )}
                                             </Link>
                                        </Button>
                                   </motion.li>
                              ))}
                         </ul>

                         <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 }}
                         >
                              <Button 
                                   variant="ghost" 
                                   size="icon" 
                                   onClick={toggleTheme}
                                   aria-label="Toggle theme"
                                   className="rounded-full hover:bg-accent/50 hover:text-primary"
                              >
                                   {theme === 'dark' ? (
                                        <Sun className="h-5 w-5 transition-all hover:rotate-12" />
                                   ) : (
                                        <Moon className="h-5 w-5 transition-all hover:rotate-12" />
                                   )}
                              </Button>
                         </motion.div>
                    </nav>

                    {/* Mobile Navigation */}
                    <div className="md:hidden flex items-center gap-2">
                         <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={toggleTheme}
                              aria-label="Toggle theme"
                              className="rounded-full"
                         >
                              {theme === 'dark' ? (
                                   <Sun className="h-5 w-5" />
                              ) : (
                                   <Moon className="h-5 w-5" />
                              )}
                         </Button>

                         <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                              <SheetTrigger asChild>
                                   <Button 
                                        variant="ghost" 
                                        size="icon" 
                                        aria-label="Toggle menu"
                                        className="rounded-full"
                                   >
                                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                   </Button>
                              </SheetTrigger>

                              <SheetContent 
                                   side="right"
                                   className="w-[300px] sm:w-[350px] bg-background/95 backdrop-blur-lg border-l border-border/30"
                                   onInteractOutside={closeMenu}
                              >
                                   <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="h-full flex flex-col pt-16"
                                   >
                                        <ul className="flex flex-col gap-1">
                                             {navLinks.map((link) => (
                                                  <motion.li 
                                                       key={link.name}
                                                       initial={{ opacity: 0, x: 20 }}
                                                       animate={{ opacity: 1, x: 0 }}
                                                       transition={{ duration: 0.2 }}
                                                  >
                                                       <SheetClose asChild>
                                                            <Button
                                                                 asChild
                                                                 variant="ghost"
                                                                 className={cn(
                                                                 'w-full justify-start px-6 py-5 rounded-lg text-lg',
                                                                 'transition-colors hover:bg-accent/50 hover:text-primary',
                                                                 pathname === link.href 
                                                                      ? 'text-primary bg-accent/20' 
                                                                      : 'text-foreground/80'
                                                                 )}
                                                            >
                                                                 <Link 
                                                                      href={link.href} 
                                                                      onClick={closeMenu}
                                                                 >
                                                                      {link.name}
                                                                 </Link>
                                                            </Button>
                                                       </SheetClose>
                                                  </motion.li>
                                             ))}
                                        </ul>

                                        <motion.div 
                                             className="mt-auto pb-8 px-6"
                                             initial={{ opacity: 0 }}
                                             animate={{ opacity: 1 }}
                                             transition={{ delay: 0.2 }}
                                        >
                                             <div className="text-xs text-muted-foreground">
                                                  © {new Date().getFullYear()} Waleed Ahmad
                                             </div>
                                        </motion.div>
                                   </motion.div>
                              </SheetContent>
                         </Sheet>
                    </div>
               </div>
          </header>
     );
};

export default Header;