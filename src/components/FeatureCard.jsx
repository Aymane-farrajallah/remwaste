import React from 'react';

const FeatureCard = ({ icon: Icon, title, children }) => { // Removed accentColor prop
  return (
    <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
        {Icon && <Icon size={24} />}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">
        {children}
      </p>
    </div>
  );
};

export default FeatureCard;
