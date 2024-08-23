/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        customGreen :'#357864',
        lightgreen: "#f0f5f2",
        lightpink: 'transparent',
      },
      colors:{
        orangered:"#ff664e"

      }
    },
  },
  plugins: [nextui()],
}