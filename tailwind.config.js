/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#3B2F54",
        button: "#43CFCF",
        grey: "#ECEAEA",
        dark: "#232028",
      },
    },
  },
  plugins: [],
};
