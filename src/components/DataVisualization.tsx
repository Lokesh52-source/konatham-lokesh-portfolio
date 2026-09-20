import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  MapPin, 
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

interface BoroughData {
  name: string;
  accidents: number;
  rate: number;
  color: string;
}

const boroughData: BoroughData[] = [
  { name: 'Brooklyn', accidents: 26400, rate: 34.38, color: '#38bdf8' },
  { name: 'Queens', accidents: 17200, rate: 22.58, color: '#00f2fe' },
  { name: 'Manhattan', accidents: 14100, rate: 18.72, color: '#818cf8' },
  { name: 'Bronx', accidents: 9600, rate: 12.58, color: '#c084fc' },
  { name: 'Staten Island', accidents: 7581, rate: 9.82, color: '#10b981' }
];

const timeTrendData = [
  { label: 'Jan', accidents: 11200, revenue: 42000 },
  { label: 'Feb', accidents: 9800, revenue: 38000 },
  { label: 'Mar', accidents: 7600, revenue: 51000 },
  { label: 'Apr', accidents: 5100, revenue: 49000 },
  { label: 'May', accidents: 6200, revenue: 62000 },
  { label: 'Jun', accidents: 7900, revenue: 58000 },
  { label: 'Jul', accidents: 8400, revenue: 64000 },
  { label: 'Aug', accidents: 7300, revenue: 55000 },
  { label: 'Sep', accidents: 4200, revenue: 48000 },
  { label: 'Oct', accidents: 3800, revenue: 52000 },
  { label: 'Nov', accidents: 3200, revenue: 59000 },
  { label: 'Dec', accidents: 2900, revenue: 68000 }
];

const occasionDonut = [
  { name: 'Anniversary', pct: 36, color: '#38bdf8' },
  { name: 'Birthday', pct: 28, color: '#00f2fe' },
  { name: 'Festivals', pct: 22, color: '#c084fc' },
  { name: 'Corporate & Other', pct: 14, color: '#10b981' }
];

