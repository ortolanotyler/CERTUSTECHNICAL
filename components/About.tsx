import React from 'react';
import { Section, Domain } from '../types';

interface AboutProps {
  domain?: Domain;
}

const About: React.FC<AboutProps> = ({ domain }) => {
  // Dynamic Theme Configuration
  const theme = {
    // Solid background to anchor the section after the Hero
    // Updated bg to #0F151E per user request to ensure a solid start
    bg: 'bg-[#0F151E]',
    accent: 'text-brand-silver',
    line: 'bg-brand-steel',
    textMain: 'text-white',
    textMuted: 'text-gray-400',
    border: 'border-brand-steel/10',
    cardBorder: 'border-brand-steel/30',
    cardOverlay: 'bg-brand-silver/10',
    subText: 'text-brand-steel',
    imageGrayscale: 'grayscale group-hover:grayscale-0',
    quoteGradient: 'from-brand-dark via-brand-dark/60'
  };

  const domainCopy = {
    subline: "Certainty Delivered.",
    p1: "Founded by Managing Director, Steven Franzese, The Certus Group was created in response to “Big Box” style recruitment. With over 15 years of industry and recruitment knowledge, The Certus group utilizes a team of subject matter experts to implement precise hiring based on our client’s specific cultural, experiential, and motivational requirements.",
    p2: "The Certus Group strives to eliminate false start hiring while operating to drive revenue growth within the sectors we serve. At the forefront of our delivery is longevity and quantifiable success through providing candidates with measurable achievement and experience within the industry."
  };

  return (
    <section id={Section.ABOUT} className={`relative py-40 ${theme.bg} transition-colors duration-1000 overflow-hidden`}>
        
        {/* Micro-Grid Texture with Top Mask */}
        <div 
            className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none"
            style={{
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'linear-gradient(to bottom, transparent 40%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 40%, black 100%)'
            }}
        ></div>

        {/* BOTTOM TRANSITION GRADIENT: Smooth blend into the Services section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                
                {/* Text Content */}
                <div className="lg:w-1/2 space-y-8 md:space-y-12 py-0 lg:py-10">
                    <div>
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <div className={`w-12 h-[1px] ${theme.line}`}></div>
                            <span className={`${theme.accent} font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase`}>About Us</span>
                        </div>
                        <h2 className={`text-3xl md:text-6xl font-bold ${theme.textMain} leading-tight md:leading-none tracking-tighter`}>
                            The Certus Group<br/>
                            <span className={theme.subText}>{domainCopy.subline}</span>
                        </h2>
                    </div>
                    
                    <div className={`space-y-6 md:space-y-8 ${theme.textMuted} font-light text-base md:text-lg leading-relaxed max-w-xl`}>
                        <p>{domainCopy.p1}</p>
                        <p>{domainCopy.p2}</p>
                    </div>

                    {/* Founder Profile */}
                    <div className={`pt-8 border-t ${theme.border} mt-4 md:mt-8`}>
                        <div className="flex items-center gap-4 md:gap-6 group">
                            <div className={`relative w-20 h-24 md:w-24 md:h-28 flex-shrink-0 overflow-hidden border ${theme.cardBorder} rounded-sm shadow-xl`}>
                                <div className={`absolute inset-0 ${theme.cardOverlay} mix-blend-overlay z-10`}></div>
                                <img 
                                    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1770832873/Steven_Franzese1_orgatu.jpg" 
                                    alt="Steven Franzese"
                                    className={`w-full h-full object-cover ${theme.imageGrayscale} transition-all duration-700 ease-out`}
                                />
                            </div>
                            <div className="space-y-1">
                                <div className="w-20 md:w-24 text-white opacity-80 mb-1 md:mb-2">
                                    <svg viewBox="0 0 120 50" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M10,35 C20,15 30,45 40,25 C50,15 60,35 70,25 C80,15 90,40 100,20 C110,30 115,25 115,25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15,40 C50,38 90,35 110,38" strokeWidth="0.5" opacity="0.5" />
                                    </svg>
                                </div>
                                <p className={`${theme.textMain} font-serif italic text-lg md:text-xl`}>Steven Franzese</p>
                                <p className={`${theme.accent} text-[9px] md:text-[10px] font-bold uppercase tracking-widest`}>Managing Director</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Side */}
                <div className="lg:w-1/2 w-full relative min-h-[400px] md:min-h-[500px]">
                    <div className={`absolute inset-0 bg-brand-dark/20 border ${theme.border} p-2 backdrop-blur-sm`}>
                        <div className={`relative w-full h-full overflow-hidden ${domain === 'skilled-trades' ? 'bg-brand-logistics/30' : 'bg-brand-navy/30'}`}>
                             <img 
                                src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1774124808/1761140139742_ckr9uy.jpg" 
                                alt="Technical Operations" 
                                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
                             />
                             
                             <div className={`absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t ${theme.quoteGradient} to-transparent`}>
                                 <p className="text-xl md:text-3xl font-bold text-white mb-2 leading-tight">
                                     "Delivering a white glove hiring experience and above all, adding certainty to your search"
                                 </p>
                                 <div className="flex items-center gap-3 mt-4">
                                     <div className={`w-8 h-[1px] ${theme.line}`}></div>
                                     <span className={`${theme.accent} text-[10px] md:text-xs font-bold uppercase tracking-widest`}>Est. 2015</span>
                                 </div>
                             </div>
                        </div>
                    </div>
                    <div className={`absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 border-b-2 border-r-2 border-brand-steel/20`}></div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default About;