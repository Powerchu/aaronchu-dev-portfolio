import { useContext } from "react";
import { ThemeContext } from "../../../utils/theme/ThemeContext";

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  return (
    <button
      className="p-2 bg-gray-800 text-white rounded"
      onClick={themeContext.toggleTheme}
    >
      Toggle Theme
    </button>
  );
};
export default ThemeToggle;
