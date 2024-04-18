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
      boxShadow: {
        customxl:
          "0px 3px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
