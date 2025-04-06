import { useContext } from "react";
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import { lightTheme } from "../../../utils/theme/theme";

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const { theme } = themeContext;
  return (
    <button
      className="p-2 rounded focus:outline-none bg-gray-800 text-white dark:bg-white dark:text-black"
      onClick={themeContext.toggleTheme}
    >
      {theme === lightTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};
export default ThemeToggle;
