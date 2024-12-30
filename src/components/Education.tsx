import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      year: '2021 - Present',
      degree: 'Bachelor of Technology in Computer Science Engineering',
      school: 'KL University',
      description: 'Specialized in Data Science',
      score: 'CGPA: 9.16',
    },
    {
      year: '2019 - 2021',
      degree: 'Intermediate(12th class)',
      school: 'Narayana IIT Academy',
      description: 'Mathematics, Physics, and Chemistry',
      score: 'Score: 896/1000'
    },
    {
      year: '2018 - 2019',
      degree: '10th Class',
      school: 'Winfield High School',
      description: 'Board of Secondary Education, Telangana (BSET)',
      score: 'GPA: 9.7'
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Education</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-600"></div>
          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-blue-600">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{item.school}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}