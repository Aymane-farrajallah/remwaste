import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import BlogPreviewSection from '../components/BlogPreviewSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <BlogPreviewSection />
      {/* All main sections for homepage are now added */}
    </>
  );
};

export default HomePage;
