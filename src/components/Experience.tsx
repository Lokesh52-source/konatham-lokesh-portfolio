import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { experiencesData } from '../data/experienceData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Hands-on professional internship focused on real-world data analytics pipelines, exploratory workflows, and business intelligence reporting.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiencesData.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Pulsing Timeline Node */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(0,242,254,0.4)]">
                <span className="w-2 h-2 rounded-full bg-cyan-300"></span>
              </div>

              {/* Main Card */}
              <div className="p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/20 shadow-2xl relative overflow-hidden">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-800">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-2 border border-cyan-500/20">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.type}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-cyan-300 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Core Responsibilities List */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>Verified Core Responsibilities</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Banner */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono uppercase text-slate-400 mr-2">
                    Workflows:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700/80 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
