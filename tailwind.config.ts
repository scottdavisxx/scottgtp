/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        sans: ['Montserrat', 'sans'],
        serif: ['Roboto Slab', 'serif'],
      },
      fontSize: {
      },
      screens: {
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
