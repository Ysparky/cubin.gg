import React from "react";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="h-screen flex flex-col  bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="w-full max-w-3xl mx-auto min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
};
