import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4cae4f",
        "retro-yellow": "#F5A623",
        "retro-red": "#E05C3A",
        "retro-green": "#4CAF50",
        "background-dark": "#151d15"
      },

      fontFamily: {
        display: ["Space Grotesk", "sans-serif"]
      },

      borderWidth: {
        3: "3px"
      },

      boxShadow: {
        retro: "4px 4px 0px 0px #000",
        "retro-lg": "8px 8px 0px 0px #000",
        "retro-sm": "2px 2px 0px 0px #000",
        "retro-white": "4px 4px 0px 0px #fff"
      }
    }
  },
  plugins: [daisyui]
};