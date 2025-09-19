import { memo } from 'react';
import { ThemeToggle } from "../theme-toggle";

const ThemeToggleCard = memo(() => (
     <div className="bg-background border border-border/40 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-medium mb-3 flex items-center">
               {/* Gradient indicator dot - using pure CSS instead of SVG for better performance */}
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
));

ThemeToggleCard.displayName = 'ThemeToggleCard'; // For better debugging in React DevTools

export default ThemeToggleCard;