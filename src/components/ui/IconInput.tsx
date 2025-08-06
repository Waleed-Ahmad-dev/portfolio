import { Input } from "@/components/ui/input";
import { ReactNode } from "react";

interface IconInputProps {
     icon: ReactNode;
}

export const IconInput = ({ icon, ...props }: IconInputProps) => (
     <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
               {icon}
          </div>
          <Input className="pl-10 py-6 rounded-xl" {...props} />
     </div>
);