/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#E7B400",
        "primary-paragraph":"#69697B",
      },
      backgroundImage:{
        heroHexPattern:"/img/HexPattern.svg",
        honeyFalling:"url('/img/Honey_FallingCoins_Border_Gold.svg')",
      }
    },
  },
  plugins: [],
}
