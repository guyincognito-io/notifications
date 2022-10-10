/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Plus Jakarta Sans'],
      },
      colors: {
        'snow-bg': '#F9FAFD',
        blue: '#0A327B',
        greyblue: '939CAD',
        darggreyblue: '#5E6778',
        verydarkgreyblue: '#1C202B',
        lightgreyblue: '#E5EFFA',
        verylightgreyblue: '#DDE7EE',
        snow: '#F7FAFD',
        red: '#F65552'
      }
    },
  },
  plugins: [],
}
