/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
   sm: '640px',   // Adjusted for large mobile screens
      md: '768px',   // Tablet
      lg: '1024px',  // Desktop
      xl: '1440px',  // Large desktop
    },
    extend: {},
  },
  plugins: [],
}

