/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.{js,jsx,ts,tsx}",
    "./src/utils/theme/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: ["bg-white", "bg-gray-900", "text-black", "text-white"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"], // Add your custom font here
        serif: ["Georgia", "Times New Roman", "serif"], // Classic serif stack
        mono: ["Courier New", "monospace"], // Monospace stack
      },
      colors: {
        primary: "#1a202c",
        secondary: "#2d3748",
        accent: "#4a5568",
        light: "#f7fafc",
        dark: "#2d3748",
        slate: {
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          900: "#0f172a",
        },
        teal: {
          300: "#4fd1c5",
          400: "#38b2ac",
        },
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/assets/images/hero-bg.jpg')",
      }),
    },
  },
  plugins: [],
};
