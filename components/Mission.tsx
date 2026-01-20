
import React from 'react';

const Mission: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Bridging the gap between <span className="italic text-slate-400">potential</span> and <span className="underline decoration-slate-200">opportunity</span>.
          </h2>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            SILVER is an initiative by Sybella Systems. While our roots are firmly planted in Rwanda, our vision is global. We believe that talent is distributed equally, but opportunity is not. 
          </p>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            By providing world-class tech education for free, we are building an ecosystem of problem-solvers who can address challenges across the globe using modern, scalable tools.
          </p>
          
          <div className="space-y-4">
            {[
              "Python & Modern Programming Foundations",
              "Advanced Web Development (JS, HTML, CSS)",
              "AI Tool Integration & Prompt Engineering",
              "Real-world Problem Solving & Product Design"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" 
            alt="Global collaboration" 
            className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5]"
          />
          <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-8 rounded-2xl hidden lg:block">
            <p className="text-4xl font-bold mb-1">2025</p>
            <p className="text-sm uppercase tracking-widest opacity-60">Global Impact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
