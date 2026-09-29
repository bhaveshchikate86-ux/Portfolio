import React from 'react';
import { profileData } from '../../data/profile';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-20 border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 tracking-widest uppercase font-semibold">
          PERSONAL PHILOSOPHY
        </span>
        <blockquote className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-mono">
          "{profileData.brandPhrase}"
        </blockquote>
        <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
          Consistent experimentation, low-level curiosity, and purposeful projects turn technical knowledge into lasting software engineering capability.
        </p>
      </div>
    </section>
  );
};
