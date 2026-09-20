import React from 'react';
import { 
  ArrowRight, 
  Layers,
  Database,
  Table2,
  BarChart3,
  Code2,
  Globe,
  Sparkles,
  Maximize2
} from 'lucide-react';
import type { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const isHero = project.featured;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Power BI': return BarChart3;
      case 'Excel': return Table2;
      case 'SQL': return Database;
      case 'Python': return Code2;
      default: return Globe;
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <div
      className={`group relative rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isHero
          ? 'lg:col-span-2 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-[#0b1329]/90 border-2 border-cyan-500/40 shadow-[0_0_35px_rgba(0,242,254,0.15)]'
          : 'bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/30 hover:bg-slate-900/80 shadow-xl'
      }`}
    >
      {/* Top Banner & Image Preview */}
      <div className="relative overflow-hidden cursor-pointer" onClick={() => onOpenModal(project)}>
        
        {/* Aspect Ratio Container for Image */}
        <div className={`w-full overflow-hidden bg-slate-950 relative ${isHero ? 'h-64 sm:h-80 md:h-96' : 'h-52 sm:h-60'}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-80" />

          {/* Quick Zoom Overlay on Hover */}
          <div className="absolute inset-0 bg-cyan-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
            <div className="px-4 py-2 rounded-xl bg-slate-900/90 text-cyan-300 border border-cyan-400/50 text-xs font-mono font-semibold flex items-center gap-2 shadow-2xl">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Expand Dashboard Preview</span>
            </div>
          </div>
        </div>

        {/* Floating Category Pill */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md shadow-md">
            <CategoryIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>{project.categoryLabel}</span>
          </span>
          {isHero && (
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40 backdrop-blur-md shadow-md">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Hero Project
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          {/* Title */}
          <h3
            onClick={() => onOpenModal(project)}
            className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer mb-3 leading-snug"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* KPI Preview Chips if present */}
          {project.kpis && project.kpis.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6 p-3 rounded-2xl bg-slate-950/60 border border-slate-800">
              {project.kpis.map((kpi, kIdx) => (
                <div key={kIdx} className="text-center sm:text-left">
                  <div className="text-[10px] text-slate-400 font-mono truncate">{kpi.label}</div>
                  <div className="text-sm sm:text-base font-bold font-mono text-cyan-400">{kpi.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Key Features Bullet List */}
          <div className="mb-6 space-y-1.5">
            <div className="text-[11px] uppercase font-mono tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Key Highlights & Analysis</span>
            </div>
            {project.features.slice(0, 3).map((feat, fIdx) => (
              <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tools.map(tool => (
              <span
                key={tool}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenModal(project)}
            className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View Project & Insights</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all"
                title="View GitHub Repository"
                aria-label={`View GitHub for ${project.title}`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            ) : (
              <span className="text-[10px] font-mono text-slate-500">
                Repo coming soon
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
