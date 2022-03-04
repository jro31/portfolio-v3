const navbarHeight = '3.5rem';

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(0)' },
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
