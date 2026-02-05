/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#00A651',
          orange: '#F7931D',
          pink: '#EC008C',
          purple: '#662D91',
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00A651 0%, #F7931D 35%, #EC008C 70%, #662D91 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #008c44 0%, #d67d15 35%, #c40073 70%, #4d216d 100%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}