module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in the src directory
    "./src/styles/**/*.{css,scss}", // Include all CSS/SCSS files in the styles directory
  ],
  safelist: ["bg-white", "bg-gray-900", "text-black", "text-white"],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c",
        secondary: "#2d3748",
        accent: "#4a5568",
        light: "#f7fafc",
        dark: "#2d3748",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/assets/images/hero-bg.jpg')",
      }),
    },
  },
  plugins: [],
};
