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
  },
  daisyui: {
    themes: [
      {
        ayudinga: {
          primary: "#5c3cb8",

          secondary: "#9078d3",

          accent: "#2c2071",

          neutral: "#1b1d19",

          "base-100": "#ffffff",

          info: "#a21caf",

          success: "#00a76b",

          warning: "#c45000",

          error: "#f8204c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
