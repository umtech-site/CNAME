import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ThemeName = "midnight" | "aurora" | "ember" | "frost" | "matrix";

interface ThemeConfig {
  label: string;
  particleHue: string;
  particleColor: string;
}

export const themes: Record<ThemeName, ThemeConfig> = {
  midnight: {
    label: "Midnight",
    particleHue: "199, 89%, 48%",
    particleColor: "hsla(199, 89%, 48%,",
  },
  aurora: {
    label: "Aurora",
    particleHue: "280, 80%, 60%",
    particleColor: "hsla(280, 80%, 60%,",
  },
  ember: {
    label: "Ember",
    particleHue: "15, 90%, 55%",
    particleColor: "hsla(15, 90%, 55%,",
  },
  frost: {
    label: "Frost",
    particleHue: "210, 20%, 92%",
    particleColor: "hsla(217, 60%, 50%,",
  },
  matrix: {
    label: "Matrix",
    particleHue: "142, 80%, 50%",
    particleColor: "hsla(142, 80%, 50%,",
  },
};

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
  config: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "midnight",
  setTheme: () => {},
  config: themes.midnight,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>(() => {
    return (localStorage.getItem("theumtech-theme") as ThemeName) || "midnight";
  });

  useEffect(() => {
    localStorage.setItem("theumtech-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, config: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};
