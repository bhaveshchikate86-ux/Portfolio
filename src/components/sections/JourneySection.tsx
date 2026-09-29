import React from 'react';
import { profileData } from '../../data/profile';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-cyan-600 dark:text-cyan-400 text-sm font-semibold">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">DEVELOPMENT JOURNEY</h2>
          <div className="h-px bg-slate-200 dark:bg-white/10 flex-1 max-w-xs" />
        </div>

        <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base mb-12">
          From core computing fundamentals to hands-on AI prompt engineering and collaborative software building.
        </p>

        {/* Timeline Stack */}
        <div className="border-t border-slate-200 dark:border-white/10 divide-y divide-slate-200 dark:divide-white/10">
          {profileData.journey.map((item) => (
            <div 
              key={item.number}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group hover:bg-black/[0.02] dark:hover:bg-white/[0.01] transition-colors"
            >
              <div className="md:col-span-2 flex items-center gap-4">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {item.number}
                </span>
                <span className="text-[11px] font-mono tracking-widest text-cyan-700 dark:text-cyan-400 uppercase bg-slate-100 dark:bg-slate-900 px-2.5 py-0.5 rounded border border-slate-200 dark:border-white/5 font-semibold">
                  {item.category}
                </span>
              </div>

              <div className="md:col-span-10 space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-100 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
