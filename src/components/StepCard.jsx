import React from 'react';

const StepCard = ({ number, title, children }) => { // Removed accentColor prop
  return (
    <div className="text-center p-6">
      <div className="text-4xl font-bold text-primary mb-2">{number}.</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
};

export default StepCard;
