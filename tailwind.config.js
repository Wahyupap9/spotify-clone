/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#1DB954",
        Black: "#191414",
        white: "#fff",
        grayText: "#7e7777",
        grayBg: "#393737",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        display: "calc(100vh - 6rem - 3.6rem)",
      },
      screens: {
        md: "920px",
      },
    },
  },
  plugins: [],
};
