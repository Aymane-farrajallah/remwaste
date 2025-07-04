import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import userEvent from '@testing-library/user-event';

describe('LandingPage', () => {
  it('renders the landing page with a welcome message and a button', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Welcome to Skip Hire/i)).toBeInTheDocument();
    expect(screen.getByText(/The easiest way to order your skip online./i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument();
  });

  it('navigates to /order when the "Get Started" button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/']}>
        <LandingPage />
      </MemoryRouter>
    );

    const getStartedButton = screen.getByRole('link', { name: /Get Started/i });
    await user.click(getStartedButton);
    // This test doesn't assert navigation directly, as that's the job of integration/e2e tests.
    // It checks that the link has the correct href.
    expect(getStartedButton).toHaveAttribute('href', '/order');
  });
});
