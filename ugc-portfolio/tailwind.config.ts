import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Paleta Kiraku — ivory, dark green, forest green e pink
        cream: "#f2f1d2",
        // Forest green — cor de ação (botões, CTAs, links, elementos interativos)
        brand: {
          50: "#f1f4f0",
          100: "#d7e1d5",
          200: "#bccfb8",
          300: "#a1be9b",
          400: "#85ad7d",
          500: "#64a557",
          600: "#518747",
          700: "#3f6837",
          800: "#2d4a27",
          900: "#1a2c17",
        },
        // Dark green — texto principal, headers, rodapé
        ink: {
          900: "#152827",
          800: "#1e3a38",
          700: "#264b49",
        },
        // Pink (dusty rose) — cor de autoridade (títulos de destaque, elementos de marca)
        wine: {
          50: "#f7eeee",
          100: "#ecd4d6",
          200: "#e2b9bc",
          300: "#d99da2",
          400: "#d08186",
          500: "#c5686e",
          600: "#ba4d55",
          700: "#a43f46",
          800: "#89353b",
          900: "#6e2b2f",
        },
        // Forest green claro/sage — cor orgânica (ícones, tags de categoria)
        olive: {
          50: "#eff1ee",
          100: "#d8e0d7",
          200: "#c1d0be",
          300: "#a9c0a5",
          400: "#91b18b",
          500: "#79a370",
          600: "#648f5c",
          700: "#53764c",
          800: "#415d3c",
          900: "#30442c",
        },
        // Pink claro — acento suave (uso moderado)
        blush: {
          50: "#fcf8f8",
          100: "#f5e9ea",
          200: "#efdadc",
          300: "#e9cacc",
          400: "#e4b9bc",
          500: "#e7a1a6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
        signature: ["var(--font-signature)", "cursive"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(67, 59, 12, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
