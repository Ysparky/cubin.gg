import { useState, useEffect } from "react";
import { TimeEntry } from "../types";
import { v4 as uuidv4 } from "uuid";

export const useTimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>(() => {
    const savedTimes = localStorage.getItem("cube-timer-times");
    return savedTimes
      ? JSON.parse(savedTimes).map((entry: any) => ({
          ...entry,
          date: new Date(entry.date),
        }))
      : [];
  });

  useEffect(() => {
    localStorage.setItem("cube-timer-times", JSON.stringify(timeEntries));
  }, [timeEntries]);

  const addTime = (newTime: Omit<TimeEntry, "id">) => {
    const timeEntry: TimeEntry = {
      ...newTime,
      id: uuidv4(),
    };
    setTimeEntries((prev) => [...prev, timeEntry]);
  };

  const removeTime = (id: string) => {
    setTimeEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  const clearTimes = (puzzleType: string) => {
    setTimeEntries((prev) =>
      prev.filter((entry) => entry.puzzleType !== puzzleType)
    );
  };

  return {
    timeEntries,
    addTime,
    removeTime,
    clearTimes,
  };
};
