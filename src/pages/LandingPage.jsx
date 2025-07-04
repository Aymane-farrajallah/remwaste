import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline // Important for iOS Safari
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Welcome to Skip Hire
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl mb-10"
        >
          The easiest way to order your skip online.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            to="/order"
            className="bg-white text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
