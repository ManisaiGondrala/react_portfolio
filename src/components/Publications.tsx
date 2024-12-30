import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { documents } from '../assets/documents';
export default function Publications() {
  const publications = [
    {
      title: 'BIG DATA ANALYTICS USING HEALTHCARE',
      journal: '45th World Conference on Applied Science, Engineering & Technology (45th WCASET-2023)',
      date: '2023',
      link: documents.publications.BDAH,
    },
    
  ];

  return (
    <section id="publications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Publications</h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{pub.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{pub.journal}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{pub.date}</p>
                </div>
                <a
                  href={pub.link}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Read</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}