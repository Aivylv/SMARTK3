import React from 'react';

const KartuKaca = ({ children, className = "", adaHover = false }) => {
  const hoverClass = adaHover ? "transition duration-300 kaca-card-hover group relative overflow-hidden" : "";
  
  return (
    <div className={`kaca-card rounded-2xl shadow-lg ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default KartuKaca;