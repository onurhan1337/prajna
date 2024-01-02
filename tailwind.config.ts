import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    animation: {
      pop: "pop 0.6s ease-out",
    },
    keyframes: {
      pop: {
        "0%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.1)" },
        "100%": { transform: "scale(1)" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
