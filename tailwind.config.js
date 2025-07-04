/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // blue-600
          light: '#3B82F6', // blue-500 (for hover or lighter shades)
          dark: '#1D4ED8',  // blue-700 (for hover or darker shades)
        },
      },
    },
  },
  plugins: [],
}