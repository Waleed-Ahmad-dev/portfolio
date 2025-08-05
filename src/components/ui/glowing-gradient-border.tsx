import React from 'react';

export const GlowingGradientBorder = ({ 
     children,
     className = ''
}: { 
     children: React.ReactNode;
     className?: string;
}) => {
     return (
          <div className={`relative p-[2px] rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-origin-border shadow-lg shadow-blue-500/20 ${className}`}>
               <div className="bg-background rounded-[calc(0.5rem-2px)]">
                    {children}
               </div>
          </div>
     );
};