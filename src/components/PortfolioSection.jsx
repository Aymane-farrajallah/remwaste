import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { ExternalLink, Search } from 'lucide-react'; // Search for filter, ExternalLink for project

// Define colors here
const colors = {
  brandPrimary: '#4A90E2',
  textMain: '#333333',
  textLight: '#555555',
  brandLight: '#F8F9FA', // Section background
  cardBg: '#FFFFFF',
  filterActiveBg: '#4A90E2', // brandPrimary
  filterInactiveBg: '#E0E7FF', // A lighter shade of primary or neutral
  filterActiveText: '#FFFFFF',
  filterInactiveText: '#4A90E2', // brandPrimary
};

const portfolioItemsData = [
  { id: 1, title: 'E-commerce Platform', category: 'Web', imgSrc: 'https://via.placeholder.com/400x300.png/A5B4FC/FFFFFF?text=Project+1', description: 'A full-featured online store with modern UI.', link: '#' },
  { id: 2, title: 'Mobile App Design', category: 'UX', imgSrc: 'https://via.placeholder.com/400x300.png/A5B4FC/FFFFFF?text=Project+2', description: 'Intuitive design for a new mobile application.', link: '#' },
  { id: 3, title: 'Branding Identity', category: 'Branding', imgSrc: 'https://via.placeholder.com/400x300.png/A5B4FC/FFFFFF?text=Project+3', description: 'Complete branding package for a startup.', link: '#' },
  { id: 4, title: 'SaaS Dashboard', category: 'Web', imgSrc: 'https://via.placeholder.com/400x300.png/A5B4FC/FFFFFF?text=Project+4', description: 'User-friendly dashboard for a software service.', link: '#' },
  { id: 5, title: 'Creative Campaign', category: 'Branding', imgSrc: 'https://via.placeholder.com/400x300.png/A5B4FC/FFFFFF?text=Project+5', description: 'Marketing campaign for a new product launch.', link: '#' },
  { id: 6, title: 'UX Research', category: 'UX', imgSrc: 'https://via.placeholder.com/400x300.png/A5B4FC/FFFFFF?text=Project+6', description: 'In-depth user research and analysis.', link: '#' },
];

const categories = ['All', 'Web', 'UX', 'Branding'];

const PortfolioItem = ({ item }) => (
  <motion.div
    layout // Animate layout changes when filtering
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    className="group relative rounded-lg overflow-hidden shadow-lg"
    style={{ backgroundColor: colors.cardBg }}
  >
    <img src={item.imgSrc} alt={item.title} className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
      <h3 className="text-xl font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-1 text-center">
        {item.title}
      </h3>
      <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 mb-3 text-center">
        {item.description}
      </p>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 transform group-hover:translate-y-0 translate-y-4"
        style={{ backgroundColor: colors.brandPrimary }}
      >
        View Project <ExternalLink size={16} className="ml-2" />
      </a>
    </div>
  </motion.div>
);

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? portfolioItemsData
    : portfolioItemsData.filter(item => item.category === activeFilter);

  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: colors.brandLight }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: colors.textMain }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Our Recent Work
          </motion.h2>
          <motion.p
            className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: colors.textLight }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore a selection of projects that showcase our expertise and creativity.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-12">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2`}
              style={{
                backgroundColor: activeFilter === category ? colors.filterActiveBg : colors.filterInactiveBg,
                color: activeFilter === category ? colors.filterActiveText : colors.filterInactiveText,
                borderColor: activeFilter === category ? colors.filterActiveBg : colors.brandPrimary,
                ringColor: colors.brandPrimary,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout // Enable layout animations for the grid itself when items change
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence> {/* Required for exit animations on filtered items */}
            {filteredItems.map(item => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// Need to import AnimatePresence from framer-motion
export default PortfolioSection;
