import React from "react";

export const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${className}`}
  >
    {children}
  </button>
);
