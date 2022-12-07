/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'lg': '1px 1px 5px 5px rgba(0, 0, 0, 0.2)',
      }
    }
  },
  plugins: [],
}



