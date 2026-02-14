import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <div className="relative h-[600px] w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MDg3Mzc4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")'
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 tracking-tight drop-shadow-md"
        >
          Woodborough Admin Services
        </motion.h1>
        
        <div className="w-24 h-1 bg-[#C5A065] mb-8 mx-auto" />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-100 mb-10 font-light max-w-2xl leading-relaxed"
        >
          Take Your Business Soaring High - Register with Woodborough Admin Services Today
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#C5A065] text-white px-8 py-3 rounded-sm text-lg font-medium hover:bg-[#b08d55] transition-colors shadow-lg"
        >
          Learn more
        </motion.button>
      </div>

      {/* Arrow Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <ChevronDown size={48} />
      </motion.div>
    </div>
  );
}
