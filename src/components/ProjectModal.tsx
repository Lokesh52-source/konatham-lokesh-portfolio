import React, { useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Layers, BarChart2 } from 'lucide-react';
import type { Project } from '../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl my-8 rounded-3xl bg-[#0c1220] border border-cyan-500/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-md text-xs font-mono uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {project.categoryLabel}
            </span>
            {project.featured && (
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Featured Hero Project
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Title & Overview */}
          <div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              {project.title}
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* High-Resolution Dashboard Mockup / Preview Lightbox */}
          <div className="rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 shadow-2xl relative group">
            <img
              src={project.image}
              alt={`${project.title} Preview`}
              className="w-full h-auto max-h-[520px] object-contain mx-auto transition-transform duration-300"
            />
            <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-xs text-cyan-300 font-mono backdrop-blur-md">
              High-Res Preview
            </div>
          </div>

          {/* KPI Dashboard Cards */}
          {project.kpis && project.kpis.length > 0 && (
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-cyan-400" />
                <span>Primary Performance Indicators & Metrics</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.kpis.map((kpi, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                    <div className="text-xs text-slate-400 mb-1">{kpi.label}</div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-white">{kpi.value}</div>
                    {kpi.sub && <div className="text-[11px] text-cyan-400/80 mt-1">{kpi.sub}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features & Demonstrated Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h4 className="text-xs uppercase font-mono tracking-widest text-slate-300 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Key Features & Analysis Points</span>
              </h4>
              <ul className="space-y-2.5">
                {project.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h4 className="text-xs uppercase font-mono tracking-widest text-slate-300 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Analytical Skills Demonstrated</span>
              </h4>
              <ul className="space-y-2.5">
                {project.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SQL Snippet Preview if present */}
          {project.sqlSnippet && (
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-sky-400 mb-2">
                PostgreSQL Shift Analysis Query
              </h4>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-sky-300 overflow-x-auto leading-relaxed">
                <pre>{project.sqlSnippet}</pre>
              </div>
            </div>
          )}

          {/* Tools Used Chips */}
          <div>
            <span className="text-xs font-mono uppercase text-slate-500 block mb-2">
              Technology Stack:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-850 bg-slate-900 text-cyan-300 border border-cyan-500/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800/80 bg-slate-900/80">
          <div className="text-xs text-slate-400 font-mono">
            {project.role ? `Role: ${project.role}` : 'Data Analytics Project'}
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>View GitHub</span>
              </a>
            ) : (
              <span className="px-3 py-1.5 rounded-xl text-xs font-mono text-slate-500 border border-slate-800">
                GitHub link coming soon
              </span>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
