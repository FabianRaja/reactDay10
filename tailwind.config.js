/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '150px', 'max': '400px'},
      'lg': {'min': '150px', 'max': '440px'}
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}