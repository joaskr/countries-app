import { createContext, useContext, useState, useLayoutEffect } from 'react';
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const initialTheme = () => localStorage.getItem('theme');
  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () => setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  useLayoutEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.remove('theme-light');
      document.documentElement.classList.add('theme-dark');
    } else {
      document.documentElement.classList.remove('theme-dark');
      document.documentElement.classList.add('theme-light');
    }
  }, [theme]);
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
export { ThemeProvider, useTheme };
