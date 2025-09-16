import React from "react";

export const Select = ({ children, className = "", ...props }) => (
  <select
    {...props}
    className={`border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 ${className}`}
  >
    {children}
  </select>
);

export const SelectTrigger = ({ children }) => <>{children}</>;
export const SelectValue = ({ placeholder }) => <option disabled>{placeholder}</option>;
export const SelectContent = ({ children }) => <>{children}</>;
export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;
