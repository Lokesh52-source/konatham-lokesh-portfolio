import React from 'react';
import { ThreeDataCanvas } from './components/ThreeDataCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { ProjectSection } from './components/ProjectSection';
import { DataWorkflow } from './components/DataWorkflow';
import { DataVisualization } from './components/DataVisualization';
import { Education } from './components/Education';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-200 overflow-x-hidden">
      {/* 3D Background Data Environment */}
      <ThreeDataCanvas />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ProjectSection />
        <DataWorkflow />
        <DataVisualization />
        <Education />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
