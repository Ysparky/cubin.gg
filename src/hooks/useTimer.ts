import { useState, useCallback, useEffect, useRef } from "react";
import { calculateElapsedTime } from "../utils/timer";

interface UseTimerProps {
  onTimerStop: (elapsedTime: number) => void;
}

export const useTimer = ({ onTimerStop }: UseTimerProps) => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const readyToStart = useRef<boolean>(false);

  const startTimer = useCallback(() => {
    if (!isTimerRunning && readyToStart.current) {
      setStartTime(Date.now());
      setIsTimerRunning(true);
      readyToStart.current = false;
    }
  }, [isTimerRunning]);

  const stopTimer = useCallback(() => {
    if (isTimerRunning && startTime) {
      const elapsedTime = calculateElapsedTime(startTime);
      setIsTimerRunning(false);
      setStartTime(null);
      setCurrentTime(elapsedTime);
      onTimerStop(elapsedTime);
    }
  }, [isTimerRunning, startTime, onTimerStop]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isTimerRunning && startTime) {
      intervalId = setInterval(() => {
        setCurrentTime(calculateElapsedTime(startTime));
      }, 10);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isTimerRunning, startTime]);

  return {
    isTimerRunning,
    currentTime,
    isSpacePressed,
    setIsSpacePressed,
    readyToStart,
    startTimer,
    stopTimer,
    setCurrentTime,
  };
};
