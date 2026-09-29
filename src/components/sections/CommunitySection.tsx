import React from 'react';
import { ExternalLink, Users } from 'lucide-react';
import { profileData } from '../../data/profile';

export const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-24 border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-cyan-600 dark:text-cyan-400 text-sm font-semibold">06.</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">THE KUBICS & COMMUNITY</h2>
          <div className="h-px bg-slate-200 dark:bg-white/10 flex-1 max-w-xs" />
        </div>

        {/* Feature Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-slate-900/80 dark:via-slate-900/50 dark:to-slate-950 border border-slate-200 dark:border-cyan-500/20 shadow-lg shadow-slate-200/50 dark:shadow-[0_0_50px_rgba(56,189,248,0.08)] relative overflow-hidden">
          
          <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none">
            <Users className="w-64 h-64 text-cyan-600 dark:text-cyan-400" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
              CORE AFFILIATION
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Proud Member of <span className="text-cyan-600 dark:text-cyan-400">The Kubics</span>
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {profileData.community.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Philosophy</span>
                <p className="text-sm font-medium text-slate-900 dark:text-white mt-1">{profileData.community.philosophy}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Studio Focus</span>
                <p className="text-sm font-medium text-slate-900 dark:text-white mt-1">Web, Mobile, Desktop, Automation</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Bhavesh's Role</span>
                <p className="text-sm font-medium text-cyan-600 dark:text-cyan-300 mt-1">Active Member & Developer</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={profileData.community.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-semibold text-sm transition-all shadow-md"
              >
                <span>Visit The Kubics Studio (thekubics.space)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={profileData.community.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:text-slate-950 dark:hover:text-white hover:border-cyan-500/50 transition-all shadow-sm"
              >
                <span>The Kubics GitHub</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
