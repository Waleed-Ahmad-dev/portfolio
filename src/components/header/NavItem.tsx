'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type NavItemProps = {
     href: string;
     name: string;
     isActive: boolean;
     index?: number;
     mobile?: boolean;
     onClick?: () => void;
};

export const NavItem = ({ 
     href, 
     name, 
     isActive, 
     index = 0,
     mobile = false,
     onClick 
}: NavItemProps) => (
     <motion.li
          initial={{ 
               y: mobile ? 0 : -20, 
               opacity: 0,
               x: mobile ? 20 : 0
          }}
          animate={{ 
               y: 0, 
               opacity: 1,
               x: 0
          }}
          transition={{ 
               delay: mobile ? index * 0.1 : 0.1 + index * 0.05,
               duration: mobile ? 0.2 : undefined
          }}
     >
          <Button
               asChild
               variant="ghost"
               className={cn(
               mobile 
                    ? 'w-full justify-start px-6 py-5 rounded-lg text-lg transition-colors hover:bg-accent/50 hover:text-primary' 
                    : 'font-medium px-4 py-2 rounded-lg transition-all hover:bg-accent/50 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
               isActive 
                    ? 'text-primary bg-accent/20' 
                    : 'text-foreground/80'
               )}
          >
               <Link href={href} onClick={onClick}>
                    {name}
                    {!mobile && isActive && (
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
);