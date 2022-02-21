module.exports = {
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
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
