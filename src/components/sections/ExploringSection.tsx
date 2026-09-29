import React from 'react';
import { Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';

export const ExploringSection: React.FC = () => {
  return (
    <section id="exploring" className="py-20 border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-lg">
            <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CONTINUOUS LEARNING</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Currently Exploring
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Active topics and technologies I am currently digging into through personal experimentation and coursework.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 max-w-xl">
            {profileData.exploring.map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 text-sm font-mono text-slate-700 dark:text-slate-200 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors shadow-xs"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
