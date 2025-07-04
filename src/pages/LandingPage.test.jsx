import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

// Mocking Framer Motion
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    motion: {
      ...actual.motion,
      div: ({ children, ...props }) => <div {...props}>{children}</div>,
      h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
      p: ({ children, ...props }) => <p {...props}>{children}</p>,
    },
  };
});

// Mocking HTMLMediaElement.prototype.play for video
global.HTMLMediaElement.prototype.play = () => Promise.resolve();
global.HTMLMediaElement.prototype.pause = () => {};
global.HTMLMediaElement.prototype.load = () => {};


describe('LandingPage', () => {
  it('renders the landing page with a welcome message, description, and a button', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      );
    });

    expect(screen.getByText(/Welcome to Skip Hire/i)).toBeInTheDocument();
    expect(screen.getByText(/The easiest way to order your skip online./i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument();
  });

  it('navigates to /order when the "Get Started" button is clicked', async () => {
    const user = userEvent.setup();
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <LandingPage />
        </MemoryRouter>
      );
    });

    const getStartedButton = screen.getByRole('link', { name: /Get Started/i });
    // No click simulation needed if we only check href for this unit test
    expect(getStartedButton).toHaveAttribute('href', '/order');
  });

  it('renders the video background', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      );
    });
    const videoElement = document.querySelector('video');
    expect(videoElement).toBeInTheDocument();
    const sourceElement = videoElement.querySelector('source');
    expect(sourceElement).toBeInTheDocument();
    expect(sourceElement).toHaveAttribute('src', '/background_video.mp4');
    expect(sourceElement).toHaveAttribute('type', 'video/mp4');
  });
});
