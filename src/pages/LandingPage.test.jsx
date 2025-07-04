import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
// No need to mock framer-motion anymore as it's not used.
// HTMLMediaElement mocks are also not needed.

describe('LandingPage', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;

    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
  });

  test('renders the navigation bar with logo and links', () => {
    const nav = screen.getByRole('navigation');
    expect(within(nav).getByText('SkipHire')).toBeInTheDocument();
    expect(within(nav).getByText('Why Choose Us?')).toBeInTheDocument();
    expect(within(nav).getByText('How It Works')).toBeInTheDocument();
    expect(within(nav).getByText('Testimonials')).toBeInTheDocument();
    expect(within(nav).getByRole('link', { name: 'Get a Quote' })).toHaveAttribute('href', '/order');
  });

  test('renders the hero section with title, subtitle, and CTA', () => {
    const header = screen.getByRole('banner'); // Hero section is a <header>
    expect(within(header).getByText('Effortless Skip Hire')).toBeInTheDocument();
    expect(within(header).getByText(/Get the right skip for your needs/i)).toBeInTheDocument();
    expect(within(header).getByRole('link', { name: 'Order Your Skip Today' })).toHaveAttribute('href', '/order');
  });

  test('renders the "Why Choose Us" section with feature cards', () => {
    const whyUsSection = screen.getByText('Why Choose Our Skip Hire Service?').closest('section');
    expect(whyUsSection).toBeInTheDocument();
    expect(within(whyUsSection).getByText('Wide Range of Sizes')).toBeInTheDocument();
    expect(within(whyUsSection).getByText('Fast & Reliable Delivery')).toBeInTheDocument();
    expect(within(whyUsSection).getByText('Easy Online Booking')).toBeInTheDocument();
  });

  test('renders the "How It Works" section with step cards', () => {
    const howItWorksSection = screen.getByText('Get Your Skip in 3 Easy Steps').closest('section');
    expect(howItWorksSection).toBeInTheDocument();
    expect(within(howItWorksSection).getByText('Select Your Skip')).toBeInTheDocument();
    expect(within(howItWorksSection).getByText('Get an Instant Quote')).toBeInTheDocument();
    expect(within(howItWorksSection).getByText('Schedule Delivery')).toBeInTheDocument();
  });

  test('renders the "Testimonials" section with testimonial cards', () => {
    const testimonialsSection = screen.getByText("Don't Just Take Our Word For It").closest('section');
    expect(testimonialsSection).toBeInTheDocument();
    expect(within(testimonialsSection).getByText(/Great service, easy to book/i)).toBeInTheDocument();
    expect(within(testimonialsSection).getByText('- Sarah M.')).toBeInTheDocument();
    expect(within(testimonialsSection).getByText(/Competitive pricing and friendly staff/i)).toBeInTheDocument();
    expect(within(testimonialsSection).getByText('- John B.')).toBeInTheDocument();
  });

  test('renders the footer with copyright information', () => {
    const footer = screen.getByRole('contentinfo');
    expect(within(footer).getByText(/SkipHire. All rights reserved./i)).toBeInTheDocument();
    expect(within(footer).getByText('Privacy Policy')).toBeInTheDocument();
    expect(within(footer).getByText('Terms of Service')).toBeInTheDocument();
  });
});
