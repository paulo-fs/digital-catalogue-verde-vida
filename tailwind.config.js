/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      white: '#fff',
      gray: {
        900: '#2A2728',
        800: '#514D4E',
        700: '#7F7D7D',
        200: '#D4D6D4',
        100: '#F2F2F2'
      },
      green: {
        700: '#364F3B',
        500: '#527C50',
        300: '#A7D09D',
        100: '#FAFFF9',
      },
      orange: {
        700: '#E37D13',
        500: '#F7A857',
        300: '#FFE3C6',
        100: '#FFFDFB'
      },
      red: {
        800: '#8F2424',
        500: '#D14747',
        200: '#E99696'
      }
    }
  },
  plugins: [],
}
