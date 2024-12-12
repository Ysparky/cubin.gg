import React from "react";
import { TimeEntry } from "../../types";
import { Modal } from "../../common/Modal";
import { formatTime } from "../../utils/format";

interface Ao5ModalProps {
  isOpen: boolean;
  onClose: () => void;
  timeEntries: TimeEntry[];
  title: string;
}

export const Ao5Modal: React.FC<Ao5ModalProps> = ({
  isOpen,
  onClose,
  timeEntries,
  title,
}) => {
  if (!isOpen) return null;

  // Sort times and get indexes of best and worst
  const sortedIndexes = timeEntries
    .map((entry, index) => ({ time: entry.time, index }))
    .sort((a, b) => a.time - b.time);

  const bestIndex = sortedIndexes[0].index;
  const worstIndex = sortedIndexes[4].index;

  // Calculate average excluding best and worst
  const middleThree = sortedIndexes.slice(1, -1).map(({ time }) => time);
  const average = middleThree.reduce((sum, time) => sum + time, 0) / 3;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="2xl">
      <div className="p-6">
        <div className="mb-4">
          <p className="text-lg font-semibold dark:text-white">
            Average: {formatTime(average)}s
          </p>
        </div>

        <div className="space-y-4">
          {timeEntries.map((entry, index) => (
            <div
              key={entry.id}
              className={`p-4 rounded-lg border ${
                index === bestIndex
                  ? "border-green-200 bg-green-50 dark:border-green-500 dark:bg-green-800"
                  : index === worstIndex
                  ? "border-red-200 bg-red-50 dark:border-red-500 dark:bg-red-800"
                  : "border-gray-200 dark:border-gray-600 dark:bg-gray-700"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-lg dark:text-gray-100">
                  {formatTime(entry.time)}s{index === bestIndex && " (Best)"}
                  {index === worstIndex && " (Worst)"}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {new Date(entry.date).toLocaleTimeString()}
                </span>
              </div>
              <div className="text-sm font-mono break-all text-gray-600 dark:text-gray-300">
                Scramble: {entry.scramble}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};
