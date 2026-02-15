import React from "react";

const BackgroundPattern = ({ children, className = "" }) => {
  return (
    <div className={`relative bg-white ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundPattern;
