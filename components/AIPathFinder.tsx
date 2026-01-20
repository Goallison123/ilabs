
import React, { useState } from 'react';
import { getLearningPath } from '../services/geminiService';

const AIPathFinder: React.FC = () => {
  const [problem, setProblem] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) return;

    setLoading(true);
    const path = await getLearningPath(problem);
    setResult(path);
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">AI Learning Mentor</h2>
            <p className="text-slate-400 mb-8">
              Tell us a problem you see in your community (e.g., "Improving farm logistics" or "Helping students access books"), 
              and our SILVER AI will suggest a technical learning path from our curriculum to solve it.
            </p>
            
            <form onSubmit={handleSubmit} className="relative">
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="I want to solve..."
                className="w-full bg-slate-800 border-none rounded-2xl p-6 text-white placeholder-slate-500 focus:ring-2 focus:ring-slate-700 min-h-[150px] resize-none mb-4"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors disabled:opacity-50"
              >
                {loading ? 'Mapping Path...' : 'Generate My Learning Path'}
              </button>
            </form>
          </div>

          <div className="min-h-[300px] flex items-center justify-center border-l border-slate-800 pl-0 lg:pl-12">
            {!result && !loading && (
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-dashed border-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-slate-600">?</span>
                </div>
                <p className="text-slate-500 text-sm">Your custom roadmap will appear here.</p>
              </div>
            )}

            {loading && (
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
                <p className="text-slate-400 animate-pulse">Consulting the SILVER AI Knowledge Base...</p>
              </div>
            )}

            {result && (
              <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h3 className="text-2xl font-bold mb-2 text-white">{result.pathTitle}</h3>
                <p className="text-slate-400 text-sm mb-6 italic">"{result.shortStrategy}"</p>
                
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Recommended Skills</p>
                  {result.recommendedSkills.map((skill: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                      <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-300">
                        {idx + 1}
                      </div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => {setResult(null); setProblem('');}}
                  className="mt-8 text-xs text-slate-500 hover:text-white underline transition-colors"
                >
                  Start Over
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPathFinder;
