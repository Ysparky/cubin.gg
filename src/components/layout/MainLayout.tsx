import React from "react";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="h-screen flex flex-col overflow-hidden bg-gray-100">
    {children}
  </div>
);
