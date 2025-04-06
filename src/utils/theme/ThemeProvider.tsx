import { ReactNode, useEffect, useState } from "react";
import { ThemeType, lightTheme, darkTheme } from "./theme";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(lightTheme);

  // Load the theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme === "dark" ? darkTheme : lightTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
    localStorage.setItem("theme", theme === darkTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === darkTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ background: theme.background, color: theme.color }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
