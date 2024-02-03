"use client";

import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const themes = {
  garden: "garden",
  dracula: "dracula",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.garden);

  const toggleTheme = () => {
    const newTheme = theme === themes.garden ? themes.dracula : themes.garden;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button className="btn btn-outline btn-sm" onClick={toggleTheme}>
      {theme === "garden" ? (
        <FaSun className="w-4 h-4" />
      ) : (
        <FaMoon className="w-4 h-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
