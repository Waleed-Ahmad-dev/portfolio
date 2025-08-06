const DecorativeBackground = () => (
     <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[500px] -left-[300px] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/5 to-purple-600/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-400/5 to-rose-500/10 blur-3xl" />
     </div>
);

export default DecorativeBackground;