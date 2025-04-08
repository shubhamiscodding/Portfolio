import React from "react";

const Badge = ({ children, className }) => {
  return (
    <span className={`inline-flex items-center ${className}`}>
      {children}
    </span>
  );
};

export { Badge }; 