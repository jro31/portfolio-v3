const navbarHeight = '3.5rem';

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
