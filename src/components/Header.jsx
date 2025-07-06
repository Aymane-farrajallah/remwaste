import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react'; // Using Briefcase as a placeholder logo icon

// Define colors here for easy reference
const colors = {
  brandPrimary: '#4A90E2',
  textMain: '#333333',
  white: '#FFFFFF',
};

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
    style={{ color: colors.textMain }}
    onMouseOver={(e) => e.currentTarget.style.color = colors.brandPrimary}
    onMouseOut={(e) => e.currentTarget.style.color = colors.textMain}
  >
    {children}
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isSticky ? 'bg-white shadow-lg' : 'bg-transparent'
      } ${isSticky && !isOpen ? 'py-4' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold" style={{ color: colors.brandPrimary }}>
              <Briefcase size={28} />
              <span>AvoClone</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
            <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
            <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact" // Or a specific "get started" page
              className="ml-4 inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm transition-colors"
              style={{ backgroundColor: colors.brandPrimary, color: colors.white }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'} // Example hover color
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.brandPrimary}
            >
              Hire Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4A90E2]"
              style={{ color: colors.textMain }} // borderColor was not really used here, ring color is more important
              onMouseOver={(e) => e.currentTarget.style.color = colors.brandPrimary}
              onMouseOut={(e) => e.currentTarget.style.color = colors.textMain}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg" id="mobile-menu">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
            <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
            <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </nav>
          {/* CTA Button - Mobile */}
          <div className="pt-4 pb-3 border-t border-gray-200 text-center">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="w-3/4 mx-auto inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm transition-colors"
              style={{ backgroundColor: colors.brandPrimary, color: colors.white }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'} // Example hover color
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.brandPrimary}
            >
              Hire Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
