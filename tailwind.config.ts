import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      colors: {
        accent: "#6366F1",
        "accent-light": "#818CF8",
      },
    },
  },
  plugins: [],
};

export default config;
