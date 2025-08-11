'use client';
import { cn } from '@/lib/utils';
import { useScrollEffect } from './header/useScrollEffect';
import { Logo } from './header/Logo';
import { DesktopNav } from './header/DesktopNav';
import { MobileNav } from './header/MobileNav';


const Header = () => {
     const scrolled = useScrollEffect();

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
                    <Logo />
                    <DesktopNav />
                    <MobileNav />
               </div>
          </header>
     );
};

export default Header