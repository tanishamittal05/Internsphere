import React from "react";

export const Card = ({ children, className = "" }) => (
  <div className={`border rounded-lg bg-white p-4 ${className}`}>{children}</div>
);

export const CardHeader = ({ children }) => <div className="mb-2">{children}</div>;
export const CardTitle = ({ children, className = "" }) => (
  <h2 className={`text-xl font-bold ${className}`}>{children}</h2>
);
export const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-600">{children}</p>
);
export const CardContent = ({ children, className = "" }) => (
  <div className={`space-y-4 ${className}`}>{children}</div>
);
