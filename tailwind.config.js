/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7A601",
        secondary: "#f5f5f5",
        accent: "#0d6efd",
      },
    },
  },
  plugins: [],
};

