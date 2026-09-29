import React from 'react';
import { BrandAvatar } from './BrandAvatar';
import { profileData } from '../../data/profile';
import { Terminal, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* Status Dot */}
              <div className="liquid-glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-slate-300 text-xs font-mono tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-glow-pulse"></span>
                <span>Building & exploring</span>
              </div>

              {/* Identity Pill */}
              <div className="liquid-glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-slate-300 text-xs font-mono tracking-widest uppercase">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                {profileData.identity}
              </div>

              {/* Member of The Kubics */}
              <a
                href={profileData.community.url}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass liquid-glass-hover inline-flex items-center gap-2 px-4 py-2 rounded-full text-slate-300 hover:text-white text-xs font-mono tracking-widest uppercase transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-glow-pulse"></span>
                <span>MEMBER OF {profileData.community.name}</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-4">
              <h1 className="text-7xl sm:text-8xl md:text-9xl font-black font-display text-white tracking-tight leading-[0.9]">
                BHAV<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">E</span>SH <br />
                CHIKATE
              </h1>
              
              {/* Brand Phrase */}
              <p className="text-sm tracking-[0.3em] text-cyan-400/80 font-mono uppercase mt-4 block">
                {profileData.brandPhrase}
              </p>
            </div>

            {/* Short Description */}
            <p className="text-lg text-slate-300 max-w-lg leading-relaxed font-light">
              {profileData.shortDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 w-full sm:w-auto">
              <a
                href="#featured"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_0_40px_rgba(56,189,248,0.3)] hover:shadow-[0_0_60px_rgba(56,189,248,0.5)] transition-all uppercase tracking-widest"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="liquid-glass liquid-glass-hover w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm text-slate-200 transition-all uppercase tracking-widest"
              >
                Let's Connect
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-8 pt-8 text-xs font-mono tracking-widest uppercase text-slate-500">
              <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 pb-1 border-b border-transparent hover:border-cyan-400 transition-all">GitHub</a>
              <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 pb-1 border-b border-transparent hover:border-cyan-400 transition-all">LinkedIn</a>
              <a href={profileData.community.url} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 pb-1 border-b border-transparent hover:border-cyan-400 transition-all">TheKubics</a>
            </div>

          </div>

          {/* Right / Visual Branding Column */}
          <div className="lg:col-span-5 flex items-center justify-center order-first lg:order-last relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full animate-float -z-10" />
            <BrandAvatar />
          </div>

        </div>
      </div>
    </section>
  );
};
