/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pinkishWhite: '#fcf4f4',
        darkishGreen: '#012f32',
        tealBlue: '#227988',
        peach: '#FF6969',
      },
    },
  },
  plugins: [],
};
