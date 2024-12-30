import React from 'react';

interface NavigationProps {
  links: string[];
}

export default function Navigation({ links }: NavigationProps) {
  return (
    <nav className="hidden lg:flex space-x-8">
      {links.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {item}
        </a>
      ))}
    </nav>
  );
}