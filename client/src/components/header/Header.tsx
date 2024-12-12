import React from "react";
import { PuzzleType } from "../../types";
import { useDarkMode } from "../../hooks/useDarkMode";
import { ThemeToggle } from "../../common/ThemeToggle";

interface HeaderProps {
  puzzleType: PuzzleType;
  onPuzzleTypeChange: (type: PuzzleType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  puzzleType,
  onPuzzleTypeChange,
}) => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm transition-colors">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Cubin.gg
          </h1>
          <span className="text-sm font-medium text-gray-600">/</span>
          <select
            value={puzzleType}
            onChange={(e) => onPuzzleTypeChange(e.target.value as PuzzleType)}
            className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1.5 text-sm 
                     bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="THREE">3x3</option>
            <option value="TWO">2x2</option>
            <option value="FOUR">4x4</option>
          </select>
        </div>
        <ThemeToggle
          isDarkMode={isDarkMode}
          onToggle={() => setIsDarkMode(!isDarkMode)}
        />
      </div>
    </div>
  );
};
