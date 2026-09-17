import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#0c0e12",
          900: "#14171d",
          850: "#1b2028",
          800: "#222832",
          700: "#2f3846",
          600: "#414d5e",
        },
        bronze: {
          50: "#fdf8ee",
          100: "#faefd5",
          200: "#f5dda8",
          300: "#efc674",
          400: "#e6ab41",
          500: "#c78d22",
          600: "#ad6f19",
          700: "#895017",
          800: "#704019",
          900: "#5d3618",
        },
        titanium: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
        },
      },
      fontFamily: {
        vazir: ["Vazirmatn", "system-ui", "-apple-system", "sans-serif"],
        inter: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
