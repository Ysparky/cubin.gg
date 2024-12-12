import { TimeEntry, Ao5Result } from "../types";

export const calculateAo5FromEntries = (
  entries: TimeEntry[]
): number | null => {
  if (entries.length < 5) return null;

  const times = entries.map((entry) => entry.time);
  const sorted = [...times].sort((a, b) => a - b);
  const middleThree = sorted.slice(1, -1);
  return middleThree.reduce((sum, time) => sum + time, 0) / 3;
};

export const findBestAo5 = (allEntries: TimeEntry[]): Ao5Result | null => {
  if (allEntries.length < 5) return null;

  let bestAverage: number | null = null;
  let bestEntries: TimeEntry[] = [];

  for (let i = 0; i <= allEntries.length - 5; i++) {
    const currentEntries = allEntries.slice(i, i + 5);
    const average = calculateAo5FromEntries(currentEntries);

    if (average !== null && (bestAverage === null || average < bestAverage)) {
      bestAverage = average;
      bestEntries = currentEntries;
    }
  }

  return bestAverage !== null
    ? { average: bestAverage, timeEntries: bestEntries }
    : null;
};
