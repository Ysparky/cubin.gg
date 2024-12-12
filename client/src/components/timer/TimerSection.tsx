import React from "react";
import { formatTime } from "../../utils/format";

interface TimerSectionProps {
  currentTime: number;
  isTimerRunning: boolean;
  isSpacePressed: boolean;
  scramble: string | null;
  scrambleImage: string | null;
}

export const TimerSection: React.FC<TimerSectionProps> = ({
  currentTime,
  isTimerRunning,
  isSpacePressed,
  scramble,
  scrambleImage
}) => (
  <div className="flex-none px-4 py-2 md:py-6">
    {/* Scramble */}
    <div className="text-center mb-6">
      <p className="text-base md:text-xl font-mono dark:text-gray-200">{scramble || 'Loading scramble...'}</p>
    </div>
    
    {/* Timer */}
    <div className="text-center">
      <div className="text-7xl md:text-8xl font-mono mb-2 tabular-nums dark:text-white">
        {formatTime(currentTime)}
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
        {isTimerRunning 
          ? "Timer Running - Press Space to Stop" 
          : isSpacePressed
            ? "Hold Space... Release to Start"
            : "Press and Hold Space to Start"}
      </div>
    </div>
    
    {/* SVG Visualization */}
    {scrambleImage && (
      <div className="flex justify-center items-center mt-4">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(scrambleImage)}`}
          alt="Scramble visualization"
          className="w-48 h-48 md:w-64 md:h-64"
        />
      </div>
    )}
  </div>
);