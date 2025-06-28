
import React from 'react';
import { Minimize2, Maximize2, X, Zap } from 'lucide-react';

interface WindowFrameProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const WindowFrame = ({ title, children, className = "" }: WindowFrameProps) => {
  return (
    <div className={`anime-window ${className}`}>
      {/* Cyber Title Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-cyan-400 px-4 py-3 flex items-center justify-between border-b-2 border-cyan-400/30">
        <div className="flex items-center gap-3">
          <Zap size={16} className="text-yellow-400 pulse-neon" />
          <span className="font-orbitron text-sm font-bold uppercase tracking-wider neon-glow">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-400 flex items-center justify-center hover:shadow-[0_0_10px_rgba(0,191,255,0.5)] transition-all">
            <Minimize2 size={10} className="text-blue-200" />
          </button>
          <button className="w-6 h-6 bg-gradient-to-br from-green-600 to-green-800 border border-green-400 flex items-center justify-center hover:shadow-[0_0_10px_rgba(0,255,0,0.5)] transition-all">
            <Maximize2 size={10} className="text-green-200" />
          </button>
          <button className="w-6 h-6 bg-gradient-to-br from-red-600 to-red-800 border border-red-400 flex items-center justify-center hover:shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all">
            <X size={10} className="text-red-200" />
          </button>
        </div>
      </div>
      {/* Window Content */}
      <div className="p-0">
        {children}
      </div>
    </div>
  );
};

export default WindowFrame;
