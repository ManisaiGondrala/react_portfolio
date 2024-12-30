import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/2 -left-1/2 w-full h-full animate-spin-slow">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
      </div>
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full animate-spin-slow-reverse">
        <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 blur-3xl" />
      </div>
    </div>
  );
}