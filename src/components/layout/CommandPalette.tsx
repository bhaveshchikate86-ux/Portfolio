import React, { useState, useEffect } from 'react';
import { Search, User, Terminal, FolderGit2, BookOpen, Users, MessageSquare, ExternalLink } from 'lucide-react';
import { profileData } from '../../data/profile';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: "Go to About", href: "#about", icon: User, category: "Navigation" },
    { label: "Go to Development Journey", href: "#journey", icon: BookOpen, category: "Navigation" },
    { label: "Go to Skills & Tech Stack", href: "#skills", icon: Terminal, category: "Navigation" },
    { label: "Go to Featured Work", href: "#featured", icon: FolderGit2, category: "Navigation" },
    { label: "Go to Repositories & Tasks", href: "#projects", icon: FolderGit2, category: "Navigation" },
    { label: "Go to The Kubics Studio", href: "#community", icon: Users, category: "Navigation" },
    { label: "Go to Contact", href: "#contact", icon: MessageSquare, category: "Navigation" },
    { label: "View GitHub Profile", href: profileData.socials.github, isExternal: true, icon: ExternalLink, category: "External" },
    { label: "View LinkedIn Profile", href: profileData.socials.linkedin, isExternal: true, icon: ExternalLink, category: "External" },
    { label: "Visit The Kubics Studio", href: profileData.community.url, isExternal: true, icon: ExternalLink, category: "External" },
  ];

  const filteredActions = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 dark:bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50">
          <Search className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Search sections, skills, or links..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-4 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-sm font-sans"
            autoFocus
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 text-xs font-mono"
          >
            ESC
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length > 0 ? (
            filteredActions.map((action) => {
              const Icon = action.icon;
              return (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.isExternal ? "_blank" : undefined}
                  rel={action.isExternal ? "noopener noreferrer" : undefined}
                  onClick={() => onClose()}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/50">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{action.label}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                    {action.isExternal ? "External ↗" : "Jump →"}
                  </span>
                </a>
              );
            })
          ) : (
            <div className="py-8 text-center text-sm text-slate-400">
              No matching results for "{query}"
            </div>
          )}
        </div>

        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <span>Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200">Ctrl+K</kbd> anywhere</span>
          <span>Bhavesh Chikate Portfolio</span>
        </div>
      </div>
    </div>
  );
};
