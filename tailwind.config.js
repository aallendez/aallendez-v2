const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/popover.js"
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [heroui()],
}; 