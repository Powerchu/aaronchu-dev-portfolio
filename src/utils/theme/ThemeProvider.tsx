import { ReactNode, useState } from "react";
import { ThemeType, lightTheme, darkTheme } from "./theme";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(lightTheme);
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ background: theme.background, color: theme.color }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
