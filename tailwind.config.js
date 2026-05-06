/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#C9A84C",
        "gold-dark": "#b08a38",
        navy: "#1E2D40",
        "navy-dark": "#0F1E2E",
      },
    },
  },
  plugins: [],
};
