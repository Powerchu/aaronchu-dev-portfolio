export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748',
        accent: '#4a5568',
        light: '#f7fafc',
        dark: '#2d3748',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/assets/images/hero-bg.jpg')",
      }),
    },
  },
  plugins: [],
}
