/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#7C3AED", dark: "#0B0B12" },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.15)" }
    },
  },
  plugins: [],
};
