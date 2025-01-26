import { createContext, useEffect, useMemo } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const theme = useMemo(
    () => ({
      primary: "#000000",
      secondary: "#2ecc71",
      accent: "#ff6900",
      text: "#ffffff",
    }),
    [],
  );

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-accent", theme.accent);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
