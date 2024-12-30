import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function ThemeToggle({ isDarkMode, toggleDarkMode }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-gray-300" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
}