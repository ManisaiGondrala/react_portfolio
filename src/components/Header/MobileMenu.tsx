import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  links: string[];
}

export default function MobileMenu({ isOpen, toggleMenu, links }: MobileMenuProps) {
  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg py-2 px-4 space-y-2 animate-fade-in">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}