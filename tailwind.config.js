/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#faf8f4',
        'off-white': '#f5f2ec',
        'warm-gray': '#e8e4dc',
        'mid-gray': '#b8b0a4',
        dark: '#2a2520',
        text: '#3d3730',
        muted: '#8a7f74',
        accent: {
          DEFAULT: '#c17f4a',
          light: '#f0e6d8',
        },
        teal: {
          DEFAULT: '#7a9e8e',
          light: '#e4ede9',
        },
      },
    },
  },
  plugins: [],
}
