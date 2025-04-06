export const theme = {
  light: {
    background: '#ffffff',
    text: '#000000',
    primary: '#1d4ed8',
  },
  dark: {
    background: '#1a1a1a',
    text: '#ffffff',
    primary: '#3b82f6',
  },
};

export const toggleTheme = (currentTheme: 'light' | 'dark') => {
  return currentTheme === 'light' ? 'dark' : 'light';
};
