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
                'gradient-to-white': 'linear-gradient(to top, #FFF 0%, #FFF 100%)',
                'gradient-to-how': 'linear-gradient(to top, #F1F7FE 0%, #D5E9F9 100%)',
                'gradient-to-r': 'linear-gradient(to right, #00ABDC, #0578D0)',
                'gradient-to-l': 'linear-gradient(to right, #24386B, #2F56AC)',
                'gradient-to-b': 'linear-gradient(to bottom, #BFEDF6 51%, #FFFFFF 100%)',
                'gradient-to-card': 'linear-gradient(to bottom, #243345 51%, #243345 100%)',
                'gradient-to-card-light': 'linear-gradient(to bottom, #E9F9FC 51%, #E9F9FC 100%)',
                'gradient-to-card-ui': 'linear-gradient(to bottom, #0D131B 51%, #0D131B 100%)',
                'gradient-dark': 'radial-gradient(circle at center, #18222F 0%, #10131C 100%)',
                'gradient-dark-how': 'radial-gradient(circle at center, #151B27 0%, #142639 100%)',
                'text-gradient': 'linear-gradient(to left, #0578D0 0%, #00ABDC 100%)',
            },
            boxShadow: {
                'luxury': '0 20px 40px -15px rgba(0, 182, 222, 0.25), 0 10px 20px -10px rgba(0, 0, 0, 0.1)',
                'luxury-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 10px 20px -10px rgba(0, 182, 222, 0.1)',
                'inner-luxury': 'inset 0 2px 4px 0 rgba(0, 182, 222, 0.05)',
                'inner-luxury-dark': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.25)'
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 20s linear infinite',
                'shimmer': 'shimmer 2s infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'tilt': 'tilt 10s infinite linear'
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                shimmer: {
                    '100%': { transform: 'translateX(100%)' }
                },
                tilt: {
                    '0%, 50%, 100%': {
                        transform: 'rotate3d(0, 0, 0, 0deg)',
                    },
                    '25%': {
                        transform: 'rotate3d(0.5, 1, 0, 2deg)',
                    },
                    '75%': {
                        transform: 'rotate3d(0.5, -1, 0, 2deg)',
                    }
                }
            }
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