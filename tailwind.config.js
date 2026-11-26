/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F0F7F4',
          100: '#DBEEE5',
          200: '#B8DECB',
          300: '#8FBFA9',
          400: '#5F9F83',
          500: '#3A7D63',
          600: '#257056',
          700: '#1B523F',
          800: '#143D2E',
          900: '#0D2B20',
          950: '#071812',
        },
        ivory: {
          50: '#FDFCF9',
          100: '#F8F6F0',
          200: '#EEEBE1',
          300: '#E2DDD0',
          400: '#D5CFC0',
          500: '#C7C0B0',
        },
        bronze: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        charcoal: {
          900: '#121816',
          800: '#1E2623',
          700: '#2D3834',
          600: '#475450',
          500: '#5C6764',
          400: '#77827F',
          300: '#A3AAA8',
          200: '#C9CDCC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -5px rgba(13, 43, 32, .08), 0 4px 12px -2px rgba(13, 43, 32, .04)',
        'premium-lg': '0 20px 40px -10px rgba(13, 43, 32, .12), 0 8px 16px -4px rgba(13, 43, 32, .06)',
        'subtle': '0 2px 10px rgba(0, 0, 0, .04)',
      }
    },
  },
  plugins: [],
}
