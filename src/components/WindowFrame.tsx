
import React from 'react';
import { Minimize2, Maximize2, X } from 'lucide-react';

interface WindowFrameProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const WindowFrame = ({ title, children, className = "" }: WindowFrameProps) => {
  return (
    <div className={`retro-window ${className}`}>
      {/* Title Bar */}
      <div className="bg-retro-highlight text-white px-2 py-1 flex items-center justify-between">
        <span className="font-terminus text-sm font-medium">{title}</span>
        <div className="flex items-center gap-1">
          <button className="w-4 h-4 bg-retro-gray border border-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <Minimize2 size={8} className="text-black" />
          </button>
          <button className="w-4 h-4 bg-retro-gray border border-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <Maximize2 size={8} className="text-black" />
          </button>
          <button className="w-4 h-4 bg-red-500 border border-red-700 flex items-center justify-center hover:bg-red-400 transition-colors">
            <X size={8} className="text-white" />
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
