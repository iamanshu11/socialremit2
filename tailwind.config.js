/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/index.html',
    './src/coming-soon.html',
    './src/sign-up.html',
    './src/track-your-transfer.html',

  ],
  theme: {
    extend: { 
      zIndex: {
        '9': '9',
      },
      spacing: {
        '120': '120px', 
      },
      colors: {
        'active-blue': '#00A1CC',
        'primary': '#00AACE',
        'secondary': '#1F1645',
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #00ABDC, #0578D0)',
        'gradient-to-l': 'linear-gradient(to right, #24386B, #2F56AC)',
        'gradient-to-b': 'linear-gradient(to bottom, #BFEDF6 51%, #FFFFFF 100%)',
        'gradient-dark': 'linear-gradient(to bottom, #14162C 0%, #1E134D 36%, #1F124F 58%, #14162C 100%)',
        'text-gradient': 'linear-gradient(to left, #0578D0 0%, #00ABDC 100%)',
      },
      boxShadow: {
        'left-right-gray': '-4px 0 10px rgba(128, 128, 128, 0.3), 4px 0 10px rgba(128, 128, 128, 0.3)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          background: 'linear-gradient(to left, #0578D0 0%, #00ABDC 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        }
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ]
}

