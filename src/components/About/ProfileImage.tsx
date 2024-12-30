import React from 'react';
import { PROFILE_IMAGE } from '../../utils/constants';

export default function ProfileImage() {
  return (
    <div className="relative w-64 h-64 mx-auto lg:w-80 lg:h-80">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-conic from-blue-500 via-purple-500 to-blue-500 animate-spin-slower rounded-full blur-2xl opacity-30" />
      
      {/* Glowing orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/30 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/30 rounded-full blur-xl animate-float-delayed" />
      </div>
      
      {/* Profile image container */}
      <div className="relative rounded-full overflow-hidden border-4 border-white/80 dark:border-gray-800/80 shadow-2xl group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay group-hover:opacity-75 transition-opacity duration-500" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 to-transparent" />
        <img
          src={PROFILE_IMAGE}
          alt="Mani Sai Gondrala"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 border-2 border-white/20 dark:border-gray-800/20 rounded-full animate-pulse-slow" />
      <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full animate-reverse-spin" style={{ animationDuration: '15s' }} />
    </div>
  );
}