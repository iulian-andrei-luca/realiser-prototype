"use client";

import { useState, useEffect } from "react";

const themes = ["", "theme-ocean", "theme-sunset"];

export const ThemeSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<string>("");

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.className = currentTheme;
  }, [currentTheme]);

  // Cycle through themes
  const nextTheme = () => {
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentTheme(themes[nextIndex]);
  };

  return (
    <div className="space-y-4 p-4">
      <button
        onClick={nextTheme}
        className="px-6 py-3 cursor-pointer bg-status-big-opportunity text-white rounded-lg font-semibold"
      >
        Switch Theme
      </button>
      <div className="bg-status-great p-4 text-gray-800">{currentTheme}</div>
    </div>
  );
};
