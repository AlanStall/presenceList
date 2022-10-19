/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {},
    screens: {
      'xxs': '160px',
      'xs2': '260px',
      'xs': '320px',
      'ssm': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2000px',
      'tall': { 'raw': '(min-height: 950px)' }
    },
    fontSize: {
      'xxs': '0.50rem',
    }
  },

  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
