/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}" ],
  theme: {
    colors: {
      'primary': '#D5B942',
      'primary-70': '#E2CE7B',
      'primary-hover': '#AA9035',

      'secondary': '#89CAC3',
      'secondary-50': '#C4E5E1',
      'secondary-20': '#E7F5F3',
      'secondary-hover': '#75ACA6',

      'support-darkblue': '#0A2E42',
      'support-blue': '#0F425F',

      'standard-dark': '#393939',
      'standard-grey': '#999999',
      'standard-light': '#EBEBEB',
      'standard-lighter': '#F7F7F7',

      'white': '#FFFFFF',
      'warning': '#FF4242',
      'warning-hover': '#d92020',

      // for debugging
      'debug-red': '#f00',
      'debug-green': '#0f0',
      'debug-yellow': '#ff0',
      'debug-blue': '#00f',
      'debug-magenta': '#f0f',
      'debug-cyan': '#0ff',
    },
    fontFamily: {
      'open-sans': 'Open Sans, sans-serif',
      'uni-neue': 'Uni Neue, sans-serif',
    },
    extend: {},
  },
  plugins: [],
}

