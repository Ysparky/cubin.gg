import React, { useState } from "react";
import { SolveModal } from "../../features/solves/SolveModal";
import { TimeEntry } from "../../types";
import { formatTime } from "../../utils/format";

interface TimeEntryListProps {
  timeEntries: TimeEntry[];
  onRemoveTime: (id: string) => void;
}

export const TimeEntryList: React.FC<TimeEntryListProps> = ({
  timeEntries,
  onRemoveTime,
}) => {
  const [selectedEntry, setSelectedEntry] = useState<TimeEntry | null>(null);
  const bestTime = Math.min(...timeEntries.map((entry) => entry.time));

  const handleTouchStart = (event: React.TouchEvent) => {
    event.stopPropagation();
  };

  const handleCardClick = (entry: TimeEntry) => {
    setSelectedEntry(entry); // Open the modal
  };

  return (
    <div className="h-full overflow-y-auto px-1 pb-6 custom-scrollbar">
      {timeEntries.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 pb-2">
          {timeEntries.map((entry) => (
            <div
              key={entry.id}
              onClick={() => handleCardClick(entry)}
              onTouchStart={handleTouchStart}
              className={`relative rounded-lg p-3 transition-all cursor-pointer hover:bg-gray-200 ${
                entry.time === bestTime
                  ? "bg-green-50 border-green-200"
                  : "bg-white border-gray-100"
              }`}
            >
              <div className="text-lg md:text-xl font-mono font-bold text-center">
                {formatTime(entry.time)}s
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-3 text-center text-sm text-gray-500">
          No times recorded
        </div>
      )}

      {selectedEntry && (
        <SolveModal
          isOpen={true}
          onClose={() => setSelectedEntry(null)}
          entry={selectedEntry}
          onRemove={onRemoveTime}
        />
      )}
    </div>
  );
};
