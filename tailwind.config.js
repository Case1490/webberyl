/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkGray: "#efefef",
        PurpleMain: "#6d51eb",
        VeryDark: "#252736",
        GreenLight: "#68d127",
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out forwards",
        slideUp: "slideUp 1.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
