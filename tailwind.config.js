module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sverdlovsk: ["Sverdlovsk"],
      },
      screens: {
        "3xl": "1680px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
