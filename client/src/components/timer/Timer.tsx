import React from "react";
import { formatTime } from "../../utils/format";

interface TimerProps {
  currentTime: number;
  isTimerRunning: boolean;
  isSpacePressed: boolean;
}

export const Timer: React.FC<TimerProps> = ({
  currentTime,
  isTimerRunning,
  isSpacePressed,
}) => (
  <div className="mb-6 text-center">
    <div className="text-6xl font-mono mb-4">{formatTime(currentTime)}s</div>
    <div className="text-sm text-gray-600">
      {isTimerRunning
        ? "Timer Running - Press Space to Stop"
        : isSpacePressed
        ? "Hold Space... Release to Start"
        : "Press and Hold Space to Start"}
    </div>
  </div>
);
