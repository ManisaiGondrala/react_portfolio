import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import ProfileImage from './ProfileImage';
import SocialLinks from './SocialLinks';
import TypingName from './TypingName';
import { ABOUT_INFO } from '../../utils/constants';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white animate-fade-in">
              Hi, I'm <TypingName />
            </h1>
            <div className="space-y-2">
              <p className="text-xl text-gray-600 dark:text-gray-300 animate-slide-up">
                {ABOUT_INFO.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {ABOUT_INFO.roles.map((role, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div className="animate-slide-up">
              <SocialLinks />
            </div>
          </div>
          <div className="animate-fade-in">
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  );
}