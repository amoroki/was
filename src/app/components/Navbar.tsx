import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../assets/5d2afe3d0f3ef0ef3f4d611d44022eff7647cea7.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#2d2d2d] text-white py-4 px-6 md:px-12 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Woodborough Admin Services" 
            className="h-16 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link 
            to="/" 
            className={`transition-colors pb-1 border-b-2 ${isActive('/') ? 'text-white border-[#C5A065]' : 'text-gray-300 border-transparent hover:text-[#C5A065]'}`}
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors pb-1 border-b-2 ${isActive('/about') ? 'text-white border-[#C5A065]' : 'text-gray-300 border-transparent hover:text-[#C5A065]'}`}
          >
            ABOUT US
          </Link>
          <Link 
            to="/services" 
            className={`transition-colors pb-1 border-b-2 ${isActive('/services') ? 'text-white border-[#C5A065]' : 'text-gray-300 border-transparent hover:text-[#C5A065]'}`}
          >
            SERVICES
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors pb-1 border-b-2 ${isActive('/contact') ? 'text-white border-[#C5A065]' : 'text-gray-300 border-transparent hover:text-[#C5A065]'}`}
          >
            CONTACT US
          </Link>
          <Link 
            to="/privacy-policy" 
            className={`transition-colors pb-1 border-b-2 ${isActive('/privacy-policy') ? 'text-white border-[#C5A065]' : 'text-gray-300 border-transparent hover:text-[#C5A065]'}`}
          >
            PRIVACY POLICY
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#2d2d2d] border-t border-gray-700 absolute top-full left-0 w-full"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link to="/" className={isActive('/') ? "text-[#C5A065] font-medium" : "text-gray-300 hover:text-[#C5A065]"}>HOME</Link>
              <Link to="/about" className={isActive('/about') ? "text-[#C5A065] font-medium" : "text-gray-300 hover:text-[#C5A065]"}>ABOUT US</Link>
              <Link to="/services" className={isActive('/services') ? "text-[#C5A065] font-medium" : "text-gray-300 hover:text-[#C5A065]"}>SERVICES</Link>
              <Link to="/contact" className={isActive('/contact') ? "text-[#C5A065] font-medium" : "text-gray-300 hover:text-[#C5A065]"}>CONTACT US</Link>
              <Link to="/privacy-policy" className={isActive('/privacy-policy') ? "text-[#C5A065] font-medium" : "text-gray-300 hover:text-[#C5A065]"}>PRIVACY POLICY</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
