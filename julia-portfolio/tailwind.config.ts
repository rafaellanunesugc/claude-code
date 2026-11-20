import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Paleta da Júlia: #2E1A10 · #795239 · #B0947A · #E1D3C1 · #FFFBF4
        // Os nomes (ink, wine, brand, olive, cream, paper) são "papéis" usados nos
        // componentes; para ajustar as cores, basta mexer nos valores aqui.
        paper: "#FFFBF4", // off-white — fundo principal
        cream: "#E1D3C1", // bege — fundo das seções alternadas
        // Marrom escuro — texto principal, seções escuras, rodapé
        ink: {
          900: "#2E1A10",
          800: "#3F2A1D",
          700: "#5C4434",
        },
        // Marrom médio + caramelo — destaques (títulos em itálico, rótulos, contato)
        wine: {
          50: "#F7F0E8",
          100: "#E1D3C1",
          200: "#CDB9A2",
          300: "#B0947A",
          400: "#9C7C62",
          500: "#8C6A51",
          600: "#835E45",
          700: "#795239",
          800: "#5E3F2B",
          900: "#45301F",
        },
        brand: {
          50: "#F7F0E8",
          100: "#E1D3C1",
          200: "#CDB9A2",
          300: "#B0947A",
          400: "#9C7C62",
          500: "#8C6A51",
          600: "#835E45",
          700: "#795239",
          800: "#5E3F2B",
          900: "#45301F",
        },
        // Caramelo — selo de disponibilidade e barras de métricas
        olive: {
          500: "#B0947A",
          600: "#8C6A51",
          700: "#795239",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(46, 26, 16, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
