import React from 'react';
import { Database, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#05070c] py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <Database className="w-4 h-4" />
            </div>
            <span className="font-bold text-white tracking-wide text-base">
              KONATHAM LOKESH
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Data Analyst • SQL | Power BI | Excel | Python
          </p>
          <p className="text-xs text-slate-500 italic mt-1">
            "Built with data, curiosity and code."
          </p>
        </div>

        {/* Social Badges */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:konathamlokesh55@gmail.com"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            aria-label="Email Konatham Lokesh"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/konatham-lokesh-718661290/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <svg className="w-4 h-4 fill-[#0077B5]" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
            </svg>
          </a>
          <a
            href="https://github.com/Lokesh52-source"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>

        {/* Copyright & Scroll To Top */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="text-xs text-slate-500 font-mono">
            © 2026 Konatham Lokesh. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-400 hover:text-cyan-300 transition-all group"
            aria-label="Scroll to top"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
