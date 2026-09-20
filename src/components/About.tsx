import React, { useState } from 'react';
import { 
  Database, 
  Sparkles, 
  RefreshCw, 
  LineChart, 
  LayoutDashboard, 
  Lightbulb,
  ArrowRight,
  Info
} from 'lucide-react';

interface PipelineStep {
  id: string;
  stage: string;
  name: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  bgColor: string;
  shortDesc: string;
  details: string;
  tools: string[];
}

const pipelineSteps: PipelineStep[] = [
  {
    id: 'raw',
    stage: '01',
    name: 'RAW DATA',
    icon: Database,
    color: '#38bdf8',
    borderColor: 'border-sky-500/30 hover:border-sky-400',
    bgColor: 'bg-sky-500/10',
    shortDesc: 'Ingesting CSVs, databases, operational logs and external sources',
    details: 'Acquiring unformatted datasets, handling schema discrepancies, inspecting raw column encodings, and understanding data dictionaries.',
    tools: ['PostgreSQL', 'CSV', 'Excel', 'Web Datasets']
  },
  {
    id: 'cleaning',
    stage: '02',
    name: 'DATA CLEANING',
    icon: RefreshCw,
    color: '#00f2fe',
    borderColor: 'border-cyan-500/30 hover:border-cyan-400',
    bgColor: 'bg-cyan-500/10',
    shortDesc: 'Eliminating nulls, duplicate keys, and invalid formats',
    details: 'Removing null transactions, standardizing date/timestamp conventions, validating numeric ranges, and ensuring data integrity.',
    tools: ['Power Query', 'Python', 'SQL (WHERE, COALESCE)', 'Excel']
  },
  {
    id: 'transform',
    stage: '03',
    name: 'TRANSFORMATION',
    icon: Sparkles,
    color: '#818cf8',
    borderColor: 'border-indigo-500/30 hover:border-indigo-400',
    bgColor: 'bg-indigo-500/10',
    shortDesc: 'Modeling relationships, normalized tables, and calculated columns',
    details: 'Creating relational star schemas, dimension tables, fact tables, lookup keys, and dynamic aggregations.',
    tools: ['Power Query', 'DAX Measures', 'SQL CTEs', 'XLOOKUP']
  },
  {
    id: 'analysis',
    stage: '04',
    name: 'ANALYSIS',
    icon: LineChart,
    color: '#c084fc',
    borderColor: 'border-purple-500/30 hover:border-purple-400',
    bgColor: 'bg-purple-500/10',
    shortDesc: 'Exploratory data analysis, statistical metrics, and trends',
    details: 'Executing window functions (RANK, DENSE_RANK), shift-based order aggregations, customer segmentation, and year-over-year trends.',
    tools: ['PostgreSQL', 'Python', 'Excel PivotTables', 'DAX']
  },
  {
    id: 'visualization',
    stage: '05',
    name: 'VISUALIZATION',
    icon: LayoutDashboard,
    color: '#f59e0b',
    borderColor: 'border-amber-500/30 hover:border-amber-400',
    bgColor: 'bg-amber-500/10',
    shortDesc: 'Interactive dashboards, visual hierarchies, and slicers',
    details: 'Building synchronized visual dashboards with borough maps, trend charts, dynamic KPIs, slicers, and interactive drill-downs.',
    tools: ['Power BI', 'PivotCharts', 'DAX Cards', 'Color Psychology']
  },
  {
    id: 'insights',
    stage: '06',
    name: 'INSIGHTS',
    icon: Lightbulb,
    color: '#10b981',
    borderColor: 'border-emerald-500/30 hover:border-emerald-400',
    bgColor: 'bg-emerald-500/10',
    shortDesc: 'Actionable business outcomes and executive decision support',
    details: 'Translating complex analytical calculations into concrete business findings, operational shift strategies, and high-impact conclusions.',
    tools: ['Executive Summaries', 'KPI Thresholds', 'Stakeholder Reporting']
  }
];

export const About: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>('raw');

  const selectedStep = pipelineSteps.find(s => s.id === activeStage) || pipelineSteps[0];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Profile & Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-6 space-y-5 text-slate-300 text-base leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-cyan-500/20 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                Who I Am & What I Do
              </h3>
              <p className="mb-4">
                I am a Computer Science graduate with a strong interest in <span className="text-cyan-300 font-semibold">Data Analytics</span> and <span className="text-cyan-300 font-semibold">Business Intelligence</span>. I enjoy working with raw datasets, cleaning and transforming data, identifying trends and patterns, creating dashboards, and communicating insights through clear visualizations.
              </p>
              <p>
                My technical interests include <span className="text-white font-medium">SQL, Power BI, Excel, Python</span>, data visualization, data cleaning, exploratory data analysis and business reporting. I view data not just as numbers, but as stories waiting to be discovered and shared to drive confident business decisions.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 backdrop-blur-md shadow-xl">
              <h4 className="text-xs uppercase font-mono tracking-widest text-cyan-400 mb-2">
                Analytical Philosophy
              </h4>
              <p className="text-lg font-semibold text-white mb-6">
                "Clean data precedes insightful analytics. Reliable business choices demand disciplined verification."
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-cyan-400">74K+</div>
                  <div className="text-xs text-slate-400 mt-1">Records Analyzed in NYC Collision Project</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-emerald-400">10 Core</div>
                  <div className="text-xs text-slate-400 mt-1">Complex SQL Queries Solved in Retail Analysis</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-amber-400">₹ 5.86L</div>
                  <div className="text-xs text-slate-400 mt-1">E-Commerce Revenue Modeled in Excel</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-purple-400">100%</div>
                  <div className="text-xs text-slate-400 mt-1">Authentic Portfolio Data & Real Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Interactive Data Pipeline */}
        <div className="mt-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-mono text-slate-400 mb-2">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive Pipeline — Hover or Click Any Stage</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              End-to-End Analytics Pipeline
            </h3>
          </div>

          {/* Pipeline Stages (Desktop Horizontal / Mobile Vertical) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStage === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStage(step.id)}
                  onMouseEnter={() => setActiveStage(step.id)}
                  className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-800/90 border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.2)] scale-[1.03]'
                      : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-slate-500">
                      {step.stage}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${step.bgColor}`}
                      style={{ color: step.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Stage Name */}
                  <div>
                    <h4 className="text-xs font-bold font-mono tracking-wider text-white mb-1.5">
                      {step.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">
                      {step.shortDesc}
                    </p>
                  </div>

                  {/* Desktop connector arrow indicator */}
                  {idx < pipelineSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-slate-950 border border-slate-700 items-center justify-center text-slate-400">
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Stage Deep Dive Card */}
          <div className="mt-6 p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                  style={{ backgroundColor: `${selectedStep.color}20`, color: selectedStep.color }}
                >
                  <selectedStep.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      STAGE {selectedStep.stage}
                    </span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs text-slate-400 font-mono">Detailed Operations</span>
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-wide">
                    {selectedStep.name}
                  </h4>
                </div>
              </div>

              {/* Tools Employed */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono uppercase text-slate-500 mr-1">
                  Tools & Methods:
                </span>
                {selectedStep.tools.map(tool => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-cyan-300 border border-cyan-500/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {selectedStep.details}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
