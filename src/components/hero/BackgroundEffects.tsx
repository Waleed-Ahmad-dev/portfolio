import React from 'react';

type BackgroundEffectsProps = {
     isDark: boolean;
};

const BackgroundEffects = ({ isDark }: BackgroundEffectsProps) => (
     <div className="absolute inset-0 -z-10">
          <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-purple-500/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-[20%] right-[15%] w-72 h-72 bg-blue-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slower" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
     </div>
);

export default BackgroundEffects;