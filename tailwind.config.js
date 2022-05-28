module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      markpro: ["Mark Pro"],
      dinw05: ["DINNextLTW05"],
      dinw05Bold: ["DINNextLTW05Bold"],
      tungstenBold: ["Tungsten-Bold"],
      dinw1g: ["DIN Next W1G"],
      ffmark: ["MarkSCOffcW05"],
      valorant: ["Valorant"],
      Opificio_Bold: ["Opificio_Bold"],
    },
    extend: {
      colors: {
        "valorant-red": "#fa4454",
        "valorant-white": "#ece8e1",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
