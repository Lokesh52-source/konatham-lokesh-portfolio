import React from 'react';
import { GraduationCap, MapPin, BookOpen, Award, CheckCircle2, Calendar, FileBadge, Check } from 'lucide-react';
import { educationData, certificationsData } from '../data/experienceData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Formal engineering education establishing strong algorithmic and database fundamentals, complemented by verified industry certifications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Card */}
        <div className="p-8 sm:p-10 rounded-3xl glass-card border border-cyan-500/20 shadow-2xl relative overflow-hidden mb-12">

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pb-8 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.15)] flex-shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-mono border border-cyan-500/20">
                    <Award className="w-3.5 h-3.5" />
                    <span>Bachelor of Technology</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs font-mono border border-emerald-500/20 font-semibold">
                    <Check className="w-3.5 h-3.5" />
                    <span>CGPA: {educationData.cgpa}</span>
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {educationData.degree}
                </h3>
                <p className="text-lg font-medium text-cyan-300 mt-1">
                  {educationData.institution}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono mt-2">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{educationData.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{educationData.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {educationData.description}
            </p>
          </div>

          {/* Key Academic Focus Areas */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Core Foundational Coursework</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {educationData.keyAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs sm:text-sm font-medium hover:border-cyan-500/30 hover:text-white transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Certifications Sub-Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <FileBadge className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Verified Certifications
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Industry-recognized credentials featured on resume
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certificationsData.map((cert, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-cyan-500/40 transition-all hover:scale-[1.02] shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Verified
                    </span>
                    {cert.date && (
                      <span className="text-[11px] font-mono text-slate-400">
                        {cert.date}
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5 leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-cyan-300/90 font-medium mb-3">
                    {cert.issuer}
                  </p>
                </div>
                {cert.id && (
                  <div className="pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 break-all">
                    <span className="text-slate-500">ID: </span>
                    <span className="text-slate-300 select-all">{cert.id}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
