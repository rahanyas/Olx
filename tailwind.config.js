/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        customTeal : '#23e5db',
        linkColor : 'rgba(0, 47, 52, 1)'
      }
    },
  },
  plugins: [],
}

