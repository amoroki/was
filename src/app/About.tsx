import React from 'react';
import { AboutHero } from './components/AboutHero';
import { WhoWeAre } from './components/WhoWeAre';
import { WhatDrivesUs } from './components/WhatDrivesUs';

export function About() {
  return (
    <>
      <WhoWeAre />
      <WhatDrivesUs />
      <AboutHero />
      
      {/* Disclaimer Section */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-[10px] text-gray-500 leading-relaxed">
            *Disclaimer- Woodborough Admin Services Ltd (The Service Provider) may outsource payroll, HR, or administrative obligations to third-party providers, without affecting the Worker's rights under any Agreement.
          </p>
          <div className="text-[10px] text-gray-500 leading-relaxed">
            <p>Registered with the ICO (UK). Registration Number: ZC061312.</p>
            <p>Information provided is for general purposes only and does not constitute legal advice.</p>
          </div>
        </div>
      </div>
    </>
  );
}
