import React from 'react';
import { ExternalLink, FileDown, Github, Linkedin, Twitter } from 'lucide-react';
import { documents } from '../../assets/documents';

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <a
        href={documents.resume2}
        
        className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <ExternalLink className="w-5 h-5" />
        <span>Download Resume</span>
      </a>
      <div className="flex space-x-4">
        <a
          href="https://github.com/ManisaiGondrala"
          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transform hover:scale-110 transition-transform"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/gondrala-mani-sai-588192226/"
          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transform hover:scale-110 transition-transform"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://x.com/ManiSai32072634"
          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transform hover:scale-110 transition-transform"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
