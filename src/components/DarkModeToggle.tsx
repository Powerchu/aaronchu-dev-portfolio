import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../utils/theme/ThemeContext";
import { darkTheme, lightTheme } from "../utils/theme/theme";

const DarkModeToggle = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("DarkModeToggle must be used within a ThemeProvider");
  }
  const { theme, toggleTheme } = themeContext;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-gray-800 text-slate-300 hover:bg-gray-700 hover:text-teal-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 transition-colors duration-300"
    >
      {theme === darkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
