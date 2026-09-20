import React, { useState } from 'react';
import { Sparkles, Filter } from 'lucide-react';
import { projectsData, type Project } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

type FilterCategory = 'All' | 'Data Analytics' | 'Power BI' | 'Excel' | 'SQL' | 'Python' | 'Web Development';

const filterCategories: FilterCategory[] = [
  'All',
  'Data Analytics',
  'Power BI',
  'Excel',
  'SQL',
  'Python',
  'Web Development'
];

export const ProjectSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Data Analytics') {
      return ['Power BI', 'Excel', 'SQL'].includes(project.category);
    }
    return project.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Deep-dive analytical dashboards, database querying projects, and modular Python applications transforming complex datasets into clear business intelligence.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Buttons Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono uppercase text-slate-500 mr-2">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>Filter:</span>
          </div>
          {filterCategories.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(0,242,254,0.3)] scale-105'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>

        {/* Project Modal Lightbox */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
