import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

interface ServiceSectionProps {
  title: string;
  subtitle?: string;
  items: string[];
  imageSrc: string;
  isReversed?: boolean;
}

export function ServiceSection({ title, subtitle, items, imageSrc, isReversed = false }: ServiceSectionProps) {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact', { state: { scrollTo: 'contact-content' } });
  };

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 bg-gradient-to-b from-gray-300 to-gray-400 ${isReversed ? 'md:auto-cols-max' : ''}`}>
          {/* Content Side */}
          <div className={`flex flex-col justify-center p-8 md:p-16 bg-gray-300 h-full ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#C5A065] mb-4 uppercase tracking-wider font-bold">
                {title}
              </h2>
              
              {subtitle && (
                <p className="text-[#2d2d2d] text-lg mb-8 leading-relaxed font-light">
                  {subtitle}
                </p>
              )}
              
              <ul className="space-y-4 mb-12">
                {items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight size={20} className="text-[#C5A065] mt-0.5 shrink-0" />
                    <span className="text-[#2d2d2d] text-base">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={goToContact}
                className="bg-[#C5A065] text-white px-8 py-3 rounded-sm uppercase tracking-wider font-medium hover:bg-[#b08d55] transition-colors shadow-sm"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Image Side - Equal size */}
          <div className={`overflow-hidden h-full min-h-[400px] md:min-h-auto ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
            <ImageWithFallback 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
