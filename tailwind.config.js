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
        'delayed-fade-in-1': 'delayedFadeIn1 1.5s linear',
        'delayed-fade-in-2': 'delayedFadeIn2 2s linear',
        'delayed-fade-in-3': 'delayedFadeIn3 2.5s linear',
        'delayed-fade-in-4': 'delayedFadeIn4 3s linear',
        'fade-in': 'fadeIn 1s linear',
        'fade-out': 'fadeOut 1s linear',
        'slide-fade-up-delayed': 'slideFadeUpDelayed 2s',
        'slide-in-right': 'slideInRight 1s ease-out',
        'slide-out-left': 'slideOutLeft 1s ease-in',
        'slow-fade-in': 'fadeIn 2s linear',
        'very-slow-fade-in': 'fadeIn 4s linear',
        'fade-in-right': 'fadeInRight 0.5s linear',
        'fade-in-right-delayed': 'fadeInRightDelayed 1s linear',
        'fade-in-right-long-delayed': 'fadeInRightLongDelayed 1.5s linear',
        'zoom-down-in': 'zoomDownIn 2s',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      borderRadius: {
        '1/2': '50%',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        delayedFadeIn1: {
          '0%': { opacity: 0 },
          '33%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        delayedFadeIn2: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        delayedFadeIn3: {
          '0%': { opacity: 0 },
          '60%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        delayedFadeIn4: {
          '0%': { opacity: 0 },
          '66%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInRight: {
          '0%': { transform: 'translateX(-5vw)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeInRightDelayed: {
          '0%': { transform: 'translateX(-5vw)', opacity: 0 },
          '50%': { transform: 'translateX(-5vw)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeInRightLongDelayed: {
          '0%': { transform: 'translateX(-5vw)', opacity: 0 },
          '66%': { transform: 'translateX(-5vw)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
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
