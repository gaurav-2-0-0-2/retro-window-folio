
import React, { useState, useEffect } from 'react';

interface TerminalSectionProps {
  title: string;
  children: React.ReactNode;
}

const TerminalSection = ({ title, children }: TerminalSectionProps) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = `> ${title.toLowerCase().replace(' ', '_')}.exe`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div className="space-y-4">
      <div className="terminal-text">
        <div className="text-green-400 mb-2">
          {displayText}
          <span className="animate-pulse">_</span>
        </div>
        <div className="text-cyan-300 text-sm">
          Loading {title}...
        </div>
      </div>
      <div className="bg-white p-6 border-2 border-retro-border animate-fade-in">
        {children}
      </div>
    </div>
  );
};

export default TerminalSection;
