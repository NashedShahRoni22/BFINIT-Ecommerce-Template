import { createContext, useEffect } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const orangeTheme = {
    primary: "#000000",
    accent: "#ff6900",
    text: "#fff",
  };

  const blueTheme = {
    primary: "#6699CC",
    text: "#fff",
    accent: "#FF8C42",
  };

  const greenTheme = {
    primary: "#2f855a",
    text: "#fff",
    accent: "#84cc16",
  };

  const creamTheme = {
    primary: "#faf3e0",
    text: "#000",
    accent: "#c084fc",
  };

  const theme = orangeTheme;

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-text", theme.text);
    root.style.setProperty("--color-accent", theme.accent);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
