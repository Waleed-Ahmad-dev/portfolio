export const BackgroundDecorations = () => (
     <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Static gradient circle with promoted composition layer */}
          <div 
               className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"
               style={{ 
                    // Promote to own compositing layer for cheaper blur operations
                    transform: 'translateZ(0)',
                    // Prevent layer destruction on Safari
                    backfaceVisibility: 'hidden'
               }}
          ></div>

          {/* Second static gradient circle with same optimizations */}
          <div 
               className="absolute bottom-10 right-0 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl"
               style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
               }}
          ></div>
     </div>
);