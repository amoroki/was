import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ServicesGrid() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Compliance & Reporting",
      desc: "Employer Payment Summary (EPS) filings",
      image: "https://images.unsplash.com/photo-1768839722382-d483ad9b079a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yJTIwY29pbnMlMjBhY2NvdW50aW5nJTIwZmluYW5jZXxlbnwxfHx8fDE3NzA4OTExMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Auto-Enrolment Support",
      desc: "Scheme setup with preferred providers",
      image: "https://images.unsplash.com/flagged/photo-1576697010739-6373b63f3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBvZmZpY2UlMjBkZXNrJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDg5MTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "HR & Employee Administration",
      desc: "Contract & letter drafting (offer, variation, termination)",
      image: "https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHdyaXRpbmclMjBzaWduaW5nJTIwY29udHJhY3QlMjBkb2N1bWVudHxlbnwxfHx8fDE3NzA4OTExMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-[#C5A065] font-serif text-center mb-12 tracking-wide">
          OUR SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-[#f9f9f9] group hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl text-[#C5A065] font-serif mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6 text-sm">{service.desc}</p>
                <button 
                  onClick={() => navigate('/services')}
                  className="flex items-center text-sm font-medium text-gray-800 hover:text-[#C5A065] transition-colors cursor-pointer"
                >
                  <ChevronRight size={16} className="mr-1" /> Read more
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <button 
            onClick={() => navigate('/services')}
            className="bg-[#C5A065] text-white px-8 py-3 rounded-sm text-lg font-medium hover:bg-[#b08d55] transition-colors shadow-md mb-12"
          >
            See all our services
          </button>
          
          <p className="text-[10px] text-gray-500 max-w-4xl text-center leading-relaxed">
            *Disclaimer- Woodborough Admin Services Ltd (The Service Provider) may outsource payroll, HR, or administrative obligations to third-party providers, without affecting the Worker's rights under any Agreement.
          </p>
          <p className="text-[10px] text-gray-500 max-w-4xl text-center leading-relaxed mt-2">
             Registered with the ICO (UK). Registration Number: ZC061312.
          </p>
        </div>
      </div>
    </div>
  );
}
