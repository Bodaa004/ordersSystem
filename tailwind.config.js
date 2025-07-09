/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary': '#A6252A ',
        'darkMode-primary': '#D75458',

        'primary-light': '#FBEAEA;',
        'primary-dark': '#741C21;',
        'secondary': '#FF668B',
        'darkMode-secondary': '#FFC2D0',
        'secondary-dark': '#71717A',
        'secondary-light': '#E65073',
        'shopping': '#8C52FF',
        'dark-shopping': '#CD2E33',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
