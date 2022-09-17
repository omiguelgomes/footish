/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'logo-pink': {
        100: '#ae66cb',
        200: '#7a318d',
        300: '#6a1f7a',
        400: '#570e64'
      },
      'logo-white': '#f9f3f9'
    }
  },
  plugins: [],
}
