import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Code, PenTool, Settings } from 'lucide-react'; // Example icons

// Define colors here for easy reference
const colors = {
  brandPrimary: '#4A90E2',
  textMain: '#333333',
  textLight: '#555555',
  brandLight: '#F8F9FA', // For background of the section
  cardBg: '#FFFFFF', // For service card background
};

const serviceItems = [
  {
    icon: Layers,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and engaging user experiences with a focus on user-centered design principles.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Building responsive and high-performance websites and applications using modern technologies.',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'Creating visually stunning graphics and branding materials that communicate your message effectively.',
  },
  {
    icon: Settings,
    title: 'Best Features', // As per Avo Alpha example
    description: 'Delivering projects with a commitment to quality, innovation, and client satisfaction.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  }),
};

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      style={{ backgroundColor: colors.cardBg }}
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible" // Animate when card scrolls into view
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of card is visible
    >
      <div
        className="flex items-center justify-center w-16 h-16 rounded-full mb-6"
        style={{ backgroundColor: `${colors.brandPrimary}20` }} // Primary color with low opacity
      >
        <Icon size={32} style={{ color: colors.brandPrimary }} />
      </div>
      <h3
        className="text-xl sm:text-2xl font-semibold mb-3 text-center"
        style={{ color: colors.textMain }}
      >
        {title}
      </h3>
      <p
        className="text-sm sm:text-base text-center leading-relaxed"
        style={{ color: colors.textLight }}
      >
        {description}
      </p>
    </motion.div>
  );
};

const ServicesSection = () => {
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
            Our Core Services
          </motion.h2>
          <motion.p
            className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: colors.textLight }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer a range of creative and technical services to bring your ideas to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {serviceItems.map((item, index) => (
            <ServiceCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
