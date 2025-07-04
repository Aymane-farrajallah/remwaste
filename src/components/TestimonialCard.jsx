import React from 'react';

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow">
      <p className="text-gray-700 italic">"{quote}"</p>
      <p className="mt-4 text-right font-semibold text-gray-800">- {author}</p>
    </div>
  );
};

export default TestimonialCard;
