/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'sans': ['"Oswald"', ...defaultTheme.fontFamily.sans],
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '80%': '80%',
      '100%': '100%',
      '110%': '110%',
      '133%': '133%',
      '150%': '150%',
      '167%': '167%',
      '170%': '170%',
      '190%': '190%',
      '197%': '197%',
      '210%': '210%',
      '342%': '342%',
      '433%': '433%',
      '564%': '564%',
      '16': '4rem',
      '90%': '90%',
    },
    /* backgroundPosition: {

    }, */
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require("daisyui"),
],
}

