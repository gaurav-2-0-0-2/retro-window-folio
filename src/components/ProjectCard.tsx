
import React from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, tech, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <div className="project-card group">
      <div className="flex items-center gap-2 mb-4">
        <Zap size={16} className="text-cyan-400 group-hover:text-magenta-400 transition-colors" />
        <h3 className="font-orbitron font-black text-xl text-cyan-400 group-hover:text-magenta-400 transition-colors uppercase tracking-wider neon-glow">
          {title}
        </h3>
      </div>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed font-fira-code">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item, index) => (
          <span key={index} className="skill-chip">
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {liveUrl && (
          <button className="anime-button flex items-center gap-2 text-xs">
            <ExternalLink size={12} />
            Launch_Demo
          </button>
        )}
        {githubUrl && (
          <button className="anime-button flex items-center gap-2 text-xs">
            <Github size={12} />
            View_Code
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
