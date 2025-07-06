import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

// Mock Lucide icons
vi.mock('lucide-react', async () => {
  const actual = await vi.importActual('lucide-react');
  return {
    ...actual,
    Briefcase: (props) => <svg data-testid="briefcase-icon" {...props} />,
    Menu: (props) => <svg data-testid="menu-icon" {...props} />,
    X: (props) => <svg data-testid="x-icon" {...props} />,
  };
});

describe('Header Component', () => {
  const renderHeader = () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  };

  test('renders logo and brand name', () => {
    renderHeader();
    expect(screen.getByText('AvoClone')).toBeInTheDocument();
    expect(screen.getByTestId('briefcase-icon')).toBeInTheDocument();
  });

  test('renders desktop navigation links', () => {
    renderHeader();
    // Check a few links
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument();
  });

  test('renders "Hire Us" CTA button', () => {
    renderHeader();
    expect(screen.getByRole('link', { name: 'Hire Us' })).toBeInTheDocument();
  });

  test('mobile menu button is present', () => {
    renderHeader();
    expect(screen.getByRole('button', { name: 'Open main menu' })).toBeInTheDocument();
  });

  test('toggles mobile menu on button click', () => {
    renderHeader();
    const menuButton = screen.getByRole('button', { name: 'Open main menu' });

    // Initially, mobile menu items specific to the expanded menu might not be visible
    // or identifiable easily without being too specific to their implementation.
    // Let's check for the change in icon or aria-expanded state.
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument(); // Menu icon visible

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByTestId('x-icon')).toBeInTheDocument(); // X icon visible

    // Clicking again should close it
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  });

  test('sticky header behavior is triggered by scroll (conceptual check)', () => {
    // This test is more conceptual as JSDOM doesn't fully simulate scrolling.
    // We're checking if the event listener setup for scrolling is present.
    // Real scroll behavior would need e2e tests.
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    renderHeader(); // Re-render to ensure spy is active
    expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    addEventListenerSpy.mockRestore();
  });
});
