
import React, { useState } from 'react';
import { generateJobDescription } from '../services/geminiService';
import { JobSpec, GeneratedJobContent, Section } from '../types';
import { Copy, Check, PenTool } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [result, setResult] = useState<GeneratedJobContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    const spec: JobSpec = { title: jobTitle, skills, experience };
    
    try {
      const generatedContent = await generateJobDescription(spec);
      setResult(generatedContent);
    } catch (err) {
      setError("Service momentarily unavailable. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      const text = `Job Title: ${jobTitle}\n\nSummary:\n${result.summary}\n\nResponsibilities:\n${result.responsibilities.map(r => `- ${r}`).join('\n')}\n\nQualifications:\n${result.qualifications.map(q => `- ${q}`).join('\n')}`;
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id={Section.AI_TOOL} className="py-32 bg-brand-dark border-t border-brand-steel/10 relative overflow-hidden transition-colors duration-700">
        {/* Background Texture - Architectural Grid */}
        <div 
            className="absolute inset-0 opacity-[0.02] pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', 
                backgroundSize: '60px 60px' 
            }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                
                {/* Left Column: Context & Input */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full">
                    <div className="mb-12">
                        <span className="text-brand-silver font-bold tracking-[0.2em] text-xs uppercase mb-6 block flex items-center gap-3">
                             <span className="w-8 h-[1px] bg-brand-silver"></span>
                             Beta Tool
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-none">
                            Mandate<br/><span className="text-brand-steel">Architect.</span>
                        </h2>
                        <p className="text-gray-400 font-light text-sm leading-relaxed text-justify">
                            Precision is the precursor to placement. Use our internal calibration tool to draft the initial specification for your executive search.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                         {/* Input Fields - Underlined Minimalist */}
                        <div className="group relative">
                            <input 
                                type="text" 
                                required
                                className="peer w-full bg-transparent border-b border-brand-steel/30 py-3 text-white placeholder-transparent focus:border-brand-silver focus:outline-none transition-all duration-500"
                                placeholder="Role Title"
                                id="roleTitle"
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                            />
                            <label htmlFor="roleTitle" className="absolute left-0 -top-3.5 text-xs text-brand-silver transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-silver uppercase tracking-wider font-bold">
                                Position Title
                            </label>
                        </div>

                        <div className="group relative">
                            <select 
                                required
                                className="peer w-full bg-transparent border-b border-brand-steel/30 py-3 text-white focus:border-brand-silver focus:outline-none transition-all duration-500 appearance-none rounded-none cursor-pointer"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                            >
                                <option value="" className="bg-brand-dark text-gray-500">Select Seniority Level</option>
                                <option value="Mid-Senior" className="bg-brand-dark">Mid-Senior Management</option>
                                <option value="Director" className="bg-brand-dark">Director Level</option>
                                <option value="VP" className="bg-brand-dark">Vice President</option>
                                <option value="C-Suite" className="bg-brand-dark">C-Suite Executive</option>
                            </select>
                             <label className="absolute left-0 -top-3.5 text-xs text-brand-silver uppercase tracking-wider font-bold">
                                Seniority
                            </label>
                        </div>

                        <div className="group relative">
                            <textarea 
                                required
                                className="peer w-full bg-transparent border-b border-brand-steel/30 py-3 text-white placeholder-transparent focus:border-brand-silver focus:outline-none transition-all duration-500 resize-none h-24"
                                placeholder="Key Competencies"
                                id="competencies"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                            />
                            <label htmlFor="competencies" className="absolute left-0 -top-3.5 text-xs text-brand-silver transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-silver uppercase tracking-wider font-bold">
                                Critical Competencies
                            </label>
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full py-5 border border-white/10 bg-white/[0.02] hover:bg-white hover:text-brand-dark text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500 flex justify-center items-center gap-4 group mt-8"
                        >
                            {loading ? (
                                <>Processing <span className="animate-pulse">...</span></>
                            ) : (
                                <>Generate Mandate <PenTool size={14} strokeWidth={1.5} className="group-hover:-translate-y-1 transition-transform duration-300" /></>
                            )}
                        </button>
                        {error && <p className="text-red-400 text-xs mt-2 text-center">{error}</p>}
                    </form>
                </div>

                {/* Right Column: The "Document" */}
                <div className="lg:col-span-8 relative">
                     {/* Decorative Document Border */}
                     <div className="absolute inset-0 border border-brand-steel/20 pointer-events-none"></div>
                     <div className="absolute -top-[1px] -bottom-[1px] left-8 w-[1px] bg-brand-steel/20"></div>
                     
                     <div className="h-full min-h-[600px] p-12 lg:p-16 relative bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm">
                        
                        {result ? (
                            <div className="animate-[fadeIn_0.7s_ease-out]">
                                <div className="flex justify-between items-start mb-12 border-b border-white/10 pb-6 pl-8">
                                    <div>
                                        <p className="text-brand-silver text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Confidential Draft</p>
                                        <h3 className="text-3xl md:text-4xl font-serif text-white italic">{jobTitle}</h3>
                                    </div>
                                    <button 
                                        onClick={copyToClipboard} 
                                        className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                                    >
                                        {copied ? <span className="text-green-400">Copied</span> : <span>Copy Draft</span>}
                                        {copied ? <Check size={16} /> : <Copy size={16} />}
                                    </button>
                                </div>

                                <div className="space-y-12 pl-8">
                                    <div className="space-y-4">
                                        <h4 className="text-brand-silver text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                                            <span className="w-4 h-[1px] bg-brand-silver"></span> Role Summary
                                        </h4>
                                        <p className="text-gray-300 font-light leading-loose text-sm md:text-base text-justify">
                                            {result.summary}
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="space-y-6">
                                            <h4 className="text-brand-silver text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                                                 <span className="w-4 h-[1px] bg-brand-silver"></span> Key Responsibilities
                                            </h4>
                                            <ul className="space-y-4">
                                                {result.responsibilities.map((r, i) => (
                                                    <li key={i} className="flex gap-4 items-start text-sm text-gray-400 font-light leading-relaxed group">
                                                        <span className="mt-2 w-1 h-1 bg-brand-steel group-hover:bg-brand-silver transition-colors flex-shrink-0"></span>
                                                        {r}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-6">
                                            <h4 className="text-brand-silver text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                                                 <span className="w-4 h-[1px] bg-brand-silver"></span> Requirements
                                            </h4>
                                            <ul className="space-y-4">
                                                {result.qualifications.map((q, i) => (
                                                    <li key={i} className="flex gap-4 items-start text-sm text-gray-400 font-light leading-relaxed group">
                                                        <span className="mt-2 w-1 h-1 bg-brand-steel group-hover:bg-brand-silver transition-colors flex-shrink-0"></span>
                                                        {q}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-30">
                                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent mb-6"></div>
                                <p className="font-serif italic text-2xl text-white mb-2">Awaiting Calibration</p>
                                <p className="text-xs uppercase tracking-widest text-gray-400">Complete the parameters to generate draft</p>
                            </div>
                        )}
                     </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default AIAssistant;
