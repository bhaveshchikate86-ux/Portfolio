import React from 'react';
import { GraduationCap } from 'lucide-react';
import { profileData } from '../../data/profile';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-cyan-600 dark:text-cyan-400 text-sm font-semibold">07.</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">EDUCATION</h2>
          <div className="h-px bg-slate-200 dark:bg-white/10 flex-1 max-w-xs" />
        </div>

        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div className="space-y-1.5 flex-1">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold">
              DIPLOMA PROGRAM
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {profileData.education.degree}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {profileData.education.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
