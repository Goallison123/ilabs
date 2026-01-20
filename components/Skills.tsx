
import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    {
      title: 'Python Development',
      description: 'Master the language of the future. From basic syntax to data processing and automation.',
      tags: ['Logic', 'Backend', 'Data']
    },
    {
      title: 'Modern Web Design',
      description: 'Building the visual web with HTML5, CSS3, and JavaScript frameworks. Crafting responsive experiences.',
      tags: ['React', 'Tailwind', 'UI/UX']
    },
    {
      title: 'AI & API Integration',
      description: 'Leveraging Gemini and other LLMs to build intelligent applications that solve complex tasks.',
      tags: ['LLMs', 'Prompt Engineering', 'API']
    },
    {
      title: 'The AI Toolbelt',
      description: 'How to use AI productivity tools effectively to speed up development and creative workflows.',
      tags: ['Productivity', 'Automation', 'No-code']
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      {/* The "Frame" container */}
      <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl shadow-slate-100/50 overflow-hidden">
        <div className="px-8 py-20 md:px-16 lg:px-24">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1 mb-4 bg-slate-900 text-white rounded-full">
               <span className="text-[10px] font-bold uppercase tracking-[0.2em]">The SILVER Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Curriculum</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Focused on the skills that matter today. Practical, project-driven, and designed for immediate impact in a global economy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="group flex flex-col">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-300">
                  <span className="text-xl font-bold text-slate-300 group-hover:text-white/20 transition-colors">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-slate-900">{skill.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                  {skill.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex -space-x-3">
               {[1, 2, 3, 4].map(n => (
                 <div key={n} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                   <img src={`https://i.pravatar.cc/150?u=${n}`} alt="Student" />
                 </div>
               ))}
               <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-[10px] text-white font-bold">
                 +50
               </div>
            </div>
            <p className="text-sm text-slate-400 font-medium">
              Join a growing global community of 21st-century learners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
