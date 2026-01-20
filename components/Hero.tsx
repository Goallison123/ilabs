
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-slate-200/50 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-slate-100 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 bg-slate-100 rounded-full border border-slate-200">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Global Impact • Digital Frontier</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
          Coding a <span className="text-slate-400">Brighter</span><br />
          Future for the World.
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
          Free access to 21st-century skills. We empower the underprivileged with 
          the tools of the modern age—programming, AI, and web development—to solve real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-12 py-4 bg-slate-900 text-white rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-lg shadow-slate-200">
            Our Initiatives
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-100 pt-10">
          {[
            { label: 'Free Access', value: '100%' },
            { label: 'Skills Focused', value: '21st Century' },
            { label: 'Project Based', value: 'Real World' },
            { label: 'Reach', value: 'Global' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
