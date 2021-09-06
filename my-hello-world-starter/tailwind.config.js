module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'regal-blue': "#0896FC"
      }, 
      screens: {
        "3xl": "1600px"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
