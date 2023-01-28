/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#7289da",
        "grey-1": "#424549",
        "grey-2": "#36393e",
        "grey-3": "#282b30",
        "grey-4": "#1e2124"
      }
    },
  },
  plugins: [],
}