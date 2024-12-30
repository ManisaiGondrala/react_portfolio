import React from 'react';
import CertificationCard from './CertificationCard';
import { images } from '../../assets/images';

export default function Certifications() {
  const certifications = [
    {
      name: 'Virtual Internship Program at BHARAT INTERN in Web Development',
      organization: 'Bharat Intern',
      date: 'March 10, 2024 - April 10, 2024',
      image: images.certifications.bharatIntern,
    },
    {
      name: 'Red Hat Certified Enterprise Application Developer',
      organization: 'Red Hat',
      date: 'Issued: Dec 27, 2023, Expiration: Dec 27, 2026',
      image: images.certifications.redhat,
    },
    {
      name: 'Oracle Cloud Infrastructure 2023 Certified Architect Associate',
      organization: 'Oracle',
      date: 'Issued: August 22, 2023, Expiration: August 22, 2025',
      image: images.certifications.oracle,
    },
    {
      name: 'Salesforce Certified AI Associate',
      organization: 'Salesforce',
      date: 'Issued: October 20, 2024',
      image: images.certifications.salesforce,
    },
    {
      name: '45th World Conference on Applied Science, Engineering & Technology',
      organization: 'WCASET',
      date: '2023',
      image: images.certifications.wcaset,
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and recognition that showcase my expertise and continuous learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              certification={cert}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}