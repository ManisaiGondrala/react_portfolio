import React from 'react';
import ProjectCard from './ProjectCard';
import { images } from '../../assets/images';

export default function Projects() {
  const projects = [
    {
      title: '3D Industrial Robot',
      description: 'I modeled the industrial robot using Fusion 360, showcasing precision, innovation, and seamless design.',
      image: images.projects.industrialRobot,
      github: 'https://github.com/ManisaiGondrala',
      demo: 'https://grabcad.com/library/industrial-model-2',
      tags: ['Fusion 360', '3D Modeling'],
    },
    {
      title: 'Vehicle Rental Management System',
      description: 'The Vehicle Rental Management System (VRMS), developed in PyCharm 2022.3, automates vehicle rentals with secure login, user and vehicle databases, and a search feature, utilizing HTML, CSS, and a Django backend with MySQL.',
      image: images.projects.vrms,
      github: 'https://github.com/ManisaiGondrala/SDP2-Vehicle-Rental-Management-System',
      demo: 'https://manisai2004.pythonanywhere.com/',
      tags: ['Django', 'Python', 'MySQL', 'HTML', 'CSS'],
    },
    {
      title: 'Python Any Where',
      description: 'I built Python Anywhere Learning, a platform for mastering Python with integrated Trinket.io compilers for hands-on practice and essential YouTube resources, tailored for all expertise levels.',
      image: images.projects.pythonAnywhere,
      github: 'https://github.com/ManisaiGondrala/Pythonanywhere',
      demo: 'https://pythonanywhere.netlify.app/',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Interactive Game Suite',
      description: 'Explore my collection of classic games re-imagined through code: Tic-Tac-Toe, FLAMES, and Rock-Paper-Scissors with AI-driven randomness.',
      image: images.projects.gameSuite,
      github: 'https://github.com/ManisaiGondrala',
      demo: '',
      tags: ['Python', 'Jupyter'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills and passion for development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project}
              className={`animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}