import React from "react";

interface ScrambleDisplayProps {
  isLoading: boolean;
  scramble: string | null;
  scrambleImage: string | null;
}

export const ScrambleDisplay: React.FC<ScrambleDisplayProps> = ({
  isLoading,
  scramble,
  scrambleImage,
}) => (
  <div className="mb-6 text-center">
    {isLoading ? (
      <div className="text-lg text-gray-500">Loading scramble...</div>
    ) : (
      <>
        {scramble && (
          <div className="mb-4">
            <p className="text-lg font-mono">{scramble}</p>
          </div>
        )}
        {scrambleImage && (
          <div className="mb-4 flex justify-center">
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(
                scrambleImage
              )}`}
              alt="Scramble"
              className="max-w-xs"
            />
          </div>
        )}
      </>
    )}
  </div>
);
