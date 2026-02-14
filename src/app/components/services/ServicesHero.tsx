import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import bgImage from '../../../assets/flat-lay-people-working-together-office.jpg';

export function ServicesHero() {
  const scrollToContent = () => {
    const content = document.getElementById('services-content');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[500px] w-full bg-[#2d2d2d]">
      <div className="absolute inset-0">
         <ImageWithFallback 
            src={bgImage} 
            alt="Woodborough Services Hero" 
            className="w-full h-full object-cover opacity-50"
         />
         {/* Gradient Overlay for better text visibility */}
         <div className="absolute inset-0 bg-gradient-to-b from-[#2d2d2d]/80 via-[#2d2d2d]/60 to-[#2d2d2d]/80"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl text-white font-serif tracking-wide mb-6">
          WOODBOROUGH SERVICES
        </h1>
        
        <div className="w-16 h-1 bg-[#C5A065] mb-8"></div>
        
        <p className="text-xl md:text-2xl text-white font-light max-w-3xl mb-12 leading-relaxed">
          Take Your Business Soaring High - Register with Woodborough Admin Services Today
        </p>
        
        <button 
          onClick={scrollToContent}
          className="bg-[#C5A065] text-white px-8 py-3 rounded-sm uppercase tracking-wider font-medium hover:bg-[#b08d55] transition-colors"
        >
          Learn more
        </button>
        
        <button 
          onClick={scrollToContent}
          className="absolute bottom-8 text-white hover:text-[#C5A065] transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
}
