import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const THEME_STORAGE_KEY = "portfolio-theme";

const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
  isDark: true,
});

function readStoredTheme() {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    // Private mode / blocked storage — fall back to the system preference.
    return null;
  }
}

function systemTheme() {
  if (typeof window === "undefined" || !window.matchMedia) return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function ThemeProvider({ children }) {
  // The inline script in public/index.html has already stamped data-theme on
  // <html> to avoid a flash, so prefer that value over recomputing it.
  const [theme, setThemeState] = useState(() => {
    const stamped = document.documentElement.getAttribute("data-theme");
    if (stamped === "light" || stamped === "dark") return stamped;
    return readStoredTheme() || systemTheme();
  });

  // Whether the user has made an explicit choice. Until they do, the site
  // keeps following the OS setting live.
  const [isExplicit, setIsExplicit] = useState(() => readStoredTheme() !== null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#1a1a1a" : "#cccccc");
    }
  }, [theme]);

  useEffect(() => {
    if (isExplicit || !window.matchMedia) return undefined;
    const mql = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (event) => setThemeState(event.matches ? "light" : "dark");
    // Safari < 14 only has the deprecated addListener.
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, [isExplicit]);

  const setTheme = useCallback((next) => {
    setThemeState(next);
    setIsExplicit(true);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Persisting is best-effort; the toggle still works for this session.
    }
  }, []);

  const toggleTheme = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [theme, setTheme]
  );

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme, isDark: theme === "dark" }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
