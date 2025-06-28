
import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface TerminalSectionProps {
  title: string;
  children: React.ReactNode;
}

const TerminalSection = ({ title, children }: TerminalSectionProps) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = `> ${title.toLowerCase().replace(' ', '_')}.exe --initialize`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div className="space-y-6">
      <div className="terminal-screen">
        <div className="terminal-text">
          <div className="flex items-center gap-2 mb-3">
            <Terminal size={16} className="text-green-400" />
            <span className="text-green-400 font-bold">NEURAL_TERMINAL_v2.1</span>
          </div>
          <div className="text-green-400 mb-2">
            {displayText}
            <span className="animate-pulse">█</span>
          </div>
          <div className="text-cyan-300 text-sm">
            Loading {title} consciousness matrix...
            <br />
            ████████████████████████ 100% Complete
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-8 border-2 border-cyan-400/30 rounded-lg animate-fade-in">
        {children}
      </div>
    </div>
  );
};

export default TerminalSection;
