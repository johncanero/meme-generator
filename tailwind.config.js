/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        memeYellow: '#F9ED69',
        memeOrange: '#F08A5D',
        memeViolet: '#6A2C70',
        memeDarkMagenta: '#6A2C70'
      },
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
 
  },
  plugins: [],
}