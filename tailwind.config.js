/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: { colors: {'boog-black' : '#17171A',
    'boog-blue' : '#6188FF',
    'boog-black-v2': '#121214'}},
  },
  plugins: [],
}