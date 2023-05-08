const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#003399',
        secondary: '#CBD5E1',
        gray: { ...colors.gray, 85: '#d9d9d9' },
        grey_200: '#f4f4f4',
        orange: colors.orange,
        amber: colors.amber,
      },
      height: {
        85: '85vh',
      },
      flexGrow: {
        3: 3,
      },
      flex: {
        2: 2,
      },
    },
  },
};
