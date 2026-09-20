import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Database, ArrowUpRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scrollspy calculation
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#07090e]/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.2)] group-hover:border-cyan-300 group-hover:scale-105 transition-all">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors text-base sm:text-lg flex items-center gap-1.5">
              KONATHAM LOKESH
            </span>
            <span className="text-[10px] uppercase tracking-widest text-cyan-400/80 font-mono block">
              Data Analyst
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/30 shadow-[0_0_12px_rgba(0,242,254,0.15)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Status */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/resume/Konatham-Lokesh-Resume.pdf"
            download="Konatham-Lokesh-Resume.pdf"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText className="w-3.5 h-3.5 text-slate-950" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-slate-950" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 p-5 rounded-2xl bg-[#0b1120]/95 backdrop-blur-2xl border border-cyan-500/20 shadow-2xl flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="/resume/Konatham-Lokesh-Resume.pdf"
              download="Konatham-Lokesh-Resume.pdf"
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg"
            >
              <FileText className="w-4 h-4" />
              <span>Download Official Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
