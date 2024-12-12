import React from "react";
import { PuzzleType } from "../../types";

interface HeaderProps {
  puzzleType: PuzzleType;
  onPuzzleTypeChange: (type: PuzzleType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  puzzleType,
  onPuzzleTypeChange,
}) => (
  <div className="bg-white shadow-sm">
    <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-2">
      <h1 className="text-xl font-bold text-gray-800">Cubin.gg</h1>
      <span className="text-sm font-medium text-gray-600">/</span>
      <select
        value={puzzleType}
        onChange={(e) => onPuzzleTypeChange(e.target.value as PuzzleType)}
        className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="THREE">3x3</option>
        <option value="TWO">2x2</option>
        <option value="FOUR">4x4</option>
      </select>
    </div>
  </div>
);
