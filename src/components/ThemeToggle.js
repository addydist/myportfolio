import React from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../theme/ThemeContext";

function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`.trim()}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {isDark ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
      </span>
      <span className="theme-toggle-label">
        <span className="nav-cmd">--</span>
        {theme}
      </span>
    </button>
  );
}

export default ThemeToggle;
