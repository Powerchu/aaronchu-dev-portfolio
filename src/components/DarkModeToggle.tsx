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
    <button onClick={toggleTheme} className="p-2 rounded focus:outline-none">
      {theme === darkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
