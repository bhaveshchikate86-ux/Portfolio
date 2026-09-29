import React from 'react';
import { Linkedin, Github, ArrowUpRight, MessageSquare } from 'lucide-react';
import { profileData } from '../../data/profile';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <span className="font-mono text-cyan-400 tracking-[0.25em] text-xs uppercase">08. {`//`} Connect</span>
          <h2 className="text-5xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">CONTACT</h2>
        </div>

        <div className="liquid-glass rounded-3xl p-10 sm:p-16 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 mb-16">
            <h3 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">something useful.</span>
            </h3>
            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
              Have an idea, student collaboration opportunity, questions about my prompt engineering tasks, or want to connect with The Kubics studio?
            </p>

            <div className="liquid-glass px-6 py-3 rounded-full flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-glow-pulse"></span>
              <span className="text-xs sm:text-sm font-mono text-slate-200 tracking-wider">
                OPEN TO TECHNICAL DISCUSSIONS & INTERNSHIPS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* LinkedIn Card */}
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass liquid-glass-hover p-8 rounded-2xl flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all">
                <Linkedin className="w-6 h-6" />
              </div>
              <h4 className="text-white font-display font-bold text-xl">LinkedIn</h4>
              <p className="text-sm text-slate-400 mt-2 font-light">Connect professionally</p>
              <div className="mt-6 flex items-center gap-2 text-cyan-400 text-xs font-mono font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass liquid-glass-hover p-8 rounded-2xl flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
                <Github className="w-6 h-6" />
              </div>
              <h4 className="text-white font-display font-bold text-xl">GitHub</h4>
              <p className="text-sm text-slate-400 mt-2 font-light">@bhaveshchikate86-ux</p>
              <div className="mt-6 flex items-center gap-2 text-cyan-400 text-xs font-mono font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Explore Code</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* The Kubics Contact Card */}
            <a
              href="https://thekubics.space/contact.html"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass liquid-glass-hover p-8 rounded-2xl flex flex-col items-center text-center group sm:col-span-2"
            >
              <div className="w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="text-white font-display font-bold text-2xl">The Kubics Studio</h4>
              <p className="text-sm text-slate-400 mt-2 font-light">Reach out through our studio portal</p>
              <div className="mt-6 flex items-center gap-2 text-cyan-400 text-xs font-mono font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <span>thekubics.space/contact.html</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};
