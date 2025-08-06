import { ThemeToggle } from "../theme-toggle";

const ThemeToggleCard = () => (
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
);

export default ThemeToggleCard;