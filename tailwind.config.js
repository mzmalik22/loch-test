/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F2F2F2",
        "gray-50": "rgba(229, 229, 230, 0.50)",
        "gray-900": "#19191A",
        "gray-400": "#96979A",
        sblack: "#1D2129",
      },
      lineHeight: {
        19.2: "19.2px",
      },
    },
  },
  plugins: [],
};
