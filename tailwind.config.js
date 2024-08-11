/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "150px", max: "349px" },
        lm: { min: "350px", max: "479px" },
        gm: { min: "480px", max: "629px" },
        sm: "630px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1400px",
      },
      fontFamily: {
        Lemonada: ["Lemonada", "cursive"],
        Ledger: ["Ledger", "serif"],
        LexendExa: ["Lexend Exa"],
        Blinker: ["Blinker"],
        Noto: ["Noto Sans"],
      },
      colors: {
        // Ajoutez vos couleurs personnalisées ici
        allostoreRouge: "#A7001E",
        allostorerougeClair: "#A74A5B",
        allostoreGris: "#516079",
        allostoreBeige: "#FEFEFF",
        allostoreSaumon: " #e5e7e6",
        allostoreBlanc: "#FEFEFF",
        allostoreBleu: "#2E3244",
        allostoreBleuClair: "#575A69",
      },
      fontSize: {
        xxs: "0.65rem",
        xxxs: "0.55rem",
      },
      height: {
        18: "4.5rem",
      },
      width: {
        18: "4.5rem",
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ["responsive", "hover", "focus"],
      transitionDuration: ["responsive", "hover", "focus"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari, and Opera */,
        },
      });
    },
  ],
};
