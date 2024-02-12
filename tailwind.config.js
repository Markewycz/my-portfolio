/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{html,js,jsx,tsx}'],

  theme: {
    colors: {
      'bg-intro': '#080807',
      'lighter-black': '#151412',
      'dark-brown': '#393632',

      olive: '#AFAF9D',
      'dark-olive': '#8C8C73',
      bg: '#E6E6E1',

      'text-dark': '#393632',
      'text-lighter': '#6B645C',
      'text-intro': '#C9C9B3',
      'text-intro-light': '#DEDED7',
    },
    extend: {
      fontFamily: {
        sans: [
          'Overused\\ Grotesk',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe\\ UI',
          'Helvetica',
          'Arial',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
