import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#faf7f2",
        // Coral — cor de ação (botões, CTAs, links, elementos interativos)
        brand: {
          50: "#fef7f3",
          100: "#fdece4",
          200: "#fbdac9",
          300: "#f9c7ae",
          400: "#f6b494",
          500: "#f4a179",
          600: "#f08a59",
          700: "#d97245",
          800: "#b85835",
          900: "#8f4227",
        },
        // Marrom escuro amadeirado — texto principal, headers, rodapé
        ink: {
          900: "#433b0c",
          800: "#5c522a",
          700: "#756a3f",
        },
        // Vinho — cor de autoridade (títulos de destaque, elementos de marca)
        wine: {
          50: "#f7e9ea",
          100: "#f0d3d6",
          200: "#dba0a6",
          300: "#c56d76",
          400: "#a4404b",
          500: "#8a2632",
          600: "#741c28",
          700: "#601722",
          800: "#4c121a",
          900: "#380d13",
        },
        // Oliva/mustarda — cor orgânica (ícones, tags de categoria)
        olive: {
          50: "#f7f8e6",
          100: "#eef0c9",
          200: "#dde190",
          300: "#ccd25c",
          400: "#bdc946",
          500: "#b3b939",
          600: "#9a9f2f",
          700: "#7d8226",
          800: "#5f631d",
          900: "#454813",
        },
        // Rosa claro — acento suave (uso moderado)
        blush: {
          50: "#fff6f7",
          100: "#ffe9ec",
          200: "#ffd2d9",
          300: "#ffb3bf",
          400: "#ff8fa1",
          500: "#f76a80",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(67, 59, 12, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
