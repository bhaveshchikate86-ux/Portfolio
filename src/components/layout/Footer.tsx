import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-[#030407] transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <span className="font-display font-bold text-xl text-white tracking-widest">
                BHAV<span className="text-cyan-400">E</span>SH
              </span>
              <div className="w-1 h-1 rounded-full bg-slate-700" />
              <span className="font-mono text-[10px] text-cyan-400/80 font-medium tracking-[0.2em] uppercase">
                {profileData.brandPhrase}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-light tracking-wide">
              &copy; {new Date().getFullYear()} Bhavesh Chikate. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={profileData.community.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              aria-label="The Kubics"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
