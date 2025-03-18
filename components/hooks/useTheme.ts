import { create } from "zustand";

interface ThemeProps {
  mode: "light" | "dark";
  onDarkMode: () => void;
  onLightMode: () => void;
  onInitialMode: () => void;
}

const getCurrentThemeMode = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light"; // Prevents server error

  const themeMode = localStorage.getItem("theme-mode");
  return themeMode === "dark" ? "dark" : "light";
};

const onDarkModeHandler = (): { mode: "dark" } => {
  if (typeof window !== "undefined") {
    localStorage.setItem("theme-mode", "dark");
  }
  return { mode: "dark" };
};

const onLightModeHandler = (): { mode: "light" } => {
  if (typeof window !== "undefined") {
    localStorage.setItem("theme-mode", "light");
  }
  return { mode: "light" };
};

const useTheme = create<ThemeProps>((set) => ({
  mode: "light",
  onDarkMode: () => set(onDarkModeHandler),
  onLightMode: () => set(onLightModeHandler),
  onInitialMode: () => set({ mode: getCurrentThemeMode() }),
}));

export default useTheme;
