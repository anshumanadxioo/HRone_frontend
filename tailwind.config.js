/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        customGreen :'#357864',
        lightpink: "#fcefec",
      },
      colors:{
        orangered:"#ff674d"

      }
    },
  },
  plugins: [],
}