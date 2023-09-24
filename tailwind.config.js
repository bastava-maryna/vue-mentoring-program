/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./src/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000000",
        white: "#FFFFFF",
        "netflix-dark-gray": "#232323",
        "netflix-middle-gray": "#424242",
        "netflix-light-gray": "#555555",
        "netflix-red": "#F65261",
        "netflix-light-green": "#A1E66F"
      }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"]
    }
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(transparent|current|white|black|netflix-red|netflix-dark-gray|netflix-middle-gray|netflix-light-gray|netflix-light-green)/
    }
  ]
}
