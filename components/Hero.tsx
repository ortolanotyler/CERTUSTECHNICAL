import React from 'react';
import { ArrowRight, Wrench, Settings, Truck, ShieldCheck } from 'lucide-react';
import { Section, Domain } from '../types';

interface HeroProps {
  domain: Domain;
}

const Hero: React.FC<HeroProps> = ({ domain }) => {
  const isTrades = domain === 'skilled-trades';
  
  // Sector-specific video assets
  const videoSrc = isTrades 
    ? "https://res.cloudinary.com/dvbubqhpp/video/upload/v1774055761/20654636-uhd_3840_2160_30fps_himwzn.mp4"
    : "https://res.cloudinary.com/dvbubqhpp/video/upload/v1773682076/10040029-hd_1920_1080_24fps_syyduj.mp4";

  const brandSilver = 'text-brand-silver'; 
  const sectorTint = isTrades ? 'bg-brand-logistics/10' : 'bg-brand-navy/10';

  const content = isTrades ? {
    label: "",
    titleLine1: "Skilled Trades",
    titleLine2: "& Operations",
  } : {
    label: "",
    titleLine1: "Industrial",
    titleLine2: "Excellence.",
  };

  return (
    <section id={Section.HERO} className="relative h-[100svh] w-full flex items-center overflow-hidden bg-brand-dark">
      
      {/* 1. BACKGROUND LAYER: Cinematic Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          key={videoSrc}
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="w-full h-full object-cover transition-opacity duration-1000 opacity-40 grayscale-[40%] brightness-[0.8]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        
        {/* Dynamic Overlay Gradients */}
        <div className={`absolute inset-0 z-10 ${sectorTint} mix-blend-multiply opacity-50`}></div>
        <div className="absolute inset-0 z-20 bg-gradient-to-l from-brand-dark via-brand-dark/20 to-transparent"></div>
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40"></div>
        
        {/* Technical Grid Pattern */}
        <div 
            className="absolute inset-0 z-30 pointer-events-none opacity-20"
            style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}
        ></div>
      </div>

      {/* 2. LAYER: LOGO WATERMARK - Bottom Left (Moved to left since content is right) */}
      <img 
        src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1770919808/CertusLOGO_szfewa.png" 
        className="absolute bottom-[-4%] left-[-4%] w-[35vw] max-w-[550px] opacity-[0.06] z-[3] pointer-events-none grayscale select-none"
        style={{ 
          maskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)', 
          WebkitMaskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)' 
        }}
        alt=""
      />

      {/* 3. LAYER: Primary Content Grid */}
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-20">
        
        <div className="flex flex-col items-end pt-12 text-right">
          
          {/* Minimalist Calibration Badge */}
          <div className="flex items-center gap-8 mb-8 overflow-hidden animate-[fadeIn_1s_ease-out_forwards]">
              <div className="h-[1px] w-12 bg-white/30"></div>
          </div>

          {/* Headline */}
          <h1 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[8.5rem] font-medium text-white leading-[0.85] md:leading-[0.82] tracking-tighter mb-8 md:mb-12 select-none relative flex flex-col items-end">
              <span className="block animate-[slideUp_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0">
                  {content.titleLine1}
              </span>
              <span className={`block font-serif italic font-light ${brandSilver} animate-[slideUp_1.2s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards] opacity-0 drop-shadow-lg`}>
                  {content.titleLine2}
              </span>
          </h1>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-6 md:gap-10 animate-[fadeIn_1s_ease-out_0.8s_forwards] opacity-0 w-full sm:w-auto">
              <button 
                  onClick={() => document.getElementById(Section.CONTACT)?.scrollIntoView({ behavior: 'smooth'})}
                  className="group bg-white text-black px-10 h-16 flex items-center justify-center sm:justify-end gap-8 font-bold text-[11px] uppercase tracking-[0.4em] rounded-sm transition-all duration-500 hover:bg-brand-silver hover:-translate-y-1 shadow-elegant w-full sm:w-auto"
              >
                  Start Search
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
          </div>

        </div>

      </div>

      {/* SECTION DIVIDER */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-dark to-transparent z-10 pointer-events-none"></div>

      <style>{`
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(100px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;