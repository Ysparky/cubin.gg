import React from "react";
import { Statistics, TimeEntry } from "../../types";
import { StatisticsDisplay } from "./StatisticsDisplay";
import { Trash2 } from "lucide-react";
import { TimeEntryList } from "../timer/TimeEntryList";

interface StatisticsSectionProps {
  stats: Statistics;
  timeEntries: TimeEntry[];
  onRemoveTime: (id: string) => void;
  onClearTimes: (puzzleType: string) => void;
}

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  stats,
  timeEntries,
  onRemoveTime,
  onClearTimes,
}) => (
  <div className="flex-1 min-h-0 px-4">
    <div className="max-w-3xl mx-auto h-full flex flex-col">
      {/* Fixed header section */}
      <div className="bg-gray-100 pt-3 pb-2">
        <StatisticsDisplay stats={stats} timeEntries={timeEntries} />
        {/* Times header with total solves and clear button */}
        <div className="flex justify-between items-center mt-4 mb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-gray-600">Times</h3>
            <span className="text-xs text-gray-500">({stats.count})</span>
          </div>
          {timeEntries.length > 0 && (
            <button
              onClick={() => onClearTimes(timeEntries[0].puzzleType)}
              className="flex items-center px-2 py-1 text-xs text-red-600 hover:text-red-800"
            >
              <Trash2 size={14} className="mr-1" />
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Scrollable time list */}
      <div className="flex-1 min-h-0">
        <TimeEntryList timeEntries={timeEntries} onRemoveTime={onRemoveTime} />
      </div>
    </div>
  </div>
);
