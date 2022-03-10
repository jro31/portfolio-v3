const defaultTheme = require('tailwindcss/defaultTheme');
const mobileNavbarHeight = '3.5rem';
const navbarHeight = '3.5rem';

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xs': '384px',
      xs: '512px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s linear',
        'fade-out': 'fadeOut 1s linear',
        'slide-fade-up-delayed': 'slideFadeUpDelayed 2s',
        'slide-in-right': 'slideInRight 1s ease-out',
        'slide-out-left': 'slideOutLeft 1s ease-in',
        'slow-fade-in': 'fadeIn 2s linear',
        'slow-fade-in-delayed': 'fadeIn 4s linear',
        'zoom-down-in': 'zoomDownIn 2s',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInDelayed: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        slideFadeUpDelayed: {
          '0%': { transform: 'translateY(5vh)', opacity: 0 },
          '20%': { transform: 'translateY(5vh)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100vw)' },
        },
        zoomDownIn: {
          '0%': {
            transform: 'perspective(1000px) translateZ(-100px) translateY(-5vh)',
            opacity: 0,
          },
          '100%': { transform: 'perspective(1000px) translateZ(0) translateY(0)', opacity: 1 },
        },
      },
      minWidth: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
      },
      spacing: {
        inherit: 'inherit',
        'mobile-navbar-height': mobileNavbarHeight,
        'navbar-height': navbarHeight,
      },
    },
  },
  plugins: [],
};
