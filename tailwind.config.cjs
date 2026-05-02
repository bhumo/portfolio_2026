/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        cream: "#f4f2ed",
        "cream-dark": "#e8e4dc",
        ink: "#0d0d0d",
        muted: "#5c5c5c",
        line: "#ded8cf",
        surface: "#ffffff",
        "surface-soft": "#faf8f5",
      },
      fontFamily: {
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -20px rgba(13, 13, 13, 0.08)",
        card: "0 4px 24px rgba(13, 13, 13, 0.06)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
