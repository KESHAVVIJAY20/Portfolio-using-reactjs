const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      dropShadow:{
        'blue-lg' : '0 10px 15px -3px rgba(0, 0, 255, 0.1)'
      }
    },
  },
  plugins: [flowbite.plugin()],
};
