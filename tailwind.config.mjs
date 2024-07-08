/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans Variable", "sans-serif"],
      },
      colors: {
        "charcoal-gray": "#1b1d1f",
        "rich-black": "#111315",
        "dove-gray": "#6f757c",
        "pale-aqua": "#bee3cc",
        "antique-white": "#feF7ee",
        "sandy-brown": "#f6c768",
        "coral-pink": "#ed735d",
      },
      fontSize: {
        xxs: "10px",
        "3.5xl": "32px",
        ...defaultTheme.fontSize,
      },
      backgroundImage: {
        "body-pattern": "url(/src/assets/bg-cafe.jpg)",
        "hero-vector": "url(/src/assets/vector.svg)",
      },
    },
  },
  plugins: [],
}
