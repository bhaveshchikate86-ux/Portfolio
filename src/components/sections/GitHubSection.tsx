import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { profileData } from '../../data/profile';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="py-20 border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-[#070b14] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 tracking-wider uppercase font-semibold">
              OPEN SOURCE & REPOSITORIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Explore My Code on GitHub
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl">
              Inspect repositories, internship task implementations, code commits, and project structure directly on GitHub.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-md"
            >
              <Github className="w-4 h-4" />
              <span>Visit @bhaveshchikate86-ux</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={profileData.socials.communityGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:border-cyan-500/50 hover:text-slate-950 dark:hover:text-white transition-all shadow-sm"
            >
              <span>The Kubics GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
