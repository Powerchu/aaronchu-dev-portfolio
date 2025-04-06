import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '../utils/theme';

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <ThemeProvider value={{ isDarkMode, toggleDarkMode }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;