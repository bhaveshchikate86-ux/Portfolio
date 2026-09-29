import React from 'react';
import { Terminal, Cpu } from 'lucide-react';
import { profileData } from '../../data/profile';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-20">
          <span className="font-mono text-cyan-400 tracking-[0.25em] text-xs uppercase">01. {`//`} Overview</span>
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">ABOUT</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Storytelling Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <div className="liquid-glass rounded-2xl p-8 sm:p-10 space-y-8">
              <p className="text-2xl text-slate-100 font-display font-light leading-relaxed">
                I'm <strong className="text-white font-bold">Bhavesh Chikate</strong>, a Diploma Computer Engineering student passionate about programming fundamentals, systems logic, and emerging AI technologies.
              </p>

              <p className="text-slate-300 text-lg leading-relaxed font-light">
                My engineering philosophy revolves around three straightforward principles: <strong className="text-cyan-400 font-mono tracking-widest text-sm uppercase">CODE • BUILD • SOLVE</strong>. I believe that true understanding comes from writing clean code, building tangible projects, and persistently iterating on practical solutions.
              </p>

              <p className="text-slate-300 text-lg leading-relaxed font-light">
                I spend my time strengthening core programming foundations in <strong className="text-white">C, C++, and Linux</strong>, while actively researching and practicing <strong className="text-cyan-400">Prompt Engineering and AI model interactions</strong> through dedicated internship tasks and collaborative development in <strong className="text-white">The Kubics</strong>.
              </p>
            </div>

            {/* Quick Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="liquid-glass liquid-glass-hover p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 shrink-0">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-display font-medium text-lg">Low-Level Foundations</h4>
                  <p className="text-sm text-slate-400 mt-2 font-light leading-relaxed">Grounded understanding of memory, pointers, and Unix toolchains in C, C++, and Linux.</p>
                </div>
              </div>

              <div className="liquid-glass liquid-glass-hover p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-400/10 text-blue-400 border border-blue-400/20 shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-display font-medium text-lg">Prompt Engineering</h4>
                  <p className="text-sm text-slate-400 mt-2 font-light leading-relaxed">Hands-on experimentation with structured prompts, context framing, and LLMs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="liquid-glass liquid-glass-hover p-8 rounded-2xl">
              <span className="text-[10px] font-mono text-cyan-400 tracking-[0.2em] uppercase block mb-3">
                PRIMARY FOCUS
              </span>
              <strong className="text-white font-display text-xl font-medium block">
                Software Development & AI
              </strong>
            </div>

            <div className="liquid-glass liquid-glass-hover p-8 rounded-2xl">
              <span className="text-[10px] font-mono text-cyan-400 tracking-[0.2em] uppercase block mb-3">
                EDUCATION
              </span>
              <strong className="text-white font-display text-xl font-medium block">
                Diploma in Computer Engineering
              </strong>
            </div>

            <div className="liquid-glass liquid-glass-hover p-8 rounded-2xl">
              <span className="text-[10px] font-mono text-cyan-400 tracking-[0.2em] uppercase block mb-3">
                COMMUNITY AFFILIATION
              </span>
              <strong className="text-cyan-300 font-display text-xl font-medium block">
                The Kubics Software Studio
              </strong>
            </div>

            <div className="liquid-glass liquid-glass-hover p-8 rounded-2xl">
              <span className="text-[10px] font-mono text-cyan-400 tracking-[0.2em] uppercase block mb-3">
                PERSONAL MOTTO
              </span>
              <strong className="text-slate-200 text-sm font-mono tracking-widest block uppercase">
                {profileData.brandPhrase}
              </strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
