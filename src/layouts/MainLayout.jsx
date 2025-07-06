import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]"> {/* Replaced bg-brand-light */}
      <Header />
      <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed header height */}
        <Outlet /> {/* Page content will be rendered here */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
