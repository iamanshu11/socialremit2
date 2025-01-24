/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/index.html',

  ],
  theme: {
    extend: {
      zIndex: {
        '9': '9',
      },
      spacing: {
        '120': '120px', // Add custom padding-top 120px
      },
      colors: {
        'active-blue': '#00A1CC',
        'primary': '#00A1CC',
        'secondary': '#1F1645',
      },
      backgroundImage: {
        'custom-image': "url('/images/hero-bg.png')",
      },
      boxShadow: {
        'left-right-gray': '-4px 0 10px rgba(128, 128, 128, 0.3), 4px 0 10px rgba(128, 128, 128, 0.3)',
      },
    },
  },
  plugins: [],
}

