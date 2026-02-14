import React from 'react';
import { useNavigate } from 'react-router-dom';

export function WhoWeAre() {
  const navigate = useNavigate();

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="relative h-[600px] w-full">
           <img 
            src="https://images.unsplash.com/photo-1633113088092-3460c3c9b13f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjBtZW4lMjBsb29raW5nJTIwYXQlMjB0YWJsZXQlMjBvZmZpY2V8ZW58MXx8fHwxNzcwOTAyNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professionals working"
            className="w-full h-full object-cover shadow-lg"
           />
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          <h2 className="text-4xl text-[#C5A065] font-serif tracking-wide text-center md:text-left">
            WHO WE ARE
          </h2>
          
          <h3 className="text-xl font-bold text-gray-900 tracking-tight text-center md:text-left">
            WE CREATE OPPORTUNITIES FOR CANDIDATES & BUSINESSES
          </h3>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base text-justify md:text-left">
            <p>
              Woodborough Admin Services is a leading provider of permanent and temporary staffing solutions to both private and public sector organisations.
            </p>
            <p>
              We recruit a wide range of Health and Social Care professionals, Engineers, Accountants, Clerical, Industrial and many other positions.
            </p>
            <p>
              Our aim is to provide an effective temporary and permanent recruitment service to both our clients and our candidates.
            </p>
            <p>
              We pride ourselves on providing exceptional service to both our clients and the staff that work for us. We are available every day, 24 hours a day, so whether you are a client or a member of staff, someone will always be there to answer your call.
            </p>
            <p>
              Woodborough Admin Services has extensive experience in delivering to a variety of clients including NHS Trusts, PCTs, police constabularies, prisons, third-sector organisations and private sector organisations.
            </p>
          </div>

          <div className="pt-4 flex justify-center md:justify-start">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-[#C5A065] text-white px-8 py-3 rounded-sm font-medium hover:bg-[#b08d55] transition-colors shadow-md"
            >
              Contact us now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
