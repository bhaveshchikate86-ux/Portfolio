import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { profileData } from '../../data/profile';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-cyan-600 dark:text-cyan-400 text-sm font-semibold">05.</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">REPOSITORIES & TASKS</h2>
          <div className="h-px bg-slate-200 dark:bg-white/10 flex-1 max-w-xs" />
        </div>

        <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base mb-12">
          All verified public repositories published on my GitHub profile representing prompt engineering internship tasks and code investigations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profileData.projects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-white/5">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    {project.fullName}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Public Repo</span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 group/link font-medium"
                >
                  <span>View Code</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
