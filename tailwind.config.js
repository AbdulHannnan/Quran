/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nastaliq: ['"Noto Nastaliq Urdu"', 'serif'],
        bebas: ['"Bebas Neue"',],
      
        monte: ['"Montserrat Alternates"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
