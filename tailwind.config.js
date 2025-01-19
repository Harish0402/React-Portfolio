/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      appearance: ['responsive', 'hover', 'focus'],
    },
    fontFamily:{
      'display':'sriracha'
    },
  },
  plugins: [],
}

