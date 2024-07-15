// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#5d5d5d',
        customLightBlue: '#eff8ff',
        customBlue: '#42677d',
        customDarkBlue: '#335271',
        basicButtonColor: '#70a4e4',
        sky: '#eff8ff',
      },
    },
  },
  plugins: [],
};
