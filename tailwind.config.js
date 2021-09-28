

module.exports = {
  purge: {
    enabled: true,
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'float-normal': 'float 3s ease-in-out infinite',
      },
      backgroundImage: {
        'temple': "url('public/images/temple.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
