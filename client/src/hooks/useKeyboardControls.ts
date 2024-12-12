import { MutableRefObject, useEffect } from "react";

interface UseKeyboardControlsProps {
  isTimerRunning: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  setIsSpacePressed: (pressed: boolean) => void;
  readyToStart: MutableRefObject<boolean>;
}

export const useKeyboardControls = ({
  isTimerRunning,
  startTimer,
  stopTimer,
  setIsSpacePressed,
  readyToStart,
}: UseKeyboardControlsProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space" && !event.repeat) {
        event.preventDefault();
        if (isTimerRunning) {
          stopTimer();
        } else {
          setIsSpacePressed(true);
          readyToStart.current = true;
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        setIsSpacePressed(false);
        if (!isTimerRunning && readyToStart.current) {
          startTimer();
        }
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("button, .clickable, .interactive")) return;
      event.preventDefault();
      if (isTimerRunning) {
        stopTimer();
      } else {
        setIsSpacePressed(true);
        readyToStart.current = true;
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("button, .clickable, .interactive")) return;
      event.preventDefault();
      setIsSpacePressed(false);
      if (!isTimerRunning && readyToStart.current) {
        startTimer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isTimerRunning, startTimer, stopTimer, setIsSpacePressed, readyToStart]);
};
