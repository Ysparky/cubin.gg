export interface TimeEntry {
  id: string;
  scramble: string;
  time: number;
  date: Date;
  puzzleType: string;
}

export type PuzzleType = "THREE" | "TWO" | "FOUR";

export interface Statistics {
  count: number;
  bestTime: number | null;
  averageOfFive: number | null;
  bestAverageOfFive: number | null;
  bestAo5Entries: TimeEntry[] | null;
  sessionMean: number | null;
}

export interface Ao5Result {
  average: number;
  timeEntries: TimeEntry[];
}
