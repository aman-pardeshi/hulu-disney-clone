/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slider: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(-100vw)' },
          '50%': { transform: 'translateX(-100vw)' },
          '25%': { transform: 'translateX(-100vw)' },
        },
      },
      animation: {
        slider: 'slider 3s ease-in-out Infinite',
      },
    },
  },
  plugins: [],
};
