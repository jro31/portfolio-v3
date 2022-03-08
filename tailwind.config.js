const defaultTheme = require('tailwindcss/defaultTheme');
const mobileNavbarHeight = '3.5rem';
const navbarHeight = '3.5rem';

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xxs: '384px',
      xs: '512px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        // TODO - Delete any of these you don't use
        'fade-in': 'fadeIn 1s linear forwards',
        'fade-out': 'fadeOut 1s linear forwards',
        'slide-fade-up-delayed': 'slideFadeUpDelayed 2s',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'slide-out-left': 'slideOutLeft 1s ease-in forwards',
        'slow-fade-in': 'fadeIn 2s linear forwards',
        'slow-focus': 'slowFocus 1s',
        'zoom-down-in': 'zoomDownIn 1s',
        'zoom-up-in-delayed': 'zoomUpInDelayed 2s',
      },
      keyframes: {
        // TODO - Delete any of these you don't use
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        slideFadeUpDelayed: {
          '0%': { transform: 'translateY(25vh)', opacity: 0 },
          '20%': { transform: 'translateY(25vh)', opacity: 0 },
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
        slowFocus: {
          '0%': { filter: 'blur(8px)' },
          '100%': { filter: 'blur(0)' },
        },
        zoomDownIn: {
          '0%': {
            transform: 'perspective(500px) translateZ(-500px) translateY(-50px)',
            opacity: 0,
          },
          '100%': { transform: 'perspective(500px) translateZ(0) translateY(0)', opacity: 1 },
        },
        zoomUpInDelayed: {
          '0%': {
            transform: 'perspective(500px) translateZ(-500px) translateY(50px)',
            opacity: 0,
          },
          '20%': {
            transform: 'perspective(500px) translateZ(-500px) translateY(50px)',
            opacity: 0,
          },
          '100%': {
            transform: 'perspective(500px) translateZ(0) translateY(0)',
            opacity: 1,
          },
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
