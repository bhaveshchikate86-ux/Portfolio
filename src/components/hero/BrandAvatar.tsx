import React from 'react';

export const BrandAvatar: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[480px] aspect-square">
      {/* Multi-layered ambient background radiance */}
      <div 
        className="absolute -inset-4 md:-inset-10 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      
      {/* Concentric Subtle Orbit Rings */}
      <div className="absolute inset-2 sm:inset-4 rounded-full border border-cyan-500/15 animate-[spin_40s_linear_infinite] pointer-events-none" />
      <div className="absolute inset-8 sm:inset-12 rounded-full border border-blue-500/10 animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />

      {/* Outer subtle glow ring */}
      <div className="relative p-2.5 sm:p-3.5 rounded-full border border-cyan-500/25 bg-gradient-to-b from-cyan-500/10 to-transparent shadow-[0_0_50px_-5px_rgba(56,189,248,0.25)]">
        
        {/* Inner border container */}
        <div className="relative p-1 rounded-full border border-white/10 bg-[#06080e]/80">
          
          {/* Main Avatar Image (1:1 ratio, strictly undistorted) */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-76 md:h-76 lg:w-88 lg:h-88 rounded-full overflow-hidden bg-slate-950 flex items-center justify-center">
            <img
              src="/assets/bhavesh-profile.jpg"
              alt="Bhavesh Chikate - Aspiring Software Developer"
              className="w-full h-full object-cover object-center select-none"
              loading="eager"
            />
          </div>

          {/* Floating Motto Status Tag */}
          <div className="absolute -bottom-3 sm:bottom-2 left-1/2 -translate-x-1/2 bg-[#090d16]/90 border border-cyan-500/35 px-4 py-1.5 rounded-full shadow-[0_6px_25px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-center gap-2 whitespace-nowrap z-20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-mono text-xs font-semibold tracking-wider text-cyan-200">
              CODE • BUILD • SOLVE
            </span>
          </div>

        </div>
      </div>

      {/* Floating Code Accent Badges */}
      <div className="absolute top-4 left-2 sm:left-6 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-[11px] font-mono text-cyan-300 shadow-lg backdrop-blur-md hidden sm:flex items-center gap-1.5 animate-bounce [animation-duration:6s]">
        <span className="text-cyan-400 font-bold">&lt;/&gt;</span>
        <span>C Systems</span>
      </div>

      <div className="absolute top-1/3 -right-2 sm:right-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-[11px] font-mono text-blue-300 shadow-lg backdrop-blur-md hidden sm:flex items-center gap-1.5 animate-bounce [animation-duration:5s] [animation-delay:-2s]">
        <span className="text-blue-400 font-bold">$</span>
        <span>Linux CLI</span>
      </div>

      <div className="absolute bottom-10 -left-1 sm:left-4 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-[11px] font-mono text-indigo-300 shadow-lg backdrop-blur-md hidden sm:flex items-center gap-1.5 animate-bounce [animation-duration:7s] [animation-delay:-3.5s]">
        <span className="text-cyan-400 font-bold">AI</span>
        <span>Prompt Eng</span>
      </div>

    </div>
  );
};
