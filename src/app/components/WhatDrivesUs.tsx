import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function WhatDrivesUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const slides = [
    "At Woodborough Admin Services Ltd it's Simple: people first. We connect talented individuals with the right opportunities and help business build teams that thrives Every placement matters—because every career, every role and every team accounts"
  ];

  // Show button after 60 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 60000); // 60 seconds

    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[300px] w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1670383050616-682df7d57b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmclMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzA5MDI3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")'
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-4xl text-[#C5A065] font-serif tracking-wide uppercase">
          WHAT DRIVES US
        </h2>

        {/* Slideshow */}
        <div className="flex items-center gap-6 md:gap-12 w-full justify-center">
          <button 
            onClick={prevSlide}
            className="bg-[#C5A065] p-2 hidden md:block opacity-80 hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <div className="border border-[#C5A065]/50 px-8 md:px-12 py-6 flex-grow max-w-2xl relative">
            <div className="absolute inset-0 border border-[#C5A065] top-1 left-1 pointer-events-none opacity-50"></div>
            <div className="relative z-10 space-y-6">
              <p className="text-white text-sm md:text-base leading-relaxed">
                {slides[currentSlide]}
              </p>
              {showButton && (
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-[#C5A065] text-white px-8 py-3 rounded-sm font-medium hover:bg-[#b08d55] transition-colors shadow-lg uppercase tracking-wider text-sm w-full"
                >
                  ENQUIRE NOW
                </button>
              )}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="bg-[#C5A065] p-2 hidden md:block opacity-80 hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
