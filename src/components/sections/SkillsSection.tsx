import React from 'react';
import { profileData } from '../../data/profile';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-20">
          <span className="font-mono text-cyan-400 tracking-[0.25em] text-xs uppercase">03. {`//`} Arsenal</span>
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            SKILLS & TECH STACK
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg font-light mt-4">
            Verified tools, programming languages, environments, and specialized domains I actively practice, study, and apply.
          </p>
        </div>

        {/* 9-Grid Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.skills.map((skill, index) => (
            <div
              key={skill.id}
              className="liquid-glass liquid-glass-hover p-8 rounded-2xl cursor-pointer flex flex-col justify-between group min-h-[240px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-cyan-400/50 text-xs font-semibold tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 uppercase font-medium">
                    {skill.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-[10px] font-mono tracking-[0.15em] text-slate-400 mt-2 uppercase">
                  {skill.category}
                </p>

                <p className="text-sm text-slate-300 mt-4 leading-relaxed font-light">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
