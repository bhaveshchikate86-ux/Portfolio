import React, { useState, useEffect } from 'react';
import { navItems, profileData } from '../../data/profile';
import { Menu, X, Github, Linkedin, Search, Sun, Moon } from 'lucide-react';
import { CommandPalette } from './CommandPalette';
import { useTheme } from '../../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex justify-center py-5 ${
          isScrolled ? 'py-4' : ''
        }`}
      >
        <div className={`transition-all duration-300 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center`}>
          <div className={`flex items-center justify-between w-full lg:w-auto lg:gap-8 px-4 py-2.5 rounded-full ${isScrolled ? 'liquid-glass' : 'bg-transparent'}`}>
            
            {/* Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-1 focus:outline-none"
            >
              <span className="font-display font-bold text-lg tracking-wider text-slate-900 dark:text-white transition-colors">
                BHAV<span className="text-cyan-400">E</span>SH
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-cyan-400/15 text-cyan-300 border border-cyan-400/30'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Icons: Theme Toggle, Search, Socials */}
            <div className="flex items-center gap-2">
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-400 hover:text-cyan-300 bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all focus:outline-none"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-cyan-400" />
                )}
              </button>

              {/* Quick Search Button */}
              <button
                onClick={() => setPaletteOpen(true)}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white text-xs font-mono transition-all"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-[10px] text-slate-400">⌘K</kbd>
              </button>

              {/* GitHub */}
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex p-2 rounded-full text-slate-400 hover:text-white bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex p-2 rounded-full text-slate-400 hover:text-cyan-300 bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-slate-400 hover:text-white bg-white/5 border border-white/10 lg:hidden focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[-1] pt-24 bg-[#06080e]/95 backdrop-blur-2xl animate-in fade-in">
            <div className="flex flex-col items-center gap-6 p-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px w-full max-w-xs bg-white/10 my-4" />
              <div className="flex items-center gap-6">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Command Palette Modal */}
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
};
