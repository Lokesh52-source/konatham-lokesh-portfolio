import React, { useState } from 'react';
import { 
  DownloadCloud, 
  Sparkles, 
  Layers, 
  BarChart, 
  Eye, 
  MessageSquareShare, 
  Activity
} from 'lucide-react';

interface WorkflowStage {
  step: string;
  title: string;
  icon: React.ElementType;
  color: string;
  description: string;
  checklist: string[];
}

const workflowStages: WorkflowStage[] = [
  {
    step: '01',
    title: 'Collect',
    icon: DownloadCloud,
    color: '#38bdf8',
    description: 'Gathering raw datasets from relational databases, CSV sheets, operational logs, and business APIs.',
    checklist: ['Verify schema authenticity', 'Inspect record volumes', 'Document source metadata']
  },
  {
    step: '02',
    title: 'Clean',
    icon: Sparkles,
    color: '#00f2fe',
    description: 'Purging anomalies, resolving missing entries, standardizing date/time timestamps, and deduplicating keys.',
    checklist: ['Isolate null/blank rows', 'Format numeric datatypes', 'Validate duplicate IDs']
  },
  {
    step: '03',
    title: 'Transform',
    icon: Layers,
    color: '#818cf8',
    description: 'Structuring normalized tables, star schema models, foreign key relationships, and calculated variables.',
    checklist: ['Build dimension & fact tables', 'Create lookup keys', 'Formulate DAX & SQL expressions']
  },
  {
    step: '04',
    title: 'Analyze',
    icon: BarChart,
    color: '#c084fc',
    description: 'Performing exploratory analysis, calculating aggregate KPIs, identifying distributions, and segmenting cohorts.',
    checklist: ['Shift & temporal analysis', 'Window ranking functions', 'Measure average order values']
  },
  {
    step: '05',
    title: 'Visualize',
    icon: Eye,
    color: '#f59e0b',
    description: 'Designing intuitive dashboards with consistent color theory, dynamic slicers, and interactive drill-downs.',
    checklist: ['Geographic distribution maps', 'Time-series trend curves', 'Responsive executive cards']
  },
  {
    step: '06',
    title: 'Communicate Insights',
    icon: MessageSquareShare,
    color: '#10b981',
    description: 'Synthesizing quantitative metrics into strategic business takeaways that support leadership decisions.',
    checklist: ['Executive summaries', 'Operational recommendations', 'Data-backed next steps']
  }
];

export const DataWorkflow: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40 border-y border-slate-800/80">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Methodological Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How I Work <span className="text-gradient-cyan">With Data</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            A disciplined six-stage methodology connecting raw information to strategic business intelligence.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 6-Stage Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {workflowStages.map((stage, idx) => {
            const Icon = stage.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={stage.step}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isHovered
                    ? 'bg-slate-900/90 border-2 border-cyan-400/80 shadow-[0_0_30px_rgba(0,242,254,0.15)] -translate-y-1.5'
                    : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Row: Step # & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold font-mono text-slate-700 group-hover:text-slate-500">
                      {stage.step}
                    </span>
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300"
                      style={{
                        backgroundColor: `${stage.color}15`,
                        color: stage.color,
                        border: `1px solid ${stage.color}35`,
                        transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <span>{stage.title}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                {/* Micro Checklist */}
                <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-semibold mb-2">
                    Key Checkpoints:
                  </div>
                  {stage.checklist.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stage.color }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom subtle glow line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300"
                  style={{
                    backgroundColor: stage.color,
                    opacity: isHovered ? 0.9 : 0.2
                  }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
