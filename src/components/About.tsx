import React from 'react';
import { FileDown, Github, Linkedin, Twitter } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A passionate software developer specializing in building exceptional digital experiences.
              With a strong foundation in modern web technologies and a keen eye for design,
              I create solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <FileDown className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
              <div className="flex space-x-4">
                <a href="https://github.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}