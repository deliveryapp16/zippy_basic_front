/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbonGray: "#383939",
        lightGray: "#B5B5B5",
        cream: "#F4F4F4",
        white: "#FFFFFF",
        emeraldGreen: "#149C68",
        limeGreen: "#38C958",
        yellowGreen: "#AEE637",
        tomatoRed: "#C23B22",
        mintGreen: "#DEF2EA",
        steelBlue: "#3A6EA5",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
