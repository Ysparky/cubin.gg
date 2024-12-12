import React from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDarkMode,
  onToggle,
}) => (
  <button
    onClick={onToggle}
    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    aria-label="Toggle theme"
  >
    {isDarkMode ? (
      <Sun size={20} className="text-gray-300" />
    ) : (
      <Moon size={20} className="text-gray-600" />
    )}
  </button>
);
