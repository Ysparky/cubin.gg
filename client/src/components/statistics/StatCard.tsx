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
  const handleTouchStart = (event: React.TouchEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm ${
        onClick ? "cursor-pointer hover:bg-gray-50" : ""
      } ${compact ? "p-2" : "p-4"}`}
      onClick={onClick}
      onTouchStart={handleTouchStart}
    >
      <div className="text-xs text-gray-600 mb-0.5">
        {title} {clickHint && <span className="text-xs">({clickHint})</span>}
      </div>
      <div className="font-mono text-sm">{value}</div>
    </div>
  );
};
