
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, tech, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <div className="retro-window p-4 hover:shadow-lg transition-shadow duration-300">
      <h3 className="font-terminus font-semibold text-lg mb-2 text-retro-darkblue">
        {title}
      </h3>
      <p className="text-gray-700 mb-3 text-sm leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-1 mb-3">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-retro-gray border border-retro-darkgray text-xs font-terminus"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        {liveUrl && (
          <button className="retro-button flex items-center gap-1 text-xs">
            <ExternalLink size={12} />
            Live Demo
          </button>
        )}
        {githubUrl && (
          <button className="retro-button flex items-center gap-1 text-xs">
            <Github size={12} />
            Code
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
