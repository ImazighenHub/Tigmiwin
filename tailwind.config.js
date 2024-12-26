import * as colors from "./constants/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
      },
      colors: {
        primary: {
          100: colors.COLOR_PRIMARY_100,
          200: colors.COLOR_PRIMARY_200,
          300: colors.COLOR_PRIMARY_300,
        },
        accent: {
          100: colors.COLOR_ACCENT_100,
        },
        black: {
          DEFAULT: colors.COLOR_BLACK_DEFAULT,
          100: colors.COLOR_BLACK_100,
          200: colors.COLOR_BLACK_200,
          300: colors.COLOR_BLACK_300,
        },
        danger: colors.COLOR_DANGER,
      },
    },
  },
  plugins: [],
};
