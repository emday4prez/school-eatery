/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#f59e0b',
          secondary: '#06b6d4',
          accent: '#b45309',
          neutral: '#414558',
          'base-100': '#282A36',
          info: '#8BE9FD',
          success: '#50FA7B',
          warning: '#F1FA8C',
          error: '#FF5555',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
