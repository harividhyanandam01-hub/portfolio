/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#1E40AF",
        accent: "#FBBF24",
        bgDark: "#0F172A",
      },
    },
  },
  plugins: [],
};
