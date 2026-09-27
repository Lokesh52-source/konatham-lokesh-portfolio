import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  ArrowUpRight, 
  Eye, 
  X, 
  Sparkles,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export const Resume: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
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
              <span>Official Curriculum Vitae • 2026 Edition</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Let's Build Something <span className="text-gradient-cyan">With Data</span>
            </h2>

            {/* Subtext with Professional Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Junior Data Analyst with hands-on experience cleaning and analyzing datasets ranging from 50,000 to 100,000+ rows, writing production SQL, building interactive Power BI & Excel dashboards, and driving actionable insights.
            </p>

            {/* Key Resume Highlights Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                <span>Datavalley Intern (8 Months)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                <span>B.Tech CSE (CGPA: 7.8/10)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>edX & MS Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>SQL, Power BI, Excel & Python</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Primary Download Button */}
              <a
                href={resumeUrl}
                download="Konatham-Lokesh-Resume.pdf"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 shadow-[0_0_30px_rgba(0,242,254,0.4)] transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>Download Resume</span>
              </a>

              {/* In-Browser Preview Button */}
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Preview Resume</span>
              </button>

              {/* LinkedIn Button */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/50 text-white transition-all hover:scale-105 active:scale-95 shadow-xl group"
              >
                <svg className="w-4 h-4 fill-[#0077B5] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </a>
            </div>

            {/* File Format & Size Note */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 font-mono mt-6">
              <span>Format: PDF</span>
              <span>•</span>
              <span>2 Pages</span>
              <span>•</span>
              <span>Role: Junior Data Analyst</span>
              <span>•</span>
              <span>Updated: September 2026</span>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive PDF Preview Modal */}
      {isPreviewOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl h-[90vh] flex flex-col rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,242,254,0.25)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span>Konatham Lokesh — Resume</span>
                    <span className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Junior Data Analyst
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    2-Page Professional Curriculum Vitae
                  </p>
                </div>
              </div>

              {/* Action Icons in Header */}
              <div className="flex items-center gap-2">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">New Tab</span>
                </a>
                <a
                  href={resumeUrl}
                  download="Konatham-Lokesh-Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors"
                  title="Download PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors ml-1"
                  aria-label="Close preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF viewer */}
            <div className="flex-1 w-full bg-slate-950 relative">
              <iframe
                src={`${resumeUrl}#toolbar=0&navpanes=0`}
                className="w-full h-full border-0"
                title="Konatham Lokesh Resume Preview"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Featuring SQL, Power BI, Excel & Python datasets</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:konathamlokesh55@gmail.com"
                  className="text-cyan-400 hover:underline"
                >
                  konathamlokesh55@gmail.com
                </a>
                <span>•</span>
                <span>+91 9393750422</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
