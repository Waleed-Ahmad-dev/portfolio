import React from 'react';

type BackgroundEffectsProps = {
     isDark: boolean;
};

const BackgroundEffects = ({ isDark }: BackgroundEffectsProps) => (
     <div className="absolute inset-0 -z-10">
          {/* Use direct color values instead of dynamic classes to avoid style recalculations */}
          <div
               className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full blur-3xl animate-pulse-slow"
               style={{
                    backgroundColor: isDark ? 'rgb(55 48 163 / 10%)' : 'rgb(168 85 247 / 20%)'
               }}
          />
          <div
               className="absolute bottom-[20%] right-[15%] w-72 h-72 rounded-full blur-3xl animate-pulse-slower"
               style={{
                    backgroundColor: isDark ? 'rgb(6 182 212 / 10%)' : 'rgb(59 130 246 / 20%)'
               }}
          />
          {/* Static gradient doesn't need theme switching */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
     </div>
);

export default React.memo(BackgroundEffects);