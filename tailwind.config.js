/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/html/**/*.html", // This tells Tailwind to look in this folder
    "./script.js", // Also scan your main JavaScript file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
