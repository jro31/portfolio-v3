const navbarHeight = '3.5rem';

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-fade-up-delayed': 'slideFadeUpDelayed 2s',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'zoom-down-in': 'zoomDownIn 1s',
        'zoom-up-in-delayed': 'zoomUpInDelayed 2s',
      },
      keyframes: {
        slideFadeUpDelayed: {
          '0%': { transform: 'translateY(25vh)', opacity: 0 },
          '20%': { transform: 'translateY(25vh)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(0)' },
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
