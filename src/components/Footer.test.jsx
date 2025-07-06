import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

// Mock Lucide icons used in Footer
vi.mock('lucide-react', async () => {
  const actual = await vi.importActual('lucide-react');
  return {
    ...actual,
    Facebook: (props) => <svg data-testid="facebook-icon" {...props} />,
    Twitter: (props) => <svg data-testid="twitter-icon" {...props} />,
    Instagram: (props) => <svg data-testid="instagram-icon" {...props} />,
    Linkedin: (props) => <svg data-testid="linkedin-icon" {...props} />,
    Mail: (props) => <svg data-testid="mail-icon" {...props} />,
    MapPin: (props) => <svg data-testid="mappin-icon" {...props} />,
    Phone: (props) => <svg data-testid="phone-icon" {...props} />,
  };
});

describe('Footer Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  test('renders "AvoClone" brand name in footer', () => {
    // Get all h3 elements and check if one of them is AvoClone
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings.some(h => h.textContent === 'AvoClone')).toBe(true);
  });

  test('renders "Quick Links" section with links', () => {
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument();
  });

  test('renders "Contact Us" section with contact info', () => {
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument();
    expect(screen.getByText(/123 Web Design St/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'info@avoclone.com' })).toBeInTheDocument();
  });

  test('renders "Newsletter" section with input and button', () => {
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument();
  });

  test('renders social media icons', () => {
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
    // Add more if needed
  });

  test('renders copyright information', () => {
    expect(screen.getByText(/© \d{4} AvoClone. All Rights Reserved./i)).toBeInTheDocument();
  });
});
