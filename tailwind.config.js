/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        notoSansKr: ["Noto Sans KR", "sans-serif"],
        baiJamjuree: ["Bai Jamjuree", "sans-serif"],
      },
      keyframes: {
        "spin-right-to-left": {
          " 0%": {
            transform: "rotate(0deg)",
          },
          " 100%": {
            transform: "rotate(-360deg)",
          },
        },
       /*  moveUp: {
          " 0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        }, */
        moveDown: {
          " 0%": {
            transform: "translateY(0%)",
          },
          " 100%": {
            transform: "translateY(10%)",
          },
          
          /* "50%": {
            transform: "translateY(10%)",
          }, */
        },
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "spin-right": "spin-right-to-left 30s linear infinite",
        moveUp: "moveDown 5s ease-in alternate-reverse infinite",
      
      },
    },
  },
  plugins: [],
};
