import { useState, useEffect } from 'react';
import { setTheme, getInitialTheme } from '../utils/theme';

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    setTheme(isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return { isDarkMode, toggleDarkMode };
}