import React from 'react';
import { 
  FileText, 
  ArrowRight, 
  MapPin, 
  Database, 
  BarChart3, 
  Sparkles, 
  Table2,
  Code2
} from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Hero Narrative & Actions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)] mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-emerald-300">
              Open to Data Analyst Opportunities
            </span>
          </div>

          {/* Intro & Name */}
          <div className="space-y-2 mb-4">
            <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Hi, I'm</span>
            </p>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight">
              KONATHAM <br />
              <span className="text-gradient-cyan">LOKESH</span>
            </h1>
          </div>

          {/* Primary Professional Title */}
          <div className="flex flex-wrap items-center gap-2 py-1 mb-4">
            <span className="px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              Data Analyst
            </span>
            <span className="text-slate-500 font-mono">•</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-300 text-xs sm:text-sm font-mono">
              SQL
            </span>
            <span className="text-slate-500 font-mono">•</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-300 text-xs sm:text-sm font-mono">
              Power BI
            </span>
            <span className="text-slate-500 font-mono">•</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-300 text-xs sm:text-sm font-mono">
              Excel
            </span>
            <span className="text-slate-500 font-mono">•</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-300 text-xs sm:text-sm font-mono">
              Python
            </span>
          </div>

          {/* Secondary Title & Location */}
          <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 mb-6 font-medium">
            <span className="text-slate-300 font-medium">Junior Data Analyst</span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Hyderabad, India
            </span>
          </div>

          {/* Hero Tagline */}
          <blockquote className="text-lg sm:text-xl font-medium text-slate-200 border-l-2 border-cyan-400 pl-4 py-1 mb-4 italic">
            "Turning raw data into meaningful insights and interactive dashboards."
          </blockquote>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mb-8">
            Computer Science graduate passionate about data analytics, business intelligence, visualization, and data-driven problem solving. Experienced in handling end-to-end data pipelines from cleaning and querying to executive dashboard deployment.
          </p>

          {/* Buttons & Socials */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 shadow-[0_0_25px_rgba(0,242,254,0.35)] transition-all hover:scale-105 active:scale-95 group"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/resume/Konatham-Lokesh-Resume.pdf"
              download="Konatham-Lokesh-Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/50 text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Professional Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase font-mono tracking-widest text-slate-500">
              Profiles:
            </span>
            <a
              href="https://www.linkedin.com/in/konatham-lokesh-718661290/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 text-xs font-medium transition-all group"
              aria-label="View LinkedIn Profile"
            >
              <svg className="w-3.5 h-3.5 fill-[#0077B5] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
              </svg>
              <span>View LinkedIn</span>
            </a>
            <a
              href="https://github.com/Lokesh52-source"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 text-xs font-medium transition-all group"
              aria-label="View GitHub Profile"
            >
              <svg className="w-3.5 h-3.5 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>View GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Column: Authentic Profile Photo in Glassmorphism Frame + Data Floating Badges (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-8">
          
          {/* Subtle Ambient Glow Behind Avatar */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-purple-600/25 blur-3xl -z-10 animate-pulse-glow" />

          {/* Outer Orbit Ring with Connected Nodes */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
            
            {/* SVG Orbit Track */}
            <svg className="absolute inset-0 w-full h-full animate-[spin_45s_linear_infinite] pointer-events-none opacity-40" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="185" fill="none" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" strokeDasharray="6 8" />
              <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="1" strokeDasharray="3 6" />
            </svg>

            {/* Profile Frame with Glassmorphism Border */}
            <div className="relative z-10 p-2.5 sm:p-3 rounded-full bg-gradient-to-b from-cyan-400/30 via-slate-800/40 to-blue-600/30 backdrop-blur-xl border border-cyan-400/30 shadow-[0_0_40px_rgba(0,242,254,0.25)]">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden bg-slate-900 border-2 border-cyan-400/40 relative">
                {/* User's Authentic Profile Image */}
                <img
                  src="/assets/linkedin_profile.png"
                  alt="Konatham Lokesh - Data Analyst"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Satellite Data Element 1: Power BI Visualization Badge */}
            <div className="absolute -top-2 left-4 sm:-top-4 sm:left-6 z-20 animate-float-slow">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-amber-400/40 backdrop-blur-md shadow-lg shadow-black/60">
                <div className="w-6 h-6 rounded-md bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <BarChart3 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-amber-300 font-bold block leading-none">Power BI</span>
                  <span className="text-[9px] text-slate-400 font-mono leading-none">DAX Measures</span>
                </div>
              </div>
            </div>

            {/* Satellite Data Element 2: SQL PostgreSQL Badge */}
            <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:-left-6 z-20 animate-float-reverse">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-sky-400/40 backdrop-blur-md shadow-lg shadow-black/60">
                <div className="w-6 h-6 rounded-md bg-sky-500/20 flex items-center justify-center text-sky-400">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-sky-300 font-bold block leading-none">SQL / Postgres</span>
                  <span className="text-[9px] text-slate-400 font-mono leading-none">Window Functions</span>
                </div>
              </div>
            </div>

            {/* Satellite Data Element 3: Excel Analytics Badge */}
            <div className="absolute top-1/4 -right-4 sm:top-1/3 sm:-right-8 z-20 animate-float-slow">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-emerald-400/40 backdrop-blur-md shadow-lg shadow-black/60">
                <div className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Table2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-300 font-bold block leading-none">Excel Mastery</span>
                  <span className="text-[9px] text-slate-400 font-mono leading-none">Pivot & XLOOKUP</span>
                </div>
              </div>
            </div>

            {/* Satellite Data Element 4: Python Badge */}
            <div className="absolute -bottom-4 right-8 sm:-bottom-6 sm:right-10 z-20 animate-float-reverse">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-purple-400/40 backdrop-blur-md shadow-lg shadow-black/60">
                <div className="w-5 h-5 rounded-md bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Code2 className="w-3 h-3" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-300 font-bold block leading-none">Python</span>
                  <span className="text-[9px] text-slate-400 font-mono leading-none">JSON & Validation</span>
                </div>
              </div>
            </div>

            {/* Satellite Metric Node: Live Data Indicator */}
            <div className="absolute top-2 right-6 sm:top-4 sm:right-12 z-20 hidden sm:block animate-pulse">
              <div className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 shadow-md">
                74.8K+ Records
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
