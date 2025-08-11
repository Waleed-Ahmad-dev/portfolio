'use client';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeToggleButton = () => {
     const { theme, setTheme } = useTheme();

     return (
          <Button 
               variant="ghost" 
               size="icon" 
               onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
               aria-label="Toggle theme"
               className="rounded-full hover:bg-accent/50 hover:text-primary"
          >
               {theme === 'dark' ? (
                    <Sun className="h-5 w-5 transition-all hover:rotate-12" />
               ) : (
                    <Moon className="h-5 w-5 transition-all hover:rotate-12" />
               )}
          </Button>
     );
};