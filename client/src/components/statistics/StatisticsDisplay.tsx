import React, { useState } from "react";
import { Statistics, TimeEntry } from "../../types";
import { StatCard } from "./StatCard";
import { Ao5Modal } from "../../features/ao5/Ao5Modal";
import { SolveModal } from "../../features/solves/SolveModal";
import { formatTime } from "../../utils/format";

interface StatisticsDisplayProps {
  stats: Statistics;
  timeEntries: TimeEntry[];
}

export const StatisticsDisplay: React.FC<StatisticsDisplayProps> = ({
  stats,
  timeEntries,
}) => {
  const [isCurrentAo5ModalOpen, setIsCurrentAo5ModalOpen] = useState(false);
  const [isBestAo5ModalOpen, setIsBestAo5ModalOpen] = useState(false);
  const [isBestSolveModalOpen, setIsBestSolveModalOpen] = useState(false);

  const lastFiveEntries = timeEntries.slice(0, 5);
  const hasEnoughTimes = lastFiveEntries.length === 5;

  const bestSolveEntry = timeEntries.find(
    (entry) => entry.time === stats.bestTime
  );

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <StatCard
          title="Best"
          value={stats.bestTime ? `${formatTime(stats.bestTime)}s` : "-"}
          onClick={
            bestSolveEntry ? () => setIsBestSolveModalOpen(true) : undefined
          }
          clickHint={bestSolveEntry ? "details" : undefined}
          compact
        />

        <StatCard
          title="Current Ao5"
          value={
            stats.averageOfFive ? `${formatTime(stats.averageOfFive)}s` : "-"
          }
          onClick={
            hasEnoughTimes ? () => setIsCurrentAo5ModalOpen(true) : undefined
          }
          clickHint={hasEnoughTimes ? "details" : undefined}
          compact
        />

        <StatCard
          title="Best Ao5"
          value={
            stats.bestAverageOfFive
              ? `${formatTime(stats.bestAverageOfFive)}s`
              : "-"
          }
          onClick={
            stats.bestAo5Entries ? () => setIsBestAo5ModalOpen(true) : undefined
          }
          clickHint={stats.bestAverageOfFive ? "details" : undefined}
          compact
        />

        <StatCard
          title="Mean"
          value={stats.sessionMean ? `${formatTime(stats.sessionMean)}s` : "-"}
          compact
        />
      </div>

      {bestSolveEntry && (
        <SolveModal
          isOpen={isBestSolveModalOpen}
          onClose={() => setIsBestSolveModalOpen(false)}
          entry={bestSolveEntry}
          onRemove={() => {}}
        />
      )}

      <Ao5Modal
        isOpen={isCurrentAo5ModalOpen}
        onClose={() => setIsCurrentAo5ModalOpen(false)}
        timeEntries={lastFiveEntries}
        title="Current Average of 5"
      />

      {stats.bestAo5Entries && (
        <Ao5Modal
          isOpen={isBestAo5ModalOpen}
          onClose={() => setIsBestAo5ModalOpen(false)}
          timeEntries={stats.bestAo5Entries}
          title="Best Average of 5"
        />
      )}
    </>
  );
};
