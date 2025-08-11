'use client';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ThemeToggleButton } from './ThemeToggleButton';
import { NavItem } from './NavItem';
import { navLinks } from './navigation';

export const DesktopNav = () => {
     const pathname = usePathname();

     return (
          <nav className="hidden md:flex items-center gap-2">
                <ul className="flex gap-1">
                    {navLinks.map((link, index) => (
                         <NavItem 
                              key={link.name}
                              href={link.href}
                              name={link.name}
                              isActive={pathname === link.href}
                              index={index}
                         />
                    ))}
               </ul>
               <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
               >
                    <ThemeToggleButton />
               </motion.div>
          </nav>
     );
};