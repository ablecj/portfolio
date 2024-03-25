// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
  
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: '#000',
      },
      textColor: {
        dark: '#fff',
      },
    },
  },
  plugins: [],
};

