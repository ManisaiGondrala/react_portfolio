import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Education from './components/Education';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import GitHub from './components/GitHub/GitHub';
import Publications from './components/Publications';
import Contact from './components/Contact/Contact';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <About />
        <Education />
        <Projects />
        <Certifications />
        <GitHub />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}

export default App;