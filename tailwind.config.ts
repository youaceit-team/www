import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#3d3d3d",
        black: "#0d0d0d",
        gray: "#252525",
        lightGray: "#f3f3f3",
        yellow: "#ffd024",
        orange: "#fe4a23",
        blue: "",
        green: "#47c383",
        purple: "#8c5dfe"
      },
      fontFamily: {
        sans: "var(--font-roboto), sans-serif",
        serif: "var(--font-roboto-serif), serif",
      },
    },
  },
  plugins: [],
};

export default config;
