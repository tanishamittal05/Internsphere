import React from "react";

export const Label = ({ children, htmlFor, className = "" }) => (
  <label htmlFor={htmlFor} className={`block font-medium text-gray-700 ${className}`}>
    {children}
  </label>
);
