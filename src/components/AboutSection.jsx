import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Briefcase } from 'lucide-react'; // Example icons

// Define colors here for easy reference
const colors = {
  brandPrimary: '#4A90E2',
  textMain: '#333333',
  textLight: '#555555',
  brandLightContrast: '#FFFFFF', // Section background
};

const featureItems = [
  { icon: Users, text: 'Expert Team' },
  { icon: Award, text: 'Quality Focused' },
  { icon: Briefcase, text: 'Client Centric' },
  { icon: CheckCircle, text: 'Proven Results' },
];

const AboutSection = () => {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: colors.brandLightContrast }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            className="w-full h-80 sm:h-96 md:h-full rounded-xl shadow-xl overflow-hidden"
            style={{ backgroundColor: '#E0E7FF' }} // Placeholder background for image
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Placeholder for an image - e.g., <img src="/path/to/about-image.jpg" alt="Our Team" className="w-full h-full object-cover" /> */}
            <div className="flex items-center justify-center h-full">
              <p className="text-xl" style={{ color: colors.brandPrimary }}>Image Placeholder</p>
            </div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <h2
              className="text-base font-semibold tracking-wide uppercase"
              style={{ color: colors.brandPrimary }}
            >
              About Us
            </h2>
            <p
              className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: colors.textMain }}
            >
              Creative Solutions, Measurable Results
            </p>
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: colors.textLight }}
            >
              We are a passionate team of designers and developers dedicated to helping businesses succeed in the digital world. Our approach combines creativity with strategy to deliver impactful and engaging experiences.
            </p>
            <p
              className="mt-3 text-lg leading-relaxed"
              style={{ color: colors.textLight }}
            >
              From innovative UI/UX design to robust web development, we provide comprehensive solutions tailored to your unique needs.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
              {featureItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x:20 }}
                  whileInView={{ opacity: 1, x:0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.5}}
                >
                  <item.icon
                    className="h-6 w-6 flex-shrink-0"
                    style={{ color: colors.brandPrimary }}
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-base font-medium" style={{ color: colors.textMain }}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