export const DataVisualization: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'accidents' | 'revenue'>('accidents');
  const [selectedBorough, setSelectedBorough] = useState<BoroughData>(boroughData[0]);
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);

  const maxBarValue = Math.max(...boroughData.map(b => b.accidents));
  const maxTrendValue = Math.max(...timeTrendData.map(t => activeMetric === 'accidents' ? t.accidents : t.revenue));

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with explicit Interactive Demo badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-bold tracking-wider uppercase">Interactive Demo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Data <span className="text-gradient-cyan">Visualization</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Live interactive preview of chart components, spatial breakdown heuristics, and responsive KPI widgets reflecting analytical dashboards.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl glass-card border border-cyan-500/20">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
              <span>ACCIDENT VOLUME</span>
              <div className="flex items-center text-emerald-400 text-[11px] font-semibold">
                <ArrowDownRight className="w-3.5 h-3.5" />
                <span>-18.4% YoY</span>
              </div>
            </div>
            <div className="text-3xl font-extrabold font-mono text-white">74,881</div>
            <div className="text-xs text-cyan-400/80 mt-1">NYC Collisions Tracked</div>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-indigo-500/20">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
              <span>INJURY RATIO</span>
              <div className="flex items-center text-amber-400 text-[11px] font-semibold">
                <span>0.37 / Crash</span>
              </div>
            </div>
            <div className="text-3xl font-extrabold font-mono text-white">27,000+</div>
            <div className="text-xs text-indigo-400/80 mt-1">Total Persons Injured</div>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-emerald-500/20">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
              <span>MODEL REVENUE</span>
              <div className="flex items-center text-emerald-400 text-[11px] font-semibold">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+12.6% Mtd</span>
              </div>
            </div>
            <div className="text-3xl font-extrabold font-mono text-white">₹ 5,86,176</div>
            <div className="text-xs text-emerald-400/80 mt-1">FNP Orders Modeled</div>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-purple-500/20">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
              <span>AVG CUSTOMER SPEND</span>
              <div className="flex items-center text-cyan-400 text-[11px] font-semibold">
                <span>Healthy Margin</span>
              </div>
            </div>
            <div className="text-3xl font-extrabold font-mono text-white">₹ 4,652.19</div>
            <div className="text-xs text-purple-400/80 mt-1">Average Order Value</div>
          </div>
        </div>

        {/* Main Charts Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Chart 1: Interactive Bar Chart - Borough Accidents (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-cyan-400 mb-1">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Geographic Distribution</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Accidents by Borough
                  </h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 border border-slate-700">
                  Select bar to inspect
                </span>
              </div>

              {/* Bars list */}
              <div className="space-y-4">
                {boroughData.map((b) => {
                  const isSelected = selectedBorough.name === b.name;
                  const widthPercent = (b.accidents / maxBarValue) * 100;

                  return (
                    <div
                      key={b.name}
                      onClick={() => setSelectedBorough(b)}
                      className={`p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'bg-slate-800/90 border border-cyan-400/60 shadow-md'
                          : 'bg-slate-900/40 hover:bg-slate-800/50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-1.5">
                        <span className="text-slate-200 font-semibold">{b.name}</span>
                        <div className="flex items-center gap-3 font-mono">
                          <span className="text-cyan-300 font-bold">{b.accidents.toLocaleString()}</span>
                          <span className="text-slate-500 text-xs">({b.rate}%)</span>
                        </div>
                      </div>

                      {/* Bar Track */}
                      <div className="w-full h-3 rounded-full bg-slate-950 overflow-hidden relative">
                        <div
                          className="h-full rounded-full transition-all duration-500 ease-out"
                          style={{
                            width: `${widthPercent}%`,
                            backgroundColor: b.color,
                            boxShadow: isSelected ? `0 0 12px ${b.color}` : 'none'
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Borough Selected Details */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Selected: <strong className="text-white">{selectedBorough.name}</strong></span>
              </div>
              <span className="font-mono text-cyan-400">
                {selectedBorough.rate}% of total recorded collisions
              </span>
            </div>
          </div>

          {/* Chart 2: Interactive Donut Chart & Occasion breakdown (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-purple-400 mb-1">
                    <PieChart className="w-3.5 h-3.5" />
                    <span>Occasion Share</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    FNP Revenue by Category
                  </h3>
                </div>
              </div>

              {/* Donut SVG */}
              <div className="relative flex items-center justify-center py-6">
                <svg className="w-48 h-48 -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#1e293b" strokeWidth="16" />
                  
                  {/* Segments */}
                  {/* Anniversary 36% -> strokeDasharray="36 100", offset 0 */}
                  <circle
                    cx="50" cy="50" r="38" fill="none"
                    stroke="#38bdf8" strokeWidth="16"
                    strokeDasharray="86 240"
                    strokeDashoffset="0"
                    className="transition-all hover:opacity-80 cursor-pointer"
                  />
                  {/* Birthday 28% -> 67 */}
                  <circle
                    cx="50" cy="50" r="38" fill="none"
                    stroke="#00f2fe" strokeWidth="16"
                    strokeDasharray="67 240"
                    strokeDashoffset="-86"
                    className="transition-all hover:opacity-80 cursor-pointer"
                  />
                  {/* Festivals 22% -> 53 */}
                  <circle
                    cx="50" cy="50" r="38" fill="none"
                    stroke="#c084fc" strokeWidth="16"
                    strokeDasharray="53 240"
                    strokeDashoffset="-153"
                    className="transition-all hover:opacity-80 cursor-pointer"
                  />
                  {/* Others 14% -> 34 */}
                  <circle
                    cx="50" cy="50" r="38" fill="none"
                    stroke="#10b981" strokeWidth="16"
                    strokeDasharray="34 240"
                    strokeDashoffset="-206"
                    className="transition-all hover:opacity-80 cursor-pointer"
                  />
                </svg>

                {/* Donut Center Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  <span className="text-2xl font-extrabold font-mono text-white leading-none">100%</span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mt-1">Catalog</span>
                </div>
              </div>

              {/* Donut Legend */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {occasionDonut.map((item) => (
                  <div key={item.name} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <div className="text-xs">
                      <div className="text-slate-300 font-medium truncate">{item.name}</div>
                      <div className="font-mono text-cyan-400 text-[11px] font-bold">{item.pct}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-[11px] text-slate-500 font-mono text-center">
              *Interactive SVG demo component for visual storytelling
            </div>
          </div>

          {/* Chart 3: Monthly Trend Curve (12 cols) */}
          <div className="lg:col-span-12 p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/20 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-cyan-400 mb-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Time Series Intelligence</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Seasonal Distribution Curve (12-Month Progression)
                </h3>
              </div>

              {/* Metric Toggle */}
              <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveMetric('accidents')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeMetric === 'accidents'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Accidents Trend
                </button>
                <button
                  onClick={() => setActiveMetric('revenue')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeMetric === 'revenue'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Revenue Trend
                </button>
              </div>
            </div>

            {/* Interactive Trend Chart with Bars & Line */}
            <div className="h-56 sm:h-64 flex items-end gap-2 sm:gap-4 pt-6 px-2">
              {timeTrendData.map((m, idx) => {
                const val = activeMetric === 'accidents' ? m.accidents : m.revenue;
                const heightPercent = Math.round((val / maxTrendValue) * 100);
                const isHovered = hoveredMonth === idx;

                return (
                  <div
                    key={m.label}
                    onMouseEnter={() => setHoveredMonth(idx)}
                    onMouseLeave={() => setHoveredMonth(null)}
                    className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
                  >
                    {/* Hover Value Tooltip */}
                    {isHovered && (
                      <div className="absolute -top-10 px-2.5 py-1 rounded-md bg-slate-900 border border-cyan-400 text-[11px] font-mono text-cyan-300 shadow-xl whitespace-nowrap z-20">
                        {activeMetric === 'accidents' ? `${val.toLocaleString()} crashes` : `₹ ${val.toLocaleString()}`}
                      </div>
                    )}

                    {/* Bar Pillar */}
                    <div
                      className={`w-full max-w-[28px] rounded-t-lg transition-all duration-300 ${
                        isHovered
                          ? 'bg-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.6)]'
                          : 'bg-gradient-to-t from-cyan-900/60 via-cyan-500/30 to-blue-500/50 hover:bg-cyan-500/60'
                      }`}
                      style={{ height: `${heightPercent}%` }}
                    />

                    {/* Month Label */}
                    <span className={`text-[10px] sm:text-xs font-mono mt-2 transition-colors ${
                      isHovered ? 'text-cyan-300 font-bold' : 'text-slate-500'
                    }`}>
                      {m.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
