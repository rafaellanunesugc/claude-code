import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // PALETA NEUTRA PROVISÓRIA — trocar pela paleta da Júlia quando ela mandar.
        // Os nomes (brand, ink, wine, olive, blush, cream) são só "papéis" usados
        // nos componentes; basta trocar os valores hex aqui.
        cream: "#f6f3ef", // fundo suave de seções
        // Cor de ação (botões, CTAs, links)
        brand: {
          50: "#f4f2f0",
          100: "#e6e1dc",
          200: "#d2c9c1",
          300: "#b9ada2",
          400: "#9d8e81",
          500: "#857565",
          600: "#6e5f51",
          700: "#584b40",
          800: "#433930",
          900: "#2e2721",
        },
        // Texto principal, headers, rodapé
        ink: {
          900: "#1f1d1b",
          800: "#2f2c29",
          700: "#4a4541",
        },
        // Cor de destaque (títulos em itálico, negritos, citações)
        wine: {
          50: "#f8f1ef",
          100: "#eedcd7",
          200: "#e1c3bb",
          300: "#d2a89d",
          400: "#c28e80",
          500: "#b07566",
          600: "#995f51",
          700: "#7f4d41",
          800: "#653e35",
          900: "#4c2f28",
        },
        // Cor de apoio (selo de disponibilidade, ícones)
        olive: {
          50: "#f2f3ef",
          100: "#e0e3d9",
          200: "#c9cebd",
          300: "#b0b79e",
          400: "#98a081",
          500: "#808a68",
          600: "#697254",
          700: "#545b43",
          800: "#404534",
          900: "#2c3024",
        },
        // Acento suave
        blush: {
          50: "#fcf9f8",
          100: "#f6eeeb",
          200: "#efe1dc",
          300: "#e7d2cb",
          400: "#dfc2b9",
          500: "#d4ada1",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(31, 29, 27, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
