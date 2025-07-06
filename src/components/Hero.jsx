import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight } from 'lucide-react';

// Define colors here for easy reference, as Tailwind config was problematic
const colors = {
  brandPrimary: '#4A90E2',
  // brandSecondary: '#50E3C2', // Unused
  // brandLight: '#F8F9FA', // Unused
  textMain: '#333333',
  textLight: '#555555',
};

const Hero = () => {
  const headlineText = "Modern Solutions for Your Digital Needs";
  const subheadlineText = "We build amazing web experiences that drive results. Let's create something great together.";

  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: i * 0.1 },
    }),
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#E0E7FF] to-[#C7D2FE] text-center px-4 sm:px-6 lg:px-8 overflow-hidden"> {/* Using soft blue gradient similar to Avo Alpha */}
      {/* Optional: Decorative shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-[#A5B4FC] rounded-full opacity-30 filter blur-xl"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-[#A5B4FC] rounded-lg opacity-30 filter blur-xl transform rotate-45"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          style={{ color: colors.textMain }}
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
        >
          {headlineText.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} style={{ display: 'inline-block' }}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl"
          style={{ color: colors.textLight }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: headlineText.length * 0.05 + 0.5 }}
        >
          {subheadlineText}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: headlineText.length * 0.05 + 0.8 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ backgroundColor: colors.brandPrimary, borderColor: colors.brandPrimary }}
          >
            Get Started
            <ArrowRight size={20} className="ml-2" />
          </Link>
          <Link
            to="/portfolio" // Or a "Watch Video" link if a video were present
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              color: colors.brandPrimary,
              backgroundColor: 'transparent', // Making it look like a secondary button
              border: `2px solid ${colors.brandPrimary}`
            }}
          >
            <PlayCircle size={20} className="mr-2" />
            Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
