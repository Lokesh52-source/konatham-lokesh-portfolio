import React, { useState } from 'react';
import { 
  Code2, 
  TrendingUp, 
  FileSpreadsheet, 
  PieChart, 
  Database, 
  Wrench, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { skillsCategories, type SkillCategory } from '../data/skillsData';

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'TrendingUp': return TrendingUp;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'PieChart': return PieChart;
      case 'Database': return Database;
      case 'Wrench': return Wrench;
      default: return Layers;
    }
  };

  const displayedCategories = activeCategoryId === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === activeCategoryId);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Tooling</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Practical, industry-aligned competencies in SQL querying, business intelligence, spreadsheet modeling, and Python automation. (No arbitrary or misleading percentages).
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategoryId === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(0,242,254,0.3)]'
                : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            All Categories ({skillsCategories.length})
          </button>

          {skillsCategories.map(cat => {
            const Icon = getCategoryIcon(cat.iconName);
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(0,242,254,0.3)]'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Display */}
        <div className="space-y-12">
          {displayedCategories.map((category: SkillCategory) => {
            const Icon = getCategoryIcon(category.iconName);

            return (
              <div
                key={category.id}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/90 backdrop-blur-md relative overflow-hidden"
              >
                {/* Category Top Banner */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: `${category.color}15`, color: category.color, border: `1px solid ${category.color}35` }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wide">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {category.skills.length} Demonstrated Competencies
                      </p>
                    </div>
                  </div>
                  <span
                    className="hidden sm:inline-block text-[11px] font-mono uppercase px-3 py-1 rounded-full border"
                    style={{ borderColor: `${category.color}40`, color: category.color, backgroundColor: `${category.color}10` }}
                  >
                    Verified Knowledge
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                            <span>{skill.name}</span>
                          </h4>
                          {skill.tag && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700 group-hover:border-cyan-500/30 group-hover:text-cyan-300">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                          {skill.description}
                        </p>
                      </div>

                      {/* Subtle hover bar indicator */}
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-3 transition-all duration-300 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
