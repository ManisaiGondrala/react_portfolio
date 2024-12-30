import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
}

export default function NavLink({ href, label, icon: Icon, isActive }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </a>
  );
}