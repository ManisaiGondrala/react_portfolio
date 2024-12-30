import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    github: string;
    demo: string;
    tags: string[];
  };
  className?: string;
  style?: React.CSSProperties;
}

export default function ProjectCard({ project, className = '', style }: ProjectCardProps) {
  return (
    <div 
      className={`group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${className}`}
      style={style}
    >
      {/* Project Image with Overlay */}
      <div className="relative h-48 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Project image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Hover overlay with actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-4 left-4 right-4 flex justify-end space-x-4">
            <a
              href={project.github}
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transform hover:scale-105 transition-transform duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}