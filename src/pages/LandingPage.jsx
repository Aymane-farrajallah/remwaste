import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Skip Hire</h1>
      <p className="text-lg mb-8">
        The easiest way to order your skip online.
      </p>
      <Link
        to="/order"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;
