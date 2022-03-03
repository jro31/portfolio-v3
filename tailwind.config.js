module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: {
        'screen-minus-nav': 'calc(100vh - theme(space.navbar-height))',
      },
      spacing: {
        'navbar-height': '3.5rem',
        'screen-minus-nav': 'calc(100vh - theme(space.navbar-height))',
      },
    },
  },
  plugins: [],
};
