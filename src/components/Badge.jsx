import React from "react";

export const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center px-2 py-1 text-sm rounded bg-gray-200 text-gray-800 ${className}`}>
    {children}
  </span>
);
