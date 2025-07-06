import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

// Mock child components to simplify HomePage testing and focus on its structure
vi.mock('../components/Hero', () => ({
  default: () => <div data-testid="hero-section">Mocked Hero Section</div>,
}));
vi.mock('../components/ServicesSection', () => ({
  default: () => <div data-testid="services-section">Mocked Services Section</div>,
}));
vi.mock('../components/AboutSection', () => ({
  default: () => <div data-testid="about-section">Mocked About Section</div>,
}));
vi.mock('../components/PortfolioSection', () => ({
  default: () => <div data-testid="portfolio-section">Mocked Portfolio Section</div>,
}));
vi.mock('../components/BlogPreviewSection', () => ({
  default: () => <div data-testid="blog-preview-section">Mocked Blog Preview Section</div>,
}));

// Header and Footer are part of MainLayout, which wraps HomePage via routing.
// For a direct HomePage test, we don't need to mock them here unless MainLayout was also rendered.
// However, since HomePage is simple (just assembling sections), this is fine.

describe('HomePage Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter> {/* Required if any child component uses Link, even if mocked */}
        <HomePage />
      </BrowserRouter>
    );
  });

  test('renders Hero section', () => {
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByText('Mocked Hero Section')).toBeInTheDocument();
  });

  test('renders Services section', () => {
    expect(screen.getByTestId('services-section')).toBeInTheDocument();
    expect(screen.getByText('Mocked Services Section')).toBeInTheDocument();
  });

  test('renders About section', () => {
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
    expect(screen.getByText('Mocked About Section')).toBeInTheDocument();
  });

  test('renders Portfolio section', () => {
    expect(screen.getByTestId('portfolio-section')).toBeInTheDocument();
    expect(screen.getByText('Mocked Portfolio Section')).toBeInTheDocument();
  });

  test('renders Blog Preview section', () => {
    expect(screen.getByTestId('blog-preview-section')).toBeInTheDocument();
    expect(screen.getByText('Mocked Blog Preview Section')).toBeInTheDocument();
  });
});
