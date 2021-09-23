module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        main: '#2ecc71',
        subMain: '#2ecc71',
      }),
      height: theme => ({
        '0.7/10': '7%',
        '9.3/10': '93%',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
