import { TimeEntry, Statistics } from "../types";
import { calculateAo5FromEntries, findBestAo5 } from "./ao5";

export const calculateStatistics = (times: TimeEntry[]): Statistics => {
  if (times.length === 0) {
    return {
      count: 0,
      bestTime: null,
      averageOfFive: null,
      bestAverageOfFive: null,
      bestAo5Entries: null,
      sessionMean: null,
    };
  }

  const timeValues = times.map((entry) => entry.time);
  const bestTime = Math.min(...timeValues);
  const sessionMean =
    timeValues.reduce((sum, time) => sum + time, 0) / timeValues.length;

  const currentAo5 = calculateAo5FromEntries(times.slice(0, 5));
  const bestAo5Result = findBestAo5(times);

  return {
    count: times.length,
    bestTime,
    averageOfFive: currentAo5,
    bestAverageOfFive: bestAo5Result?.average ?? null,
    bestAo5Entries: bestAo5Result?.timeEntries ?? null,
    sessionMean,
  };
};
