/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif']
      },
      colors: {
        orange1: '#ff872e',
        blue1: '#3b41e3',
        blue2: '#2A2E9F'
      }
    },
  },
  plugins: [],
}

