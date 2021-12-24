module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        mainColor: "#b5e48c",
        mainColorDk: "#76c893",
        accentColor: "#D3D3D3",
        accentColorDk: "#989898",
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "24px",
        6: "32px",
        7: "48px",
        8: "64px",
      },
      fontFamily: {
        defaultFont: ["Nunito"],
      },
      keyframes: {
        jump: {
          "0%": { top: "335px" },
          "30%": { top: "255px" },
          "50%": { top: "200px" },
          "80%": { top: "255px" },
          "100%": { top: "335px" },
        },
        slide: {
          "0%": { left: "960px" },
          "100%": { left: "-2px" },
        },
      },
      animation: {
        jump: "jump 0.3s linear",
        slide: "slide 1s linear infinite",
      },
    },
  },
  plugins: [],
};
