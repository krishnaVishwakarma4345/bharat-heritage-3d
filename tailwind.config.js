/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'bg-bronze',
    'bg-ivory',
    'bg-sandstone',
    'text-bronze',
    'text-ivory',
    'text-sandstone',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        sandstone: {
          DEFAULT: '#c77b30',
          50: '#fff8ed',
          100: '#fcebd4',
          200: '#f7d3a9',
          300: '#efb477',
          400: '#df914a',
          500: '#c77b30',
          600: '#a95e24',
          700: '#87451f',
          800: '#6d3920',
          900: '#5a301d',
        },
        ivory: {
          DEFAULT: '#fbf6ec',
          50: '#fffdf9',
          100: '#fbf6ec',
          200: '#f5ead8',
          300: '#ead9bd',
        },
        bronze: {
          DEFAULT: '#7c4a2d',
          50: '#f9f4f0',
          100: '#eee2d9',
          200: '#dcc5b5',
          300: '#c4a18a',
          400: '#a97859',
          500: '#7c4a2d',
          600: '#683c27',
          700: '#563322',
          800: '#45291d',
          900: '#382219',
        },
        ink: {
          DEFAULT: '#2e241f',
          50: '#f8f6f5',
          100: '#ece8e5',
          500: '#6f6159',
          700: '#493b34',
          900: '#2e241f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      boxShadow: {
        heritage: '0 18px 45px -24px rgba(69, 41, 29, 0.45)',
      },
      backgroundImage: {
        'sandstone-glow': 'radial-gradient(circle at top right, rgba(199, 123, 48, 0.18), transparent 42%)',
      },
    },
  },
  plugins: [],
}
