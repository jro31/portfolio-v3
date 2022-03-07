const navbarHeight = '3.5rem';

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        // TODO - Delete any of these you don't use
        'fade-in': 'fadeIn 2s',
        'slide-fade-up-delayed': 'slideFadeUpDelayed 2s',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'slow-focus': 'slowFocus 1s',
        'zoom-down-in': 'zoomDownIn 1s',
        'zoom-up-in-delayed': 'zoomUpInDelayed 2s',
      },
      borderRadius: {
        circle: '50%',
      },
      keyframes: {
        // TODO - Delete any of these you don't use
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
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
      minHeight: {
        'screen-minus-nav': 'calc(100vh - theme(space.navbar-height))',
      },
      spacing: {
        inherit: 'inherit',
        'navbar-height': navbarHeight,
        'screen-minus-nav': 'calc(100vh - theme(space.navbar-height))',
      },
    },
  },
  plugins: [],
};
