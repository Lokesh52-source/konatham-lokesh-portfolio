import React from 'react';
import { FileText, Download, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const Resume: React.FC = () => {
  const resumeUrl = '/resume/Konatham-Lokesh-Resume.pdf';
  const linkedinUrl = 'https://www.linkedin.com/in/konatham-lokesh-718661290/';

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Card Container */}
        <div className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#0c1527] via-slate-900 to-[#070d1a] border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(0,242,254,0.12)] overflow-hidden">
          
          {/* Ambient Glow Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="text-center max-w-3xl mx-auto">
            
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-6">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Official Curriculum Vitae</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Let's Build Something <span className="text-gradient-cyan">With Data</span>
            </h2>

            {/* Subtext */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Interested in working together? Download my resume to learn more about my skills, experience and projects.
            </p>

            {/* Key Resume Highlights Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-10 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>B.Tech Computer Science</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Datavalley Internship</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Power BI & DAX</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>SQL PostgreSQL</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={resumeUrl}
                download="Konatham-Lokesh-Resume.pdf"
                className="flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 shadow-[0_0_30px_rgba(0,242,254,0.4)] transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>Download Resume</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm sm:text-base bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/50 text-white transition-all hover:scale-105 active:scale-95 shadow-xl group"
              >
                <svg className="w-5 h-5 fill-[#0077B5] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
                </svg>
                <span>View LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </a>
            </div>

            {/* File Format & Size Note */}
            <div className="text-xs text-slate-500 font-mono mt-6">
              Format: PDF • Target: Data Analyst / Junior Data Analyst
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
