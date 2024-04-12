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
        "large-star": "url('/bg_square_large.webp')",
        "small-star": "url('/bg_square_small.webp')",
      },
      fontSize: {
        '3xl': '3rem',
        'xs': '14px',
      }
    },
  },
  plugins: [],
};
export default config;
