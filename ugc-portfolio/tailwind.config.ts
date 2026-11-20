import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Duas cores do link da bio (definidas em src/app/page.tsx): a principal e o creme.
        duo: {
          DEFAULT: "rgb(var(--duo) / <alpha-value>)",
          off: "rgb(var(--duo-off) / <alpha-value>)",
        },
        // Creme quente — fundo principal das seções
        cream: "#FBF4E9",
        // Café — acento escuro (cards de destaque, mentoria)
        coffee: {
          700: "#4A3222",
          800: "#3A2819",
          900: "#2B1D12",
        },
        // Marrom — cor de ação (botões, CTAs, links, elementos interativos)
        brand: {
          50: "#F4ECE2",
          100: "#E8D6C0",
          200: "#D4B690",
          300: "#BE9568",
          400: "#A97A4A",
          500: "#8F6238",
          600: "#6E4A2A",
          700: "#573A1F",
          800: "#3F2916",
          900: "#2B1D12",
        },
        // Marrom escuro — texto principal, headers, rodapé
        ink: {
          900: "#2B1D12",
          800: "#3A2819",
          700: "#4A3222",
        },
        // Bordô — cor de autoridade (títulos de destaque, elementos de marca)
        wine: {
          50: "#f9f0f2",
          100: "#f2d9dd",
          200: "#e8b0ba",
          300: "#dd7e91",
          400: "#d34564",
          500: "#b42244",
          600: "#911836",
          700: "#74112b",
          800: "#520f22",
          900: "#370c19",
        },
        // Marrom claro — badges e detalhes suaves
        olive: {
          50: "#F1E7DA",
          100: "#E2CFB8",
          200: "#CBAD8C",
          300: "#B18D68",
          400: "#96714E",
          500: "#7C5A3D",
          600: "#664A33",
          700: "#53392A",
          800: "#3F2A1E",
          900: "#2C1D14",
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
        display: ["var(--font-display)", "sans-serif"],
        name: ["var(--font-name)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(67, 59, 12, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
