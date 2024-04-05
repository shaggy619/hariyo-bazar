/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-orange": "#EBC351",
        "light-green": "#66BF84",
        "medium-green": "#14AE5C",
        "dark-green": "#0E4A22",
      },
      fontFamily: {
        "josefin-sans": ["Josefin Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
