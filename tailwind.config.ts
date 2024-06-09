import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9e7aff",

          secondary: "#35185A",

          accent: "#00d1ff",

          neutral: "#4b5563",

          "base-100": "#090014",

          info: "#00d1ff",

          success: "#4ee844",

          warning: "#ec6700",

          error: "#dc2626",
        },
      },
    ],
  },
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(200px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 1s cubic-bezier(0.4, 0.0, 0.2, 1)",
        fadeInDelay: "fadeIn 2s cubic-bezier(0.4, 0.0, 0.2, 1) ",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
