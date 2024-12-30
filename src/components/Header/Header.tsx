import React, { useState, useEffect } from 'react';
import { Home, GraduationCap, Briefcase, Award, Github, BookOpen, Mail, Menu, X } from 'lucide-react';
import NavLink from '../Navigation/NavLink';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { href: '#about', label: 'About', icon: Home },
    { href: '#education', label: 'Education', icon: GraduationCap },
    { href: '#projects', label: 'Projects', icon: Briefcase },
    { href: '#certifications', label: 'Certifications', icon: Award },
    { href: '#github', label: 'GitHub', icon: Github },
    { href: '#publications', label: 'Publications', icon: BookOpen },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                isActive={activeSection === item.href.slice(1)}
              />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                isActive={activeSection === item.href.slice(1)}
              />
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}