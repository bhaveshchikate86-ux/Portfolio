import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';

export const FeaturedProjectSection: React.FC = () => {
  const project = profileData.featuredProject;

  return (
    <section id="featured" className="py-24 border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-cyan-600 dark:text-cyan-400 text-sm font-semibold">04.</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">FEATURED WORK</h2>
          <div className="h-px bg-slate-200 dark:bg-white/10 flex-1 max-w-xs" />
        </div>

        {/* Featured Big Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-cyan-500/25 shadow-lg shadow-slate-200/50 dark:shadow-[0_0_40px_rgba(56,189,248,0.12)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERNSHIP SPOTLIGHT</span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                {project.category}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {project.name}
              </h3>
              <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                {project.fullName}
              </p>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-semibold text-sm transition-all shadow-md"
              >
                <span>View Repository on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Technical Terminal Mockup */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-950 border border-slate-800 dark:border-white/15 p-5 shadow-2xl space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <span>prompt-eval-task1.sh</span>
            </div>

            <div className="space-y-2 text-slate-300">
              <p className="text-cyan-400"># Prompt Engineering Task 1</p>
              <p className="text-slate-400">$ git clone https://github.com/bhaveshchikate86-ux/FUTURE_PE_01.git</p>
              <p className="text-emerald-400">✔ Cloned successfully</p>
              <p className="text-slate-400">$ cat prompt_spec.json</p>
              <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-slate-300 space-y-1">
                <p><span className="text-blue-400">"objective"</span>: "Structured Prompt Design",</p>
                <p><span className="text-blue-400">"role"</span>: "Software Developer Assistant",</p>
                <p><span className="text-blue-400">"constraints"</span>: ["Strict schema", "Zero hallucinations"]</p>
              </div>
              <p className="text-cyan-300">STATUS: Task 1 Evaluated & Committed</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
