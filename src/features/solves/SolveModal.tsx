import React from "react";
import { Clock, Box, Trash2 } from "lucide-react";
import { TimeEntry } from "../../types";
import { Modal } from "../../common/Modal";
import { formatTime } from "../../utils/format";

interface SolveModalProps {
  isOpen: boolean;
  onClose: () => void;
  entry: TimeEntry;
  onRemove: (id: string) => void;
}

export const SolveModal: React.FC<SolveModalProps> = ({
  isOpen,
  onClose,
  entry,
  onRemove,
}) => {
  if (!isOpen) return null;
  const date = new Date(entry.date);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Solve Details">
      {/* Content */}
      <div className="p-4 space-y-6">
        <div className="text-4xl font-mono text-center font-bold">
          {formatTime(entry.time)}s
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Clock size={18} className="mr-3" />
            <span>{date.toLocaleString()}</span>
          </div>
          <div className="flex items-start text-gray-600">
            <Box size={20} className="mr-3 mt-0.5" />
            <div className="font-mono text-xs break-all">{entry.scramble}</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t bg-gray-50 rounded-b-lg">
        <button
          onClick={() => {
            onRemove(entry.id);
            onClose();
          }}
          className="w-full flex items-center justify-center px-4 py-2 text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-colors"
        >
          <Trash2 size={16} className="mr-2" />
          Remove Time
        </button>
      </div>
    </Modal>
  );
};
