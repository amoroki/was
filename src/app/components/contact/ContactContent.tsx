import React from 'react';
import { Phone, Mail } from 'lucide-react';

export function ContactContent() {
  return (
    <div id="contact-content" className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-16 text-center">
        
        {/* Contact Methods */}
        <div className="space-y-12">
          {/* Call Us */}
          <div className="flex flex-col items-center gap-3">
            <div className="text-[#2d2d2d] mb-1">
               <Phone size={32} strokeWidth={1.5} fill="currentColor" className="text-[#2d2d2d]" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#2d2d2d]">Call Us</h3>
            <p className="text-xl font-bold text-[#2d2d2d]">T: +44-121-409-1020</p>
            <p className="text-[#2d2d2d] text-lg">Monday–Friday, 9:00 a.m. – 5:00 p.m.</p>
          </div>

          {/* Email Us */}
          <div className="flex flex-col items-center gap-3">
             <div className="text-[#2d2d2d] mb-1">
               <Mail size={32} strokeWidth={1.5} className="text-[#2d2d2d]" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#2d2d2d]">Email Us</h3>
            <p className="text-xl font-bold text-[#2d2d2d]">E: admin@waservices-uk.com</p>
            <p className="text-[#2d2d2d] text-lg">We aim to reply within one working day.</p>
          </div>
        </div>

        {/* Divider/Spacer if needed, or just space */}
        <div className="h-8"></div>

        {/* Disclaimers */}
        <div className="space-y-4 text-xs md:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
          <p>
            <span className="font-bold text-[#2d2d2d]">*Disclaimer</span> - Woodborough Admin Services Ltd (The Service Provider) may outsource payroll, HR, or administrative obligations to third-party providers without affecting the Worker's rights under any Agreement.
          </p>
          <p>
            Registered with the ICO (UK). Registration Number: ZC061312.
          </p>
          <p>
            Information provided is for general purposes only and does not constitute legal advice.
          </p>
          
        </div>

      </div>
    </div>
  );
}
