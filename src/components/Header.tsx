'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

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
               if (window.scrollY > 50) {
                    setScrolled(true);
               } else {
                    setScrolled(false);
               }
          };

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
     const closeMenu = () => setIsMenuOpen(false);

     return (
          <header 
               className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
                    scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
               }`}
          >
               <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                         <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-8 h-8 rounded-lg" />
                         <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                              Waleed Ahmad
                         </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                         <ul className="flex gap-6">
                              {navLinks.map((link) => (
                                   <li key={link.name}>
                                        <Link
                                             href={link.href}
                                             className={`font-medium hover:text-primary transition-colors ${
                                                  pathname === link.href ? 'text-primary' : 'text-foreground'
                                             }`}
                                        >
                                             {link.name}
                                        </Link>
                                   </li>
                              ))}
                         </ul>

                         <button
                              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                              className="p-2 rounded-full hover:bg-muted transition-colors"
                              aria-label="Toggle theme"
                         >
                              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                         </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                         <button
                              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                              className="p-2 rounded-full hover:bg-muted transition-colors"
                              aria-label="Toggle theme"
                         >
                              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                         </button>

                         <button
                              onClick={toggleMenu}
                              className="p-2 rounded-full hover:bg-muted transition-colors"
                              aria-label="Toggle menu"
                         >
                              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                         </button>
                    </div>
               </div>

               {/* Mobile Menu */}
               <AnimatePresence>
                    {isMenuOpen && (
                         <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="md:hidden bg-background border-b border-border overflow-hidden"
                         >
                              <nav className="container mx-auto px-4 py-4">
                                   <ul className="flex flex-col gap-4">
                                        {navLinks.map((link) => (
                                             <li key={link.name}>
                                                  <Link
                                                       href={link.href}
                                                       className={`block py-2 font-medium hover:text-primary transition-colors ${
                                                            pathname === link.href ? 'text-primary' : 'text-foreground'
                                                       }`}
                                                       onClick={closeMenu}
                                                  >
                                                       {link.name}
                                                  </Link>
                                             </li>
                                        ))}
                                   </ul>
                              </nav>
                         </motion.div>
                    )}
               </AnimatePresence>
          </header>
     );
};

export default Header;