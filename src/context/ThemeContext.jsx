"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default to 'light' per user requirements, or restore saved preference
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('blank_slate_theme');
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
    }
    return 'light'; // Default is always light
  });

  const isDark = theme === 'dark';

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
      document.body.style.backgroundColor = '#050505';
      document.body.style.color = '#ffffff';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#0f172a';
    }
    localStorage.setItem('blank_slate_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
