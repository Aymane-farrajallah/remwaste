💻 Skip Selector Redesign — React Frontend Challenge
🔍 Overview

This project is a redesign of the "Choose your skip size" page from WeWantWaste.co.uk using React. The challenge involved reimagining the original UI with a clean, responsive, modern design, while preserving the original functionality.

Users can explore available skip sizes, view detailed information, and interact with the layout through an intuitive, responsive interface that adapts gracefully across mobile and desktop devices.

🎯 Objectives
Fully redesign the "choose your skip size" page.

Maintain functional parity with the original version.

Provide a responsive and engaging user interface.

Focus on clean code, scalability, and UX improvements.

🧩 Features
✅ Skip Cards (Selector.jsx)
Custom-built interactive product cards for each skip option.

Hover or click (mobile) to reveal detailed information.

Dynamic rendering based on skip data from external API.

Support for skip-specific features:

Road placement allowance.

Heavy waste compatibility.

Variable hire durations and pricing.

✅ Progress Stepper (Stepper.jsx)
Step-by-step visual progress tracker for the booking journey.

Responsive behavior:

Compact mobile mode.

Full desktop step display with connectors and titles.

✅ Responsive Layout :
Optimized for mobile and desktop using Tailwind CSS breakpoints.

Smooth transitions, hover effects, and layout shifts.

🧪 How to Run Locally

Clone this repo:

git clone https://github.com/Aymane-farrajallah/remwaste
cd remwaste

Install dependencies:

npm install

Run the app:


npm run dev

Visit http://localhost:5173 in your browser.

🛠 Tech Stack
React

Tailwind CSS

Lucide Icons

Responsive Design

Dynamic JSON Data Integration

🧠 Design Decisions
Created a visual product-style interface to highlight skip types like e-commerce items.

Used hoverable cards on desktop and expandable tap interactions on mobile for accessibility.

Incorporated visual indicators and icons (e.g., availability, warning, skip size).

Ensured accessibility and clarity for key details like hire duration and pricing.

Developed a reusable stepper component to enhance navigation clarity during multi-step booking.


🔗 Submission Links :

Live sandbox: CodeSandbox Link Here

GitHub Repo: https://github.com/Aymane-farrajallah/remwaste