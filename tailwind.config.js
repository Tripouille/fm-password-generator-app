/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jetbrains-mono": ["var(--font-jetbrains-mono)", ...fontFamily.sans],
      },
      colors: {
        gray: { dark: "#24232C", base: "#817D92" },
        cream: "#E6E5EA",
        black: "#18171F",
        yellow: "#F8CD65",
        green: "#A4FFAF",
        red: "#F64A4A",
        orange: "#FB7C58",
        yellow: "#F8CD65",
      },
    },
  },
  plugins: [],
};
