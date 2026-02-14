import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      title: "Unshakeable compliance",
      desc: "every HMRC return, auto-enrolment rule and statutory payment handled without drama."
    },
    {
      title: "Crystal-clear costs",
      desc: "fixed monthly fee, no surprises, no \"extras\" hiding in the small print."
    },
    {
      title: "Human help on tap",
      desc: "speak to a named UK payroll specialist, not a ticket bot."
    },
    {
      title: "Seamless onboarding",
      desc: "we migrate your data, liaise with HMRC and pension providers, and have you live in as little as 10 working days."
    }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-[500px]">
      {/* Left Content */}
      <div className="flex-1 bg-[#333333] text-white p-12 md:p-20 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl text-[#C5A065] font-serif mb-12 tracking-wide">
          BECOME OUR CLIENT
        </h2>
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 items-start">
              <ChevronRight className="text-[#C5A065] flex-shrink-0 mt-1" size={20} />
              <div>
                <span className="font-bold text-white">{benefit.title}</span>
                <span className="text-gray-300"> – {benefit.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1753802025168-e55ca6e8e1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmUlMjBjb2x1bW5zfGVufDF8fHx8MTc3MDg5MTEzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")'
          }}
        />
        {/* Satisfied Clients Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#333333]/90 w-full max-w-md py-12 px-8 text-center shadow-2xl backdrop-blur-sm mx-4">
            <h3 className="text-white text-lg tracking-widest uppercase mb-4">SATISFIED CLIENTS</h3>
            <div className="text-[#C5A065] text-6xl md:text-7xl font-serif">558</div>
          </div>
        </div>
      </div>
    </div>
  );
}
