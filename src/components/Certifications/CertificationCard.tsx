import React from 'react';
import { Award, Calendar } from 'lucide-react';

interface CertificationCardProps {
  certification: {
    name: string;
    organization: string;
    date: string;
    image: string;
  };
  className?: string;
  style?: React.CSSProperties;
}

export default function CertificationCard({ certification, className = '', style }: CertificationCardProps) {
  return (
    <div 
      className={`group bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${className}`}
      style={style}
    >
      {/* Certificate Image Container */}
      <div className="relative h-48 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Certificate image */}
        <img
          src={certification.image}
          alt={certification.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm opacity-75">{certification.organization}</p>
          </div>
        </div>
      </div>

      {/* Certificate Info */}
      <div className="p-6">
        <div className="flex items-start space-x-3 mb-3">
          <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1 transform group-hover:rotate-12 transition-transform duration-300" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {certification.name}
          </h3>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{certification.date}</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}