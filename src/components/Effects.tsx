import React from 'react';
import { motion } from 'motion/react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Decorative vertical line */}
      <div className="absolute top-0 right-[30%] w-[1px] h-full bg-white/5" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" 
      />
      
      {/* Signature highlight */}
      <div className="absolute top-[20%] left-0 w-16 h-[2px] bg-accent translate-x-[-50%]" />
      <div className="absolute top-[21%] left-0 w-8 h-[1px] bg-accent/40 translate-x-[-50%]" />
    </div>
  );
};

export const BorderBeam: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative bg-black border border-white/10 rounded-none overflow-hidden transition-colors hover:border-white/20">
        {children}
      </div>
    </div>
  );
};
