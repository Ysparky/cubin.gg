import React, { useCallback, useEffect, useState } from "react";
import { useTimer } from "./hooks/useTimer";
import { useTimeEntries } from "./hooks/useTimeEntries";
import { useKeyboardControls } from "./hooks/useKeyboardControls";
import { calculateStatistics } from "./utils/statistics";
import { PuzzleType } from "./types";
import { generateScramble } from "./utils/scramble";
import { MainLayout } from "./components/layout/MainLayout";
import { TimerSection } from "./components/timer/TimerSection";
import { StatisticsSection } from "./components/statistics/StatisticsSection";
import { Header } from "./components/header/Header";

const App: React.FC = () => {
  const [puzzleType, setPuzzleType] = useState<PuzzleType>("THREE");
  const [scramble, setScramble] = useState<string | null>(null);
  const [scrambleImage, setScrambleImage] = useState<string | null>(null);
  const [, setIsLoading] = useState<boolean>(false);

  const { timeEntries, addTime, removeTime, clearTimes } = useTimeEntries();

  const handleGenerateScramble = async (type?: PuzzleType) => {
    setIsLoading(true);
    try {
      const { scramble, svg } = await generateScramble(type || puzzleType);
      setScramble(scramble);
      setScrambleImage(svg);
    } catch (error) {
      console.error("Failed to generate scramble:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTimerStop = useCallback(
    (elapsedTime: number) => {
      addTime({
        scramble: scramble || "No scramble",
        time: elapsedTime,
        date: new Date(),
        puzzleType: puzzleType,
      });
      handleGenerateScramble();
    },
    [scramble, puzzleType, addTime]
  );

  const {
    isTimerRunning,
    currentTime,
    isSpacePressed,
    setIsSpacePressed,
    readyToStart,
    startTimer,
    stopTimer,
  } = useTimer({ onTimerStop: handleTimerStop });

  useKeyboardControls({
    isTimerRunning,
    startTimer,
    stopTimer,
    setIsSpacePressed,
    readyToStart,
  });

  const handlePuzzleTypeChange = (newType: PuzzleType) => {
    setPuzzleType(newType);
    handleGenerateScramble(newType);
  };

  useEffect(() => {
    handleGenerateScramble();
  }, []);

  const filteredTimeEntries = timeEntries
    .filter((entry) => entry.puzzleType === puzzleType)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const statistics = calculateStatistics(filteredTimeEntries);

  return (
    <MainLayout>
      <Header
        puzzleType={puzzleType}
        onPuzzleTypeChange={handlePuzzleTypeChange}
      />

      <TimerSection
        currentTime={currentTime}
        isTimerRunning={isTimerRunning}
        isSpacePressed={isSpacePressed}
        scramble={scramble}
        scrambleImage={scrambleImage}
      />

      <StatisticsSection
        stats={statistics}
        timeEntries={filteredTimeEntries}
        onRemoveTime={removeTime}
        onClearTimes={clearTimes}
      />
    </MainLayout>
  );
};

export default App;
