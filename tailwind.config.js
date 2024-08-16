/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-blue': 'rgb(173, 216, 230)', // Add custom color
      },
    },
  },
  plugins: [],
}

