/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1366px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1100px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '900px' },
      // => @media (max-width: 767px) { ... }
      smd: { max: '767px' },
      // => @media (max-width: 767px) { ... }
      sm: { max: '565px' },
      // => @media (max-width: 639px) { ... }
      esm: { max: '300px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

