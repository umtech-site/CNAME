import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Palette } from "lucide-react";
import { useTheme, themes, ThemeName } from "./ThemeContext";

const themeSwatches: Record<ThemeName, string> = {
  midnight: "bg-[hsl(199,89%,48%)]",
  aurora: "bg-[hsl(280,80%,60%)]",
  ember: "bg-[hsl(15,90%,55%)]",
  frost: "bg-[hsl(210,20%,92%)]",
  matrix: "bg-[hsl(142,80%,50%)]",
};

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-6 top-6 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="glass-card flex h-12 w-12 items-center justify-center rounded-xl border border-glass-border transition-colors hover:border-primary/40"
      >
        <Palette className="h-5 w-5 text-primary" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass-card absolute right-0 mt-3 min-w-[180px] overflow-hidden rounded-xl border border-glass-border p-2"
          >
            {(Object.keys(themes) as ThemeName[]).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setTheme(key);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  theme === key
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <span className={`h-3.5 w-3.5 rounded-full ${themeSwatches[key]} ring-2 ring-offset-1 ring-offset-background ${theme === key ? "ring-primary" : "ring-transparent"}`} />
                {themes[key].label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
