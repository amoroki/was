import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import bgImage from '../../../assets/close-up-person-working-call-center.jpg';

export function ContactHero() {
  const scrollToContent = () => {
    const content = document.getElementById('contact-content');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[500px] w-full bg-[#2d2d2d]">
      <div className="absolute inset-0">
         <ImageWithFallback 
            src={bgImage}
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-60"
         />
         {/* Dark overlay to ensure text readability */}
         <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl text-white font-serif mb-6">
          Contact us
        </h1>
        
        <p className="text-lg md:text-xl text-white font-light max-w-3xl mb-10 leading-relaxed">
          We'd love to hear from you—whether you're ready to switch labour/ staffing providers, need help with compliance, or just want to ask a few questions.
        </p>
        
        <button 
          onClick={scrollToContent}
          className="bg-[#C5A065] text-white px-8 py-3 rounded-sm uppercase tracking-wider font-medium hover:bg-[#b08d55] transition-colors"
        >
          Learn more
        </button>
        
        <button 
          onClick={scrollToContent}
          className="absolute bottom-8 text-white hover:text-[#C5A065] transition-colors"
        >
          <ChevronDown size={40} className="stroke-1" />
        </button>
      </div>
    </div>
  );
}
