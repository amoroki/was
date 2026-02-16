import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import logo from '../../assets/5d2afe3d0f3ef0ef3f4d611d44022eff7647cea7.png';

export function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Logo & Explore */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
             <img 
               src={logo} 
               alt="Woodborough Admin Services" 
               className="h-14 w-auto object-contain" 
             />
          </div>

          <div>
            <h4 className="text-[#C5A065] mb-4 text-sm tracking-wider uppercase">EXPLORE OUR SITE</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#C5A065] flex items-center"><span className="text-[#C5A065] mr-2">›</span> Home</a></li>
              <li><a href="#" className="hover:text-[#C5A065] flex items-center"><span className="text-[#C5A065] mr-2">›</span> About us</a></li>
              <li><a href="#" className="hover:text-[#C5A065] flex items-center"><span className="text-[#C5A065] mr-2">›</span> Services</a></li>
              <li><a href="/contact" className="hover:text-[#C5A065] flex items-center"><span className="text-[#C5A065] mr-2">›</span> Contact us</a></li>
              <li><a href="/privacy-policy" className="hover:text-[#C5A065] flex items-center"><span className="text-[#C5A065] mr-2">›</span> Privacy Policy</a></li>
            </ul>
          </div>

          {/* ICO Logo Recreation */}
          <div className="bg-white p-3 w-32 mt-6">
            <div className="text-[#000080] font-serif text-3xl font-bold leading-none">ico.</div>
            <div className="text-[#000080] text-[8px] leading-tight mt-1">Information Commissioner's Office</div>
          </div>
        </div>

        {/* Column 2: Tagline */}
        <div>
          <h4 className="text-white mb-4 text-lg font-normal">Connecting Talent with Opportunity</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            At Woodborough Admin Services we specialise in matching top-tier professionals with organisations that need their skills. Whether you're looking to build your team or advance your career, we provide personalised solutions that deliver results.
          </p>
        </div>

        {/* Column 3: Service Offerings */}
        <div>
          <h4 className="text-[#C5A065] mb-4 text-sm tracking-wider uppercase">SERVICE OFFERINGS</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-[#C5A065] flex items-center"><span className="text-[#C5A065] mr-2">›</span> Compliance & Reporting</a></li>
            <li><a href="#" className="hover:text-[#C5A065] flex items-center"><span className="text-[#C5A065] mr-2">›</span> Auto-Enrolment Support</a></li>
            <li><a href="#" className="hover:text-[#C5A065] flex items-center"><span className="text-[#C5A065] mr-2">›</span> Employee Administration</a></li>
          </ul>
        </div>

        {/* Column 4: Keep in Touch */}
        <div>
          <h4 className="text-[#C5A065] mb-4 text-sm tracking-wider uppercase">KEEP IN TOUCH</h4>
          <div className="text-sm text-gray-300 space-y-1 mb-6">
            <p>Penman Way Leicester</p>
            <p>Leicestershire</p>
            <p>Leicester LE19 1SY</p>
            <p>+44 121 409 1020</p>
            <p>admin@waservices-uk.com</p>
            <p>Mon-Fri: 8am- 5pm</p>
          </div>
          <div className="flex gap-4 text-white">
            <a href="#" className="hover:text-[#C5A065]"><Facebook size={20} /></a>
            <a href="#" className="hover:text-[#C5A065]"><Twitter size={20} /></a>
            <a href="#" className="hover:text-[#C5A065]"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-white mt-16"></div>
      {/* Copyright & Credits */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Woodborough Admin Services. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-3 md:mt-0">
          <nav className="flex items-center space-x-4">
            <a href="/privacy-policy" className="hover:text-[#C5A065] hover:underline">Privacy Policy</a>
            <span className="text-gray-400">·</span>
            <a href="/terms" className="hover:text-[#C5A065] hover:underline">Terms &amp; Conditions</a>
          </nav>
          <span className="hidden md:inline">|</span>
          <span>Designed by <a href="https://amoroki.co.ke" target="_blank" rel="noopener noreferrer" className="text-[#C5A065] hover:underline">Amoroki</a></span>
        </div>
      </div>
    </footer>
  );
}
