'use client';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ThemeToggleButton } from './ThemeToggleButton';
import { NavItem } from './NavItem';
import { navLinks } from './navigation';

export const MobileNav = () => {
     const [isOpen, setIsOpen] = useState(false);
     const pathname = usePathname();

     const closeMenu = () => setIsOpen(false);

     return (
          <div className="md:hidden flex items-center gap-2">
               <ThemeToggleButton />
               <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                         <Button 
                              variant="ghost" 
                              size="icon" 
                              aria-label="Toggle menu"
                              className="rounded-full"
                         >
                              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                         </Button>
                    </SheetTrigger>
                    <SheetContent 
                         side="right"
                         className="w-[300px] sm:w-[350px] bg-background/95 backdrop-blur-lg border-l border-border/30"
                    >
                         <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3 }}
                              className="h-full flex flex-col pt-16"
                         >
                              <ul className="flex flex-col gap-1">
                                   {navLinks.map((link, index) => (
                                        <NavItem 
                                             key={link.name}
                                             href={link.href}
                                             name={link.name}
                                             isActive={pathname === link.href}
                                             index={index}
                                             mobile
                                             onClick={closeMenu}
                                        />
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
     );
};