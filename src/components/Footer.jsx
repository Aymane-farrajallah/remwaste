import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

// Define colors (consistent with other files, using arbitrary values)
const colors = {
  brandPrimary: '#4A90E2',
  brandDark: '#2C3E50',
  footerText: '#D1D5DB', // Lighter gray for better contrast on dark bg
  footerTextLight: '#9CA3AF', // Even lighter for less important text
  white: '#FFFFFF',
};

const FooterLink = ({ to, children }) => (
  <Link to={to} className="hover:text-brand-primary transition-colors duration-300" style={{ color: colors.footerText }}>
    {children}
  </Link>
);

const SocialLink = ({ href, icon: Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors duration-300" style={{ color: colors.footerText }}>
    <Icon size={20} />
  </a>
);

const Footer = () => {
  return (
    <footer style={{ backgroundColor: colors.brandDark, color: colors.footerText }} className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.white }}>AvoClone</h3>
            <p className="text-sm mb-4">
              Crafting beautiful and functional websites. This is a clone project based on Avo Alpha.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={Facebook} />
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Instagram} />
              <SocialLink href="#" icon={Linkedin} />
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.white }}>Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/about">About Us</FooterLink></li>
              <li><FooterLink to="/services">Services</FooterLink></li>
              <li><FooterLink to="/portfolio">Portfolio</FooterLink></li>
              <li><FooterLink to="/blog">Blog</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.white }}>Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" style={{ color: colors.brandPrimary }} />
                <span>123 Web Design St, Suite 404, Webville, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0" style={{ color: colors.brandPrimary }} />
                <a href="mailto:info@avoclone.com" className="hover:text-brand-primary" style={{ color: 'inherit' }}>info@avoclone.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0" style={{ color: colors.brandPrimary }} />
                <a href="tel:+1234567890" className="hover:text-brand-primary" style={{ color: 'inherit' }}>+1 (234) 567-890</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.white }}>Newsletter</h3>
            <p className="text-sm mb-3">
              Stay updated with our latest news and offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 text-sm text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-medium text-white bg-brand-primary rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-dark transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AvoClone. All Rights Reserved. Clone of Avo Alpha.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
