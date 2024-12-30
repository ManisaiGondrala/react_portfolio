import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: '#D Industrial Robot',
      description: 'I modeled the industrial robot using Fusion 360, showcasing precision, innovation, and seamless design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      demo: 'https://grabcad.com/library/industrial-model-2',
      tags: ['Fusion 360', '3d Modeling'],
    },
    {
      title: 'Project Two',
      description: 'Mobile application developed using React Native',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      demo: 'https://demo.com',
      tags: ['React Native', 'Firebase'],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}