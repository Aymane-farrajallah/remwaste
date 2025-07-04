import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Zap } from 'lucide-react'; // Users icon removed as it was unused
import FeatureCard from '../components/FeatureCard';
import StepCard from '../components/StepCard';
import TestimonialCard from '../components/TestimonialCard';

const NavLink = ({ href, children }) => (
  <Link to={href} className="text-gray-700 hover:text-primary-dark px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </Link>
);

const LandingPage = () => {
  // const accentColor = "blue-600"; // No longer needed, using 'primary' from Tailwind config

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary">
                SkipHire
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="#why-us">Why Choose Us?</NavLink>
                <NavLink href="#how-it-works">How It Works</NavLink>
                <NavLink href="#testimonials">Testimonials</NavLink>
                <Link
                  to="/order"
                  className="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-md text-sm font-medium"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="md:hidden"> {/* Mobile menu button can be added here */} </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-24 pb-12 bg-gray-50 text-center"> {/* Adjusted pt to account for fixed nav */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            Effortless Skip Hire
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Get the right skip for your needs, delivered quickly and reliably.
            Hassle-free online booking.
          </p>
          <div className="mt-10">
            <Link
              to="/order"
              className="inline-block bg-primary text-white text-lg font-semibold px-10 py-4 rounded-lg shadow-md hover:bg-primary-dark transition duration-150 ease-in-out"
            >
              Order Your Skip Today
            </Link>
          </div>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Our Benefits</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Skip Hire Service?
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Wide Range of Sizes" icon={Package}>
              From mini skips for small clearouts to large skips for construction waste.
            </FeatureCard>
            <FeatureCard title="Fast & Reliable Delivery" icon={Zap}>
              Prompt delivery and collection services to fit your schedule.
            </FeatureCard>
            <FeatureCard title="Easy Online Booking" icon={CheckCircle}>
              Simple and secure online ordering process, available 24/7.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Simple Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get Your Skip in 3 Easy Steps
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <StepCard number="1" title="Select Your Skip">
              Choose the perfect size for your waste disposal needs.
            </StepCard>
            <StepCard number="2" title="Get an Instant Quote">
              Enter your details for transparent pricing.
            </StepCard>
            <StepCard number="3" title="Schedule Delivery">
              Pick a convenient time for drop-off and collection.
            </StepCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Happy Customers</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Don't Just Take Our Word For It
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            <TestimonialCard
              quote="Great service, easy to book and the skip arrived right on time. Made my garden clearance a breeze!"
              author="Sarah M."
            />
            <TestimonialCard
              quote="Competitive pricing and friendly staff. I've used them multiple times for renovation projects and always been happy."
              author="John B."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} SkipHire. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-1">
            <Link to="/privacy" className="hover:text-primary-light">Privacy Policy</Link> |
            <Link to="/terms" className="hover:text-primary-light"> Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
