interface StatCardProps {
  title: string;
  value: string;
  onClick?: () => void;
  clickHint?: string;
  compact?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  onClick,
  clickHint,
  compact = false,
}) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm ${
        onClick ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700" : ""
      } ${compact ? "p-2" : "p-4"}`}
      onClick={onClick}
    >
      <div className="text-xs text-gray-600 dark:text-gray-400">
        {title} {clickHint && <span className="text-xs">({clickHint})</span>}
      </div>
      <div className="font-mono text-sm dark:text-white">{value}</div>
    </div>
  );
};
