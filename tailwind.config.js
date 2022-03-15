module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        MatLight: "#b4d4d4",
        MatBlue: "#649494",
        MatOrange: "#d46c64",
        MatRed: "#b3243c",
        MatDark: "#646464",
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fade: "fade 1s ease-out",
      },
    },
    variants: {
      padding: ["first"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
