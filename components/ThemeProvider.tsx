"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface ThemeCtx {
  dark: boolean;
  mounted: boolean;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeCtx>({
  dark: true,
  mounted: false,
  toggle: () => {},
});

export const useTheme = () => useContext(ThemeContext);

/** Inline script that sets the theme class before paint to avoid a flash. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setDark(saved ? saved === "dark" : true);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark, mounted]);

  return (
    <ThemeContext.Provider value={{ dark, mounted, toggle: () => setDark((v) => !v) }}>
      {children}
    </ThemeContext.Provider>
  );
}
